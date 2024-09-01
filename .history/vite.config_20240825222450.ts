// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Enables React Fast Refresh and other React-specific features
  ],
  css: {
    preprocessorOptions: {
      // Optional: If you're using SCSS with Tailwind, you can configure it here
      scss: {
        additionalData: `@import "src/styles/variables.scss";`, // Example: Import global SCSS variables
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Path alias for easier imports
    },
  },
  server: {
    port: 3000, // Optional: Customize the dev server port
  },
});
