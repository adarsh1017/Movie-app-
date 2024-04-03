import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const LoginForm = () => {
  const { storeToken } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed!');
      }

      const data = await response.json();
      if (data.idToken) {
        // Store the authentication token in the context
        storeToken(data.idToken);
      } else {
        throw new Error('Authentication failed!');
      }
    } catch (error) {
      setError('Authentication failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      {error && <p>{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
