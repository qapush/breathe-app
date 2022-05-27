import { useSpring, animated, useSpringRef, useChain } from "@react-spring/web";
import Particles from "react-tsparticles";
import ptOptions from "../../pt_options.json";
import {useState} from 'react'
import styles from "./breathe.module.scss";

export default function Breathe({ params }) {
  const { inhale, pause, exhale, bgColor } = params;

  const springCirlceRef = useSpringRef();
  const springCirlce = useSpring({
    ref: springCirlceRef,
    from: { transform: "scale(0.001)"},
    to: [
      { transform: "scale(1)", config: { duration: inhale * 1000 } },
      {
        transform: "scale(0)",
        config: { duration: exhale * 1000 },
        delay: pause * 1000,
      },
    ],
    loop: { reset: true },
  });

  const springCounterRef = useSpringRef();
  const { springCounter } = useSpring({
    ref: springCounterRef,
    from: { springCounter: 1,},
    springCounter: 3,
    config: { duration: 3000 }
  })

  const springCounterOpacityRef = useSpringRef();
  const springCounterOpacity = useSpring({
    ref: springCounterOpacityRef,
    opacity: 0,
    bottom: '150px',
    from: { opacity: 1, bottom: '0px', },
    config: { duration: 1000 }
  })

  useChain([springCounterRef,springCounterOpacityRef,springCirlceRef])

  return (
    <div className={styles.breathe} style={{ backgroundColor: bgColor }}>
      <div className={styles.breathe__inner}>
        <animated.h1 className={styles.counter} style={springCounterOpacity}>
          {springCounter.to(n => n.toFixed(0))}
        </animated.h1>
        {/* <animated.div>{number.to(n => n.toFixed(2))}</animated.div> */}
        <animated.div className={styles.bInner} style={springCirlce}></animated.div>
      </div>
      {/* <Particles params={ptOptions} className={styles.ptWrapper} /> */}
    </div>
  );
}
