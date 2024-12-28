import React from 'react';
import { useGlobalState } from '../context/GlobalContext';

export const Counter: React.FC = () => {
  const { state, dispatch } = useGlobalState();

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};