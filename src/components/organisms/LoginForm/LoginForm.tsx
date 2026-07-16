import { useId, type ChangeEvent, type FormEvent, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Button } from '../../molecules/Button'
import { FormGroup } from '../../molecules/FormGroup'
import { InputText } from '../../molecules/InputText'

/** A secondary navigational link rendered under the form (e.g. "Forgot password?"). */
export interface LoginFormLink {
  /** Visible link text (consumer-supplied, already localised). */
  name: string
  /** Destination URL. */
  href: string
  /** Optional click handler (e.g. an SPA navigation side-effect). */
  onClick?: () => void
}

/**
 * Overridable UI strings the component renders itself (not the consumer-supplied field labels,
 * title, link text or error copy). Defaults are English so the library carries no baked-in locale;
 * a consumer localises by passing `labels`. See the i18n convention in docs/DEVELOPMENT.md.
 */
export interface LoginFormLabels {
  /** Visually-hidden `role="status"` text announced while the form is submitting. @default 'Signing in…' */
  loadingStatus?: string
}

const defaultLoginFormLabels: Required<LoginFormLabels> = {
  loadingStatus: 'Signing in…',
}

export interface LoginFormProps {
  /** Brand mark / logo shown above the title; any node (e.g. the `Logotype` molecule). Omit to hide it. */
  logo?: ReactNode
  /** Form title (the form's main heading). */
  title: string
  /**
   * Heading level for the title in the document outline. The visual size is fixed by the design
   * (matches the legacy `.h3` scale), so this only sets the `h1`–`h5` tag. @default 1
   */
  headingLevel?: HeadingOrder
  /** Optional intro paragraph under the title. */
  description?: string
  /** Label for the email/username field — its accessible name via `<label htmlFor>`. */
  usernameLabel: string
  /** Controlled value of the email/username field. */
  username?: string
  /** Email/username field change handler. */
  onUsernameChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** Field-level error for the email/username field; sets `aria-invalid` and a linked `role="alert"` (3.3.1). */
  usernameError?: string
  /** Label for the password field — its accessible name via `<label htmlFor>`. */
  passwordLabel: string
  /** Controlled value of the password field. */
  password?: string
  /** Password field change handler. */
  onPasswordChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** Field-level error for the password field; sets `aria-invalid` and a linked `role="alert"` (3.3.1). */
  passwordError?: string
  /** Label for the primary submit button; omit to render no submit button. */
  primarySubmitLabel?: string
  /** Label for the optional secondary button (e.g. "Register instead"); omit to hide it. */
  secondarySubmitLabel?: string
  /** Handler for the secondary button. */
  onSecondaryAction?: () => void
  /** "Forgot password?" link; omit to hide it. */
  forgotPassword?: LoginFormLink
  /** Secondary offer/registration link; omit to hide it. */
  offerLink?: LoginFormLink
  /** Form-level error content (string or rich node); announced via a centred `role="alert"` region (3.3.1). */
  errorMessage?: ReactNode
  /** Disable the fields + submit button and mark the form busy while submitting. @default false */
  loading?: boolean
  /** Submit handler; the component calls `preventDefault()` first so credentials never hit the URL. */
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  /**
   * Component used to render the under-form links. Defaults to a semantic `<a>` ({@link DefaultLink});
   * pass a client-side router link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Overridable UI strings the component renders itself (default English). */
  labels?: LoginFormLabels
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<form>`. */
  ref?: Ref<HTMLFormElement>
}

const linkClassName =
  'text-body text-text-blue underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'

/**
 * Login form (organism): a titled card with an email + password field, an optional submit button,
 * a form-level error region and "forgot password" / offer links, over an optional loading state.
 * Composes the {@link FormGroup}, {@link InputText} and {@link Button} molecules.
 *
 * Accessibility (generated fresh, not ported): a real `<form>` whose submit is intercepted with
 * `preventDefault()` so credentials never land in a URL. Each field is named by its `FormGroup`
 * `<label htmlFor>` (1.3.1 / 3.3.2), with field errors wired via `aria-invalid` + `aria-describedby`
 * to a `role="alert"` message (3.3.1); the form-level error is its own centred `role="alert"`.
 * Accessible authentication (3.3.8): the fields carry `autocomplete="username"` /
 * `"current-password"` so password managers can fill them, and neither blocks paste. The legacy
 * orange links (fail 4.5:1 on white) are replaced by accessible blue, underlined links (1.4.1 /
 * 1.4.3). While `loading` the fields and buttons are disabled, the form sets `aria-busy`, the submit
 * button exposes `aria-busy` + a spinner, and a visually-hidden `role="status"` announces the
 * submission (4.1.3). The consumer supplies the title, field labels, submit labels, link text and
 * error copy (already localised); only `labels` (the loading status) is localised through this
 * component.
 */
function LoginForm({
  logo,
  title,
  headingLevel = 1,
  description,
  usernameLabel,
  username,
  onUsernameChange,
  usernameError,
  passwordLabel,
  password,
  onPasswordChange,
  passwordError,
  primarySubmitLabel,
  secondarySubmitLabel,
  onSecondaryAction,
  forgotPassword,
  offerLink,
  errorMessage,
  loading = false,
  onSubmit,
  linkComponent,
  labels,
  className,
  ref,
}: LoginFormProps) {
  const t = { ...defaultLoginFormLabels, ...labels }
  const Link = linkComponent ?? DefaultLink
  const usernameId = useId()
  const passwordId = useId()

  const links = [forgotPassword, offerLink].filter((link): link is LoginFormLink => Boolean(link))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
  }

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      aria-busy={loading || undefined}
      className={cn('w-full max-w-content-text rounded-lg bg-white px-4 pt-4 pb-8 md:p-12', className)}
    >
      {logo && <div className="mb-4">{logo}</div>}

      <Heading order={headingLevel} className="mb-4 text-h-m md:text-h-m-lg">
        {title}
      </Heading>
      {description && <p className="mb-8">{description}</p>}

      {/* Fields stack with legacy's always-reserved error slot (reserveErrorSpace) so the layout never
          shifts when a validation message appears; the inter-field gap only opens at `md`, matching the
          legacy `fieldsContainer` (gap 0 mobile, 1rem desktop). */}
      <div className="md:space-y-4">
        <FormGroup
          label={usernameLabel}
          formElementId={usernameId}
          errorText={usernameError}
          reserveErrorSpace
        >
          <InputText
            id={usernameId}
            name="username"
            type="email"
            value={username}
            onChange={onUsernameChange}
            autoComplete="username"
            required
            disabled={loading}
            fullWidth
          />
        </FormGroup>
        <FormGroup
          label={passwordLabel}
          formElementId={passwordId}
          errorText={passwordError}
          reserveErrorSpace
        >
          <InputText
            id={passwordId}
            name="password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            autoComplete="current-password"
            required
            disabled={loading}
            fullWidth
          />
        </FormGroup>
      </div>

      {errorMessage && (
        <p role="alert" className="mx-auto mt-2 mb-0 max-w-100 text-center text-body text-text-critical">
          {errorMessage}
        </p>
      )}

      {(primarySubmitLabel || secondarySubmitLabel) && (
        <div className="mt-6 flex flex-col items-center gap-4">
          {primarySubmitLabel && (
            <Button type="submit" surface="primary" size="small" fullWidth loading={loading}>
              {primarySubmitLabel}
            </Button>
          )}
          {secondarySubmitLabel && (
            <Button
              type="button"
              surface="secondary"
              size="small"
              fullWidth
              disabled={loading}
              onClick={onSecondaryAction}
            >
              {secondarySubmitLabel}
            </Button>
          )}
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          {links.map((link) => (
            <Link key={`${link.href}-${link.name}`} href={link.href} onClick={link.onClick} className={linkClassName}>
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {loading && (
        <p role="status" className="sr-only">
          {t.loadingStatus}
        </p>
      )}
    </form>
  )
}

export { LoginForm }
