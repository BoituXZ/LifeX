import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import styles from './Pills.module.css';  
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';





const Pills = () => {
  const [showForm, setShowForm] = useState(false);

  function AddPills(){
    const [medicineName, setMedicineName] = useState('');
    const [dosage, setDosage] = useState('');
    const [frequency, setFrequency] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [pharmacy, setPharmacy] = useState('')
    const [doctor, setDoctor] = useState('')

    const auth = getAuth(); // authenticating the user
     const db = getDatabase(); // gettting the database

    const handleSubmit = (event) => {
        event.preventDefault();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            const newPill = {
              medicineName: medicineName,
              dosage: dosage,
              frequency: frequency,
              startDate: startDate,
              endDate: endDate,
              expiryDate: expiryDate,
              pharmacy: pharmacy,
              doctor: doctor,
              
              
            };
            const pillsRef = ref(db, `users/${uid}/pills`);
            push(pillsRef, newPill);
        }

        });
    };
    const toggleForm = () => {
      setShowForm(!showForm);
    };


    // Reading the pills into the table 
    function PillTable() {
      const [pills, setPills] = useState([]);
      const auth = getAuth();
      const db = getDatabase();
    
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            const pillsRef = ref(db, `users/${uid}/pills`);
            onValue(pillsRef, (snapshot) => {
              const data = snapshot.val();
              if (data) {
                setPills(Object.values(data));
              } else {
                setPills([]);
              }
            });
          }
        });
      }, []);
    }

  return (
      <>
        <div className={styles.container}>
          <Navigation />
          <div className={styles.Body}>
            <div className={styles.bodyHeader}>
              <h1>Pills Dashboard</h1>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.pillTable}>
                <thead>
                  <tr>
                    <th>Medicine Name</th>
                    <th>Dosage</th>
                    <th>Frequency</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Expiry Date</th>
                    <th>Pharmacy</th>
                    <th>Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  {pills.map((pill, index) => (
            <tr key={index}>
              <td>{pill.name}</td>
              <td>{pill.dosage}</td>
              <td>{pill.frequency}</td>
              <td>{pill.startDate}</td>
              <td>{pill.expiryDate}</td>
              <td>{pill.pharmacy}</td>
              <td>{pill.doctor}</td>
            </tr>
          ))}
                </tbody>
              </table>


              {/* FOrm */}
              {showForm && (
              <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formTitle}>
                    <h1>Add your Pills</h1>
                  </div>
                  <div className={styles.formInputFields}>
                  <label htmlFor='medName'>Medicine Name
                    <br/><input id="medicineName" placeholder='Medicine Name' value={medicineName} onChange={(e) => setMedicineName(e.target.value)}/>
                  </label>
                  <label htmlFor='dosage'>Dosage
                    <br/><input id="dosage" placeholder='Dosage' value={dosage} onChange={(e) => setDosage(e.target.value)}/>
                    </label>
                  <label htmlFor='frequency'>Frequency
                    <br/><input id="frequency" placeholder='Frequency' value={frequency} onChange={(e) => setFrequency(e.target.value)}/>
                    </label>
                  <label htmlFor='startDate'>Start Date
                    <br/><input id="startDate"  type='Date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </label>
                  <label htmlFor='endDate'>End Date
                    <br/><input id="endDate"  type='Date'value={endDate} onChange={(e) => setEndDate(e.target.value)}  />
                    </label>
                  <label htmlFor='expiryDate'>Expiry Date
                    <br/><input id="expiryDate" type='Date' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                    </label>
                  
                  <label htmlFor='pharmacy'>Pharmacy Name
                    <br/><input id="pharmacy" placeholder='Pharmacy Name' type='text' value={pharmacy} onChange={(e) => setPharmacy(e.target.value)}  />
                    </label>
                    <label htmlFor='doctor'>Doctor
                      <br/><input id="doctor" placeholder='Doctor' type='text' value={doctor} onChange={(e) => setDoctor(e.target.value)}  />
                    </label>
                    </div>
  
                    <button type="submit">Add Medication</button>
                </form>
              </div>
            )}
            {/* End of FOrm */}


            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.addButton} onClick={toggleForm}>Add</button>
            </div>
            
          </div>
          <div className={styles.rightSidecontainer}>
            <div className={styles.profileContainer}>
              <h1>Hi Boitumelo</h1>
              <img src="/assets/images/Profile.jpg"   alt="ProfilePicture"/>
            </div>
            <div className={styles.middle}>
              <h1>Pill Streak</h1>
              <p>You have gone 12 days without missing your meds!</p>
              
            </div>
            <div className={styles.lower}>
              <h1>Upcoming Refills</h1>
              <p>You will need to refill Ibuprofen in 3 days</p>
            </div>
          </div>
        </div>
      </>
    );
};





  
};

export default Pills;
