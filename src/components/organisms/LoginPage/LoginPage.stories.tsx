import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { LoginPage } from './LoginPage'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../molecules/Button'

const meta = {
  title: 'Design System/Organisms/LoginPage',
  component: LoginPage,
} satisfies Meta<typeof LoginPage>

export default meta
type Story = StoryObj<typeof meta>

// Representative card. The real page centres the (not-yet-migrated) LoginForm / AccountBoxList here.
const loginCard = (
  <div className="flex w-full max-w-box flex-col gap-4 rounded bg-surface-default p-8">
    <Heading order={1}>Logga in</Heading>
    <Text>Ange dina uppgifter för att fortsätta till Spendrups Shop.</Text>
    <Button type="submit" surface="primary" fullWidth>
      Logga in
    </Button>
  </div>
)

/** The login shell centring a card. The play test confirms the heading and reachable submit control. */
export const Default: Story = {
  args: { children: loginCard },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'Logga in' })).toBeInTheDocument()
    const button = canvas.getByRole('button', { name: 'Logga in' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}

// Gallery-only: NOT mapped — the legacy `login-page-story` frames centre the unmigrated LoginForm /
// AccountBoxList. Re-map once those land. Shows the blue full-viewport shell with a placeholder card.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: loginCard },
  parameters: { layout: 'fullscreen' },
}
