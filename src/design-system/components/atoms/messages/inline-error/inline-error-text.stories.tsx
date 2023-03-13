import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InlineErrorText } from './inline-error-text'

const meta: Meta<typeof InlineErrorText> = {
  title: 'Design System/Atoms/Messages',
  component: InlineErrorText
};

export default meta;
type Story = StoryObj<typeof InlineErrorText>;

export const InlineErrorTextStory: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InlineErrorText>Fält är obligatorisk</InlineErrorText>
    </div>
  )
};
