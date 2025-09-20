export function toggleStyle() {
  return `
    
  `;
}

export function headerStyle() {
  return `
    .site-header {
      width: 100%;
      top: 0;
      z-index: 1000;
      background-color: var(--header-footer-bg);
      padding: 1rem;
    }

    .header-nav {
      position: sticky;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      cursor: pointer;
    }

    .theme-toggle-btn {
      padding: 0.5rem 1rem;
      background-color: transparent;
      border: 2px solid var(--text-color);
      color: var(--text-color);
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .theme-toggle-btn:hover {
      background-color: var(--text-color);
      color: var(--bg-color);
    }
  `;
}
