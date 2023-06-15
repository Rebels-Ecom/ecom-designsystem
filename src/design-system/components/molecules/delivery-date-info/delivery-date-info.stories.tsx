import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryDateInfo } from './delivery-date-info'

const meta: Meta<typeof DeliveryDateInfo> = {
  title: 'Design System/Molecules/DeliveryDateInfo',
  component: DeliveryDateInfo
}

export default meta;
type Story = StoryObj<typeof DeliveryDateInfo>;

const DeliveryDateInfoStoryTemplate: Story = {
  render: ({ ...args }) => (<DeliveryDateInfo {...args} />)
}

export const DeliveryDateInfoStory = {
  ...DeliveryDateInfoStoryTemplate,
  args: {
    dateLabel: '2022-06-03'
  }
}