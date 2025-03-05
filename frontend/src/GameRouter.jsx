import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./game/Game";
import Register from "./register/Register";
//import Login from "./login/Login";
import Ranglista from "./ranglista/Ranglista";
import LevelOne from "./level1/GameContainer/GameContainer";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/register" element={<Register />} />
       {/* <Route path="/" element={<Login />} /> */}
        <Route path="/ranklist" element={<Ranglista />} />
        <Route path="/" element={<LevelOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
