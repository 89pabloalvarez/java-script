export function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>Página desarrollada en 2025 por Paul Rammone&reg;</p>
    `;
    document.body.appendChild(footer);
}
