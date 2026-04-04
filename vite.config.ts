import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // User site (<username>.github.io) is served from root.
  base: '/',
  plugins: [
    tailwindcss(),
  ],
})