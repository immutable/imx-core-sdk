module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'semi-style': ['error', 'last'],
    'object-curly-spacing': ['error', 'always'],
  },
};
