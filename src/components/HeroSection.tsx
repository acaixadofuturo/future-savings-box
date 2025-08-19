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
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A Caixa do Futuro ajuda você e sua família a economizar de forma prática e motivadora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 shadow-premium hover-lift"
              onClick={scrollToProducts}
            >
              Compre agora a sua caixa
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Saiba mais
            </Button>
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