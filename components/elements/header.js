import { toggleTheme, goToHome } from '../../functions/functions.js'
import { headerStyle } from '../styles/styles.js'

export function renderHeader() {
  //Elemento padre "header".
  const header = document.createElement('header')
  header.classList.add('site-header')

  //Creamos el nav principal.
  const nav = document.createElement('nav')
  nav.classList.add('header-nav')

  //Creamos el bloque izquierdo con el botón de tema.
  const leftDiv = document.createElement('div')
  leftDiv.classList.add('header-left')

  //Botón para alternar el tema.
  const themeToggleBtn = document.createElement('button')
  themeToggleBtn.id = 'header-themeToggleBtn'
  themeToggleBtn.classList.add('theme-toggle-btn')
  themeToggleBtn.textContent = '🌗 Cambiar Color'
  themeToggleBtn.addEventListener('click', toggleTheme)

  //Inyectamos el botón dentro del bloque izquierdo.
  leftDiv.appendChild(themeToggleBtn)

  //Creamos el bloque central con el título.
  const centerDiv = document.createElement('div')
  centerDiv.classList.add('header-center')

  //Título del header.
  const titulo = document.createElement('h1')
  titulo.classList.add('header-title')
  titulo.textContent = 'Tablero de Administración'

  //Evento para navegar al inicio al hacer click en el título.
  titulo.addEventListener('click', goToHome)

  //Inyectamos el título dentro del bloque central.
  centerDiv.appendChild(titulo)

  //Creamos el bloque derecho (futuro logout).
  const rightDiv = document.createElement('div')
  rightDiv.classList.add('header-right')
  //Podés agregar el botón de logout acá cuando lo tengas.

  //Inyectamos los bloques dentro del nav.
  nav.appendChild(leftDiv)
  nav.appendChild(centerDiv)
  nav.appendChild(rightDiv)

  //Inyectamos el nav dentro del header.
  header.appendChild(nav)

  //Agregamos los estilos al header.
  const styleTag = document.createElement('style')
  styleTag.textContent = headerStyle()
  document.head.appendChild(styleTag)

  //Devolvemos el header para luego inyectarlo en el layout.
  return header
}
