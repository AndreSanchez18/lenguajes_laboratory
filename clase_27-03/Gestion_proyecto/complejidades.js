class Minima {
    getCostoExtra(obj){
        return 0
    }
}


class Media  {

    getCostoExtra(obj){
        return obj.getCostoSinComplejidad()*0.05
    }
}

class Maxima  {
    getCostoExtra(obj){
        return obj.getDuracion() <= 10 ? 
            obj.getCostoSinComplejidad()*0.07 : 
            obj.getCostoSinComplejidad()*0.07 + (obj.getDuracion()-10)*1000
    }
}

module.exports = {Minima, Media, Maxima}