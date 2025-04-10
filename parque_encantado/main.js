const {Criatura} = require("./criatura")
const {Guardian, Hechicero, Domador, MascotaMitologica} = require("./roles")
const {Duende, Hada} = require("./criaturas_conocidas")
const {Colonia} = require("./colonias")
const {Claros, Castillos} = require("./areas")



// MascotasMitologicas

const rocky = new MascotaMitologica(7, false)
const sami = new MascotaMitologica(10, true)
const truth = new MascotaMitologica(3, false)

// Criaturas colonia 1

const ave_fenix = new Criatura(40, 30, new Hechicero)
const coloso = new Criatura(30, 10, new Guardian)
const duende = new Duende(20, 20, new Domador)
const hada = new Hada(10, 35, new Hechicero)
duende.rol.addMascotaMitologica(rocky)

// Criaturas colonia 2

const centauro = new Criatura(45, 20, new Hechicero)
const gnomo = new Criatura(20, 5, new Guardian)
const duende2 = new Duende(15, 35, new Domador)
const hada2 = new Hada(25, 55, new Hechicero)
duende2.rol.addMascotaMitologica(sami)
duende2.rol.addMascotaMitologica(truth)


// Areas

const monte = new Claros()
const castillos = new Castillos()


// --------------  Colonia 1  -------------------

const salvajes = new Colonia(monte, [ave_fenix, coloso, duende, hada])
monte.setHabitadaPor(salvajes)


// ---------------- Colonia 2  ---------------------

const machucas = new Colonia(castillos, [centauro, gnomo, duende2, hada2])
castillos.setHabitadaPor(machucas)




//Conquista 

console.log(machucas.area_habitada)
machucas.conquistar(monte)
console.log(machucas.area_habitada)




