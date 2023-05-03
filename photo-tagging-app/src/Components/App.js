import { Routes,Route,BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Map from "./Map";
import Scoreboard from "./ScoreBoard";
import "../Styles/App.css";
import { maps,charactersToMaps } from "../Assets/Data/Data";
import { useEffect } from "react";
import { initializeFirebase } from "../Firebase";
import MainScoreboard from "./MainScoreboard";
function App() {

  useEffect(()=>{
    initializeFirebase();
  },[]);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/map/:id" element={<Map maps={maps} characters={charactersToMaps}   />} />
        <Route path="/scoreboard/:mapName" element={<Scoreboard/>} />
        <Route path="/mainscoreboard" element={<MainScoreboard maps={maps} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
