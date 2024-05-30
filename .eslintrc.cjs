module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:jest/recommended'],
  plugins: ['testing-library', 'jest', 'autofix'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'autofix/no-unused-vars': 'error',
  },
};
