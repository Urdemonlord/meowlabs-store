import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-cyberpunk-gradient-bg/40 border-y border-cyberpunk-accent-cyan/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyberpunk-accent-cyan">
            Tentang Meow Labs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Membangun Ekosistem Digital untuk Kreator & UMKM
          </h2>
          <p className="text-base sm:text-lg text-cyberpunk-text-secondary">
            Meow Labs lahir dari komunitas developer yang percaya bahwa teknologi seharusnya dapat diakses oleh semua orang.
            Kami menyediakan produk digital siap pakai dan resources edukasi yang membantu mempercepat pertumbuhan bisnis,
            karier, dan komunitas tech lokal di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-cyberpunk-accent-cyan/20 bg-cyberpunk-secondary-bg/60 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Cerita Kami</h3>
            <p className="text-sm text-cyberpunk-text-secondary">
              Dimulai dari proyek open-source kecil, Meow Labs berkembang menjadi hub kreator digital yang berfokus pada
              kolaborasi dan berbagi pengetahuan.
            </p>
          </div>
          <div className="rounded-2xl border border-cyberpunk-accent-cyan/20 bg-cyberpunk-secondary-bg/60 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Misi</h3>
            <p className="text-sm text-cyberpunk-text-secondary">
              Menghadirkan solusi praktis bagi developer, freelancer, dan pelaku UMKM melalui katalog produk digital dan tools
              siap pakai yang terus diperbarui.
            </p>
          </div>
          <div className="rounded-2xl border border-cyberpunk-accent-cyan/20 bg-cyberpunk-secondary-bg/60 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Komunitas</h3>
            <p className="text-sm text-cyberpunk-text-secondary">
              Kami aktif membangun komunitas yang suportif melalui program mentoring, event online, dan kolaborasi bersama UMKM
              untuk meningkatkan literasi digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
