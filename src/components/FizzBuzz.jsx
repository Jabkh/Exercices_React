import React, { useState } from 'react';
import '../assets/fizzbuzz.css';

function FizzBuzz() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const handleFizzBuzz = () => {
    const num = parseInt(number);
    let output = '';

    if (isNaN(num)) {
      output = 'Veuillez saisir un nombre valide.';
    } else {
      if (num % 3 === 0 && num % 5 === 0) {
        output = 'FizzBuzz';
      } else if (num % 3 === 0) {
        output = 'Fizz';
      } else if (num % 5 === 0) {
        output = 'Buzz';
      } else {
        output = num.toString();
      }
    }

    setResult(output);
  };

  return (
    <div className='fizzbuzz'>
        <h2>Exercice 3 "FizzBuzz"</h2>
        <input
        type="text"
        value={number}
        onChange={handleInputChange}
        placeholder="Entrez un nombre..."
      />
      <button onClick={handleFizzBuzz}>Tester</button>
        <p>Résultat: {result}</p>
        <p>Affiche Fizz si c'est un multiple de 3</p>
        <p>Affiche Buzz si c'est un multiple de 5</p>
        <p>Affiche FizzBuzz si c'est un multiple de 3 et de 5</p>
        <p>Affiche le nombre saisi si c'est un mutlitple différent</p>
    </div>
  );
}

export default FizzBuzz;
