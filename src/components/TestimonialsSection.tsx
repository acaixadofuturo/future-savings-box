import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Mãe de família',
      comment: 'A Caixa do Futuro transformou a forma como nossa família lida com dinheiro. As crianças ficaram animadas para poupar!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'João Santos',
      role: 'Empresário',
      comment: 'Consegui juntar para minha viagem dos sonhos em apenas 8 meses. A visualização do progresso é muito motivadora.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Ana e Carlos',
      role: 'Casal',
      comment: 'Estamos poupando juntos para nossa casa própria. A caixa casal nos ajuda a manter o foco nos nossos objetivos.',
      rating: 5,
      avatar: '💑'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            O que nossos clientes{' '}
            <span className="text-primary">estão dizendo</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Histórias reais de pessoas que transformaram seus sonhos em realidade 
            com a Caixa do Futuro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift shadow-soft bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Star className="h-5 w-5 text-accent fill-current" />
            <span className="font-semibold">4.9/5</span>
            <span>baseado em mais de 500 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;