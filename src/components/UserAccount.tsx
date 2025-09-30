import React, { useState, useEffect } from 'react';
import { User, ShoppingBag, Download, Settings, LogOut, Eye, Calendar, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface UserAccountProps {
  onNavigate: (page: string) => void;
}

const UserAccount: React.FC<UserAccountProps> = ({ onNavigate }) => {
  const { user, purchaseHistory, logout, fetchPurchaseHistory } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'purchases' | 'downloads'>('profile');

  useEffect(() => {
    if (user) {
      fetchPurchaseHistory();
    }
  }, [user, fetchPurchaseHistory]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'completed': 'bg-green-500/20 text-green-400 border-green-500/30',
      'pending': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'failed': 'bg-red-500/20 text-red-400 border-red-500/30',
      'refunded': 'bg-cyberpunk-secondary-bg/40 text-cyberpunk-text-secondary border-cyberpunk-accent-cyan/20'
    };
    return colors[status as keyof typeof colors] || colors.pending;
  };

  const getStatusText = (status: string) => {
    const statusText = {
      'completed': 'Selesai',
      'pending': 'Menunggu',
      'failed': 'Gagal',
      'refunded': 'Refund'
    };
    return statusText[status as keyof typeof statusText] || status;
  };

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-cyberpunk-primary-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Akses Ditolak</h2>
          <p className="text-cyberpunk-text-secondary mb-8">Silakan login untuk mengakses halaman ini</p>
          <button
            onClick={() => onNavigate('login')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors"
          >
            Login Sekarang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyberpunk-primary-bg py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Akun Saya</h1>
          <p className="text-cyberpunk-text-secondary mt-2">Kelola profil dan riwayat pembelian Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-cyberpunk-secondary-bg/60 to-cyberpunk-primary-bg/60 rounded-2xl p-6 border border-cyberpunk-accent-cyan/20">
              {/* User Info */}
              <div className="text-center mb-6 pb-6 border-b border-cyberpunk-accent-cyan/25">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User className="w-10 h-10 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                <p className="text-cyberpunk-text-secondary text-sm">{user.email}</p>
                {user.isVerified && (
                  <span className="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs mt-2">
                    ✓ Verified
                  </span>
                )}
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-cyberpunk-text-secondary hover:bg-cyberpunk-secondary-bg/50'
                  }`}
                >
                  <User className="w-5 h-5 mr-3" />
                  Profil
                </button>
                <button
                  onClick={() => setActiveTab('purchases')}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${
                    activeTab === 'purchases'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-cyberpunk-text-secondary hover:bg-cyberpunk-secondary-bg/50'
                  }`}
                >
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  Riwayat Pembelian
                </button>
                <button
                  onClick={() => setActiveTab('downloads')}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${
                    activeTab === 'downloads'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-cyberpunk-text-secondary hover:bg-cyberpunk-secondary-bg/50'
                  }`}
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-gradient-to-b from-cyberpunk-secondary-bg/60 to-cyberpunk-primary-bg/60 rounded-2xl p-8 border border-cyberpunk-accent-cyan/20">
                <h2 className="text-2xl font-bold text-white mb-6">Informasi Profil</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-cyberpunk-text-secondary mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full px-4 py-3 border border-cyberpunk-accent-cyan/30 rounded-xl bg-cyberpunk-secondary-bg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cyberpunk-text-secondary mb-2">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full px-4 py-3 border border-cyberpunk-accent-cyan/30 rounded-xl bg-cyberpunk-secondary-bg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cyberpunk-text-secondary mb-2">Bergabung Sejak</label>
                    <input
                      type="text"
                      value={formatDate(user.createdAt)}
                      className="w-full px-4 py-3 border border-cyberpunk-accent-cyan/30 rounded-xl bg-cyberpunk-secondary-bg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cyberpunk-text-secondary mb-2">Status Akun</label>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        user.isVerified 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}>
                        {user.isVerified ? 'Terverifikasi' : 'Belum Terverifikasi'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors">
                    Edit Profil
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'purchases' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-b from-cyberpunk-secondary-bg/60 to-cyberpunk-primary-bg/60 rounded-2xl p-8 border border-cyberpunk-accent-cyan/20">
                  <h2 className="text-2xl font-bold text-white mb-6">Riwayat Pembelian</h2>
                  
                  {purchaseHistory.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="w-16 h-16 text-cyberpunk-text-secondary mx-auto mb-4 opacity-50" />
                      <h3 className="text-xl font-semibold text-white mb-2">Belum Ada Pembelian</h3>
                      <p className="text-cyberpunk-text-secondary mb-6">Mulai berbelanja untuk melihat riwayat pembelian Anda</p>
                      <button
                        onClick={() => onNavigate('products')}
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors"
                      >
                        Mulai Belanja
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {purchaseHistory.map(purchase => (
                        <div key={purchase.id} className="border border-cyberpunk-accent-cyan/25 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-white">Order #{purchase.id}</h3>
                              <div className="flex items-center space-x-4 text-sm text-cyberpunk-text-secondary mt-1">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {formatDate(purchase.purchaseDate)}
                                </div>
                                <div className="flex items-center">
                                  <CreditCard className="w-4 h-4 mr-1" />
                                  {purchase.paymentMethod}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-white">{formatPrice(purchase.total)}</div>
                              <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(purchase.status)}`}>
                                {getStatusText(purchase.status)}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {purchase.items.map(item => (
                              <div key={item.productId} className="flex items-center space-x-4">
                                <img
                                  src={item.productImage}
                                  alt={item.productTitle}
                                  className="w-12 h-12 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                  <h4 className="text-white font-medium">{item.productTitle}</h4>
                                  <p className="text-cyberpunk-text-secondary text-sm">Qty: {item.quantity}</p>
                                </div>
                                <div className="text-white font-medium">
                                  {formatPrice(item.price * item.quantity)}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'downloads' && (
              <div className="bg-gradient-to-b from-cyberpunk-secondary-bg/60 to-cyberpunk-primary-bg/60 rounded-2xl p-8 border border-cyberpunk-accent-cyan/20">
                <h2 className="text-2xl font-bold text-white mb-6">Download Produk Digital</h2>
                
                {purchaseHistory.filter(p => p.downloadLinks && p.downloadLinks.length > 0).length === 0 ? (
                  <div className="text-center py-12">
                    <Download className="w-16 h-16 text-cyberpunk-text-secondary mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold text-white mb-2">Tidak Ada Download</h3>
                    <p className="text-cyberpunk-text-secondary">Beli produk digital untuk mengakses download</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {purchaseHistory
                      .filter(purchase => purchase.downloadLinks && purchase.downloadLinks.length > 0)
                      .map(purchase => (
                        purchase.downloadLinks?.map(download => {
                          const item = purchase.items.find(i => i.productId === download.productId);
                          return (
                            <div key={download.productId} className="border border-cyberpunk-accent-cyan/25 rounded-xl p-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <img
                                    src={item?.productImage}
                                    alt={item?.productTitle}
                                    className="w-16 h-16 object-cover rounded-lg"
                                  />
                                  <div>
                                    <h3 className="text-lg font-semibold text-white">{item?.productTitle}</h3>
                                    <div className="flex items-center space-x-4 text-sm text-cyberpunk-text-secondary mt-1">
                                      <span>Download: {download.downloadCount}/{download.maxDownloads}</span>
                                      <span>Expires: {formatDate(download.expiresAt)}</span>
                                    </div>
                                  </div>
                                </div>
                                <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </button>
                              </div>
                            </div>
                          );
                        })
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;