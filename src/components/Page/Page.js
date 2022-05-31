import styles from './page.module.scss';
import { Link } from 'react-router-dom';

const Why = (props) => {  
  
  let justifyClass = props.prev ? styles['fjsb'] : styles['fjr'];

  return (
    <div>
      <div className={styles.container}>
        {props.children}
        <div className={justifyClass}>

            {props.prev ? <Link to={`/${props.prev}`} className={`button`}>Wróć</Link> : null}
            {props.next ? <Link to={`/${props.next}`} className={`button`}>Dalej</Link> : null}

        </div>
      </div>
    </div>
  );
};

export default Why;