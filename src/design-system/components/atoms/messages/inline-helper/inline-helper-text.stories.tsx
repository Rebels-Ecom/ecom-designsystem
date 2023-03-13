import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InlineHelperText } from './inline-helper-text'

const meta: Meta<typeof InlineHelperText> = {
  title: 'Design System/Atoms/Messages',
  component: InlineHelperText
};

export default meta;
type Story = StoryObj<typeof InlineHelperText>;

export const InlineHelperTextStory: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InlineHelperText>Vi använder denna e-postadress om vi behöver kontakta dig</InlineHelperText>
    </div>
  )
}