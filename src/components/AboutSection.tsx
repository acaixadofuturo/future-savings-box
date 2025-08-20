import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Palette, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            Como Funciona
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            A poupança nunca foi tão{' '}
            <span className="text-primary">simples e motivadora</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Desenvolvemos caixas especiais feitas em madeira sustentável para tornar 
            a poupança um hábito visual, tátil e emocionalmente recompensador.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover-lift shadow-soft">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Defina Objetivos</h3>
              <p className="text-muted-foreground">
                Escolha sua meta financeira e visualize seu progresso de forma tangível
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift shadow-soft">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Para Todos</h3>
              <p className="text-muted-foreground">
                Duas opções: Caixa P (individual) e Caixa XL (família/múltiplos objetivos)
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift shadow-soft">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-wood-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-wood-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalização</h3>
              <p className="text-muted-foreground">
                Personalize sua caixa na hora em nosso espaço de arte itinerante
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift shadow-soft">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-mint-soft/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-mint-bright" />
              </div>
              <h3 className="text-xl font-bold mb-3">Encontre-nos</h3>
              <p className="text-muted-foreground">
                Estamos semanalmente em diferentes locais de Lisboa para te atender
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Mais que uma caixa, uma experiência
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Combinamos a tradição da poupança física com design moderno e sustentável. 
            Cada caixa é feita com madeira certificada e pode ser personalizada 
            no momento da compra no nosso espaço de arte móvel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;