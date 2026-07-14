import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { Icon } from '../../atoms/Icon'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Placeholder } from '../../atoms/Placeholder'
import { Tag, type TagColor } from '../../atoms/Tag'
import { IconButton, type IconButtonTarget } from '../IconButton'

/** Order-status string → tag colour (mirrors the legacy `getOrderStatusTagColor` helper). */
const statusTagColor: Record<string, TagColor> = {
  'status-progress': 'yellow',
  'status-delivered': 'green',
  'status-returned': 'purple',
  'status-cancelled': 'orange',
  'status-invoice': 'blue',
}

function tagColorForStatus(status?: string): TagColor {
  return (status && statusTagColor[status]) || 'grey'
}

export interface LinkListItemLabels {
  /** Accessible name for the download control, built from the item title. @default `Download ${title}` */
  download: (title: string) => string
  /** Accessible name for the remove control, built from the item title. @default `Remove ${title}` */
  remove: (title: string) => string
  /** Accessible status text shown while loading. @default 'Loading' */
  loading: string
}

export const defaultLinkListItemLabels: LinkListItemLabels = {
  download: (title) => `Download ${title}`,
  remove: (title) => `Remove ${title}`,
  loading: 'Loading',
}

export interface LinkListItemProps {
  /** Row title — also the linked text / accessible name of the row link when `linkUrl` is set. */
  title: string
  /** Extra content rendered under the title (counts, meta lines, etc.). */
  children?: ReactNode
  /** First tag (neutral/grey) — e.g. an order date. */
  date1?: string
  /** Second tag — coloured by `status` when set, otherwise grey. */
  date2?: string
  /** Order-status key that colours the `date2` tag (e.g. `status-delivered`). */
  status?: string
  /** Destination for the row; when set, the title becomes a link and a chevron affordance appears. */
  linkUrl?: string
  /** Component used to render the row/download links; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Destination for a download link shown in the tag row. */
  downloadLinkUrl?: string
  /** Anchor target for the row/download links. */
  target?: IconButtonTarget
  /** Fires when the download button is pressed (button variant of the download affordance). */
  onDownloadClick?: () => void
  /** Fires when the row link is activated. */
  onClick?: () => void
  /** When set, a trailing trash button removes the row and fires this. */
  onRemove?: () => void
  /** Show skeleton placeholders instead of content. @default false */
  loading?: boolean
  /** Semantic level for the title heading. @default 4 */
  headingLevel?: HeadingOrder
  /** Overridable control names (English defaults) for localisation. */
  labels?: Partial<LinkListItemLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * A list row linking to a detail page (molecule): optional date/status tags and a download affordance,
 * a title, and free-form child content. Accessibility: the title is a real heading whose text is the
 * row link's accessible name (2.4.4) with the standard focus ring (2.4.7); the trailing chevron is a
 * decorative affordance only (`aria-hidden`), so the row exposes exactly one link rather than the
 * legacy's two duplicate ones. The `status` tag pairs colour with its visible date text (never colour
 * alone, 1.4.1). Download/remove are icon-only controls with title-specific `aria-label`s (4.1.2), and
 * the loading state is announced via a `role="status"` region while the skeletons (decorative) show.
 * Built-in names default to English and are overridable via `labels`; content is consumer-supplied.
 */
function LinkListItem({
  title,
  children,
  date1,
  date2,
  status,
  linkUrl,
  linkComponent,
  downloadLinkUrl,
  target,
  onDownloadClick,
  onClick,
  onRemove,
  loading = false,
  headingLevel = 4,
  labels,
  className,
  ref,
}: LinkListItemProps) {
  const t = { ...defaultLinkListItemLabels, ...labels }
  const Link = linkComponent ?? DefaultLink
  const hasTagRow = Boolean(date1 || date2 || onDownloadClick || downloadLinkUrl)

  return (
    <div ref={ref} className={cn('relative font-primary', className)}>
      {/* Top-align the trailing chevron/remove on mobile so they sit by the title instead of floating
          in the vertical middle of tall multi-line content; restore centering at `lg` (desktop parity). */}
      <div className="flex h-full w-full items-start justify-between gap-2 lg:items-center">
        <div className="flex flex-1 flex-col">
          {loading ? (
            <>
              <span role="status" className="sr-only">
                {t.loading}
              </span>
              <Placeholder type="heading" />
              <Placeholder type="p_short" />
            </>
          ) : (
            <>
              {hasTagRow && (
                <div className="flex items-center gap-3">
                  {date1 && <Tag text={date1} shape="rectangular" color="grey" />}
                  {date2 && <Tag text={date2} shape="rectangular" color={tagColorForStatus(status)} />}
                  {onDownloadClick && (
                    <IconButton
                      type="button"
                      icon="icon-file"
                      label={t.download(title)}
                      onClick={onDownloadClick}
                      size="large"
                      isTransparent
                      noBorder
                      noPadding
                    />
                  )}
                  {downloadLinkUrl && (
                    <IconButton
                      type="link"
                      icon="icon-file"
                      label={t.download(title)}
                      href={downloadLinkUrl}
                      linkComponent={linkComponent}
                      target={target}
                      download
                      size="large"
                      isTransparent
                      noBorder
                      noPadding
                    />
                  )}
                </div>
              )}

              <Heading order={headingLevel} noMargin className="text-h-xs">
                {linkUrl ? (
                  <Link
                    href={linkUrl}
                    target={target}
                    onClick={onClick}
                    className="text-text-default no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
                  >
                    {title}
                  </Link>
                ) : (
                  title
                )}
              </Heading>

              {children && <div>{children}</div>}
            </>
          )}
        </div>

        {onRemove && (
          <IconButton
            type="button"
            icon="icon-trash-2"
            label={t.remove(title)}
            onClick={onRemove}
            isTransparent
            noBorder
            noPadding
          />
        )}

        {linkUrl && <Icon icon="icon-chevrons-right" />}
      </div>
    </div>
  )
}

export { LinkListItem }
