import React, { useState } from 'react';

import styles from'./login.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })


  const handleLogin = () => {
    if (!inputs.email || !inputs.password) {
      alert("One of the fields is missing!")
      return
    } else {
      navigate("/Home")

    }
  } 

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <h1>Welcome</h1>
      <label htmlFor="email">Email
        <input id="email" type="email" value={inputs.email} onChange={(e) => setInputs({...inputs,email:e.target.value})} required/>
      </label>
      <label htmlFor="password">Password
        <input id="password" type="password" value={inputs.password} onChange={(e) => setInputs({...inputs,password:e.target.value})} required/>
      </label>
      <button type="submit" onClick={handleLogin}>Log in</button>
      {/* FIx how it looks */}
    </form>
  );
};

export default LoginForm;
