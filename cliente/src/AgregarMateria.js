import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarMateria(){
 //Hooks
 const[nombre, setNombre]=useState('')
 const[semestre, setSemestre]=useState('')
 function agregarMateria(){
    var materia = {
        nombre: nombre,
        semestre: semestre,
        idmateria: uniquid()
    }
    console.log(materia)
    axios.post('/api/materia/agregarmateria', materia)
        .then(res => {
            //alert(res.data)
            Swal.fire('Felicidades', 'La materia se creo con exito')
        })
        .then(err => {console.log(err)})
 }
    
    return(
        <div className="container">
        <div className="row">
        <div className="letras">
                <h2 className="mt-4">Crear un nueva Materia</h2></div>
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
               <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
               </div>
               
               <div className="mb-3">
                    <label htmlFor="semestre" className="form-label">Semestre</label>
                    <input type="text" className="form-control" value={semestre} onChange={(e) =>{setSemestre(e.target.value)}}></input>
               </div>
               <button onClick={agregarMateria} className="btn btn-success">Guardar Materia</button>
            </div>
        </div>
    </div>
    )
}

export default AgregarMateria