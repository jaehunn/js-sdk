import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type {import("vitest").Config}
 */
const config = defineConfig({
  test: {
    globals: true,
    passWithNoTests: true,
    watch: false,
    setupFiles: ['./src/vitest.setup.ts'],
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      exclude: [
        'node_modules',
        'dist',
        '**/*.d.ts',
        '**/*.test.ts',
        '*.config.mjs',
      ],
    },
    testTimeout: 10000,
    pool: 'forks',
    isolate: true,
  },

  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
})

export default config
