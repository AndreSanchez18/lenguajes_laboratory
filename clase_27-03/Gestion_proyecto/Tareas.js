class Tarea {
  constructor(codigo, duracion, complejidad, costo_comun ) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad =  complejidad
    this.costo_comun = costo_comun
  }

  getCostoSinComplejidad(){
    return this.duracion*this.costo_comun
  }

  getCosto(){
    return this.getCostoSinComplejidad()+this.complejidad.getCostoExtra(this)
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = [], complejidad, costo_comun) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.complejidad =  complejidad
    this.costo_comun = costo_comun
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCostoSinComplejidad(){
    return this.duracion*this.costo_comun
  }

  getCosto(){
    let costo_tarea = this.getCostoSinComplejidad() + this.complejidad.getCostoExtra(this)

    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getCosto(), costo_tarea
    )
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = { Tarea, TareaCompuesta };
