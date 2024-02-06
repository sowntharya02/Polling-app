import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './signup.css';

const SignupPage = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = () => {
    // You can add your signup logic here
    if (!username || !email || !password || !confirmPassword) {
        setError('Please fill in all the fields.');
        return;
      }
    else if (password !== confirmPassword) {
      setError("Passwords don't match. Please try again.");
    } else {
      setError('');
      alert('Signed Up Succesfully!')
      navigate('/poll');
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form className="signup-form">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};


export default SignupPage

