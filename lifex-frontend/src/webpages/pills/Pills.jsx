import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';

import styles from './Pills.module.css';  
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';



const Pills = () => {
  return(
    <>
      <div className={styles.pageContainer}>
        <section className={styles.nav}>Nav</section>

        <section className={styles.centreSection}>
          <h1>Your Pills</h1>
          <div className={styles.pillsBody}>
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
            </div><div className={styles.card}>
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
            </div><div className={styles.card}>
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
        </section>

        <section className={styles.rightSection}>Profile</section>
      </div>
    </>
    
  )  

};

export default Pills;
