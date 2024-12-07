import React from 'react';
import styles from './Home.module.css';
import Navigation from '../../components/Navigation';

const Home = () => {

  const UpperMain = () =>{
    return(
      <>
        <div className={styles.upperMain}>
            <div className={styles.meds}><h3>Upcoming Medications</h3></div>
            <div><h3>Upcoming Meals</h3></div>
            <div><h3>Current Health</h3></div>

          </div>
      </>
    )
  }

  const LowerMain = () =>{
    return(
      <>
        <div className={styles.lowerMain}>
            <div>Diet & Meds Streak</div>
            <div>Notifications</div>
          </div>
      </>
    )
  }

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
          <UpperMain/>
          <LowerMain/>
        </main>
      </div>
    </div>
    
    </>
  )
}

export default Home