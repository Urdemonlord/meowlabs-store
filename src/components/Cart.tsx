import React from 'react';
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  const { items, total, updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cyberpunk-primary-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-8 bg-cyberpunk-secondary-bg rounded-full flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-cyberpunk-text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Keranjang Kosong</h2>
            <p className="text-cyberpunk-text-secondary mb-8">Belum ada produk yang ditambahkan ke keranjang</p>
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors">
              Mulai Belanja
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyberpunk-primary-bg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Keranjang Belanja</h1>
          <p className="text-cyberpunk-text-secondary mt-2">{items.length} item dalam keranjang</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.product.id}
                className="bg-gradient-to-r from-cyberpunk-secondary-bg/60 to-cyberpunk-primary-bg/60 rounded-2xl p-6 border border-cyberpunk-accent-cyan/20"
              >
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate">
                      {item.product.title}
                    </h3>
                    <p className="text-cyberpunk-text-secondary text-sm mt-1 line-clamp-2">
                      {item.product.description}
                    </p>
                    {item.selectedOptions && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.selectedOptions.size && (
                          <span className="px-2 py-1 bg-cyberpunk-secondary-bg/50 text-cyberpunk-text-secondary rounded text-xs">
                            Size: {item.selectedOptions.size}
                          </span>
                        )}
                        {item.selectedOptions.color && (
                          <span className="px-2 py-1 bg-cyberpunk-secondary-bg/50 text-cyberpunk-text-secondary rounded text-xs">
                            Color: {item.selectedOptions.color}
                          </span>
                        )}
                        {item.selectedOptions.material && (
                          <span className="px-2 py-1 bg-cyberpunk-secondary-bg/50 text-cyberpunk-text-secondary rounded text-xs">
                            Material: {item.selectedOptions.material}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="text-purple-400 font-semibold mt-2">
                      {formatPrice(item.product.price)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end space-y-3">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-cyberpunk-text-secondary hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-center space-x-2 bg-cyberpunk-secondary-bg/50 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-cyberpunk-secondary-bg/70 rounded"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="w-8 text-center text-white font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-cyberpunk-secondary-bg/70 rounded"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-cyberpunk-secondary-bg/60 to-cyberpunk-primary-bg/60 rounded-2xl p-6 border border-cyberpunk-accent-cyan/20 sticky top-8">
              <h3 className="text-xl font-semibold text-white mb-6">Ringkasan Pesanan</h3>
              
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-cyberpunk-text-secondary truncate pr-2">
                      {item.product.title} × {item.quantity}
                    </span>
                    <span className="text-white font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-cyberpunk-accent-cyan/25 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total</span>
                  <span className="text-2xl font-bold text-purple-400">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Lanjut ke Checkout
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <div className="text-sm text-cyberpunk-text-secondary space-y-1">
                  <div>✓ Pembayaran aman & terenkripsi</div>
                  <div>✓ Download instan setelah pembayaran</div>
                  <div>✓ Garansi uang kembali 30 hari</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;