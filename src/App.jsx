import React from "react";
import Game from "./game/Game";
import Login from "./login/Login";
import Ranglista from "./ranglista/Ranglista";
import Register from "./register/Register";

function App() {
  return (
    <div className="App">
      <Game />
      <Register />
      <Login />
      <Ranglista />
    </div>
  );
}

export default App;
