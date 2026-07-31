import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { ConsentAndGates } from './ConsentAndGates'

/**
 * **ConsentAndGates templates** — the first-visit gates wired live. The harness owns the cookie choice
 * and the age answer (the app persists these in storage / `authenticationMachine`) so accepting,
 * declining and confirming all take effect in Storybook. Untagged.
 */

type CookieChoice = null | 'accepted' | 'declined'
type AgeAnswer = null | 'confirmed' | 'denied'

function Harness({
  withAgeGate = true,
  withCookieBar = true,
  withStatus = false,
}: {
  withAgeGate?: boolean
  withCookieBar?: boolean
  withStatus?: boolean
}) {
  const [cookieChoice, setCookieChoice] = useState<CookieChoice>(null)
  const [ageAnswer, setAgeAnswer] = useState<AgeAnswer>(null)
  const [statusOpen, setStatusOpen] = useState(withStatus)

  return (
    <div className="p-4">
      <p>Cookie-val: {cookieChoice ?? 'ej valt'}</p>
      <p>Ålderskontroll: {ageAnswer ?? 'ej besvarad'}</p>
      <ConsentAndGates
        showCookieBar={withCookieBar && cookieChoice === null}
        onAcceptCookies={() => setCookieChoice('accepted')}
        onDeclineCookies={() => setCookieChoice('declined')}
        showAgeGate={withAgeGate && ageAnswer !== 'confirmed'}
        onConfirmAge={() => setAgeAnswer('confirmed')}
        onDenyAge={() => setAgeAnswer('denied')}
        ageDenied={ageAnswer === 'denied'}
        statusMessage={{
          title: 'Ditt konto är pausat',
          body: 'Kontakta kundservice för att återaktivera ditt konto.',
        }}
        statusOpen={statusOpen}
        onDismissStatus={() => setStatusOpen(false)}
      />
    </div>
  )
}

const meta = {
  title: 'Design System/Templates/Flow 0 — Chrome/ConsentAndGates',
  component: ConsentAndGates,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  args: {
    showCookieBar: true,
    onAcceptCookies: () => {},
    onDeclineCookies: () => {},
    showAgeGate: true,
    onConfirmAge: () => {},
    onDenyAge: () => {},
  },
} satisfies Meta<typeof ConsentAndGates>

export default meta
type Story = StoryObj<typeof meta>

/**
 * First visit — the age gate (over the cookie banner). The `play` denies (surfacing the under-age
 * error), then confirms (closing the gate), then declines non-essential cookies (dismissing the banner).
 */
export const FirstVisit: Story = {
  render: () => <Harness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // The age gate is a dialog that must be answered.
    const dialog = canvas.getByRole('dialog', { name: 'Ålderskontroll' })
    await expect(within(dialog).getByText('Är du 18 år eller äldre?')).toBeInTheDocument()

    // Answering "Nej" surfaces the under-age error and keeps the gate open.
    await userEvent.click(within(dialog).getByRole('button', { name: 'Nej' }))
    await expect(canvas.getByText(/minst 18 år för att fortsätta/)).toBeInTheDocument()
    await expect(canvas.getByRole('dialog', { name: 'Ålderskontroll' })).toBeInTheDocument()

    // Confirming closes the gate.
    await userEvent.click(within(dialog).getByRole('button', { name: 'Ja, jag har fyllt 18' }))
    await expect(canvas.queryByRole('dialog', { name: 'Ålderskontroll' })).toBeNull()

    // The cookie banner is now reachable; declining non-essential cookies dismisses it.
    await expect(canvas.getByText('Cookie-val: ej valt')).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Neka icke-nödvändiga' }))
    await expect(canvas.getByText('Cookie-val: declined')).toBeInTheDocument()
    await expect(canvas.queryByRole('button', { name: 'Godkänn alla' })).toBeNull()
  },
}

/**
 * Cookie banner alone (age already confirmed) — accepting all cookies dismisses the banner.
 */
export const CookieConsent: Story = {
  render: () => <Harness withAgeGate={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Godkänn alla' }))
    await expect(canvas.getByText('Cookie-val: accepted')).toBeInTheDocument()
    await expect(canvas.queryByRole('button', { name: 'Godkänn alla' })).toBeNull()
  },
}

/**
 * A dismissable status modal (the app's `UserStatusModalMessage`). The `play` reads the message and
 * dismisses it with `Escape`.
 */
export const StatusModal: Story = {
  render: () => <Harness withAgeGate={false} withCookieBar={false} withStatus />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dialog = canvas.getByRole('dialog', { name: 'Ditt konto är pausat' })
    await expect(within(dialog).getByText(/Kontakta kundservice/)).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await expect(canvas.queryByRole('dialog', { name: 'Ditt konto är pausat' })).toBeNull()
  },
}
