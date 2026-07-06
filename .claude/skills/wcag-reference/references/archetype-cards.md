# Archetype Cards — pre-unioned recipes

A **fast path** for `scaffold-component`: each card already unions the **Universal baseline** with an
archetype's criteria and distils the *Implementation* + *Verify* into what to actually write. Read the
one card matching your component's archetype(s) instead of opening all four principle files. **Union
multiple cards** when a component matches several (a Modal is *Overlay* + *Interactive control*).

This is a digest, not the source of truth: for the full normative text, an unusual criterion, or
anything that looks off, open the principle file (`1.x`→perceivable, `2.x`→operable, `3.x`→understandable,
`4.x`→robust) and the archetype map in `component-checklist.md`. `†` = adopted AAA (strong default, not a
gate).

## Universal baseline (every component — folded into every card below)

- **1.3.1** semantic HTML encodes structure/labels/groups (not styling).
- **1.4.3** text ≥4.5:1 (≥3:1 large/bold) — use vetted semantic text tokens on their surfaces.
- **1.4.4 / 1.4.10 / 1.4.12** rem text sizes, fluid widths, no fixed-height text traps.
- **1.4.11** visible boundaries/state/icons ≥3:1.
- **4.1.2** any interactive/stateful part exposes role + name + state to AT.
- Anything interactive also inherits **2.1.1** (keyboard), **2.4.7** + **2.4.13†** (visible focus).

Canonical focus ring everywhere:
`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary`.

---

## Form field — input / select / textarea / checkbox / radio / file / date

**Criteria:** 1.3.1 · 1.3.5 · 2.4.6 · 3.3.1 · 3.3.2 · 3.2.2 · 2.5.3 · 2.4.7 · 2.4.13† · 1.4.3 · 1.4.11 · 2.5.8 · 4.1.2

**Build**
- Native control (`<input>`/`<select>`/`<textarea>`) so role/keyboard/value are free.
- **Name:** associate an external `<label htmlFor={id}>` OR expose an `ariaLabel` prop. Placeholder is
  never a label (3.3.2). Group related controls in `<fieldset><legend>`.
- **Error:** `aria-invalid={isErroneous || undefined}` + `aria-describedby={errorId}` pointing at a text
  message; style the error but never signal by colour/border alone (3.3.1 / 1.4.1).
- **Purpose:** expose an optional `autoComplete` prop (1.3.5).
- **No context change on input** (3.2.2): `onChange` reports only — never auto-navigate/submit.
- Replace any legacy `outline:none` with the focus ring. Form controls **don't inherit** the page font →
  add `font-primary`. Target ≥24px (2.5.8); small boxes rely on the ≥24px-spacing exception (note it).

**Prove (stories)**
- Canonical `WithLabel` story: `getByLabelText(...)`, type, assert value + `toHaveFocus`.
- `Error` story: assert `aria-invalid="true"` + `toHaveAccessibleDescription(/…/)`.
- `Disabled` story: `toBeDisabled`. All scanned by axe (`label`, `aria-*`).

---

## Static text — Heading, Text, Tag, rich-text

**Criteria:** 1.3.1 · 1.4.3 · 1.4.4 · 1.4.10 · 1.4.12 (+ 1.4.5 no images of text)

**Build**
- Real element: `Heading` emits `h1`–`hN` by level (never fake with font size). Body text → `<span>`/`<p>`.
- Live text styled with type tokens (`text-h-*`, `text-body`, `font-primary`); never bake copy into art.
- Contrast: `text-default`/`text-blue` pass easily; `text-subdued` is AA-only (not AAA); **orange text
  tokens fail 4.5:1 on white** — large/bold or dark surface only.
- `Tag`-style colour chips: keep the label in the a11y tree even when hidden (`sr-only`), so meaning is
  never colour-only (1.4.1). Contrast-check each bg/text pairing; flag any that fail for design review and
  don't render it in a scanned story.

**Prove**
- Render each colour variant that passes AA in one story so axe scans the pairings; omit sub-AA options.

---

## Link — inline text link, icon link, link-button, social link

**Criteria:** 1.4.1 · 2.4.4 · 2.5.3 · 2.5.8 · 2.4.7 · 2.4.13† · 4.1.2

**Build**
- Real `<a href>`. **Non-colour cue:** in-text links are always `underline` (1.4.1) — don't rely on colour.
- Accessible colour: **`text-text-blue`** (orange fails AA on white). Focus ring as above.
- Purpose clear from text (2.4.4); repeated "Read more" → `aria-label` including the subject. Icon-only
  link → `aria-label` describing the action; visible label must be contained in the name (2.5.3).

**Prove**
- `getByRole('link', { name })`, assert `href`, assert underline, `tab()` → `toHaveFocus`.

---

## Interactive control — button, menu-button, toggle, quantity-changer

**Criteria:** 2.1.1 · 2.4.7 · 2.4.13† · 2.4.11 · 2.5.2 · 2.5.3 · 2.5.8 · 2.5.5† · 3.2.1 · 4.1.2 · 1.4.11

**Build**
- Real `<button type>`; activate on `onClick` (up-event, 2.5.2), not `onPointerDown`.
- Focus ring; touch target `min-h-11`/`size-11` (44px, 2.5.5†) — hard floor 24px (2.5.8).
- Toggle → `aria-pressed`; busy → `aria-busy`. Visible label = accessible name; icon-only → `aria-label`
  describing the action ("Close", not "x").
- No context change merely on focus (3.2.1).

**Prove**
- Keyboard-activation story: `tab()` → `toHaveFocus`; activate and assert the handler/state flips.

---

## Icon-only control — standalone icon as button/link

**Criteria:** 1.1.1 · 2.5.3 · 1.4.11 · 2.5.8 · 2.5.5† · 4.1.2 (+ Interactive control)

**Build**
- `aria-label` describing the **action**. Icon glyph ≥3:1 (1.4.11). Decorative icon beside text →
  `aria-hidden`, no name. In an **atom**, use inline SVG (atoms can't import the `Icon` atom).

**Prove**
- a11y story renders the icon-only variant so axe (`button-name`/`svg-img-alt`) scans it.

---

## Media — Video, Picture/image

**Criteria:** 1.1.1 · 1.2.1–1.2.5 · 1.4.2 · 1.4.5 · 2.2.2

**Build**
- Image: require meaningful `alt`; empty `alt=""` only for decorative. `aria-busy` while loading.
- Video: **muted** (1.4.2). Auto-playing/looping motion >5s needs a visible **pause/stop** control
  (2.2.2) + **`prefers-reduced-motion`** suppression (2.3.3†). Set `.muted` via the **ref callback**
  (React doesn't reflect the `muted` attribute) + native `autoPlay`. Expose `tracks` for
  captions/descriptions (1.2.2–1.2.5); pass a captions `<track>` in stories so axe's `video-caption` passes.

**Prove**
- Toggle story: control present, keyboard-operable, `aria-label` flips. Assert the media's accessible name.
- Non-deterministic frames (network image, playing video) → **no visual baseline**; cover with play tests.

---

## Motion / animated — loader, loading-bar, wave-divider, Framer usage

**Criteria:** 2.2.2 · 2.3.1 · 2.3.3† (+ 1.4.2 if audio)

**Build**
- Honour `prefers-reduced-motion`: gate CSS animation with `motion-reduce:animate-none` / drop non-essential
  Framer transitions. Essential progress (loader/bar) may remain but shouldn't loop forever as decoration.
- No >3 flashes/sec (2.3.1); keep pulses slow. Auto-advancing carousels need a pause control (2.2.2).

**Prove**
- Assert `motion-reduce:animate-none` (or reduced-motion emulation) suppresses non-essential motion.

---

## Status / feedback — alert, inline-error/helper, banner, toast

**Criteria:** 4.1.3 · 3.3.1 · 3.3.3 · 1.4.1 · 1.4.3 · 2.2.1 (if auto-dismiss)

**Build**
- Live region present **before** the text changes: `role="status"` (polite) for confirmations/counts,
  `role="alert"` (assertive) for errors. Don't move focus to it.
- Icon **and** text, not colour-only (1.4.1). Actionable error copy (3.3.3). If it auto-dismisses, pause on
  hover/focus and keep the content reachable elsewhere (2.2.1).

**Prove**
- Assert the live-region role + text is present after the trigger (announcement itself isn't observable).

---

## Overlay / dialog — modal, drawer, pop-up, cookie-bar, cart-sidebar

**Criteria:** 2.1.2 · 2.4.3 · 4.1.2 · 2.4.11 · 2.4.12† · 2.1.1 · 2.2.1 (auto-dismiss) · 2.3.3† + Interactive control (its own buttons)

**Build**
- `role="dialog"` + `aria-modal="true"` + labelled by its heading. Move focus in on open, **return to the
  trigger** on close. Escapable focus trap: Tab cycles inside, `Esc` closes (2.1.2). Reduced-motion open/close.

**Prove**
- Open → focus moves in; Tab stays inside; `Esc` closes and focus returns to the opener.

---

## Disclosure / expander — expandable-wrapper, tabs, accordion, dropdown

**Criteria:** 2.1.1 · 2.4.3 · 3.2.1 · 4.1.2 · 2.4.7 · 2.4.13† (+ 1.4.13 if hover content)

**Build**
- Trigger is a real `<button>` with `aria-expanded` + `aria-controls` (tabs: `role="tab"`/`tabpanel`,
  `aria-selected`, arrow keys). Opens on activation, not focus (3.2.1). Revealed content is next in focus
  order (2.4.3); collapsed content is `inert` + `aria-hidden` so it leaves the tab order.

**Prove**
- Activate → `aria-expanded` toggles `true`/`false`; revealed panel is reachable.

---

## Tooltip / popover — component/icon/button-with-tooltip

**Criteria:** 1.4.13 · 4.1.2 · 2.1.1 · 1.4.3

**Build**
- Show on hover **and** focus. **Dismissible** (`Esc`), **hoverable** (defer close so the pointer can cross
  onto the tooltip — never close synchronously on the trigger's `mouseleave`), **persistent** (no timeout).
  Wire `aria-describedby` trigger→tooltip.

**Prove**
- Focus trigger → tooltip visible; `Esc` → hidden; survives moving onto the tooltip body.
