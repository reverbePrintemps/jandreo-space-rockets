module.exports = {
  extends: ["@sc/sc/common-rules", "@sc/sc/es6", "prettier", "@sc/sc/react"],
  plugins: ["@sc/sc", "@typescript-eslint"],
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
        "prettier/@typescript-eslint",
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
        // `label-has-for` is deprecated in favor of `label-has-associated-control`
        "jsx-a11y/label-has-for": "off",
        "jsx-a11y/label-has-associated-control": "error",
        "jsx-a11y/no-autofocus": 0,
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
