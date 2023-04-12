import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Logotype } from './logotype'

const meta: Meta<typeof Logotype> = {
  title: 'Design System/Molecules/Logotype',
  component: Logotype,
}

export default meta
type Story = StoryObj<typeof Logotype>

const LogotypeStoryTemplate: Story = {
  render: (args) => <Logotype {...args} />,
}

const logotypeArgs = {
  logo: {
    src: '/logotypes/Spendrups_logo_horizontal.svg',
    alt: 'logo',
    href: '/',
    id: 'logo',
    sources: [
      { srcset: '/logotypes/Spendrups_logo_vertical.svg', media: `(max-width: 767px)` },
      { srcset: '/logotypes/Spendrups_logo_horizontal.svg', media: `(min-width: 768px)` },
    ],
  },
  linkComponent: 'a',
}

export const logotypeStory = {
  ...LogotypeStoryTemplate,
  args: {
    ...logotypeArgs,
  },
}
