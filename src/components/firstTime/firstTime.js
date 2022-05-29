import React from 'react'
import styles from "./firstTime.module.scss";
import { Link } from 'react-router-dom';

export default function FirstTime({setTutorial}) {


  return (
    <div className={styles.firstTime}>
        <span className={styles.icon}>👋</span> 
        <h2>Pierwszy raz?</h2>
        <p className={styles.text}>
            Zapraszamy do naszego przewodnika. Znajdziesz w nim onformacje, które pomogą Ci w prawidłowym oddychaniu.
          </p>
          <Link to="/dlaczego" className={`button ${styles.tutorial}`}>
              Do przewodnika
          </Link>
      <span className={styles.close} onClick={() => setTutorial(false)}>
            Nie, dziękuję   
          </span>
    </div>
  )
}
