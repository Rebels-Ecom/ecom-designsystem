import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ColorBox from '../../../styles/themes/color-box/color-box';
import { FlexContainer } from './flex-container'

const meta: Meta<typeof FlexContainer> = {
  title: 'Design System/Atoms/FlexContainer',
  component: FlexContainer,
  argTypes: {
    flexDirection: {
      options: ['row', 'column'],
      control: { type: 'radio' },
    },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['flex-start', 'center', 'flex-end', 'space-between'],
      control: { type: 'select' },
    },
  }
};

export default meta;
type Story = StoryObj<typeof FlexContainer>;

const FlexContainerStoryTemplate: Story = {
  render: (args) => {
    return (
      <FlexContainer {...args}>
        <div style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />
        <div style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />
        <div style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />
        <div style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />
        <div style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />
        <div style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />
      </FlexContainer>
    )
  }
};

export const FlexContainerStory = {
  ...FlexContainerStoryTemplate,
  args: {
    flexDirection: 'row',
    gap: 1,
    wrap: false,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
}
