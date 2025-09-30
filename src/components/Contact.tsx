import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cyberpunk-secondary-bg/40" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyberpunk-accent-cyan">Hubungi Kami</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kami Siap Membantu Kebutuhan Digital Anda</h2>
          <p className="text-base sm:text-lg text-cyberpunk-text-secondary">
            Tim support Meow Labs siap menjawab pertanyaan seputar produk digital, integrasi pembayaran, dan kolaborasi komunitas.
            Hubungi kami kapan saja melalui WhatsApp atau email resmi berikut ini.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-cyberpunk-accent-cyan/30 bg-cyberpunk-card/70 px-6 py-5 transition hover:border-cyberpunk-accent-cyan hover:shadow-cyberpunk"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyberpunk-accent-cyan/15 text-cyberpunk-accent-cyan">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-cyberpunk-text-secondary">Chat via WhatsApp</p>
              <p className="text-lg font-semibold text-white">+62 812-3456-7890</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-cyberpunk-accent-pink/30 bg-cyberpunk-card/70 px-6 py-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyberpunk-accent-pink/15 text-cyberpunk-accent-pink">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-cyberpunk-text-secondary">Email Support</p>
              <p className="text-lg font-semibold text-white">support@meowlabs.id</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
