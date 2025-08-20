import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-background rounded-full" />
        <div className="absolute top-32 right-16 w-16 h-16 bg-background rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-background rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-background rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-sm shadow-premium border-0">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Comece hoje mesmo sua{' '}
              <span className="text-primary">jornada financeira</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              O futuro começa com pequenas poupanças. Não deixe seus sonhos para depois. 
              Sua caixa do futuro está esperando por você!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 shadow-premium hover-lift group"
                onClick={scrollToProducts}
              >
                Comprar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground">
                  Encontros presenciais • <span className="font-semibold text-primary">Personalização gratuita</span>
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center">
                ✓ Personalização gratuita
              </span>
              <span className="flex items-center">
                ✓ Materiais sustentáveis
              </span>
              <span className="flex items-center">
                ✓ Encontro presencial
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToActionSection;