// auth.js

export const isAuthenticated = () => {
    // Check if user is authenticated
    // For example, you can check if a token exists in localStorage
    return localStorage.getItem('token') !== null;
  };
  