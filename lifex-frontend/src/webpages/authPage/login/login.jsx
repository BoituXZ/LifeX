import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import styles from'./login.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in successfully:", user);
      navigate("/home")
      // Redirect to a protected page or perform other actions
    } catch (error) {
      console.error("Login error:", error);
      // Handle login errors (e.g., display an error message)
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <h1>Welcome</h1>
      <label htmlFor="email">Email
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </label>
      <label htmlFor="password">Password
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </label>
      <button type="submit" onClick={handleLogin}>Log in</button>
      {/* FIx how it looks */}
    </form>
  );
};

export default LoginForm;
