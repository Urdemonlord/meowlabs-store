import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Download, Star, Check, Shield, Zap, Palette } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBackToProducts: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBackToProducts }) => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedOptions, setSelectedOptions] = useState<{
    size?: string;
    color?: string;
    material?: string;
  }>({});

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

  const handleAddToCart = () => {
    addToCart(product, selectedOptions);
  };

  // Mock additional images for demonstration
  const images = [
    product.image,
    'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBackToProducts}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Kembali ke Produk
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === image ? 'border-purple-500' : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category */}
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                {getCategoryName(product.category)}
              </span>
              {product.isDigital && (
                <div className="flex items-center text-green-400 text-sm">
                  <Download className="w-4 h-4 mr-1" />
                  Digital Download
                </div>
              )}
              {product.printOnDemand && (
                <div className="flex items-center text-blue-400 text-sm">
                  <Palette className="w-4 h-4 mr-1" />
                  Print on Demand
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300">(4.8) • 234 reviews</span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-white">
              {formatPrice(product.price)}
            </div>

            {/* Description */}
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">{product.description}</p>
              <p>
                Produk ini telah terbukti membantu ribuan developer dan pebisnis dalam mencapai tujuan mereka. 
                Dengan kualitas premium dan dukungan teknis yang responsive, investasi Anda akan sangat berharga 
                untuk mengembangkan skill dan bisnis.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Yang Anda Dapatkan:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Print on Demand Options */}
            {product.printOnDemand && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Pilih Opsi:</h3>
                
                {/* Size Selection */}
                {product.printOnDemand.sizes.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Ukuran</label>
                    <div className="flex flex-wrap gap-2">
                      {product.printOnDemand.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedOptions({...selectedOptions, size})}
                          className={`px-4 py-2 border rounded-lg transition-colors ${
                            selectedOptions.size === size
                              ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                              : 'border-gray-600 text-gray-300 hover:border-gray-500'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {product.printOnDemand.colors.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Warna</label>
                    <div className="flex flex-wrap gap-2">
                      {product.printOnDemand.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedOptions({...selectedOptions, color})}
                          className={`px-4 py-2 border rounded-lg transition-colors ${
                            selectedOptions.color === color
                              ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                              : 'border-gray-600 text-gray-300 hover:border-gray-500'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Material Selection */}
                {product.printOnDemand.materials.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Material</label>
                    <div className="flex flex-wrap gap-2">
                      {product.printOnDemand.materials.map(material => (
                        <button
                          key={material}
                          onClick={() => setSelectedOptions({...selectedOptions, material})}
                          className={`px-4 py-2 border rounded-lg transition-colors ${
                            selectedOptions.material === material
                              ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                              : 'border-gray-600 text-gray-300 hover:border-gray-500'
                          }`}
                        >
                          {material}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <Shield className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <div className="text-white font-medium">Garansi 30 Hari</div>
                  <div className="text-gray-400 text-sm">Uang kembali jika tidak puas</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <Zap className="w-6 h-6 text-purple-400 mr-3" />
                <div>
                  <div className="text-white font-medium">Akses Selamanya</div>
                  <div className="text-gray-400 text-sm">Download kapan saja</div>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Tambah ke Keranjang
              </button>
              
              <button className="w-full px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-colors">
                Beli Sekarang
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-700">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>✓ Checkout aman dengan SSL</span>
                <span>✓ Support 24/7</span>
                <span>✓ Update gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;