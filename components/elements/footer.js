export function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <footer>
            <p>Página desarrollada en 2025 por Paul Rammone&reg;</p>
        </footer>
    `;
    document.body.appendChild(footer);
}
