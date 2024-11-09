import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type {import("typescript-eslint").FlatConfig.ConfigArray}
 */
const config = tseslint.config(
    { ignores: ['node_modules', 'dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            prettierConfig,
        ],
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 2020,
        },
        rules: {
            // ...
        },
    }
)

export default config
