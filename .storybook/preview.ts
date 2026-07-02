import type { Preview } from '@storybook/react-vite'
import '../src/styles/index.css'
import './preview.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // WCAG 2.2 AA is the project baseline — surface violations in Storybook.
      test: 'error',
    },
  },
}

export default preview
