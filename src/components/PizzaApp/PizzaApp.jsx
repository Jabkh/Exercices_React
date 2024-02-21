
import React from 'react';
import { PizzaProvider } from './PizzaContext';
import PizzaForm from './PizzaForm';
import PizzaList from './PizzaList';

const PizzaApp = () => {
  return (
    <PizzaProvider>
      <div>
        <h1>Pizzeria</h1>
        <PizzaForm />
        <PizzaList />
      </div>
    </PizzaProvider>
  );
};

export default PizzaApp;
