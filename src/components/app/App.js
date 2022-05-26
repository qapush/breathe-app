import { useReducer, useState } from "react";
import Modes from "../Modes/Modes";
import Breathe from "../breathe/Breathe";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import Dlaczego from "../../pages/dlaczego";
import ZanimZaczniesz from "../../pages/zanimZaczniesz";
import Postawa from "../../pages/postawa";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import "./app.scss";

export default function App() {

  const [menu, setMenu] = useState(false);

  const initialState = {
    inhale: 4,
    pause: 7,
    exhale: 8,
    bgColor: "indianred",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "one":
        return { inhale: 4, pause: 7, exhale: 8, bgColor: "indianred" };
      case "two":
        return { inhale: 4, pause: 4, exhale: 4, bgColor: "darkolivegreen" };
      case "three":
        return { inhale: 1, pause: 2, exhale: 3, bgColor: "navy" };
      case "four":
        return { inhale: 5, pause: 1, exhale: 10, bgColor: "teal" };
      default:
        return { inhale: 4, pause: 7, exhale: 8, bgColor: "pink" };
    }
  };

  const handleSwitch = (mode) => {
    dispatch({ type: mode });
  };

  const [params, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      
      <BrowserRouter>
        <Navbar 
          handleMenu={() => setMenu(!menu)} 
          closeMenu={() => setMenu(false)}
          menu={menu}
          />
          {menu ? <Menu handleMenu={() => setMenu(!menu)}/> : null }
        <Routes>
          <Route path="/" element={<Modes handleSwitch={handleSwitch} />} />
          <Route path="cwiczenie" element={<Breathe params={params} />} />
          <Route path="dlaczego" element={<Dlaczego />} />
          <Route path="zanim-zaczniesz" element={<ZanimZaczniesz />} />
          <Route path="postawa" element={<Postawa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
