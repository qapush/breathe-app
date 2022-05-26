import styles from './page.module.scss';

const Why = (props) => {
  return (
    <div className="pt-2 text">
      <div className={styles.container}>
      {props.children}
      </div>
    </div>
  );
};

export default Why;