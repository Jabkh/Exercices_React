import React, { useState } from 'react';
import '../assets/todo.css';
function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
      setTodos([...todos, inputValue]);
      setInputValue('');
  };

  return (
    <div className='todo'>
      <h2>TodoList</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={handleAddTodo}>Ajouter</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
