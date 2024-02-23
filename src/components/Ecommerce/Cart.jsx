import React, { useContext } from 'react';
import CartModal from './CartModal';
import CartContext from './context/CartContext';


const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <button>Panier ({cart.length})</button>
      <CartModal />
    </div>
  );
};

export default Cart;
