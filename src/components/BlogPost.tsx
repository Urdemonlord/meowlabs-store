import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types/blog';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Set SEO meta tags
  React.useEffect(() => {
    document.title = post.seoTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', post.seoDescription);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', post.seoKeywords.join(', '));

    // Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', post.title);
    updateOGTag('og:description', post.excerpt);
    updateOGTag('og:image', post.featuredImage);
    updateOGTag('og:type', 'article');

    return () => {
      document.title = 'MeowLabs Digital Product Marketplace';
    };
  }, [post]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Blog
          </button>

          <div className="pt-20 pb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-400">Author</div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} menit baca
              </div>
              <button
                onClick={handleShare}
                className="flex items-center text-sm hover:text-purple-400 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg prose-invert max-w-none">
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, match => {
                    const level = match.trim().length;
                    return `<h${level} class="text-white font-bold mt-8 mb-4 text-${4-level}xl">`;
                  }).replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/`(.*?)`/g, '<code class="bg-gray-800 text-purple-400 px-2 py-1 rounded text-sm">$1</code>')
                    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto my-6"><code class="text-green-400">$1</code></pre>')
                }}
              />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Bagikan artikel ini</h3>
                  <p className="text-gray-400 text-sm">Bantu teman-teman Anda mendapatkan insight yang sama</p>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Daftar Isi
                </h3>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">
                    Mengapa UMKM Perlu AI?
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">
                    5 Cara Praktis ChatGPT
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">
                    Tips Implementasi
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">
                    Kesimpulan
                  </a>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                <div className="text-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">{post.author.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Content Creator & Tech Enthusiast di MeowLabs
                  </p>
                  <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm">
                    Follow Author
                  </button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Dapatkan artikel terbaru langsung di inbox Anda
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;