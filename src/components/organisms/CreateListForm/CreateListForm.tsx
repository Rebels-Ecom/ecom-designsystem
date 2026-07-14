import type { ChangeEvent, FormEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Textarea } from '../../atoms/Textarea'
import { Button } from '../../molecules/Button'
import { FormGroup } from '../../molecules/FormGroup'
import { InputText } from '../../molecules/InputText'
import { LoadingOverlay } from '../../molecules/LoadingOverlay'
import { Logotype } from '../../molecules/Logotype'

export interface CreateListFormProps {
  /** Show the Spendrups wordmark above the title. @default true */
  showLogo?: boolean
  /**
   * Component used to render the "read more" link. Defaults to a semantic `<a>`; pass a client-side
   * router link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Form title. */
  title: string
  /**
   * Heading level for the title in the document outline. The visual size is fixed by the design
   * (matches the legacy `.h3` scale), so this only sets the `h1`–`h5` tag. @default 1
   */
  headingLevel?: HeadingOrder
  /** Optional intro paragraph under the title. */
  description?: string
  /** Label for the name field. */
  nameLabel: string
  /** Controlled value of the name field. */
  name?: string
  /** Label for the comment field. */
  commentLabel: string
  /** Controlled value of the comment field. */
  comment?: string
  /** Submit button label. */
  submitLabel: string
  /** Cancel button label; omit to hide the cancel button. */
  cancelLabel?: string
  /** "Read more" link label; omit to hide the link. */
  offerLinkLabel?: string
  /** Destination for the "read more" link. @default '#' */
  offerLinkHref?: string
  /** Form-level error message; announced via `role="alert"` (3.3.1). */
  errorMessage?: string
  /** Submit handler (called on native form submit). */
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  /** Cancel handler. */
  onCancel: () => void
  /** Name field change handler. */
  onNameChange: (event: ChangeEvent<HTMLInputElement>) => void
  /** Comment field change handler. */
  onCommentChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  /** Show the blocking loading overlay and mark the form busy. @default false */
  loading?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<form>`. */
  ref?: Ref<HTMLFormElement>
}

/**
 * Create-list form (organism): a titled card with a name field, a comment field, submit/cancel
 * actions and an optional "read more" link, over an optional loading overlay. Composes the
 * {@link FormGroup}, {@link InputText}, {@link Button}, {@link LoadingOverlay} and {@link Logotype}
 * molecules and the {@link Textarea} atom.
 *
 * Accessibility (generated fresh, not ported): a real `<form>`; each field is named by its
 * `FormGroup` `<label htmlFor>` (1.3.1 / 3.3.2). The submit button is `type="submit"`; cancel is
 * `type="button"`. The form-level error is a `role="alert"` live region (3.3.1). The legacy orange
 * "read more" link (fails 4.5:1 on white) is replaced by an accessible blue, underlined link (1.4.1 /
 * 1.4.3). While `loading` the form sets `aria-busy` and the overlay's {@link LoadingOverlay} exposes
 * the loading state via its `role="status"` region (4.1.3).
 */
function CreateListForm({
  showLogo = true,
  linkComponent,
  title,
  headingLevel = 1,
  description,
  nameLabel,
  name,
  commentLabel,
  comment,
  submitLabel,
  cancelLabel,
  offerLinkLabel,
  offerLinkHref = '#',
  errorMessage,
  onSubmit,
  onCancel,
  onNameChange,
  onCommentChange,
  loading = false,
  className,
  ref,
}: CreateListFormProps) {
  const Link = linkComponent ?? DefaultLink

  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      aria-busy={loading || undefined}
      className={cn('relative w-full max-w-content-text rounded-lg bg-white p-5 md:p-12', className)}
    >
      {loading && (
        <LoadingOverlay isVisible position="absolute" loaderSize="md" className="rounded-lg" />
      )}
      {showLogo && <Logotype variant="horizontal" className="mb-8" />}
      <Heading order={headingLevel} className="mb-2.5 text-h-m md:text-h-m-lg">
        {title}
      </Heading>
      {description && <p className="mb-8">{description}</p>}

      {/* Inter-field spacing: the FormGroups stack with no gap of their own. Legacy's larger desktop
          padding/heading rhythm opens ~28px between fields at `md`+ (mobile already aligns), so scope the
          space-y to `md` to keep both viewports matching their baselines. */}
      <div className="md:space-y-7">
        <FormGroup label={nameLabel} formElementId="create-list-name">
          <InputText id="create-list-name" value={name} onChange={onNameChange} fullWidth />
        </FormGroup>
        <FormGroup label={commentLabel} formElementId="create-list-comment">
          <Textarea id="create-list-comment" value={comment} onChange={onCommentChange} />
        </FormGroup>
      </div>

      {errorMessage && (
        <p role="alert" className="m-0 text-body text-text-critical">
          {errorMessage}
        </p>
      )}

      <Button type="submit" surface="primary" size="small" fullWidth className="mt-6">
        {submitLabel}
      </Button>
      {cancelLabel && (
        <Button
          type="button"
          surface="secondary"
          size="small"
          fullWidth
          onClick={onCancel}
          className="mt-4"
        >
          {cancelLabel}
        </Button>
      )}
      {offerLinkLabel && (
        <Link
          href={offerLinkHref}
          className="mt-6 inline-block text-body text-text-blue underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        >
          {offerLinkLabel}
        </Link>
      )}
    </form>
  )
}

export { CreateListForm }
