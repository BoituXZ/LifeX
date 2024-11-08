import React from 'react'
import { GiMedicines } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuClock11 } from "react-icons/lu";
import { AiOutlineBell } from "react-icons/ai";
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
        <aside className={styles.aside}>
          <span>LifeX</span>
          <ul>
            <li className={styles.listElement}>
              
              <Link to='../pills'>
                <GiMedicines  className={styles.listIcons}/>
                </Link>
              </li>
            <li className={styles.listElement}>
              <Link to='/home'>
                <IoFastFoodOutline className={styles.listIcons}/>
              </Link>
              </li>
            <li className={styles.listElement}>
              
              <Link to='/Reminders'>
                <LuClock11 className={styles.listIcons}/>
              </Link>
              </li>
            <li className={styles.listElement}>
              <Link to='/Notifications'>
              <AiOutlineBell className={styles.listIcons}/>
              </Link>
              </li>
          </ul>
        
      </aside>
    </>
  )
}

export default Navigation


