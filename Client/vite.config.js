import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Vite configuration using import.meta.url instead of __dirname
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(new URL('./src', import.meta.url).pathname), // Use import.meta.url to resolve path
    },
  },
});
