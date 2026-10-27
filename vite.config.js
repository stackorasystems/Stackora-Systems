import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base paths keep the build working at any GitHub Pages repo path,
  // for example https://username.github.io/appbuilders/.
  base: './',
  plugins: [react()],
})
