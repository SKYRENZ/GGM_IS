import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add more routes here as you create more pages */}
      </Routes>
    </Router>
  );
}

export default App;