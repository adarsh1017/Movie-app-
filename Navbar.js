// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';

function Navbar({ user }) {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        {user ? (
          <li><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
