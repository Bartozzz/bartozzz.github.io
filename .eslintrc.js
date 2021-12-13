module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["react-hooks"],

  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
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
    "prettier/prettier": [2],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "@typescript-eslint/no-var-requires": [0],
    "@typescript-eslint/no-empty-function": [0],
    "@typescript-eslint/no-empty-interface": [0],
    "@typescript-eslint/explicit-module-boundary-types": [0],

    "import/order": [
      2,
      {
        "newlines-between": "always-and-inside-groups",
        alphabetize: { order: "asc" },
        groups: [
          "unknown",
          "builtin",
          "external",
          "internal",
          "index",
          "sibling",
          "parent",
          "object",
        ],
        pathGroups: [
          {
            pattern: "./*.scss",
            group: "unknown",
            position: "before",
          },
          {
            pattern: "react*",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "builtin"],
      },
    ],
  },
};
