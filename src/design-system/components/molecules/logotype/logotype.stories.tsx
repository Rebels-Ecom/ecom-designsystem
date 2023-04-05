import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Logotype } from './logotype'

import logo_desktop_horizontal from '../../../../logotypes/Spendrups_logo_desktop_horizontal.svg'
import logo_mobile_vertical from '../../../../logotypes/Spendrups_logo_mobile_vertical.svg'
import logo_mobile_horizontal from '../../../../logotypes/Spendrups_logo_mobile_horizontal.svg'

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
    src: logo_desktop_horizontal,
    alt: 'logo',
    href: '/',
    id: 'logo',
    sources: [
      { srcset: logo_mobile_vertical, media: `(max-width: 767px)` },
      { srcset: logo_mobile_horizontal, media: `(min-width: 768px)` },
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
