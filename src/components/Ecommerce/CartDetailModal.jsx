import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CartDetailModal = ({ show, onHide, product }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Détails du produit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{product.name}</h2>
        <p>Prix : {product.price}</p>
        <p>Ingrédients : {product.ingredients.join(', ')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartDetailModal;

// Présent pour afficher le détail produit dans une autre modal pas encore utilisée