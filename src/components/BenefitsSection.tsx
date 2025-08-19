import { Smile, TrendingUp, Gift, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Smile,
      title: 'Economia Divertida',
      description: 'Transforme o ato de poupar em uma experiência prazerosa e motivadora para toda a família.'
    },
    {
      icon: TrendingUp,
      title: 'Visualize seu Progresso',
      description: 'Acompanhe visualmente o crescimento das suas economias e celebre cada conquista alcançada.'
    },
    {
      icon: Gift,
      title: 'Presente Criativo',
      description: 'Um presente único que incentiva hábitos financeiros saudáveis em quem você ama.'
    },
    {
      icon: Leaf,
      title: 'Materiais Sustentáveis',
      description: 'Produzida com madeira certificada e processos eco-friendly, cuidando do planeta e do seu futuro.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Por que escolher a{' '}
            <span className="text-primary">Caixa do Futuro?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Muito mais que uma simples caixa, é um sistema completo para 
            transformar sua relação com o dinheiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-lift bg-card/80 backdrop-blur-sm shadow-soft border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-elevated">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Garantia de Satisfação
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Estamos tão confiantes na qualidade da nossa caixa que oferecemos 
              30 dias de garantia. Se não ficar completamente satisfeito, 
              devolvemos seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;