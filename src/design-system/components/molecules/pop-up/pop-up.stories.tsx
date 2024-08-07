import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PopUp } from './pop-up'
import { GroupWrapper } from '../group-wrapper/group-wrapper'
import { Button, Heading } from '../../atoms'

const meta: Meta<typeof PopUp> = {
  title: 'Design System/Molecules/PopUp',
  component: PopUp,
}

export default meta
type Story = StoryObj<typeof PopUp>

const PopUpStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <PopUp {...args} open={isOpen}>
          <GroupWrapper direction="column">
            <Heading order={4}>Vill du spara dina ändringar?</Heading>
            <GroupWrapper>
              <Button type={'button'} surface={'primary'} onClick={() => setIsOpen(false)}>
                Save
              </Button>
              <Button type={'button'} surface={'secondary'} onClick={() => setIsOpen(false)}>
                Discard
              </Button>
            </GroupWrapper>
          </GroupWrapper>
        </PopUp>
      </div>
    )
  },
}

export const PopUpStory = {
  ...PopUpStoryTemplate,
  args: {},
}
