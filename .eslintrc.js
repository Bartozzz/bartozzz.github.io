module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["react-hooks"],

  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended",
  ],

  globals: {
    __DEV__: "readonly",
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    "import/ignore": ["react-native"],
    react: {
      pragma: "React",
      version: "detect",
    },
  },

  rules: {
    "no-console": [0],
    "no-param-reassign": [0],
    "no-else-return": [0],
    "no-confusing-arrow": [0],
    "no-prototype-builtins": [0],

    "prettier/prettier": [2],

    "import/named": [0],
    "import/first": [0],
    "import/prefer-default-export": [0],
    "import/no-extraneous-dependencies": [0],
    "import/no-named-as-default": [0],

    "react/prop-types": [0],
    "react/display-name": [0],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "@typescript-eslint/no-var-requires": [0],
    "@typescript-eslint/no-empty-function": [0],
    "@typescript-eslint/no-empty-interface": [0],
    "@typescript-eslint/explicit-module-boundary-types": [0],
  },
};
