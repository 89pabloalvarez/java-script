import { commonStyle } from '../../components/styles/styles.js'
import { renderHeader } from '../../components/elements/header.js'
import { renderMain } from '../../components/elements/main.js'
import { renderFooter } from '../../components/elements/footer.js'
import { index } from '../../pages/index/index.js'

export async function renderIndex() {
  commonStyle()

  const app = document.body
  app.innerHTML = ''

  const header = renderHeader()
  const main = renderMain()
  const footer = renderFooter()

  const contenido = await index()
  contenido.forEach(el => main.appendChild(el))

  app.appendChild(header)
  app.appendChild(main)
  app.appendChild(footer)
}
