import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, ArrowLeft, Lock, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onSuccess: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onSuccess }) => {
  const { items, total, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string>('qris');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const paymentMethods = [
    {
      id: 'qris',
      name: 'QRIS',
      description: 'Bayar dengan scan QR code',
      icon: Smartphone,
      fee: 0
    },
    {
      id: 'transfer',
      name: 'Transfer Bank',
      description: 'Transfer ke rekening BCA/Mandiri',
      icon: Building,
      fee: 0
    },
    {
      id: 'credit-card',
      name: 'Kartu Kredit/Debit',
      description: 'Visa, Mastercard, atau JCB',
      icon: CreditCard,
      fee: Math.round(total * 0.029) // 2.9% fee
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      onSuccess();
      setIsProcessing(false);
    }, 2000);
  };

  const selectedMethod = paymentMethods.find(method => method.id === selectedPayment);
  const finalTotal = total + (selectedMethod?.fee || 0);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Keranjang
          </button>
          <h1 className="text-3xl font-bold text-white">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Customer Information */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-6">Informasi Pembeli</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-6">Metode Pembayaran</h2>
              <div className="space-y-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <label
                      key={method.id}
                      className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${
                        selectedPayment === method.id
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center w-full">
                        <Icon className="w-6 h-6 text-gray-400 mr-4" />
                        <div className="flex-1">
                          <div className="text-white font-medium">{method.name}</div>
                          <div className="text-gray-400 text-sm">{method.description}</div>
                        </div>
                        {method.fee > 0 && (
                          <div className="text-purple-400 text-sm">
                            +{formatPrice(method.fee)}
                          </div>
                        )}
                        {selectedPayment === method.id && (
                          <Check className="w-5 h-5 text-purple-400 ml-2" />
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 sticky top-8">
              <h3 className="text-xl font-semibold text-white mb-6">Ringkasan Pesanan</h3>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.product.id} className="flex items-center space-x-3">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm truncate">
                        {item.product.title}
                      </div>
                      <div className="text-gray-400 text-xs">
                        Qty: {item.quantity}
                      </div>
                    </div>
                    <div className="text-white font-medium text-sm">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="border-t border-gray-700 pt-4 space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                {selectedMethod?.fee > 0 && (
                  <div className="flex justify-between text-gray-300">
                    <span>Biaya Payment</span>
                    <span>{formatPrice(selectedMethod.fee)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-lg font-semibold text-white border-t border-gray-700 pt-3">
                  <span>Total</span>
                  <span className="text-purple-400">
                    {formatPrice(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handleSubmit}
                disabled={isProcessing || !customerInfo.name || !customerInfo.email || !customerInfo.phone}
                className="w-full mt-6 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Bayar Sekarang
                  </>
                )}
              </button>

              {/* Security Notice */}
              <div className="mt-6 text-center">
                <div className="text-sm text-gray-400 space-y-1">
                  <div className="flex items-center justify-center mb-2">
                    <Lock className="w-4 h-4 mr-1" />
                    Pembayaran diamankan dengan SSL
                  </div>
                  <div>✓ Link download otomatis via email</div>
                  <div>✓ Support 24/7 jika ada masalah</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;