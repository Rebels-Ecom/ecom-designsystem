import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AlertMessage } from './alert-message'

const meta: Meta<typeof AlertMessage> = {
  title: 'Design System/Atoms/AlertMessage',
  component: AlertMessage,
}

export default meta
type Story = StoryObj<typeof AlertMessage>

const AlertMessageStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isMessageAlertOpen, setIsMessageAlertOpen] = React.useState(true)
    return (
      <AlertMessage isOpen={isMessageAlertOpen} onClose={() => setIsMessageAlertOpen(!isMessageAlertOpen)} {...args}>
        Alert message here...
      </AlertMessage>
    )
  },
}

export const AlertMessageStory_Info = {
  ...AlertMessageStoryTemplate,
  args: {
    type: 'info',
  },
}

export const AlertMessageStory_Warning = {
  ...AlertMessageStoryTemplate,
  args: {
    type: 'warning',
  },
}

export const AlertMessageStory_Error = {
  ...AlertMessageStoryTemplate,
  args: {
    type: 'error',
  },
}
