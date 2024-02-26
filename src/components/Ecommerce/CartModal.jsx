import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap'; 
import CartContext from './context/CartContext';

const CartModal = ({ show, onHide }) => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Votre panier</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} € x {item.quantity}{' '}
              <button className="btn btn-danger bootstrap-button" onClick={() => removeFromCart(item.id)}>Supprimer</button>
              {/* Bouton "+" pour augmenter la quantité */}
              <button className="btn btn-primary bootstrap-button" onClick={() => incrementQuantity(item.id)}>+</button>
              {/* Bouton "-" pour diminuer la quantité */}
              <button className="btn btn-primary bootstrap-button" onClick={() => {
                console.log(item.quantity);
                (item.quantity <= 1) ? removeFromCart(item.id) : decrementQuantity(item.id);
              }}>-</button>
            </li>
          ))}
        </ul>
        <p>Total: {calculateTotal()} €</p>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
