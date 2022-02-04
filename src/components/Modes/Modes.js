import React from "react";
import { Link } from "react-router-dom";
import "./modes.scss";
import modesSource from "./modes.json";

const Modes = ({ handleSwitch }) => {
  
  const modes = modesSource.modes
  .map((mode, i) => {
    return(
      <Link to="/cwiczenie" onClick={ () => handleSwitch(mode.mode)} key={i}>
        <div className="mode">
            <div className="mode__header">Mode {mode.title}</div>
            <div className="mode__description">
              {mode.description}
            </div>
        </div>
      </Link>
    );
  })


  return (
    <div className="modes--wrapper">
      <div className="modes pt-2">
        {modes}
      </div>
    </div>
  );
};

export default Modes;
