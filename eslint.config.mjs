// eslint.config.mjs
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = tseslint.config(
  // 1. Ignorar carpetas de compilación
  {
    ignores: ['.next/**', 'dist/**', 'node_modules/**'],
  },

  // 2. Extender SOLO las reglas vitales de Next.js
  // (QUITAMOS "next/typescript" para evitar el error de estructura circular)
  ...compat.extends('next/core-web-vitals'),

  // 3. Usar la configuración moderna de TypeScript
  ...tseslint.configs.recommended,

  // 4. Tus reglas personalizadas
  {
    rules: {
      eqeqeq: ['error', 'always'],
      'no-empty-function': 'error',
      'no-implicit-coercion': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // 5. Prettier siempre al final
  eslintConfigPrettier
);

export default eslintConfig;
