module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
  ],

  plugins: [
    "jsx-a11y",
  ],

  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
  },
}