// const _ = require('lodash')
// const utils = require("./utils.js")

// let lista = ([[1,2],3,[4,5,6],7,[8,9]])

// const fletten_array = utils.Fn(lista)

// console.log(utils.ultimo(fletten_array))

const express = require("express")
const { json } = require("express/lib/response")

let cursos = [
    {
        id:1,
        nombre:"POO",
        cantidad_alumnos:54
    },

    {
        id:2,
        nombre:"Optativa",
        cantidad_alumnos:25
    }
]

const app = express()

app.get("/cursos", (req, res) =>{
    res.status(200).json({
        cursos
    })
})

app.post("/cursos", (req, res) => {
    cursos.push(req)
    res.status(201)
})

app.listen(4001, () => {
    console.log("La aplicacion arranco en el puerto 4001")
})