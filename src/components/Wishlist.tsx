import { X, Minus, Plus, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { WishlistItem } from '@/hooks/useWishlist';
import { toast } from 'sonner';

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: WishlistItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  totalPrice: number;
  onClearWishlist: () => void;
  whatsAppMessage: string;
}

const Wishlist = ({
  isOpen,
  onClose,
  wishlistItems,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
  onClearWishlist,
  whatsAppMessage
}: WishlistProps) => {
  const handleWhatsAppContact = () => {
    if (wishlistItems.length === 0) {
      toast.error('Sua lista de desejos está vazia');
      return;
    }
    
    window.open(`https://wa.me/351920514152?text=${whatsAppMessage}`, '_blank');
    toast.success('Redirecionando para WhatsApp...');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Lista de Desejos
            {wishlistItems.length > 0 && (
              <Badge variant="secondary">{wishlistItems.length}</Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {wishlistItems.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-center">
              <div>
                <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lista vazia</h3>
                <p className="text-muted-foreground">
                  Adicione produtos à sua lista de desejos
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto py-4">
                <div className="space-y-4">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-primary font-bold">
                          €{item.price.toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total estimado:</span>
                  <span className="text-primary">
                    €{totalPrice.toFixed(2)}
                  </span>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    📍 <strong>Encontre-nos presencialmente</strong>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Estamos semanalmente em diferentes locais de Lisboa com personalização gratuita.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contactar via WhatsApp
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={onClearWishlist}
                  >
                    Limpar Lista
                  </Button>
                </div>
                
                <p className="text-xs text-center text-muted-foreground">
                  Ao contactar via WhatsApp, sua lista será enviada automaticamente
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Wishlist;