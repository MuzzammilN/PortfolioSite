import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  build: {
    outDir: 'build',
  },
});
=======
    build: {
    outDir: 'build'
  },
})
>>>>>>> 3b24af39d87c28506aa919c7b868386524ed3f99
