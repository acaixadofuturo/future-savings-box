import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart, Product } from '@/hooks/useCart';
import caixaIndividualImage from '@/assets/caixa-individual.jpg';
import caixaCasalImage from '@/assets/caixa-casal.jpg';
import caixaFamiliaImage from '@/assets/caixa-familia.jpg';
import { toast } from 'sonner';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Caixa Individual',
      price: 79.90,
      image: caixaIndividualImage,
      description: 'Perfeita para objetivos pessoais. Madeira sustentável com compartimentos organizados.'
    },
    {
      id: '2',
      name: 'Caixa Casal',
      price: 129.90,
      image: caixaCasalImage,
      description: 'Ideal para casais. Dois compartimentos individuais e espaço para objetivos em comum.'
    },
    {
      id: '3',
      name: 'Caixa Família',
      price: 189.90,
      image: caixaFamiliaImage,
      description: 'Para toda a família. Múltiplos compartimentos e sistema de educação financeira infantil.'
    }
  ];

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast.success(`${product.name} adicionada ao carrinho!`);
  };

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            Nossa Loja
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha sua{' '}
            <span className="text-primary">Caixa do Futuro</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Cada caixa é feita com madeira sustentável e projetada para tornar 
            a poupança um hábito prazeroso e motivador.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={product.id} className={`hover-lift shadow-soft ${index === 1 ? 'md:scale-105 border-primary/20' : ''}`}>
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-accent text-accent-foreground shadow-soft">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover hover-scale"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="text-3xl font-bold text-primary mb-4">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover-lift"
                  onClick={() => handleAddToCart(product)}
                >
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            ✓ Frete grátis para todo o Brasil • ✓ Garantia de 30 dias • ✓ Materiais sustentáveis
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;