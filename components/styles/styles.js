export function commonStyle() {
  const style = document.createElement('style');
  style.innerHTML = `
    :root {
      /* Main */
      --main-bg-color: #dcdcdc;
      --main-text-color: #222;

      /* Header */
      --header-bg-gradient: linear-gradient(to right, #d0f0ff, #a3c9f7, #d0f0ff);
      --header-text-color: #222;

      /* Footer */
      --footer-bg-gradient: linear-gradient(to right, #a3c9f7, #d0f0ff, #a3c9f7);
      --footer-text-color: #222;
    }

    [data-theme="dark"] {
      /* Main */
      --main-bg-color: #1f1f1f;
      --main-text-color: #f5f5f5;

      /* Header */
      --header-bg-gradient: linear-gradient(to right, #1c3b5f, #0a1f40, #1c3b5f);
      --header-text-color: #f5f5f5;

      /* Footer */
      --footer-bg-gradient: linear-gradient(to right, #0a1f40, #1c3b5f, #0a1f40);
      --footer-text-color: #f5f5f5;
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
      pointer-events: none;
    }

    .header-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
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
  `;
}

export function footerStyle() {
  return `
    footer {
      width: 100%;
      height: 80px;
      background: var(--footer-bg-gradient);
      color: var(--footer-text-color);
      text-align: center;
      position: sticky;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
}