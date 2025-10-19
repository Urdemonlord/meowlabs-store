// 🟦 FRONTEND: src/context/AuthContext.tsx
import React, { createContext, useContext, useReducer, ReactNode, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User as AppUser, PurchaseHistory } from '../types/user';

interface AuthState {
  user: AppUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  purchaseHistory: PurchaseHistory[];
}

interface AuthContextType extends AuthState {
  // actions utama
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<AppUser>) => Promise<void>;
  fetchPurchaseHistory: () => Promise<void>;
  // 🆕 OAuth
  loginWithProvider: (provider: 'google' | 'facebook') => Promise<void>;
  // 🆕 error dari operasi auth
  lastError: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: AppUser | null }
  | { type: 'SET_PURCHASE_HISTORY'; payload: PurchaseHistory[] }
  | { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      };
    case 'SET_PURCHASE_HISTORY':
      return { ...state, purchaseHistory: action.payload };
    case 'LOGOUT':
      return {
        user: null,
        isAuthenticated: false,
        isLoading: false,
        purchaseHistory: [],
      };
    default:
      return state;
  }
};

// Mapper dari Supabase user -> tipe AppUser milikmu
function mapSupabaseUserToAppUser(su: any): AppUser {
  return {
    id: su.id,
    name: su.user_metadata?.full_name ?? su.user_metadata?.name ?? su.email?.split('@')[0] ?? 'User',
    email: su.email,
    avatar: su.user_metadata?.avatar_url,
    createdAt: su.created_at,
    isVerified: !!su.email_confirmed_at,
  };
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    purchaseHistory: [],
  });

  // 🆕 simpan error terakhir
  const [lastError, setLastError] = useState<string | null>(null);

  // Sinkronisasi session Supabase saat load & saat berubah
  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      const su = data.session?.user ?? null;
      if (su) {
        dispatch({ type: 'SET_USER', payload: mapSupabaseUserToAppUser(su) });
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      const su = session?.user ?? null;
      dispatch({ type: 'SET_USER', payload: su ? mapSupabaseUserToAppUser(su) : null });
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  // Helper: normalisasi pesan error
  const mapErr = (m?: string | null) =>
    !m
      ? 'Terjadi kesalahan. Coba lagi.'
      : m.toLowerCase().includes('invalid login credentials')
      ? 'Email atau password salah.'
      : m;

  // ===== Actions =====
  const login = async (email: string, password: string) => {
    setLastError(null);
    dispatch({ type: 'SET_LOADING', payload: true });
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLastError(mapErr(error.message));
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
    if (data.user) dispatch({ type: 'SET_USER', payload: mapSupabaseUserToAppUser(data.user) });
  };

  const register = async (name: string, email: string, password: string) => {
    setLastError(null);
    dispatch({ type: 'SET_LOADING', payload: true });
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setLastError(mapErr(error.message));
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
    if (data.user) dispatch({ type: 'SET_USER', payload: mapSupabaseUserToAppUser(data.user) });
  };

  const loginWithProvider = async (provider: 'google' | 'facebook') => {
    setLastError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: { prompt: 'select_account' },
      },
    });
    if (error) {
      setLastError(mapErr(error.message));
      throw error;
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    dispatch({ type: 'LOGOUT' });
  };

  // Update sederhana ke user_metadata (nama/avatar). Untuk data profil kompleks, idealnya lewat backend + tabel profiles.
  const updateProfile = async (data: Partial<AppUser>) => {
    setLastError(null);
    const { data: session } = await supabase.auth.getSession();
    if (!session.session?.user) throw new Error('Belum login');

    const payload: Record<string, any> = { ...session.session.user.user_metadata };
    if (typeof data.name === 'string') payload.full_name = data.name;
    if (typeof data.avatar === 'string') payload.avatar_url = data.avatar;

    const { data: upd, error } = await supabase.auth.updateUser({ data: payload });
    if (error) {
      setLastError(mapErr(error.message));
      throw error;
    }
    if (upd?.user) dispatch({ type: 'SET_USER', payload: mapSupabaseUserToAppUser(upd.user) });
  };

  // Ambil riwayat pembelian dari backend (token Supabase di header)
  const fetchPurchaseHistory = async () => {
    setLastError(null);
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) throw new Error('Belum login');

    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/purchases`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const text = await res.text();
      setLastError(`Gagal memuat riwayat: ${res.status} - ${text}`);
      throw new Error(text);
    }

    const json = await res.json();
    dispatch({ type: 'SET_PURCHASE_HISTORY', payload: (json?.purchases ?? []) as PurchaseHistory[] });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        updateProfile,
        fetchPurchaseHistory,
        loginWithProvider,   // 🆕 tersedia untuk Login.tsx
        lastError,           // 🆕 bisa ditampilkan di UI
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
