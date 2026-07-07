import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { CheckboxListItem } from './CheckboxListItem'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'

const meta = {
  title: 'Design System/Molecules/CheckboxListItem',
  component: CheckboxListItem,
  args: { onChange: fn() },
} satisfies Meta<typeof CheckboxListItem>

export default meta
type Story = StoryObj<typeof meta>

const lokaContent = (
  <>
    <Heading order={5} noMargin>
      Loka stilla naturell 12 pack 50cl pet
    </Heading>
    <Text>Art.nr: 1224345</Text>
  </>
)

const heinekenContent = (
  <>
    <Heading order={5} noMargin>
      Heineken 5% 50cl engångsglas
    </Heading>
    <Text>Art.nr: 115112</Text>
  </>
)

/**
 * Canonical row. The play test proves the checkbox is named by the item content (`aria-labelledby`)
 * and toggles via pointer, firing the controlled `onChange`.
 */
export const Default: Story = {
  args: {
    children: lokaContent,
    id: '1224345',
    name: '1224345',
    value: '1224345',
    checked: false,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    // The rich content names the checkbox via aria-labelledby.
    const checkbox = canvas.getByRole('checkbox', { name: /Loka stilla naturell 12 pack 50cl pet/ })
    await userEvent.click(checkbox)
    await expect(args.onChange).toHaveBeenCalled()
  },
}

/** Disabled rows are not operable. */
export const Disabled: Story = {
  args: {
    children: heinekenContent,
    id: '115112',
    name: '115112',
    value: '115112',
    checked: false,
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: /Heineken/ })
    await expect(checkbox).toBeDisabled()
    await userEvent.click(checkbox)
    await expect(args.onChange).not.toHaveBeenCalled()
  },
}

// Reproduces the legacy `checkbox-list-item-loka` frame (Heading + Art.nr, unchecked, 1800px wrapper).
export const Visual: Story = {
  tags: ['visual'],
  args: { children: lokaContent, id: '1224345', name: '1224345', value: '1224345', checked: false },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
      <CheckboxListItem {...args} />
    </div>
  ),
}

// Reproduces the legacy `checkbox-list-item-heineken` frame.
export const VisualHeineken: Story = {
  tags: ['visual'],
  args: { children: heinekenContent, id: '115112', name: '115112', value: '115112', checked: false },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
      <CheckboxListItem {...args} />
    </div>
  ),
}
