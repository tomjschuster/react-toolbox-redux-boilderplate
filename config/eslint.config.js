module.exports = {
  parser: 'babel-eslint',
  extends: ['fullstack', 'plugi:react/recommended'],
  rules: {
    'id-length': [0, { propertie: 'never' }],
    semi: [1, 'never'],
    complexity: [0],
    'jsx-quotes': [1, 'prefer-single'],
    'new-cap': [0],
    'react/prop-types': [0],
    'react/display-name': [0],
    'no-array-index-key': [0],
    'no-shadow': [0]
  },
  parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'react'
  ]
}

