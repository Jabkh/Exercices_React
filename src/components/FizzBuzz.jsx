import React, { useState } from 'react';
import '../assets/fizzbuzz.css';


function FizzBuzz() {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState('');
  
    const handleFizzBuzz = () => {
      let output = '';
  
      if (number % 15 === 0) {
        output = 'FizzBuzz';
      } else if (number % 3 === 0) {
        output = 'Fizz';
      } else if (number % 5 === 0) {
        output = 'Buzz';
      } else {
        output = number.toString();
      }
  
      setResult(output);
    };
  
    const incrementNumber = () => {
      setNumber(prevNumber => prevNumber + 1 );
    };
  
    const decrementNumber = () => {
      setNumber(prevNumber => (prevNumber === 0) ? prevNumber : prevNumber - 1);
    };
  
    return (
      <div className='fizzbuzz'>
        <div>
        <div>{number}</div>
          <button onClick={decrementNumber}>-</button>
          <button onClick={incrementNumber}>+</button>
        </div>

        <p> {result}</p>

        <p>Affiche Fizz si c'est un multiple de 3</p>
        <p>Affiche Buzz si c'est un multiple de 5</p>
        <p>Affiche FizzBuzz si c'est un multiple de 3 et de 5</p>
        <p>Affiche le nombre saisi si c'est un mutlitple différent</p>
      </div>
    );
  }


export default FizzBuzz;
