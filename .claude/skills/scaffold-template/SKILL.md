---
name: scaffold-template
description: >-
  Builds a fully-functional page or section TEMPLATE for the V2 Design System — a stateless composition
  of already-migrated components plus a Storybook state-harness that simulates the real app's behaviour
  live (add to cart, change quantity, remove, apply campaigns/discounts, filter, sort, log in, return an
  order), covered end-to-end by play tests. Use this whenever you're asked to build, scaffold, assemble,
  or reproduce a real SCREEN, PAGE, SECTION, or FLOW from the consuming app (`Spendrups-FrontendApp`) —
  e.g. "build the checkout page", "scaffold the product listing template", "make a functional cart", "the
  order-return flow", "reproduce the start page", "next template" — even if the word "template" is never
  used, and even when the request just names a flow ("simulate adding products to the cart and applying a
  campaign"). This is the canonical way to create a `src/templates/*` template; don't hand-roll it, because
  a one-off misses interactions, the a11y gate, and the state-harness contract. Driven by
  `.claude/docs/TEMPLATE-PROGRESS.md`.
---

# scaffold-template

Assembles migrated design-system components into a **fully-functional** page/section template that
reproduces a real screen of the consuming app, with its interactions simulated live in Storybook and
proven by `play` tests. This is the phase-2 counterpart to `scaffold-component` (which built the atoms /
molecules / organisms this composes).

The north star: **a reviewer can *use* the template like the real app.** A static mock is a failure — if
the checkout can't add/remove/re-quantity/apply-campaign live, it isn't done.

## Read first (once per template)

- The template's entry in [`TEMPLATE-PROGRESS.md`](../../docs/TEMPLATE-PROGRESS.md) — it names the real app
  source, the scenario, the **interaction checklist**, the **state to simulate**, and the DS components to
  compose. That entry is your spec.
- [`reference/app-flow-map.md`](reference/app-flow-map.md) — the app's flows → screens → **XState machine
  events** (the interaction taxonomy) → DS components, already researched. Use it instead of re-reading the
  whole app; open the actual app file only to confirm a prop shape or an edge case.
- [`reference/state-harness.md`](reference/state-harness.md) — the reducer/harness pattern with a worked
  Checkout example. This is the core technique.
- The conventions in `TEMPLATE-PROGRESS.md` (directory layout, untagged visual, done criteria) — don't
  restate them, follow them.

## Workflow

### 1. Read the real app component and MIRROR its markup (do not invent)

`Spendrups-FrontendApp/` and `legacy/` are **READ-ONLY**, but they are the **source of truth for the
layout** — you have the files, so reproduce the real component's markup exactly instead of guessing from a
description or a screenshot. This is the single most important step; skipping it produces a plausible-but-wrong
template.

- **Follow the render tree to the leaf.** A Sitecore rendering usually delegates: e.g. `sitecore-components/Cart`
  → `components/checkout/desktop-checkout.js` → `checkout-cart/{order-overview,confirm-order,cart-products,…}`.
  Open each until you reach the actual JSX that composes DS components.
- **Copy the exact composition:** which DS components, in what nesting, with which props. The real checkout uses
  `FlexContainer flex='1 1 60%'` (not the `Cart` 3/5 helper), a `BoxWrapper backgroundColor='light'` around the
  left column, `OrderConfirmationDetails` for the summary, `ClickableListItem` + `ExpandableWrapper` for the
  sidebar rows, etc. You would never guess that layout — you read it.
- Note the driving machine's events for the state harness (cross-check `reference/app-flow-map.md`), and the
  prop/data shapes. If the queue entry and the source disagree, trust the source.
- The app is JS (untyped) and may pass props the DS ignores/renames, or app-only CSS classes (`className='h4'`).
  Translate to the DS's typed API + tokens; keep the **structure** identical, adapt the **types**. Where the app
  uses a sub-AA colour (orange links) or a skipped heading level, apply the DS's accessible equivalent (that's a
  deliberate, documented divergence — the a11y gate enforces it).

### 2. Design the state harness (the contract)

Distil the driving machine into a small `useReducer` model — see `reference/state-harness.md`. Rules:

- **Actions are named for the machine's real events** (`ADD_TO_CART`, `UPDATE_CART`, `REMOVE_FROM_CART`,
  `APPLY_CAMPAIGN`, `SET_DELIVERY_DATE`, `ORDER_ITEM_SELECTED`, …) so the harness reads as the machine
  distilled, and the app team can map it back.
- **Derive, don't store, what's computed.** Totals, discounted prices, campaign eligibility, min-order
  gating — compute them from the base state (in the reducer or a selector), exactly as the app derives
  them, so editing one quantity re-computes everything *live*.
- Model only the **essential** transitions the screen shows — not the machine's network/retry plumbing.
  Include the states a reviewer must see: `idle`, `loading`, `error`, `empty`, `submitting`, `complete`.

### 3. Build the stateless composition `src/templates/<Name>/<Name>.tsx`

A pure function of props: **data in, callbacks out, no business logic.** It arranges exported DS components
into the screen and forwards events (`onAddToCart`, `onChangeQuantity`, `onApplyCampaign`, …). Keep it the
way `LoginPage` / `OrderConfirmationPage` are thin shells, just larger.

- **Compose only exported DS components** (`grep` `src/index.ts`). If a piece of UI isn't available, that's
  a gap — record it (step 8), don't re-implement the UI here.
- **Landmarks & outline:** one `<main>`, the shared chrome supplies `<header>`/`<nav>`/`<footer>`, headings
  monotonic. A page template composes the `PageShell` (Flow 0) rather than re-declaring chrome.
- `ref` as a normal prop, `children: ReactNode`, strict types, no `any`, `cn()` for class merges,
  Tailwind semantic tokens only (no arbitrary values). React 19 compiler — no reflexive memo.

### 4. Fixtures — `src/templates/<Name>/<Name>.fixtures.ts`

Deterministic and app-shaped: Swedish copy, **bundled** images (`src/assets/product-images/*`,
`src/assets/placeholders/*`), no network. Reuse `productCardFixtures` / `productCardTemplateFixtures` where
they fit. Product/cart/order/invoice shapes must match what the app factories emit (see the flow map).

### 5. Build the functional stories `src/templates/<Name>/<Name>.stories.tsx`

- A **harness component** holds the reducer and wraps `<Name>`, wiring every callback to a `dispatch`. This
  lives in the stories, not the component.
- Inject a `Link` stand-in for the app router link, and Swedish `labels`/`tooltips`.
- **One story per real screen state** the queue entry lists (default, empty, loading, error, campaign,
  restricted, …). `parameters: { layout: 'fullscreen', controls: { disable: true } }`. **Untagged** (no
  `['visual']`).
- **A `play` test per interaction in the checklist** — this is the spec and the coverage gate. Drive real
  user actions (`userEvent.click`/`type`/`selectOptions`) and assert the *observable* result: the line
  count changed, the total re-computed to the expected number, the campaign ribbon appeared, the error
  announced. Assert on roles + visible/announced text, never internals. Cover every checklist item; a
  missed interaction is an incomplete template.

### 6. Local barrel — `src/templates/<Name>/index.ts`

Add a local `index.ts` (component + prop types) so other templates can import it cleanly (a page template
importing a section template). **Never add a template to `src/index.ts`.** Templates are Storybook-only
reference/integration artifacts, not part of the published library — living in `src/templates/` keeps them
type-checked and Storybook-visible, while the Vite lib build (entry `src/index.ts` only) excludes anything
unreachable from there, so no template code ships. Exporting one would leak an app-specific composition
into the public API.

### 7. Verify

- `pnpm build` — `tsc --noEmit` ×2 + Vite lib build; zero TS errors.
- `pnpm exec vitest run --project=storybook src/templates/<Name>/<Name>.stories.tsx` — the template's
  interaction + a11y run. Use the exact story-file path (a bare dir prefix can also match a longer sibling
  name). **The a11y addon is in `error` mode** — axe fails any story on a violation, so fix composition
  landmarks / heading order / labels, or record the offending component as a gap.
- `pnpm build-storybook` once per batch (docgen check).
- `pnpm test-storybook` for the batch when several templates land together.

### 8. Update the log + record gaps

Flip the template's `[ ]` → `[x]` in `TEMPLATE-PROGRESS.md`, add a one-line note (what it composes, which
states, notable decisions), and update the counts in _Current Status_ + the flow header. **Every gap** you
hit — a missing prop, a component that can't express an interaction, an a11y conflict at composition scale —
goes under _Findings & gaps_ with a concrete proposed fix. That backlog is a primary deliverable of this
phase, so don't paper over a gap by re-implementing UI in the template.

## Gotchas that bite

- **A static template is not done.** If a `play` test only asserts something rendered (not that an
  interaction changed it), the interaction isn't covered. The reducer + live `play` assertions are the
  whole point.
- **Don't import app infrastructure.** No XState, no redux, no i18next, no app factories — reproduce the
  essential state locally. Pulling them in couples the library to one app and usually fails the lib build.
- **a11y is composition-scale here.** Individual components pass axe in isolation, but a *page* can still
  fail: two `<nav>`s without names, an `<h2>` following an `<h4>`, a second `role="main"`. Give landmarks
  accessible names, keep one `<main>`, and manage focus for any dialog/drawer the flow opens.
- **Totals must be live.** Hard-coding a total string defeats the simulation. Derive it so the quantity
  stepper moves it (the `ControlledLine` precedent).
- **Reuse section templates in page templates.** Build sections first (the queue is ordered that way); a
  page composes them + `PageShell`, it doesn't rebuild them.
- **Reducer purity for capture.** No `Date.now()`/`Math.random()` in render paths that a captured story
  depends on — keep frames deterministic.

## Sources of truth

- [`TEMPLATE-PROGRESS.md`](../../docs/TEMPLATE-PROGRESS.md) — the queue, conventions, done criteria, and the
  findings/gaps backlog. Drive everything from here and keep it current.
- [`reference/app-flow-map.md`](reference/app-flow-map.md) — app flows → machines/events → DS components.
- [`reference/state-harness.md`](reference/state-harness.md) — the reducer/harness pattern + worked example.
- `scaffold-component` skill + `docs/DEVELOPMENT.md` — the component-level conventions the composition inherits.
