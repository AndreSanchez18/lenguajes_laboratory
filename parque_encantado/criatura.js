const {Guardian, Hechicero, Domador} = require("./roles")


class Criatura {

    constructor(poder_magico, astucia, rol){
        this.poder_magico = poder_magico
        this.astucia = astucia
        this.rol = rol 
    }

    poderOfensivo(){ 
            return this.poder_magico*10+this.rol.extra()
    }

    esFormidable(){
        return this.rol.esExtraordinaria(this)
    }

    cambiarRol(){
        if (this.rol.siguienteRol()){
            this.rol = this.rol.siguienteRol()
        } else{console.log("Ritual cancelado")}
    }
    

    incrementarMP(n){
        this.poder_magico+=n
    }
}








module.exports = {Criatura}