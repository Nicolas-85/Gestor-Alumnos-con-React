//Componenetes
import Header from "./components/Header"
import ListadoAlumnos from "./components/ListadoAlumnos"
import Formulario from "./components/Formulario"
import { useEffect, useState } from 'react';

function App() {
  console.log('Se carga el componente app');
  //State 1: creo un estado para guardar los datos de alumnos
  const [alumnos, setAlumnos] = useState( JSON.parse(localStorage.getItem('alumnosLS')) || []);

  //State 2: Creo estado para editar los datos de un alumno pasando la info del alumno al formulario nuevamente, y así poder editarlo
  const [editarAlumno, setEditarAlumno] = useState({});
  
  //Declaro los useEffect para manejar el localStorage y no perder los datos de alumnos conseguidos.

  useEffect(()=> {
    localStorage.setItem('alumnosLS', JSON.stringify(alumnos));
  }, [alumnos])
  

  //Functions: función que se va a pasar como props para poder eliminar un alumno
  // console.log(alumnos);
  const eliminarAlumno = (id)=>{//esta función elimina un registro de alumno filtrando el id que se pasa por parámetro y devolviendo el resto.
    const alumnosActualizados = alumnos.filter(alumnoE => alumnoE.id !== id);
    setAlumnos(alumnosActualizados); //acá mostramos la lista sin el id que coincide en el .filter, o sea, se eliminó.
  }
  
  return (
    <> 
      <Header className= "container mx-auto mt-4"/>
      <div className="md:flex mx-3">
        <Formulario
          alumnos = {alumnos}//props: variable de estado actual, o sea, los datos del último alumno cargado.
          setAlumnos = {setAlumnos} //props: F modificadora state para poder guardar nuevos alumnos.
          editarAlumno = {editarAlumno} // props: state para modificar datos de alumnos.
          setEditarAlumno = {setEditarAlumno}// props: función modificadora para poder limpiar el state y volverlo a Object vacío.
        />
        <ListadoAlumnos
          //Paso la props de estado para poder generar dinámicamente el listado de alumnos.
          alumnos = {alumnos}
          setEditarAlumno = {setEditarAlumno}
          eliminarAlumno = {eliminarAlumno}
        />
      </div>
    </>
  )
}

export default App
