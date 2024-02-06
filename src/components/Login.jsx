import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // You can add your authentication logic here
    if (username === 'sowntharya' && password === '1234') {
      setError('');
      alert('Login successful');
      // Redirect to /poll after successful login
      navigate('/poll');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleSignUp = () => {
    // Redirect to /signup
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1>Welcome!! Create your own Poll </h1>
      <form className="login-form">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <br />
        <h3>New user? Sign up now</h3>
        <button type="button" onClick={handleSignUp}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

