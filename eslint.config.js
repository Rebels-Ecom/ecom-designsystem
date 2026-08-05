import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import react from 'eslint-plugin-react'
import globals from 'globals'

/**
 * Flat ESLint config (ESLint 9) for the V2 Design System. Intentionally lean: it enforces the project's
 * own rules that `tsc` can't (no `any`, hooks deps, `radix`, list keys, stray `console`) without pulling
 * in the full type-checked ruleset, which would drown the migration in style noise. `legacy/` is READ
 * ONLY and never linted.
 */
export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'storybook-static/**',
      'legacy/**',
      'legacy-snapshots/**',
      'node_modules/**',
      'coverage/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2023 },
    },
    plugins: { 'react-hooks': reactHooks, react },
    settings: { react: { version: 'detect' } },
    rules: {
      // React 19 hooks discipline (the codebase already carries matching disable comments).
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Would have caught the array-index and missing keys the audit flagged.
      'react/jsx-key': 'error',
      // Would have caught the radix-less parseInt calls the audit flagged.
      radix: 'error',
      // The project forbids `any` outright.
      '@typescript-eslint/no-explicit-any': 'error',
      // `_`-prefixed bindings are intentional throwaways (e.g. destructured-and-dropped props).
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      // Only the DEV-guarded contrast warning uses console — keep warn/error allowed, flag the rest.
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    // Storybook `render` functions are components with a lowercase name, so the hooks rule can't see
    // that hooks inside them are legal. Keep exhaustive-deps; only the naming check is a false positive.
    files: ['**/*.stories.tsx'],
    rules: { 'react-hooks/rules-of-hooks': 'off' },
  },
  {
    // Node-side tooling (config files, Playwright specs, Vitest setup, scripts, Storybook config).
    files: ['*.{js,ts,mjs,cjs}', 'scripts/**', 'tests/**', '.storybook/**'],
    languageOptions: { globals: { ...globals.node } },
    rules: { 'no-console': 'off' },
  },
)
