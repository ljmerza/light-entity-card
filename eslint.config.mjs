import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        Event: "readonly",
        customElements: "readonly",
        CustomEvent: "readonly",
        document: "readonly",
        HTMLElement: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        requestAnimationFrame: "readonly",
      },
    },
    rules: {
      "no-else-return": "off",
      "no-underscore-dangle": "off",
      "no-return-assign": "off",
      "consistent-return": "off",
      "no-mixed-operators": "off",
      "class-methods-use-this": "off",
      "no-nested-ternary": "off",
      "camelcase": "off",
      "no-bitwise": "off",
      "max-len": "off",
      "no-useless-constructor": "off",
      "no-restricted-globals": "off",
      "no-unused-vars": ["error", { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_", "caughtErrors": "none" }],
    },
  },
  {
    files: ["webpack/**/*.js", "babel.config.js", "rollup-plugins/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        process: "readonly",
      },
    },
  },
];
