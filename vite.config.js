import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH,
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: {
      open: true,
      host: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use 'abstracts' as *;`,
          loadPaths: [path.resolve(import.meta.dirname, 'src/styles')],
        },
      },
    },
  };
});
