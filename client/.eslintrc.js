const { resolve } = require('./next.aliases');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [...Object.entries(resolve.alias)],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.svg'],
      },
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.svg'],
      },
    },
  },
};
