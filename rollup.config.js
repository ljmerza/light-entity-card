import resolve from 'rollup-plugin-node-resolve';
import json from '@rollup/plugin-json';
import ignore from './rollup-plugins/ignore';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/light-entity-card.js',
    format: 'umd',
    name: 'LightEntity',
  },
  plugins: [
    resolve(),
    json(),
    ignore({
      files: [
        '@material/mwc-menu/mwc-menu.js',
        '@material/mwc-menu/mwc-menu-surface.js',
        '@material/mwc-ripple/mwc-ripple.js',
        '@material/mwc-list/mwc-list.js',
        '@material/mwc-list/mwc-list-item.js',
        '@material/mwc-icon/mwc-icon.js',
        '@material/mwc-notched-outline/mwc-notched-outline.js',
      ].map(file => require.resolve(file)),
    }),
  ],
};
