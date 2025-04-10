const {Criatura} = require("./criatura")


class Hada extends Criatura{
    
    kilometrosPosibles = 2

    getKilometrosPosibles(){
        return this.kilometrosPosibles
    }

    aumentarKilometrosPosibles(n){
        this.kilometrosPosibles = Math.min(25,this.kilometrosPosibles+n)
    }

    esAstuta(){
        return this.astucia > 50 ? true:false
    }

    esFormidable(){
        return (this.esAstuta() || this.rol.esExtraordinaria(this)) && this.getKilometrosPosibles() > 10 ? true : false
    }


    
}

class Duende extends Criatura{
    poderOfensivo(){
        return super.poderOfensivo()+(super.poderOfensivo()*0.1)
    }

    esAstuta(){
        return false
    }

    esFormidable(){
        return this.esAstuta() || this.rol.esExtraordinaria(this) ? false : true
    }

}


module.exports = {Duende, Hada}