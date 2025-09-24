import { tbl_usuarios } from '../../DB/tbl_usuarios.js'

export async function index() {
  //Creamos el título principal
  const titulo = document.createElement('h2')
  titulo.textContent = 'ABM Usuarios'
  titulo.classList.add('main-title')

  //Creamos el botón "Crear Usuario"
  const botonCrearUsuario = document.createElement('button')
  botonCrearUsuario.textContent = 'Crear Usuario'
  botonCrearUsuario.classList.add('btn-agregar')

  //Evento para navegar al formulario
  botonCrearUsuario.addEventListener('click', () => {
    window.location.href = './pages/users/createUser.html'
  })

  //Contenedor para posicionar el botón a la izquierda
  const contenedorBoton = document.createElement('div')
  contenedorBoton.classList.add('contenedor-boton-agregar')
  contenedorBoton.appendChild(botonCrearUsuario)

  //Contenedor de la tabla
  const tablaContenedor = document.createElement('div')
  tablaContenedor.id = 'tabla-usuarios'

  try {
    const { headers, data } = tbl_usuarios

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
        const prop = key.toLowerCase().replace('-', '').replace(' ', '')
        td.textContent = user[prop] ?? ''
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

  //Devolvemos los elementos para inyectar en el main
  return [titulo, contenedorBoton, tablaContenedor]
}