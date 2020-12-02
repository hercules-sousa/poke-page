import React from 'react';
import "./app.css"
import pokemonLogo from "./assets/poke-image.svg"

function App() {
  return (
    <div id="container">
      <div id="header-container">
        
        <svg height="300" width="800">
          <ellipse cx="400" cy="" rx="370" ry="250" fill="#FFCB05"/>
        </svg>

        <div id="imageContainer">
          <img src={pokemonLogo} alt="Pokemon Logo"/>
        </div>
      </div>
    </div>
  );
}

export default App;
