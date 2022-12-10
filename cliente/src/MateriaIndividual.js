import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MateriaIndividual({materia}){

    const navegar = useNavigate()

    //Para animación de scroll al bajar
    useEffect(() => {
       AOS.init()
    }, [])


    //Función para borrar materia
    function borrarmateria(idmateria){
        axios.post('/api/materia/borrarmateria', {idmateria: idmateria}).then(res => {
            console.log(res.data) 
            alert(res.data)  
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }

    function llenarInputPol(valor){
        document.getElementById("matNombre").value = valor;
    }

    return(
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="flip-right">
                    <ul className="list-group">
                        <button  className="list-group-item" onClick={()=>{llenarInputPol(materia.nombre)}}>Idmateria: {materia.idmateria}</button>
                        <button className="list-group-item" onClick={()=>{llenarInputPol(materia.nombre)}}>Nombre: {materia.nombre}</button>
                        <button className="list-group-item" onClick={()=>{llenarInputPol(materia.nombre)}}>Semestre: {materia.semestre}</button>
                    </ul>

                    <Link to={`/editarmateria/${materia.idmateria}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarmateria(materia.idmateria)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
                                
            </div>
            
        </div>
        
    )
}


export default MateriaIndividual