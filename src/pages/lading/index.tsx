import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

import "./styles.css";
import pokemonLogo from "../../assets/poke-image.svg";
import pokedex from "../../assets/pokedex-image.png";

const Landing = () => {
  const [pokemonInfo, setPokemonInfo] = useState<Array<Object>>([{}]);
  const [start, setStart] = useState<number>(0);
  const [animationState, setAnimationState] = useState<number>(1)
  const [pokeAnimationState, setPokeAnimationState] = useState<number>(1)

  useEffect(() => {
    fetchPokemonInformation(1);
  }, []);

  function fetchPokemonInformation(value: number) {
    setPokeAnimationState(1)
    value = (value - 1) * 20;
    setStart(value);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${value}`)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data: { results: Array<Object> }) => {
              setPokemonInfo(data.results);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="container">
      <div id="header">
        <div id="LogoContainer">
          <svg height="250" width="800">
            <ellipse cx="400" cy="0" rx="370" ry="250" fill="#FFCB05" />
          </svg>

          <div id="imageContainer">
            <img src={pokemonLogo} alt="Pokemon Logo" />
          </div>
        </div>

        <svg
          height="250"
          width="500"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <ellipse cx="475" cy="0" rx="250" ry="250" fill="#DC0A2D" />
        </svg>
      </div>

      <div className="bodyContent">
        <div id="leftBodyContainer">
          <svg
            height="500"
            width="500"
            style={{
              position: "absolute",
              left: 0,
              bottom: "-4vw",
              zIndex: 1,
            }}
          >
            <ellipse cx="15" cy="250" rx="240" ry="250" fill="#51AE5F" />
          </svg>

          <img src={pokedex} alt="Pokedex" style={{ zIndex: 5 }} />

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

        <main id="RightBodyContainer">
          <svg
            height="500"
            width="500"
            style={{
              position: "absolute",
              right: 0,
              bottom: "-4vw",
            }}
          >
            <ellipse cx="475" cy="250" rx="250" ry="240" fill="#A1DAFE" />
          </svg>

          <div className="pokeContainer">
            {pokemonInfo.map((pokemon: any) => {
              return (
                <div
                  data-pokeAnimationState={pokeAnimationState}
                  onAnimationEnd={() => setPokeAnimationState(0)}
                  key={pokemonInfo.indexOf(pokemon)} 
                  className="pokeBox"
                >
                  <img
                    width="80"
                    height="80"
                    src={`https://pokeres.bastionbot.org/images/pokemon/${
                      start + pokemonInfo.indexOf(pokemon) + 1
                    }.png`}
                    alt="Pokemon"
                  />
                  <h3>{pokemon.name}</h3>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      <footer>
        <Pagination
          count={35}
          color="secondary"
          onChange={(event, value) => fetchPokemonInformation(value)}
        />
      </footer>

    </div>
  );
};

export default Landing;
