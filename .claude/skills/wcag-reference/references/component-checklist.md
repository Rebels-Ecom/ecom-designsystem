# Component Checklist — Archetype → Success Criteria Map

This is the entry point when working on a **specific component**. It maps each UI archetype to the WCAG
2.2 success criteria that actually apply, so you load only what's relevant instead of all 60 entries.

> **Tip:** once you know the archetype(s), `archetype-cards.md` has a **pre-unioned recipe** per archetype
> (baseline + criteria + distilled Implementation/Verify + snippets) — read that instead of opening all
> four principle files, and only deep-dive a principle file for an unusual criterion.

## How to use (and how `scaffold-component` uses it)

1. Identify the component's **archetype(s)** from §2. A component often matches more than one — e.g.
   `icon-button` is *Interactive control* **+** *Icon-only control*; `Modal` is *Overlay* and contains
   *Interactive controls*. **Union** their criteria.
   - **Container archetypes compose their children.** An *Overlay*, *Card*, *Form*, *Navigation*, or
     *Table* also inherits the archetype criteria of every interactive thing it renders (buttons →
     *Interactive control*, links → *Link*, icon-only buttons → *Icon-only control*). Union those in too,
     so e.g. a Modal's own close/action buttons still get their focus ring (`2.4.7`/`2.4.13†`) and target
     size (`2.5.8`).
2. Look up each component by name in §3 for a ready-made archetype assignment. If it isn't listed,
   choose archetype(s) by behaviour using §2.
3. For every criterion ID in the union, open its full entry in the principle file (`1.x` → perceivable,
   `2.x` → operable, `3.x` → understandable, `4.x` → robust) and apply its **Implementation** + **Verify**.
4. Always apply the **Universal baseline** (§1) on top of the archetype-specific set.

> Levels: unmarked IDs are A/AA (the conformance target). `†` marks an **adopted AAA** criterion
> (`1.4.6`, `2.3.3`, `2.4.12`, `2.4.13`, `2.5.5`) — apply it as a strong default, not a hard gate.

---

## 1. Universal baseline (every component)

| Criterion | Why it always applies |
|---|---|
| 1.3.1 Info and Relationships | Use semantic HTML; encode structure/labels/groups programmatically, not via styling. |
| 1.4.3 Contrast (Minimum) | All rendered text must meet contrast against its surface — use vetted semantic tokens. |
| 1.4.4 / 1.4.10 / 1.4.12 | Text resizes to 200%, reflows at 320px, survives text-spacing overrides — no fixed-height text traps. |
| 1.4.11 Non-text Contrast | Any visible boundary, icon, or state indicator needs ≥3:1. |
| 4.1.2 Name, Role, Value | If the component has any interactive or stateful part, its role/name/state must be exposed to AT. |

Anything purely interactive also inherits **2.1.1 (Keyboard)**, **2.4.7 (Focus Visible)**, and
**2.4.13† (Focus Appearance)** as part of the baseline for that part.

---

## 2. Archetypes

### Interactive control (button-like)
*Buttons, icon-buttons, menu triggers, quantity changers, toggles.*
`2.1.1` keyboard-operable · `2.4.7` + `2.4.13†` visible focus ring · `2.4.11` focus not hidden by sticky chrome · `2.5.2` activate on up-event (use `onClick`) · `2.5.3` accessible name contains visible label · `2.5.8` + `2.5.5†` target ≥24px (prefer 44px) · `3.2.1` no context change on focus · `4.1.2` role/`aria-pressed`/`disabled` state · `1.4.11` border/state contrast.

### Link
*Text links, icon links, link-buttons, social links.*
`1.4.1` non-colour cue (underline) for in-text links · `2.4.4` purpose clear from text (+`aria-label` for repeated "read more") · `2.5.3` label in name · `2.5.8` target size · `2.4.7`+`2.4.13†` focus · `4.1.2` link role/name.

### Icon-only control
*Standalone icon as a button/link; the `Icon` atom used as a control.*
`1.1.1` text alternative via `aria-label` (describe the action) · `2.5.3` name includes any visible text · `1.4.11` icon contrast ≥3:1 · `2.5.8`+`2.5.5†` target size · `4.1.2`. (Decorative icon beside text → `aria-hidden`, no name.)

### Form field
*Inputs, textarea, checkbox, radio, selects, file input, date picker.*
`1.3.1` label↔field association, `<fieldset>/<legend>` for groups · `1.3.5` `autocomplete` token · `2.4.6` descriptive label (not placeholder-as-label) · `3.3.1` `aria-invalid` + linked text error · `3.3.2` visible label + instructions · `3.3.3` actionable correction suggestion · `3.2.2` no auto-submit on input · `2.5.3` label in name · `2.4.7`+`2.4.13†` focus · `1.4.3`/`1.4.11` text & border contrast · `2.5.8` target size · `4.1.2` state (`aria-checked`, `aria-expanded` for combobox).

### Form / multi-step flow
*Whole forms: login, delivery, register, newsletter, age-verification.*
All **Form field** criteria, plus: `3.3.4` confirm/reverse legal-financial-data submissions · `3.3.7` don't re-ask data entered earlier · `3.3.8` accessible authentication — allow paste & password managers, set credential `autocomplete`, no cognitive-test gate.

### Disclosure / expander
*Expandable-wrapper, tabs, accordion / FAQ, dropdown list.*
`2.1.1` keyboard model (Enter/Space, arrows for tabs) · `2.4.3` revealed content next in focus order · `3.2.1` opens on activation, not focus · `4.1.2` `aria-expanded`/`aria-controls`/`aria-selected`/`tabpanel` wiring · `2.4.7`+`2.4.13†` focus · `1.4.13` if it reveals hover content.

### Overlay / dialog
*Modal, drawer-sidebar, pop-up, message-popup, cookie-bar, cart-sidebar, loading-overlay.*
`2.1.2` escapable focus trap (Tab cycles inside, Esc closes) · `2.4.3` move focus in on open, **return to trigger** on close · `4.1.2` `role="dialog"` + `aria-modal="true"` + labelled by its heading · `2.4.11`/`2.4.12†` focused control not hidden · `2.1.1` keyboard-operable · `1.4.13` for any hover content · `2.2.1` if auto-dismissing (cookie-bar/toast) · `2.3.3†` reduced-motion open/close · **+ inherit *Interactive control*** for the dialog's own close/action buttons (focus ring, target size, label-in-name).

### Tooltip / popover
*Component-with-tooltip, icon-with-tooltip, button-with-tooltip.*
`1.4.13` **dismissible (Esc), hoverable, persistent** — the defining criterion · `4.1.2` `aria-describedby` trigger→tooltip · `2.1.1` show on focus as well as hover · `1.4.3` tooltip text contrast.

### Media
*Video, picture/image.*
`1.1.1` `alt`/labels · `1.2.1`–`1.2.5` caption/description/transcript track slots (video) · `1.4.2` audio control / no autoplay-with-sound · `1.4.5` no images of text · `2.2.2` no unstoppable autoplay motion.

### Motion / animated
*Carousels, loaders, loading bars, animated dividers, anything using Framer Motion.*
`2.2.2` pause/stop/hide for >5s auto-motion (carousels) · `2.3.1` no >3 flashes/sec · `2.3.3†` honour `prefers-reduced-motion` · `1.4.2` if audio.

### Carousel / slider / draggable
*Carousel, slider, range-input, sortable-list (drag to reorder).*
All **Motion** criteria, plus: `2.5.1` single-pointer alternative to swipe/pinch · `2.5.7` non-drag alternative (arrow keys, +/−, move buttons) · `2.1.1` keyboard operation · `4.1.2` slider role/`aria-valuenow`.

### Status / feedback
*Alerts, inline-error/helper, banners, toasts, loaders.*
`4.1.3` live region — `role="status"` (polite) or `role="alert"` (assertive), region present before update · `3.3.1`/`3.3.3` for error content · `1.4.1` icon+text, not colour-only · `1.4.3` contrast · `2.2.1` if it auto-dismisses.

### Navigation
*Top-nav, desktop/mobile navigation, header, footer, breadcrumbs, pagination.*
`2.4.1` `<nav>` landmark + skip-link enablement · `1.3.1` landmark regions · `3.2.3` consistent navigation order · `3.2.6` consistent help placement · `2.4.4` clear link purpose · `2.4.7`+`2.4.13†` focus · `2.4.11` focus clear of sticky bar · `2.1.1` keyboard · `4.1.2` `aria-current` for active item.

### Table / list
*Table, purchase/invoice list, ordered lists, select-list.*
`1.3.1` `<table>`/`<th scope>`/`<caption>` or list semantics · `1.3.2` meaningful order · `2.1.1` keyboard for interactive cells · `4.1.2` for sortable headers (`aria-sort`) · (`1.4.10` note: tables may scroll horizontally — that's the allowed exception).

### Card / content container
*Article/offer/product cards, teaser, campaign-box, box-wrapper.*
`2.4.4` link purpose for "read more"/whole-card links (`aria-label` with title) · `1.4.1` non-colour cues · plus delegate to the archetypes of interactive children (buttons, tags, images).

---

## 3. Project component → archetype lookup

Names are the V2 directories from `.claude/docs/ATOMIC-MAP.md`. Resolve a component to its archetype(s),
then union the criteria. **Not exhaustive** — for anything missing, classify by behaviour using §2.

| Component | Archetype(s) |
|---|---|
| `Heading`, `Text`, `rich-text`, `tags-description` | Static text |
| `button`, `menu-button`, `link-button`, `add-to-cart-button`, `quantity-changer`, `product-quantity-input` | Interactive control |
| `ui-link`, `icon-link`, `social-media-link`, `clickable-list-item` | Link |
| `Icon`, `icon-button`, `icon-with-tooltip` | Icon-only control (+ Tooltip where noted) |
| `input-text`, `textarea`, `checkbox`, `radio-button`, `single-select`, `multi-select`, `debounce-input`, `input-file`, `ui-date-picker` | Form field |
| `range-input`, `slider` | Form field + Carousel/slider/draggable |
| `form`, `form-group`, `login-form`, `reset-password-form`, `delivery-form`, `create-list-form`, `newsletter`, `age-verification-form` | Form / multi-step flow (login/reset → emphasise `3.3.8`) |
| `expandable-wrapper`, `tabs`, `dropdown-list`, `faq-list`, `faq-group`, `select-list` | Disclosure / expander |
| `modal`, `drawer-sidebar`, `pop-up`, `message-popup`, `cookie-bar`, `cart-sidebar`, `loading-overlay`, `dynamic-filter` | Overlay / dialog |
| `component-with-tooltip`, `icon-with-tooltip`, `button-with-tooltop` | Tooltip / popover |
| `video`, `picture` | Media |
| `loader`, `loading-bar`, `loading-bars`, `wave-divider` | Motion / animated |
| `carousel`, `hero-carousel`, `product-carousel` | Carousel/slider/draggable + Overlay-free Motion |
| `sortable-list`, `sortable-list-item` | Carousel/slider/draggable (drag-reorder) |
| `alert-box`, `alert-message`, `inline-error`, `inline-helper`, `message-banner`, `mini-product-toast`, `product-toast`, `campaign-message` | Status / feedback |
| `top-nav-bar`, `desktop-navigation`, `mobile-navigation`, `header`, `footer`, `breadcrumbs`, `pagination` | Navigation |
| `table`, `purchase-list`, `invoice-list`, `unordered-list`, `scrollable-list` | Table / list |
| `article-card`, `offer-card`, `product-card`, `product-card-vertical`, `product-card-horizontal`, `teaser`, `campaign-box`, `box-wrapper`, `account-box` | Card / content container |
| `tag`, `tags-list` | Static text (+ Interactive control if clickable/removable) |

### Worked example — `Button` (atom/molecule)
Archetypes: **Interactive control** (+ **Icon-only control** if an icon-only variant exists).
Applicable union: `1.3.1`, `1.4.3`, `1.4.11`, `2.1.1`, `2.4.7`, `2.4.11`, `2.4.13†`, `2.5.2`, `2.5.3`,
`2.5.5†`, `2.5.8`, `3.2.1`, `4.1.2` (+ `1.1.1` for the icon-only variant).
→ Render a real `<button type>`, `focus-visible:outline-2 outline-offset-2 outline-action-primary`,
`min-h-11` touch target, `aria-pressed` for toggle variants, `aria-label` when icon-only, `aria-busy`
while loading. Stories: a keyboard-activation `play` test, an icon-only a11y story for the addon to scan,
and a focus-visible story.
