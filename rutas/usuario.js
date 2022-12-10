const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre:{type: String,
    required: true},
    paterno:{type: String,
        required: true},
    materno:{type: String,
        required: true},
    semestre:{type: Number,
        required: true},
        materias:{type:  mongoose.Schema.Types.ObjectId,
            ref:"materias"},
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

/*Ruta de prueba
router.get('/ejemplo', (req, res) => {
    res.end('Saludo carga desde ruta ejemplo')
})*/

//Agregar usuario
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        paterno: req.body.paterno,
        materno: req.body.materno,
        semestre: req.body.semestre,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de usuario
router.post('/obtenerdatausuario', (req, res) =>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar usuario
router.post('/actualizausuario', (req, res) => {
    
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        paterno: req.body.paterno,
        materno: req.body.materno,
        semestre: req.body.semestre
    }, (err) => {
        if(!err){
            res.send('Usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar usuario
router.post('/borrarusuario', (req, res) => {
    
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario borrado correctamente')
        }else{
            res.send(err)
        }
    })
})
//intento para agregarle materias
router.post('/agregarmateriaalumno', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        semestre: req.body.semestre,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})

