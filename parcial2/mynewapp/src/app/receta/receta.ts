export class Receta {
  id:number
  nombre: string;
  imagen: string;
  calificacion: number;
  cantidad_opiniones: number;
  duracion: number;
  dificultad: string;
  autor: string;

  constructor(
    id:number,
    nombre: string,
    imagen: string,
    calificacion: number,
    cantidad_opiniones: number,
    duracion: number,
    dificultad: string,
    autor: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.calificacion = calificacion;
    this.cantidad_opiniones = cantidad_opiniones;
    this.duracion = duracion;
    this.dificultad = dificultad;
    this.autor = autor
  }
}
