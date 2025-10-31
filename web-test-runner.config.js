/**
 * Web Test Runner configuration for light-entity-card
 */
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: 'test/**/*.test.ts',
  nodeResolve: true,

  // TypeScript compilation
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: './tsconfig.json',
    }),
  ],

  // Test coverage
  coverage: true,
  coverageConfig: {
    threshold: {
      statements: 60,
      branches: 50,
      functions: 60,
      lines: 60,
    },
    include: ['src/**/*.ts'],
    exclude: [
      'src/**/*.test.ts',
      'src/types/**',
      'src/constants.ts',
    ],
  },

  // Browser configuration with playwright
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
  ],

  // Test framework timeout
  testFramework: {
    config: {
      timeout: 5000,
    },
  },

  // Better error reporting
  filterBrowserLogs: ({ type }) => type !== 'debug',
};
