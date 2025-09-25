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
      --form-bg-color: #ffffff;

      --verde-primario: #4caf50;
      --verde-secundario: #2b622dff;

      --blanco-primario: #f5f5f5;
      --blanco-secundario: #a6a6a6ff;

      --amarillo-primario: #fff700ff;
      --amarillo-secundario: #968e02ff;

      --alert-success-bg: #4caf50;
      --alert-warning-bg: #f9fd04ff;
      --alert-error-bg: #ce2d3aff;
    }

    [data-theme="dark"] {
      --header-bg-gradient: linear-gradient(to right, #1c3b5f, #0a1f40, #1c3b5f);
      --header-text-color: #f5f5f5;

      --main-bg-color: #1f1f1f;
      --main-text-color: #f5f5f5;

      --footer-bg-gradient: linear-gradient(to right, #0a1f40, #1c3b5f, #0a1f40);
      --footer-text-color: #f5f5f5;

      --form-shadow-color: rgba(255, 255, 255, 0.2);
      --form-bg-color: #ffffff33;

      --verde-primario: #2b622dff;
      --verde-secundario: #4caf50;

      --blanco-primario: #a6a6a6ff;
      --blanco-secundario: #f5f5f5;

      --amarillo-primario: #968e02ff;
      --amarillo-secundario: #fff700ff;
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

    .success-modal {
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: var(--alert-success-bg);
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      font-weight: bold;
      z-index: 1000;
      animation: fadeInOut 10s ease forwards;
    }

    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(-10px); }
      10% { opacity: 1; transform: translateY(0); }
      90% { opacity: 1; }
      100% { opacity: 0; transform: translateY(-10px); }
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
      width: 150px;
      height: 40px;
      font-size: 1rem;
      background-color: transparent;
      border: 2px solid var(--header-text-color);
      color: var(--header-text-color);
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      text-align: center;
      white-space: nowrap;
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
      background-color: var(--verde-primario);
      color: var(--blanco-primario);
      border: none;
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-agregar:hover {
      background-color: var(--verde-secundario);
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
      text-align: center;
    }

    .tabla-td {
      background-color: var(--main-bg-color);
      color: var(--main-text-color);
      border: 2px solid #ccc;
      padding: 0.5rem;
      text-align: center;
    }

    #tabla-usuarios {
      overflow-x: auto;
    }

    .estado-indicador {
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin: auto;
    }

    .estado-indicador.activo {
      background-color: var(--alert-success-bg);
    }

    .estado-indicador.inactivo {
      background-color: var(--alert-error-bg);
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
      background-color: var(--form-bg-color);
      color: var(--main-text-color);
    }

    .form-group select {
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid var(--header-text-color);
      border-radius: 4px;
      background-color: var(--form-bg-color);
      color: var(--main-text-color);
    }
    /* Estilos específicos para las opciones del select en modo claro y oscuro. NOTA: Por algun motivo si hago ".form-group select option y le seteo background-color y color con las variables de light y dark no funciona, tengo que forzar el color directo! así: */
    [data-theme="dark"] .form-group select option {
      background-color: #424242ff;
      color: #f5f5f5;
    }
    [data-theme="light"] .form-group select option {
      background-color: #ffffff;
      color: #222;
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

    .form-aclaracion {
      font-size: 0.9rem;
      color: var(--main-text-color);
      text-align: center;
      margin-top: 1rem;
      opacity: 0.8;
    }
    
    .input-error {
      border: 2px solid red;
      outline: none;
    }

    .input-error:focus {
      box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.3);
    }

    .form-botones {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 1rem;
    }

    .form-botones button {
      flex: 1;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      transition: background-color 0.3s ease;
      color: var(--header-text-color);
    }

    #btn-cancelar {
      background-color: var(--amarillo-primario);
    }

    #btn-cancelar:hover {
      background-color: var(--amarillo-secundario);
      color: black;
    }

    #btn-limpiar {
      background-color: var(--blanco-primario);
    }

    #btn-limpiar:hover {
      background-color: var(--blanco-secundario);
      color: black;
    }

    #btn-crear {
      background: var(--verde-primario);
    }

    #btn-crear:hover {
      background: var(--verde-secundario);
      color: black;
    }

  `
}