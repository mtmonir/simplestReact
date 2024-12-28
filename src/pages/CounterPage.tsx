import React from 'react';
import { Counter } from '../components/Counter';
import { Link } from 'react-router-dom';

export const CounterPage: React.FC = () => {
  return (
    <div>
      <h1>Counter Demo</h1>
      <Counter />
      <p><Link to="/">Back to Home</Link></p>
    </div>
  );
};