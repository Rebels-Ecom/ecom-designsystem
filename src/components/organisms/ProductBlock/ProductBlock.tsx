import type { ReactNode, Ref } from 'react'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { FlexContainer } from '../../atoms/FlexContainer'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { MaxWidth } from '../../atoms/MaxWidth'
import { Text } from '../../atoms/Text'
import { useBreakpoint } from '../../atoms/Breakpoints'
import { ProductCard, type ProductCardProps } from '../ProductCard'

export interface ProductBlockProps {
  /** Small eyebrow label above the title (e.g. a category — "Rom"). */
  headingTag?: string
  /** Block title. */
  title?: string
  /**
   * Heading level for the title — set it so the block fits the surrounding document outline. Its
   * visual size is fixed (decoupled from the level), so raising/lowering the level for the outline
   * doesn't change the design. @default 2
   */
  headingLevel?: HeadingOrder
  /** Rich-text introduction rendered under the title (consumer-supplied markup). */
  richText?: ReactNode
  /**
   * The product cards for this block. Each is a full {@link ProductCard} config; the block forces
   * `border` and `hideRemoveButton` on every one (a display block, never an editable cart list).
   */
  products?: ProductCardProps[]
  /** Extra classes for the block's root element. */
  className?: string
  /** Forwarded to the root `<section>`. */
  ref?: Ref<HTMLElement>
}

/**
 * Product block (organism) — a titled marketing section: an eyebrow label, a title, a rich-text
 * introduction and a stacked list of {@link ProductCard}s (horizontal display cards). Composes the
 * {@link ContentWrapper} / {@link MaxWidth} / {@link FlexContainer} layout atoms with {@link Text},
 * {@link Heading} and {@link ProductCard}.
 *
 * Accessibility: when a `title` is given the block is a labelled `<section>` landmark
 * (`aria-label`, 1.3.1) so assistive tech can jump to it and announce it; without a title it stays a
 * plain (non-landmark) `<section>` to avoid cluttering the landmark map. The title is a real
 * {@link Heading} at a caller-controlled level, keeping the page outline monotonic independently of its
 * fixed visual size. Each card owns its own article semantics and controls.
 */
function ProductBlock({
  headingTag,
  title,
  headingLevel = 2,
  richText,
  products,
  className,
  ref,
}: ProductBlockProps) {
  const { isMobile } = useBreakpoint()

  return (
    <section ref={ref} aria-label={title || undefined} className={className}>
      <ContentWrapper>
        <FlexContainer flexDirection="column" gap={1}>
          <MaxWidth contentMaxWidth="text" noMargin={!isMobile} noPadding={!isMobile}>
            {headingTag && (
              <Text upperCase className="text-text-blue">
                {headingTag}
              </Text>
            )}
            {title && (
              <Heading
                order={headingLevel}
                margin={[0.5, 0, 1.5]}
                className="text-h-ms text-text-blue md:text-h-ms"
              >
                {title}
              </Heading>
            )}
            {richText}
          </MaxWidth>
          {products?.map((item, index) => (
            <ProductCard
              key={`${item.product.partNo}-${index}`}
              {...item}
              hideRemoveButton
              border
            />
          ))}
        </FlexContainer>
      </ContentWrapper>
    </section>
  )
}

export { ProductBlock }
