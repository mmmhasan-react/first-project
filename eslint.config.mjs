import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: [".dist/*", "node_modules"] },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      // globals: globals.browser,
      globals: {
        process: "readonly", // Declare process as a global variable
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "warn",
      "no-unused-expressions": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-console": "warn",
    },
  },
];
