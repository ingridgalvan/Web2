import axios from 'axios'
import React, {useEffect, useState} from 'react'
import MateriaAlumnoIndividual from './MateriaAlumnoIndividual'
function ListaMateriaInscribir(){

    const[datainscribirs, setdatainscribir]=useState([])

    useEffect(() => {
        axios.get('api/Inscribir/obtenermateriaalumno').then(res => {
            console.log(res.data)  
            setdatainscribir(res.data)          
        }).catch(err => {
            console.log(err)
        })
      
    }, [])

    //Mapear listadeincribir en objeto inscribir
    const listainscribirs = datainscribirs.map(inscribir=> {
        return(
            <div>
                <MateriaAlumnoIndividual inscribir={inscribir}/>
            </div>
        )
    })


    return(
        <div>
            <div className="letras">
            <h2>Lista de usuarios inscritos</h2></div>
            {listainscribirs}
        </div>
    )
}

export default ListaMateriaInscribir