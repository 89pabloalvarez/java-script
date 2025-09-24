import { footerStyle } from '../styles/styles.js'
import { getLogo } from '../../functions/functions.js'

export function renderFooter() {
  const footer = document.createElement('footer')
  footer.classList.add('site-footer')

  const footerNav = document.createElement('div')
  footerNav.classList.add('footer-nav')

  const leftDiv = document.createElement('div')
  leftDiv.classList.add('footer-left')

  const logo = document.createElement('img')
  logo.src = getLogo()
  logo.alt = 'Logo Paul Rammone'
  logo.classList.add('footer-logo')
  leftDiv.appendChild(logo)

  const centerDiv = document.createElement('div')
  centerDiv.classList.add('footer-center')

  const parrafo = document.createElement('p')
  parrafo.textContent = 'Página desarrollada en 2025 por Paul Rammone®'
  centerDiv.appendChild(parrafo)

  const rightDiv = document.createElement('div')
  rightDiv.classList.add('footer-right')

  footerNav.appendChild(leftDiv)
  footerNav.appendChild(centerDiv)
  footerNav.appendChild(rightDiv)

  footer.appendChild(footerNav)

  const styleTag = document.createElement('style')
  styleTag.textContent = footerStyle()
  document.head.appendChild(styleTag)

  return footer
}