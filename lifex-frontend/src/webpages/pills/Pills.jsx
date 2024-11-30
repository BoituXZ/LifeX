import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';

import styles from './Pills.module.css';  
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';

// TODO: ADD the hiding and showing form functionality


const days = 12
// Handling the function
// const hideButton = () =>{
//   if {}
// }



const Pills = () => {
  const [pillName, setPillName] = useState("");
  const [dosage, setDosage] = useState("")
  const [frequency, setFrequency] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [pillQuantity, setPillQuantity] = useState("")
  const [doctor, setDoctor] = useState("")
  const [pharmacy, setPharmacy] = useState("")


  const [addButton, AddButton] = useState(false)

  const toggleButton = () =>{
    AddButton(!addButton);
  };










  return(
    <>
      <div className={styles.pageContainer}>
        <section className={styles.nav}>{/*<Navigation/>*/}</section>
          
        <section className={styles.centreSection}>
          <h1>Your Pills</h1>
          <div className={styles.pillsBody}>
            <div className={styles.pillsBodyCards}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>Ibuprofen</h3>
                <h3>500mg</h3>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardBottomLeft}>
                  <p>Take Two Times a Day</p>
                  <p>12/08/2024</p><br/>
                  <p>Pharamacy:     <br/>12Ave</p><br/>
                  <p>Doctor: Boitumelo</p>
                </div>
                <div className={styles.cardBottomRight}>
                  
                  <button className={styles.cardButton}>Taken</button>
                  
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>Ibuprofen</h3>
                <h3>500mg</h3>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardBottomLeft}>
                  <p>Take Two Times a Day</p>
                  <p>12/08/2024</p><br/>
                  <p>Pharamacy:     <br/>12Ave</p><br/>
                  <p>Doctor: Boitumelo</p>
                </div>
                <div className={styles.cardBottomRight}>
                  
                  <button className={styles.cardButton}>Taken</button>
                  
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>Ibuprofen</h3>
                <h3>500mg</h3>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardBottomLeft}>
                  <p>Take Two Times a Day</p>
                  <p>12/08/2024</p><br/>
                  <p>Pharamacy:     <br/>12Ave</p><br/>
                  <p>Doctor: Boitumelo</p>
                </div>
                <div className={styles.cardBottomRight}>
                  
                  <button className={styles.cardButton}>Taken</button>
                  
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>Ibuprofen</h3>
                <h3>500mg</h3>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardBottomLeft}>
                  <p>Take Two Times a Day</p>
                  <p>12/08/2024</p><br/>
                  <p>Pharamacy:     <br/>12Ave</p><br/>
                  <p>Doctor: Boitumelo</p>
                </div>
                <div className={styles.cardBottomRight}>
                  
                  <button className={styles.cardButton}>Taken</button>
                  
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>Ibuprofen</h3>
                <h3>500mg</h3>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardBottomLeft}>
                  <p>Take Two Times a Day</p>
                  <p>12/08/2024</p><br/>
                  <p>Pharamacy:     <br/>12Ave</p><br/>
                  <p>Doctor: Boitumelo</p>
                </div>
                <div className={styles.cardBottomRight}>
                  
                  <button className={styles.cardButton}>Taken</button>
                  
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>Ibuprofen</h3>
                <h3>500mg</h3>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardBottomLeft}>
                  <p>Take Two Times a Day</p>
                  <p>12/08/2024</p><br/>
                  <p>Pharamacy:     <br/>12Ave</p><br/>
                  <p>Doctor: Boitumelo</p>
                </div>
                <div className={styles.cardBottomRight}>
                  
                  <button className={styles.cardButton}>Taken</button>
                  
                </div>
              </div>
            </div>
            </div>
            <div className={styles.pillsBodyButton}>
              <button className={styles.pillButton} onClick={toggleButton}>Add Pill</button>
            </div>
            
          </div>
        </section>

        <section className={styles.rightSection}>
          <section className={styles.profileContainer}>
            <div className={styles.profileTitle}>
              <h3>Hi Boitumelo</h3>
              <img src='#'></img>
            </div>
            <div className={styles.profileInfo}>
              <h5>Gender: Male</h5>
              <h5>DOB: 20/01/2005</h5>
              <h5>Email: boituu.xz@gmail.com</h5>
            </div>
          </section>
          <section className={styles.streakContainer}>
            <div className={styles.streakTally}>
              <h3>Streak: {days}</h3>
            </div>
            <div className={styles.streakCalender}>
              This should be a calender
            </div>
          </section>
          <section className={styles.refillContainer}>
            <div className={styles.refillTop}>
            <h3>Upcoming Refills</h3>
            </div>
            
            <div className={styles.refillBottom}>
            <div className={styles.refill}>
              <h4>Ibuprofen</h4>
              <p>23 Jan</p>
            </div>
            <div className={styles.refill}>
              <h4>Ibuprofen</h4>
              <p>23 Jan</p>
            </div>
            <div className={styles.refill}>
              <h4>Ibuprofen</h4>
              <p>23 Jan</p>
            </div>
            <div className={styles.refill}>
              <h4>Ibuprofen</h4>
              <p>23 Jan</p>
            </div>
            <div className={styles.refill}>
              <h4>Ibuprofen</h4>
              <p>23 Jan</p>
            </div>
            <div className={styles.refill}>
              <h4>Ibuprofen</h4>
              <p>23 Jan</p>
            </div>
            </div>
            
            
            
          </section>
        </section>
      </div>
      <div className={styles.formContainer}>
        
        <div className={styles.formDiv} id='form'>
            <form className={styles.form}>
                <label htmlFor='name'>
                    Pill Name
                    <br/><input id='name' type='text' value={pillName} required placeholder='Ibuprofen'/>
                </label>
                <label htmlFor='dosage'>
                    Dosage
                    <br/><input id='dosage' type='text' value={dosage} required placeholder='500mg'/>
                </label>
                <label htmlFor='frequency'>
                    Frequency
                    <br/><input id='frequency' type='text' value={frequency} required placeholder='2 Times a Day'/>
                </label>
                <label htmlFor='startDate'>
                    Start Date
                    <br/><input id='startDate' type="date" value={startDate} required />
                </label>
                <label htmlFor='endDate'>
                    End Date
                    <br/><input id='endDate' type='date' value={endDate} required />
                </label>
                <label htmlFor='pillQuantity'>
                    Number of Pills 
                    <br/><input id='pillQuantity' type='number' value={pillQuantity} min={0}required placeholder='20'/>
                </label>
                <label htmlFor='doctor'>
                    Doctor 
                    <br/><input id='doctor' type='text' value={doctor} required placeholder='Dr Timsah'/>
                </label>
                <label htmlFor='pharmacy'>
                    Pharmacy
                    <br/><input id='pharmacy' type='text' value={pharmacy} required placeholder='Spiroc Pharmacy'/>
                </label>
            </form>
        </div>
    </div>
    </>
    
  )  

};

export default Pills;
