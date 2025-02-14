import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /** @see https://vitejs-kr.github.io/config/server-options.html */
  server: {
    port: 3000,
    host: true,
    open: '/',
  },

  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
