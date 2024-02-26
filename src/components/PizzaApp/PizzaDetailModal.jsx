import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PizzaDetailModal = ({ pizza, show, handleClose }) => {
  if (!pizza) {
    return null; // Retourne null si pizza est null
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Détails de la Pizza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Nom:</strong> {pizza.name}</p>
        <p><strong>Prix:</strong> {pizza.price} €</p>
        <p><strong>Ingrédients:</strong></p>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PizzaDetailModal;
