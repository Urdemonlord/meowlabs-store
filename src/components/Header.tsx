import React from 'react';
import { ShoppingCart, Menu, User } from 'lucide-react';
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
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  const navigation: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'Product Detail Page', page: 'product-detail' },
    { label: 'Checkout', page: 'checkout' },
    { label: 'Blog', page: 'blog' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cyberpunk-accent-cyan/20 bg-cyberpunk-primary-bg/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyberpunk-accent-cyan to-cyberpunk-accent-pink flex items-center justify-center mr-3 shadow-cyberpunk">
              <span className="text-cyberpunk-dark font-bold text-sm tracking-widest">ML</span>
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
                  onClick={() => onNavigate(item.page)}
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
              onClick={() => onNavigate('cart')}
              className="relative hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-xl border border-cyberpunk-accent-cyan/40 text-cyberpunk-accent-cyan hover:bg-cyberpunk-accent-cyan/10 transition-colors"
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
                onClick={() => onNavigate('account')}
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
                onClick={() => onNavigate('login')}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-xl border border-cyberpunk-accent-cyan/40 text-cyberpunk-accent-cyan hover:bg-cyberpunk-accent-cyan/10 transition"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Login</span>
              </button>
            )}

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-cyberpunk-accent-cyan text-cyberpunk-dark font-semibold shadow-cyberpunk hover:shadow-cyberpunk-lg transition-transform hover:-translate-y-0.5"
            >
              Hubungi Kami
            </button>

            {/* Mobile menu */}
            <button className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-cyberpunk-accent-cyan/30 text-cyberpunk-accent-cyan">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;