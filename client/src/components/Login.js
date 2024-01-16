// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic here

    // For demonstration purposes, assume login is successful
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      // Redirect to the dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>CCS - Note Taking App</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
