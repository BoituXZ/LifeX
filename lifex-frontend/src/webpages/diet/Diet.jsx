import React from 'react'
import styles from './Diet.module.css'
import Navigation from '../../components/Navigation';

const Diet= () => {
  return (
    <div className={styles.dietPage}>
      <section className={styles.navSection}><Navigation/></section>
      <section className={styles.mainSection}>I'm proper stuff</section>
    </div>
  )
}

export default Diet