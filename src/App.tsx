import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import { Home } from './pages/Home';
import { CounterPage } from './pages/CounterPage';
import { TodoPage } from './pages/TodoPage';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todos" element={<TodoPage />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;