import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { User, PurchaseHistory } from '../types/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  purchaseHistory: PurchaseHistory[];
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  fetchPurchaseHistory: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
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
        isLoading: false 
      };
    case 'SET_PURCHASE_HISTORY':
      return { ...state, purchaseHistory: action.payload };
    case 'LOGOUT':
      return { 
        user: null, 
        isAuthenticated: false, 
        isLoading: false,
        purchaseHistory: []
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    purchaseHistory: []
  });

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('meowlabs_user');
    if (savedUser) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(savedUser) });
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API call
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        createdAt: new Date().toISOString(),
        isVerified: true
      };
      
      localStorage.setItem('meowlabs_user', JSON.stringify(mockUser));
      dispatch({ type: 'SET_USER', payload: mockUser });
    }, 1000);
  };

  const register = async (name: string, email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API call
    setTimeout(() => {
      const mockUser: User = {
        id: Date.now().toString(),
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
        isVerified: false
      };
      
      localStorage.setItem('meowlabs_user', JSON.stringify(mockUser));
      dispatch({ type: 'SET_USER', payload: mockUser });
    }, 1000);
  };

  const logout = () => {
    localStorage.removeItem('meowlabs_user');
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = async (data: Partial<User>) => {
    if (state.user) {
      const updatedUser = { ...state.user, ...data };
      localStorage.setItem('meowlabs_user', JSON.stringify(updatedUser));
      dispatch({ type: 'SET_USER', payload: updatedUser });
    }
  };

  const fetchPurchaseHistory = async () => {
    // Mock purchase history
    const mockHistory: PurchaseHistory[] = [
      {
        id: '1',
        userId: state.user?.id || '1',
        items: [
          {
            productId: '1',
            productTitle: 'Panduan Lengkap AI untuk Pemula',
            productImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
            price: 99000,
            quantity: 1,
            isDigital: true
          }
        ],
        total: 99000,
        status: 'completed',
        paymentMethod: 'QRIS',
        purchaseDate: '2025-01-15T10:30:00Z',
        downloadLinks: [
          {
            productId: '1',
            url: 'https://download.meowlabs.store/ai-guide.pdf',
            expiresAt: '2025-02-15T10:30:00Z',
            downloadCount: 2,
            maxDownloads: 5
          }
        ]
      }
    ];
    
    dispatch({ type: 'SET_PURCHASE_HISTORY', payload: mockHistory });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      updateProfile,
      fetchPurchaseHistory
    }}>
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