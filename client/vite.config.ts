import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    proxy: {
      // Все запросы, начинающиеся с /api, Vite перенаправит на бэкенд
      '/api': {
        target: 'http://127.0.0.1:3000', // Адрес вашего Express-сервера
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
