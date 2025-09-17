// Creamos una key-name para luego almacenar el tema que prefiere en la localStorage.
const THEME_KEY = 'theme-preference';

// Función para aplicar el tema almacenado en localStorage al cargar la página.
export function setStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    // Default to light if no preference
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem(THEME_KEY, 'light');
  }
}

// Función para alternar entre oscuro/claro y guardar la preferencia del usuario.
export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
}
