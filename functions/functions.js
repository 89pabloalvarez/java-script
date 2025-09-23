import { usuarios } from '../DB/usuarios.js'
import { rolesValidos } from '../DB/roles.js'

// Creamos una key-name para luego almacenar el tema que prefiere en la localStorage.
const THEME_KEY = 'theme-preference';

// Función para aplicar el tema almacenado en localStorage al cargar la página.
export function setStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    // Default to light if no preference
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem(THEME_KEY, 'light');
  }
}

// Función para alternar entre oscuro/claro y guardar la preferencia del usuario.
export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
}

//Función para ingresar y validar el nombre de usuario del nuevo usuario.
export function inputUsuario(nuevoUsuario) {
    let usuario = "";
    do {
        usuario = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nIngrese el nombre de usuario:`)?.trim();
    if (!validarInputNoVacio(usuario)) {
        alert(`El nombre de usuario no puede estar vacío. Intente nuevamente.`)
    } else if (validarUsuarioExistente(usuario)) {
        alert(`El usuario "${usuario}" ya existe. Por favor, ingrese un nombre de usuario diferente.`)
        usuario = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nIngrese el nombre de usuario:`)
    }
  } while (!validarInputNoVacio(usuario) || validarUsuarioExistente(usuario));

  return usuario;
}

//Función para ingresar y validar el email del nuevo usuario.
export function inputEmail(nuevoUsuario) {
    let email = ""
    do {
        email = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nEl formato correcto es: "correo@electronico.com"\n\nIngrese el correo electrónico:`)?.trim()
        if (!validarInputNoVacio(email)) {
            alert(`El Email ingresado no puede estar vacío. Intente nuevamente.`)
        } else if (!validarFormatoEmail(email)) {
            alert(`El Email ingresado: "${email}" es inválido.\nIntente con un formato como éste ejemplo: "correo@electronico.com"`)
        } else if (validarEmailExistente(email)) {
            alert(`El Email "${email}" ya existe. Por favor, ingrese un correo electrónico diferente.`)
        }
    } while (!validarInputNoVacio(email) || !validarFormatoEmail(email) || validarEmailExistente(email))
    return email
}

//Función para ingresar y validar el rol del nuevo usuario.
export function inputRol(nuevoUsuario) {
    let rol = ""
    do {
        rol = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nLos roles permitidos son:\n"${rolesValidos[0]}", "${rolesValidos[1]}" y "${rolesValidos[2]}"\n\n ¿Qué rol tendría el nuevo usuario?:`).toLowerCase()
        if (!validarInputNoVacio(rol)) {
            alert(`El rol ingresado esta vacío. ingrese alguno de los siguientes roles permitidos: \n\n"${rolesValidos[0]}", "${rolesValidos[1]}" o "${rolesValidos[2]}"`)
        } else if (!validarRol(rol)) {
            alert(`El rol ingresado: "${rol}" es inválido. \n\nLos roles permitidos son:\n"${rolesValidos[0]}", "${rolesValidos[1]}" y "${rolesValidos[2]}"\n\n Ingrese un rol válido.`)
        }
    } while (!validarInputNoVacio(rol) || !validarRol(rol))
  return rol
}

//Función para ingresar y confirmar la contraseña del nuevo usuario.
export function inputContraseña(nuevoUsuario) {
    let contraseña = ""
    let confirmacionContraseña = ""
    do {
        contraseña = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nAhora ingrese la contraseña:`).trim()
        confirmacionContraseña = prompt(`Datos del usuario: \n\nUsuario: ${nuevoUsuario.usuario} \nEmail: ${nuevoUsuario.email} \nRol: ${nuevoUsuario.rol} \n\nVuelva a ingresar la contraseña:`).trim()
        if (!validarInputNoVacio(contraseña) || !validarInputNoVacio(confirmacionContraseña)) {
            alert(`Debe ingresar una contraseña, no puede estar vacío.\n\nIntente nuevamente.`)
        } else if (contraseña !== confirmacionContraseña) {
            alert(`Las contraseñas ingresadas "${contraseña}" y "${confirmacionContraseña}" no coinciden. Intente nuevamente.`)
        }
    } while (!validarInputNoVacio(contraseña) || !validarInputNoVacio(confirmacionContraseña) || contraseña !== confirmacionContraseña)
    alert("Contraseña confirmada correctamente.")
    return contraseña
}

//Función para obtener el próximo ID de usuario.
export function nextIdUsuario() {
    //si no hay usuarios devolvemos 1, sino el maximo id + 1.
    return usuarios.length === 0 ? 1 : Math.max(...usuarios.map(user => user.id)) + 1
}

//Funciones para mostrar la lista de usuarios.
export function mostrarUsuariosEnConsola() {
    console.log('la lista actual de usuarios en la "DB" es:', usuarios)
}
export function mostrarUsuariosEnPantalla() {
    let listaUsuarios = "Lista de usuarios:\n\n"
    usuarios.forEach(user => {
        listaUsuarios += `ID: ${user.id} | Usuario: ${user.usuario} | Email: ${user.email} | Rol: ${user.rol}\n`
    })
    alert(listaUsuarios)
}

//
// FUNCIONES INTERNAS
//

function validarInputNoVacio(input) {
  return typeof input === "string" && input.trim().length > 0;
}

function validarUsuarioExistente(usuario) {
    return usuarios.some(user => user.usuario.toLowerCase() === usuario.toLowerCase())
}

function validarFormatoEmail(email) {
    return email.includes("@") && email.includes(".")
}

function validarEmailExistente(email) {
    return usuarios.some(user => user.email.toLowerCase() === email.toLowerCase())
}

function validarRol(rol) {
    return rolesValidos.includes(rol)
}