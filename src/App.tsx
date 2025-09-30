import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import UserAccount from './components/UserAccount';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Product } from './types/product';
import { BlogPost as BlogPostType } from './types/blog';
import { Page } from './types/navigation';
import { products } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPostType | null>(null);

  const navigateTo = (page: Page, product?: Product, blogPost?: BlogPostType) => {
    setCurrentPage(page);
    if (product) {
      setSelectedProduct(product);
    }
    if (blogPost) {
      setSelectedBlogPost(blogPost);
    }
  };

  const handleNavigation = (page: Page) => {
    if (page === 'product-detail') {
      const productToShow = selectedProduct ?? products[0];
      navigateTo('product-detail', productToShow);
      return;
    }

    navigateTo(page);
  };

  // Type-safe wrapper for Login and UserAccount components
  const handleStringNavigation = (page: string) => {
    handleNavigation(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onShopNow={() => handleNavigation('products')} />
            <ProductCatalog
              onProductClick={(product) => navigateTo('product-detail', product)}
              limit={8}
            />
          </>
        );
      case 'products':
        return (
          <ProductCatalog 
            onProductClick={(product) => navigateTo('product-detail', product)}
          />
        );
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct}
            onBackToProducts={() => navigateTo('products')}
          />
        ) : null;
      case 'cart':
        return <Cart onCheckout={() => navigateTo('checkout')} />;
      case 'checkout':
        return <Checkout onSuccess={() => navigateTo('home')} />;
      case 'blog':
        return <Blog onPostClick={(post) => navigateTo('blog-post', undefined, post)} />;
      case 'blog-post':
        return selectedBlogPost ? (
          <BlogPost
            post={selectedBlogPost}
            onBack={() => navigateTo('blog')}
          />
        ) : null;
      case 'login':
        return <Login onNavigate={handleStringNavigation} />;
      case 'account':
        return <UserAccount onNavigate={handleStringNavigation} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onShopNow={() => handleNavigation('products')} />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-cyberpunk-primary-bg text-cyberpunk-text-secondary">
          <Header
            onNavigate={handleNavigation}
            currentPage={currentPage}
          />
          <main>
            {renderPage()}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;