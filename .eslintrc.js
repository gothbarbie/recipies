module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { before: false, after: true }],
    'key-spacing': 0,
    // allow debugger during development
    'keyword-spacing': [2, { after: true, before: true }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 2,
    'no-var': 2,
    'object-curly-spacing': [2, 'always'],
    'prefer-const': 2,
    semi: [2, 'never'],
    'space-before-blocks': 2,
    'space-infix-ops': 2
  }
}
