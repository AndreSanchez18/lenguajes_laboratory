// const _ = require('lodash')
const utils = require("./utils.js")

let lista = ([[1,2],3,[4,5,6],7,[8,9]])

const fletten_array = utils.Fn(lista)

console.log(utils.ultimo(fletten_array))