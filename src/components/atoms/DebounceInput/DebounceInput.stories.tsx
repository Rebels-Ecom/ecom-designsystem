import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { DebounceInput } from './DebounceInput'

const meta = {
  title: 'Design System/Atoms/DebounceInput',
  component: DebounceInput,
} satisfies Meta<typeof DebounceInput>

export default meta
type Story = StoryObj<typeof meta>

export const DebouncedChange: Story = {
  args: {
    quantityInputId: 'quantity',
    quantity: '1',
    salesUnit: 'st',
    itemNumberPerSalesUnit: 1,
    totalPrice: '10',
    debounceVal: 400,
    debouncedEvent: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('spinbutton', { name: 'Antal' })

    // The adjacent unit/price text is programmatically linked to the field.
    await expect(input).toHaveAccessibleDescription(/Pris: 10 kr/)

    await userEvent.type(input, '5')
    await expect(input).toHaveValue(15)
    // Illegal characters for a quantity are blocked at the keyboard level.
    await userEvent.type(input, '-')
    await expect(input).toHaveValue(15)

    // The change event only fires after the debounce window.
    await expect(args.debouncedEvent).not.toHaveBeenCalled()
    await waitFor(() => expect(args.debouncedEvent).toHaveBeenCalledWith('15'), {
      timeout: 2000,
    })
  },
}

export const Disabled: Story = {
  args: {
    quantityInputId: 'quantity-disabled',
    quantity: '2',
    salesUnit: 'st',
    itemNumberPerSalesUnit: 6,
    totalPrice: '120',
    disabled: true,
    debouncedEvent: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('spinbutton', { name: 'Antal' })).toBeDisabled()
  },
}

// Reproduces the legacy `debounce-input--debounce-input-story` frame: quantity 1 of
// unit 'st' at 10 kr, no wrapper. Mapped in tests/visual/baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    quantityInputId: 'x',
    quantity: '1',
    salesUnit: 'st',
    itemNumberPerSalesUnit: 1,
    totalPrice: '10',
    debouncedEvent: fn(),
  },
}
