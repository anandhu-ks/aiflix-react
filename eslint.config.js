import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  { languageOptions: { globals: globals.browser, } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "prefer-const": "error",
      "no-undef": "error",
      'no-unused-vars': "warn",
      "react/prop-types": [0]
    }

  },


];


