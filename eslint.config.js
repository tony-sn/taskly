// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const { fixupPluginRules } = require("@eslint/compat");
const eslintReactNative = require("eslint-plugin-react-native");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
    plugins: {
      "react-native": fixupPluginRules(eslintReactNative),
    },
    rules: {
      "react-native/no-unused-styles": "error",
    },
  },
]);
