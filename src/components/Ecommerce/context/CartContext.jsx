import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };


  const incrementQuantity = (id) => {
    // Mappez sur le panier pour trouver l'article correspondant à l'ID fourni
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    // Mettez à jour le panier avec la quantité incrémentée
    setCart(updatedCart);
  };
  
  const decrementQuantity = (id) => {
    // Recherchez l'article correspondant à l'ID fourni dans le panier
    const existingItem = cart.find((item) => item.id === id);
    // Vérifiez si l'article existe et si la quantité est supérieure à 0
    if (existingItem && existingItem.quantity > 0) {
      // Mappez sur le panier pour décrémenter la quantité de l'article correspondant à l'ID
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      // Mettez à jour le panier avec la quantité décrémentée
      setCart(updatedCart);
    }
  };
  

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
