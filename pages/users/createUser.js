import { createUserStyle } from '../../components/styles/styles.js'
import { tbl_form_createuser } from '../../DB/tbl_form_createuser.js'

export function createUser() {
  //Creamos el título principal.
  const titulo = document.createElement('h2')
  titulo.textContent = 'Crear Nuevo Usuario'
  titulo.classList.add('main-title')

  //Creamos el contenedor del formulario de creación de usuario.
  const formulario = document.createElement('form')
  formulario.classList.add('form-crear-usuario')

  //Iteramos sobre los campos definidos en tbl_form_createuser.js para crear los inputs dinámicamente.
  tbl_form_createuser.fields.forEach(({ label, name }) => {
    const grupo = document.createElement('div')
    grupo.classList.add('form-group')

    //Etiqueta del input.
    const lbl = document.createElement('label')
    lbl.textContent = label
    lbl.setAttribute('for', name)

    let input

    // Rol es un select, los demás son inputs de texto o email.
    if (name === 'rol') {
      input = document.createElement('select')
      input.name = name
      input.id = name
      input.required = true

      // Opción placeholder
      const placeholder = document.createElement('option')
      placeholder.value = ''
      placeholder.textContent = 'Seleccione...'
      placeholder.disabled = true
      placeholder.selected = true
      input.appendChild(placeholder)

      // Opciones de rol
      tbl_form_createuser.roles_list.forEach(rol => {
        const option = document.createElement('option')
        option.value = rol.toLowerCase()
        option.textContent = rol
        input.appendChild(option)
      })
    } else { // Inputs de texto o email.
      input = document.createElement('input')
      input.type = name === 'email' ? 'email' : 'text'
      input.name = name
      input.id = name

      if (['nombre', 'apellido', 'email'].includes(name)) {
        input.required = true
      }
    }

    grupo.appendChild(lbl)
    grupo.appendChild(input)
    formulario.appendChild(grupo)
  })

  //Botón de envío del formulario de tipo submit.
  const boton = document.createElement('button')
  boton.type = 'submit'
  boton.textContent = 'Crear Usuario'
  formulario.appendChild(boton)

  //Aclaración sobre los campos obligatorios.
  const aclaracion = document.createElement('p')
  aclaracion.textContent = 'Los campos indicados con (*) son obligatorios.'
  aclaracion.classList.add('form-aclaracion')
  formulario.appendChild(aclaracion)

  //Agregamos los estilos al formulario.
  const styleTag = document.createElement('style')
  styleTag.textContent = createUserStyle()
  document.head.appendChild(styleTag)

  return [titulo, formulario]
}
