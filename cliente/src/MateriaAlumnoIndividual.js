import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MateriaAlumnoIndividual({inscribir}){

    const navegar = useNavigate()

    //Para animación de scroll al bajar
    useEffect(() => {
       AOS.init()
    }, [])




    return(
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="flip-right">
                    <ul className="list-group">
                        <li className="list-group-item">{inscribir.idinscribir}</li>
                        <li className="list-group-item">{inscribir.materiaNombre}</li>
                        
                        <li className="list-group-item">{inscribir.alumnoNombre}</li>
                    </ul>
                    
                    
                    
                    <hr className="mt-4"></hr>
                </div>                
            </div>
            
        </div>
    )
}

export default MateriaAlumnoIndividual