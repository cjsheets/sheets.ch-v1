module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', 'react-hooks', 'import'],
  rules: {
    'import/extensions': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'error',
    'import/order': 'error',
    'no-use-before-define': [0],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
  },
};
