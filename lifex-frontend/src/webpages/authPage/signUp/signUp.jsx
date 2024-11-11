import React, { useState} from 'react';

import styles from './signUp.module.css'; // Ensure this file exists and is correctly named
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate()


  const [inputs, setInputs] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    
  });


  const handleAuth = (e) => {
    e.preventDefault();
    console.log("inputs", inputs)
    
  };

  return (
    <form className={styles.sForm} onSubmit={handleAuth}>
      <h1>Welcome</h1>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={inputs.name} onChange={(e) => setInputs({...inputs,name:e.target.value})} required />
      
      <label htmlFor="surname">Surname</label>
      <input id="surname" type="text" value={inputs.surname} onChange={(e) => setInputs({...inputs,surname:e.target.value})} required />
      
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={inputs.email} onChange={(e) => setInputs({...inputs,email:e.target.value})} required />
      
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={inputs.password} onChange={(e) => setInputs({...inputs,password:e.target.value})} required />
      
      <label htmlFor="confirmPassword">Re-enter Password</label>
      <input id="confirmPassword" type="password" value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})} required />
      <button className={styles.button} type="submit" onClick={handleAuth}>Sign Up</button>\
      
    </form>
  );
};

export default SignUpForm;
