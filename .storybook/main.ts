import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    // The default `react-docgen` is fast but thin on our union/imported prop types.
    // `react-docgen-typescript` uses the TS compiler, so autodocs props tables show the
    // full literal unions and resolved types. Our components declare explicit interfaces
    // (no HTML-attribute spreading), so the node_modules filter is just a safety net.
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => !/node_modules/.test(prop.parent?.fileName ?? ''),
    },
  },
}

export default config
