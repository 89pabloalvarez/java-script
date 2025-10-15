import { commonStyle } from '../../components/styles/styles.js'
import { renderHeader } from '../../components/elements/header.js'
import { renderMain } from '../../components/elements/main.js'
import { renderFooter } from '../../components/elements/footer.js'
import { editUser } from './editUser.js'

export async function renderEditUser() {
  commonStyle()

  const app = document.body
  app.innerHTML = ''

  const header = renderHeader()
  const main = renderMain()
  const footer = renderFooter()

  const params = new URLSearchParams(window.location.search)
  const userId = params.get('id')

  const contenido = editUser(userId)
  contenido.forEach(el => main.appendChild(el))

  app.appendChild(header)
  app.appendChild(main)
  app.appendChild(footer)
}
