import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DeliveryInfoBar } from './delivery-info-bar'

const meta: Meta<typeof DeliveryInfoBar> = {
  title: 'Design System/Molecules/DeliveryInfoBar',
  component: DeliveryInfoBar,
}

export default meta
type Story = StoryObj<typeof DeliveryInfoBar>

const DeliveryInfoBarStoryTemplate: Story = {
  render: (args) => <DeliveryInfoBar {...args} />,
}

export const DeliveryInfoBarStory = {
  ...DeliveryInfoBarStoryTemplate,
  args: {
    isAnonymousUser: false,
    exists: true,
    infoText: 'Kom ihåg att lämna tillbaka era tomfat!',
    altText: 'Text',
    position: 'relative',
    onClick: () => console.log('DeliveryInfoBar clicked'),
  },
}
