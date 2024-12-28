import React from 'react';
import { TodoList } from '../components/TodoList';
import { Link } from 'react-router-dom';

export const TodoPage: React.FC = () => {
  return (
    <div>
      <h1>Todo List Demo</h1>
      <TodoList />
      <p><Link to="/">Back to Home</Link></p>
    </div>
  );
};