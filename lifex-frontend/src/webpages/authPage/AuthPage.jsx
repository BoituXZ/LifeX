import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthPage.module.css'
import LoginForm from './login/login'
import SignUpForm from './signUp/signUp';
// import { auth } from 'firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';





const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
        <div className={styles.navBar}>
            <div className={styles.navBar_logo}>Life<span>X</span></div>
            <div className={styles.navBar_center}>
            <div className="navBar_center_item"><Link to='/Mission'>Mission</Link></div>
                <div className="navBar_center_item"><Link to='/Aboutus'>About Us</Link></div>
                <div className="navBar_center_item"><Link to='/Contactus'>Contact Us</Link></div>
            </div>
        </div>
        <div className={styles.authBody}>
          <div className={styles.textbox}>
              <article>
                <span>Stay</span> on top of your health effortlessly<br/>with our pill management and reminder<br/> service.<br/><br/><br/>
                <span>Track</span> your emdications, manage<br/> prescriptions and recieve timely notifications<br/> to refill and take your meds. Never miss a<br/> dose or an 
                appointment again. Our system<br/> ensures you maintain your health regimen<br/> with ease and precision<br/>
                <h1>Stay healthy</h1>
                <h1>Stay informed.</h1>
              </article>
          </div>
            <div className={styles.authForm}>
              <div>
                {isSignUp ? <SignUpForm /> : <LoginForm />}
                <button className={styles.isMember}onClick={toggleForm}>
                  {isSignUp ? 'Already a member? Login' : 'Need an account? Sign Up'}
                </button>
              </div>        
            </div>
        </div>
        


    </>
  )
}

export default AuthPage;