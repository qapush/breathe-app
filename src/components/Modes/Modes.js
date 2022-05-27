import React from "react";
import { Link } from "react-router-dom";
import styles from "./modes.module.scss";
import modesSource from "./modes.json";

const Modes = ({ handleSwitch }) => {
  
  const modes = modesSource.modes
  .map((mode, i) => {
    return(
      <Link to="/cwiczenie" onClick={ () => handleSwitch(mode.mode)} key={i}>
        <div className={styles.mode}>
            <div>{mode.title}</div>
            <div className="mode__description">
              {mode.description}
            </div>
        </div>
      </Link>
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
