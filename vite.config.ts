import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'
//import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
//cssInjectedByJsPlugin(),
/* https://vitejs.dev/config/ */

export default defineConfig({
  base: '/ecom-designsystem/',
  server: { https: true },
  plugins: [
    react(),

    copy({
      targets: [{ src: 'src/design-system/styles/*', dest: 'dist/styles' }],
      hook: 'writeBundle',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index'),
      name: 'button',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      /* make sure to externalize deps that shouldn't be bundled into your library */
      external: ['react', 'react-dom'],
    },
    cssCodeSplit: false,
  },
})
