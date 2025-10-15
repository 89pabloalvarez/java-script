import { tbl_form_createuser } from '../DB/tbl_form_createuser.js'

// Creamos una key-name para luego almacenar el tema que prefiere en la localStorage.
const THEME_KEY = 'theme-preference'

// 
// FUNCIONES EXPORTADAS
//

// Función para aplicar el tema almacenado en localStorage al cargar la página.
export function setStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY)
  if (storedTheme === 'dark' || storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', storedTheme)
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem(THEME_KEY, 'light')
  }
}

// Función para alternar entre oscuro/claro y guardar la preferencia del usuario.
export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem(THEME_KEY, newTheme)

  // Actualizamos el texto del botón según el nuevo tema
  const themeToggleBtn = document.getElementById('header-themeToggleBtn')
  if (themeToggleBtn) {
    themeToggleBtn.textContent = newTheme === 'dark' ? 'MODO DÍA' : 'MODO NOCHE'
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
  const storedData = JSON.parse(localStorage.getItem('tableUsersData')) || []
  const nextId = storedData.length > 0
    ? Math.max(...storedData.map(u => u.id)) + 1
    : 1

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

  //lista actual de usuarios para validar duplicados.
  let storedData = JSON.parse(localStorage.getItem('tableUsersData')) || []
  // Partimos de válido y vamos chequeando cada campo.
  let inputValid = true // Inputs de texto y email
  let selectValid = true // Select

  // Campos obligatorios: nombre, apellido, email y rol (usuario es opcional).
  const requiredFields = ['nombre', 'apellido', 'email', 'rol']

  // Recorro los campos obligatorios para verificar que no estén vacíos.
  requiredFields.forEach(name => {
    const input = formElement.querySelector(`#${name}`)

    if (name === 'rol') { // En el caso de "rol" verifico que sea uno de los roles válidos.
      selectValid = tbl_form_createuser.roles_list.includes(input.value)
    } else {
      selectValid = input.value.trim() !== ''
    }

    // Agrego o quito la clase de error según corresponda.
    input.classList.toggle('input-error', !selectValid)
    inputValid = inputValid && selectValid
  })

  // Validación específica para el campo "usuario" (si no está vacío).
  const usuarioInput = formElement.querySelector('#usuario')
  const usuarioValue = usuarioInput.value.trim()
  if (usuarioValue !== '') {
    // Valido lo mismo que aclare en el HTML: entre 8 y 15 caracteres sin espacios.
    const cleaned = usuarioValue.replace(/\s/g, '')
    const lengthValid = cleaned.length >= 8 && cleaned.length <= 15
    const noSpaces = cleaned === usuarioValue

    const isValid = lengthValid && noSpaces
    usuarioInput.classList.toggle('input-error', !isValid)
    inputValid = inputValid && isValid

    // Validación de usuario duplicado
    if (storedData.some(user => user.usuario?.toLowerCase() === usuarioValue.toLowerCase())) {
      usuarioInput.classList.add('input-error')
      showToastMessage(`El usuario "${usuarioValue}" ya se encuentra registrado`, 'warning')
      inputValid = false
    }
  }

  // Validación de email duplicado
  const emailInput = formElement.querySelector('#email')
  const emailValue = emailInput.value.trim()

  if (emailValue !== '') {
    if (storedData.some(user => user.email?.toLowerCase() === emailValue.toLowerCase())) {
      showToastMessage(`El mail "${emailValue}" ya se encuentra registrado`, 'warning')
      inputValid = false
    }
  }

  // Si todo es válido, creo el usuario y lo agrego a la "DB".
  if (inputValid) {
    const nuevoUsuario = createUserObject(formElement)

    storedData.push(nuevoUsuario)
    localStorage.setItem('tableUsersData', JSON.stringify(storedData))
    localStorage.setItem('userCreated', 'true')

    showToastMessage('Datos del formulario válidos.', 'success', 'center', 1)
    setTimeout(() => {
      goToHome()
    }, 1500)
  }

  return inputValid
}

export function showToastMessage(message, type = 'info', position = 'top-end', tiempo = 8) {
  Swal.fire({
    toast: true,
    position: position,
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: tiempo * 1000,
    timerProgressBar: true,
    customClass: {
      popup: 'swal2-toast'
    }
  });
}

// Con ésta función limpio todos los campos del formulario de creación de usuario.
export function clearForm(formElement) {
  // Recorro todos los inputs definidos en tbl_form_createuser.fields
  const campos = tbl_form_createuser.fields.map(f => f.name)

  campos.forEach(name => {
    const input = formElement.querySelector(`#${name}`)

    if (!input) return

    // Si es un select (rol), lo des-selecciono
    if (name === 'rol') {
      input.value = ''
    } else {
      input.value = ''
    }

    // Limpio errores visuales y validaciones personalizadas
    input.classList.remove('input-error')
    input.setCustomValidity('')
  })
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

// 
// FUNCIONES EXTERNAS
//

// Obtengo el clima actual desde la API de Meteosource de Buenos Aires, Argentina.
export async function getCurrentWeather() { // docu: https://www.meteosource.com/es/documentation
  const res = await fetch('https://www.meteosource.com/api/v1/free/point?place_id=buenos-aires&sections=current&language=en&units=auto&key=mr7rzxg6sbj14mxrijdj7x4m012dplhw8fbwdvv9')
  const data = await res.json()
  const { temperature } = data.current // Extraigo temperatura y descripción del clima.
  return `${temperature}°C`
}

export function updateWeather() {
  getCurrentWeather().then(weather => {
    document.getElementById('header-weather').textContent = "Clima Actual: " + weather // Actualizo el span con el clima actual.
  })
}

// Obtengo la hora actual desde la API de WorldTimeAPI de Buenos Aires, Argentina.
export async function getCurrentTime() { // docu: http://worldtimeapi.org/pages/examples
  const res = await fetch('https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires') // Uso la API pública de WorldTimeAPI para obtener la hora actual en Buenos Aires.
  const data = await res.json()
  const time = new Date(data.datetime).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }) // Formateo la hora a formato HH:MM con el encode de Argentina.
  return time
}

export function updateTime() {
  getCurrentTime().then(time => {
    document.getElementById('header-time').textContent = "Hora Actual: " + time // Actualizo el span con la hora actual.
  })
}