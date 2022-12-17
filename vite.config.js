import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@images' : path.resolve(__dirname, './src/assets/images'),
      '@icons' : path.resolve(__dirname, './src/assets/icons'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@containers' : path.resolve(__dirname, './src/containers'),
      '@utils' : path.resolve(__dirname, './src/utils'),
      '@styles' : path.resolve(__dirname, './src/styles')
    },
  },
})