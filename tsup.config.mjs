import { defineConfig } from 'tsup'

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type {import("tsup").Options}
 */
const config = defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
})

export default config
