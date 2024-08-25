import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BNm2v5Yj.mjs';
import { manifest } from './manifest_D-q90fHF.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.14.5_@types+node@18.19.45_rollup@4.21.0_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@astrojs+starlight@0.26.1_astro@4.14.5_@types+node@18.19.45_rollup@4.21.0_typescript@5.5.4_/node_modules/@astrojs/starlight/404.astro", _page1],
    ["node_modules/.pnpm/@astrojs+starlight@0.26.1_astro@4.14.5_@types+node@18.19.45_rollup@4.21.0_typescript@5.5.4_/node_modules/@astrojs/starlight/index.astro", _page2]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3ad16c6e-501b-41e8-8716-3f2e16ad6117",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
