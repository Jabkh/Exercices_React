import React, { useState } from 'react';
import ContactForm from '../ContactApp/ContactForm';
import ContactList from '../ContactApp/ContactList';

const ContactApp = () => {
  // Déclarer un état contacts avec useState
  // contacts est initialement un tableau vide
  const [contacts, setContacts] = useState([]);

  // Utilisation de setContacts pour mettre à jour l'état contacts
  // On étend le tableau existant avec le nouveau contact à ajouter
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Mon Répertoire</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
