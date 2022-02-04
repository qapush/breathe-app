import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './navbar.scss';

const homeIcon = <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.8 248.28"><polygon fill="white" points="261.8 107.8 130.91 0.01 130.9 0 130.9 0 130.9 0 130.9 0.01 0 107.8 8.07 127.73 31.82 108.17 31.82 248.28 231.85 248.28 231.85 109.71 253.73 127.73 261.8 107.8"/></svg>

const Navbar = ({handleMenu, closeMenu}) => {

    let location = useLocation();
    
  return(
    <div className="navbar">
        <Link to="/"  className='navbar__icon' onClick={closeMenu}>
            { location.pathname !== '/' ? homeIcon : null }
        </Link>
        <span className="menubutton" onClick={handleMenu}>
            menu
        </span>
    </div>
  );
};

export default Navbar;