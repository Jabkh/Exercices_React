import React from 'react';

const RefList = ({ contacts }) => {
  return (
    <div>
      <h2>Liste des contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.username} - {contact.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default RefList;
