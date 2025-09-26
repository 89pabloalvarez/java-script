import { setStoredTheme } from "../../functions/functions.js"

export async function index() {
  setStoredTheme()
  const titulo = document.createElement('h2')
  titulo.textContent = 'Listado de Usuarios'
  titulo.classList.add('main-title')

  const botonCrearUsuario = document.createElement('button')
  botonCrearUsuario.textContent = 'Crear Usuario'
  botonCrearUsuario.classList.add('btn-agregar')
  botonCrearUsuario.addEventListener('click', () => {
    window.location.href = './pages/users/createUser.html'
  })

  const contenedorBoton = document.createElement('div')
  contenedorBoton.classList.add('contenedor-boton-agregar')
  contenedorBoton.appendChild(botonCrearUsuario)

  const tablaContenedor = document.createElement('div')
  tablaContenedor.id = 'tabla-usuarios'

  try {
    const headers = JSON.parse(localStorage.getItem('tableUsersHeaders'))
    const data = JSON.parse(localStorage.getItem('tableUsersData'))

    if (!headers?.length || !data?.length) {
      tablaContenedor.textContent = 'No hay información para mostrar.'
      return [titulo, contenedorBoton, tablaContenedor]
    }

    const tabla = document.createElement('table')
    tabla.classList.add('usuarios-tabla')

    const thead = document.createElement('thead')
    const filaEncabezado = document.createElement('tr')

    headers.forEach(header => {
      const th = document.createElement('th')
      th.textContent = header
      th.classList.add('tabla-th')
      filaEncabezado.appendChild(th)
    })

    thead.appendChild(filaEncabezado)
    tabla.appendChild(thead)

    const tbody = document.createElement('tbody')

    data.forEach(user => {
      const fila = document.createElement('tr')

      headers.forEach(key => {
        const td = document.createElement('td')
        const prop = key.toLowerCase().replace(/[- ]/g, '')

        if (prop === 'activo') {
          const estado = document.createElement('span')
          estado.classList.add('estado-indicador')
          estado.classList.add(user[prop] ? 'activo' : 'inactivo')
          estado.title = user[prop] ? 'Activo' : 'Inactivo'
          td.appendChild(estado)
        } else {
          td.textContent = user[prop] ?? ''
        }

        td.classList.add('tabla-td')
        fila.appendChild(td)
      })

      tbody.appendChild(fila)
    })

    tabla.appendChild(tbody)
    tablaContenedor.appendChild(tabla)
  } catch (error) {
    tablaContenedor.textContent = 'Error al cargar los datos.'
    console.error(error)
  }

  return [titulo, contenedorBoton, tablaContenedor]
}