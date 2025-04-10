const {Criatura} = require("./criatura")
const {Guardian, Hechicero, Domador, MascotaMitologica} = require("./roles")
const {Duende, Hada} = require("./criaturas_conocidas")
const {Colonia} = require("./colonias")
const {Claros, Castillos} = require("./areas")


//Testo Mascota Mitologica || CHECK

const mascota = new MascotaMitologica(5, false)

// console.log(mascota.getEdad())
// console.log(mascota.getTieneCuernos())
// console.log(mascota.esVeterana())

// Testeo roles y criatura

// ----------   Testeo rol Guardian --------------

let criatura = new Criatura(20, 10, new Guardian)

// console.log(criatura.poderOfensivo())
// console.log(criatura.esFormidable())
// criatura.cambiarRol()
// console.log(criatura.rol)

// ---------- Testeo rol Hechicero  ----------------------

criatura = new Criatura(20, 10, new Hechicero)
// console.log(criatura.poderOfensivo())
// console.log(criatura.esFormidable())
// criatura.cambiarRol()
// console.log(criatura.rol)

// ---------- Testeo rol Domador  ----------------------

// criatura = new Criatura(20, 10, new Domador)
// criatura.rol.addMascotaMitologica(mascota)
// console.log(criatura.poderOfensivo())
// console.log(criatura.esFormidable())

// mascota.edad = 11

// console.log(criatura.esFormidable())

// criatura.cambiarRol()
// console.log(criatura.rol)

// mascota.tieneCuernos = true

// criatura.cambiarRol()
// console.log(criatura.rol)


// Testeo roles y criatura y criaturas conocidas

const duende = new Duende(20, 20, new Guardian)

// console.log(duende.poderOfensivo())
// console.log(duende.esFormidable())
// duende.cambiarRol()
// console.log(duende.rol)

const hada = new Hada (20,51, new Guardian)

// console.log(hada.poderOfensivo())
// console.log(hada.esFormidable())
// hada.aumentarKilometrosPosibles(50)
// console.log(hada.getKilometrosPosibles())
// console.log(hada.esFormidable())
// hada.cambiarRol()
// console.log(hada.rol)

const criaturas = [criatura, duende, hada]

const criatura2 = new Criatura(30,20, new Hechicero)
const duende2 = new Duende(30, 20, new Guardian)
const hada2 = new Hada(30, 40, new Guardian)

const criaturas2 = [criatura2, duende2, hada2]


const area = new Claros()
const colonia = new Colonia(area, criaturas)
area.setHabitadaPor(colonia)

const area2 = new Castillos()
const colonia2 = new Colonia(area2, criaturas2)
area2.setHabitadaPor(colonia2)


console.log(colonia.poderOfensivo())
// criaturas.forEach(c => console.log(c.poderOfensivo()))

console.log(colonia2.poderOfensivo())
// criaturas2.forEach(c => console.log(c.poderOfensivo()))

// poder defensivo = poderOfensivo + 100
console.log(colonia.area_habitada.poderDefensivo())

// poder defensivo = [mascotasFormidables].length *  200 (en este caso tiene 2)
// colonia2.criaturas.forEach(c => console.log(c.esFormidable()))
console.log(colonia2.area_habitada.poderDefensivo())

console.log(colonia.area_habitada)
colonia.conquistar(area2)
console.log(colonia.area_habitada)

console.log(colonia2.area_habitada)






