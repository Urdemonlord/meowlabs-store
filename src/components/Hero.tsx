import React from 'react';
import { ArrowRight, Zap, MessageCircle } from 'lucide-react';
import CyberCat from './CyberCat';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-cyberpunk-gradient-bg" />
      <div className="absolute inset-0 flex justify-end">
        <div className="hidden md:block w-1/2 h-full bg-cyberpunk-card/60" style={{ backgroundImage: 'var(--cyberpunk-grid)', backgroundSize: '32px 32px' }} />
      </div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyberpunk-accent-pink/20 blur-3xl rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyberpunk-accent-cyan/25 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          {/* Left column */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyberpunk-secondary-bg/70 border border-cyberpunk-accent-cyan/30 text-cyberpunk-accent-cyan shadow-cyberpunk">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-widest">Digital Agency</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                <span className="block">Jasa Pembuatan Website</span>
                <span className="block text-cyberpunk-accent-cyan">Murah untuk UMKM &amp; Personal</span>
              </h1>
              <p className="text-lg sm:text-xl text-cyberpunk-text-secondary max-w-xl">
                Layanan pembuatan website untuk UMKM, desa, hingga personal branding dengan desain profesional mulai dari 500 ribuan. Website responsif, SEO friendly, dan maintenance gratis selama 1 tahun.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onShopNow}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-cyberpunk-accent-cyan text-cyberpunk-dark text-lg font-semibold shadow-cyberpunk hover:shadow-cyberpunk-lg transition-transform hover:-translate-y-0.5"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-3 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-cyberpunk-text-secondary/30 text-white hover:border-cyberpunk-accent-cyan hover:text-cyberpunk-accent-cyan transition-colors">
                Lihat Portofolio
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-cyberpunk-secondary-bg/70 border border-cyberpunk-accent-cyan/20">
                <p className="text-3xl font-bold text-white">100+</p>
                <p className="text-sm text-cyberpunk-text-secondary">Projects</p>
              </div>
              <div className="p-5 rounded-2xl bg-cyberpunk-secondary-bg/70 border border-cyberpunk-accent-cyan/20">
                <p className="text-3xl font-bold text-white">100+</p>
                <p className="text-sm text-cyberpunk-text-secondary">Happy Clients</p>
              </div>
              <div className="p-5 rounded-2xl bg-cyberpunk-secondary-bg/70 border border-cyberpunk-accent-cyan/20">
                <p className="text-3xl font-bold text-white">7+</p>
                <p className="text-sm text-cyberpunk-text-secondary">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-cyberpunk-accent-cyan/20 blur-2xl rounded-[2.5rem]" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-cyberpunk-accent-cyan/30 bg-cyberpunk-card/80 backdrop-blur-xl p-10">
                <div className="absolute inset-x-10 -top-12 h-24 bg-cyberpunk-accent-cyan/10 blur-3xl rounded-full" />
                <div className="relative flex flex-col items-center">
                  <CyberCat />
                  <div className="mt-8 w-full space-y-4">
                    <div className="flex items-center justify-between px-5 py-3 rounded-2xl border border-cyberpunk-accent-cyan/30 bg-cyberpunk-secondary-bg/60">
                      <div>
                        <p className="text-sm text-cyberpunk-text-secondary">Project Type</p>
                        <p className="text-base font-semibold text-white">Landing Page</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyberpunk-accent-cyan/10 text-cyberpunk-accent-cyan">
                        7 Hari
                      </span>
                    </div>
                    <div className="px-5 py-3 rounded-2xl border border-cyberpunk-accent-cyan/20 bg-cyberpunk-secondary-bg/60">
                      <p className="text-sm text-cyberpunk-text-secondary">Stack</p>
                      <p className="text-base font-semibold text-white">Next.js • TailwindCSS • SEO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 right-6 px-5 py-3 rounded-2xl bg-cyberpunk-accent-pink text-white flex items-center gap-3 shadow-cyberpunk-pink">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Chat dengan kami?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;