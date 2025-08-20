import { useEffect } from 'react';
import { useWishlist } from '@/hooks/useWishlist';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import Wishlist from '@/components/Wishlist';

const Index = () => {
  const {
    wishlistItems,
    isWishlistOpen,
    setIsWishlistOpen,
    addToWishlist,
    removeFromWishlist,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearWishlist,
    getWhatsAppMessage,
  } = useWishlist();

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
        onWishlistClick={() => setIsWishlistOpen(true)}
        wishlistItemsCount={getTotalItems()}
      />
      
      {/* Conteúdo principal */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection onAddToWishlist={addToWishlist} />
        <BenefitsSection />
        <TestimonialsSection />
        <CallToActionSection />
        <NewsletterSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Wishlist lateral */}
      <Wishlist
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromWishlist}
        totalPrice={getTotalPrice()}
        onClearWishlist={clearWishlist}
        whatsAppMessage={getWhatsAppMessage()}
      />
    </div>
  );
};

// Componente Head para SEO
const Head = () => {
  useEffect(() => {
    // Atualizar título da página
    document.title = 'Caixa do Futuro - Poupança Inteligente e Motivadora | Lisboa';
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Transforme sua poupança em um hábito simples e divertido com a Caixa do Futuro. Caixinhas premium de madeira sustentável com personalização gratuita. Encontros presenciais em Lisboa.'
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
        "telephone": "+351-920-514-152",
        "contactType": "customer service",
        "email": "acaixadofuturo@outlook.com"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oeiras",
        "addressRegion": "Lisboa",
        "addressCountry": "PT"
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