import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Set the base path only for the build command, not for the dev server
  base: command === 'build' ? '/diamond-scroll/' : '/',
}));
