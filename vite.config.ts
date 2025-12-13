import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", 
  define: {
    // This allows the API key to pass through safely
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
  },
});
