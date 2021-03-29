import "../../assets/css/style.css";
import "regenerator-runtime/runtime.js";

import Serie from "./Serie";
import Personaje from "./Personaje";

const pintarInformacion = (() => {
  const urlBase = 'https://rickandmortyapi.com/api';
  let cantidadPersonajes = 0;

  const dataPersonajes = async (urlAPI, urlPer) => {
    let arr = [];
    try {
      const request = await fetch(urlAPI + urlPer);
      const data = await request.json();
      arr = data.results;
    } catch (error) {
      console.log(
        `Error en la obtención de los personajes desde la API: ${error}`
      );
    } finally {
      return arr;
    }
  }

  const funcionPublicaCards = async() => {
    const serie = new Serie('Rick and Morty');
    const resultadosAPI = await dataPersonajes(urlBase, '/character');
    cantidadPersonajes = resultadosAPI.length;
    resultadosAPI.forEach(pers => {
      const personaje = new Personaje(pers.id, pers.name, pers.species, pers.image);
      serie.agregarPersonajes(personaje);
      serie.getPersonajes(pers.image, pers.name, pers.species);
    })
  }

  const spinner = document.getElementById('spinner');
  const limpiar = () => {
    spinner.remove();
  }

  const funcionPublicaTitulo = () => {
    limpiar();
    const cantidad = document.getElementById('cantidad');
    cantidad.innerHTML = `${cantidadPersonajes}`
  }

  return {
    funcionPublicaCards,
    funcionPublicaTitulo,
  }
})()


pintarInformacion.funcionPublicaCards();

setTimeout(() => {
  pintarInformacion.funcionPublicaTitulo();
}, 2000);
