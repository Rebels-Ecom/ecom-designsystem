import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { AgeVerificationForm } from './AgeVerificationForm'

const meta = {
  title: 'Design System/Molecules/AgeVerificationForm',
  component: AgeVerificationForm,
  args: {
    title: 'Är du 20 år eller äldre?',
    description: 'Du måste vara minst 20 år för att handla alkoholhaltiga drycker.',
    // Overridden per story; default keeps the type satisfied for the render-driven stories.
    actions: [],
  },
} satisfies Meta<typeof AgeVerificationForm>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical prompt. The `play` proves the title is an `<h3>`, the choices are keyboard-operable
 * buttons, and choosing "under 20" surfaces the error in the `role="alert"` live region (announced,
 * not colour-only).
 */
export const Default: Story = {
  render: (args) => {
    const [showError, setShowError] = useState(false)
    return (
      <AgeVerificationForm
        {...args}
        errorMessage={showError ? 'Tyvärr, du måste vara minst 20 år.' : undefined}
        actions={[
          { children: 'Jag är under 20 år', surface: 'primary', onClick: () => setShowError(true) },
          { children: 'Jag har fyllt 20 år', surface: 'primary', onClick: () => setShowError(false) },
        ]}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { level: 3, name: 'Är du 20 år eller äldre?' })).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Jag är under 20 år' }))
    await expect(canvas.getByRole('alert')).toHaveTextContent('Tyvärr, du måste vara minst 20 år.')
  },
}

/*
 * Gallery-only Visual (no baseline — the legacy story renders inside an unmigrated Modal). Shows the
 * error state for review; behaviour is covered by the play test above.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    errorMessage: 'Tyvärr, du måste vara minst 20 år.',
    actions: [
      { children: 'Jag är under 20 år', surface: 'primary' },
      { children: 'Jag har fyllt 20 år', surface: 'primary' },
    ],
  },
}
