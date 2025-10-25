import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import { dirname, resolve } from 'path'

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE ? process.env.VITE_BASE : '/',
  plugins: [
    react(), tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
})