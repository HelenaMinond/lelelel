class Personaje {
  constructor(id, nombrePersonaje, especie, imagen) {
    const _id = id;
    const _nombrePersonaje = nombrePersonaje;
    this.getId = () => _id;
    this.getNombrePersonaje = () => _nombrePersonaje;
    this.especie = especie;
    this.imagen = imagen;
  }
  get obtenerId() {
    return this.getId();
  }
  get obtenerNombrePersonaje() {
    return this.getNombrePersonaje();
  }
}

export default Personaje;
