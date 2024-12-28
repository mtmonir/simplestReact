import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Demo App</h1>
      <nav>
        <ul>
          <li><Link to="/counter">Counter Demo</Link></li>
          <li><Link to="/todos">Todo List Demo</Link></li>
        </ul>
      </nav>
    </div>
  );
};