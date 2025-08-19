import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor, insira seu email');
      return;
    }

    setIsSubmitting(true);
    
    // Simular requisição
    setTimeout(() => {
      toast.success('Obrigado por se inscrever! Você receberá nossas dicas em breve.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elevated bg-card border-0">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Dicas exclusivas de{' '}
                <span className="text-primary">poupança</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Receba dicas práticas, estratégias de economia e promoções exclusivas 
                diretamente no seu email. Junte-se a mais de 10.000 pessoas que já 
                transformaram sua vida financeira!
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 px-4 text-lg"
                    disabled={isSubmitting}
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 shadow-soft"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Inscrevendo...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Inscrever
                      </>
                    )}
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4">
                ✓ Sem spam • ✓ Dicas valiosas • ✓ Descadastre quando quiser
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;