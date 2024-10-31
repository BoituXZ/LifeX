import React from 'react'
import { GiMedicines } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuClock11 } from "react-icons/lu";
import { AiOutlineBell } from "react-icons/ai";
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <>
        <aside className={styles.aside}>
        <h1>LifeX</h1>
        <nav>
          <ul>
            <li ><GiMedicines  className={styles.listIcons}/></li>
            <li ><IoFastFoodOutline className={styles.listIcons}/></li>
            <li ><LuClock11 className={styles.listIcons}/></li>
            <li ><AiOutlineBell className={styles.listIcons}/></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Navigation


