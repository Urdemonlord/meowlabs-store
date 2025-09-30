import React from 'react';
import { ShoppingCart, Download, Star, Palette } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getCategoryName = (category: string) => {
    const categoryNames: { [key: string]: string } = {
      'ebook': 'Ebook',
      'template': 'Template',
      'source-code': 'Source Code',
      'merchandise': 'Merchandise'
    };
    return categoryNames[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'ebook': 'bg-green-500/20 text-green-400 border-green-500/30',
      'template': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'source-code': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'merchandise': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(product.category)}`}>
          {getCategoryName(product.category)}
        </div>

        {/* Digital Badge */}
        {product.isDigital && (
          <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full">
            <Download className="w-4 h-4 text-white" />
          </div>
        )}

        {/* Print on Demand Badge */}
        {product.printOnDemand && (
          <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full">
            <Palette className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md">
              +{product.features.length - 2} more
            </span>
          )}
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-white">
              {formatPrice(product.price)}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-300">4.8</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;