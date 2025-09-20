export function renderMain() {
    const main = document.createElement('main');
    main.innerHTML = `
        <main>
            <p>Probando el desbordamiento de la página!!</p>
            <div style="width: 4000px; height: 800px; background: #ddd; margin-top: 2rem;">
                Simulación de tabla o contenido ancho
            </div>
        </main>
    `;
    document.body.appendChild(main);
}