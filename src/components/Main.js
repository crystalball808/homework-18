import React from "react";
import backgroundImage from "../assets/background/bruno-aguirre.jpg";

function Main() {
  return (
    <div className="main">
      <h1>Це головна сторінка</h1>
      <img id="main-img" src={backgroundImage} alt="sdf"></img>
    </div>
  );
}

export default Main;
