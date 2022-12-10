const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemamateria = new eschema({
    nombre:{type: String,
    required: true},
    semestre:{type: Number,
        required: true},
    idmateria: String
})

const ModeloMateria = mongoose.model('materias', eschemamateria)
module.exports = router

/*Ruta de prueba
router.get('/ejemplo', (req, res) => {
    res.end('Saludo carga desde ruta ejemplo')
})*/

//Agregar materia
router.post('/agregarmateria', (req, res) => {
    const nuevomateria = new ModeloMateria({
        nombre: req.body.nombre,
        semestre: req.body.semestre,
        idmateria: req.body.idmateria
    })
    nuevomateria.save(function(err){
        if(!err){
            res.send('Materia agregada correctamente')
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los materias
router.get('/obtenermaterias', (req, res) =>{
    ModeloMateria.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de materia
router.post('/obtenerdatamateria', (req, res) =>{
    ModeloMateria.find({idmateria:req.body.idmateria}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar materia
router.post('/actualizamateria', (req, res) => {
    
    ModeloMateria.findOneAndUpdate({idmateria:req.body.idmateria}, {
        nombre: req.body.nombre,
        semestre: req.body.semestre
    }, (err) => {
        if(!err){
            res.send('Materia actualizada correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar materia
router.post('/borrarmateria', (req, res) => {
    
    ModeloMateria.findOneAndDelete({idmateria:req.body.idmateria}, (err) => {
        if(!err){
            res.send('Materia borrada correctamente')
        }else{
            res.send(err)
        }
    })
})

