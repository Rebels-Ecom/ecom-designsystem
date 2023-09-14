import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MenuButton } from './menu-button'

const meta = {
  title: 'Design System/Atoms/MenuButton',
  component: MenuButton,
  parameters: {
    controls: { exclude: ['onClick'] },
  },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuButtonStory: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return <MenuButton {...args} onClick={() => { console.log(isOpen); setIsOpen(!isOpen)}} isOpen={isOpen} />
  },
  args: {
    onClick: () => {},
    isOpen: false,
  },
};
