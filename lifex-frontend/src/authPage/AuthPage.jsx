import React from 'react'
import { useState } from 'react';
import './AuthPage.css'
import LoginForm from './login/login'
import SignUpForm from './signUp/signUp';





const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
        <div className="navBar">
            <div className="navBar_logo">Life<span>X</span></div>
            <div className="navBar_center">
                <div className="navBar_center_item"><a href='#'>Mission</a></div>
                <div className="navBar_center_item"><a href='#'>About Us</a></div>
                <div className="navBar_center_item"><a href='#'>Contact Us</a></div>
            </div>
        </div>
        <div className='authBody'>
          <div className="textbox">
              <article>
                <span>Stay</span> on top of your health effortlessly<br/>with our pill management and reminder<br/> service.<br/><br/><br/>
                <span>Track</span> your emdications, manage<br/> prescriptions and recieve timely notifications<br/> to refill and take your meds. Never miss a<br/> dose or an 
                appointment again. Our system<br/> ensures you maintain your health regimen<br/> with ease and precision<br/>
                <h1>Stay healthy</h1>
                <h1>Stay informed.</h1>
              </article>
          </div>
            <div className="authForm">
              <div>
                {isSignUp ? <SignUpForm /> : <LoginForm />}
                <button className='isMember' onClick={toggleForm}>
                  {isSignUp ? 'Already a member? Login' : 'Need an account? Sign Up'}
                </button>
              </div>        
            </div>
        </div>
        


    </>
  )
}

export default AuthPage;