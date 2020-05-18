module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "arrow-parens": "off",
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
  },
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
