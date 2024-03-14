import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DebounceInput } from './debounce-input';

const meta: Meta<typeof DebounceInput> = {
  title: 'Design System/Atoms/Debounce Input',
  component: DebounceInput,
};

export default meta;
type Story = StoryObj<typeof DebounceInput>;

const DebounceInputStoryTemplate: Story = {
  render: () => {
    const [quantity, setQuantity] = useState('1')
    function onChange(val: string) {
      setQuantity(val);
    }
    return (
      <DebounceInput
        debouncedEvent={onChange}
        itemNumberPerSalesUnit={1}
        quantity={quantity}
        quantityInputId='x'
        salesUnit='st'
        totalPrice={(parseInt(quantity) * 10).toString()}
      />
    )
  }
};

export const DebounceInputStory = {
  ...DebounceInputStoryTemplate,
  args: {}
}
