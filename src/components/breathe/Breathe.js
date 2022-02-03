import { useReducer } from "react";
import { useSpring, animated } from "@react-spring/web";
import Particles from "react-tsparticles";
import ptOptions from "../../pt_options.json";
import "./breathe.scss";

export default function Breathe({ params }) {
  const { inhale, pause, exhale, bgColor } = params;
  const duration = inhale + pause + exhale;



  const [ spring] = useSpring(() => ({
    from: { transform: 'scale(0.01)'},
    to: [
      { transform: 'scale(1)', config: {duration: inhale * 1000} },
      { transform: 'scale(0)', config: { duration: exhale * 1000 }, delay: pause * 1000 }
    ],
    loop: { reset: true }
  }))



  return (
    <div className="breathe" style={{ backgroundColor: bgColor }}>
      <div className="breathe__inner">
{/* 
        <h3>
          Stage
        </h3> */}

        <animated.div className="bInner" style={spring}></animated.div>
        
      </div>
      <Particles params={ptOptions} className="ptWrapper" />
    </div>
  );
}
