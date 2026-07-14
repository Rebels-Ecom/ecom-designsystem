import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import type { PictureProps } from '../../atoms/Picture'
import type { AccountBoxProps } from '../../molecules/AccountBox'
import logoHorizontal from '../../../assets/logos/spendrups-logo-horizontal.svg'
import { AccountBoxList } from './AccountBoxList'

const logotype: PictureProps = {
  id: 'account-box-list-logo',
  src: logoHorizontal,
  sources: [{ srcset: logoHorizontal }],
  alt: 'Spendrups',
}

const account: AccountBoxProps = {
  companyName: 'Beer Fest',
  accountNumber: 'Kundnr: 186922',
  contactPerson: 'Jon Jonsson',
  address: 'Granängsringen 3',
  zipcode: '135 44',
  city: 'Tyresö',
  chooseAccountBtn: { children: 'Button secondary', iconRight: 'icon-users', size: 'small' },
  onClickChooseAccount: () => {},
}

const accountNoContact: AccountBoxProps = { ...account, contactPerson: undefined }

const meta = {
  title: 'Design System/Organisms/AccountBoxList',
  component: AccountBoxList,
  parameters: { layout: 'fullscreen' },
  args: {
    logotype,
    heading: 'Välj konto',
    text: 'Vilket konto vill du hantera idag?',
    accountsList: [account, accountNoContact, account, account],
  },
} satisfies Meta<typeof AccountBoxList>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: heading + four account cards, each with an operable "choose account" button. */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'Välj konto' })).toBeInTheDocument()
    const buttons = canvas.getAllByRole('button', { name: 'Button secondary' })
    await expect(buttons).toHaveLength(4)
    await userEvent.click(buttons[0])
  },
}

/**
 * Gallery-only (no baseline map): the legacy `account-box-list-story` PNG renders the logo at full
 * intrinsic size (a dead height token) so it overlaps the heading — a broken scene. V2 constrains the
 * logo, so this is an intentionally *different* (fixed) scene, not a faithful reproduction; it is
 * surfaced current-only for review. The account cards themselves match `AccountBox`'s mapped frames.
 */
export const Visual: Story = {
  tags: ['visual'],
}
