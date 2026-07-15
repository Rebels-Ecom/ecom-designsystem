import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Picture, type PictureProps } from '../../atoms/Picture'
import { Video, type VideoProps } from '../../atoms/Video'
import { LinkButton, type LinkButtonProps } from '../LinkButton'

export type HeroAlignment = 'left' | 'right' | 'center'
export type HeroTheme = 'light' | 'dark'

export interface HeroProps {
  /** Background media (responsive `<picture>`). */
  image: PictureProps
  /** Optional background video, shown instead of `image` when `isVideo` is set. */
  video?: VideoProps
  /** Render `video` instead of `image`. @default false */
  isVideo?: boolean
  /** Optional foreground image (e.g. a brand logo) rendered above the preamble. */
  contentImage?: PictureProps
  /** Small eyebrow/kicker above the heading. */
  topHeading?: string
  /** Main heading text (required). */
  heading: string
  /** Semantic level for the heading (couples outline level + size). @default 1 */
  headingLevel?: HeadingOrder
  /** Supporting body copy below the heading. */
  preamble?: string
  /** Horizontal placement of the content column. @default 'left' */
  alignContent?: HeroAlignment
  /** Text alignment for the heading, independent of the content-block placement. @default `alignContent` */
  headingAlign?: HeroAlignment
  /** Colour scheme for the overlaid text; `dark` = light text, `light` = dark text. @default 'dark' */
  theme?: HeroTheme
  /** Primary call-to-action (rendered as an inline {@link LinkButton}). */
  link?: LinkButtonProps
  /** Secondary call-to-action. */
  secondaryLink?: LinkButtonProps
  /** Image URL swapped in when `image` fails to load. */
  fallbackImageUrl?: string
  /** Extra classes, merged onto the root `<section>` via `cn()`. */
  className?: string
  /** Forwarded to the root `<section>`. */
  ref?: Ref<HTMLElement>
}

const alignmentClasses: Record<HeroAlignment, string> = {
  left: 'items-start',
  right: 'items-start md:ml-auto',
  center: 'items-center text-center md:mx-auto',
}

/**
 * Hero banner (molecule) — full-bleed background media (image or video) with an overlaid content
 * column (eyebrow, heading, preamble, up to two call-to-action links). Composes {@link Picture} /
 * {@link Video}, {@link Heading} and {@link LinkButton} inside a {@link ContentWrapper}.
 *
 * Accessibility: rendered as a `<section>` with the real heading providing the document outline
 * (1.3.1) — `headingLevel` couples the semantic level to its size, so keep one `h1` per page. Text
 * sits over the media with a theme-driven scrim for legibility (1.4.3) — `dark` uses light text,
 * `light` uses dark text. The background image carries `alt` (empty by default → decorative, 1.1.1);
 * a background `video` is muted with a pause control and reduced-motion suppression (2.2.2 / 2.3.3†,
 * from {@link Video}). CTAs are real focusable `<a href>` links (4.1.2) with the standard
 * `focus-visible` ring (2.4.7). The legacy fade-in entrance is dropped as non-essential motion.
 */
function Hero({
  image,
  video,
  isVideo = false,
  contentImage,
  topHeading,
  heading,
  headingLevel = 1,
  preamble,
  alignContent = 'left',
  headingAlign,
  theme = 'dark',
  link,
  secondaryLink,
  fallbackImageUrl,
  className,
  ref,
}: HeroProps) {
  const isDark = theme === 'dark'

  return (
    <section ref={ref} className={cn('relative w-full overflow-hidden', className)}>
      <div className="relative aspect-square w-full md:aspect-16/7">
        {isVideo && video ? (
          <Video
            {...video}
            className="absolute inset-0 size-full [&_video]:absolute [&_video]:inset-0 [&_video]:size-full [&_video]:object-cover"
          />
        ) : (
          <Picture
            {...image}
            fallbackImageUrl={fallbackImageUrl}
            classNamePicture="absolute inset-0 size-full"
            classNameImg="size-full object-cover"
          />
        )}
        {/* Decorative legibility scrim (legacy parity, measured against the baselines): dark ≈ 60% black
            both viewports; light is responsive — a heavy ~75% white wash on mobile (text sits over the
            image) easing to 30% on desktop (text is beside it). */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 z-10',
            isDark ? 'bg-black/65' : 'bg-white/75 md:bg-white/30',
          )}
        />
      </div>

      {/* Content overlay is pointer-transparent so a background `video`'s pause control (underneath)
          stays clickable; only the interactive CTAs re-enable pointer events. */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <ContentWrapper className="flex h-full">
          <div
            className={cn(
              'flex h-full w-full flex-col justify-end pb-4 md:w-1/2 md:justify-center md:pb-0',
              alignmentClasses[alignContent],
            )}
          >
            {(topHeading || heading) && (
              <div>
                {topHeading && (
                  <p className="m-0 mb-2 font-primary font-bold text-text-decorative-orange md:mb-4">
                    {topHeading}
                  </p>
                )}
                {heading && (
                  <Heading
                    order={headingLevel}
                    align={headingAlign ?? alignContent}
                    color={isDark ? 'white' : undefined}
                    noMargin
                    className="text-2xl md:text-h-l-lg"
                  >
                    {heading}
                  </Heading>
                )}
              </div>
            )}

            {contentImage && (
              <div className="mt-4 max-w-xs">
                <Picture {...contentImage} />
              </div>
            )}

            {preamble && (
              <p
                className={cn(
                  'mt-4 mb-0 text-body',
                  isDark ? 'text-text-white' : 'text-text-default',
                )}
              >
                {preamble}
              </p>
            )}

            {(link || secondaryLink) && (
              <div className="pointer-events-auto mt-4 flex flex-col gap-4 md:mt-5 md:flex-row md:flex-wrap">
                {link && <LinkButton {...link} className={cn('w-auto', link.className)} />}
                {secondaryLink && (
                  <LinkButton {...secondaryLink} className={cn('w-auto', secondaryLink.className)} />
                )}
              </div>
            )}
          </div>
        </ContentWrapper>
      </div>
    </section>
  )
}

export { Hero }
