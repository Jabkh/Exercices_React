import React, { useRef, useState } from "react";

const RefForm = () => {
  const nameRef = useRef(); // Référence pour le champ de nom
  const passwordRef = useRef(); // Référence pour le champ de mot de passe
  const [formData, setFormData] = useState([]); // État pour stocker les données du formulaire

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    // Ajouter les données du formulaire à la liste des données
    setFormData([...formData, { name, password }]);
    // Réinitialiser les champs de formulaire
    nameRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username:</label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit">Valider</button>
      </form>
      {/* Afficher les données du formulaire dans une liste */}
      <ul>
        {formData.map((data, index) => (
          <li key={index}>
            Nom: {data.name}, Mot de passe: {data.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RefForm;
