import React, { createContext, useState } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  // Fonction pour ajouter une pizza à la liste
  const addPizza = (pizza) => {
    setPizzas([...pizzas, pizza]);
  };

  return (
    <PizzaContext.Provider value={{ pizzas, addPizza }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
