import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./level1/Game";
import Register from "./register/Register";
import Login from "./login/Login";
import Ranglista from "./ranglista/Ranglista";
import GameContainer2 from "./game/GameContainer2";
import Map from "./map/Map"; // Importáltuk a Map komponenst

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/level1" element={<Game />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ranklist" element={<Ranglista />} />
        <Route path="/" element={<GameContainer2 />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
