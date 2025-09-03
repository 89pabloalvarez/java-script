/*
Defino variables y constantes globales.
*/
import { usuarios } from './DB/usuarios.js';
let continuar;
const rolesValidos = ["administrador", "editor", "visualizador"];

//Función para agregar un nuevo usuario a la "base de datos".
function agregarNuevoUsuario() {
  const nuevoUsuario = {
      id: null,
      usuario: "",
      rol: "",
      contraseña: "",
      email: ""
  };

  alert("Vamos a agregar un nuevo usuario. \nPor favor, ingrese los datos solicitados.");
  nuevoUsuario.usuario = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nIngrese el nombre de usuario:`);
  //Valido que el usuario no exista en la "base de datos".
  while (validarUsuarioExistente(nuevoUsuario.usuario)) {
    alert(`El usuario "${nuevoUsuario.usuario}" ya existe. Por favor, ingrese un nombre de usuario diferente.`);
    nuevoUsuario.usuario = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nIngrese el nombre de usuario:`);
  }
  //HTML tiene la validación del campo email, aca vamos a validar que al menos tenga un "@" y un ".".
  while (!nuevoUsuario.email.includes("@") || !nuevoUsuario.email.includes(".")) {
    nuevoUsuario.email = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nEl formato correcto es: "correo@electronico.com"\n\nIngrese el correo electrónico:`);
    if (!nuevoUsuario.email.includes("@") || !nuevoUsuario.email.includes(".")) {
      alert(`El Email ingresado: "${nuevoUsuario.email}" es inválido.\nIntente con un formato como éste ejemplo: "correo@electronico.com"`);
      nuevoUsuario.email = "";
    }
  }
  //Definimos en las variables globales que los roles válidos son "administrador", "editor" y "visualizador". validamos que el rol ingresado sea uno de esos tres y si llegaron a meter mayuscula lo pasamos a minuscula.
  while (!rolesValidos.includes(nuevoUsuario.rol.toLowerCase())) {
      nuevoUsuario.rol = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nLos roles permitidos son:\n"${rolesValidos[0]}", "${rolesValidos[1]}" y "${rolesValidos[2]}"\n\n ¿Qué rol tendría el nuevo usuario?:`).toLowerCase();
      if (!rolesValidos.includes(nuevoUsuario.rol)) {
          alert(`El rol ingresado: "${nuevoUsuario.rol}" es inválido. \n\nLos roles permitidos son:\n"${rolesValidos[0]}", "${rolesValidos[1]}" y "${rolesValidos[2]}"\n\n Ingrese un rol válido.`);
      }
  }
  let contraseña = "";
  let confirmacionContraseña = "";
  //Uso variables auxiliares de "contraseña" y "confirmacionContraseña" para pedir que se ingrese dos veces la contraseña y validar que coincidan. Y recien ahi lo ingreso en el objeto nuevoUsuario.
  do {
    contraseña = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nAhora ingrese la contraseña:`);
    confirmacionContraseña = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nVuelva a ingresar la contraseña:`);

    if (contraseña !== confirmacionContraseña) {
      alert(`Las contraseñas ingresadas "${contraseña}" y "${confirmacionContraseña}" no coinciden. Intente nuevamente.`);
    }
  } while (contraseña !== confirmacionContraseña);
  nuevoUsuario.contraseña = contraseña;
  alert("Contraseña confirmada correctamente.");
  //Asumo un número de ID autoincremental.
  nuevoUsuario.id = usuarios.length + 1;
  alert(`¿confirma los datos ingresados?: \n\nUsuario: ${nuevoUsuario.usuario}\nEmail: ${nuevoUsuario.email}\nRol: ${nuevoUsuario.rol}\nContraseña: ${"*".repeat(nuevoUsuario.contraseña.length)}\n\nPresione Aceptar para confirmar o Cancelar para abortar.`);
  usuarios.push(nuevoUsuario);
  mostrarUsuariosEnConsola();
}



// Ejecución del main.
alert("Bienvenido al sistema de ABM de Usuarios.");
continuar = confirm("¿Desea agregar un nuevo usuario?");
if (continuar) {
    startDB()
    mostrarUsuariosEnConsola()
    agregarNuevoUsuario();
} else {
    alert("Operación de Alta de usuario cancelada.");
}