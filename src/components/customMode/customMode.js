import styles from './custom.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomMode({updateCustomMode}) {

    const {lsInhale, lsInhalePause, lsExhale, lsExhalePause, lsBgColor} = JSON.parse(localStorage.getItem('customMode'));

    const [inhale, setInhale] = useState(lsInhale);
    const [inhalePause, setInhalePause] = useState(lsInhalePause);
    const [exhale, setExhale] = useState(lsExhale);
    const [exhalePause, setExhalePause] = useState(lsExhalePause);



    

    return (
        <>
            <h1>Własny</h1>

            {/* WDECH */}
            <label htmlFor="inhale">
                <h2 className={ styles.partitionName}>Wdech: <span>{ inhale } sekund</span></h2>
            </label>
            <input 
            type="range" 
            id="inhale" 
            name="inhale" 
            min="1" 
            max="30" 
            value={inhale}
                onChange={e => {
                    setInhale(e.target.value)
            }}
            >                
            </input>

            {/* PAUZA PO WDECHU */}

            <label htmlFor="inhalePause">
                <h2 className={ styles.partitionName}>Pauza po wdechu: <span>{ inhalePause } sekund</span></h2>
            </label>
            <input 
            type="range" 
            id="inhalePause" 
            name="inhalePause" 
            min="0" 
            max="30" 
            value={inhalePause}
                onChange={e => {
                    setInhalePause(e.target.value)
            }}
            >                
            </input>

            {/* WYDECH */}

            <label htmlFor="exhale">
                <h2 className={ styles.partitionName}>Wydech: <span>{ exhale } sekund</span></h2>
            </label>
            <input 
            type="range" 
            id="exhale" 
            name="exhale" 
            min="1" 
            max="30" 
            value={exhale}
                onChange={e => {
                    setExhale(e.target.value)
            }}
            >                
            </input>

            {/* PAUZA PO WYDECHU */}

            <label htmlFor="exhalePause">
                <h2 className={ styles.partitionName}>Pauza po wydechu: <span>{ exhalePause } sekund</span></h2>
            </label>
            <input 
            type="range" 
            id="exhalePause" 
            name="exhalePause" 
            min="0" 
            max="30" 
            value={exhalePause}
                onChange={e => {
                    setExhalePause(e.target.value)
            }}
            >                
            </input>

            <Link
                to="/cwiczenie"
                className={`button ${styles.start}`}
                onClick={ () => updateCustomMode({inhale, inhalePause, exhale, exhalePause})}
            >
                Zacznij
            </Link>
           
        </>
    )
}

