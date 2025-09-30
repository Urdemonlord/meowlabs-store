import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, ArrowRight } from 'lucide-react';
import { BlogPost, BlogCategory } from '../types/blog';
import { blogPosts, blogCategories } from '../data/blog';

interface BlogProps {
  onPostClick: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ onPostClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || 
      post.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">MeowLabs</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Insight, tutorial, dan tips terbaru seputar teknologi, bisnis digital, dan pengembangan diri
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Semua
            </button>
            {blogCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.slug
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Artikel Unggulan</h2>
            <div 
              className="relative group cursor-pointer bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              onClick={() => onPostClick(featuredPost)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent lg:hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author.name}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(featuredPost.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime} min
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">
            {searchQuery ? `Hasil pencarian "${searchQuery}"` : 'Artikel Terbaru'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <article
                key={post.id}
                className="group cursor-pointer bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                onClick={() => onPostClick(post)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-5 h-5 rounded-full mr-1"
                        />
                        {post.author.name}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime} min
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Artikel tidak ditemukan</h3>
              <p className="text-gray-400">Coba ubah kata kunci pencarian atau filter kategori</p>
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl p-8 lg:p-12 border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Jangan Lewatkan Update Terbaru
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Dapatkan artikel terbaru, tips eksklusif, dan insight menarik langsung di inbox Anda. 
              Gratis dan tanpa spam!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;