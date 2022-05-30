import { useSpring, animated, useSpringRef, useChain, config } from "@react-spring/web";
import styles from "./breathe.module.scss";

export default function Breathe({ params }) {

  const { inhale, inhalePause, exhale, exhalePause, bgColor } = params;

  // Circle animation

  const springCirlceRef = useSpringRef();
  const springCirlce = useSpring({
    ref: springCirlceRef,
    from: { transform: "scale(0)"},
    to: [
      { transform: "scale(1)", config: { duration: inhale * 1000 } },
      { transform: "scale(1.00001)", config: { duration: inhalePause * 1000 } },
      { transform: "scale(0)", config: { duration: exhale * 1000 } },
      { transform: "scale(0.00001)", config: { duration: exhalePause * 1000 } },
    ],
    loop: { reset: true },
  });

  // Counter animation

  const springCounterRef = useSpringRef();
  const { springCounter } = useSpring({
    ref: springCounterRef,
    config: {...config.stiff, duration: 4000},
    from: { springCounter: 5},
    springCounter: 1,
  })

  // Counter div animation

  const springCounterOpacityRef = useSpringRef();
  const {x} = useSpring({
    ref: springCounterOpacityRef,
    x: 1,
    from: { x: 0},
    config: { duration: 500 },
    onStart: x => springHelperApi.start({pause: false})
  })

  // helper div animation
  
  const [springHelper, springHelperApi] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
    pause: true
  }))

  useChain([springCounterRef,springCounterOpacityRef,springCirlceRef])

  return (
    <div className={styles.breathe} style={{ backgroundColor: bgColor }}>
       
        <animated.div className={styles.counter} style={{
          opacity: x
          .to({
            range: [0, 0.5, 1],
            output: [1, 0, 0],
          })
          .to(x => x)
        }}>
          <span>Oddychaj za </span>
          <animated.span>
            {springCounter.to(n => n.toFixed(0))}
          </animated.span>
        </animated.div>

       
      <div className={styles.breathe__inner}>
        
        <animated.div className={styles.bHelper} style={ springHelper }></animated.div>
        <animated.div className={styles.bInner} style={springCirlce}></animated.div>
      </div>
      
    </div>
  );
}
