import React, { useState } from 'react';
import ContactForm from '../ContactApp/ContactForm';
import ContactList from '../ContactApp/ContactList';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

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
