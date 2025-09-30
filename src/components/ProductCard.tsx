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
      'ebook': 'bg-cyberpunk-accent-green/20 text-cyberpunk-accent-green border-cyberpunk-accent-green/30',
      'template': 'bg-cyberpunk-neon-teal/20 text-cyberpunk-neon-teal border-cyberpunk-neon-teal/30',
      'source-code': 'bg-cyberpunk-neon-pink/20 text-cyberpunk-neon-pink border-cyberpunk-neon-pink/30',
      'merchandise': 'bg-cyberpunk-neon-blue/20 text-cyberpunk-neon-blue border-cyberpunk-neon-blue/30'
    };
    return colors[category] || 'bg-cyberpunk-text-light/20 text-cyberpunk-text-light border-cyberpunk-text-light/30';
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="group relative card-cyberpunk-hover cursor-pointer hover:transform hover:scale-105 animate-cyberpunk-fade-in"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
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
        <h3 className="text-lg font-semibold text-cyberpunk-text-white mb-2 line-clamp-2 group-hover:text-cyberpunk-neon-teal transition-colors text-shadow-cyberpunk">
          {product.title}
        </h3>
        <p className="text-cyberpunk-text-light text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-cyberpunk-neon-teal/20 text-cyberpunk-neon-teal rounded-md border border-cyberpunk-neon-teal/30"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-xs px-2 py-1 bg-cyberpunk-neon-teal/20 text-cyberpunk-neon-teal rounded-md border border-cyberpunk-neon-teal/30">
              +{product.features.length - 2} more
            </span>
          )}
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-cyberpunk-text-white text-shadow-cyberpunk">
              {formatPrice(product.price)}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-cyberpunk-neon-teal fill-current" />
            <span className="text-sm text-cyberpunk-text-light">4.8</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="btn-cyberpunk-primary w-full animate-cyberpunk-glow-pulse"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;