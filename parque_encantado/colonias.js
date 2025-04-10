class Colonia {

    constructor(area_habitada, criaturas=[]){
        this.area_habitada = area_habitada
        this.criaturas = criaturas
    }

    addCriaturatoCriaturas(criatura){
        this.criaturas.push(criatura)
    }

    poderOfensivo(){
        return this.criaturas.reduce((acum, criatura) => acum+=criatura.poderOfensivo(), 0)
    }

    conquistar(area){
        if(this.poderOfensivo() > area.poderDefensivo()){
            area.getHabitadaPor().area_habitada = undefined
            area.setHabitadaPor(this)
            this.area_habitada = area
            console.log("Area conquistada")
        } else {
            this.criaturas.map(c => c.poder_magico -= (c.poder_magico*0.15))
            console.log("No puedieron atravesar las defensas, tus criaturas pierden 15% de su poder magico")
        }
    }



}

module.exports = {Colonia}