import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Extendemos las configuraciones base de Next.js y TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  // 2. Definimos tus reglas personalizadas (lo que tenías en el JSON)
  {
    rules: {
      eqeqeq: ["error", "always"],
      "no-empty-function": "error",
      "no-implicit-coercion": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
    },
  },

  // 3. Ignorados globales (opcional, si necesitas sobreescribir los de Next)
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
