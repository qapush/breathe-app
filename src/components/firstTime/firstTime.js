import React from 'react'
import styles from "./firstTime.module.scss";
import {AiOutlineCloseCircle} from "react-icons/ai";

export default function FirstTime() {
  return (
    <div className={styles.firstTime}>
        <span className={styles.icon}>👋</span> 
        <h2>Pierwszy raz?</h2>
        <p>Zacznij tutaj →</p>
        <AiOutlineCloseCircle className={ styles.close }/>
    </div>
  )
}
