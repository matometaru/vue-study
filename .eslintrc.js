module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
    'plugin:vue/recommended',
    '@vue/typescript',
  ],
  rules: {
    'max-len': [1, 100, 2],
    'arrow-body-style': ['error', 'always'],
    'no-console': 'error',
    'no-debugger': 'error',
    'require-jsdoc': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
