import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import eslintPluginPrettierRecommended from 'eslint-config-prettier/recommended'
import prettier from 'eslint-plugin-prettier'

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } }, globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  ...eslintPluginPrettierRecommended,
  {
    ignore: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/coverage/**"],
    plugins: {
      prettier,
    },
    rules: {
      ...prettier.configs.prettier.config,
      "prettier/prettier": "error",
      "semi": "error"
    }
  }
];
