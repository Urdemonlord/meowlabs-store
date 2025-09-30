import React from 'react';
import { ArrowRight, Zap, Shield, Download } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden bg-cyberpunk-gradient-bg">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyberpunk-neon-teal/20 rounded-full blur-3xl animate-cyberpunk-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyberpunk-neon-pink/20 rounded-full blur-3xl animate-cyberpunk-glow-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyberpunk-neon-blue/10 rounded-full blur-3xl animate-cyberpunk-glow-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-cyberpunk mb-8 animate-cyberpunk-fade-in">
            <Zap className="w-4 h-4 text-cyberpunk-neon-teal mr-2 animate-cyberpunk-flicker" />
            <span className="text-sm font-medium text-cyberpunk-text-white">Digital Products & Creative Tools</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-cyberpunk-slide-up">
            <span className="block text-cyberpunk-text-white text-shadow-cyberpunk-lg">Solusi Digital</span>
            <span className="block text-cyberpunk-gradient-teal text-shadow-cyberpunk-lg">
              untuk Developer & UMKM
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-cyberpunk-text-light mb-10 animate-cyberpunk-fade-in">
            Temukan koleksi produk digital berkualitas tinggi: ebook, template website, source code, 
            dan merchandise eksklusif dari MeowLabs. Semua yang Anda butuhkan untuk mengembangkan 
            bisnis dan skill teknologi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onShopNow}
              className="btn-cyberpunk-primary px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 animate-cyberpunk-glow-pulse"
            >
              Mulai Belanja
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-cyberpunk-neon-teal text-cyberpunk-neon-teal font-semibold rounded-xl hover:bg-cyberpunk-neon-teal hover:text-cyberpunk-dark transition-colors animate-cyberpunk-glow-pulse">
              Lihat Katalog
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl glass-cyberpunk animate-cyberpunk-fade-in">
              <div className="w-12 h-12 bg-cyberpunk-gradient-teal rounded-xl flex items-center justify-center mb-4 animate-cyberpunk-glow-pulse">
                <Download className="w-6 h-6 text-cyberpunk-dark" />
              </div>
              <h3 className="text-lg font-semibold text-cyberpunk-text-white mb-2 text-shadow-cyberpunk">Download Instan</h3>
              <p className="text-cyberpunk-text-light text-sm text-center">
                Akses langsung setelah pembelian via email otomatis
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl glass-cyberpunk animate-cyberpunk-fade-in">
              <div className="w-12 h-12 bg-cyberpunk-gradient-pink rounded-xl flex items-center justify-center mb-4 animate-cyberpunk-glow-pulse">
                <Shield className="w-6 h-6 text-cyberpunk-text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cyberpunk-text-white mb-2 text-shadow-cyberpunk-pink">Kualitas Terjamin</h3>
              <p className="text-cyberpunk-text-light text-sm text-center">
                Produk teruji dan siap pakai untuk kebutuhan profesional
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl glass-cyberpunk animate-cyberpunk-fade-in">
              <div className="w-12 h-12 bg-cyberpunk-gradient-blue rounded-xl flex items-center justify-center mb-4 animate-cyberpunk-glow-pulse">
                <Zap className="w-6 h-6 text-cyberpunk-text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cyberpunk-text-white mb-2 text-shadow-cyberpunk-blue">Support Lengkap</h3>
              <p className="text-cyberpunk-text-light text-sm text-center">
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