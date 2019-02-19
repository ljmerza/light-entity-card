import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'main.js',
    output: {
        file: 'light-entity-card.js',
        format: 'iife'
    },
    plugins: [
        resolve(),
        commonjs(),
        terser()
    ]
};