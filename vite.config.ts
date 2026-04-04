import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // This repository is deployed as a GitHub project site at /Matya-Stavnitzky.github.io/.
  base: '/Matya-Stavnitzky.github.io/',
  plugins: [
    tailwindcss(),
  ],
})