import React, { useState } from 'react';
import styles from './signUp.module.css'; // Ensure this file exists and is correctly named

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Sign-up successful!");
  };

  return (
    <form className={styles.sForm} onSubmit={handleSignUp}>
      <h1>Welcome</h1>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      
      <label htmlFor="surname">Surname</label>
      <input id="surname" type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
      
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      
      <label htmlFor="confirmPassword">Re-enter Password</label>
      <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      
      <button className={styles.button} type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
