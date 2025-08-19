import { Target, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Como funciona a{' '}
            <span className="text-primary">Caixa do Futuro</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Uma forma simples e motivadora de guardar dinheiro aos poucos, 
            marcar seu progresso e alcançar seus objetivos financeiros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover-lift bg-card shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Caixa Individual</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfeita para quem quer começar a poupar sozinho. 
                Compartimentos organizados para diferentes objetivos pessoais.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-card shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Caixa Casal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ideal para casais que querem poupar juntos. 
                Compartimentos separados e espaço para objetivos em comum.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-card shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Caixa Família</h3>
              <p className="text-muted-foreground leading-relaxed">
                Envolve toda a família na educação financeira. 
                Múltiplos compartimentos para cada membro e objetivos familiares.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground italic">
            "Pequenas economias hoje, grandes conquistas amanhã"
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;