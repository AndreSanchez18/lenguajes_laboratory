const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const { Minima, Media, Maxima } = require("./complejidades")

const t1 = new Tarea("1.1", 3,  new Minima, 3);
const t2 = new Tarea("1.2", 5,  new Media, 2)
const t3 = new TareaCompuesta("1", 4,  [t1, t2],new Maxima, 3)
;

proyecto.agregarTarea(t3);


proyecto.mostrarTareas();
console.log(`Duracion Total: ${proyecto.getDuracion()}`);
console.log(`Costo Total: ${proyecto.getCosto()}`);

