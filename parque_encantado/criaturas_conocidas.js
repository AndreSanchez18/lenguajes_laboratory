const {Criatura} = require("./criatura")


class Hada extends Criatura{
    constructor(){
        super()
    }
    
}

class Duende extends Criatura{
    PoderOfensivo(){
        return super.PoderOfensivo()+super.PoderOfensivo()*0.1
    }
}


module.exports = {Duende}