import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './navbar.scss';
import {AiFillHome} from 'react-icons/ai'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = ({handleMenu, closeMenu, menu}) => {

    let location = useLocation();
    
  return(
    <div className="navbar">
        <Link to="/"  className='navbar__icon' onClick={closeMenu}>
            { location.pathname !== '/' ? <AiFillHome/> : null }
        </Link>
        <Hamburger
          color="#fff"
          toggled={menu}
          toggle={handleMenu}
          onClick={handleMenu}
        />

    </div>
  );
};

export default Navbar;