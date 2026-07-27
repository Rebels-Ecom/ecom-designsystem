import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, within } from 'storybook/test';
import beerGlass from '../../../assets/product-images/beer-glass.jpg';
import { dummyWineProduct } from '../ProductCard/productCardFixtures';
import type { ProductCardProps } from '../ProductCard';
import { ProductBlock } from './ProductBlock';

const wineCard: ProductCardProps = {
  cardDisplay: 'horizontal',
  product: { ...dummyWineProduct, primaryImageUrl: beerGlass },
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: fn(),
  showPackaging: true,
  linkComponent: 'a',
};

const richText = (
  <section className='text-left'>
    <p className='mb-4 font-bold text-text-default'>
      Vi vill stolt presentera våra två nya profilglas, speciellt framtagna för
      att få varje serverad Mariestads att visa sig från sin allra bästa sida.
    </p>
    <p className='mb-4 text-text-default'>
      En trevlig ölupplevelse är mer än bara stunden då drycken når smaklökarna.
      Det är många delar som ska falla på plats. Från det första intrycket som
      ett perfekt upphällt öl med vacker skumkrona ger, till smaken av ölets
      sista droppar.
    </p>
    <p className='text-text-default'>
      I samarbete med en av världens främsta glasdesigner presenterar därför
      Mariestads stolt sina två nya profilglas.
    </p>
  </section>
);

const meta = {
  title: 'Design System/Organisms/ProductBlock',
  component: ProductBlock,
  args: {
    headingTag: 'Rom',
    title: 'En extraordnär rom till choklad',
    richText,
    products: [wineCard],
  },
} satisfies Meta<typeof ProductBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Canonical block. The `play` proves the titled block is a labelled `<section>` landmark, the title is
 * a real heading, and each product renders as an `<article>` card.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('region', { name: 'En extraordnär rom till choklad' }),
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('heading', { name: 'En extraordnär rom till choklad' }),
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('article', { name: 'El Esteco Malbec' }),
    ).toBeInTheDocument();
  },
};

/**
 * Text-only block — no products. Without a title the block is a plain (non-landmark) `<section>`, so it
 * stays out of the landmark map.
 */
export const TextOnly: Story = {
  args: {
    title: undefined,
    products: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('region')).toBeNull();
    await expect(canvas.queryByRole('article')).toBeNull();
  },
};

/**
 * Multiple products stacked under one introduction.
 */
export const MultipleProducts: Story = {
  args: {
    products: [wineCard, wineCard],
  },
};

/*
 * Visual parity — reproduces the legacy `procut-block-story`: the "Rom" eyebrow, title, the Mariestads
 * rich-text intro and one horizontal product card. Mapped `reviewOnly`: the embedded
 * {@link ProductCardHorizontal} is itself reviewOnly (brand font + accessible ink over the legacy
 * sub-AA colours + icomoon→Lucide glyphs + local fallback illustration), so the block can't clear the
 * 2% pixel gate. No `play` — the captured frame must not mutate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
};
