import { commonStyle } from '../../components/styles/styles.js'
import { renderHeader } from '../../components/elements/header.js'
import { renderMain } from '../../components/elements/main.js'
import { renderFooter } from '../../components/elements/footer.js'
import { index } from '../../pages/index/index.js'
import { showSuccessMessage } from '../../functions/functions.js'
import { tbl_usuarios } from '../../DB/tbl_usuarios.js'

export async function renderIndex() {

  // Dado que la tabla usuarios no se actualiza en tiempo real, cargo la data en memoria.
  const defaults = {
    tableUsersHeaders: tbl_usuarios.headers,
    tableUsersData: tbl_usuarios.data
  }
  //por cada elemento en "defaults", si no existe en localStorage, lo creo con el valor por defecto.
  for (const key in defaults) {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(defaults[key]))
    }
  }

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

  if (localStorage.getItem('userCreated') === 'true') {
    showSuccessMessage('Creación de Usuario Exitosa')
    localStorage.removeItem('userCreated')
  }
}
