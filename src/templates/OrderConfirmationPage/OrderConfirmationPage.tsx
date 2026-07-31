import type { Ref } from 'react'
import beerGlass from '../../assets/product-images/beer-glass.jpg'
import { cn } from '../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../lib/link'
import { Heading } from '../../components/atoms/Heading'
import { FlexContainer } from '../../components/atoms/FlexContainer'
import { Button } from '../../components/molecules/Button'
import { LinkButton } from '../../components/molecules/LinkButton'
import { MessageBanner } from '../../components/molecules/MessageBanner'
import { OrderConfirmationDetails } from '../../components/molecules/OrderConfirmationDetails'
import { OrderConfirmationPage as OrderConfirmationPageShell } from '../../components/organisms/OrderConfirmationPage'
import { OrderConfirmation } from '../../components/organisms/OrderConfirmation'
import { CartProductList } from '../../components/organisms/CartProductList'
import { ProductCardMini } from '../../components/organisms/ProductCardMini'
import { formatKr, formatPrice, toProductCardProduct, type CartLine, type CartTotals } from '../_shared/cartModel'

export interface OrderConfirmationPageProps {
  /** The placed order's number. */
  orderNumber: string
  /** The chosen delivery date (already formatted). */
  deliveryDate: string
  /** The frozen order totals (Pris / Pant / Moms / total). */
  totals: CartTotals
  /** The ordered lines. */
  lines: CartLine[]
  /** When set, a status banner confirms the receipt download (observability for the demo). */
  downloadMessage?: string
  /** Download the receipt (a file download in the app). */
  onDownloadReceipt: () => void
  linkComponent?: LinkComponentType
  className?: string
  ref?: Ref<HTMLDivElement>
}

/**
 * **OrderConfirmationPage** template (Storybook-only) — the post-order receipt, composing the DS shells
 * ({@link OrderConfirmationPageShell OrderConfirmationPage} → {@link OrderConfirmation}) around the
 * confirmation content: an `h1` thank-you, a `role="status"` {@link MessageBanner} with the order number,
 * an {@link OrderConfirmationDetails} summary (order no / delivery date / Pris / Pant / Moms / total), the
 * ordered lines as read-only {@link ProductCardMini}s in a {@link CartProductList}, and the "Ladda ner
 * kvitto" / "Fortsätt handla" actions. Stateless — the story wires it to the checkout's completed state.
 */
function OrderConfirmationPage({
  orderNumber,
  deliveryDate,
  totals,
  lines,
  downloadMessage,
  onDownloadReceipt,
  linkComponent = DefaultLink,
  className,
  ref,
}: OrderConfirmationPageProps) {
  return (
    <OrderConfirmationPageShell ref={ref} className={cn(className)}>
      <OrderConfirmation>
        <Heading order={1} align="center">
          Tack för din beställning!
        </Heading>

        <MessageBanner type="success">
          Din order {orderNumber} är mottagen. En orderbekräftelse har skickats till din e-post.
        </MessageBanner>

        <OrderConfirmationDetails
          label="Orderöversikt"
          withBorder
          detailItems={[
            { label: 'Ordernummer', value: orderNumber },
            { label: 'Leveransdatum', value: deliveryDate },
            { label: 'Pris', value: `${formatPrice(totals.pris)} kr` },
            { label: 'Pant', value: `${formatPrice(totals.pant)} kr` },
            { label: 'Moms', value: `${formatPrice(totals.moms)} kr` },
            { label: 'Totalt', value: formatKr(totals.total), isTotal: true },
          ]}
        />

        <div className="w-full">
          <Heading order={2}>Beställda produkter</Heading>
          <CartProductList>
            {lines.map((line) => (
              <ProductCardMini
                key={line.partNo}
                product={toProductCardProduct(line)}
                headingLevel={3}
                fallbackImageUrl={beerGlass}
              />
            ))}
          </CartProductList>
        </div>

        {downloadMessage && (
          <MessageBanner type="information">{downloadMessage}</MessageBanner>
        )}

        <FlexContainer justifyContent="center" gap={1} wrap stretch>
          <Button type="button" surface="secondary" iconRight="icon-download" onClick={onDownloadReceipt}>
            Ladda ner kvitto
          </Button>
          <LinkButton surface="primary" href="/" isExternal={false} linkComponent={linkComponent}>
            Fortsätt handla
          </LinkButton>
        </FlexContainer>
      </OrderConfirmation>
    </OrderConfirmationPageShell>
  )
}

export { OrderConfirmationPage }
