import { footerStyle } from '../styles/styles.js';

export function renderFooter() {
    //Elemento padre "footer".
    const footer = document.createElement('footer')
    footer.classList.add('site-footer')

    //Creamos un párrafo dentro del footer.
    const parrafo = document.createElement('p')
    parrafo.textContent = 'Página desarrollada en 2025 por Paul Rammone®'

    //inyectamos el párrafo dentro del footer.
    footer.appendChild(parrafo)

    //Agregamos los estilos al footer.
    const styleTag = document.createElement('style')
    styleTag.textContent = footerStyle()
    document.head.appendChild(styleTag)

    //Devolvemos el footer para luego inyectarlo en el layout.
    return footer
}