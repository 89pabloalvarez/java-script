import { createUserStyle } from '../../components/styles/styles.js'
import { tbl_form_createuser } from '../../DB/tbl_form_createuser.js'
import { setStoredTheme, onlyLetters, validateUserInput, validateEditUserForm, goToHome, clearEditUserForm } from '../../functions/functions.js'

export function editUser(id) {
  setStoredTheme()

  const headers = JSON.parse(localStorage.getItem('tableUsersHeaders'))
  const data = JSON.parse(localStorage.getItem('tableUsersData'))
  const usuario = data.find(u => String(u.id) === String(id))

  if (!usuario) {
    const mensaje = document.createElement('p')
    mensaje.textContent = 'Usuario no encontrado.'
    return [mensaje]
  }

  const titulo = document.createElement('h2')
  titulo.textContent = `Editar Usuario #${id}`
  titulo.classList.add('main-title')

  const formulario = document.createElement('form')
  formulario.classList.add('form-crear-usuario')

  // Guardamos los valores originales para el botón "Limpiar"
  const valoresOriginales = {}
    const camposFormulario = [...tbl_form_createuser.fields]
    camposFormulario.push({ label: 'Activo *', name: 'activo' })

    camposFormulario.forEach(({ label, name, validate }) => {
    const grupo = document.createElement('div')
    grupo.classList.add('form-group')

    const lbl = document.createElement('label')
    lbl.textContent = label
    lbl.setAttribute('for', name)

    let input

    if (name === 'rol') {
      input = document.createElement('select')
      input.name = name
      input.id = name
      input.required = true

      const placeholder = document.createElement('option')
      placeholder.value = ''
      placeholder.textContent = 'Seleccione...'
      placeholder.disabled = true
      input.appendChild(placeholder)

      tbl_form_createuser.roles_list.forEach(rol => {
        const option = document.createElement('option')
        option.value = rol
        option.textContent = rol
        if (usuario[name] === rol) option.selected = true
        input.appendChild(option)
      })
    } else if (name === 'activo') {
      input = document.createElement('select')
      input.name = name
      input.id = name

      const si = document.createElement('option')
      si.value = 'true'
      si.textContent = 'Sí'
      const no = document.createElement('option')
      no.value = 'false'
      no.textContent = 'No'

      input.appendChild(si)
      input.appendChild(no)

      input.value = String(usuario[name])
    } else {
      input = document.createElement('input')
      input.type = name === 'email' ? 'email' : 'text'
      input.name = name
      input.id = name
      input.value = usuario[name] ?? ''

      if (['nombre', 'apellido', 'email'].includes(name)) {
        input.required = true
      }

      if (validate === 'onlyLetters') {
        onlyLetters(input)
      }
      if (validate === 'validateUserInput') {
        validateUserInput(input)
      }
    }

    valoresOriginales[name] = input.value

    grupo.appendChild(lbl)
    grupo.appendChild(input)
    formulario.appendChild(grupo)
  })

  // Botones
  const contenedorBotones = document.createElement('div')
  contenedorBotones.classList.add('form-botones')

  const btnCancelar = document.createElement('button')
  btnCancelar.type = 'button'
  btnCancelar.textContent = 'Cancelar'
  btnCancelar.id = 'btn-cancelar'

  const btnLimpiar = document.createElement('button')
  btnLimpiar.type = 'button'
  btnLimpiar.textContent = 'Deshacer'
  btnLimpiar.id = 'btn-limpiar'

  const btnGuardar = document.createElement('button')
  btnGuardar.type = 'submit'
  btnGuardar.textContent = 'Guardar'
  btnGuardar.id = 'btn-editar'

  contenedorBotones.appendChild(btnCancelar)
  contenedorBotones.appendChild(btnLimpiar)
  contenedorBotones.appendChild(btnGuardar)
  formulario.appendChild(contenedorBotones)

  // Eventos
  btnCancelar.addEventListener('click', () => {
    goToHome()
  })

  btnLimpiar.addEventListener('click', () => {
      clearEditUserForm(formulario, usuario.id)
  })

  formulario.addEventListener('submit', e => {
    e.preventDefault()
    //Invocamos a la función de validación y edición de usuario.
    validateEditUserForm(formulario, usuario.id)

  })

  // Aclaración
  const aclaracion = document.createElement('p')
  aclaracion.classList.add('form-aclaracion')
  aclaracion.appendChild(document.createTextNode('Los campos indicados con (*) son obligatorios.'))
  aclaracion.appendChild(document.createElement('br'))
  aclaracion.appendChild(document.createElement('br'))
  aclaracion.appendChild(document.createTextNode('El campo "Usuario" admite entre 8 y 15 caracteres sin espacios.'))
  aclaracion.appendChild(document.createElement('br'))
  aclaracion.appendChild(document.createElement('br'))
  aclaracion.appendChild(document.createTextNode('El valor "Activo" habilitará o inhabilitara el usuario en el aplicativo.'))
  formulario.appendChild(aclaracion)

  const styleTag = document.createElement('style')
  styleTag.textContent = createUserStyle()
  document.head.appendChild(styleTag)

  return [titulo, formulario]
}
