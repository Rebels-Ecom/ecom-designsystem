import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Tabs } from './Tabs'
import { Button } from '../Button'
import { InfoSummaryBox } from '../InfoSummaryBox'
import { GroupWrapper } from '../../atoms/GroupWrapper'
import { Text } from '../../atoms/Text'

const meta = {
  title: 'Design System/Molecules/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const simpleTabs = [
  { id: 'menu', tabTitle: 'Meny', content: <p>Menu content</p> },
  { id: 'account', tabTitle: 'Mitt Spendrups', content: <p>Account content</p> },
  { id: 'orders', tabTitle: 'Mina ordrar', content: <p>Orders content</p> },
]

/**
 * Canonical tab group. The play test proves the first tab is selected on mount, clicking another
 * tab moves selection (and swaps the visible panel), and `onTabChange` fires with the new id.
 */
export const Default: Story = {
  args: {
    tabs: simpleTabs,
    onTabChange: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('tablist')).toBeInTheDocument()

    const tabs = canvas.getAllByRole('tab')
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    // Only the selected panel is in the accessibility tree.
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Menu content')

    await userEvent.click(tabs[1])
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Account content')
    await expect(args.onTabChange).toHaveBeenCalledWith('account')
  },
}

/**
 * Keyboard model: the tab list is one tab stop (roving `tabindex`); Arrow keys wrap and move both
 * focus and selection, and `Home`/`End` jump to the first/last tab.
 */
export const KeyboardNavigation: Story = {
  args: {
    tabs: simpleTabs,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tabs = canvas.getAllByRole('tab')

    await userEvent.tab()
    await expect(tabs[0]).toHaveFocus()

    await userEvent.keyboard('{ArrowRight}')
    await expect(tabs[1]).toHaveFocus()
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'true')

    await userEvent.keyboard('{ArrowLeft}')
    await expect(tabs[0]).toHaveFocus()

    // Wraps from the first tab to the last.
    await userEvent.keyboard('{ArrowLeft}')
    await expect(tabs[2]).toHaveFocus()

    await userEvent.keyboard('{Home}')
    await expect(tabs[0]).toHaveFocus()

    await userEvent.keyboard('{End}')
    await expect(tabs[2]).toHaveFocus()
  },
}

/** All built-in UI strings are overridable — here the tab list's accessible name is localised. */
export const Localized: Story = {
  args: {
    tabs: simpleTabs,
    labels: { tablist: 'Flikar' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('tablist', { name: 'Flikar' })).toBeInTheDocument()
  },
}

// Gallery-only frame resembling the legacy `tabs-story-mina-favoriter` (first tab active, showing an
// InfoSummaryBox + a primary action). Not mapped to a baseline: the legacy `tabs-story` captures the
// pre-open state (a bare story toggle, no Tabs) and `mina-favoriter` is a deep composite
// (Tabs → InfoSummaryBox → OrderItem×2 + full-width Button) that stacks every nested component's
// documented sub-gate divergence, so a faithful pixel reproduction is not a meaningful oracle.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    tabs: [
      {
        id: 'listor',
        tabTitle: 'InköpsListor',
        content: (
          <GroupWrapper direction="column">
            <InfoSummaryBox label="Listor" linkLabel="Hantera" onClick={() => {}}>
              <Text weight="bold">Sommarfest 2026</Text>
              <Text borderBottom>Vinterfest 2025</Text>
              <Text>Kickoff Q3</Text>
            </InfoSummaryBox>
            <Button surface="primary" size="large">
              Skapa ny lista
            </Button>
          </GroupWrapper>
        ),
      },
      { id: 'produkter', tabTitle: 'Produkter', content: <p>Produkter</p> },
    ],
  },
}
