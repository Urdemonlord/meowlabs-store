import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        localStorage.setItem('meowlabs_user', JSON.stringify(data.session.user));
        navigate('/account');
      } else {
        navigate('/login');
      }
    };
    handleSession();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Memproses login...</h1>
        <p className="text-cyberpunk-text-secondary">Sebentar ya, sedang menyambungkan akun Google Anda.</p>
      </div>
    </div>
  );
}
