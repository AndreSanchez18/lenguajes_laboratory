const {Guardian, Hechicero, Domador} = require("./roles")


class Criatura {

    constructor(poder_magico, astucia, rol){
        this.poder_magico = poder_magico
        this.astucia = astucia
        this.rol = new rol 
    }

    PoderOfensivo(){ 
            return this.poder_magico*10+this.rol.extra()
    }

    esFormidable(){
        return this.rol.esExtraordinaria(this)
    }

    cambiarRol(){
        if (this.rol.siguiente_rol()){
            this.rol = this.rol.siguiente_rol()
        } else{console.log("Ritual cancelado")}
    }
    

    incrementarMP(n){
        this.poder_magico+=n
    }
}








module.exports = {Criatura}