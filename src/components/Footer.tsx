import React from 'react';
import { Mail, MessageCircle, Instagram, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyberpunk-primary-bg border-t border-cyberpunk-accent-cyan/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3">
                <img 
                  src="/img/logo-meowlabs.webp" 
                  alt="Meow Labs Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/img/logo-meowlabs.svg";
                  }}
                />
              </div>
              <span className="text-xl font-bold text-cyberpunk-gradient-cyan">
                MeowLabs.store
              </span>
            </div>
            <p className="text-cyberpunk-text-secondary text-sm leading-relaxed mb-6 max-w-md">
              Platform toko digital terpercaya untuk produk kreatif & teknologi. 
              Kami menyediakan ebook, template, source code, dan merchandise berkualitas 
              tinggi untuk developer, UMKM, dan komunitas tech.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-cyberpunk-secondary-bg hover:bg-cyberpunk-accent-cyan rounded-lg transition-colors">
                <Instagram className="w-5 h-5 text-cyberpunk-text-secondary hover:text-cyberpunk-primary-bg" />
              </a>
              <a href="#" className="p-2 bg-cyberpunk-secondary-bg hover:bg-cyberpunk-accent-cyan rounded-lg transition-colors">
                <Twitter className="w-5 h-5 text-cyberpunk-text-secondary hover:text-cyberpunk-primary-bg" />
              </a>
              <a href="#" className="p-2 bg-cyberpunk-secondary-bg hover:bg-cyberpunk-accent-cyan rounded-lg transition-colors">
                <Github className="w-5 h-5 text-cyberpunk-text-secondary hover:text-cyberpunk-primary-bg" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kategori Produk</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors text-sm">
                  Ebook Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors text-sm">
                  Template Website
                </a>
              </li>
              <li>
                <a href="#" className="text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors text-sm">
                  Source Code
                </a>
              </li>
              <li>
                <a href="#" className="text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors text-sm">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors text-sm">
                  Bundle Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors text-sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="mailto:hello@meowlabs.store" className="flex items-center text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@meowlabs.store
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-3 text-sm">Jam Operasional</h4>
              <div className="text-cyberpunk-text-secondary text-xs space-y-1">
                <div>Senin - Jumat: 09:00 - 18:00</div>
                <div>Sabtu: 09:00 - 15:00</div>
                <div>Minggu: Libur</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyberpunk-accent-cyan/15 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-cyberpunk-text-secondary text-sm mb-4 md:mb-0">
              © 2025 MeowLabs.store. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-cyberpunk-text-secondary hover:text-cyberpunk-accent-cyan transition-colors">
                Garansi & Refund
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;