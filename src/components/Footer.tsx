import React from 'react';
import { Mail, MessageCircle, Instagram, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">ML</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                MeowLabs.store
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Platform toko digital terpercaya untuk produk kreatif & teknologi. 
              Kami menyediakan ebook, template, source code, dan merchandise berkualitas 
              tinggi untuk developer, UMKM, dan komunitas tech.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-purple-500 rounded-lg transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-500 rounded-lg transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-600 rounded-lg transition-colors">
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kategori Produk</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Ebook Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Template Website
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Source Code
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
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
                <a href="#" className="flex items-center text-gray-400 hover:text-green-400 transition-colors text-sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="mailto:hello@meowlabs.store" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@meowlabs.store
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-3 text-sm">Jam Operasional</h4>
              <div className="text-gray-400 text-xs space-y-1">
                <div>Senin - Jumat: 09:00 - 18:00</div>
                <div>Sabtu: 09:00 - 15:00</div>
                <div>Minggu: Libur</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 MeowLabs.store. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
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