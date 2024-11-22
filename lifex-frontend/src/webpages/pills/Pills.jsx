import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import styles from './Pills.module.css';  
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';



const Pills = () => {
  return(
    <>
    <div className="pageContainer">
      <Navigation/>
    </div>
    </>
    
  )  

};

export default Pills;
