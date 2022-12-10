import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function EditarMateria(){

    const params = useParams()

    //Hooks    
    const[nombre, setNombre]=useState('')
    const[semestre, setSemestre]=useState('')

    //Para volver atrás al index
    const navegar = useNavigate()
    

    useEffect(() => {
       axios.post('/api/materia/obtenerdatamateria', {idmateria: params.idmateria}).then(res => {
           console.log(res.data[0]) 
           const datamateria = res.data[0]
           setNombre(datamateria.nombre)
           setSemestre(datamateria.semestre)    
       })
    }, [])

    //Función que actualiza
    function editarMateria(){
        //Nuevo objeto para actualizar el materia
        const actualizarmateria = {
            nombre: nombre,
            semestre: semestre,
            idmateria: params.idmateria
        }


        //Hacer la petición usando axios
        axios.post('/api/materia/actualizamateria', actualizarmateria)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navegar('/')
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
            <div className="letras">
                     <h2 className="mt-4">Editar materia</h2></div>           
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

                     <button onClick={editarMateria} className="btn btn-success">Editar Materia</button>
                </div>
            </div>          
        </div>
    )
}

export default EditarMateria