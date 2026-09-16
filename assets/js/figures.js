import { ensureFigureStyles, loadJson, showFigureError } from './figure-core.js';
import { renderFig01, renderFig02 } from './figures-01-02.js';
import { renderFig03, renderFig04 } from './figures-03-04.js';
import { renderFig05, renderFig06 } from './figures-05-06.js';

const RENDERERS = {
  'FIG-01': renderFig01,
  'FIG-02': renderFig02,
  'FIG-03': renderFig03,
  'FIG-04': renderFig04,
  'FIG-05': renderFig05,
  'FIG-06': renderFig06
};

export async function initPhase4Figures() {
  ensureFigureStyles();
  const mounts = [...document.querySelectorAll('[data-figure]')].filter((mount) => RENDERERS[mount.dataset.figure]);
  await Promise.all(mounts.map(async (mount) => {
    try {
      const data = await loadJson(mount.dataset.source);
      RENDERERS[mount.dataset.figure](mount, data);
    } catch (error) {
      console.error(`[${mount.dataset.figure}]`, error);
      showFigureError(mount, error);
    }
  }));
}
