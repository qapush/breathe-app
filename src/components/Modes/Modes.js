import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./modes.module.scss";
import modesSource from "./modes.json";
import FirstTime from "../firstTime/firstTime";


const Modes = ({ handleSwitch }) => {

  
  const [tutorial, setTutorial] = useState(true);

  const modes = modesSource.modes
  .map((mode, i) => {    
    return (
        <div key={i} className={`${styles.mode} ${styles[mode.mode]}`}>
          <Link to={mode.mode === 'custom' ? '/wlasny' : '/cwiczenie'} onClick={ () => handleSwitch(mode.mode)}>
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
      {tutorial ? <FirstTime setTutorial={setTutorial}/> : null }
      <div className={styles.modes}>
        {modes}
      </div>
    </div>
  );
};

export default Modes;
