import config from './rollup.config.common.js';
import terser from '@rollup/plugin-terser';

export default {
  ...config,
  output: {
    ...config.output,
    file: 'dist/light-entity-card.js',
  },
  plugins: [
    ...config.plugins,
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
      compress: {
        drop_console: false,
        pure_funcs: ['console.debug'],
      },
    }),
  ],
};
