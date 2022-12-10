import axios from 'axios'
import React, {useEffect, useState} from 'react'
import MateriaIndividual from './MateriaIndividual'
import AgregarFormulario from './AgregarFormulario'
function ListaMaterias(){
    const[datamaterias, setdatamateria]=useState([])
    var alumnoNombre = 'Juan';
    var materiaNombre = 'Calculo';
    useEffect(() => {
        axios.get('api/materia/obtenermaterias').then(res => {
            console.log(res.data)  
            setdatamateria(res.data)          
        }).catch(err => {
            console.log(err)
        })
      
    }, [])
//Mapear listadeusuario en objeto usuario
const listamaterias = datamaterias.map(materia => {
    return(
        <div>
            <MateriaIndividual materia={materia}/>
            
        </div>
    )
})

return(
    <div>
        <div className="letras">
        <h2>Lista de materias</h2>
        {listamaterias}
        <AgregarFormulario materiaNombre={materiaNombre} alumnoNombre={alumnoNombre} />
    </div>
    </div>
)
}

export default ListaMaterias