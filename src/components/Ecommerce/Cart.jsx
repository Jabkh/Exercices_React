import React, { useContext, useState } from 'react';
import CartModal from './CartModal';
import CartContext from './context/CartContext';


const Cart = () => {
  const { cart } = useContext(CartContext);
  const [cartModalShow, setCartModalShow] = useState(false); // État pour contrôler l'affichage de la modal

  const openCartModal = () => {
    setCartModalShow(true); // Fonction pour ouvrir la modal
  };

  const closeCartModal = () => {
    setCartModalShow(false); // Fonction pour fermer la modal
  };

  return (
    <div className="cart">
      <button className="btn btn-primary bootstrap-button" onClick={openCartModal}> Voir Panier ({cart.length})</button> {/* Bouton pour ouvrir la modal */}
      <CartModal show={cartModalShow} onHide={closeCartModal} /> {/* Utilisez la modal avec les props show et onHide */}
    </div>
  );
};

export default Cart;
