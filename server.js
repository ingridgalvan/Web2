const express = require('express')
const app = express()

//Importar conexión mongoDB
const archivoBD = require('./conexion')

//Importación del archivo de rutas y modelo usuario
const rutamateria = require('./rutas/materia')
const rutausuario = require('./rutas/usuario')
const rutainscribir = require('./rutas/Inscribir')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
app.use('/api/materia', rutamateria)
app.use('/api/usuario', rutausuario)
app.use('/api/Inscribir',rutainscribir)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})


//Configurar server básico
app.listen(5000, function(){
    console.log('El servidor NODE está corriendo correctamente')
})