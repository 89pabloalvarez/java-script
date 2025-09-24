export function createUser() {
  const titulo = document.createElement('h2')
  titulo.textContent = 'Crear Nuevo Usuario'
  titulo.classList.add('main-title')

  const formulario = document.createElement('form')
  formulario.classList.add('form-crear-usuario')

  const campos = [
    { label: 'Nombre', name: 'nombre' },
    { label: 'Apellido', name: 'apellido' },
    { label: 'Email', name: 'email' },
    { label: 'Usuario', name: 'usuario' },
    { label: 'Rol', name: 'rol' }
  ]

  campos.forEach(({ label, name }) => {
    const grupo = document.createElement('div')
    grupo.classList.add('form-group')

    const lbl = document.createElement('label')
    lbl.textContent = label
    lbl.setAttribute('for', name)

    const input = document.createElement('input')
    input.type = 'text'
    input.name = name
    input.id = name

    grupo.appendChild(lbl)
    grupo.appendChild(input)
    formulario.appendChild(grupo)
  })

  const boton = document.createElement('button')
  boton.type = 'submit'
  boton.textContent = 'Crear Usuario'
  formulario.appendChild(boton)

  return [titulo, formulario]
}