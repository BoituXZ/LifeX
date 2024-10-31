import React from 'react';
import styles from './Home.module.css';
import Navigation from '../../components/Navigation';

const Home = () => {

  
  return (
    <>
    <div className={styles.mainContainer}>
      <Navigation />
      <div className={styles.bodyContainer}>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            
            <h1>MediView</h1>
            <div className={styles.headerProfile}>Your Profile</div>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.upperMain}>
            <div>Upcoming Medications</div>
            <div>Upcoming Meals</div>
            <div>Current Health</div>
          </div>
          <div className={styles.lowerMain}>
            <div>Diet & Meds Streak</div>
            <div>Notifications</div>
          </div>
        </main>
      </div>
    </div>
    
    </>
  )
}

export default Home