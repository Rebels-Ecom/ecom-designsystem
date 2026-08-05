import { defineConfig, type Plugin } from 'vite'
import { resolve, join } from 'node:path'
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

/* Target the React 19 Compiler (see CLAUDE.md: "Rely on the React 19 Compiler"). */
const reactCompilerConfig = { target: '19' }

/**
 * Externalize the brand fonts — LIBRARY BUILD ONLY.
 *
 * Vite library mode base64-inlines CSS-referenced assets regardless of `assetsInlineLimit`,
 * which bloats `ecom-designsystem.css` and defeats font caching. After the CSS is generated,
 * this plugin decodes each inlined `data:font/woff2;base64,…` back to a real file under
 * `dist/assets/fonts/` (matched to its source by content, so it's independent of `@font-face`
 * order) and rewrites the `url()` to that relative path. Guarded on `build.lib`, so it never
 * runs during the Storybook build the visual suite depends on.
 */
function externalizeFonts(): Plugin {
  let isLibBuild = false
  let outDir = ''
  return {
    name: 'externalize-fonts',
    apply: 'build',
    configResolved(config) {
      isLibBuild = Boolean(config.build.lib)
      outDir = resolve(config.root, config.build.outDir)
    },
    // Runs after the bundle (incl. the inlined CSS) is written to disk, so the base64 the
    // Vite lib-mode inliner produced is present and can be reversed deterministically.
    writeBundle() {
      if (!isLibBuild) return

      // Content-index the source fonts: base64 → { filename, bytes }.
      const fontsDir = resolve(__dirname, 'src/styles/fonts')
      const byBase64 = new Map<string, { name: string; source: Buffer }>()
      const collect = (dir: string): void => {
        for (const entry of readdirSync(dir, { withFileTypes: true })) {
          const full = join(dir, entry.name)
          if (entry.isDirectory()) collect(full)
          else if (entry.name.endsWith('.woff2')) {
            const source = readFileSync(full)
            byBase64.set(source.toString('base64'), { name: entry.name, source })
          }
        }
      }
      collect(fontsDir)

      const fontsOut = join(outDir, 'assets', 'fonts')
      for (const file of readdirSync(outDir)) {
        if (!file.endsWith('.css')) continue
        const cssPath = join(outDir, file)
        const emitted = new Set<string>()
        const css = readFileSync(cssPath, 'utf8').replace(
          /data:font\/woff2;base64,([A-Za-z0-9+/=]+)/g,
          (match: string, b64: string): string => {
            const font = byBase64.get(b64)
            if (!font) {
              this.warn('externalize-fonts: an inlined woff2 has no matching source file')
              return match
            }
            if (!emitted.has(font.name)) {
              mkdirSync(fontsOut, { recursive: true })
              writeFileSync(join(fontsOut, font.name), font.source)
              emitted.add(font.name)
            }
            // Relative to the CSS at the dist root.
            return `assets/fonts/${font.name}`
          },
        )
        writeFileSync(cssPath, css)
      }
    },
  }
}

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
    externalizeFonts(),
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
      // lucide-react and react-day-picker are regular dependencies, externalized so a consumer app
      // that also uses them doesn't ship two copies.
      external: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion', 'lucide-react', 'react-day-picker'],
      output: {
        // The whole library is client components (hooks throughout), so mark the bundled entry
        // with the React `'use client'` directive. Without it, a React Server Components consumer
        // (Next.js App Router) importing from the barrel fails to build ("useState only works in a
        // Client Component"). `banner` prepends to the JS chunks only (not the CSS asset) and is
        // sourcemap-aware, so it lands before the imports on both the .mjs and .cjs entry and the
        // maps stay aligned. Single-entry bundle → emitted exactly once.
        banner: `'use client';`,
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
