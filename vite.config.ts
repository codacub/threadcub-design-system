import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    // Library build mode
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: 'src/index.ts',
          name: 'ThreadCubDesignSystem',
          fileName: 'index',
          formats: ['es', 'cjs']
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        },
        outDir: 'dist',
        emptyOutDir: true
      },
      // Copy CSS files after build
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    }
  }
  
  // Default development mode (for Storybook)
  return {
    plugins: [react()],
  }
})