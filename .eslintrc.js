const prettierConfig = require('./package.json').prettier;

module.exports = {
  globals: {
    server: true
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'ember/named-functions-in-promises': 'off',
    'ember/alias-model-in-controller': 'off'
  }
};
