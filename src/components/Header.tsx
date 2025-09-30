import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, User, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Page } from '../types/navigation';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { items } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  const navigation: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'Blog', page: 'blog' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-cyberpunk-accent-cyan/20 bg-cyberpunk-primary-bg/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="w-10 h-10 mr-3 group-hover:scale-110 transition-transform">
              <img
                src="/img/logo-meowlabs.webp" 
                alt="Meow Labs Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to SVG if WebP fails
                  e.currentTarget.src = "/img/logo-meowlabs.svg";
                }}
              />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              Meow Labs
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => {
              const isActive =
                item.page === currentPage ||
                (item.page === 'blog' && (currentPage === 'blog' || currentPage === 'blog-post'));

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.page)}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyberpunk-accent-cyan'
                      : 'text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleNavigate('cart')}
              className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl border border-cyberpunk-accent-cyan/40 text-cyberpunk-accent-cyan hover:bg-cyberpunk-accent-cyan/10 transition-colors"
              aria-label="Buka keranjang"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyberpunk-accent-pink text-white text-xs rounded-full flex items-center justify-center shadow-cyberpunk-pink">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {isAuthenticated ? (
              <button
                onClick={() => handleNavigate('account')}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-xl bg-cyberpunk-secondary-bg/80 border border-cyberpunk-accent-cyan/30 text-cyberpunk-text-secondary hover:border-cyberpunk-accent-cyan/60 transition"
              >
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                ) : (
                  <User className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">Akun</span>
              </button>
            ) : (
              <button
                onClick={() => handleNavigate('login')}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-xl border border-cyberpunk-accent-cyan/40 text-cyberpunk-accent-cyan hover:bg-cyberpunk-accent-cyan/10 transition"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Login</span>
              </button>
            )}

            <button
              onClick={() => handleNavigate('contact')}
              className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-xl bg-cyberpunk-accent-cyan text-cyberpunk-dark font-semibold shadow-cyberpunk hover:shadow-cyberpunk-lg transition-transform hover:-translate-y-0.5"
            >
              Hubungi Kami
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-cyberpunk-accent-cyan/30 text-cyberpunk-accent-cyan"
              aria-label="Toggle navigasi"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-cyberpunk-primary-bg border-l border-cyberpunk-accent-cyan/20 shadow-2xl">
            <div className="flex items-center justify-between px-6 h-16 border-b border-cyberpunk-accent-cyan/20">
              <span className="text-base font-semibold text-white">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-cyberpunk-accent-cyan/30 text-cyberpunk-accent-cyan"
                aria-label="Tutup menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-4rem)]">
              <nav className="space-y-3">
                {navigation.map((item) => {
                  const isActive =
                    item.page === currentPage ||
                    (item.page === 'blog' && (currentPage === 'blog' || currentPage === 'blog-post'));

                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavigate(item.page)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                        isActive
                          ? 'border-cyberpunk-accent-cyan text-cyberpunk-accent-cyan bg-cyberpunk-accent-cyan/10'
                          : 'border-cyberpunk-accent-cyan/20 text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan hover:border-cyberpunk-accent-cyan/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="space-y-3">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-cyberpunk-accent-cyan text-cyberpunk-dark font-semibold shadow-cyberpunk"
                >
                  Hubungi Kami
                </button>

                {isAuthenticated ? (
                  <button
                    onClick={() => handleNavigate('account')}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl border border-cyberpunk-accent-cyan/40 text-white hover:border-cyberpunk-accent-cyan/60"
                  >
                    Kelola Akun
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavigate('login')}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl border border-cyberpunk-accent-cyan/40 text-cyberpunk-accent-cyan hover:bg-cyberpunk-accent-cyan/10"
                  >
                    Login / Daftar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;