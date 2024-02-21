// PizzaForm.js
import React, { useContext, useState } from 'react';
import PizzaContext from './PizzaContext';

const PizzaForm = () => {
  const { addPizza } = useContext(PizzaContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState('');

  // Fonction pour vérifier si tous les champs sont remplis
  const isFormValid = () => {
    return name.trim() !== '' && price.trim() !== '' && ingredients.trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return; // Vérifier si le formulaire est valide avant de soumettre
    addPizza({ name, price, ingredients: ingredients.split(',') });
    setName('');
    setPrice('');
    setIngredients('');
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter une Pizza</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nom de la pizza"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Champ requis
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Prix"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required // Champ requis
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrédients (séparés par des virgules)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required // Champ requis
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>Ajouter Pizza</button>
      </form>
    </div>
  );
};

export default PizzaForm;
