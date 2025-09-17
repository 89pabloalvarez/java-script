import { toggleTheme } from '../../functions/changeThemeColor.js';
import { toggleStyle } from '../styles/styles.js';

export function renderHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  header.innerHTML = `
    <nav class="header-nav" style="display: flex; justify-content: space-between; align-items: center;">
      <h1 class="header-titulo">Tablero de Administración</h1>
      <button id="header-themeToggleBtn" class="theme-toggle-btn">Cambiar Tema</button>
    </nav>
  `;

  const themeToggleBtnStyle = document.createElement('style');
  themeToggleBtnStyle.textContent = toggleStyle();
  document.head.appendChild(themeToggleBtnStyle);

  const toggleBtn = document.getElementById('header-themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
}

