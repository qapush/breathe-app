import { useReducer, useState } from "react";
import Modes from "../Modes/Modes";
import Breathe from "../breathe/Breathe";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import Dlaczego from "../../pages/dlaczego";
import ZanimZaczniesz from "../../pages/zanimZaczniesz";
import Postawa from "../../pages/postawa";
import Wlasny from "../../pages/wlasny";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";

export default function App() {

  const [menuOpened, setMenuOpened] = useState(false);
  
  if( !localStorage.getItem('customMode') ){
    localStorage.setItem('customMode', JSON.stringify({
      lsInhale: 1,
      lsInhalePause: 1,
      lsExhale: 1,
      lsExhalePause: 1
    }))
  }

  const initialState = {
    inhale: 1,
    inhalePause: 1,
    exhale: 1,
    exhalePause: 1,
    bgColor: "#AFD5EB",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "awake":
        return { inhale: 6, inhalePause: 0, exhale: 3, exhalePause: 2, bgColor: "#F3DAAA" };
      case "regeneration":
        return { inhale: 4, inhalePause: 4, exhale: 4, exhalePause: 2, bgColor: "#EEB5BC" };
      case "relax":
        return { inhale: 4, inhalePause: 7, exhale: 0, exhalePause: 2, bgColor: "#BCD7B8" };
      case "custom":
        return { ...action.payload, bgColor: "#AFD5EB" };
      // default:
      //   return { inhale: 4, inhalePause: 7, exhale: 8, exhalePause: 2, bgColor: "#AFD5EB" };
    }
  };

  const handleSwitch = (mode) => {
    dispatch({ type: mode });
  };

  const updateCustomMode = (customSettings) => {
   localStorage.setItem('customMode', JSON.stringify({
    lsInhale: customSettings.inhale,
    lsInhalePause: customSettings.inhalePause,
    lsExhale: customSettings.exhale,
    lsExhalePause: customSettings.exhalePause
   }))
    dispatch({
      type: 'custom',
      payload: customSettings
    });
  }

  const [params, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar 
          handleMenu={() => setMenuOpened(!menuOpened)} 
          closeMenu={() => setMenuOpened(false)}
          menu={menuOpened}
          />
          {menuOpened ? <Menu handleMenu={() => setMenuOpened(!menuOpened)}/> : null }
        <Routes>
          <Route path="/" element={<Modes handleSwitch={handleSwitch} />} />
          <Route path="cwiczenie" element={<Breathe params={params} />} />
          <Route path="dlaczego" element={<Dlaczego next={'zanim-zaczniesz'} />} />
          <Route path="zanim-zaczniesz" element={<ZanimZaczniesz prev={'dlaczego'} next={'postawa'}/>} />
          <Route path="postawa" element={<Postawa prev={ 'zanim-zaczniesz'}/>} />
          <Route path="wlasny" element={<Wlasny updateCustomMode={ updateCustomMode }/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
