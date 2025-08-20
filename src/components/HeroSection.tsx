import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-savings.jpg';

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Poupança com a Caixa do Futuro"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Transforme sua poupança em um{' '}
            <span className="text-primary">hábito simples</span>{' '}
            e divertido
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            A Caixa do Futuro ajuda você e sua família a economizar de forma prática e motivadora. 
            Visite-nos semanalmente em locais diferentes e personalize sua caixa na hora!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover-lift text-lg px-8 py-4"
            >
              Ver Produtos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(`https://wa.me/351920514152?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a Caixa do Futuro e onde vocês estarão esta semana.')}`, '_blank')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
            >
              Falar Connosco
            </Button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              📍 <strong>Esta semana estamos em:</strong> Oeiras, Lisboa
            </p>
            <p className="text-sm text-muted-foreground">
              🎨 <strong>Personalização gratuita</strong> no local
            </p>
            <p className="text-sm text-muted-foreground">
              📱 WhatsApp: +351 920 514 152
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;