import React, { useState } from 'react';
import '../../assets/authForm.css';
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Logique d'inscription ici
    console.log('Inscription avec:', username, email, password);
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form className="form-container" onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom d'utilisateur"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Adresse e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;
