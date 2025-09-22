import { footerStyle } from '../styles/styles.js';

export function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>Página desarrollada en 2025 por Paul Rammone&reg;</p>
    `;

    const styleTag = document.createElement('style');
    styleTag.textContent = footerStyle();
    document.head.appendChild(styleTag);

    document.body.appendChild(footer);
}
