module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'max-len': [1, { code: 250 }],
        'react/require-default-props': [2, {
          functions: 'defaultArguments',
        }],
      },
    },
  ],
};
