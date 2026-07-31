import type { ReactNode, Ref } from 'react'
import { AgeVerificationForm } from '../../components/molecules/AgeVerificationForm'
import { CookieBar } from '../../components/molecules/CookieBar'
import { Modal } from '../../components/molecules/Modal'
import { Heading } from '../../components/atoms/Heading'
import { Text } from '../../components/atoms/Text'

export interface ConsentAndGatesProps {
  /** Show the first-visit cookie banner. */
  showCookieBar: boolean
  /** Fires when the user accepts all cookies. */
  onAcceptCookies: () => void
  /** Fires when the user declines non-essential cookies (the privacy-preserving choice). */
  onDeclineCookies: () => void

  /** Show the age-verification gate (a non-dismissable dialog). */
  showAgeGate: boolean
  /** Fires when the user confirms they are of age. */
  onConfirmAge: () => void
  /** Fires when the user answers that they are under age. */
  onDenyAge: () => void
  /** Show the "under age" error inside the gate. @default false */
  ageDenied?: boolean

  /** Status message shown in a dismissable modal (e.g. the app's `UserStatusModalMessage`). */
  statusMessage?: { title: string; body: ReactNode }
  /** Whether the status modal is open. */
  statusOpen?: boolean
  /** Fires when the status modal is dismissed. */
  onDismissStatus?: () => void

  /** Forwarded to the root wrapper. */
  ref?: Ref<HTMLDivElement>
}

/**
 * **ConsentAndGates** template (Storybook-only) — the first-visit chrome that gates entry to the site:
 * a {@link CookieBar} consent banner, an {@link AgeVerificationForm} age gate (in a non-dismissable
 * {@link Modal}), and a dismissable status {@link Modal} (the app's `UserStatusModalMessage`). Stateless:
 * which gates are showing, and the age answer, are controlled by the story harness so the flow runs live.
 *
 * Accessibility: the age gate is a focus-trapped `role="dialog"` (`aria-modal`) that cannot be dismissed
 * (no close button, backdrop click disabled) — the user must answer; a denial surfaces an
 * `errorMessage`. The cookie banner defaults to the privacy-preserving action (decline non-essential is
 * a first-class control, not buried).
 */
function ConsentAndGates({
  showCookieBar,
  onAcceptCookies,
  onDeclineCookies,
  showAgeGate,
  onConfirmAge,
  onDenyAge,
  ageDenied = false,
  statusMessage,
  statusOpen = false,
  onDismissStatus = () => {},
  ref,
}: ConsentAndGatesProps) {
  return (
    <div ref={ref}>
      {statusMessage && (
        <Modal open={statusOpen} onClose={onDismissStatus} ariaLabel={statusMessage.title}>
          <Heading order={2} className="mb-2 text-h-s md:text-h-s">
            {statusMessage.title}
          </Heading>
          <Text>{statusMessage.body}</Text>
        </Modal>
      )}

      {/* Age gate — must be answered; not dismissable, no close button, backdrop click disabled. */}
      <Modal
        open={showAgeGate}
        onClose={() => {}}
        ariaLabel="Ålderskontroll"
        dismissable={false}
        hideCloseButton
      >
        <AgeVerificationForm
          title="Är du 18 år eller äldre?"
          description="Du måste vara minst 18 år för att handla alkoholhaltiga drycker."
          errorMessage={ageDenied ? 'Tyvärr — du måste vara minst 18 år för att fortsätta.' : undefined}
          actions={[
            { children: 'Ja, jag har fyllt 18', surface: 'primary', type: 'button', onClick: onConfirmAge },
            { children: 'Nej', surface: 'secondary', type: 'button', onClick: onDenyAge },
          ]}
        />
      </Modal>

      {showCookieBar && (
        <CookieBar
          text="Vi använder cookies för att förbättra din upplevelse och analysera trafiken."
          buttonLabel="Godkänn alla"
          onClick={onAcceptCookies}
          linkComponent={
            <button
              type="button"
              onClick={onDeclineCookies}
              className="font-primary text-text-blue underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
            >
              Neka icke-nödvändiga
            </button>
          }
        />
      )}
    </div>
  )
}

export { ConsentAndGates }
