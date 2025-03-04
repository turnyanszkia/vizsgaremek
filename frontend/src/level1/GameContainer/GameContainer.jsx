import React from "react";
import Character from "../Character/Character";
import Platform from "../Platform/Platform";
import Spike from "../Spike/Spike";
import Goal from "../Goal/Goal";
import Cannon from "../Cannon/Cannon";
import "./GameContainer.css";


const GameContainer = () => {
  return (
    <div className="game-container">
      <div className="ground"></div>
      <Character />
      <Platform type="start" />
      <Platform type="middle" />
      <Platform type="end" />
      <Platform type="left-lower" />
      <Platform type="left-upper" />
      <Platform type="right-lower" />
      <Platform type="right-upper" />
      <Goal />
      <Cannon />
      <Spike position={{ left: "400px", bottom: "60px" }} />
      <Spike position={{ left: "600px", bottom: "60px" }} />
      <Spike position={{ left: "720px", bottom: "60px" }} />
    </div>
  );
};

export default GameContainer;
