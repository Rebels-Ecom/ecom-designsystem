import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Icon, iconNames } from '../components/atoms/Icon/Icon';

/**
 * Live icon catalogue for the design system. Every glyph is keyed by its legacy
 * icomoon name (see `iconMap` in the Icon atom) and rendered through the `Icon`
 * component, so this page stays in sync with the icon set automatically — there
 * is no hardcoded list to maintain.
 */

function IconCatalogue() {
  return (
    <main className='flex flex-col gap-10 bg-white p-6 font-primary text-text-default'>
      <header className='flex flex-col gap-2'>
        <h1 className='text-h-m font-bold'>Icons</h1>
        <p className='max-w-content-text text-body text-text-subdued'>
          {iconNames.length} glyphs, rendered through the{' '}
          <code className='font-secondary'>Icon</code> atom. Names map 1:1 to
          the legacy icomoon set.
        </p>
      </header>
      <ul className='grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8'>
        {iconNames.map((name) => (
          <li
            key={name}
            className='flex flex-col items-center gap-2 rounded-lg border border-grey-300 p-3'
          >
            <Icon icon={name} size='large' label={name} />
            <span className='text-center text-xs break-all text-text-subdued'>
              {name.replace(/^icon-/, '')}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}

const meta = {
  title: 'Design System/Foundations/Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Central overview of the design system icon set, rendered through the Icon atom from the shared `iconMap`.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** The full icon catalogue. */
export const Overview: Story = {
  render: () => <IconCatalogue />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole('heading', { level: 1, name: 'Icons' }),
    ).toBeInTheDocument();
    // Every name in the map renders a labelled glyph — none fall through the mapping.
    await expect(canvas.getAllByRole('img')).toHaveLength(iconNames.length);
  },
};
