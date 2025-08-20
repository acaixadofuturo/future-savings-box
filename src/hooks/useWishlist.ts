import { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface WishlistItem extends Product {
  quantity: number;
}

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const addToWishlist = (product: Product) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromWishlist(productId);
      return;
    }
    
    setWishlistItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return wishlistItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return wishlistItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const getWhatsAppMessage = () => {
    if (wishlistItems.length === 0) return '';
    
    let message = 'Olá! Tenho interesse nos seguintes produtos:\n\n';
    
    wishlistItems.forEach(item => {
      message += `• ${item.name} (${item.quantity}x) - €${item.price.toFixed(2)}\n`;
    });
    
    message += `\nTotal: €${getTotalPrice().toFixed(2)}\n\n`;
    message += 'Gostaria de saber mais informações sobre disponibilidade e como proceder com a compra.';
    
    return encodeURIComponent(message);
  };

  return {
    wishlistItems,
    isWishlistOpen,
    setIsWishlistOpen,
    addToWishlist,
    removeFromWishlist,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearWishlist,
    getWhatsAppMessage,
  };
};