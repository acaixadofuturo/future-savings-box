import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useWishlist, Product } from '@/hooks/useWishlist';
import caixaIndividualImage from '@/assets/caixa-individual.jpg';
import caixaFamiliaImage from '@/assets/caixa-familia.jpg';
import { toast } from 'sonner';
import { Heart } from 'lucide-react';

interface ProductsSectionProps {
  onAddToWishlist: (product: Product) => void;
}

const ProductsSection = ({ onAddToWishlist }: ProductsSectionProps) => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Caixa P',
      price: 29.90,
      image: caixaIndividualImage,
      description: '1 compartimento. Perfeita para objetivos pessoais. Madeira sustentável com design minimalista.'
    },
    {
      id: '2',
      name: 'Caixa XL',
      price: 49.90,
      image: caixaFamiliaImage,
      description: '4 compartimentos. Ideal para família ou múltiplos objetivos. Sistema organizacional completo.'
    }
  ];

  const handleAddToWishlist = (product: Product) => {
    onAddToWishlist(product);
    toast.success(`${product.name} adicionada à lista de desejos!`);
  };

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            Os Nossos Produtos
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha sua{' '}
            <span className="text-primary">Caixa do Futuro</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Duas opções pensadas para diferentes necessidades. Cada caixa é feita 
            com madeira sustentável e pode ser personalizada gratuitamente no local.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  €{product.price.toFixed(2)}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover-lift"
                  onClick={() => handleAddToWishlist(product)}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Adicionar à Lista de Desejos
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            ✓ Personalização gratuita • ✓ Madeira sustentável • ✓ Encontro presencial
          </p>
          <p className="text-xs text-muted-foreground">
            Estamos semanalmente em locais diferentes em Lisboa. 
            Entre em contacto para saber a nossa localização atual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;