import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/todo">Exercice 1</Link>
        </li>
        <li>
          <Link to="/pokemon">Appel Api</Link>
        </li>
        <li>
          <Link to="/exo3">FizzBuzz</Link>
        </li>
        <li>
          <Link to="/exo6">ContactApp</Link>
        </li>
        <li>
          <Link to="/exo7">RefApp</Link>
        </li>
        <li>
          <Link to="/exo8">TodoApp</Link>
        </li>
        <li>
          <Link to="/auth">Authentication</Link>
        </li>
        <li>
          <Link to="/exo9">ExoContext</Link>
        </li>
        <li>
          <Link to="/exo10">Ecommerce</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
