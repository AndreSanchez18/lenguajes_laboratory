const _ = require('lodash')  // "_" podria llamarse como quieras.
                            //Exportas todo el contenido de la libreria lodash dentro de node-modules

const Fn = (arr) => {
    return _.flatten(arr)
}

const last = (arr) => {
    return _.last(arr)
}

module.exports = {Fn, ultimo:last}  //Que funciones se van a exportar, las que no esten no se exportan