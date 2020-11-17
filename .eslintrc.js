module.exports = {
  'extends': [
    'himynameisdave/configurations/core',
    'himynameisdave/configurations/typescript'
  ],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx', // Only needed if using React
      ]
    },
    'import/extensions': [
      '.ts',
      '.tsx', // Only needed if using React
    ],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  //  If you are also using the node or import configurations, you'll want these rules off:
  rules: {
    'import/extensions': 'off',
    'node/file-extension-in-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
