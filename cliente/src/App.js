import logo from './logo.svg';
import './App.css';
import Bienvenida from './Bienvenida';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';

import AgregarMateria from './AgregarMateria';
import ListaMaterias from './ListaMaterias';
import EditarMateria from './EditarMateria';
import ListaMateriaAlumno from './ListaMateriaAlumno';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">   
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href="/">Alumnitos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="obtenerusuarios">Alumnos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="obtenermaterias">Materias</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="agregarmateria">Agregar Materia</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="obtenermateriaalumno">Ver Alumnos Inscritos</a>
              </li> 
                                     
            </ul>           
          </div>
        </div>
      </nav>
     
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Bienvenida/>} exact></Route>
          <Route path='obtenerusuarios' element={<ListaUsuarios/>} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario/>} exact></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>} exact></Route>
          
          <Route path='/obtenermaterias' element={<ListaMaterias/>} exact></Route>
          <Route path='/agregarmateria' element={<AgregarMateria/>} exact></Route>
          <Route path='/editarmateria/:idmateria' element={<EditarMateria/>} exact></Route>
          <Route path='/obtenermateriaalumno' element={<ListaMateriaAlumno/>} exact></Route>
         
        </Routes>
    </BrowserRouter>     

    </div>
  );
}

export default App;
