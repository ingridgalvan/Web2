const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemainscribir = new mongoose.Schema({
    materiaNombre:{ type: String
},
    alumnoNombre:{ type: String
},
    idinscribir: String
})

const ModeloInscribir = mongoose.model('inscribirs', eschemainscribir)
module.exports = router

//Agregar materia
router.post('/DarAltaMateria', (req, res) => {
    const nuevomateria = new ModeloInscribir({
        materiaNombre: req.body.materiaNombre,
        alumnoNombre: req.body.alumnoNombre
    })
    nuevomateria.save(function(err){
        if(!err){
            res.send('MateriaAlumno agregada correctamente')
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los materias
router.get('/obtenermateriaalumno', (req, res) =>{
    ModeloInscribir.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de materia
router.post('/obtenerdatamateriaalumno', (req, res) =>{
    ModeloInscribir.find({idinscribir:req.body.idinscribir}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})