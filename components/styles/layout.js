import { commonStyle } from '../styles/styles.js'
import { renderHeader } from '../elements/header.js'
import { renderMain } from '../elements/main.js'
import { renderFooter } from '../elements/footer.js'

export function renderLayout() { // Estructura básica del layout, el orden de los render son importantes!!!
  commonStyle()
  renderHeader()
  renderMain()
  renderFooter()
}
