import { tbl_usuarios } from '../DB/tbl_usuarios.js'
import { tbl_form_createuser } from '../DB/tbl_form_createuser.js'

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

  // Actualizamos el texto del botón según el nuevo tema
  const themeToggleBtn = document.getElementById('header-themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.textContent = newTheme === 'dark' ? 'MODO DÍA' : 'MODO NOCHE';
  }
}

// Redirige al index.html según entorno (local o GitHub Pages)
export function goToHome() {
  const repo = isLocalHost() ? '' : '/' + window.location.pathname.split('/')[1]
  const targetUrl = `${window.location.origin}${repo}/index.html`

  if (window.location.href !== targetUrl) {
    window.location.href = targetUrl
  }
}

// Devuelve el path absoluto al logo según entorno
export function getLogo() {
  const repo = isLocalHost() ? '' : '/' + window.location.pathname.split('/')[1]
  return `${window.location.origin}${repo}/assets/images/logo_sin_fondo.png`
}

// Con ésta funcion valido que un input solo acepte letras y espacios (sin números ni caracteres especiales)
export function onlyLetters(inputElement) {
  inputElement.addEventListener('input', () => {
    const cleaned = inputElement.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
    if (inputElement.value !== cleaned) {
      inputElement.value = cleaned
    }
  })
}

// Con ésta funcion valido que un input de nombre de usuario no acepte espacios, limite a 15 caracteres y tenga al menos 8 caracteres.
export function validateUserInput(inputElement) {
  inputElement.addEventListener('input', () => {
    // Elimina espacios
    let cleaned = inputElement.value.replace(/\s/g, '')

    // Limita a 15 caracteres
    if (cleaned.length > 15) {
      cleaned = cleaned.slice(0, 15)
    }

    // Actualiza el valor si fue modificado
    if (inputElement.value !== cleaned) {
      inputElement.value = cleaned
    }

    // Validación visual opcional (ejemplo)
    if (cleaned.length > 0 && cleaned.length < 8) {
      inputElement.setCustomValidity('Debe tener al menos 8 caracteres')
    } else {
      inputElement.setCustomValidity('')
    }
  })
}

// Con ésta funcion voy a crear el usuario nuevo a partir del formulario.
export function createUserObject(formElement) {
  const nextId = Math.max(...tbl_usuarios.data.map(u => u.id)) + 1 // Obtengo el próximo ID disponible.
  //matcheo los elementos del form con sus valores y le saco los espacios en blanco al inicio y al final.
  const nombre = formElement.nombre.value.trim()
  const apellido = formElement.apellido.value.trim()
  const usuario = formElement.usuario.value.trim() || null
  const email = formElement.email.value.trim()
  const rol = formElement.rol.value.trim()

  // Devuelvo el nuevo objeto: user.
  return {
    id: nextId,
    nombre,
    apellido,
    usuario,
    email,
    rol,
    activo: true
  }
}

// Con ésta función valido el formulario de creación de usuario. Si es válido, creo el usuario y lo agrego a la "DB".
export function validateCreateUserForm(formElement) { // Independientemente de las validaciones en tiempo real del HTML, vuelvo a validar todo al enviar el formulario.

  // Partimos de válido y vamos chequeando cada campo.
  let inputValid = true // Inputs de texto y email
  let selectValid = true // Select

  // Campos obligatorios: nombre, apellido, email y rol (usuario es opcional).
  const requiredFields = ['nombre', 'apellido', 'email', 'rol']

  // Recorro los campos obligatorios para verificar que no estén vacíos.
  requiredFields.forEach(name => {
    const input = formElement.querySelector(`#${name}`)

    if (name === 'rol') { // En el caso de "rol" verifico que sea uno de los roles válidos.
      const rolesValidos = tbl_form_createuser.roles_list.map(r => r.toLowerCase())
      selectValid = rolesValidos.includes(input.value.toLowerCase())
    } else {
      selectValid = input.value.trim() !== ''
    }

    // Agrego o quito la clase de error según corresponda.
    input.classList.toggle('input-error', !selectValid)
    inputValid = inputValid && selectValid
  })

  // Validación específica para el campo "usuario" (si no está vacío).
  const usuario = formElement.querySelector('#usuario')
  if (usuario && usuario.value.trim() !== '') {
    // Valido lo mismo que aclare en el HTML: entre 8 y 15 caracteres sin espacios.
    const cleaned = usuario.value.replace(/\s/g, '')
    const lengthValid = cleaned.length >= 8 && cleaned.length <= 15
    const noSpaces = cleaned === usuario.value

    const isValid = lengthValid && noSpaces
    usuario.classList.toggle('input-error', !isValid)
    inputValid = inputValid && isValid
  }

  // Si todo es válido, creo el usuario y lo agrego a la "DB".
  if (inputValid) {
    const nuevoUsuario = createUserObject(formElement)
    tbl_usuarios.data.push(nuevoUsuario)
    localStorage.setItem('userCreated', 'true')
    
    showSuccessMessage('Datos del formulario válidos.')
    setTimeout(() => {
      goToHome()
    }, 3000)
    console.log('Nuevo usuario agregado:', nuevoUsuario)
  }

  return inputValid
}

export function showSuccessMessage(message) {
  // Creo un modal simple que desaparece solo después de unos segundos.
  const modal = document.createElement('div')
  modal.classList.add('success-modal')
  modal.textContent = message

  // Inyecto
  document.body.appendChild(modal)

  // Con un pequeño timeout le muestro al usuario el mensaje y luego lo saco.
  setTimeout(() => {
    modal.remove()
  }, 10000)
}

//
// FUNCIONES INTERNAS
//

// Verifico si el entorno es local para diferenciar de githubPages (localhost o IP ###.###.###.###)
function isLocalHost() {
  return (
    window.location.hostname === 'localhost' ||
    /^(\d{1,3}\.){3}\d{1,3}$/.test(window.location.hostname)
  )
}