// src/PokemonPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap'; // Import des composants de carte Bootstrap

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemonList(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Pokémon:', error);
        setLoading(false);
      });
  }, []);

  const getPokemonImageUrl = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  return (
    <div>
      <h2>Liste des Pokémon</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row xs={2} md={4} lg={4}> {/* Utilisation de la grille Bootstrap avec 4 éléments par colonne sur les écrans moyens et grands */}
          {pokemonList.map((pokemon, index) => (
            <Col key={index} className="mb-4"> {/* Ajout de la classe de marge inférieure pour espacer les cartes */}
              <Card>
                <Card.Img variant="top" src={getPokemonImageUrl(index + 1)} style={{ width: '100%', height: 'auto' }} /> {/* Ajustement de la largeur de l'image */}
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default PokemonPage;
