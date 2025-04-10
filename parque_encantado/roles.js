class Guardian  {
    
    extra(){return 100}
    esExtraordinaria(criatura){
        return criatura.poder_magico > 50 ? true : false
    }
    siguienteRol(){
        const mascota = new MascotaMitologica(1,false)
        let mascotas = [mascota]
        return new Domador(mascotas)
    }
}

class Hechicero {
    extra(){return 0}
    esExtraordinaria(criatura){
        return true 
    }
    siguienteRol(obj){
        return new Guardian
    }
}

class Domador  {

    constructor(mascotas_mitologicas=[]){
        this.mascotas_mitologicas = mascotas_mitologicas
        
    }

    addMascotaMitologica(mascota){
        this.mascotas_mitologicas.push(mascota)
    }

    todasMascotasVeteranas(){
        return this.mascotas_mitologicas.length && this.mascotas_mitologicas.every(x=>x.esVeterana())
    }

    extra(){return 150*this.mascotas_mitologicas.length}
    esExtraordinaria(criatura){
        return criatura.poder_magico > 15 && this.todasMascotasVeteranas() ? true : false           
    }

    siguienteRol(){
        const tieneMascotaConCuernos = this.mascotas_mitologicas.some(m => m.getTieneCuernos())
        return tieneMascotaConCuernos ? new Hechicero : false
    }
}

class MascotaMitologica {
    constructor(edad, tieneCuernos){
        this.edad = edad
        this.tieneCuernos = tieneCuernos
    }

    getEdad(){return this.edad}
    getTieneCuernos(){return this.tieneCuernos}

    esVeterana(){
        return this.edad > 10 ? true : false
    }
}


module.exports = {Guardian, Hechicero, Domador, MascotaMitologica}