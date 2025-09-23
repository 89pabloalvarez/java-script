import { commonStyle } from '../styles/styles.js';
import { renderHeader } from '../elements/header.js';
import { renderMain } from '../elements/main.js';
import { renderFooter } from '../elements/footer.js';

export async function renderLayout() { // Estructura básica del layout, el orden de los render son importantes!!!
  commonStyle();

  const app = document.body;
  app.innerHTML = ''; // Limpia el contenido previo si lo hay

  const header = renderHeader();
  const main = await renderMain();
  const footer = renderFooter();

  app.appendChild(header);
  app.appendChild(main);
  app.appendChild(footer);
}
