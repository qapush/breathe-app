import { useReducer, useState } from "react";
import Modes from "../Modes/Modes";
import Breathe from "../breathe/Breathe";
import './app.scss';

export default function App() {

  const [showBreathe, toggleShowBreathe] = useState(false);

  const initialState = {
    inhale: 4,
    pause: 7,
    exhale: 8,
    bgColor: 'pink'
  }


  const reducer = (state, action) => {
    switch (action.type) {
      case 'one':
        return { inhale: 4, pause: 7, exhale: 8, bgColor: 'indianred' }
      case 'two':
        return { inhale: 4, pause: 4, exhale: 4, bgColor: 'darkolivegreen' }
      case 'three':
        return { inhale: 1, pause: 2, exhale: 3, bgColor: 'navy' }
      case 'four':
        return { inhale: 5, pause: 1, exhale: 10, bgColor: 'teal' }
      default:
        return { inhale: 4, pause: 7, exhale: 8, bgColor: 'pink' }
    }
  }

  const handleSwitch = (mode) => {
    dispatch({ type: mode })
    toggleShowBreathe(true)
  }


  const [params, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      {showBreathe ? <Breathe params={params}/> : <Modes handleSwitch={handleSwitch}/>}
    </div>
  );
}
