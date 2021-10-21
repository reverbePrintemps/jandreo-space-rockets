module.exports = {
  extends: ["prettier"],
  plugins: ["@typescript-eslint", "react"],
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      // If you spot a typescript-eslint version of an existing ESLint rule,
      // please disable the ESLint rule here.
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-autofocus": 0,
        "react/no-unused-prop-types": 2,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": "off",
        "react/jsx-key": "off",
      },
    },
    {
      files: ["**/*.test.{ts,tsx}", "**/*-test.{ts,tsx}", "test/**/*.{ts,tsx}"],
      globals: {
        jest: true,
        describe: true,
        it: true,
        expect: true,
        afterEach: true,
        beforeEach: true,
        beforeAll: true,
        afterAll: true,
      },
      rules: {
        "no-console": 0,
        "no-unused-expressions": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-var-requires": 0,
        "react/no-unused-prop-types": 2,
        "react/prop-types": 0,
      },
    },
    {
      files: "server.js",
      env: {
        node: true,
      },
    },
  ],
};
