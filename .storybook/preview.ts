import type { Preview } from '@storybook/react-vite'
import '../src/styles/index.css'
import './preview.css'

const preview: Preview = {
  // Generate an autodocs page for every component: description (from the component's
  // TSDoc) + an interactive props table (from the props-interface TSDoc) + its stories.
  // Individual stories opt out with `tags: ['!autodocs']` if ever needed.
  tags: ['autodocs'],
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
