import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/config': 'http://localhost:5252',
      '/create-payment-intent': 'http://localhost:5252',
    },
  },
});
