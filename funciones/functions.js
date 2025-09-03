//Inicializar la Base de Datos simulada con algunos usuarios predefinidos.
export function startDB() {
  fetch('./DB/usuarios.json')
    .then(res => res.json())
    .then(data => {
      usuarios = data;
    });
}

//Función para mostrar la lista actualizada de usuarios en la consola.
export function mostrarUsuariosEnConsola() {
  console.log('la lista de usuarios en la "DB" es:', usuarios);
}

//Función para validar si el usuario ya existe en la "base de datos".
export function validarUsuarioExistente(nombreUsuario) {
  return usuarios.some(user => user.usuario.toLowerCase() === nombreUsuario.toLowerCase());
}