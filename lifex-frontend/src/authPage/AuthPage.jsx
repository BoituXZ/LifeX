import React from 'react'
import './AuthPage.css'
const AuthPage = () => {
  return (
    <>
        <div className="navBar">
            <div className="navBar_logo">Life<span>X</span></div>
            <div className="navBar_center">
                <div className="navBar_center_item">Mission</div>
                <div className="navBar_center_item">About Us</div>
                <div className="navBar_center_item">Contact us</div>
            </div>
        </div>
        <div className="textbox">
            <p>
              <span>Stay</span> on top of your health effortlessly<br/>with our pill management and reminder<br/> service.<br/><br/><br/>
              <span>Track</span> your emdications, manage<br/> prescriptions and recieve timely notifications<br/> to refill and take your meds. Never miss a<br/> dose or an 
              appointment again. Our system<br/> ensures you maintain your health regimen<br/> with ease and precision<br/><br/><br/>
              <h1>Stay healthy</h1>
              <h1>Stay informed</h1>
            </p>
        </div>


    </>
  )
}

export default AuthPage;