//Componentes
import Alumno from "./Alumno"


const ListadoAlumnos = ({alumnos, setEditarAlumno, eliminarAlumno}) => {//recibo la props con "destructuring"

  return(
    <div className= "md:w-1/2 md:max-w-full lg:w-3/5 font-bold text-lg text-center md:h-screen overflow-y-scroll">
      {alumnos && alumnos.length ? ( 
        <>
          <h3 className= "mt-4 mb-3 font-bold text-lg block">Listado de Alumnos</h3>
          {alumnos.map( persona =>(//recorremos la props porque es un arreglo de objetos con alumnos y creo un componente por cada arreglo.
                <Alumno 
                  key={persona.id}
                  persona={persona}
                  setEditarAlumno={setEditarAlumno}
                  eliminarAlumno= {eliminarAlumno}
                />
            ))}
        </>) : (
          <h3 className= "mt-4 mb-3 font-bold text-lg block">No hay Alumnos</h3>
        )
      }
    </div>       
  )  
}

export default ListadoAlumnos