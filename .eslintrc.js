module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  globals: {
    _: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-this-in-sfc': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@data', './src/data'],
          ['@images', './src/assets/images'],
          ['@types', './src/types'],
          ['@hooks', './src/hooks'],
          ['@section', './src/section'],
          ['@constants', './src/constants'],
        ],
        extensions: ['.ts', '.tsx'],
      },
      node: {
        paths: ['src'],
      },
    },
  },
};
