import { useMemo, useState, type ReactNode, type Ref } from 'react'
import beerGlass from '../../assets/product-images/beer-glass.jpg'
import { cn } from '../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../lib/link'
import { Heading } from '../../components/atoms/Heading'
import { Text } from '../../components/atoms/Text'
import { Checkbox } from '../../components/atoms/Checkbox'
import { BoxWrapper } from '../../components/atoms/BoxWrapper'
import { FlexContainer } from '../../components/atoms/FlexContainer'
import { GroupWrapper } from '../../components/atoms/GroupWrapper'
import { ExpandableWrapper } from '../../components/atoms/ExpandableWrapper'
import { Button } from '../../components/molecules/Button'
import { InputText } from '../../components/molecules/InputText'
import { ClickableListItem } from '../../components/molecules/ClickableListItem'
import { InfoSummaryBox } from '../../components/molecules/InfoSummaryBox'
import { OrderConfirmationDetails } from '../../components/molecules/OrderConfirmationDetails'
import { UiDatePicker } from '../../components/molecules/UiDatePicker'
import { ProductSearch, type ProductSearchResult } from '../../components/organisms/ProductSearch'
import { ProductCard } from '../../components/organisms/ProductCard'
import {
  formatKr,
  formatPrice,
  productCardLineLabels,
  toProductCardProduct,
  type CartLine,
  type CartTotals,
} from '../_shared/cartModel'

export interface CheckoutPageProps {
  lines: CartLine[]
  totals: CartTotals
  termsAccepted: boolean
  deliveryDate: string
  /** Selectable delivery dates for the picker. */
  deliveryDates: Date[]
  customOrderNo: string
  accessoryPotBalance: number
  recommendations: CartLine[]
  /** Products the "Lägg till produkt" search can find. */
  productCatalog: CartLine[]
  status: 'shopping' | 'submitting' | 'complete'
  onChangeQuantity: (partNo: string, quantity: number) => void
  onRemoveLine: (partNo: string) => void
  onToggleFavorite: (partNo: string) => void
  onAcceptTerms: (accepted: boolean) => void
  onCustomOrderNoChange: (value: string) => void
  onSelectDeliveryDate: (dateIso: string) => void
  onAddProduct: (partNo: string) => void
  onSubmit: () => void
  linkComponent?: LinkComponentType
  className?: string
  ref?: Ref<HTMLDivElement>
}

/** A collapsible sidebar row (`ClickableListItem` header + `ExpandableWrapper`), like the app's rows. */
function CollapsibleRow({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <FlexContainer flexDirection="column" gap={0.5} stretch>
      <ClickableListItem
        onClick={() => setOpen((v) => !v)}
        icon={open ? 'icon-chevron-up' : 'icon-chevron-down'}
        label={label}
        weight="bold"
      />
      <ExpandableWrapper open={open}>
        <BoxWrapper padding={1}>{children}</BoxWrapper>
      </ExpandableWrapper>
    </FlexContainer>
  )
}

/**
 * **CheckoutPage** template (Storybook-only) — mirrors the app's `DesktopCheckout` markup: a
 * `FlexContainer` split 60/40, the left column a light {@link BoxWrapper} with the "Varukorg" + total
 * heading row, the {@link OrderConfirmationDetails} "Översikt" (Pris/Pant/Moms), a `withStrongBorder`
 * confirm-order box (terms {@link Checkbox} + "Lägg beställning" {@link Button}), the product lines
 * (horizontal {@link ProductCard}s) and a "Lägg till produkt" {@link ProductSearch}; the right column has
 * "Dina leveransuppgifter" ({@link ClickableListItem} collapsibles + {@link UiDatePicker}), the
 * "Tillbehörspott" {@link InfoSummaryBox} and a "Du kanske även gillar" list. Stateless — driven by the
 * story harness's `cartReducer`.
 */
function CheckoutPage({
  lines,
  totals,
  termsAccepted,
  deliveryDate,
  deliveryDates,
  customOrderNo,
  accessoryPotBalance,
  recommendations,
  productCatalog,
  status,
  onChangeQuantity,
  onRemoveLine,
  onToggleFavorite,
  onAcceptTerms,
  onCustomOrderNoChange,
  onSelectDeliveryDate,
  onAddProduct,
  onSubmit,
  linkComponent = DefaultLink,
  className,
  ref,
}: CheckoutPageProps) {
  const Link = linkComponent

  // Local state for the self-contained "add product" search widget.
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchResults: ProductSearchResult[] = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    return productCatalog
      .filter((p) => p.productName.toLowerCase().includes(q))
      .map((p) => ({
        partNo: p.partNo,
        productName: p.productName,
        image: { id: `search-${p.partNo}`, src: '', sources: [], alt: '' },
      }))
  }, [searchQuery, productCatalog])

  if (status === 'complete') {
    return (
      <div ref={ref} role="status" className={cn('mx-auto max-w-content-text py-12 text-center', className)}>
        <Heading order={2}>Tack för din beställning!</Heading>
        <Text>Din order är mottagen. En orderbekräftelse har skickats till din e-post.</Text>
        <div className="mt-6">
          <Link href="/">Fortsätt handla</Link>
        </div>
      </div>
    )
  }

  return (
    <FlexContainer gap={3} className={className} ref={ref}>
      {/* LEFT COLUMN (≈60%) */}
      <FlexContainer flexDirection="column" flex="1 1 60%">
        <BoxWrapper backgroundColor="light" withBorder={false} noMargin padding={1} hasMaxWidth={false}>
          <FlexContainer flexDirection="column" stretch gap={2}>
            <FlexContainer justifyContent="space-between" stretch>
              <Heading order={3} margin={[0.5, 0]}>
                Varukorg
              </Heading>
              <Heading order={3} margin={[0.5, 0]}>
                {formatKr(totals.total)}
              </Heading>
            </FlexContainer>

            {/* Översikt */}
            <OrderConfirmationDetails
              label="Översikt"
              withBorder
              padding="sm"
              detailItems={[
                { label: 'Pris', value: `${formatPrice(totals.pris)} kr` },
                { label: 'Pant', value: `${formatPrice(totals.pant)} kr` },
                { label: 'Moms', value: `${formatPrice(totals.moms)} kr` },
              ]}
            />

            {/* Terms + place order */}
            <BoxWrapper backgroundColor="light" withStrongBorder noMargin padding={1} hasMaxWidth={false}>
              <FlexContainer alignItems="center" justifyContent="space-between" stretch gap={0.5} wrap>
                <FlexContainer alignItems="center" gap={0.5}>
                  <Checkbox
                    id="checkout-terms"
                    name="terms"
                    checked={termsAccepted}
                    ariaLabel="Jag godkänner köpevillkoren"
                    onChange={(event) => onAcceptTerms(event.target.checked)}
                  />
                  <Text>
                    Jag godkänner{' '}
                    <Link href="/kopevillkor" className="text-text-blue underline">
                      köpevillkoren
                    </Link>
                  </Text>
                </FlexContainer>
                <Button
                  type="button"
                  surface="primary"
                  disabled={!termsAccepted || lines.length === 0}
                  onClick={onSubmit}
                >
                  Lägg beställning
                </Button>
              </FlexContainer>
            </BoxWrapper>

            {/* Products */}
            <FlexContainer flexDirection="column" stretch>
              <Text>Tillagda produkter: {totals.lineCount}</Text>
              <FlexContainer flexDirection="column" stretch>
                {lines.map((line) => (
                  <ProductCard
                    key={line.partNo}
                    cardDisplay="horizontal"
                    showPackaging
                    product={toProductCardProduct(line)}
                    loading={false}
                    headingLevel={3}
                    hideCartButton
                    debounceQuantityVal={0}
                    productArea="cart"
                    showFavoriteIcon
                    favoriteProductsIds={line.isFavorite ? [line.partNo] : []}
                    onFavoriteIconClick={() => onToggleFavorite(line.partNo)}
                    showAddToPurchaseListIcon
                    onSaveToPurchaseListClick={() => {}}
                    addToCart={() => {}}
                    addToCartBtnLabel="Lägg i varukorg"
                    onChangeQuantity={(p) => onChangeQuantity(line.partNo, Number(p.quantity))}
                    onRemoveProduct={onRemoveLine}
                    linkComponent={linkComponent}
                    fallbackImageUrl={beerGlass}
                    labels={productCardLineLabels}
                    tooltips={{
                      addToFavorites: 'Spara som favorit',
                      removeFromFavorites: 'Ta bort favorit',
                      addToPurchaseList: 'Spara i inköpslista',
                      accessoryPotItem: 'Tillbehör (pott)',
                    }}
                  />
                ))}
              </FlexContainer>
            </FlexContainer>

            {/* Add product */}
            <FlexContainer flexDirection="column" stretch>
              <Heading order={4} margin={[0.5, 0]}>
                Lägg till produkt
              </Heading>
              <ProductSearch
                id="cartProductSearch"
                isOpen={searchOpen}
                setIsOpen={setSearchOpen}
                query={searchQuery}
                setQuery={setSearchQuery}
                results={searchResults}
                onSelectResult={(id) => {
                  onAddProduct(id)
                  setSearchQuery('')
                  setSearchOpen(false)
                }}
                noResultText="Inga produkter hittades"
                placeholder="Sök artikel eller namn"
              />
            </FlexContainer>
          </FlexContainer>
        </BoxWrapper>
      </FlexContainer>

      {/* RIGHT COLUMN (≈40%) */}
      <FlexContainer flexDirection="column" flex="1 1 40%" gap={2}>
        <FlexContainer flexDirection="column" stretch>
          <Heading order={4} margin={[0.5, 0]}>
            Dina leveransuppgifter
          </Heading>

          <CollapsibleRow label="Leveransadress">
            <GroupWrapper direction="column" spacing="sm">
              <Text>SPENDRUPS EHANDEL</Text>
              <Text>Sturegatan 6</Text>
              <Text>113 89 Stockholm</Text>
            </GroupWrapper>
          </CollapsibleRow>

          <CollapsibleRow label="Eget ordernummer">
            <InputText
              id="checkout-order-no"
              ariaLabel="Eget ordernummer"
              value={customOrderNo}
              placeholder="Ert ordernummer"
              fullWidth
              onChange={(event) => onCustomOrderNoChange(event.target.value)}
            />
          </CollapsibleRow>

          <div className="mt-2 w-full">
            <UiDatePicker
              buttonLabel={deliveryDate}
              headerText="Välj leveransdatum"
              selectedDeliveryDate={deliveryDate}
              deliveryDates={deliveryDates}
              onDateSelected={(date) => onSelectDeliveryDate(date.toISOString().slice(0, 10))}
            />
          </div>

          <div className="mt-4">
            <Heading order={4} margin={[0.5, 0]}>
              Tillbehörspott
            </Heading>
            <InfoSummaryBox withBackground>
              <Text>Saldo {formatKr(accessoryPotBalance)}</Text>
            </InfoSummaryBox>
          </div>
        </FlexContainer>

        {recommendations.length > 0 && (
          <section aria-label="Du kanske även gillar">
            <Heading order={4} margin={[0.5, 0]}>
              Du kanske även gillar
            </Heading>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {recommendations.map((rec) => (
                <li key={rec.partNo}>
                  <ProductCard
                    cardDisplay="horizontal"
                    showPackaging
                    product={toProductCardProduct(rec)}
                    loading={false}
                    headingLevel={4}
                    hideRemoveButton
                    showAddToPurchaseListIcon
                    onSaveToPurchaseListClick={() => {}}
                    debounceQuantityVal={0}
                    productArea="recommended"
                    addToCart={() => onAddProduct(rec.partNo)}
                    addToCartBtnLabel="Lägg i varukorg"
                    linkComponent={linkComponent}
                    fallbackImageUrl={beerGlass}
                    labels={productCardLineLabels}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
      </FlexContainer>
    </FlexContainer>
  )
}

export { CheckoutPage }
