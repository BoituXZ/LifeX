import React, { useState, useEffect } from 'react';
// import Navigation from '../../components/Navigation';

import styles from './Pills.module.css';  
import { getAuth, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import { getDatabase, ref, push, onValue, set } from 'firebase/database';







const days = 12
// Handling the function
// const hideButton = () =>{
//   if {}
// }




const Pills = () => {
  const [user, setUser] = useState(null)
  const [pillName, setPillName] = useState("");
  const [dosage, setDosage] = useState("")
  const [frequency, setFrequency] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [pillQuantity, setPillQuantity] = useState("")
  const [doctor, setDoctor] = useState("")
  const [pharmacy, setPharmacy] = useState("")
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const auth = getAuth()
  const db = getDatabase()

  // Pill Component
  function PillForm (){
    const handleSubmit = (event) => {
      event.preventDefault();
      if (user) {
        const newPill = {
          name: pillName,
          dosage: dosage,
          frequency: frequency,
          startDate: startDate,
          endDate: endDate,
          pillQuantity: pillQuantity,
          doctor: doctor,
          pharmacy: pharmacy,
        };
        const pillsRef = ref(db, `users/${user.uid}/pills`);
        push(pillsRef, newPill);
        setPillName('');
        setDosage('');
        setFrequency('');
        setStartDate('');
        setEndDate('');
        setPillQuantity('');
        setDoctor('');
        setPharmacy('');
      }
    };

    return(
      <div className={styles.formContainer}>
          
          <div className={styles.formDiv} id='form'>
              <form className={styles.form} onSubmit={handleSubmit}>
                  <button className={styles.closeButton} type="button"  onClick={toggleButton}>X</button>
                  <label htmlFor='name'>
                      Pill Name
                      <br/><input id='name' type='text' value={pillName} onChange={(e) => setPillName(e.target.value)}  placeholder='Ibuprofen'/>
                  </label>
                  <label htmlFor='dosage'>
                      Dosage
                      <br/><input id='dosage' type='text' value={dosage} onChange={(e) => setDosage(e.target.value)}  placeholder='500mg'/>
                  </label>
                  <label htmlFor='frequency'>
                      Frequency
                      <br/><input id='frequency' type='text' value={frequency} onChange={(e) => setFrequency(e.target.value)}  placeholder='2 Times a Day'/>
                  </label>
                  <label htmlFor='startDate'>
                      Start Date
                      <br/><input id='startDate' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}  />
                  </label>
                  <label htmlFor='endDate'>
                      End Date
                      <br/><input id='endDate' type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)}  />
                  </label>
                  <label htmlFor='pillQuantity'>
                      Number of Pills 
                      <br/><input id='pillQuantity' type='number' value={pillQuantity} onChange={(e) => setPillQuantity(e.target.value)} min={0} placeholder='20'/>
                  </label>
                  <label htmlFor='doctor'>
                      Doctor 
                      <br/><input id='doctor' type='text' value={doctor} onChange={(e) => setDoctor(e.target.value)}  placeholder='Dr Timsah'/>
                  </label>
                  <label htmlFor='pharmacy'>
                      Pharmacy
                      <br/><input id='pharmacy' type='text' value={pharmacy} onChange={(e) => setPharmacy(e.target.value)}  placeholder='Spiroc Pharmacy'/>
                  </label>
                  <button className={styles.formButton}   type="submit">Submit</button>
              </form>
          </div>
        </div>
    )
  }
  
  // Profile Section
  function Profile() {
    return (
      <>
        <section className={styles.profileContainer}>
          <div className={styles.profileTitle}>
            <h3>Hi {firstName} {surname}</h3>
            <img src='#' alt=''></img>
          </div>
          <div className={styles.profileInfo}>
            <h5>Gender: Male</h5>
            <h5>DOB: 20/01/2005</h5>
            <h5>Email: {email}</h5>
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
      </>
    );
  }
  
  
  
  // Making the form appear and reappear
  const [addButton, AddButton] = useState(false)

  const toggleButton = () =>{
    AddButton(!addButton);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userRef = ref(db, `users/${currentUser.uid}`);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          setFirstName(data.firstName);
          setSurname(data.surname);
          setEmail(data.email);
        });
        const pillsRef = ref(db, `users/${currentUser.uid}/pills`);
        onValue(pillsRef, (snapshot) => {
          const data = snapshot.val();
          setPills(data ? Object.entries(data).map(([key, value]) => ({ ...value, id: key })) : []);
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  const [pills, setPills] = useState([]);

  return(
    <>
      <div className={styles.pageContainer}>
        <section className={styles.nav}>{/*<Navigation/>*/}</section>
          
        <section className={styles.centreSection}>
          <h1>Your Pills</h1>
          <div className={styles.pillsBody}>
            <div id='cards' className={styles.pillsBodyCards}>
              {pills.map((pill) => (
                <div key={pill.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3>{pill.name}</h3>
                    <h3>{pill.dosage}</h3>
                  </div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardBottomLeft}>
                      <p>Take {pill.frequency}</p>
                      <p>{pill.startDate}</p><br/>
                      <p>Pharamacy:     <br/>{pill.pharmacy}</p><br/>
                      <p>Doctor: {pill.doctor}</p>
                    </div>
                    <div className={styles.cardBottomRight}>
                      
                      <button className={styles.cardButton}>Taken</button>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.pillsBodyButton}>
              <button className={styles.pillButton} onClick={toggleButton}>Add Pill</button>
            </div>
          </div>
        </section>

        <section className={styles.rightSection}>
          <Profile/>
        </section>
      </div>
      {addButton && <PillForm/>}
      
    </>
    
  )  

};


export default Pills;
