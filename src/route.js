import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import PokemonPage from './components/PokemonPage';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import FizzBuzz from './components/FizzBuzz';

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
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default RoutesComponent;
