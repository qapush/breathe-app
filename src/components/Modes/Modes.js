import React from "react";
import "./modes.scss";

const Modes = ({handleSwitch}) => {
  return (
    <div className="modes--wrapper">
          <div className="modes">
              
        <div className="mode" onClick={()=> handleSwitch('one')}>
          <div className="mode__header">Mode 4 - 7 - 8</div>
          <div className="mode__description">
            I'm baby chartreuse occupy godard, fam jean shorts aesthetic af
            pitchfork coloring book echo park post-ironic intelligentsia
            gluten-free helvetica selvage.
          </div>
        </div>
        <div className="mode" onClick={()=> handleSwitch('two')}>
          <div className="mode__header">Mode 4 - 4 - 4</div>
          <div className="mode__description">
            I'm baby chartreuse occupy godard, fam jean shorts aesthetic af
            pitchfork coloring book echo park post-ironic intelligentsia
            gluten-free helvetica selvage.
          </div>
        </div>
        <div className="mode" onClick={()=> handleSwitch('three')}>
          <div className="mode__header">Mode 1 - 2 - 3</div>
          <div className="mode__description">
            I'm baby chartreuse occupy godard, fam jean shorts aesthetic af
            pitchfork coloring book echo park post-ironic intelligentsia
            gluten-free helvetica selvage.
          </div>
        </div>
        <div className="mode" onClick={()=> handleSwitch('four')}>
          <div className="mode__header">Mode 5 - 1 - 10</div>
          <div className="mode__description">
            I'm baby chartreuse occupy godard, fam jean shorts aesthetic af
            pitchfork coloring book echo park post-ironic intelligentsia
            gluten-free helvetica selvage.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modes;
