module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  ecmaFeatures: {
    jsx: true, // Allows for the parsing of JSX
  },
  rules: {
    // we have to turn off specific rules for JS files
    // they are reenabled in overrides
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // re-enable typescript-specific rules for TS files only
        '@typescript-eslint/explicit-function-return-type': ['error'],
        // don't need prop types for TypeScript
        'react/prop-types': 'off',
      },
    },
  ],
};
