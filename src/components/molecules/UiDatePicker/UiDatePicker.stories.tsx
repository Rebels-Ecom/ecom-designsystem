import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { UiDatePicker, type UiDatePickerProps } from './UiDatePicker'

// Deterministic delivery days across two months (Tue/Fri cadence) so month navigation is demonstrable;
// one holiday, one initially-selected day. `new Date(y, m, d)` is local midnight — matching how the
// component compares days — and the slash-format string parses as local (not UTC) too.
const deliveryDates = [
  new Date(2023, 10, 3),
  new Date(2023, 10, 7),
  new Date(2023, 10, 10),
  new Date(2023, 10, 14),
  new Date(2023, 10, 17),
  new Date(2023, 10, 21),
  new Date(2023, 10, 24),
  new Date(2023, 11, 1),
  new Date(2023, 11, 5),
  new Date(2023, 11, 8),
]
const holidayDates = [new Date(2023, 10, 6)]

const format = (date: Date) =>
  `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`

/** Wires the picker up statefully so a selection updates the trigger label — a real, verifiable loop. */
function StatefulPicker(args: UiDatePickerProps) {
  const [value, setValue] = useState(args.selectedDeliveryDate)
  return (
    <UiDatePicker
      {...args}
      selectedDeliveryDate={value}
      buttonLabel={format(new Date(value))}
      onDateSelected={(date) => {
        setValue(format(date))
        args.onDateSelected?.(date)
      }}
    />
  )
}

const meta = {
  title: 'Design System/Molecules/UiDatePicker',
  component: UiDatePicker,
  args: {
    buttonLabel: '2023/11/10',
    selectedDeliveryDate: '2023/11/10',
    deliveryDates,
    holidayDates,
    onDateSelected: fn(),
    headerText: 'Choose your delivery day',
  },
} satisfies Meta<typeof UiDatePicker>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical picker — starts CLOSED, exactly as it mounts in an app (the calendar renders only after
 * the user clicks the trigger; it is never in the DOM until then, so it cannot flash open). The `play`
 * verifies the collapsed trigger: focusable, `aria-haspopup="dialog"`, `aria-expanded="false"`, and no
 * dialog present. Opening / selecting / navigating are covered by the stories below.
 */
export const Default: Story = {
  render: (args) => <StatefulPicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: '2023/11/10' })
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await expect(canvas.queryByRole('dialog')).toBeNull()
  },
}

/**
 * Selecting a day. The `play` opens the popover, picks an enabled delivery day, and proves it fires
 * `onDateSelected`, closes the popover, and updates the trigger label (a real, verifiable loop).
 */
export const SelectDate: Story = {
  render: (args) => <StatefulPicker {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: '2023/11/10' })
    await userEvent.click(trigger)

    const dialog = canvas.getByRole('dialog', { name: 'Choose your delivery day' })
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')

    // Pick the 7th (an enabled delivery day). Day buttons live inside the grid; nav sits outside it.
    const grid = within(dialog).getByRole('grid')
    const day7 = within(grid)
      .getAllByRole('button')
      .find((button) => button.textContent?.trim() === '7' && !(button as HTMLButtonElement).disabled)
    await userEvent.click(day7 as HTMLElement)

    await expect(args.onDateSelected).toHaveBeenCalled()
    await expect(canvas.queryByRole('dialog')).toBeNull()
    await expect(canvas.getByRole('button', { name: '2023/11/07' })).toBeInTheDocument()
  },
}

/**
 * Month navigation. The `play` proves the "next month" button advances to December (where more
 * delivery days live) — and that a December delivery day is selectable.
 */
export const MonthNavigation: Story = {
  render: (args) => <StatefulPicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: '2023/11/10' }))
    const dialog = canvas.getByRole('dialog')
    await expect(within(dialog).getByText('November 2023')).toBeInTheDocument()
    await userEvent.click(within(dialog).getByRole('button', { name: /next/i }))
    await expect(within(dialog).getByText('December 2023')).toBeInTheDocument()
  },
}

/** Escape closes the popover and returns focus to the trigger (2.1.2 / 2.4.3). */
export const EscapeCloses: Story = {
  render: (args) => <StatefulPicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: '2023/11/10' })
    await userEvent.click(trigger)
    await expect(canvas.getByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await expect(canvas.queryByRole('dialog')).toBeNull()
    await expect(trigger).toHaveFocus()
  },
}

/** With an order-stop notice under the calendar. */
export const WithOrderStop: Story = {
  render: (args) => <StatefulPicker {...args} />,
  args: {
    orderStopDate: {
      title: 'Order stop days',
      stopDates: ['2023-11-06', '2023-11-13'],
      note: 'Orders placed after 14:00 ship the next delivery day.',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: '2023/11/10' }))
    await expect(canvas.getByText('Order stop days')).toBeInTheDocument()
  },
}

/** Loading — the trigger is disabled while dates resolve. */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: '2023/11/10' })).toBeDisabled()
  },
}

/*
 * Visual-regression frames — reproduce the two legacy baselines, both the CLOSED trigger (the
 * react-datepicker popover was never captured, and V2's calendar is a from-scratch react-day-picker
 * rewrite with no open-state baseline). No `play`, `layout: 'fullscreen'`. Same Button font divergence
 * + lucide calendar glyph, under the 2% gate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { buttonLabel: 'Beställ inom 15 timmar för leverans om 2 dagar' },
}

export const VisualDateLabel: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { buttonLabel: '2023/11/27' },
}
