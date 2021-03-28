//import "../../assets/css/style.css";
import "regenerator-runtime/runtime.js";

import Serie from "./Serie";
import Personaje from "./Personaje";

const llamarPersonajes = (() => {
  const urlBase = 'https://rickandmortyapi.com/api';
  let cantidadPersonajes = 0;

  const dataPersonajes = async (urlAPI, urlP) => {
    let arr = [];
    try {
      const req = await fetch(urlAPI + urlP);
      const data = await req.json();
      arr = data.results;
    } catch (error) {
      console.log(
        `Error en la obtención de los personajes desde la API: ${error}`
      );
    } finally {
      return arr;
    }
  }

  const funcionPublica1 = async() => {
    const serie = new Serie('Rick and Morty');
    const resultadosAPI = await dataPersonajes(urlBase, '/character');
    cantidadPersonajes = resultadosAPI.length;
    resultadosAPI.forEach(personaje => {
      const per = new Personaje(personaje.id, personaje.name, personaje.species, personaje.image);
      serie.agregarPersonajes(per);
      serie.getPersonajes(personaje.image, personaje.name, personaje.species);
    })
  }

  const spinner = document.getElementById('spinner');
  const limpiar = () => {
    spinner.remove();
  }

  const funcionPublica2 = () => {
    limpiar();
    const cantidad = document.getElementById('cantidad');
    cantidad.innerHTML = `${cantidadPersonajes}`
  }

  return {
    funcionPublica1,
    funcionPublica2,
  }
})()


llamarPersonajes.funcionPublica1();

setTimeout(() => {
  llamarPersonajes.funcionPublica2();
}, 2000);
