import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { items } = useCart();
  const { user, isAuthenticated } = useAuth();
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-cyberpunk-primary-bg/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyberpunk-accent-pink to-cyberpunk-accent-cyan rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-cyberpunk">
              <span className="text-white font-bold text-sm">ML</span>
            </div>
            <span className="text-xl font-bold text-cyberpunk-gradient-cyan text-shadow-cyberpunk">
              MeowLabs.store
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'home'
                  ? 'text-white bg-white/10 text-shadow-cyberpunk'
                  : 'text-cyberpunk-text-secondary hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'products'
                  ? 'text-white bg-white/10 text-shadow-cyberpunk'
                  : 'text-cyberpunk-text-secondary hover:text-white'
              }`}
            >
              Produk
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'blog' || currentPage === 'blog-post'
                  ? 'text-white bg-white/10 text-shadow-cyberpunk'
                  : 'text-cyberpunk-text-secondary hover:text-white'
              }`}
            >
              Blog
            </button>
            <button className="text-cyberpunk-text-secondary hover:text-white px-3 py-2 text-sm font-medium">
              About
            </button>
            <button className="text-cyberpunk-text-secondary hover:text-white px-3 py-2 text-sm font-medium">
              Contact
            </button>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-cyberpunk-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-cyberpunk-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-cyberpunk-accent-pink to-cyberpunk-accent-cyan text-white text-xs rounded-full flex items-center justify-center shadow-cyberpunk">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User Account */}
            {isAuthenticated ? (
              <button
                onClick={() => onNavigate('account')}
                className="relative p-2 text-cyberpunk-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </button>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="btn-cyberpunk-outline"
              >
                Login
              </button>
            )}

            {/* Mobile menu */}
            <button className="md:hidden p-2 text-cyberpunk-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;