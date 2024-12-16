import React, { useState } from 'react';

const Login = ({ setPage, setUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name === name && storedUser.password === password) {
      sessionStorage.setItem('isLoggedIn', true);
      setUser(storedUser);
      alert('Login Successful!');
      setPage('welcome');
    } else {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
