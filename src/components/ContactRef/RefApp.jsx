import React, { useRef } from 'react';
import RefForm from '../ContactRef/RefForm';
import RefList from '../ContactRef/RefList';

const RefApp = () => {
  const inputRef = useRef(null); // Création d'une référence à l'entrée de texte
  const contactsRef = useRef([]); // Utilisation de useRef pour stocker les contacts

  const addContact = (newContact) => {
    contactsRef.current.push(newContact); // Utilisation de push pour ajouter au tableau existant
    inputRef.current.value = ''; // Réinitialisation du champ de saisie
  };

  return (
    <div>
      <h1>Répertoire avec useRef</h1>
      {/* Passer la référence à l'entrée de texte en tant que prop à RefForm */}
      <RefForm onAddContact={addContact} inputRef={inputRef} />
      <RefList contacts={contactsRef.current} /> {/* Utilisation de contactsRef.current */}
    </div>
  );
};

export default RefApp;
