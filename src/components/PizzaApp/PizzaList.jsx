import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import PizzaContext from './context/PizzaContext';
import PizzaDetailModal from './PizzaDetailModal';

const PizzaList = () => {
  const { pizzas } = useContext(PizzaContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleShowModal = (pizza) => {
    setSelectedPizza(pizza);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
  };

  return (
    <div className="container mt-4">
      <h2>Liste des Pizzas</h2>
      <ul className="list-group">
        {pizzas.map((pizza, index) => (
          <li key={index} className="list-group-item">
            <strong>{pizza.name}</strong> - {pizza.price} €
            <Button variant="primary" className="ml-2" onClick={() => handleShowModal(pizza)}>Voir détails</Button>
          </li>
        ))}
      </ul>
      <PizzaDetailModal pizza={selectedPizza} show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default PizzaList;
