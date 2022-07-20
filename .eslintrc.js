module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'arrow-body-style': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
    'import/extensions': 0,
  },
};
