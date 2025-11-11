import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Build output folder and base path for GitHub Pages project site
  build: {
    outDir: 'build',
  },
  // Use relative base so assets are referenced relative to the served index.html.
  // This avoids absolute-root requests like `/vite.svg` or `/src/main.jsx` which 404
  // when the site is served from a subpath on GitHub Pages.
  base: './',
})
