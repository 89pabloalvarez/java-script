import { mainStyle } from '../styles/styles.js'

export function renderMain() {
  //Elemento padre "main"
  const main = document.createElement('main')
  main.id = 'main-content'

  //Inyectamos los estilos del main
  const styleTag = document.createElement('style')
  styleTag.textContent = mainStyle()
  document.head.appendChild(styleTag)

  //Devolvemos el main vacío para que se rellene dinámicamente
  return main
}