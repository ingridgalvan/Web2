import axios from 'axios'
import React, {useEffect, useState} from 'react'
import MateriaIndividual from './MateriaIndividual'
function ListaMaterias(){
    const[datamaterias, setdatamateria]=useState([])

    useEffect(() => {
        axios.get('api/materia/obtenermaterias').then(res => {
            console.log(res.data)  
            setdatamateria(res.data)          
        }).catch(err => {
            console.log(err)
        })
      
    }, [])
//Mapear lista de materias en objeto materia
const listamaterias = datamaterias.map(materia => {
    return(
        <div>
            <MateriaIndividual materia={materia}/>
        </div>
    )
})
return(
    <div>
        <h2>Lista de materias</h2>
        {listamaterias}
    </div>
)
}

export default ListaMaterias