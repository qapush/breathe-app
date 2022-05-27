import React from "react";
import { Link } from "react-router-dom";
import styles from "./modes.module.scss";
import modesSource from "./modes.json";

const Modes = ({ handleSwitch }) => {
  
  const modes = modesSource.modes
  .map((mode, i) => {
    return(
      
        <div className={`${styles.mode} ${styles[mode.mode]}`}>
          <Link to="/cwiczenie" onClick={ () => handleSwitch(mode.mode)} key={i}>
            <div className={styles.title}>{mode.title}</div>
            <div className={styles.description}>
              {mode.description}
            </div>
          </Link>   
        </div>
    );
  })


  return (
    <div className={styles.wrapper}>
      <div className={styles.modes}>
        {modes}
      </div>
    </div>
  );
};

export default Modes;
