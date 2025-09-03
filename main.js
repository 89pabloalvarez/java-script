/*
Defino variables y constantes globales.
*/
import { usuarios } from './DB/usuarios.js';
import { 
  mostrarUsuariosEnConsola,
  inputUsuario,
  inputEmail,
  inputRol,
  inputContraseña
} from './funciones/functions.js';
let continuar;

//Función para agregar un nuevo usuario a la "base de datos".
function agregarNuevoUsuario() {
  const nuevoUsuario = {
      id: null,
      usuario: "",
      email: "",
      rol: "",
      contraseña: ""
  };

  alert("Vamos a agregar un nuevo usuario. \nPor favor, ingrese los datos solicitados.");
  nuevoUsuario.usuario = inputUsuario(nuevoUsuario);
  nuevoUsuario.email = inputEmail(nuevoUsuario);
  nuevoUsuario.rol = inputRol(nuevoUsuario);
  nuevoUsuario.contraseña = inputContraseña(nuevoUsuario);
  //Asumo un número de ID autoincremental.
  nuevoUsuario.id = usuarios.length + 1;
  alert(`¿confirma los datos ingresados?: \n\nUsuario: ${nuevoUsuario.usuario}\nEmail: ${nuevoUsuario.email}\nRol: ${nuevoUsuario.rol}\nContraseña: ${"*".repeat(nuevoUsuario.contraseña.length)}\n\nPresione Aceptar para confirmar o Cancelar para abortar.`);
  usuarios.push(nuevoUsuario);
  mostrarUsuariosEnConsola();
}



// Ejecución del main.
alert("Bienvenido al sistema de ABM de Usuarios. \n\n(Recuerde observar la consola)");
continuar = confirm("¿Desea agregar un nuevo usuario?");
if (continuar) {
    mostrarUsuariosEnConsola()
    agregarNuevoUsuario();
} else {
    alert("Operación de Alta de usuario cancelada.");
}