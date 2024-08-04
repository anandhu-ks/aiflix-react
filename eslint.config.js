import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "prefer-const": "error",
      "no-undef": "error"
    }

  },
  { languageOptions: { globals: globals.browser, } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

];


