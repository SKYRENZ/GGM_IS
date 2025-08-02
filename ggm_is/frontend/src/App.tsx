import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';

//eto ung pinaka main page ng app
// dito mo ilalagay ung mga routes ng pages mo
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes here as you create more pages */}
      </Routes>
    </Router>
  );
}

export default App;