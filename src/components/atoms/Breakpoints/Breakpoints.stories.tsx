import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Above, Below, Between, useBreakpoint } from './Breakpoints'

const meta = {
  title: 'Design System/Atoms/Breakpoints',
  component: Above,
  args: { breakpoint: 'xs', children: 'Responsive content' },
  argTypes: {
    breakpoint: { options: ['xs', 'sm', 'md', 'lg', 'xl'], control: { type: 'radio' } },
  },
} satisfies Meta<typeof Above>

export default meta
type Story = StoryObj<typeof meta>

function ActiveBand() {
  const { isMobile, isTablet, isDesktop, isBigScreen } = useBreakpoint()
  const label = isMobile
    ? 'mobile'
    : isTablet
      ? 'tablet'
      : isDesktop
        ? 'desktop'
        : isBigScreen
          ? 'big screen'
          : 'unknown'
  return <p>Active band: {label}</p>
}

/**
 * `useBreakpoint` reports the active size band; `Above`/`Below`/`Between` conditionally render by
 * viewport. The `play` function asserts the always-true `Above breakpoint="xs"` (min-width 0)
 * content is present, so the store is wired and rendering.
 */
export const Responsive: Story = {
  args: { breakpoint: 'xs' },
  render: (args) => (
    <div>
      <ActiveBand />
      <Above breakpoint={args.breakpoint}>
        <p>Shown at or above the selected breakpoint.</p>
      </Above>
      <Below breakpoint="xl">
        <p>Shown below xl.</p>
      </Below>
      <Between betweenBreakpoints={['sm', 'xl']}>
        {(matches) => <p>Between sm and xl: {matches ? 'yes' : 'no'}</p>}
      </Between>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // `xs` = min-width 0 → always matches, so this content is always rendered.
    await expect(canvas.getByText('Shown at or above the selected breakpoint.')).toBeVisible()
    await expect(canvas.getByText(/Active band:/)).toBeVisible()
    // The Between render-prop always renders, reporting the current match state.
    await expect(canvas.getByText(/Between sm and xl:/)).toBeVisible()
  },
}
