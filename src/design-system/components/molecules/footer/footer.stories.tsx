import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './footer'

const meta: Meta<typeof Footer> = {
  title: 'Design System/Molecules/Footer',
  component: Footer
};

export default meta;
type Story = StoryObj<typeof Footer>;

const FooterStoryTemplate: Story = {
  render: ({ ...args }) => (<Footer {...args} />)
};

export const FooterStory = {
  ...FooterStoryTemplate,
  args: {
    heading: 'Footer will be placed here',
    preamble: 'More info here',
    links: [
      {
        href: '/#page1',
        text: 'Link to page 1',
        isExternal: true,
      },
      {
        href: '/#page2',
        text: 'Link to page 2',
        isExternal: true,
      },
      {
        href: '/#page3',
        text: 'Link to page 3',
        isExternal: true,
      },
      {
        href: '/#page4',
        text: 'Link to page 4',
        isExternal: true,
      },
    ],
    linkComponent: 'a',
  }
}

