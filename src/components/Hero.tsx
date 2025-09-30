import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden isolate">
      {/* === Gradient & Background Effects === */}
      <div className="pointer-events-none absolute inset-0 bg-cyberpunk-gradient-bg -z-20" />
      <div className="pointer-events-none absolute inset-0 flex justify-end -z-10">
        <div
          className="hidden md:block w-1/2 h-full bg-cyberpunk-card/60"
          style={{ backgroundImage: "var(--cyberpunk-grid)", backgroundSize: "32px 32px" }}
        />
      </div>
      <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-cyberpunk-accent-pink/20 blur-3xl rounded-full -z-10" />
      <div className="pointer-events-none absolute top-1/3 right-1/3 w-64 h-64 bg-cyberpunk-accent-cyan/25 blur-3xl rounded-full -z-10" />

      {/* === Content Container === */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-12">
           {/* Badge with Logo */}
           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyberpunk-secondary-bg/70 border border-cyberpunk-accent-cyan/30 text-cyberpunk-accent-cyan shadow-cyberpunk">
             <img 
               src="/img/logo-meowlabs.webp" 
               alt="Meow Labs Logo" 
               className="w-6 h-6 object-contain"
               onError={(e) => {
                 e.currentTarget.src = "/img/logo-meowlabs.svg";
               }}
             />
             <span className="text-sm font-medium uppercase tracking-widest">
               Digital Products &amp; Creative Tools
             </span>
           </div>

          {/* Heading & Description */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              <span className="block">Solusi Digital</span>
              <span className="block text-cyberpunk-accent-cyan">untuk Developer &amp; UMKM</span>
            </h1>
            <p className="text-lg sm:text-xl text-cyberpunk-text-secondary max-w-2xl mx-auto">
              Temukan koleksi produk digital berkualitas tinggi: ebook, template website,
              source code, dan merchandise eksklusif dari Meow Labs. Semua yang Anda butuhkan
              untuk mengembangkan bisnis dan skill teknologi.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onShopNow}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-cyberpunk-accent-cyan text-cyberpunk-dark text-lg font-semibold shadow-cyberpunk hover:shadow-cyberpunk-lg transition-transform hover:-translate-y-0.5"
            >
              Mulai Belanja
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
            <button
              onClick={onShopNow}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-cyberpunk-accent-cyan/40 text-white hover:border-cyberpunk-accent-cyan hover:text-cyberpunk-accent-cyan transition-colors"
            >
              Lihat Katalog
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-cyberpunk-secondary-bg/70 border border-cyberpunk-accent-cyan/20">
              <p className="text-3xl font-bold text-white">40+</p>
              <p className="text-sm text-cyberpunk-text-secondary">Produk Digital</p>
            </div>
            <div className="p-5 rounded-2xl bg-cyberpunk-secondary-bg/70 border border-cyberpunk-accent-cyan/20">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-sm text-cyberpunk-text-secondary">Kategori Kreatif</p>
            </div>
            <div className="p-5 rounded-2xl bg-cyberpunk-secondary-bg/70 border border-cyberpunk-accent-cyan/20">
              <p className="text-3xl font-bold text-white">Community</p>
              <p className="text-sm text-cyberpunk-text-secondary">Developer &amp; UMKM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
