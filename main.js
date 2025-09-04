import { usuarios } from './DB/usuarios.js'
import { 
  mostrarUsuariosEnConsola,
  mostrarUsuariosEnPantalla,
  inputUsuario,
  inputEmail,
  inputRol,
  inputContraseña,
  nextIdUsuario
} from './funciones/functions.js'

let continuar

//Función para agregar un nuevo usuario a la "base de datos".
function agregarNuevoUsuario() {
  const nuevoUsuario = {
      id: null,
      usuario: "",
      email: "",
      rol: "",
      contraseña: "",
      activo: true
  }
  //Le avisamos al usuario que vamos a comenzar con el alta.
  alert("Vamos a agregar un nuevo usuario. \nPor favor, ingrese los datos solicitados.")
  nuevoUsuario.usuario = inputUsuario(nuevoUsuario)
  nuevoUsuario.email = inputEmail(nuevoUsuario)
  nuevoUsuario.rol = inputRol(nuevoUsuario)
  nuevoUsuario.contraseña = inputContraseña(nuevoUsuario)
  nuevoUsuario.id = nextIdUsuario()
  //Confirmamos con el usuario si desea guardar el nuevo usuario.
  continuar = confirm(`¿confirma los datos ingresados?: \n\nUsuario: ${nuevoUsuario.usuario}\nEmail: ${nuevoUsuario.email}\nRol: ${nuevoUsuario.rol}\nContraseña: ${"*".repeat(nuevoUsuario.contraseña.length)}\n\nPresione Aceptar para confirmar o Cancelar para abortar.`)
  if (continuar) {
    usuarios.push(nuevoUsuario)
    alert("Usuario dado de Alta satisfactoriamente.")
    mostrarUsuariosEnConsola() //Revisar que se agrego el usuario.
  } else {
    alert("Operación de Alta de usuario cancelada.")
    mostrarUsuariosEnConsola() //Revisar que no se agrego el usuario.
  }
  continuar = confirm("¿Desea ver la lista de usuarios?")
  if (continuar) {
    mostrarUsuariosEnPantalla()
  } else {
    mostrarUsuariosEnConsola() //Aunque no quiera verla en pantalla, la mostramos en consola para que pueda ver el resultado.
  }
  continuar = confirm("¿Desea dar de alta otro usuario?")
  if (continuar) {
    agregarNuevoUsuario()
  } else {
    alert("Operación de Alta de usuario finalizada.")
  }
}

// Ejecución de main.
alert("Bienvenido al sistema de ABM de Usuarios. \n\n(Recuerde observar la consola)")
continuar = confirm("¿Desea agregar un nuevo usuario?")
if (continuar) {
    mostrarUsuariosEnConsola()
    agregarNuevoUsuario()
} else {
    alert("Operación de Alta de usuario cancelada.")
}