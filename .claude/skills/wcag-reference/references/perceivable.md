# Principle 1 — Perceivable

Information and UI components must be presentable in ways users can perceive.

> Scope: all Level A + AA criteria, plus adopted AAA `1.4.6`. Entry schema is defined in `../SKILL.md`.
> `bg-*` / `text-*` / `border-*` token names below come from `.claude/docs/STYLE-GUIDE.md`.

## Contents

- **1.1 Text Alternatives:** [1.1.1](#111-non-text-content--a)
- **1.2 Time-based Media:** [1.2.1](#121-audio-only-and-video-only-prerecorded--a) · [1.2.2](#122-captions-prerecorded--a) · [1.2.3](#123-audio-description-or-media-alternative-prerecorded--a) · [1.2.4](#124-captions-live--aa) · [1.2.5](#125-audio-description-prerecorded--aa)
- **1.3 Adaptable:** [1.3.1](#131-info-and-relationships--a) · [1.3.2](#132-meaningful-sequence--a) · [1.3.3](#133-sensory-characteristics--a) · [1.3.4](#134-orientation--aa) · [1.3.5](#135-identify-input-purpose--aa)
- **1.4 Distinguishable:** [1.4.1](#141-use-of-color--a) · [1.4.2](#142-audio-control--a) · [1.4.3](#143-contrast-minimum--aa) · [1.4.4](#144-resize-text--aa) · [1.4.5](#145-images-of-text--aa) · [1.4.6](#146-contrast-enhanced--aaa-adopted) · [1.4.10](#1410-reflow--aa) · [1.4.11](#1411-non-text-contrast--aa) · [1.4.12](#1412-text-spacing--aa) · [1.4.13](#1413-content-on-hover-or-focus--aa)

---

## 1.1 Text Alternatives

### 1.1.1 Non-text Content — A
**Requirement:** Every non-text element (images, icons, charts, image buttons) needs a text alternative serving an equivalent purpose. Decorative content must be hidden from assistive tech; CAPTCHAs/tests/sensory content need a descriptive alternative.
**Implementation (React/Tailwind):** For meaningful imagery require a non-optional `alt` prop (`alt: string`). For the `Icon` atom: when the icon is decorative beside a text label, set `aria-hidden="true"` and no label; when it stands alone (icon-only button/link) require an `aria-label` (or visually-hidden text via a `sr-only` span) describing the action, not the glyph ("Close", not "x icon"). Never leave an `<img>`/SVG control unlabeled. Type it so a label is mandatory for standalone use (e.g. discriminated union: `{ decorative: true } | { label: string }`).
**Verify:** axe (`image-alt`, `svg-img-alt`, `button-name`) in the Storybook a11y panel; add a story rendering the icon-only variant so the addon scans it. Manually confirm decorative icons are silent in a screen reader.

---

## 1.2 Time-based Media

> A component library rarely owns real video/audio content, but the `Video` atom and any media wrapper must expose the props that let consumers meet these. Default to "pass the tracks through and require captions".

### 1.2.1 Audio-only and Video-only (Prerecorded) — A
**Requirement:** Prerecorded audio-only needs a transcript; prerecorded video-only (no audio) needs a transcript or an equivalent audio track.
**Implementation (React/Tailwind):** The `Video` atom should accept and render a `<track>`/transcript slot and not hard-code controls away. Expose `transcript`/`description` props; don't bake in autoplay (see 1.4.2 / 2.2.2).
**Verify:** Manual — confirm the API surfaces a transcript slot. axe cannot judge transcript adequacy.

### 1.2.2 Captions (Prerecorded) — A
**Requirement:** Prerecorded synchronized media (video with audio) must have synchronized captions.
**Implementation (React/Tailwind):** Render native `<track kind="captions" srclang… label…>` inside the `<video>`. Provide a `captions` prop; make `crossOrigin`/track wiring possible. Do not suppress the browser's native captions UI.
**Verify:** Manual playback check that captions render; axe checks `<video>` has a `<track>` only structurally.

### 1.2.3 Audio Description or Media Alternative (Prerecorded) — A
**Requirement:** Prerecorded video with audio needs either audio description of important visuals or a full text alternative.
**Implementation (React/Tailwind):** Support a `descriptions` track (`kind="descriptions"`) and/or an adjacent text-alternative slot. Component's job is to not block these.
**Verify:** Manual review of provided media; structural only in axe.

### 1.2.4 Captions (Live) — AA
**Requirement:** Live synchronized media must have real-time captions.
**Implementation (React/Tailwind):** Out of scope for static atoms; if a live-stream wrapper is built, surface a live caption region. Document as a consumer responsibility.
**Verify:** Manual; not automatable.

### 1.2.5 Audio Description (Prerecorded) — AA
**Requirement:** Prerecorded video with audio must have an audio description track.
**Implementation (React/Tailwind):** Same as 1.2.3 — expose a `descriptions` track slot on the `Video` atom.
**Verify:** Manual review of supplied tracks.

---

## 1.3 Adaptable

### 1.3.1 Info and Relationships — A
**Requirement:** Structure and relationships conveyed visually (headings, lists, tables, labels↔fields, groups) must be programmatically determinable — i.e. encoded in semantic HTML/ARIA, not just styling.
**Implementation (React/Tailwind):** Use real semantic elements: `<button>`, `<nav>`, `<ul>/<li>`, `<table>` with `<th scope>`, `<fieldset>/<legend>` for radio/checkbox groups, `<label htmlFor>` tied to inputs. The `Heading` atom must emit a real `h1`–`h6` (a `level` prop drives the tag) and never fake a heading with font size alone. Tabs/accordions use `aria-controls`/`aria-expanded` to express the relationship. Don't convey grouping with Tailwind spacing alone.
**Verify:** axe (`label`, `list`, `definition-list`, `table-*`, `heading-order`) in the a11y panel; play function asserts inputs have accessible names via `getByLabelText`.

### 1.3.2 Meaningful Sequence — A
**Requirement:** When reading order affects meaning, the DOM order must yield a correct sequence.
**Implementation (React/Tailwind):** Keep DOM order = reading order. Tailwind `order-*`, `flex-row-reverse`, or absolute positioning must never be the only thing establishing sequence. Render content in logical order and use CSS only for visual placement.
**Verify:** Manual — tab through and read with CSS disabled; no automated rule covers it reliably.

### 1.3.3 Sensory Characteristics — A
**Requirement:** Instructions must not rely solely on shape, size, position, colour, or sound ("click the round button on the right").
**Implementation (React/Tailwind):** Reference controls by visible text/label, not position or colour. Pair any colour/shape cue with text or an accessible name. Applies to helper text, error copy, and tooltip content.
**Verify:** Manual content review.

### 1.3.4 Orientation — AA
**Requirement:** Don't lock content to portrait or landscape unless a specific orientation is essential.
**Implementation (React/Tailwind):** Never apply orientation locks. Build responsively with Tailwind breakpoints so layouts work both ways; avoid `rotate`-based hacks that assume one orientation.
**Verify:** Manual — rotate the Storybook viewport / device emulation.

### 1.3.5 Identify Input Purpose — AA
**Requirement:** Inputs collecting known user info must have a programmatically determinable purpose (so browsers/AT can autofill).
**Implementation (React/Tailwind):** Set the correct HTML `autocomplete` token (`name`, `email`, `tel`, `street-address`, `postal-code`, etc.) and matching `type` on input atoms. Expose `autoComplete` as a typed prop; pick sensible defaults per field semantic.
**Verify:** axe (`autocomplete-valid`) in the a11y panel; review that form atoms set `autocomplete`.

---

## 1.4 Distinguishable

### 1.4.1 Use of Color — A
**Requirement:** Colour must not be the *only* means of conveying information, indicating an action, or distinguishing an element (e.g. errors, required fields, links in body text).
**Implementation (React/Tailwind):** Pair every colour signal with a second cue. Form errors: `text-critical` **plus** an error icon and text message (don't rely on a red border alone). Inline links inside paragraphs: add `underline`, not just `text-interactive`. Required fields: an asterisk/"required" text, not just colour. Status tags: include a label/icon, not colour-only.
**Verify:** Manual — review in greyscale; axe `link-in-text-block` flags some cases but cannot catch all colour-only meaning.

### 1.4.2 Audio Control — A
**Requirement:** If audio plays automatically for >3s, provide a way to pause/stop it or control its volume independently of system volume.
**Implementation (React/Tailwind):** Don't autoplay audio. If a `Video`/media component can autoplay, default `muted` and always render controls; provide an in-component pause/stop.
**Verify:** Manual playback check.

### 1.4.3 Contrast (Minimum) — AA
**Requirement:** Text/images of text must have contrast ≥ **4.5:1**, or ≥ **3:1** for large text (≥ 24px, or ≥ 18.66px bold). Disabled controls, pure decoration, and logotypes are exempt.
**Implementation (React/Tailwind):** Use the semantic text tokens against their intended surfaces — they are pre-vetted pairings: `text-default` (`--color-black`) and `text-subdued` (`grey-800`) on `bg-surface-default`/`bg-background` pass comfortably. Be careful with low-contrast combinations: orange text tokens (`text-orange`, `--color-orange-accent #DE9034`) on white fall **below 4.5:1** — use them only for large/bold text or on a dark surface; for body copy choose `text-default`/`text-blue`. White text needs a dark surface (`text-on-primary` on `bg-action-primary`). Never introduce arbitrary hex; if a needed pairing fails, raise it with design rather than inlining a colour.
**Verify:** axe (`color-contrast`) in the Storybook a11y panel catches most cases automatically — add stories for each colour variant (incl. hover) so they're scanned. Manually check states axe skips (disabled is exempt; hover/focus need a deliberate story).

### 1.4.4 Resize Text — AA
**Requirement:** Text must scale to 200% without loss of content or function and without assistive tech.
**Implementation (React/Tailwind):** Size text with the rem-based `text-*` scale tokens (they're defined in rem) so browser zoom/font-size scales them. Avoid fixed `px` heights on text containers that would clip; let containers grow (`min-h-*`, not fixed `h-*`) and allow wrapping.
**Verify:** Manual — zoom the browser to 200% in Storybook; confirm nothing clips or overlaps.

### 1.4.5 Images of Text — AA
**Requirement:** Use real text rather than images of text, unless the presentation is essential or customizable (logos exempt).
**Implementation (React/Tailwind):** Render copy as live text styled with the typography tokens (`text-h-xl`, `text-body`, `font-primary`). Don't bake headings/labels into raster/SVG art. The `Picture` atom is for photography, not text.
**Verify:** Manual review of assets.

### 1.4.6 Contrast (Enhanced) — AAA (adopted)
**Requirement:** Stronger contrast: ≥ **7:1** for normal text, ≥ **4.5:1** for large text.
**Implementation (React/Tailwind):** Adopted as an *aspiration* for primary body and critical text. `text-default` (near-black on white) clears 7:1 easily; `text-subdued` (grey-800 ≈ 5:1) does **not** — so don't use subdued tokens for essential reading text if you're targeting AAA, reserve them for secondary/meta text where AA (1.4.3) governs. Treat this as a tie-breaker when choosing between two passing tokens, not a hard gate.
**Verify:** axe color-contrast can be configured to the enhanced (AAA) threshold; otherwise compute the ratio manually. Flag as advisory, not a build blocker.

### 1.4.10 Reflow — AA
**Requirement:** Content must reflow to a 320px-wide viewport (≈400% zoom) without two-dimensional scrolling — no horizontal scroll for vertical content (data tables/maps excepted).
**Implementation (React/Tailwind):** Build mobile-first with fluid widths (`w-full`, `max-w-*` tokens, `flex-wrap`, responsive `grid`). Avoid fixed pixel widths on layout containers; prefer the `--container-*` max-width tokens which cap but don't force width. No arbitrary `w-[...]`.
**Verify:** Manual — Storybook mobile viewport / browser at 320px; confirm no horizontal scrollbar.

### 1.4.11 Non-text Contrast — AA
**Requirement:** UI component states/boundaries and meaningful graphics need ≥ **3:1** against adjacent colours — applies to input borders, focus indicators, toggle states, icon-only meaning, chart strokes.
**Implementation (React/Tailwind):** Ensure interactive boundaries meet 3:1: `border-default` (#b3b3b3) on white ≈ 3.0:1 (borderline — prefer it only where a visible border is the affordance, and darken to `border-grey`/a stronger token if it's the sole indicator). Focus rings and the checked state of toggles/checkboxes must be ≥ 3:1 against their background. Meaningful icons (status, the `Icon` atom used as a control indicator) need 3:1.
**Verify:** axe does **not** reliably catch non-text contrast — do a manual/visual check of borders, focus rings, and toggle states against their backgrounds (use the contrast checker on the rendered pixels).

### 1.4.12 Text Spacing — AA
**Requirement:** No loss of content/function when users override: line-height 1.5×, paragraph spacing 2×, letter-spacing 0.12em, word-spacing 0.16em.
**Implementation (React/Tailwind):** Don't pin text containers to fixed heights or use `overflow-hidden` on text that could grow; let line-height/letter-spacing tokens be overridable. Avoid `h-*` on elements wrapping multi-line text — use padding + `min-h`.
**Verify:** Manual — apply the WCAG text-spacing bookmarklet to a story and confirm no clipping/overlap.

### 1.4.13 Content on Hover or Focus — AA
**Requirement:** Content revealed on hover/focus (tooltips, popovers, custom dropdowns) must be **dismissible** (without moving the pointer, e.g. Esc), **hoverable** (pointer can move onto it without it vanishing), and **persistent** (stays until dismissed, focus lost, or no longer valid).
**Implementation (React/Tailwind):** For the tooltip atoms (`ComponentWithTooltip`, `icon-with-tooltip`, `button-with-tooltip`): show on both hover **and** focus; keep open while hovering the tooltip body; close on `Escape` and on blur — not on a timeout. Use `aria-describedby` linking trigger→tooltip (see 4.1.2). Don't unmount on `mouseleave` of the trigger if the pointer is heading to the tooltip.
**Verify:** play function in `pnpm test:visual` — focus the trigger, assert tooltip visible; press `Escape`, assert hidden; assert it survives moving onto the tooltip. axe checks the `aria-describedby` wiring.
