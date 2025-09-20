export function renderFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>&copy; 2025 Paul Dev Studio</p>
  `;
  document.body.appendChild(footer);
}
