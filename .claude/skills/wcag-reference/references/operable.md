# Principle 2 — Operable

UI components and navigation must be operable by everyone, with any input device.

> Scope: all Level A + AA criteria, plus adopted AAA `2.3.3`, `2.4.12`, `2.4.13`, `2.5.5`.
> Entry schema is defined in `../SKILL.md`.

## Contents

- **2.1 Keyboard Accessible:** [2.1.1](#211-keyboard--a) · [2.1.2](#212-no-keyboard-trap--a) · [2.1.4](#214-character-key-shortcuts--a)
- **2.2 Enough Time:** [2.2.1](#221-timing-adjustable--a) · [2.2.2](#222-pause-stop-hide--a)
- **2.3 Seizures & Physical Reactions:** [2.3.1](#231-three-flashes-or-below-threshold--a) · [2.3.3](#233-animation-from-interactions--aaa-adopted)
- **2.4 Navigable:** [2.4.1](#241-bypass-blocks--a) · [2.4.2](#242-page-titled--a) · [2.4.3](#243-focus-order--a) · [2.4.4](#244-link-purpose-in-context--a) · [2.4.5](#245-multiple-ways--aa) · [2.4.6](#246-headings-and-labels--aa) · [2.4.7](#247-focus-visible--aa) · [2.4.11](#2411-focus-not-obscured-minimum--aa) · [2.4.12](#2412-focus-not-obscured-enhanced--aaa-adopted) · [2.4.13](#2413-focus-appearance--aaa-adopted)
- **2.5 Input Modalities:** [2.5.1](#251-pointer-gestures--a) · [2.5.2](#252-pointer-cancellation--a) · [2.5.3](#253-label-in-name--a) · [2.5.4](#254-motion-actuation--a) · [2.5.5](#255-target-size-enhanced--aaa-adopted) · [2.5.7](#257-dragging-movements--aa) · [2.5.8](#258-target-size-minimum--aa)

---

## 2.1 Keyboard Accessible

### 2.1.1 Keyboard — A
**Requirement:** All functionality must be operable from a keyboard alone, without requiring specific timing of keystrokes.
**Implementation (React/Tailwind):** Build on native interactive elements (`<button>`, `<a href>`, `<input>`) so keyboard support is free. For custom widgets (tabs, menus, custom selects, carousels) implement the WAI-ARIA Authoring Practices keyboard model: `Enter`/`Space` activate, arrow keys move within composites, `Home`/`End` where appropriate, `Esc` closes. Never put `onClick` on a `<div>` without `role`, `tabIndex={0}`, and key handlers — prefer a real `<button>`. Anything reachable by mouse must be reachable and operable by keyboard.
**Verify:** play function in `pnpm test:visual` drives the component with `userEvent.keyboard`/`tab` and asserts the action fires; axe (`scrollable-region-focusable`, role checks) catches some gaps.

### 2.1.2 No Keyboard Trap — A
**Requirement:** If keyboard focus can enter a component, it must be able to leave using only the keyboard (no traps).
**Implementation (React/Tailwind):** For overlays (`Modal`, `drawer-sidebar`, `pop-up`) implement an *intentional, escapable* focus trap: cycle Tab/Shift+Tab within the dialog while open, but always allow `Escape` to close and **return focus to the trigger**. Don't trap focus in non-modal widgets at all. Remove the trap on unmount. Never rely on a component the user can't tab out of.
**Verify:** play function — open overlay, Tab through, assert focus stays inside; press `Escape`, assert it closes and focus returns to the opener.

### 2.1.4 Character Key Shortcuts — A
**Requirement:** Single-character shortcuts (letter/number/symbol, no modifier) must be disableable, remappable, or active only on focus.
**Implementation (React/Tailwind):** Avoid global single-key shortcuts in components. If a widget binds a bare key (e.g. type-ahead in a listbox), scope it to when the component has focus — never document-level. Don't add app-wide hotkeys in a library component.
**Verify:** Manual review of any `keydown` handlers bound above the component root.

---

## 2.2 Enough Time

### 2.2.1 Timing Adjustable — A
**Requirement:** If a time limit exists, users can turn it off, adjust it (≥10×), or extend it (warned, ≥20s to respond) — with narrow exceptions.
**Implementation (React/Tailwind):** Auto-dismissing UI is the common case here: toasts (`mini-product-toast`, `product-toast`), `cookie-bar`, alerts. Don't auto-dismiss essential messages; if a toast auto-hides, pause the timer on hover/focus and make the content also reachable elsewhere. Expose a `duration`/`autoDismiss` prop defaulting to a generous value or off for important messages.
**Verify:** play function — assert hover/focus pauses auto-dismiss; manual review of timer logic.

### 2.2.2 Pause, Stop, Hide — A
**Requirement:** Moving/blinking/scrolling or auto-updating content that starts automatically and lasts >5s must have a pause/stop/hide control (if shown alongside other content).
**Implementation (React/Tailwind):** Auto-advancing `carousel`/`hero-carousel` must expose a visible pause/play control and stop on hover/focus. Marquee/ticker content needs a stop. `loading-bar`/`loader` animations are exempt (essential progress indicators) but shouldn't loop indefinitely as decoration. Drive Framer Motion `animate` loops from a `playing` state the user can toggle.
**Verify:** play function — assert a pause control exists and halts auto-advance; assert hover/focus pauses.

---

## 2.3 Seizures & Physical Reactions

### 2.3.1 Three Flashes or Below Threshold — A
**Requirement:** Nothing flashes more than 3× per second (unless below the general/red flash thresholds).
**Implementation (React/Tailwind):** Don't build strobing/rapid-flash effects. Keep Framer Motion transitions smooth (opacity/transform easing), never rapid full-screen luminance flips. Skeleton/`loading-bar` pulses must be slow (well under 3 Hz).
**Verify:** Manual — review animation frequency; no automated check.

### 2.3.3 Animation from Interactions — AAA (adopted)
**Requirement:** Motion animation triggered by interaction can be disabled, unless essential.
**Implementation (React/Tailwind):** **Respect `prefers-reduced-motion`** across all Framer Motion usage — this is the team's adopted standard. Read the user preference (e.g. Framer's `useReducedMotion()`) and drop/:reduce non-essential transitions (parallax, large slides, scale-ins): fall back to instant or simple opacity. In CSS, gate decorative animation behind `motion-safe:` and provide `motion-reduce:transition-none`. Essential motion (a progress bar) may remain.
**Verify:** play function / manual — emulate `prefers-reduced-motion: reduce` (Storybook toolbar or Playwright `emulateMedia`) and assert non-essential animation is suppressed.

---

## 2.4 Navigable

### 2.4.1 Bypass Blocks — A
**Requirement:** A mechanism (skip link, landmarks) lets users bypass blocks repeated across pages (e.g. nav).
**Implementation (React/Tailwind):** App/page concern, but the library enables it: navigation organisms (`header`, `desktop-navigation`, `top-nav-bar`) must use a `<nav>` landmark, and `header`/`footer` use `<header>`/`<footer>`/`<main>` regions so consumers and AT can skip. If a `SkipLink` atom exists, it targets `#main` and is visible on focus (`sr-only focus:not-sr-only`).
**Verify:** axe (`region`, `landmark-*`) in the a11y panel; manual check that a skip link appears on first Tab.

### 2.4.2 Page Titled — A
**Requirement:** Each page has a descriptive `<title>`.
**Implementation (React/Tailwind):** App-level, not a component-library concern — components don't set `document.title`. Note as a consumer/template responsibility; no atom owns it.
**Verify:** Manual — out of scope for component a11y stories.

### 2.4.3 Focus Order — A
**Requirement:** Focus order preserves meaning and operability.
**Implementation (React/Tailwind):** Keep DOM order logical (see 1.3.2) so default tab order is correct; avoid positive `tabIndex`. When an overlay opens, move focus into it (first focusable or the dialog) and return focus to the trigger on close. Newly revealed content (accordion panel, dropdown) should sit next in the tab sequence.
**Verify:** play function — Tab through and assert the focus sequence; assert overlay open/close focus moves.

### 2.4.4 Link Purpose (In Context) — A
**Requirement:** Each link's purpose is clear from its text, or its text plus programmatic context.
**Implementation (React/Tailwind):** Give links meaningful text; avoid bare "click here"/"read more". For unavoidable repeated "Read more" links (cards), add context via an `aria-label` that includes the subject ("Read more about {title}") or visually-hidden text. Icon-only links need an `aria-label` (see 1.1.1 / 2.5.3).
**Verify:** axe (`link-name`) for empty links; manual review of link text quality.

### 2.4.5 Multiple Ways — AA
**Requirement:** More than one way to find a page within a set (nav + search + sitemap), except steps in a process.
**Implementation (React/Tailwind):** Site/app architecture concern. Library supports it by providing both navigation organisms and a `search` molecule; document that consumers expose at least two location mechanisms.
**Verify:** Manual — site-level, not a component story.

### 2.4.6 Headings and Labels — AA
**Requirement:** Headings and labels are descriptive of their topic/purpose.
**Implementation (React/Tailwind):** `Heading` content should describe its section; form field labels describe the expected input. Don't ship placeholder-as-label (placeholder is not a label). Make `label` a required prop on field atoms.
**Verify:** axe (`label`, `form-field-multiple-labels`); manual review of copy quality.

### 2.4.7 Focus Visible — AA
**Requirement:** Any keyboard-operable UI has a visible focus indicator when focused.
**Implementation (React/Tailwind):** Every interactive element needs a clearly visible focus style. Use `focus-visible:` (not `focus:`) so the ring shows for keyboard users without firing on mouse click: e.g. `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary`. **Never** ship `outline-none` without an equivalent replacement. Define the focus treatment once and reuse it across atoms for consistency.
**Verify:** play function — focus the element and assert a visible indicator (snapshot / computed outline); axe partially via `focus` checks. Manual keyboard tab-through is the gold standard.

### 2.4.11 Focus Not Obscured (Minimum) — AA
**Requirement:** When an element receives focus, it must not be *entirely* hidden by author content (sticky headers, footers, overlays).
**Implementation (React/Tailwind):** Sticky/`fixed` headers (`top-nav-bar`) and cookie bars must not fully cover a focused control. Add `scroll-margin-top` equal to the sticky header height (use a `--spacing-nav-bar` token, never arbitrary) so focused items scroll clear. Ensure overlays don't sit over the element that's about to receive focus.
**Verify:** play function — focus elements near a sticky header and assert they're at least partially in view; manual scroll test.

### 2.4.12 Focus Not Obscured (Enhanced) — AAA (adopted)
**Requirement:** Stricter form of 2.4.11 — *no part* of the focused element may be hidden by author content.
**Implementation (React/Tailwind):** Same techniques as 2.4.11 but size `scroll-margin`/offsets so the *whole* control clears sticky chrome. Adopted to make focus handling robust around the sticky nav.
**Verify:** Manual — keyboard-navigate beneath sticky elements and confirm the full control is visible.

### 2.4.13 Focus Appearance — AAA (adopted)
**Requirement:** The focus indicator is sufficiently large (≥ area of a 2px-thick perimeter) and has ≥ 3:1 contrast between focused/unfocused states.
**Implementation (React/Tailwind):** Make the adopted focus ring at least 2px (`outline-2`) with `outline-offset-2` so it's distinct, in a colour that meets 3:1 against both the component and the page (e.g. `outline-action-primary` / a dark ring on light surfaces). This is the concrete spec behind the focus style required by 2.4.7 — use it as the canonical focus treatment.
**Verify:** Manual/visual — measure ring thickness and check 3:1 contrast of the ring against adjacent colours (axe non-text-contrast doesn't cover focus reliably).

---

## 2.5 Input Modalities

### 2.5.1 Pointer Gestures — A
**Requirement:** Multipoint or path-based gestures (pinch, swipe-path) need a single-pointer alternative, unless essential.
**Implementation (React/Tailwind):** `carousel`/`slider` swipe must also be operable with tap-able prev/next buttons (single pointer, no path). Don't make pinch/rotate the only way to do anything.
**Verify:** play function — assert button controls exist and work without gesture; manual gesture review.

### 2.5.2 Pointer Cancellation — A
**Requirement:** For single-pointer actions, don't fire on down-event; allow abort/undo (complete on up-event, or up reverses down).
**Implementation (React/Tailwind):** Rely on native `onClick` (fires on up, after the pointer is released over the target) rather than `onPointerDown`/`onMouseDown` to trigger actions — moving off before release should cancel. Don't execute destructive actions on press-down.
**Verify:** play function — pointer-down then move-away-and-release, assert no action; manual check.

### 2.5.3 Label in Name — A
**Requirement:** A control's accessible name must contain its visible label text (so speech-input users can say the visible word).
**Implementation (React/Tailwind):** When a button/link shows visible text, don't override it with an `aria-label` that omits that text. If you must add context, *include* the visible text: visible "Add" → `aria-label="Add to cart"` (contains "Add"), not `aria-label="Cart"`. Prefer letting the visible text be the name; reserve `aria-label` for icon-only controls.
**Verify:** axe (`label-content-name-mismatch`); play function asserts accessible name contains the visible string.

### 2.5.4 Motion Actuation — A
**Requirement:** Functionality triggered by device/user motion (shake, tilt) must also work via UI controls and be disableable; unless motion is essential.
**Implementation (React/Tailwind):** Don't build motion-actuated behaviour into library components. If ever added, provide an equivalent on-screen control and a way to disable motion input.
**Verify:** Manual — n/a for most components.

### 2.5.5 Target Size (Enhanced) — AAA (adopted)
**Requirement:** Pointer targets are at least **44×44 CSS px** (with exceptions for inline/equivalent).
**Implementation (React/Tailwind):** Adopt 44×44 as the comfortable touch target for primary tappable controls (buttons, icon-buttons, nav links) on touch-first surfaces — e.g. `min-h-11 min-w-11` (44px) with adequate padding. Treat as the preferred size; 2.5.8 (24px) is the hard AA floor.
**Verify:** play function / manual — assert rendered control box ≥ 44×44 for touch variants.

### 2.5.7 Dragging Movements — AA
**Requirement:** Any drag operation needs a single-pointer alternative that isn't drag (tap/click), unless dragging is essential.
**Implementation (React/Tailwind):** `sortable-list` reordering, `range-input`/`slider` thumbs, and carousel drag must also be operable without dragging: sliders respond to arrow keys and/or +/- buttons; reordering offers move-up/move-down buttons; carousels have prev/next. Don't make drag the only path.
**Verify:** play function — operate the control via clicks/keys only (no drag) and assert it works.

### 2.5.8 Target Size (Minimum) — AA
**Requirement:** Pointer targets are at least **24×24 CSS px**, or have ≥24px spacing to neighbouring targets (inline text links, UA-controlled, essential cases exempt).
**Implementation (React/Tailwind):** This is the hard floor for every clickable control. Ensure icon-buttons, close buttons, checkboxes/radios, pagination items render ≥ 24×24 — give small glyph buttons `min-h-6 min-w-6` plus padding (prefer larger, see 2.5.5). If targets are tightly packed, ensure ≥24px center-to-center spacing.
**Verify:** axe (`target-size`) in the a11y panel flags many cases; play function/manual confirms rendered size for dense controls.
