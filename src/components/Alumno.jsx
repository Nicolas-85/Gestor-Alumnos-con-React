//Alumno componente muestra un alumno con los datos que tenemosa bajo en el component ListadoAlumnos
  //Alumno recibe 2 props: "persona" es un alumno, resultado del .map del component Alumnos
    //"setEditarAlumno" es la función modificadora del state editarAlumno, que sirve para cargar nuevamente el alumno en el form y editarlo
const Alumno = ({persona, setEditarAlumno, eliminarAlumno}) => {
  // console.log(persona);

  const {nombre, dni, nacimiento, direccion, padres, telefono, email, cuil, curso, id} = persona;

  //Functions
  const handleEliminar = ()=>{
    const respuesta = confirm('Realmente desea eliminar un alumno?');
    if(respuesta){
      eliminarAlumno(id);  
    }
  }

  return (
    <div className="md:px-1 flex-col place-content-center">
        <div className="grid grid-cols-2 md:gap-x-3 text-center w-full bg-slate-300 rounded px-2 py-2 mb-3 drop-shadow-lg ">
            <p className="font-bold text-base text-left">Nombre: <span className="text-base font-normal">{nombre}</span></p>
            <p className="font-bold text-base text-left"> Dni: <span className="text-base font-normal">{dni}</span> </p>
            <p className="font-bold text-base text-left"> E-mail: <span className="text-base font-normal">{email}</span> </p>
            <p className="font-bold text-base text-left">Curso: <span className="text-base font-normal">{curso}</span></p>
            <div className="mt-2">
              <button type="button" className="py-1 px-8 bg-inctxtVerde hover:bg-inctxtTurquesa cursor-pointer text-sm font-bold uppercase rounded"
                //cargo el "persona" en el state editarAlumno que es un objet vacío.
                onClick={()=>{setEditarAlumno(persona)}}
              >Editar</button>  
            </div>
            <div className="mt-2">
              <button type="button" className="py-1 px-8 bg-inctxtRojo hover:bg-inctxtNaranja cursor-pointer text-sm font-bold uppercase rounded"
              //cargo el evento onClick para eliminar el alumno
              onClick={handleEliminar}
              >Eliminar</button>
            </div>
        </div>
    </div>
  )
}

export default Alumno