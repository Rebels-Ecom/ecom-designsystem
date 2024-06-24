import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ToggleButton } from './toggle-button';

const meta: Meta<typeof ToggleButton> = {
  title: 'Design System/Deprecated/ToggleButton',
  component: ToggleButton,
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

const ToggleButtonStoryTemplate: Story = {
    render: (args) => {
      
      function handleToggleClick(toggleExpanded : boolean) {
          console.log("---", toggleExpanded);
      }

      return(
          <div style={{margin: '2rem'}}>
              <ToggleButton {...args} onToggleClick={handleToggleClick}/>
          </div>
      )
    }
}

export const ToggleButtonStory = {
  ...ToggleButtonStoryTemplate,
  args: {
    toggleBtnLabelExpand: 'Visa alla dina tillagda produkter',
    toggleBtnLabelCollapse: 'Dölja tillagda produkter'
  }
}