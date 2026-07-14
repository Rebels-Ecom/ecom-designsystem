import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Vitest browser-mode project that turns every story into a test. Play functions run as
 * interaction tests and, because `@storybook/addon-a11y` is installed with
 * `parameters.a11y.test: 'error'` (see .storybook/preview.ts), axe runs against each
 * rendered story and a violation fails the test.
 *
 * The React + Tailwind plugins are declared here directly rather than reusing the root
 * `vite.config.ts`: that config is library-mode (`build.lib`, React `external`) which is
 * correct for shipping the package but would break story rendering. Vitest's browser mode
 * uses Vite's dev/transform pipeline (it ignores `build.lib`/externals), so it just needs
 * the JSX transform, Tailwind, and a single deduped copy of React.
 */
export default defineConfig({
  test: {
    projects: [
      {
        plugins: [
          react(),
          tailwindcss(),
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        resolve: { dedupe: ['react', 'react-dom'] },
        // Pre-bundle the story runtime up front. Without this, the browser-mode Vite server
        // discovers these deps by crawling every story on first boot and then re-optimizes
        // ("Re-optimizing dependencies because vite config has changed"). That cold optimize can
        // push the server's ready-ack past the Storybook Vitest addon's boot window, so the UI
        // shows "Server timed out. Please restart your Storybook server" even though the run then
        // proceeds. Declaring the deps skips the crawl and makes boot deterministic and fast.
        optimizeDeps: {
          include: [
            'react',
            'react-dom',
            'react-dom/client',
            'react/jsx-runtime',
            'react/jsx-dev-runtime',
            'framer-motion',
            'lucide-react',
            'react-day-picker',
            'clsx',
            'tailwind-merge',
          ],
        },
        // Isolate the browser project's dep cache from the CLI run (`pnpm test-storybook`) and the
        // Storybook dev builder, so switching between them stops invalidating a shared cache and
        // forcing a full re-optimize each time.
        cacheDir: path.join(dirname, 'node_modules/.vite-storybook-test'),
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            provider: playwright({}),
            headless: true,
            // Emulate `prefers-reduced-motion: reduce` so components that gate a Framer entrance on
            // `useReducedMotion()` (PopUp, DeliveryInfoBar) render their settled state on the first frame.
            // Otherwise axe (run in `afterEach`) can scan mid-fade — the reduced opacity drops effective
            // contrast and fails color-contrast intermittently, even though the browser a11y panel (which
            // scans after the animation settles) passes. Matches the visual-review capture.
            instances: [{ browser: 'chromium', context: { reducedMotion: 'reduce' } }],
          },
        },
      },
    ],
  },
})
