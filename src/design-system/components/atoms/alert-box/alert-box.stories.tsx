import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AlertBox } from './alert-box'

const meta: Meta<typeof AlertBox> = {
  title: 'Design System/Atoms/AlertBox',
  component: AlertBox,
}

export default meta
type Story = StoryObj<typeof AlertBox>

const AlertBoxBoxStoryTemplate: Story = {
  render: (args) => {
    return (
      <>
        <AlertBox {...args} />
      </>
    )
  },
}

export const AlertBoxBoxStoryWithButtonError = {
  ...AlertBoxBoxStoryTemplate,
  args: {
    title: 'Minska antal eller ta bort artikeln från varukorgen för att slutföra beställningen.',
    color: 'error',
    buttonText: 'Byt produkt',
    onClick: () => console.log('clicked'),
  },
}

export const AlertBoxBoxStoryNoButtonWarning = {
  ...AlertBoxBoxStoryTemplate,
  args: {
    title: 'Minska antal eller välj en ny produkt för att slutföra beställningen.',
    color: 'warning',
    onClick: () => console.log('clicked'),
  },
}

export const AlertBoxBoxStoryNoButtonInformation = {
  ...AlertBoxBoxStoryTemplate,
  args: {
    title: 'Minska antal eller välj en ny produkt för att slutföra beställningen.',
    color: 'information',
    onClick: () => console.log('clicked'),
    buttonText: 'Byt produkt',
  },
}
