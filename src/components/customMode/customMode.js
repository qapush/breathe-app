import styles from './custom.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomMode() {

    const [inhale, setInhale] = useState(4);
    const [inhalePause, setInhalePause] = useState(7);
    const [exhale, setExhale] = useState(8);
    const [exhalePause, setExhalePause] = useState(0);

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
            min="0" 
            max="30" 
            value={inhale}
                onChange={e => {
                    console.log(e.target.value);
                    setInhale(e.target.value)
            }}
            >                
            </input>

            {/* PAUZA PO WDECHU */}

            <label htmlFor="inhale">
                <h2 className={ styles.partitionName}>Pauza po wydechu: <span>{ inhalePause } sekund</span></h2>
            </label>
            <input 
            type="range" 
            id="inhale" 
            name="inhale" 
            min="0" 
            max="30" 
            value={inhalePause}
                onChange={e => {
                    console.log(e.target.value);
                    setInhalePause(e.target.value)
            }}
            >                
            </input>

            {/* WYDECH */}

            <label htmlFor="inhale">
                <h2 className={ styles.partitionName}>Wydech: <span>{ exhale } sekund</span></h2>
            </label>
            <input 
            type="range" 
            id="inhale" 
            name="inhale" 
            min="0" 
            max="30" 
            value={exhale}
                onChange={e => {
                    console.log(e.target.value);
                    setExhale(e.target.value)
            }}
            >                
            </input>

            {/* PAUZA PO WYDECHU */}

            <label htmlFor="inhale">
                <h2 className={ styles.partitionName}>Pauza po wydechu: <span>{ exhalePause } sekund</span></h2>
            </label>
            <input 
            type="range" 
            id="inhale" 
            name="inhale" 
            min="0" 
            max="30" 
            value={exhalePause}
                onChange={e => {
                    console.log(e.target.value);
                    setExhalePause(e.target.value)
            }}
            >                
            </input>

            <Link to="/cwiczenie" className="button">
                Zacznij
            </Link>
           
        </>
    )
}

