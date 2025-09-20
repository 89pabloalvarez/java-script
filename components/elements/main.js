export function renderMain() {
  const main = document.createElement('main');
  main.innerHTML = `
    <section>
      <p>Contenido principal. Este bloque simula desbordamiento horizontal y vertical.</p>
      <div style="width: 2000px; height: 800px; background: #ddd; margin-top: 2rem;">
        Simulación de tabla o contenido ancho
      </div>
    </section>
  `;
  document.body.appendChild(main);
}
