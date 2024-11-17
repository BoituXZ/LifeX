import React, { useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../../../firebase/firebase";
import styles from './signUp.module.css'; // Ensure this file exists and is correctly named
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()
    
  const handleSignUp = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword){
        alert("Passwords must be the same")} else{
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
  
        // Save user data to Realtime Database
        const usersRef = ref(database, "users/" + user.uid);
        await set(usersRef, {
          firstName: firstName,
          surname: surname,
          age: age,
        });
  
        console.log("User registered successfully:", user);
        navigate("/home")
        // Redirect to login or another page
      } catch (error) {
        console.error("Registration error:", error);
      };
    };
;
return (
    <form className={styles.sForm} onSubmit={handleSignUp}>
      <h1>Welcome</h1>
      <label htmlFor="name">Name</label>
      <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      
      <label htmlFor="surname">Surname</label>
      <input id="surname" type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />

      <label htmlFor="age">Age</label>
      <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      
      <label htmlFor="confirmPassword">Re-enter Password</label>
      <input id="confirmPassword" type="password" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} required />
      <button className={styles.button} type="submit" onSubmit={handleSignUp}>Sign Up</button>
      
    </form>
  );
};

export default SignUp;
