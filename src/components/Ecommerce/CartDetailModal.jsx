import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CartDetailModal = ({ cart, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Détails du Panier</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <p><strong>Nom:</strong> {item.name}</p>
              <p><strong>Prix:</strong> {item.price} €</p>
              {/* Ajout d'autres détails de l'item si nécessaire */}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartDetailModal;
