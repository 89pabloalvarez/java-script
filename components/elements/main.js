import { mainStyle } from '../styles/styles.js'

export async function renderMain() {
  //Elemento padre "main"
  const main = document.createElement('main')

  //Creamos el título principal
  const titulo = document.createElement('h2')
  titulo.textContent = 'ABM Usuarios'
  titulo.classList.add('main-title') // Estilo separado
  main.appendChild(titulo)

  //Contenedor de la tabla
  const tablaContenedor = document.createElement('div')
  tablaContenedor.id = 'tabla-usuarios'

  try {
    //Cargamos el JSON de usuarios
    const res = await fetch('../DB/tbl_usuarios.json')
    const { headers, data } = await res.json()

    //Creamos la tabla
    const tabla = document.createElement('table')
    tabla.classList.add('usuarios-tabla')

    //Encabezado de la tabla
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

    //Cuerpo de la tabla
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

  //Inyectamos los estilos del main
  const styleTag = document.createElement('style')
  styleTag.textContent = mainStyle()
  document.head.appendChild(styleTag)

  //Inyectamos los elementos en el main
  main.appendChild(tablaContenedor)

  //Devolvemos el main para que se inserte en el layout
  return main
}