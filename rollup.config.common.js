import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: {
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      inlineSources: true,
    }),
  ],
  onwarn(warning, warn) {
    // Suppress certain warnings
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
};
