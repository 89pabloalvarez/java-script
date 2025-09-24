export function commonStyle() {
  const style = document.createElement('style');
  style.innerHTML = `
    :root {
      --header-bg-gradient: linear-gradient(to right, #d0f0ff, #a3c9f7, #d0f0ff);
      --header-text-color: #222;

      --main-bg-color: #dcdcdc;
      --main-text-color: #222;

      --footer-bg-gradient: linear-gradient(to right, #a3c9f7, #d0f0ff, #a3c9f7);
      --footer-text-color: #222;

      --table-header-bg: #f0f0f0;
      --table-row-bg: #ffffff;

      --form-shadow-color: rgba(0, 0, 0, 0.25);
    }

    [data-theme="dark"] {
      --header-bg-gradient: linear-gradient(to right, #1c3b5f, #0a1f40, #1c3b5f);
      --header-text-color: #f5f5f5;

      --main-bg-color: #1f1f1f;
      --main-text-color: #f5f5f5;

      --footer-bg-gradient: linear-gradient(to right, #0a1f40, #1c3b5f, #0a1f40);
      --footer-text-color: #f5f5f5;

      --form-shadow-color: rgba(255, 255, 255, 0.2);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      width: 100%;
      font-family: 'Segoe UI', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      overflow-x: auto;
      overflow-y: auto;
    }

    body {
      min-width: 100vw;
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }
  `;
  document.head.appendChild(style);
}

export function headerStyle() {
  return `
    header,
    .site-header {
      width: 100%;
      height: 80px;
      background: var(--header-bg-gradient);
      color: var(--header-text-color);
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
    }

    .header-nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
    }

    .header-left,
    .header-right {
      flex: 1;
      display: flex;
      align-items: center;
    }

    .header-left {
      justify-content: flex-start;
    }

    .header-right {
      justify-content: flex-end;
    }

    .header-center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      pointer-events: auto;
    }

    .header-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .header-title:hover {
      color: var(--accent-color);
      text-decoration: underline;
    }

    .theme-toggle-btn {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: transparent;
      border: 2px solid var(--header-text-color);
      color: var(--header-text-color);
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .theme-toggle-btn:hover {
      background-color: var(--header-bg-gradient);
      color: var(--header-text-color);
    }
  `;
}


export function mainStyle() {
  return `
    main {
      flex: 1;
      padding: 2rem;
      background-color: var(--main-bg-color);
      color: var(--main-text-color);
      overflow: auto;
    }

    .contenedor-boton-agregar {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
    }

    .btn-agregar {
      background-color: #4caf50;
      color: #fff;
      border: none;
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-agregar:hover {
      background-color: #45a049;
    }

    .main-title {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: var(--main-text-color);
    }

    .usuarios-tabla {
      width: 100%;
      border-collapse: collapse;
      background-color: transparent;
    }

    .tabla-th {
      background-color: var(--main-bg-color);
      color: var(--main-text-color);
      border: 3px solid #999;
      padding: 0.5rem;
      text-align: left;
    }

    .tabla-td {
      background-color: var(--main-bg-color);
      color: var(--main-text-color);
      border: 2px solid #ccc;
      padding: 0.5rem;
    }

    #tabla-usuarios {
      overflow-x: auto;
    }

  `;
}

export function footerStyle() {
  return `
    .site-footer {
      width: 100%;
      height: 80px;
      background: var(--footer-bg-gradient);
      color: var(--footer-text-color);
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      bottom: 0;
      z-index: 1000;
    }

    .footer-nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
    }

    .footer-left,
    .footer-center,
    .footer-right {
      flex: 1;
      display: flex;
      align-items: center;
    }

    .footer-left {
      justify-content: flex-start;
    }

    .footer-center {
      justify-content: center;
      text-align: center;
    }

    .footer-right {
      justify-content: flex-end;
    }

    .footer-logo {
      height: 60px;
      max-width: 100%;
      object-fit: contain;
    }

    .footer-center p {
      margin: 0;
      font-size: 1rem;
    }
  `
}

// Estilos para distintas páginas:

export function createUserStyle() {
  return `
    .main-title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
      color: var(--main-text-color);
    }

    .form-crear-usuario {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      background-color: var(--main-bg-color);
      border-radius: 8px;
      box-shadow: 0 4px 16px var(--form-shadow-color);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group label {
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: var(--main-text-color);
    }

    .form-group input {
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid var(--header-text-color);
      border-radius: 4px;
      background-color: var(--table-row-bg);
      color: var(--main-text-color);
    }

    .form-crear-usuario button[type="submit"] {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      background-color: var(--header-bg-gradient);
      color: var(--header-text-color);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      align-self: center;
      transition: background-color 0.3s ease;
    }

    .form-crear-usuario button[type="submit"]:hover {
      opacity: 0.9;
    }
  `
}