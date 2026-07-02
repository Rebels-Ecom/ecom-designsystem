import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Icon, iconMap, type IconName } from './Icon'

const iconNames = Object.keys(iconMap) as IconName[]

const meta = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: { control: 'select', options: iconNames },
    size: { control: 'radio', options: ['small', 'medium', 'large', 'xlarge'] },
    color: { control: 'radio', options: ['error', 'success'] },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Labelled: Story = {
  args: { icon: 'icon-search', size: 'large', label: 'Search' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { name: 'Search' })
    await expect(icon).toBeInTheDocument()
    // The Lucide glyph actually rendered inside the labelled wrapper.
    await expect(icon.querySelector('svg')).not.toBeNull()
  },
}

export const Decorative: Story = {
  args: { icon: 'icon-heart', size: 'medium' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // No accessible role — purely decorative, hidden from assistive tech.
    await expect(canvas.queryByRole('img')).toBeNull()
  },
}

export const AllIcons: Story = {
  // `render` shows the whole catalogue; `args` only satisfies the required prop.
  args: { icon: 'icon-search' },
  parameters: { controls: { disable: true } },
  render: () => (
    <ul className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
      {iconNames.map((name) => (
        <li key={name} className="flex flex-col items-center gap-2 rounded border p-3">
          <Icon icon={name} size="large" label={name} />
          <span className="text-center text-xs break-all">{name.replace(/^icon-/, '')}</span>
        </li>
      ))}
    </ul>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Every name in the map renders a labelled glyph — none fall through the mapping.
    await expect(canvas.getAllByRole('img')).toHaveLength(iconNames.length)
  },
}

export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  // Reproduces the legacy `icon-story` frame: `<Icon icon='icon-map-pin' />`, default size.
  args: { icon: 'icon-map-pin' },
}
