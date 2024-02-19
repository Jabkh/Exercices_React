
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h2>Liste des Pokémon</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonPage;
