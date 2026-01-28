import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts', // Opcional: para configuraciones globales
    // Mantenemos las exclusiones por defecto (node_modules, dist, etc.)
    // y agregamos tu carpeta de pruebas E2E.
    exclude: [...configDefaults.exclude, 'tests-e2e/**'],
  },
});
