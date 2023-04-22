//Estates
import { useState, useEffect } from "react"

//Componentes
import Error from "./Error";



//Formulario recibe props: alumnos es un arreglo vacío donde se van a ir cargando los objetos con los datos del formulario
    //setAlumnos es la función para modificar la variable "alumnos"
    //editarAlumno es un objeto vacío que se llena con los datos del "alumnos" al que le presionemos editar.
const Formulario = ({alumnos, setAlumnos, editarAlumno, setEditarAlumno}) => { 
  //HOOKS
  //Declaro los hooks useStates para manipular los datos del formulario. Inician vacíos, o sea, form en blanco y su variable se va llenando 
  //con la info que escribimos en cada campo.
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [padres, setPadres] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [cuil, setCuil] = useState('');
  const [curso, setCurso] = useState('');
  
  //declaro  state para manejar errores en el formulario
  const [error, setError] = useState(false);//inicio el error en false
  
  // useEffect(()=>{
  //   if(Object.keys(editarAlumno).length > 0){
  //   console.log('Si hay algo');
  //   } else {
  //     console.log('No hay nada');
  //   }
  // },[editarAlumno]);
  
  // Declaro el hook useEffect para poder cargar los alumnos en el formulario nuevamente y editarlos.
  useEffect(()=>{
    if(Object.keys(editarAlumno).length > 0){  //Objet.keys() es una forma de comprobar que un objeto tenga algo dentro.
      setNombre(editarAlumno.nombre); 
      setDni(editarAlumno.dni);
      setNacimiento(editarAlumno.nacimiento);
      setDireccion(editarAlumno.direccion);
      setPadres(editarAlumno.padres);
      setTelefono(editarAlumno.telefono); 
      setEmail(editarAlumno.email);
      setCuil(editarAlumno.cuil);
      setCurso(editarAlumno.curso);

    }else{
      // console.log('El objeto está vacío');
    };
  }, [editarAlumno]);


//FUNCTIONS
  //Hay que generar un id para solucionar el error que da React cuando iteramos sobre un arreglo. Pide tener Key única!.
  const generarId = ()=>{ //función para generar id automático para cada alumno.
    const random = Math.random().toString(36).substring(2);//genera una parte del id con esos métodos, abajo igual.
    const fecha = Date.now().toString(36);
    return random + fecha; //los une y queda un código tipo id, es una forma que tiene el instructor del curso.
  }

//EVENTS
  //evento para manejar el click del botón 'enviar' form
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    //validamos que todos los campos no puedan estar vacíos.
    if([nombre, dni, nacimiento, direccion, padres, telefono, email, cuil, curso].includes('')){
      setError(true);
      return
    } else {
      setError(false);
      
      //Cuando doy submit al form se crea un objetoAlumno donde los values son los que recibe de los states de arriba que a su vez
      //son los que escribimos en los campos. 
      //No se declara valor porque las variables=valores tienen el mismo nombre. Los valores son los states declarados arriba que se llenan
      //con los onChange de los campos del form.
      const objetoAlumno = {
        nombre,
        dni,
        nacimiento,
        direccion,
        padres,
        telefono,
        email,
        cuil,
        curso, 
        // id : generarId()//genero un id para cada alumno, arriba declaro la función.
      };
      // console.log(objetoAlumno);

      //Actualizo el alumno clickeado: al dar click en editar alumno, pinta ese alumno en el formulario, al dar submit, vuelve a crear 
        //un objetoAlumno con los datos modificados y le asigna el id del que estaba en editarAlumno, que es el mismo pero anterior.
      if(editarAlumno.id){//Si existe un editarAlumno, ingresa a actualizar.
        //editando el alumno
        objetoAlumno.id = editarAlumno.id;//por el else sale un "alumnos" creado desde "objetoAlumno" que tiene id.
        //cuando 
        console.log(objetoAlumno);//este es el objeto actualizado porque es que se lee de los states que es lo último que modificamos en el form
        console.log(editarAlumno);//este es el objeto anterior porque es el editarAlumno que clickeamos para que se pinte en el form y poder editar.

        const alumnoEditado = alumnos.map( alumnoState =>
          alumnoState.id === editarAlumno.id ? objetoAlumno : alumnoState);
        
        setAlumnos(alumnoEditado);
        setEditarAlumno({});


      } else {//Si no existe ningún editarAlumno, ingresa para crear uno nuevo.
        //registrando alumno nuevo
        // console.log('Creando un nuevo alumno');
        objetoAlumno.id = generarId();
        
        //creo una copia de "alumnos" que es un array de objetos vacíos y le agrego un objetoAlumno vacío.
        setAlumnos([...alumnos, objetoAlumno ]);
      }
      

      //Reseteamos el formulario para que los campos queden en blanco.
      setNombre('');
      setDni('');
      setNacimiento('');
      setDireccion('');
      setPadres('');
      setTelefono('');
      setEmail('');
      setCuil('');
      setCurso('');
    }
  }

  return (
    <div className="md:w-1/2 md:max-w-full md:mr-2 lg:mr-3 lg:w-2/5">

      <h3 className="mt-4 mb-3 font-bold text-lg text-center">Formulario Ingreso de Alumnos</h3>

      <form className="bg-slate-300 rounded px-2 py-2 drop-shadow-lg md:w-full" action="" onSubmit={handleSubmit}>

        <div className="mt-2">
          <label className="block mt-1 mb-1 font-semibold" htmlFor="nombre">Nombre y Apellido</label>
          <input className="rounded drop-shadow-lg p-0.5 w-full" type="text" id="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
        </div>

        <div className="mt-2">
          <label className="block mb-1 font-semibold p-1" htmlFor="dni">Número de documento</label>
          <input className="rounded drop-shadow-lg p-0.5 w-full" type="text" id="dni" value={dni} onChange={(e)=>{setDni(e.target.value)}} />
        </div>

        <div className="mt-2">
          <label className="block mb-1 font-semibold" htmlFor="nacimiento">Fecha de nacimiento</label>
          <input className="rounded drop-shadow-lg p-0.5 w-full" type="date" id="nacimiento" value={nacimiento} onChange={(e)=>{setNacimiento(e.target.value)}} />
        </div>

        <div className="mt-2">
          <label className="block mb-1 font-semibold" htmlFor="direccion">Dirección</label>
          <input className="rounded drop-shadow-lg p-0.5 w-full" type="text" id="direccion" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}}/>
        </div>

        <div className="mt-2">
          <label className="block mb-1 font-semibold" htmlFor="padres">Nombre papá o mamá</label>
          <input className="rounded drop-shadow-lg p-0.5 w-full" type="text" id="padres" value={padres} onChange={(e)=>{setPadres(e.target.value)}} />
        </div>

        <div className="mt-2">
          <label className="block mb-1 font-semibold" htmlFor="telefono">Teléfono de contacto</label>
          <input className="rounded drop-shadow-lg p-0.5 w-full" type="text" id="telefono" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}/>
        </div>

        <div className="mt-2">
          <label className="block mb-1 font-semibold" htmlFor="email">E-mail de contacto</label>
          <input className="rounded drop-shadow-lg p-0.5 w-full" type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div className="mt-2">
          <label className="block mb-1 font-semibold" htmlFor="cuil">DNI o CUIL</label>
          <input className="rounded drop-shadow-lg p-0.5 w-full" type="text" id="cuil" value={cuil} onChange={(e)=>{setCuil(e.target.value)}}/>
        </div>

        <div className="mt-2">
          <label className="block mb-1 font-semibold" htmlFor="curso">Curso actual</label>
          <input className="rounded drop-shadow-lg p-0.5 mb-1 w-full" type="text" id="curso" value={curso} onChange={(e)=>{setCurso(e.target.value)}}/>
        </div>
        
        {/* valida que el form no esté vacío. */}
        {error && <Error> <p>Todos los campos son obligatorios</p> </Error> } 

        <input 
          type="submit" 
          //Cambia el value del botón según si existe un objeto cargado al presionamos en editar. o Edita o agrega.
          value= {editarAlumno.id ? 'Editar Alumno' : 'Enviar Información'} 
          className="rounded-md bg-inctxtVerde font-semibold p-1 w-full mt-5 hover:bg-inctxtTurquesa cursor-pointer"
        />

      </form>
    </div>
  )
}

export default Formulario