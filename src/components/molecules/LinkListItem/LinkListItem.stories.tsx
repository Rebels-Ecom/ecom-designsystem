import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { LinkListItem } from './LinkListItem';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import { GroupWrapper } from '../../atoms/GroupWrapper';
import { IconButton } from '../IconButton';

const meta = {
  title: 'Design System/Molecules/LinkListItem',
  component: LinkListItem,
  args: {
    title: 'Order nummer: 1423569',
    onClick: fn(),
  },
} satisfies Meta<typeof LinkListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Legacy stories wrapped the row in a wide, centred container — reproduced for the visual frames.
const wide = { margin: '3rem auto', maxWidth: '1800px' } as const;

/**
 * Canonical linked row. The `play` proves the row exposes exactly ONE link (the title) — the chevron
 * is a decorative affordance, not a duplicate link as in legacy — and that link's name is the title.
 */
export const Default: Story = {
  args: {
    date1: '2023-06-01',
    date2: '2023-06-07',
    status: 'status-delivered',
    linkUrl: '/orders/1423569',
    children: <Text>22 artiklar</Text>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');
    await expect(links).toHaveLength(1);
    await expect(
      canvas.getByRole('link', { name: 'Order nummer: 1423569' }),
    ).toBeInTheDocument();
  },
};

/** Removable row — the trailing trash button fires `onRemove` with a title-specific label. */
export const WithRemove: Story = {
  args: { onRemove: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Remove Order nummer: 1423569' }),
    );
    await expect(args.onRemove).toHaveBeenCalled();
  },
};

/** Download button in the tag row fires `onDownloadClick`. */
export const WithDownload: Story = {
  args: { date1: '2023-06-01', onDownloadClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Download Order nummer: 1423569' }),
    );
    await expect(args.onDownloadClick).toHaveBeenCalled();
  },
};

/** Loading — decorative skeletons with a `role="status"` announcement; no title text is exposed. */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('status')).toHaveTextContent('Loading');
    await expect(canvas.queryByText('Order nummer: 1423569')).toBeNull();
  },
};

/** Localised control names via `labels`. */
export const Localized: Story = {
  args: { onRemove: fn(), labels: { remove: (title) => `Ta bort ${title}` } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('button', { name: 'Ta bort Order nummer: 1423569' }),
    ).toBeInTheDocument();
  },
};

/* Visual parity — reproduces `link-list-item-story-order-processing` (two date tags + download link). */
export const VisualOrderProcessing: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    date1: '2023-06-01',
    date2: '2023-06-07',
    status: 'status-progress',
    title: 'Order nummer: 1423569',
    linkUrl: '/link-to-somewhere',
    downloadLinkUrl: 'https://example.com/invoice.pdf',
    target: '_blank',
  },
  render: (args) => (
    <div style={wide}>
      <LinkListItem {...args} />
    </div>
  ),
};

/* Visual parity — reproduces `link-list-item-story-order-delivered`. */
export const VisualOrderDelivered: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    date1: '2023-06-01',
    date2: '2023-06-07',
    status: 'status-delivered',
    title: 'Order nummer: 1423569',
    linkUrl: '/link-to-somewhere',
    children: <Text>22 artiklar</Text>,
  },
  render: (args) => (
    <div style={wide}>
      <LinkListItem {...args} />
    </div>
  ),
};

/* Visual parity — reproduces `link-list-item-story-purchase-list-item`. */
export const VisualPurchaseListItem: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'List namn: Absolutely new list',
    linkUrl: '/link-to-somewhere',
    children: (
      <GroupWrapper>
        <Text>22 produkter</Text>
        <Icon icon='icon-message-circle' />
      </GroupWrapper>
    ),
  },
  render: (args) => (
    <div style={wide}>
      <LinkListItem {...args} />
    </div>
  ),
};

/* Visual parity — reproduces `link-list-item-story-bonus-list-item`. */
export const VisualBonusListItem: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Bonusavstämning.pdf',
    linkUrl: '/link-to-download',
    children: <Text>B9150</Text>,
    onDownloadClick: () => {},
  },
  render: (args) => (
    <div style={wide}>
      <LinkListItem {...args} />
    </div>
  ),
};

/* Visual parity — reproduces `link-list-item-story-invoice-list-item`. */
export const VisualInvoiceListItem: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Fakturanr. 217101725',
    date1: '2023-06-01',
    linkUrl: '/link-to-download',
    children: (
      // On mobile the group stacks as a column — left-align it under the title and tighten the gap
      // instead of the legacy centre-alignment (which floated the amounts). `lg:` keeps the desktop
      // centred row (baseline parity).
      <GroupWrapper
        align='center'
        className='items-start gap-2 lg:items-center lg:gap-4'
      >
        <Text>Fakturabelopp: 3192kr</Text>
        <Text>Betalt belopp: 0kr</Text>
        <Text>Kvar att betala: 3192kr</Text>
        <IconButton
          type='button'
          icon='icon-file'
          label='Download invoice'
          size='large'
          onClick={fn()}
        />
      </GroupWrapper>
    ),
  },
  render: (args) => (
    <div style={wide}>
      <LinkListItem {...args} />
    </div>
  ),
};
