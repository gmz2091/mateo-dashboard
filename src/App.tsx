/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PrivateRoute from './routes/PrivateRoute/index';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  const [session, setSession] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setSession(true);
    } else if (token === undefined || token === null) {
      setSession(false);
    }
  }, []);

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
        <Route path="/login" element={<Login user={session} handleSession={setSession} />} />
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
