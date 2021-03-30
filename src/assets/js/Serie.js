class Serie {
  constructor(nombre, personajes = []) {
    this.nombre = nombre;
    this.personajes = personajes;
  }
  agregarPersonajes(val) {
    return this.personajes.push(val);
  }
  getPersonajes(imagen, nombre, especie) {
    const i = imagen;
    const n = nombre;
    const e = especie;
    const contenido = document.getElementById('contenido');
    contenido.innerHTML += `
      <div class="col-3 pb-4">
        <div class="card">
          <img src="${i}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${n}</h5>
            <p>Especie: ${e}</p>
          </div>
        </div>
      </div>
    `
  }
}

export default Serie;
