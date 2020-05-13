module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
