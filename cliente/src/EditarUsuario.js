import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function EditarUsuario(){

    const params = useParams()

    //Hooks    
    const[nombre, setNombre]=useState('')
    const[paterno, setPaterno]=useState('')
    const[materno, setMaterno]=useState('')
    const[semestre, setSemestre]=useState('')

    //Para volver atrás al index
    const navegar = useNavigate()
    

    useEffect(() => {
       axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res => {
           console.log(res.data[0]) 
           const datausuario = res.data[0]
           setNombre(datausuario.nombre)
           setPaterno(datausuario.paterno)
           setMaterno(datausuario.materno)
           setSemestre(datausuario.semestre)    
       })
    }, [])

    //Función que actualiza
    function editarUsuario(){
        //Nuevo objeto para actualizar el usuario
        const actualizarusuario = {
            nombre: nombre,
            paterno: paterno,
            materno: materno,
            semestre: semestre,
            idusuario: params.idusuario
        }


        //Hacer la petición usando axios
        axios.post('/api/usuario/actualizausuario', actualizarusuario)
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
                     <h2 className="mt-4">Editar usuario</h2></div>               
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

                     <button onClick={editarUsuario} className="btn btn-success">Editar Usuario</button>
                </div>
            </div>          
        </div>
    )
}

export default EditarUsuario