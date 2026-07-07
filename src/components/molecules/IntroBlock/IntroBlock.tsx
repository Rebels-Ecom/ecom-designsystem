import type { ReactNode, Ref } from 'react'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { MaxWidth } from '../../atoms/MaxWidth'
import { FlexContainer } from '../../atoms/FlexContainer'

export interface IntroBlockProps {
  /** Page/section title, rendered as the `<h1>`. */
  title?: string
  /** Uppercase lead-in line beneath the title. */
  ingress?: string
  /** Optional rich body content rendered below the ingress. */
  richText?: ReactNode
  /** Extra classes, merged onto the root ContentWrapper. */
  className?: string
  /** Forwarded to the root wrapper element. */
  ref?: Ref<HTMLDivElement>
}

/**
 * A centred intro/hero text block (molecule): an `<h1>` title, an uppercase ingress, and optional rich
 * body copy, constrained to a readable text column. Composes the ContentWrapper / MaxWidth /
 * FlexContainer layout atoms. The title is the page's `<h1>` (1.3.1) — use one IntroBlock per page as the
 * top of the heading outline. Purely presentational; all copy is supplied by the consumer.
 */
function IntroBlock({ title, ingress, richText, className, ref }: IntroBlockProps) {
  return (
    <ContentWrapper ref={ref} padding={[2.5, 1]} className={className}>
      <MaxWidth contentMaxWidth="text">
        <FlexContainer flexDirection="column" gap={1}>
          {title && (
            <h1 className="mb-4 text-center font-primary text-intro-title font-bold text-text-blue md:text-intro-title-lg">
              {title}
            </h1>
          )}
          {ingress && <p className="my-4 text-center font-secondary uppercase">{ingress}</p>}
          {richText}
        </FlexContainer>
      </MaxWidth>
    </ContentWrapper>
  )
}

export { IntroBlock }
