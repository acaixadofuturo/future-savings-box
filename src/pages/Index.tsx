import { useEffect } from 'react';
import { useCart } from '@/hooks/useCart';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';

const Index = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  // Adicionar classes CSS para animações suaves no scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observar seções para animações
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <Head />
      
      {/* Header fixo */}
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        cartItemsCount={getTotalItems()}
      />
      
      {/* Conteúdo principal */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection onAddToCart={addToCart} />
        <BenefitsSection />
        <TestimonialsSection />
        <CallToActionSection />
        <NewsletterSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Carrinho lateral */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
        onClearCart={clearCart}
      />
    </div>
  );
};

// Componente Head para SEO
const Head = () => {
  useEffect(() => {
    // Atualizar título da página
    document.title = 'Caixa do Futuro - Poupança Inteligente e Motivadora';
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Transforme sua poupança em um hábito simples e divertido com a Caixa do Futuro. Caixinhas premium de madeira sustentável para poupança individual, casal e família.'
      );
    }

    // Adicionar structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Caixa do Futuro",
      "description": "Caixinhas de poupança inteligente feitas com madeira sustentável",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-99999-9999",
        "contactType": "customer service",
        "email": "contato@caixadofuturo.com"
      },
      "sameAs": [
        "https://instagram.com/caixadofuturo",
        "https://facebook.com/caixadofuturo"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default Index;