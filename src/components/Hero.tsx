import React from 'react';
import { ArrowRight, Zap, Shield, Download } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">Digital Products & Creative Tools</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block text-white">Solusi Digital</span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              untuk Developer & UMKM
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-10">
            Temukan koleksi produk digital berkualitas tinggi: ebook, template website, source code, 
            dan merchandise eksklusif dari MeowLabs. Semua yang Anda butuhkan untuk mengembangkan 
            bisnis dan skill teknologi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onShopNow}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Mulai Belanja
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-colors">
              Lihat Katalog
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Download Instan</h3>
              <p className="text-gray-400 text-sm text-center">
                Akses langsung setelah pembelian via email otomatis
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-400 text-sm text-center">
                Produk teruji dan siap pakai untuk kebutuhan profesional
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Support Lengkap</h3>
              <p className="text-gray-400 text-sm text-center">
                Dokumentasi detail dan dukungan teknis untuk semua produk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;