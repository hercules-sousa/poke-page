import React from "react";
import "./app.css";
import pokemonLogo from "./assets/poke-image.svg";
import pokedex from "./assets/pokedex-image.png";

const App = () => {
  return (
    <div id="container">
      <div id="headerContainer">
        <svg height="250" width="800">
          <ellipse cx="400" cy="" rx="370" ry="250" fill="#FFCB05" />
        </svg>

        <div id="imageContainer">
          <img src={pokemonLogo} alt="Pokemon Logo" />
        </div>
      </div>

      <div
        className="body"
        style={{
          display: "grid",
          gridTemplateColumns: "30% 70%",
        }}
      >
        <div id="leftBodyContainer">
          <img src={pokedex} alt="Pokedex" />

          <div id="loremBox">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            rem eaque qui nisi ea odit vel dignissimos perspiciatis dicta
            consectetur quas repellendus, architecto facere quod amet soluta
            repellat, quo doloribus ut magnam ipsum maxime maiores consequuntur
            magni! Suscipit omnis quia sit illum quam magni laborum neque aut
            esse voluptatem, quis culpa dolore repudiandae provident, quasi
            aspernatur velit impedit dicta temporibus?
          </div>
        </div>

        <div id="RightBodyContainer">
          <div className="pokeBox"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
