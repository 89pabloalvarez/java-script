import { toggleTheme } from '../../functions/changeThemeColor.js';
import { headerStyle } from '../styles/styles.js';

export function renderHeader() {
  const header = document.createElement('header');
  header.classList.add('site-header');

  header.innerHTML = `
    <nav class="header-nav">
      <div class="header-left">
        <button id="header-themeToggleBtn" class="theme-toggle-btn">🌗</button>
      </div>
      <div class="header-center">
        <h1 class="header-title">Tablero de Administración</h1>
      </div>
      <div class="header-right">
        <!-- Futuro botón de logout -->
      </div>
    </nav>
  `;

  const styleTag = document.createElement('style');
  styleTag.textContent = headerStyle();
  document.head.appendChild(styleTag);

  document.body.appendChild(header);

  const toggleBtn = document.getElementById('header-themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
}
