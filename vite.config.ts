import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

/* Target the React 19 Compiler (see CLAUDE.md: "Rely on the React 19 Compiler"). */
const reactCompilerConfig = { target: '19' }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', reactCompilerConfig]],
      },
    }),
    tailwindcss(),
    dts({
      include: ['src'],
      exclude: ['src/**/*.stories.tsx'],
      rollupTypes: true,
    }),
  ],
  build: {
    // Library Mode — this package ships as a standalone component library.
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EcomDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      // React, React DOM and Framer Motion must never be bundled (peerDependencies).
      external: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'framer-motion': 'FramerMotion',
        },
        assetFileNames: (asset) =>
          asset.names?.some((n) => n.endsWith('.css'))
            ? 'ecom-designsystem.css'
            : 'assets/[name][extname]',
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
})
