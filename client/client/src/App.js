

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Component Imports
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

// Styles
import './App.css';

const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem('auth'));

  // PrivateRoute component to handle protected routes
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Route for Home */}
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />

        {/* Redirect all other paths to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
