import React, { useRef } from 'react';
import '../../assets/todoform.css'; // Importez le fichier CSS

const TodoForm = ({ onAddTodo }) => {
  const textRef = useRef(null); // Utilisation de useRef pour créer une référence à l'élément input

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = textRef.current.value.trim(); // Accédez à la valeur de l'input via la référence
    if (!text) return;
    onAddTodo({
      id: new Date().getTime(),
      text: text,
      completed: false
    });
    textRef.current.value = ''; // Effacez le champ de texte
  };

  return (
    <div className="form-container"> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={textRef} // Attachez la référence à l'élément input
          placeholder="Ajouter une tâche..."
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default TodoForm;
