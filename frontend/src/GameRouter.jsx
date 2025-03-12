import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./game/Game";
import Register from "./register/Register";
//import Login from "./login/Login";
import Ranglista from "./ranglista/Ranglista";
import GameContainer2 from "./level1/GameContainer/GameContainer2";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/register" element={<Register />} />
       {/* <Route path="/" element={<Login />} /> */}
        <Route path="/ranklist" element={<Ranglista />} />
        <Route path="/" element={<GameContainer2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
