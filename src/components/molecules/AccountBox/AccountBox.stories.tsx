import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { AccountBox } from './AccountBox'

const meta = {
  title: 'Design System/Molecules/AccountBox',
  component: AccountBox,
  args: {
    companyName: 'Beer Fest',
    accountNumber: 'Kundnr: 186922',
    contactPerson: 'Jon Jonsson',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: { children: 'Button secondary', size: 'large', iconRight: 'icon-users' },
    onClickChooseAccount: fn(),
  },
} satisfies Meta<typeof AccountBox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical account card. The `play` proves the only control is the button, that its label is its
 * accessible name, and that activating it fires `onClickChooseAccount` (2.1.1).
 */
export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Button secondary' })
    await userEvent.click(button)
    await expect(args.onClickChooseAccount).toHaveBeenCalled()
  },
}

/** Without a contact person — the address follows the account number directly. */
export const WithoutContactPerson: Story = {
  args: { contactPerson: undefined },
}

/*
 * Visual-regression frames — reproduce `account-box-story` (with contact person) and
 * `account-box-story-2` (without). No `play`, `layout: 'fullscreen'`. The button carries the same
 * `font-primary` divergence as Button + lucide-vs-icomoon users glyph, well under the 2% gate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

export const VisualNoContact: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { contactPerson: undefined },
}
