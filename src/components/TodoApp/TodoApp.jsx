import React, { useState } from 'react';
import TodoForm from '../TodoApp/TodoForm';
import TodoList from '../TodoApp/TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm onAddTodo={handleAddTodo} />
      <h3>Todos</h3>
      <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
    </div>
  );
};

export default TodoApp;
