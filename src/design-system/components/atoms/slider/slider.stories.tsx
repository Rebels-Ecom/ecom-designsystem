
import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Design System/Atoms/Slider',
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

const SliderStoryTemplate: Story = {
  render: (args) => {
    const handleChange = (value) => {
      console.log(value);
    }
    return (
      <div className="App">
        <Slider
          {...args}
          onChange={handleChange}
        />
      </div>
    );
  }
};

export const SliderStory = {
  ...SliderStoryTemplate,
  args: {
    formatLabel: '',
    min: 0,
    max: 20,
    withFields: false,
    minLabel: '',
    maxLabel: '',
    allowSameValues: false,
    step: 1
  }
}
