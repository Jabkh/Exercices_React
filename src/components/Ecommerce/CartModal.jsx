import React, { useContext } from 'react';
import CartContext from './context/CartContext';


const CartModal = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-modal">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} € x {item.quantity}{' '}
            <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal()} €</p>
    </div>
  );
};

export default CartModal;
