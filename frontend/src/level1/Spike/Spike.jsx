import React from "react";
import "./Spike.css";

const Spike = ({ position, inverted }) => {
  return (
    <div
      className={`spike ${inverted ? "inverted" : ""}`}
      style={position}
    ></div>
  );
};

export default Spike;
