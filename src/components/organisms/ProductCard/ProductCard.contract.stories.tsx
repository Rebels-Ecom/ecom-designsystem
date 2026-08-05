import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import type { LinkComponentType } from '../../../lib/link';
import { ProductCard } from './ProductCard';
import type { ProductCardProps } from './ProductCard';
import type { ProductCardProduct } from './types';
import {
  dummyBeerProduct,
  dummyProductNoVariants,
  dummyWineProduct,
} from './productCardFixtures';

/**
 * **Runtime contract lock** (Phase 0(a) of the product-card hardening). One story per audited v1.6.6
 * consumer call shape; each `play` asserts the observable result the app depends on — accessible
 * names, price text, quantity seeding, and (crucially) that the product emitted to
 * `addToCart` / `onChangeQuantity` carries the original product fields plus the updated
 * `quantity` / `totalPrice`. These run under `pnpm test-storybook` and are axe-scanned like any story,
 * so they double as the a11y floor. They are deliberately UNtagged (no `['visual']`) — they gate
 * behaviour, not pixels — and live in their own CSF title to avoid colliding with the main
 * `ProductCard` stories.
 *
 * Kept green through every later phase: if an internal refactor (Phases 1–3) or an additive type change
 * (Phase 4) alters any observable behaviour, one of these fails.
 */
const meta = {
  title: 'Design System/Organisms/ProductCard/Contract',
  component: ProductCard,
  args: {
    addToCart: fn(),
    addToCartBtnLabel: 'Add to cart',
    loading: false,
  },
  parameters: {
    controls: {
      exclude: [
        'product',
        'addToCart',
        'onChangeQuantity',
        'onVariantChange',
        'linkComponent',
        'className',
      ],
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Horizontal cart line: add-to-cart emits the internally-managed product (original identity fields +
 * updated `quantity`/`totalPrice`), and the remove button reports the part number.
 */
export const HorizontalCartLine: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: dummyBeerProduct,
    addToCartBtnLabel: 'Lägg i varukorg',
    showPackaging: true,
    productArea: 'cart',
    onRemoveProduct: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: 'Lägg i varukorg' }),
    );
    await expect(args.addToCart).toHaveBeenCalledWith(
      expect.objectContaining({
        partNo: '1125111',
        productName: 'Norrlands Guld',
        quantity: '1',
        totalPrice: '1,00',
      }),
    );

    await userEvent.click(
      canvas.getByRole('button', { name: 'Remove product' }),
    );
    await expect(args.onRemoveProduct).toHaveBeenCalledWith('1125111');
  },
};

/** Vertical category card: renders the price line, emits the product on add-to-cart, opens the picker. */
export const VerticalCategoryCard: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    addToCartBtnLabel: 'Lägg i varukorg',
    productArea: 'category',
    onVariantsButtonClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Price text is present (list price + currency + unit).
    await expect(canvas.getByText(/Pris:\s*136\s*kr/)).toBeInTheDocument();

    await userEvent.click(
      canvas.getByRole('button', { name: 'Lägg i varukorg' }),
    );
    await expect(args.addToCart).toHaveBeenCalledWith(
      expect.objectContaining({
        partNo: '2543824',
        quantity: '1',
        totalPrice: '136,00',
      }),
    );

    // Packaging button is a disclosure (two variants → enabled → opens the radio group).
    await userEvent.click(
      canvas.getByRole('button', { name: '75cl Engångsglas' }),
    );
    await expect(args.onVariantsButtonClick).toHaveBeenCalled();
    await expect(
      await canvas.findByRole('radio', { name: '75cl Kolli' }),
    ).toBeInTheDocument();
  },
};

/**
 * Controlled order-return line: quantity seeds from `defaultQuantity`, each change notifies
 * `onChangeQuantity` with the merged product, and `maxQuantity` rejects larger values.
 */
export const ControlledOrderReturn: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: dummyBeerProduct,
    addToCartBtnLabel: 'Add',
    onChangeQuantity: fn(),
    defaultQuantity: '2',
    maxQuantity: 5,
    productArea: 'details',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('spinbutton', { name: 'Quantity' });

    // Seeded from defaultQuantity.
    await expect(field).toHaveValue(2);

    // A valid change notifies with the merged product.
    await userEvent.clear(field);
    await userEvent.type(field, '3');
    await expect(args.onChangeQuantity).toHaveBeenLastCalledWith(
      expect.objectContaining({
        partNo: '1125111',
        quantity: '3',
        totalPrice: '3,00',
      }),
    );

    // A value above maxQuantity is rejected — never reported.
    await userEvent.clear(field);
    await userEvent.type(field, '9');
    await expect(args.onChangeQuantity).not.toHaveBeenCalledWith(
      expect.objectContaining({ quantity: '9' }),
    );
  },
};

/**
 * Uncontrolled add-to-cart list: no `onChangeQuantity`, so the card owns the quantity and emits the
 * resolved product (with the updated quantity) on add-to-cart.
 */
export const UncontrolledAddToCart: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyProductNoVariants,
    addToCartBtnLabel: 'Lägg i varukorg',
    defaultQuantity: '1',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('spinbutton', { name: 'Quantity' });

    await expect(field).toHaveValue(1);
    await userEvent.clear(field);
    await userEvent.type(field, '3');

    await userEvent.click(
      canvas.getByRole('button', { name: 'Lägg i varukorg' }),
    );
    await expect(args.addToCart).toHaveBeenLastCalledWith(
      expect.objectContaining({ partNo: '1105101', quantity: '3' }),
    );
  },
};

/** Restricted user: no price/quantity, add-to-cart is a labelled button that still emits the product. */
export const RestrictedUser: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    isRestrictedUser: true,
    addToCartBtnLabel: 'Logga in och köp',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Pricing is suppressed for restricted users.
    await expect(canvas.queryByText(/Pris:/)).not.toBeInTheDocument();

    await userEvent.click(
      canvas.getByRole('button', { name: 'Logga in och köp' }),
    );
    await expect(args.addToCart).toHaveBeenCalledWith(
      expect.objectContaining({ partNo: '2543824' }),
    );
  },
};

/**
 * Skeleton floor: the minimal 11-field object the app passes while `loading` — it omits `quantity`
 * (optional since Phase 4). Must render without crashing.
 */
const skeletonFloor: ProductCardProduct = {
  partNo: 'SKEL-1',
  productName: 'Skeleton product',
  primaryImageUrl: '',
  country: '',
  packaging: '',
  priceStr: '',
  price: 0,
  salesUnit: '',
  itemNumberPerSalesUnit: 0,
  tags: [],
  productVariantList: [],
};

export const SkeletonFloor: Story = {
  args: {
    cardDisplay: 'vertical',
    product: skeletonFloor,
    loading: true,
    addToCartBtnLabel: 'Lägg i varukorg',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const article = canvas.getByRole('article', { name: 'Skeleton product' });
    await expect(article).toHaveAttribute('aria-busy', 'true');
  },
};

/**
 * Raw order-item product: the app forwards order-history/return items straight in, carrying extra
 * fields the card does not read (`netPriceBeforeDiscount` etc.). These must survive onto the emitted
 * product untouched (the app reads them back).
 */
const rawOrderItem = {
  partNo: '1125111',
  productName: 'Norrlands Guld',
  productUrl: '/Product/1125111',
  primaryImageUrl: '',
  country: 'Sweden',
  packaging: '33cl Engångsglas',
  price: 12,
  priceStr: '12',
  pricePerUnit: 12,
  salesUnit: 'st',
  itemNumberPerSalesUnit: 1,
  quantity: '1',
  totalPrice: '12,00',
  productVariantList: [],
  netPriceBeforeDiscount: 9.5,
  validAssortment: true,
  reasonCode: 'RETURN',
};

export const RawOrderItem: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: rawOrderItem,
    addToCartBtnLabel: 'Add',
    onChangeQuantity: fn(),
    productArea: 'details',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Add' }));
    await expect(args.addToCart).toHaveBeenCalledWith(
      expect.objectContaining({
        partNo: '1125111',
        netPriceBeforeDiscount: 9.5,
        reasonCode: 'RETURN',
      }),
    );
  },
};

/**
 * Polymorphic `linkComponent`: an injected renderer is used for the product links (the app swaps in its
 * router link). (The string form `linkComponent='a'` — same runtime, currently untyped — lands in
 * Phase 4 with the type widening.)
 */
const MarkerLink: LinkComponentType = ({ children, ...props }) => (
  <a data-injected-link='true' {...props}>
    {children}
  </a>
);

export const InjectedLinkComponent: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    addToCartBtnLabel: 'Lägg i varukorg',
    linkComponent: MarkerLink,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameLink = canvas.getByRole('link', { name: 'El Esteco Malbec' });
    await expect(nameLink).toHaveAttribute('href', '/Product/2543824');
    await expect(nameLink).toHaveAttribute('data-injected-link', 'true');
  },
};

/**
 * Horizontal campaign ribbon — a real `activeCampaign` with a brand colour. Locks the horizontal
 * `CardRibbon` rendering path (and keeps the white-on-brand ribbon a11y-clean under the axe gate).
 */
export const HorizontalCampaign: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: {
      ...dummyBeerProduct,
      activeCampaign: { title: 'Kampanj', color: '#9a576f' },
    },
    addToCartBtnLabel: 'Add',
    onRemoveProduct: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Kampanj')).toBeInTheDocument();
  },
};

/**
 * Choosing a packaging variant re-derives the whole product from that variant (the core of
 * `useProductCardState`). Selecting a *different* variant resets the quantity to 1 and recomputes the
 * running total from the variant's price and items-per-sales-unit.
 */
export const VariantChange: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    addToCartBtnLabel: 'Lägg i varukorg',
    onVariantChange: fn(),
    onVariantsButtonClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: '75cl Engångsglas' }),
    );
    const kolli = await canvas.findByRole('radio', { name: '75cl Kolli' });
    await userEvent.click(kolli);

    await expect(args.onVariantChange).toHaveBeenCalledWith(
      expect.objectContaining({
        partNo: '2543814',
        packaging: '75cl Kolli',
        salesUnit: 'KLI',
        itemNumberPerSalesUnit: 6,
        quantity: '1',
        totalPrice: '816,00',
      }),
    );
  },
};

/**
 * Polymorphic `linkComponent` as the intrinsic `'a'` tag string (now typed since Phase 4). The product
 * links render as real `<a href>` anchors — same runtime the app has always relied on.
 */
export const LinkStringTag: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    addToCartBtnLabel: 'Lägg i varukorg',
    linkComponent: 'a',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('link', { name: 'El Esteco Malbec' }),
    ).toHaveAttribute('href', '/Product/2543824');
  },
};

/**
 * Checkout escape hatch `debounceQuantityVal={0}`: 0 is falsy, so the immediate (non-debounced)
 * quantity field is used and each change reports synchronously — the app runs its own 1000ms debounce.
 */
export const DebounceBypass: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: dummyBeerProduct,
    addToCartBtnLabel: 'Add',
    onChangeQuantity: fn(),
    debounceQuantityVal: 0,
    productArea: 'cart',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('spinbutton', { name: 'Quantity' });
    await userEvent.clear(field);
    await userEvent.type(field, '4');
    await expect(args.onChangeQuantity).toHaveBeenLastCalledWith(
      expect.objectContaining({ quantity: '4' }),
    );
  },
};

// ===================================================================================================
// Parent-driven prop re-sync (the controlled path the app relies on but nothing else exercises).
//
// Every other contract story asserts the *initial* render or a *user interaction* (which flows through
// the card's own handlers). These lock the OTHER direction: the parent hands the card new props after
// mount and the card must re-sync exactly as legacy v1.6.6 did. That behaviour lives in the
// `useProductCardState` effect (deps: quantity, priceStr, pricePerUnit, activeCampaign, outOfStock) and
// mirrors the legacy `product-card.tsx:163-177` effect byte-for-byte — including the "clobber" quirk.
//
// The harness IS the parent: it owns `product` in state and exposes labelled test-only buttons that
// mutate a single prop, modelling the real app pushing a server update (campaign/stock/discount) or an
// externally-reset quantity down into an already-mounted card.
// ===================================================================================================

function ParentControlledCard({
  initialProduct,
  ...cardProps
}: { initialProduct: ProductCardProduct } & Omit<ProductCardProps, 'product'>) {
  const [product, setProduct] = useState<ProductCardProduct>(initialProduct);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        <button type="button" onClick={() => setProduct((p) => ({ ...p, quantity: '5' }))}>
          harness: set quantity 5
        </button>
        <button type="button" onClick={() => setProduct((p) => ({ ...p, quantity: '-3' }))}>
          harness: set quantity -3
        </button>
        <button
          type="button"
          onClick={() =>
            setProduct((p) => ({ ...p, pricePerUnit: 20, priceStr: '20', pricePerUnitString: '20' }))
          }
        >
          harness: set price 20
        </button>
        <button
          type="button"
          onClick={() =>
            setProduct((p) => ({ ...p, activeCampaign: { title: 'Kampanj', color: '#9a576f' } }))
          }
        >
          harness: add campaign
        </button>
        <button type="button" onClick={() => setProduct((p) => ({ ...p, outOfStock: true }))}>
          harness: set out of stock
        </button>
      </div>
      <ProductCard {...cardProps} product={product} />
    </div>
  );
}

/**
 * Parent pushes a new `quantity` prop into a mounted card → the field and the live price readout
 * re-sync (models an externally-reset quantity, e.g. a stock clamp or a cart merge feeding qty back).
 */
export const ParentDrivenQuantityResync: Story = {
  // `render` drives everything; these args only satisfy the required-prop types (meta covers the rest).
  args: { cardDisplay: 'horizontal', product: dummyBeerProduct },
  render: () => (
    <ParentControlledCard
      cardDisplay="horizontal"
      loading={false}
      addToCart={() => {}}
      addToCartBtnLabel="Add"
      productArea="cart"
      initialProduct={dummyBeerProduct}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('spinbutton', { name: 'Quantity' });
    await expect(field).toHaveValue(1);
    await expect(canvas.getByText('Pris: 1,00 kr')).toBeInTheDocument();

    await userEvent.click(canvas.getByRole('button', { name: 'harness: set quantity 5' }));

    // The card re-syncs from the parent's new quantity prop: field + recomputed total (1 × 1 × 5).
    await expect(field).toHaveValue(5);
    await expect(canvas.getByText('Pris: 5,00 kr')).toBeInTheDocument();
  },
};

/**
 * Parent pushes a new `pricePerUnit`/`priceStr` (a discount or price-code recompute, real-app scenario
 * 19) → the total recomputes from the new price with the quantity unchanged (20 × 1 × 1).
 */
export const ParentDrivenPriceResync: Story = {
  args: { cardDisplay: 'horizontal', product: dummyBeerProduct },
  render: () => (
    <ParentControlledCard
      cardDisplay="horizontal"
      loading={false}
      addToCart={() => {}}
      addToCartBtnLabel="Add"
      productArea="cart"
      initialProduct={dummyBeerProduct}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Pris: 1,00 kr')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', { name: 'harness: set price 20' }));
    await expect(canvas.getByText('Pris: 20,00 kr')).toBeInTheDocument();
  },
};

/**
 * Parent pushes an `activeCampaign` into a mounted card (the app's `UPDATE_CAMPAIGN_DATA` after an add,
 * real-app scenario 11) → the campaign ribbon appears without any user interaction.
 */
export const ParentDrivenCampaignResync: Story = {
  args: { cardDisplay: 'horizontal', product: dummyBeerProduct },
  render: () => (
    <ParentControlledCard
      cardDisplay="horizontal"
      loading={false}
      addToCart={() => {}}
      addToCartBtnLabel="Add"
      productArea="cart"
      onRemoveProduct={fn()}
      initialProduct={dummyBeerProduct}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByText('Kampanj')).toBeNull();
    await userEvent.click(canvas.getByRole('button', { name: 'harness: add campaign' }));
    await expect(canvas.getByText('Kampanj')).toBeInTheDocument();
  },
};

/**
 * Parent flips `outOfStock` on a mounted card (server stock update, real-app scenario 12) → the
 * out-of-stock ribbon appears. The label is a static translation string present from mount (the effect
 * re-syncs `outOfStock` but not `outOfStockLabel`, mirroring legacy), so it is seeded on the product.
 */
export const ParentDrivenStockResync: Story = {
  args: { cardDisplay: 'horizontal', product: dummyBeerProduct },
  render: () => (
    <ParentControlledCard
      cardDisplay="horizontal"
      loading={false}
      addToCart={() => {}}
      addToCartBtnLabel="Add"
      productArea="cart"
      onRemoveProduct={fn()}
      initialProduct={{ ...dummyBeerProduct, outOfStockLabel: 'Slut i lager' }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByText('Slut i lager')).toBeNull();
    await userEvent.click(canvas.getByRole('button', { name: 'harness: set out of stock' }));
    await expect(canvas.getByText('Slut i lager')).toBeInTheDocument();
  },
};

/**
 * `allowNegative` (order-history credit lines, real-app scenario 16): a negative quantity can only ever
 * arrive from the parent (the field blocks the `-` key), so this is inherently a parent-driven case.
 * With `allowNegative` the card preserves the parent's `-3`; the companion story proves the default clamp.
 */
export const AllowNegativeFromParent: Story = {
  args: { cardDisplay: 'horizontal', product: dummyBeerProduct },
  render: () => (
    <ParentControlledCard
      cardDisplay="horizontal"
      loading={false}
      addToCart={() => {}}
      addToCartBtnLabel="Add"
      productArea="details"
      allowNegative
      onChangeQuantity={fn()}
      initialProduct={dummyBeerProduct}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('spinbutton', { name: 'Quantity' });
    await userEvent.click(canvas.getByRole('button', { name: 'harness: set quantity -3' }));
    // allowNegative → the parent's negative quantity survives (not clamped to 0).
    await expect(field).toHaveValue(-3);
  },
};

/** Without `allowNegative`, a negative quantity from the parent clamps to `0` (legacy `getQuantity`). */
export const ClampsNegativeFromParent: Story = {
  args: { cardDisplay: 'horizontal', product: dummyBeerProduct },
  render: () => (
    <ParentControlledCard
      cardDisplay="horizontal"
      loading={false}
      addToCart={() => {}}
      addToCartBtnLabel="Add"
      productArea="details"
      onChangeQuantity={fn()}
      initialProduct={dummyBeerProduct}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('spinbutton', { name: 'Quantity' });
    await userEvent.click(canvas.getByRole('button', { name: 'harness: set quantity -3' }));
    await expect(field).toHaveValue(0);
  },
};

/**
 * **The legacy "clobber" quirk lock.** After a variant switch, `partNo`/`packaging`/`itemNumberPerSalesUnit`
 * etc. hold the variant's values, but a later parent re-render (any effect dep changing) overwrites
 * `activeCampaign`/`priceStr`/`pricePerUnit`/`outOfStock` back to the ORIGINAL base product — a mixed
 * base/variant state (legacy `product-card.tsx:163-177`; V2 `useProductCardState.ts:104`). Here: the base
 * carries a campaign, the chosen variant does not; selecting it hides the ribbon, but a parent quantity
 * bump makes the base campaign clobber back while the variant packaging survives. Locking this prevents a
 * future refactor from silently "fixing" the quirk and diverging from v1.6.6.
 */
const clobberCampaign = { title: 'Startkampanj', color: '#9a576f' };
const clobberProduct: ProductCardProduct = {
  partNo: 'CLB-1',
  productName: 'Clobber Test Product',
  productUrl: '/Product/CLB-1',
  primaryImageUrl: '',
  country: 'Sweden',
  packaging: 'Startpaket',
  price: 10,
  priceStr: '10',
  pricePerUnit: 10,
  pricePerUnitString: '10',
  salesUnit: 'st',
  itemNumberPerSalesUnit: 1,
  quantity: '1',
  totalPrice: '10,00',
  activeCampaign: clobberCampaign,
  tags: [],
  productVariantList: [
    {
      productName: 'Clobber Test Product',
      variantName: 'Startpaket',
      variantId: 'CLB-1',
      priceStr: '10',
      price: 10,
      pricePerUnit: 10,
      pricePerUnitString: '10',
      salesUnit: 'st',
      itemNumberPerSalesUnit: 1,
      activeCampaign: clobberCampaign,
      image: { id: 'clb-1', src: '', sources: [] },
    },
    {
      productName: 'Clobber Test Product',
      variantName: 'Kampanjfri variant',
      variantId: 'CLB-2',
      priceStr: '20',
      price: 20,
      pricePerUnit: 20,
      pricePerUnitString: '20',
      salesUnit: 'st',
      itemNumberPerSalesUnit: 1,
      activeCampaign: null,
      image: { id: 'clb-2', src: '', sources: [] },
    },
  ],
  partNoLabel: 'Art.nr.',
  unitLabel: 'st',
  currencyLabel: 'kr',
  priceLabel: 'Pris',
  aLabel: 'à',
};

export const VariantResyncClobber: Story = {
  args: { cardDisplay: 'vertical', product: clobberProduct },
  render: () => (
    <ParentControlledCard
      cardDisplay="vertical"
      loading={false}
      addToCart={() => {}}
      addToCartBtnLabel="Lägg i varukorg"
      onVariantChange={fn()}
      productArea="category"
      initialProduct={clobberProduct}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Base product carries the campaign ribbon.
    await expect(canvas.getByText('Startkampanj')).toBeInTheDocument();

    // Switch to the campaign-free variant → its (null) campaign wins, ribbon disappears.
    await userEvent.click(canvas.getByRole('button', { name: 'Startpaket' }));
    await userEvent.click(await canvas.findByRole('radio', { name: 'Kampanjfri variant' }));
    await expect(canvas.queryByText('Startkampanj')).toBeNull();
    await expect(canvas.getByRole('button', { name: 'Kampanjfri variant' })).toBeInTheDocument();

    // Parent bumps quantity → the effect re-syncs and CLOBBERS activeCampaign back to the base value,
    // even though the selected variant has none — while the variant's packaging label survives.
    await userEvent.click(canvas.getByRole('button', { name: 'harness: set quantity 5' }));
    await expect(canvas.getByText('Startkampanj')).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: 'Kampanjfri variant' })).toBeInTheDocument();
  },
};

/**
 * Invalid assortment (order-history reorder, real-app scenario 17): `hideCartButton` +
 * `productQuantityDisabled` → no add-to-cart control and the quantity is read-only text, not a field.
 */
export const InvalidAssortment: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: dummyBeerProduct,
    addToCartBtnLabel: 'Add',
    hideCartButton: true,
    productQuantityDisabled: true,
    onChangeQuantity: fn(),
    productArea: 'details',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button', { name: 'Add' })).toBeNull();
    await expect(canvas.queryByRole('spinbutton')).toBeNull();
  },
};
