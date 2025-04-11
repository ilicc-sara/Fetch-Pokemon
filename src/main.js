"use strict";
import "./style.css";

// fetch = Funtction use for making HTTP request to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetchting in JavaScript and
//         use for interacting wit APIs to retreive and send data asynchronously over the web.
//         fetch(url, {options(Get)})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  // .then((response) => response.json())
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then((data) => console.log(data.name))
  .catch((error) => console.error(error));
