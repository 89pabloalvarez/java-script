
import { commonStyle } from '../../components/styles/styles.js'
import { renderHeader } from '../../components/elements/header.js'
import { renderMain } from '../../components/elements/main.js'
import { renderFooter } from '../../components/elements/footer.js'
import { createUser } from '../users/createUser.js'

export async function renderCreateUser() {
  commonStyle()

  const app = document.body
  app.innerHTML = ''

  const header = renderHeader()
  const main = renderMain()
  const footer = renderFooter()

  const contenido = createUser()
  contenido.forEach(el => main.appendChild(el))

  app.appendChild(header)
  app.appendChild(main)
  app.appendChild(footer)
}
