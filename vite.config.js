import { defineConfig } from 'vite'

export default defineConfig({
  // Base URL para produção (GitLab Pages)
  base: process.env.NODE_ENV === 'production'
    ? '/bibliotecas/wbc/govbr-ds-wbc-quickstart-js/'
    : '/',

  // Configurações do build
  build: {
    outDir: 'public',
    assetsDir: 'assets',
    // Mantém os nomes originais dos assets para facilitar o debug
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js'
      }
    }
  },

  // Configurações do servidor de desenvolvimento
  server: {
    port: 5173,
    open: true
  },

  // Configurações do preview
  preview: {
    port: 4173,
    open: true
  }
})
