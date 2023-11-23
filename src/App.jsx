// main.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remova o Switch
import LoginPage from './Login';
import Home from './Home';
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Main;
