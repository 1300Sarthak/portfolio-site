import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'resume-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/Resume') {
            res.writeHead(302, {
              'Location': '/Resume.pdf'
            })
            res.end()
            return
          }
          next()
        })
      }
    }
  ],
  base: '/', // Changed from '/portfolio/' to '/' since we're using a custom domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: '/index.html'
      }
    }
  },
})
