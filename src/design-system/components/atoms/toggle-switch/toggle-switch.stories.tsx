import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ToggleSwitch } from './toggle-switch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Design System/Deprecated/ToggleSwitch',
  component: ToggleSwitch,
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

const ToggleSwitchStoryTemplate: Story = {
    render: (args) => {

        function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
            console.log("---", e.currentTarget.checked);
        }

        return(
            <div style={{margin: '2rem'}}>
                <ToggleSwitch {...args} onChangeToggle={handleOnChange}/>
            </div>
        )
    }
}

export const ToggleSwitchStory = {
  ...ToggleSwitchStoryTemplate,
  args: {
    id: 'toggle_switch_id'
  }
}