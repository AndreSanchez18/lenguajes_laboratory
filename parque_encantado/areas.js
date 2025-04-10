class Claros{
    constructor(){
        this.habitadaPor = undefined
    }

    getHabitadaPor(){
        return this.habitadaPor
    }

    setHabitadaPor(colonia){
        this.habitadaPor = colonia
    }

    poderDefensivo(){
        return this.habitadaPor.poderOfensivo()+100
    }
}


class Castillos{
    constructor(){
        this.habitadaPor = undefined
    }

    getHabitadaPor(){
        return this.habitadaPor
    }

    setHabitadaPor(colonia){
        this.habitadaPor = colonia
    }

    poderDefensivo(){
        const criaturasFormidables = this.habitadaPor.criaturas.filter(c => c.esFormidable())
        return criaturasFormidables.length * 200}
}

module.exports = {Claros, Castillos}