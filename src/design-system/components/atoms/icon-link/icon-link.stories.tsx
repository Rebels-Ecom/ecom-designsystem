import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconLink } from './icon-link'

const meta: Meta<typeof IconLink> = {
  title: 'Design System/Atoms/IconLink',
  component: IconLink,
}

export default meta
type Story = StoryObj<typeof IconLink>

const IconLinkStoryTemplate: Story = {
  render: (args) => {
    return <IconLink {...args} />
  },
}

export const IconLinkStory_ShowAllProducts = {
  ...IconLinkStoryTemplate,
  args: {
    icon: 'icon-plus',
    children: 'Visa alla dina tillagda produkter',
    isExternal: true,
    href: '/to-somewhere',
  },
}

export const IconLinkStory_ShowRecommendedProducts = {
  ...IconLinkStoryTemplate,
  args: {
    icon: 'icon-plus',
    children: 'Visa alla rekommenderade produkter',
    isExternal: true,
    href: 'https://stage-cm-front-ehandel.spendrups.se//jss/api/OrderJss/InvoiceDownload?orderNumber=1007039270',
  },
}
