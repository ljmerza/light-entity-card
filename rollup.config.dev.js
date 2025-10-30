import config from './rollup.config.common.js';
import serve from 'rollup-plugin-serve';

export default {
  ...config,
  output: {
    ...config.output,
    file: 'dist/light-entity-card.js',
  },
  plugins: [
    ...config.plugins,
    serve({
      open: false,
      contentBase: ['dist'],
      host: 'localhost',
      port: 5000,
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
