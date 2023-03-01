/** @type {import('eslint').Linter.Config} */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: 'React',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  ignorePatterns: ['**/*.stories.*'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'typescript' }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'max-len': 0,
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    semi: 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    'no-undef': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
  },
}
