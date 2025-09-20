export function renderMain() {
    const main = document.createElement('main');
    main.innerHTML = `
        <p>Probando el desbordamiento de la página!!</p>
        <div style="width: 4000px; height: 4000px; background: #ddd; margin-top: 2rem;">
            Simulación de tabla o contenido ancho/alto
        </div>
    `;
    document.body.appendChild(main);
}