import React, { useState } from 'react';

const Register = ({ setPage }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (name && password) {
      localStorage.setItem('user', JSON.stringify({ name, password }));
      alert('Registration Successful!');
      setPage('login');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="register">
      <h2>Sign Up</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
