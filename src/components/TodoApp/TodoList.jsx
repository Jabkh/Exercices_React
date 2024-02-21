import React from 'react';
import '../../assets/todolist.css';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="list-container"> 
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              
            >
              {todo.text}
            </span>
            <button className='delete' onClick={() => onDelete(todo.id)}>Supprimer</button>
            <button className={todo.completed ? 'completed success' : 'warning'} /* Ajoutez des classes en fonction de l'état completed */
              onClick={() => onToggle(todo.id)}>{todo.completed ? 'Fait' : 'À faire'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
