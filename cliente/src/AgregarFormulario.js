import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import Swal from 'sweetalert2'
import 'aos/dist/aos.css'


function AgregarFormulario ({materiaNombre , alumnoNombre}){
    const navegar = useNavigate()
    //Para animación de scroll al bajar
    useEffect(() => {
       AOS.init()
    }, [])

    function limpiarCampos(){
        materiaNombre = document.getElementById("matNombre").value;
        console.log(materiaNombre);
        alumnoNombre = document.getElementById("alumNombre").value;
        console.log(alumnoNombre);
    }

    //Función para incribir materia de alumno
    function altaMateriaAlumno(materiaNombre, alumnoNombre){
        var matAlum = {
            materiaNombre: materiaNombre,
            alumnoNombre: alumnoNombre
        }
        
        axios.post('/api/Inscribir/DarAltaMateria', matAlum)
        .then(res => {
            //alert(res.data)
            Swal.fire('Felicidades', 'La materia se creo con exito')
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            {materiaNombre}
            <div className="row">
            <p> Registra tu materia de la lista de arriba</p>
            <label>Materia a escribir:</label><input id='matNombre' readOnly></input>
            <label>Alumno:</label><input id='alumNombre'></input>
            <button className="btn btn-success" onMouseOver={()=>{limpiarCampos()}} onClick={()=>{altaMateriaAlumno(materiaNombre, alumnoNombre)}}>Inscribir materia</button>

            </div>
        </div>
    )
}
export default AgregarFormulario