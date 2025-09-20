import { renderHeader } from '../elements/renderHeader.js';
import { renderMain } from '../elements/renderMain.js';
import { renderFooter } from '../elements/renderFooter.js';

export function renderLayout() {
  renderHeader();
  renderMain();
  renderFooter();
}
