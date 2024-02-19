
import React, { Component } from 'react';
import '../assets/home.css'; // Importez le fichier CSS pour le style du composant Home

class Home extends Component {
  render() {
    return (
      <div className="home-container"> {/* Ajoutez la classe CSS pour le conteneur principal */}
        <h1 className="home-title">Accueil</h1> {/* Ajoutez la classe CSS pour le titre */}
        <p className="home-description">Sélectionnez un exercice</p> {/* Ajoutez la classe CSS pour la description */}
      </div>
    );
  }
}

export default Home;
