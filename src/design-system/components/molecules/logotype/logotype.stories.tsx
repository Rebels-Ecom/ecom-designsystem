import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logotype } from './logotype'

export default {
  title: 'Design System/Molecules/Logotype',
  component: Logotype,
} as ComponentMeta<typeof Logotype>

const Template: ComponentStory<typeof Logotype> = (args) => <Logotype {...args} />

const logotypeArgs = {
  logo: {
    src: '/logotypes/Spendrups_logo_desktop_horizontal.svg',
    alt: 'logo',
    href: '/',
    id: 'logo',
    sources: [
      { srcset: '/logotypes/Spendrups_logo_mobile_vertical.svg', media: `(max-width: 767px)` },
      { srcset: '/logotypes/Spendrups_logo_desktop_horizontal.svg', media: `(min-width: 768px)` },
    ],
  },
  linkComponent: 'a',
}

export const logotypeStory = Template.bind({})
logotypeStory.storyName = 'Logotype'
logotypeStory.args = {
  ...logotypeArgs,
}
