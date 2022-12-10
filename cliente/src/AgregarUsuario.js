import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarUsuario(){

    //Hooks
    const[nombre, setNombre]=useState('')
const[paterno, setPaterno]=useState('')
const[materno, setMaterno]=useState('')
const[semestre, setSemestre]=useState('')
    function agregarUsuario(){
        var usuario = {
            nombre: nombre,
            paterno: paterno,
            materno: materno,
            semestre: semestre,
            idusuario: uniquid()
        }
        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res => {
            //alert(res.data)
            Swal.fire('Felicidades', 'El usuario se creó con éxito')
        })
        .then(err => {console.log(err)})
    }



    return(
        <div className="container">
        <div className="row">
        <div className="letras">
                <h2 className="mt-4">Crear un nuevo alumno</h2>
                </div>
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
               <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
               </div>
               <div className="mb-3">
                    <label htmlFor="paterno" className="form-label">Apellido Paterno</label>
                    <input type="text" className="form-control" value={paterno} onChange={(e) =>{setPaterno(e.target.value)}}></input>
               </div>
               <div className="mb-3">
                    <label htmlFor="materno" className="form-label">Apellido Materno</label>
                    <input type="text" className="form-control" value={materno} onChange={(e) =>{setMaterno(e.target.value)}}></input>
               </div>
               <div className="mb-3">
                    <label htmlFor="semestre" className="form-label">Semestre</label>
                    <input type="text" className="form-control" value={semestre} onChange={(e) =>{setSemestre(e.target.value)}}></input>
               </div>
               <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
            </div>
        </div>
    </div>
    )
}

export default AgregarUsuario