import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Product } from '../types/product';

interface ProductCatalogProps {
  onProductClick: (product: Product) => void;
  limit?: number;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ onProductClick, limit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'ebook', name: 'Ebook' },
    { id: 'template', name: 'Template' },
    { id: 'source-code', name: 'Source Code' },
    { id: 'merchandise', name: 'Merchandise' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).slice(0, limit);

  const isHomePage = limit !== undefined;

  return (
    <section className={`py-16 ${isHomePage ? 'bg-cyberpunk-secondary-bg/30' : 'min-h-screen bg-cyberpunk-primary-bg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isHomePage ? 'Produk Terpopuler' : 'Katalog Produk'}
          </h2>
          <p className="text-cyberpunk-text-secondary text-lg max-w-2xl mx-auto">
            {isHomePage 
              ? 'Pilihan terbaik dari koleksi produk digital kami' 
              : 'Temukan solusi digital yang tepat untuk kebutuhan Anda'
            }
          </p>
        </div>

        {!isHomePage && (
          <>
            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-cyberpunk-text-secondary" />
                </div>
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-cyberpunk-accent-cyan/30 rounded-xl bg-cyberpunk-secondary-bg text-white placeholder-cyberpunk-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-cyberpunk-accent-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-cyberpunk-text-secondary" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-cyberpunk-accent-cyan/30 rounded-xl bg-cyberpunk-secondary-bg text-white focus:outline-none focus:ring-2 focus:ring-cyberpunk-accent-cyan"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyberpunk-accent-cyan to-cyberpunk-accent-pink text-cyberpunk-primary-bg'
                      : 'bg-cyberpunk-secondary-bg text-cyberpunk-text-secondary hover:bg-cyberpunk-secondary-bg/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && !isHomePage && (
          <div className="text-center py-12">
            <div className="text-cyberpunk-text-secondary mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Produk tidak ditemukan</h3>
            <p className="text-cyberpunk-text-secondary">Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        )}

        {/* View All Button for Home Page */}
        {isHomePage && (
          <div className="text-center mt-12">
               <button
      onClick={() => window.location.assign('/products')}
      className="inline-flex items-center px-8 py-3 border border-cyberpunk-accent-cyan text-cyberpunk-accent-cyan font-semibold rounded-xl hover:bg-cyberpunk-accent-cyan hover:text-cyberpunk-primary-bg transition-colors"
    >
      Lihat Semua Produk
    </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;