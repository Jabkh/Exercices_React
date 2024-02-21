// TodoList.js
import React from 'react';
import '../../assets/todolist.css'; // Importez le fichier CSS

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="list-container"> 
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              className={todo.completed ? 'completed success' : 'warning'} /* Ajoutez des classes en fonction de l'état completed */
              onClick={() => onToggle(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
