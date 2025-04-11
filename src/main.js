"use strict";
import "./style.css";

// fetch = Funtction use for making HTTP request to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetchting in JavaScript and
//         use for interacting wit APIs to retreive and send data asynchronously over the web.
//         fetch(url, {options(Get)})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   // .then((response) => response.json())
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));

async function fetchData() {
  try {
    // const pokemonName = document
    //   .getElementById("pokemonName")
    //   .value.toLocaleLowerCase();

    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    // );

    const pokemonName = document
      .querySelector(".pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
