/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PrivateRoute from './routes/PrivateRoute/index';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  const [session, setSession] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Navbar
        showNav={toggleMenu}
        isOpen={showMenu}
      />
      <Routes>
        <Route path="/login" element={<Login user={session} />} />
        <Route
          path="/"
          element={(
            <PrivateRoute user={session}>
              <Home title="Home" />
            </PrivateRoute>
)}
        />
        <Route
          path="/dashboard"
          element={(
            <PrivateRoute user={session}>
              <Dashboard />
            </PrivateRoute>
)}
        />
      </Routes>
    </>
  );
};

export default App;
