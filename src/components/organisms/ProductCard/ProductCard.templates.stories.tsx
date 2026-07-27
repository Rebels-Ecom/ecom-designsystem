import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import type { LinkComponentType } from '../../../lib/link';
import { ProductCard, type ProductCardProps } from './ProductCard';
import {
  dummyProductNoVariants,
  dummyWineProduct,
} from './productCardFixtures';
import {
  templateCartLines,
  templateCatalogProducts,
  templateCheckoutCampaignLine,
  templateOrderLine,
} from './productCardTemplateFixtures';

/**
 * **Templates** — the ProductCard family rendered exactly the way the consuming app
 * (`spendrups-frontendapp`) renders it, one story per real screen. Every story drives the public
 * {@link ProductCard} dispatcher with the same props the app passes (verified against the app source),
 * wraps the cards in the same kind of grid/list container, and feeds products shaped like the app's
 * `productCardFactory` / `productFromCartItemFactory` output — so a template looks and behaves like the
 * screen it mirrors. Interactions (add-to-cart, quantity edits, variant switch, remove) are wired live,
 * with the controlled screens (cart/checkout/order/return/purchase-list) held in local state the way the
 * app holds them in redux / the cart machine.
 *
 * These are integration templates, not visual-regression baselines — they are intentionally untagged so
 * `test:visual` (which pixel-diffs `visual`-tagged frames against frozen legacy PNGs) skips them.
 */

/** A stand-in for the app's injected React Router `Link` (`linkComponent={Link}`). */
const Link: LinkComponentType = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
);

const ADD_TO_CART = 'Lägg i varukorg';
const LOGIN_AND_BUY = 'Logga in och köp';

/** Swedish accessible names — the app localises these via i18next. */
const svLabels: ProductCardProps['labels'] = {
  removeProduct: 'Ta bort produkt',
  openVariants: 'Visa varianter',
  addToPurchaseList: 'Spara i inköpslista',
  addToFavorites: 'Spara som favorit',
  removeFromFavorites: 'Ta bort favorit',
  changeVariant: 'Byt variant',
  selectPackaging: 'Välj förpackning',
  changeProduct: 'Byt produkt',
};

/** The tooltip set the listing screens pass. */
const listingTooltips: ProductCardProps['tooltips'] = {
  addToFavorites: 'Spara som favorit',
  removeFromFavorites: 'Ta bort favorit',
  addToPurchaseList: 'Spara i inköpslista',
  changeVariant: 'Byt variant',
  sellerOnly: 'Säljs endast till återförsäljare',
  accessoryPotItem: 'Tillbehör (pant)',
};

/** Ids the app would source from the favourites selector (drives the filled heart state). */
const favoriteProductsIds = ['8801201'];

const meta = {
  title: 'Design System/Organisms/ProductCard/Templates',
  component: ProductCard,
  args: {
    addToCart: fn(),
    addToCartBtnLabel: ADD_TO_CART,
    loading: false,
    linkComponent: Link,
    labels: svLabels,
  },
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Vertical listing grids -----------------------------------------------------------------------

/**
 * **Category / product-listing grid** (`CategoryProductList`). A responsive grid of vertical cards with
 * the favourite + purchase-list account actions, variant pickers, tags, and campaign / limited /
 * out-of-stock ribbons. `defaultQuantity='1'`, `productArea='category'`, `hideRemoveButton`, and the
 * first four cards get the eager/high image-priority hint the app applies above the fold.
 */
export const CategoryGrid: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    onVariantsButtonClick: fn(),
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  render: (args) => (
    <ul className='grid list-none grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {templateCatalogProducts.map((product, index) => (
        <li key={product.partNo}>
          <ProductCard
            {...args}
            product={product}
            defaultQuantity='1'
            productArea='category'
            hideRemoveButton
            showFavoriteIcon
            showAddToPurchaseListIcon
            favoriteProductsIds={favoriteProductsIds}
            isAddingToFavorites={false}
            tooltips={listingTooltips}
            imagePriority={{
              loading: index < 4 ? 'eager' : 'lazy',
              fetchPriority: index < 4 ? 'high' : 'low',
            }}
          />
        </li>
      ))}
    </ul>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Add-to-cart on the first card forwards the (internally-managed) product.
    const cartButtons = canvas.getAllByRole('button', { name: ADD_TO_CART });
    await userEvent.click(cartButtons[0]);
    await expect(args.addToCart).toHaveBeenCalled();

    // The packaging button is a disclosure that opens the variant picker (wine has two variants).
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
 * **Content / CMS product block** (`ProductListSelection`). The same vertical card, centred in a
 * narrower content column with `productArea='content-page'`. The app renders this from a Sitecore
 * datasource (and can pipe the same props into a carousel).
 */
export const ContentPageBlock: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  render: (args) => (
    <ul className='mx-auto grid max-w-container-content-text list-none grid-cols-2 justify-center gap-4 p-4 md:grid-cols-3'>
      {[
        dummyWineProduct,
        templateCatalogProducts[1],
        dummyProductNoVariants,
      ].map((product) => (
        <li key={product.partNo}>
          <ProductCard
            {...args}
            product={product}
            defaultQuantity='1'
            productArea='content-page'
            showFavoriteIcon
            showAddToPurchaseListIcon
            favoriteProductsIds={favoriteProductsIds}
            tooltips={listingTooltips}
          />
        </li>
      ))}
    </ul>
  ),
};

/**
 * **Restricted / anonymous user** (the `isRestrictedUser` branch used across the listing screens →
 * {@link ProductCardRestricted}). Pricing and the quantity field are hidden, the CTA becomes a labelled
 * "log in and buy" button, and the favourite / purchase-list actions are withheld.
 */
export const RestrictedGrid: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    isRestrictedUser: true,
    addToCartBtnLabel: LOGIN_AND_BUY,
  },
  render: (args) => (
    <ul className='grid list-none grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {[
        dummyWineProduct,
        templateCatalogProducts[1],
        dummyProductNoVariants,
      ].map((product) => (
        <li key={product.partNo}>
          <ProductCard {...args} product={product} tooltips={listingTooltips} />
        </li>
      ))}
    </ul>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button', { name: LOGIN_AND_BUY });
    await userEvent.click(buttons[0]);
    await expect(args.addToCart).toHaveBeenCalled();
  },
};

/**
 * **Recommended / cross-sell** (`ProductList`). On desktop the app renders vertical cards in a centred
 * column and wires the `onVariantsButtonClick` / `onVariantChange` analytics hooks; `productArea` is
 * `'recommended'`.
 */
export const RecommendedRow: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    onVariantsButtonClick: fn(),
    onVariantChange: fn(),
    onFavoriteIconClick: fn(),
  },
  render: (args) => (
    <div className='mx-auto grid max-w-container-content-text list-none grid-cols-2 gap-4 p-4 md:grid-cols-3'>
      {[
        dummyWineProduct,
        templateCatalogProducts[2],
        templateCatalogProducts[3],
      ].map((product) => (
        <ProductCard
          key={product.partNo}
          {...args}
          product={product}
          defaultQuantity='1'
          productArea='recommended'
          hideRemoveButton
          showFavoriteIcon
          favoriteProductsIds={favoriteProductsIds}
          tooltips={listingTooltips}
        />
      ))}
    </div>
  ),
};

// --- Horizontal cart / list lines -----------------------------------------------------------------

/**
 * A cart/checkout/order/return/purchase-list line whose quantity the app holds in a parent store. The
 * wrapper mirrors that: quantity lives in local state, the card reports changes through
 * `onChangeQuantity`, and the running total is re-derived — so the stepper is live, exactly like the app.
 * `useDefaultQuantity` chooses which prop carries the live value (the app's cart lines read
 * `product.quantity`; its order/return/purchase-list lines drive it via `defaultQuantity`).
 */
type ControlledLineProps = ProductCardProps & {
  /** Drive the live value through `defaultQuantity` (order/return/purchase-list) rather than `product.quantity` (cart). */
  useDefaultQuantity?: boolean;
  /** Optional spy for the reported quantity. */
  onQuantityChange?: (quantity: string) => void;
};

function ControlledLine({
  product,
  useDefaultQuantity = false,
  onQuantityChange,
  ...rest
}: ControlledLineProps) {
  const [quantity, setQuantity] = useState(product.quantity ?? '1');
  return (
    <ProductCard
      {...rest}
      cardDisplay='horizontal'
      product={{ ...product, quantity }}
      defaultQuantity={useDefaultQuantity ? quantity : undefined}
      onChangeQuantity={(next) => {
        const value = next.quantity ?? quantity;
        setQuantity(value);
        onQuantityChange?.(value);
      }}
    />
  );
}

/**
 * **Mini-cart / cart sidebar line** (`components/cart`). A compact horizontal line: price hidden,
 * quantity read-only, no add-to-cart button, with favourite / purchase-list actions and a remove button.
 */
export const MiniCartLine: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: templateCartLines[0],
    onRemoveProduct: fn(),
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  render: (args) => (
    <div className='max-w-md'>
      <ul className='flex list-none flex-col gap-2 p-4'>
        {templateCartLines.map((product) => (
          <li key={product.partNo}>
            <ProductCard
              {...args}
              product={product}
              hidePrice
              productQuantityDisabled
              hideCartButton
              showPackaging
              showFavoriteIcon
              showAddToPurchaseListIcon
              favoriteProductsIds={favoriteProductsIds}
              tooltips={listingTooltips}
            />
          </li>
        ))}
      </ul>
    </div>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const removeButtons = canvas.getAllByRole('button', {
      name: 'Ta bort produkt',
    });
    await userEvent.click(removeButtons[0]);
    await expect(args.onRemoveProduct).toHaveBeenCalledWith(
      templateCartLines[0].partNo,
    );
  },
};

/**
 * **Checkout cart line** (`checkout-cart-product`). The richest cart line: an editable (debounced)
 * quantity that re-computes the total live, `productArea='cart'`, a resolved campaign ribbon, favourite
 * / purchase-list actions and a remove button. `debounceQuantityVal={0}` is the app's escape hatch — it
 * uses the immediate field and runs its own debounce.
 */
export const CheckoutCartLine: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: templateCheckoutCampaignLine,
    onRemoveProduct: fn(),
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  render: (args) => (
    <div className='max-w-container-content-text p-4'>
      <ControlledLine
        {...args}
        product={templateCheckoutCampaignLine}
        showPackaging
        productArea='cart'
        debounceQuantityVal={0}
        hideCartButton
        showFavoriteIcon
        showAddToPurchaseListIcon
        favoriteProductsIds={favoriteProductsIds}
        tooltips={listingTooltips}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Norrlands Guld: 11,90 × 24 × 2 = 571,20 on mount.
    await expect(canvas.getByText(/571,20/)).toBeInTheDocument();

    // Editing the quantity re-derives the total live (× 5 → 1428,00).
    const quantity = canvas.getByRole('spinbutton', { name: 'Quantity' });
    await userEvent.clear(quantity);
    await userEvent.type(quantity, '5');
    await expect(canvas.getByText(/1428,00/)).toBeInTheDocument();
  },
};

/**
 * **Order details line** (`OrderHistory/OrderDetails`). A horizontal line with `allowNegative` (returns /
 * credits can drive the quantity below zero), an editable quantity, and a re-order add-to-cart button;
 * the remove button is hidden and lines sit in a separated list.
 */
export const OrderDetailsLine: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: templateOrderLine,
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  render: (args) => (
    <ul className='mx-auto flex max-w-container-content-text list-none flex-col divide-y divide-border-grey p-4'>
      {[templateOrderLine, templateCartLines[1]].map((product) => (
        <li key={product.partNo} className='py-2'>
          <ControlledLine
            {...args}
            product={product}
            showPackaging
            allowNegative
            hideRemoveButton
            addToCartBtnLabel={ADD_TO_CART}
            showFavoriteIcon
            showAddToPurchaseListIcon
            favoriteProductsIds={favoriteProductsIds}
            tooltips={listingTooltips}
          />
        </li>
      ))}
    </ul>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const cartButtons = canvas.getAllByRole('button', { name: ADD_TO_CART });
    await userEvent.click(cartButtons[0]);
    await expect(args.addToCart).toHaveBeenCalled();
  },
};

/**
 * **Order return flow** (`OrderReturn`). The quantity is capped at the ordered amount via `maxQuantity`,
 * driven through `defaultQuantity`, and both the cart and remove buttons are hidden — the line just lets
 * the user pick how many to return.
 */
export const OrderReturnList: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: templateOrderLine,
    onFavoriteIconClick: fn(),
  },
  render: (args) => (
    <ul className='mx-auto flex max-w-container-content-text list-none flex-col gap-2 p-4'>
      {[templateOrderLine].map((product) => (
        <li key={product.partNo}>
          <ControlledLine
            {...args}
            product={{ ...product, quantity: '1' }}
            useDefaultQuantity
            maxQuantity={Number(product.quantity)}
            showPackaging
            hideCartButton
            hideRemoveButton
            showFavoriteIcon
            favoriteProductsIds={favoriteProductsIds}
            tooltips={listingTooltips}
          />
        </li>
      ))}
    </ul>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const quantity = canvas.getByRole('spinbutton', { name: 'Quantity' });

    // Ordered quantity is 3 → typing past it is rejected, the field stays within the cap.
    await expect(quantity).toHaveValue(1);
    await userEvent.type(quantity, '9'); // would make "19" → 19 > 3, rejected
    await expect(quantity).toHaveValue(1);
  },
};

/**
 * **Purchase-list details** (`ListPurchaseListForUser`). A horizontal line with `productArea='purchase-list'`,
 * an editable quantity seeded from the saved amount (`defaultQuantity`), a re-order add-to-cart button
 * and a remove button. The app makes these rows drag-to-reorder; the card itself is unchanged.
 */
export const PurchaseListLine: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: templateCartLines[2],
    onRemoveProduct: fn(),
  },
  render: (args) => (
    <ul className='mx-auto flex max-w-container-content-text list-none flex-col gap-2 p-4'>
      {[templateCartLines[2], templateCartLines[1]].map((product) => (
        <li key={product.partNo} className='rounded-lg bg-surface-secondary'>
          <ControlledLine
            {...args}
            product={product}
            useDefaultQuantity
            showPackaging
            productArea='purchase-list'
            addToCartBtnLabel={ADD_TO_CART}
            tooltips={listingTooltips}
          />
        </li>
      ))}
    </ul>
  ),
};

/**
 * **Favourites list** (`FavoriteList`). A horizontal line with the packaging shown, a re-order add-to-cart
 * button, an add-to-purchase-list action and a remove button, grouped by product category in the app.
 */
export const FavoritesList: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: templateCartLines[0],
    onRemoveProduct: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  render: (args) => (
    <ul className='mx-auto flex max-w-container-content-text list-none flex-col divide-y divide-border-grey p-4'>
      {[templateCartLines[0], templateCartLines[2]].map((product) => (
        <li key={product.partNo} className='py-2'>
          <ProductCard
            {...args}
            product={product}
            showPackaging
            addToCartBtnLabel={ADD_TO_CART}
            showAddToPurchaseListIcon
            tooltips={listingTooltips}
          />
        </li>
      ))}
    </ul>
  ),
};

/**
 * **Returnable-container webform** (`WebFormCFor`). The one screen that passes the intrinsic `'a'` tag as
 * `linkComponent` (no router link) and hides the cart, remove and quantity controls — a read-only list of
 * the returnable packaging in the cart.
 */
export const ReturnableContainerForm: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: templateCartLines[0],
  },
  render: (args) => (
    <ul className='mx-auto flex max-w-container-content-text list-none flex-col gap-2 p-4'>
      {templateCartLines.slice(0, 2).map((product) => (
        <li key={product.partNo}>
          <ProductCard
            {...args}
            product={product}
            linkComponent='a'
            showPackaging
            hideCartButton
            hideRemoveButton
            productQuantityDisabled
          />
        </li>
      ))}
    </ul>
  ),
};

// --- Loading skeletons ----------------------------------------------------------------------------

/**
 * **Listing grid — loading** (`GhostProductList` / the inline skeletons every listing screen renders
 * while products load). Vertical skeleton cards with the app's placeholder product shape.
 */
export const CategoryGridLoading: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyProductNoVariants,
    loading: true,
  },
  render: (args) => (
    <ul className='grid list-none grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {[0, 1, 2, 3].map((index) => (
        <li key={index}>
          <ProductCard
            {...args}
            product={{ ...dummyProductNoVariants, partNo: `skeleton-${index}` }}
          />
        </li>
      ))}
    </ul>
  ),
};

/**
 * **Cart list — loading** (`cart-products` / `checkout-cart` skeleton rows). Horizontal skeleton lines,
 * as the cart shows while fetching or mutating.
 */
export const CartLineLoading: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: dummyProductNoVariants,
    loading: true,
    hideCartButton: true,
  },
  render: (args) => (
    <div className='max-w-container-content-text p-4'>
      <ul className='flex list-none flex-col gap-2'>
        {[0, 1, 2].map((index) => (
          <li key={index}>
            <ProductCard
              {...args}
              product={{
                ...dummyProductNoVariants,
                partNo: `skeleton-${index}`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  ),
};
