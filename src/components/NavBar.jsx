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
          <Link to="/todo">Todo List</Link>
        </li>
        <li>
          <Link to="/pokemon">Appel Api</Link>
        </li>
        <li>
          <Link to="/exo3">FizzBuzz</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
