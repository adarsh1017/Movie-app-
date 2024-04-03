import React from 'react';
import { useAuth } from './AuthContext';

const LogoutButton = () => {
  const { clearToken } = useAuth();

  const handleLogout = () => {
    // Clear token on logout
    clearToken();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
