import { toggleTheme } from '../../functions/changeThemeColor.js';
import { toggleStyle } from '../styles/styles.js';

export function renderHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav class="header-nav" style="display: flex; justify-content: space-between; align-items: center;">
      <button id="header-themeToggleBtn" class="theme-toggle-btn">Cambiar Tema</button>
      <h1 class="header-titulo">Tablero de Administración</h1>
    </nav>
  `;

  const themeToggleBtnStyle = document.createElement('style');
  themeToggleBtnStyle.textContent = toggleStyle();
  document.head.appendChild(themeToggleBtnStyle);

  document.body.appendChild(header);

  const toggleBtn = document.getElementById('header-themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
}