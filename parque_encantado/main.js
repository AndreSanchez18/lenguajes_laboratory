const {Criatura} = require("./criatura")
const {Guardian, Hechicero, Domador} = require("./roles")
const {Duende} = require("./criaturas_conocidas")

// const elfo = new Criatura(20, 20, Hechicero)

// console.log(elfo.PoderOfensivo())
// console.log(elfo.esFormidable())
// console.log(elfo.rol)
// elfo.cambiarRol()
// console.log(elfo.rol)
// console.log(elfo.PoderOfensivo())
// console.log(elfo.esFormidable())
// elfo.cambiarRol()
// console.log(elfo.rol)
// console.log(elfo.PoderOfensivo())
// console.log(elfo.esFormidable())

// console.log(elfo.rol.mascotas_mitologicas)
// elfo.cambiarRol()

const duende = new Duende(50, 20, Guardian)

console.log(duende.PoderOfensivo())