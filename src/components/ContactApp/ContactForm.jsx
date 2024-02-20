import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({ username, email });
    setUserName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default ContactForm;
