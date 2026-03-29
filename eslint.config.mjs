import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      quotes: "off",
      "no-useless-escape": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "node_modules/**"]),
]);
