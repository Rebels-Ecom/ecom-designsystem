import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Picture, type PictureProps } from '../../atoms/Picture'
import { Tag, type TagProps } from '../../atoms/Tag'
import { LinkButton, type LinkButtonProps } from '../LinkButton'

export type TeaserImagePosition = 'left' | 'right'
export type TeaserTagPosition = 'left' | 'right'

export interface TeaserProps {
  /** Headline — rendered as the teaser's semantic heading. */
  heading: string
  /**
   * Heading level for the document outline; the visual size is fixed by the design, so this only
   * sets the `h1`–`h5` tag. @default 2
   */
  headingLevel?: HeadingOrder
  /** Short intro line shown under the heading. */
  preamble?: string
  /**
   * Optional rich body content, rendered between the preamble and the CTA — pass a `RichText`
   * element or any markup. Its accessibility (heading order, link text) is the consumer's.
   */
  richText?: ReactNode
  /** Teaser image (see {@link Picture}); supply a meaningful `alt` unless decorative. */
  image: PictureProps
  /** Which side the image sits on from `lg` up (stacked below). @default 'left' */
  imagePosition?: TeaserImagePosition
  /** Render the image as a circle. @default false */
  imageRound?: boolean
  /** Optional label chip overlaid on the image (see {@link Tag}). */
  tag?: TagProps
  /** Which edge the tag pins to from `lg` up. @default 'right' */
  tagPosition?: TeaserTagPosition
  /** Call-to-action link (see {@link LinkButton}); its label must describe the destination (2.4.4). */
  linkButton: LinkButtonProps
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Promotional teaser (molecule): an image with an optional overlay {@link Tag} beside a heading,
 * preamble, optional rich body and a {@link LinkButton} call-to-action. Composes the {@link Picture}
 * and {@link Tag} atoms and the {@link LinkButton} molecule.
 *
 * Accessibility (generated fresh, not ported): a presentational container — structure comes from the
 * real heading (`headingLevel`, default `h2`) and the CTA, a real focusable `<a>` whose visible label
 * is its accessible name (2.4.4). The image carries its own `alt` (1.1.1, via `Picture`); the tag is a
 * decorative label chip. No colour-only cues (1.4.1): the preamble uses an AA-passing decorative token
 * and the CTA reads as a filled button.
 */
function Teaser({
  heading,
  headingLevel = 2,
  preamble,
  richText,
  image,
  imagePosition = 'left',
  imageRound = false,
  tag,
  tagPosition = 'right',
  linkButton,
  className,
  ref,
}: TeaserProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative mx-auto mt-8 flex w-full flex-col items-center justify-center p-4',
        imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse',
        className,
      )}
    >
      <div
        className={cn(
          'relative flex w-full lg:w-1/2',
          imageRound ? 'mx-auto aspect-square max-w-120' : 'aspect-video',
        )}
      >
        <Picture
          {...image}
          classNamePicture={cn('absolute inset-0', image.classNamePicture)}
          classNameImg={cn(
            'h-full w-full object-cover',
            imageRound && 'rounded-full',
            image.classNameImg,
          )}
        />
        {tag && (
          <Tag
            {...tag}
            className={cn(
              'absolute z-1',
              imageRound ? 'top-9' : '-top-9',
              tagPosition === 'left' ? 'lg:left-8' : 'lg:right-8',
              tag.className,
            )}
          />
        )}
      </div>

      <div
        className={cn(
          'flex w-full flex-col items-start gap-4 text-start lg:w-1/2',
          imagePosition === 'left' ? 'lg:pl-36' : 'lg:pr-36',
        )}
      >
        <Heading order={headingLevel} noMargin className="mt-12 font-secondary font-bold">
          {heading}
        </Heading>
        {preamble && <p className="m-0 text-text-decorative-purple">{preamble}</p>}
        {richText && <div className="w-full text-text-decorative-grey">{richText}</div>}
        <LinkButton
          {...linkButton}
          surface={linkButton.surface ?? 'primary'}
          className={cn('my-2 w-full md:w-auto', linkButton.className)}
        />
      </div>
    </div>
  )
}

export { Teaser }
