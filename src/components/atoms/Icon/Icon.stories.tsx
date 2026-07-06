import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Icon, iconNames } from './Icon';

const meta = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: { control: 'select', options: iconNames },
    size: { control: 'radio', options: ['small', 'medium', 'large', 'xlarge'] },
    color: { control: 'radio', options: ['error', 'success'] },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Labelled: Story = {
  args: { icon: 'icon-search', size: 'large', label: 'Search' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { name: 'Search' });
    await expect(icon).toBeInTheDocument();
    // The Lucide glyph actually rendered inside the labelled wrapper.
    await expect(icon.querySelector('svg')).not.toBeNull();
  },
};

export const Decorative: Story = {
  args: { icon: 'icon-heart', size: 'medium' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // No accessible role — purely decorative, hidden from assistive tech.
    await expect(canvas.queryByRole('img')).toBeNull();
  },
};

export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  // Reproduces the legacy `icon-story` frame: `<Icon icon='icon-map-pin' />`, default size.
  args: { icon: 'icon-map-pin' },
};
