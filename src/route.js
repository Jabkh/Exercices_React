import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import PokemonPage from './components/PokemonPage';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import FizzBuzz from './components/FizzBuzz';
import ContactApp from './components/ContactApp/ContactApp';
import RefApp from '../src/components/ContactRef/RefApp';
import TodoApp from '../src/components/TodoApp/TodoApp';
import Authentication from '../src/components/Authentication/Authentication';
import PizzaApp from './components/PizzaApp/PizzaApp';

const RoutesComponent = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes> {/* Utilisez Routes ici au lieu de Switch */}
            <Route path="/pokemon" element={<PokemonPage />} /> {/* Utilisez l'attribut "element" pour spécifier le composant */}
            <Route path="/todo" element={<TodoList />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/exo3" element={<FizzBuzz />} />
            <Route path="/exo6" element={<ContactApp />} />
            <Route path="/exo7" element={<RefApp />} />
            <Route path="/exo8" element={<TodoApp />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/exo9" element={<PizzaApp />} />
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default RoutesComponent;
