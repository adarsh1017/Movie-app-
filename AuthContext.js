import React, { createContext, useContext, useState } from 'react';

// Create a context to manage authentication token
const AuthContext = createContext();

// Custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  // Function to store token
  const storeToken = (token) => {
    setAuthToken(token);
  };

  // Function to clear token on logout
  const clearToken = () => {
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, storeToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};
