import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = ({handleMenu}) => {
  return (
    <div className="navmenu">
        <Link to="/" onClick={handleMenu}>Wybierz tryb</Link>
        <Link to="/dlaczego" onClick={handleMenu}>Dlaczego oddychać</Link>
        <Link to="/instrukcja" onClick={handleMenu}>Jak oddychać</Link>
    </div>
  );
};

export default Menu;
