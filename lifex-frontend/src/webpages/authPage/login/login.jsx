import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from'./login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h1>Welcome</h1>
      <label htmlFor="email">Email
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </label>
      <label htmlFor="password">Password
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </label>
      <Link to='./Home'><button type="submit">Log in</button></Link>
      {/* FIx how it looks */}
    </form>
  );
};

export default LoginForm;
