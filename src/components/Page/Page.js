import styles from './page.module.scss';
import { Link } from 'react-router-dom';

const Why = (props) => {  
  return (
    <div className="pt-2 text">
      <div className={styles.container}>
        {props.children}
        <div className={styles.pagination}>

            {props.prev ? <Link to={`/${props.prev}`} className={`button`}>Wróć</Link> : null}


            {props.next ? <Link to={`/${props.next}`} className={`button`}>Dalej</Link> : null}

        </div>
      </div>
    </div>
  );
};

export default Why;