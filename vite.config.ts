import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/movie-streamer/',
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Optional if you have a test setup file
  },
})
