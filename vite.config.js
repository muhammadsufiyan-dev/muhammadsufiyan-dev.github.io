import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo renamed to exactly 'muhammadsufiyan-dev.github.io', so GitHub Pages
// now serves this at the root domain — no subpath needed. If you ever
// rename the repo again to something else, set base back to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
