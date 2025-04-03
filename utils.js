const _ = require('lodash')  // "_" podria llamarse como quieras.

const Fn = (arr) => {
    return _.flatten(arr)
}

const last = (arr) => {
    return _.last(arr)
}

module.exports = {Fn, ultimo:last}