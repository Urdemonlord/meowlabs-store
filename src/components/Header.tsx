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
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">ML</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              MeowLabs.store
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'home' 
                  ? 'text-purple-400 bg-purple-500/10' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'products' 
                  ? 'text-purple-400 bg-purple-500/10' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Produk
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'blog' || currentPage === 'blog-post'
                  ? 'text-purple-400 bg-purple-500/10' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              About
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              Contact
            </button>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User Account */}
            {isAuthenticated ? (
              <button 
                onClick={() => onNavigate('account')}
                className="relative p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
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
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-colors"
              >
                Login
              </button>
            )}

            {/* Mobile menu */}
            <button className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;