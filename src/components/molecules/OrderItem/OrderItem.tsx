import type { ReactNode, Ref } from 'react';
import { cn } from '../../../lib/cn';
import { DefaultLink, type LinkComponentType } from '../../../lib/link';
import { Button } from '../Button';
import { UiLink } from '../UiLink';
import { Icon, type IconName } from '../../atoms/Icon';

export type OrderItemStatusIcon = 'success' | 'warning' | 'error';

export interface OrderItemLabels {
  /** Accessible name for the "go to order" link. @default (n) => n ? `Go to order ${n}` : 'View order details' */
  goToOrder: (orderNumber?: string) => string;
}

export const defaultOrderItemLabels: OrderItemLabels = {
  goToOrder: (orderNumber) =>
    orderNumber ? `Go to order ${orderNumber}` : 'View order details',
};

export interface OrderItemProps {
  /** Order number shown after `orderNumberLabel`. */
  orderNumber?: string;
  /** Label preceding `orderNumber`, e.g. "Order no.". */
  orderNumberLabel?: string;
  /** Free-text status shown as an uppercase chip. */
  orderStatus?: string;
  /** Optional status glyph rendered inside the chip (decorative; the status text carries meaning). */
  statusIcon?: OrderItemStatusIcon;
  /** Delivery date shown after `deliveryDateLabel`. */
  deliveryDate?: string;
  /** Label preceding `deliveryDate`. */
  deliveryDateLabel?: string;
  /** Order date shown after `orderDateLabel` (inline mode). */
  orderDate?: string;
  /** Label preceding `orderDate`. */
  orderDateLabel?: string;
  /** Secondary reference number. */
  customOrderNumber?: string;
  /** Label preceding `customOrderNumber`. */
  customOrderNumberLabel?: string;
  /** When set (and not `readOnly`), the card links to this URL via a trailing chevron. */
  linkUrl?: string;
  /** Component used to render the link; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType;
  /** Draw a rounded border around the card. @default false */
  border?: boolean;
  /** Download link label (rendered alongside the delivery date in link mode). */
  downloadLabel?: string;
  /** Download link URL. */
  downloadUrl?: string;
  /** Inline action button label (inline mode; requires `onClick`, not `readOnly`). */
  btnLabel?: string;
  /** Click handler for the order-number trigger / inline action button. */
  onClick?: () => void;
  /** Render as static, non-interactive content (no link, no buttons). @default false */
  readOnly?: boolean;
  /** Order details rendered in the card body. */
  children?: ReactNode;
  /** Overridable link name (English default) for localisation. */
  labels?: Partial<OrderItemLabels>;
  /** Extra classes, merged onto the root `<article>` via `cn()`. */
  className?: string;
  /** Forwarded to the root `<article>`. */
  ref?: Ref<HTMLElement>;
}

const statusIconName: Record<OrderItemStatusIcon, IconName> = {
  success: 'icon-check',
  warning: 'icon-alert-circle',
  error: 'icon-alert-triangle',
};

/** Uppercase status chip; the visible text carries the meaning, the optional icon is decorative. */
function StatusChip({
  status,
  icon,
}: {
  status: string;
  icon?: OrderItemStatusIcon;
}) {
  return (
    <span
      className='inline-block bg-tag-grey px-2 font-secondary text-body-s font-bold uppercase leading-7 text-text-default'
      style={{ letterSpacing: '0.125rem' }}
    >
      {status}
      {icon && <Icon icon={statusIconName[icon]} className='ml-2 text-base' />}
    </span>
  );
}

/**
 * A single order/list summary row (molecule). Two shapes: a **link** card (when `linkUrl` is set and
 * not `readOnly`) whose trailing chevron navigates, and an **inline** card whose order number/action
 * are buttons. Composes `Button`, `UiLink` and `Icon` around consumer-supplied `children`.
 *
 * Accessibility: rendered as an `<article>`. In link mode a single real link (the decorative
 * chevron is `aria-hidden`, so the link carries an action `aria-label`) navigates — consolidating the
 * legacy redundant double-link and fixing its "Go to order undefined" name; the download link is a
 * separate sibling (no nested anchors). In inline mode the clickable order number and action are real
 * `<button>`s (keyboard-operable, focus ring) rather than a click-handler on an `<h4>`. The status is
 * a text chip (never colour-only, 1.4.1); its optional icon is decorative. The link name defaults to
 * English and is overridable via `labels`; all other copy is consumer-supplied.
 */
function OrderItem({
  orderNumber,
  orderNumberLabel,
  orderStatus,
  statusIcon,
  deliveryDate,
  deliveryDateLabel,
  orderDate,
  orderDateLabel,
  customOrderNumber,
  customOrderNumberLabel,
  linkUrl,
  linkComponent,
  border,
  downloadLabel,
  downloadUrl,
  btnLabel,
  onClick,
  readOnly,
  children,
  labels,
  className,
  ref,
}: OrderItemProps) {
  const t = { ...defaultOrderItemLabels, ...labels };
  const Link = linkComponent ?? DefaultLink;
  const isLinkMode = Boolean(linkUrl) && !readOnly;

  const rootClass = cn(
    'relative flex flex-col gap-1 py-4',
    border
      ? 'rounded-lg border border-border-grey p-4 [&:not(:last-of-type)]:mb-2'
      : '[&:not(:only-of-type):not(:last-of-type)]:border-b [&:not(:only-of-type):not(:last-of-type)]:border-border-grey',
    className,
  );

  if (isLinkMode) {
    return (
      <article ref={ref} className={rootClass}>
        <div className='flex flex-col-reverse justify-between gap-2 md:flex-row md:gap-0'>
          {orderNumber && orderNumberLabel && (
            <h4 className='m-0 text-h-s text-text-blue'>{`${orderNumberLabel} ${orderNumber}`}</h4>
          )}
          <div className='flex items-center justify-between gap-2 md:justify-start'>
            {orderStatus && (
              <StatusChip status={orderStatus} icon={statusIcon} />
            )}
            <Link
              href={linkUrl}
              aria-label={t.goToOrder(orderNumber)}
              className='inline-flex text-text-blue hover:text-action-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'
            >
              <Icon icon='icon-chevrons-right' size='large' />
            </Link>
          </div>
        </div>

        {customOrderNumber && customOrderNumberLabel && (
          <p className='m-0 text-body text-text-default'>
            {customOrderNumberLabel}{' '}
            <span className='lowercase'>{customOrderNumber}</span>
          </p>
        )}

        {(deliveryDate || (downloadLabel && downloadUrl)) && (
          <div className='flex justify-between pr-9'>
            {deliveryDate && deliveryDateLabel && (
              <p className='m-0 text-body text-text-default'>{`${deliveryDateLabel} ${deliveryDate}`}</p>
            )}
            {downloadLabel && downloadUrl && (
              <UiLink
                href={downloadUrl}
                download
                isExternal
                onSurface='transparent'
              >
                {downloadLabel}
              </UiLink>
            )}
          </div>
        )}

        {children && <div>{children}</div>}
      </article>
    );
  }

  return (
    <article ref={ref} className={rootClass}>
      <div className='flex flex-col-reverse justify-between gap-2 md:flex-row md:gap-0'>
        {orderNumber && orderNumberLabel && onClick && !readOnly && (
          <Button
            surface='link'
            size='xx-small'
            onClick={onClick}
            className='justify-start px-0 text-h-s font-bold'
          >
            {`${orderNumberLabel} ${orderNumber}`}
          </Button>
        )}
        {orderNumber && orderNumberLabel && readOnly && (
          <h4 className='m-0 text-h-s text-text-blue'>{`${orderNumberLabel} ${orderNumber}`}</h4>
        )}
        <div className='hidden items-center justify-between gap-2 md:flex md:justify-start'>
          {orderStatus && <StatusChip status={orderStatus} icon={statusIcon} />}
          {btnLabel && onClick && !readOnly && (
            <Button surface='link' size='xx-small' onClick={onClick}>
              {btnLabel}
            </Button>
          )}
        </div>
      </div>

      <div className='flex flex-col justify-start'>
        {orderDate && orderDateLabel && (
          <p className='m-0 text-body text-text-default'>{`${orderDateLabel} ${orderDate}`}</p>
        )}
        {deliveryDate && deliveryDateLabel && (
          <p className='m-0 text-body text-text-default'>{`${deliveryDateLabel} ${deliveryDate}`}</p>
        )}
      </div>

      {children && <div className='mt-4'>{children}</div>}
    </article>
  );
}

export { OrderItem };
