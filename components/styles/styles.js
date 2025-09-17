export function toggleStyle() {
  return `
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