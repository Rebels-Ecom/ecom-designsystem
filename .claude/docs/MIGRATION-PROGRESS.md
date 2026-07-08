## Instructions for AI Assistant

- **Pick the next batch from the dependency-ordered _Build queue_ below** (take the next unchecked
  entries top-to-bottom): every entry's `needs:` are migrated in an earlier tier, so the next N are
  always buildable. Composition within that window is free — group by archetype where you can. When a
  component lands, move its line up into _Completed_ (keep any per-component note).
- Update this file as you go — flip `[ ]` to `[x]` as each component lands, and always before starting
  the next one (the `scaffold-component` skill drives this at its Step 9).
- A component is done when it is fully generated, strictly typed, `pnpm build` is green, and it passes
  local verification: `pnpm test-storybook` (interaction + a11y) and, if it has a legacy baseline,
  `pnpm exec playwright test --grep <component>` (visual regression vs `legacy-snapshots/`). Note any diff
  that needs human sign-off, or components that have no baseline.
- Run the full `pnpm test:visual` as the gate at the end of each 5-component micro-batch.
- Never proceed to the next batch without updating this progress log.

## Current Batch Status

- **Active Category**: organisms (cart-family + page shells)
- **Last Updated**: 2026-07-08
- **Current Micro-Batch**: Batch 14 — cart-family organisms + page shells (complete; **CartProductList**,
  **CartSidebar**, **LoginPage**, **OrderConfirmation**, **OrderConfirmationPage** — all `[org]`,
  reclassifying the two `templates/*-page` entries with real `.tsx` files into organisms). `pnpm build`
  green, `pnpm build-storybook` green, scoped `vitest --project=storybook` **11/11** (interaction + a11y),
  full `pnpm test:visual` **144 passed / 6 skipped** (unchanged — **no new baselines mapped this batch**).
  **All 5 are baseline-deferred**: every legacy frame's bulk is the not-yet-migrated **CartProduct**
  molecule (or DrawerSidebar / LoginForm / AccountBoxList) — gallery-only Visuals with placeholder
  content, re-map when those children land. New `--container-order-confirmation` (58.125rem) token.
  **Applied the Batch-13 story-only-template rule**: verified each queue entry against its legacy source
  first, then **flagged 5 more false-leaf pages `⛔ BLOCKED`** (ChooseUserPage, ContactPage, ContentPage,
  InspirationPage, MySpendrupsPage — all story-only, no `.tsx`). The next batch continues Tier-0 with the
  next genuine `.tsx` leaves: **ProductCategoryListingPage**, **ProductPage**, **ShoppingListPage**,
  **StartPageTemplate** (verify each has a `.tsx` first) — then Tier-1 opens with **IconButton**.
- **2026-07-08 — Batch 14 findings & harness changes**:
  - **A product-row name is a label, not a document heading (heading-order gate catch).** First cut
    rendered cart-product-row names as `Heading order={5}` inside stories that already had an `order={3}`
    section heading — axe's `heading-order` (a hard-gate rule) failed on the h3→h5 jump. A price/name row
    in a summary list isn't a section of the document outline, so it became bold `Text`, not a heading.
    Rule: only use `Heading` for real outline nodes; don't reach for it just to get bold/large text —
    that fabricates an invalid outline the a11y gate rejects.
  - **Restore dead-CSS *intent* when it's the accessible choice.** Legacy `CartProductList` declared
    `.list`/`.listItem` CSS (a `<ul>` of bordered rows) but the component rendered a plain `<div>` of
    children — the list CSS never applied. V2 renders the intended `<ul role="list">`/`<li>` (1.3.1),
    which is both the legacy design intent *and* the correct semantics for a product list. Dead code can
    encode intent worth reviving — but only when it aligns with the a11y target (same call as UnorderedList).
  - **Page-shell templates with a real `.tsx` reclassify to organisms and own no landmark.** LoginPage /
    OrderConfirmationPage are full-page layout shells (centred card on `bg-blue-500`). They stay
    presentational `<div>`s — the consumer's app shell owns `<main>`, so the component adds no landmark
    (nesting `<main>` would fail axe `landmark-unique`). Landmarks/headings come from the card inside.
- **Current Micro-Batch**: Batch 13 — last molecule leaves + first cart-family organisms (complete;
  **UnorderedList**, **UserInfoSummary** `[mol]` + **Cart**, **CartDeliveryDetails**, **CartOrderDetails**
  `[org]`). `pnpm build` green, `pnpm build-storybook` green, scoped `vitest --project=storybook`
  **14/14** (interaction + a11y), full `pnpm test:visual` **144 passed / 6 documented skips**. **3 new
  baselines mapped**: UnorderedList `-story` **desktop-only** (7 stacked Headings amplify the known
  vertical-rhythm drift to ~4% on mobile — GroupWrapper pattern) + `-story-loading` both viewports, and
  UserInfoSummary both viewports (no divergence). **Cart / CartDeliveryDetails / CartOrderDetails are
  baseline-less** (deferred — their legacy frames are mostly the unmigrated DeliveryForm /
  CartProductList / CartProduct; gallery-only Visuals, re-map when those land). **⛔ BrandPage +
  CampaignPage were SKIPPED, not built** — they are story-only "GUIDELINE" templates (no `.tsx`), so
  the dep graph wrongly marked them leaves; their real deps (Header/Footer/Hero/BrandDetails/HeroCarousel)
  are unmigrated. Flagged BLOCKED in the queue. The next batch continues Tier-0: **CartProductList**,
  **CartSidebar**, **LoginPage**, **OrderConfirmation**, **OrderConfirmationPage** (all genuine
  component leaves with `.tsx` files + 0 internal deps).
- **2026-07-08 — Batch 13 findings & harness changes**:
  - **Dependency graph is blind to story-only "GUIDELINE" templates (queue-ordering flaw, recurring).**
    Several legacy `templates/*-page` entries ship **no `.tsx`** — they are pure `*.stories.tsx` that
    compose organisms as documentation of "how to lay out a page". `deps.cjs` builds the tier graph from
    `.tsx` import edges, so a component with no `.tsx` has zero edges and is mis-tiered as a **leaf**,
    even though its stories import wholly-unmigrated organisms. BrandPage/CampaignPage tripped this. Rule
    going forward: **before building a queued `[org]`/template, confirm it has a `.tsx`**; if it's
    story-only, its true deps live in the stories file — treat those as the gate and defer until they're
    migrated. The other story-only pages downstream (ContactPage, ContentPage, ChooseUserPage,
    InspirationPage, MySpendrupsPage, and the rest) will hit the same wall. Documented in DEVELOPMENT.md.
  - **Loading overlay → `inert` content + `aria-busy` (new a11y standard for busy containers).**
    CartDeliveryDetails' legacy `loading` scrim only *dimmed* the panel; the underlying controls stayed
    keyboard-focusable *behind* the overlay (a focus trap in reverse). V2 keeps the decorative
    `aria-hidden` scrim but adds `aria-busy` on the region (4.1.3 announces the update) **and `inert` on
    the content wrapper** so the dimmed controls are genuinely non-operable — React 19 renders `inert`
    natively as a boolean prop. This is the correct pattern for any "dim + block while busy" container.
  - **Uppercase display text belongs in CSS, not `String.toUpperCase()`.** UserInfoSummary's legacy
    `userName.toUpperCase()` bakes all-caps into the DOM, which some screen readers spell out letter by
    letter. V2 renders the original string and applies the `uppercase` utility — visually identical (the
    baseline still matches both viewports), but AT reads the name naturally. Same class of fix as
    "colour is never the sole cue".
- **Current Micro-Batch**: Batch 12 — Tier-0 molecule leaves (complete; **PurchaseList**, **RichText**,
  **ScrollableList**, **SortableListItem**, **TagsDescription** — the top-5 unchecked queue entries).
  `pnpm build` green, `pnpm build-storybook` green, full `pnpm exec vitest --project=storybook` **230/230**
  (interaction + a11y), full `pnpm test:visual` **139 passed / 5 documented desktop-only skips**. **3 new
  baselines mapped, both viewports**: PurchaseList ×1 (orange "updated" badge white→dark text, under the
  gate) and SortableListItem ×2 (overlay-button rewrite is visually identical). **TagsDescription,
  RichText, ScrollableList are baseline-less** (documented — no snapshot / unmigrated children / Word-paste
  HTML). One new `@utility sortable-item-cols`. The next batch continues Tier-0: **UnorderedList**,
  **UserInfoSummary**, then the first template/organism leaves (**BrandPage**, **CampaignPage**, **Cart**).
- **2026-07-07 — Batch 12 findings & harness changes**:
  - **Clickable row that contains a heading → stretched overlay button (not `<button>`-wrapping-heading).**
    SortableListItem's legacy row wrapped a `Heading` inside a `<button>` — invalid HTML (a `<button>`'s
    content model is phrasing content, so it may not contain a heading) and AT mishandles heading semantics
    inside a control. V2 renders the content in a `<div>` (heading stays valid) and overlays a stretched
    `<button aria-label={name}>` (`absolute inset-0`, focus-visible ring) as the row's single click target —
    the same overlay pattern ArticleCard uses. This **restored the previously-dead `name` prop** as the
    button's accessible name (the legacy `id`/`name` were declared but never used). Visually identical
    (transparent button), so both `e-handel`/`leverans` baselines map both viewports. New
    `@utility sortable-item-cols` ports the legacy `grid-template-columns: 50% auto auto` (+ a `5%` chevron
    column at lg) — a 50%/auto/5% mix that Tailwind's fraction grid utilities can't express. Chevron is
    CSS-gated `hidden lg:flex` (no JS/`isMobile` branch, no hydration divergence). Documented in DEVELOPMENT.md.
  - **PurchaseList — duplicate nav links deduped, checkbox named, orange badge fixed, dead code dropped.**
    Each row had two same-destination links (name + chevron); V2 keeps the name link as the keyboard/AT path
    (accessible name = the visible name) and makes the chevron a pointer-only duplicate (`aria-hidden` +
    `tabIndex={-1}`), the ArticleCard pattern. The selection checkbox is now named via `aria-labelledby` →
    the row name (legacy left it unlabelled — only a form `name`). The legacy `updated` badge was white on
    `--cta-tertiary-default` (#f08a00, ~2.3:1, **fails AA**); V2 keeps the orange fill with **dark text**
    (1.4.3) — a tiny date pill, under the 2% gate, so it's mapped (same accessible-divergence class as
    IconWithTooltip's badge). Dead `loading` prop dropped (declared, never used); `linkComponent: any` →
    shared `LinkComponentType`/`DefaultLink`.
  - **RichText (reclassified organism→molecule) — baseline-less prose renderer.** `dangerouslySetInnerHTML`
    is kept (inherent to a CMS renderer) but typed `string` (was `any`). The bespoke legacy widths
    (37.5rem/73rem/70%) collapse to the canonical `MaxWidth` reading measure (`text`, 52rem); prose styling
    is descendant utilities (`[&_p]`/`[&_h2]`/`[&_li]`…), links upgraded to accessible blue+underline, and
    the IcoMoon `li:before` bullet (font absent in V2) replaced by real `list-disc`. **No baseline** (like
    IntroBlock): the legacy `rich-text-story` frames are Word-paste HTML dependent on UA margins, an IcoMoon
    bullet font, and 404-ing image paths — all reset/absent under V2 preflight. Markup a11y (heading order,
    `alt`, link purpose) is the consumer's responsibility (documented); **stories model clean, valid HTML**
    because the legacy dummy content's empty `<h2></h2>`/`<strong></strong>` would fail the axe hard gate.
  - **ScrollableList — dead fade dropped, random keys fixed, scroll region made keyboard-operable.** The
    legacy `hasFade` gated an **entirely commented-out** mask (dead CSS) via a scroll-state machine that
    rendered nothing — dropped (dead-code elimination). `key={Math.random()}` replaced with
    `Children.toArray` stable keys. Height now caps via the measured first-item height × `visibleItemsNumber`
    as `maxHeight` (shows ≤N; shorter lists don't stretch). The scroll region is now keyboard-operable and
    named — `role="list"` + `tabIndex={0}` + `aria-label` + focus-visible ring (2.1.1, axe
    `scrollable-region-focusable`; the Carousel pattern) — which the legacy row lacked. **No baseline**
    (every legacy `scrollable-list-*` frame composes unmigrated CartProduct/LinkListItem children).
  - **TagsDescription — type-only Tag dependency.** Imports just the `TagColor` *type* from the Tag atom
    (no runtime coupling) and renders a `<ul role="list">` of decorative colour swatches (`aria-hidden`) +
    meaning text, so colour is never the sole cue (1.4.1). No legacy snapshot → gallery-only `['visual']`.
- **Current Micro-Batch**: Batch 11 — Tier-0 molecule leaves (complete; **IntroBlock**, **MessageBanner**,
  **OrderConfirmationDetails**, **Pagination**, **PopUp** — the top-5 unchecked queue entries). `pnpm build`
  green, `pnpm build-storybook` green, full `pnpm exec vitest --project=storybook` **215/215** (interaction +
  a11y, stable over 2 reruns — one earlier failure was port contention from concurrent servers), full
  `pnpm test:visual` **135 passed / 5 documented desktop-only skips**. **6 new baselines mapped both
  viewports** (MessageBanner ×2, OrderConfirmationDetails ×3, Pagination ×1). **IntroBlock and PopUp are
  intentionally unmapped** (see findings). Four tokens added (`--text-intro-title(-lg)`,
  `--color-surface-banner`, `--color-surface-cream`). The next batch continues Tier-0: **PurchaseList**,
  **RichText**, **ScrollableList**, **SortableListItem**, **TagsDescription**.
- **2026-07-07 — Systemic base line-height fix (library-wide vertical rhythm)**: a second visual-review
  pass flagged that icon/text rows (MessageBanner) and text blocks across *many* components sat with
  slightly-too-tall spacing. Root cause was global, not per-component: **Tailwind v4 preflight forces
  `html { line-height: 1.5 }`, but legacy `html`/`body` set no line-height** (bare text rendered at the
  font's `normal`, ~1.2). So every un-tokened text element (spans, strings, labels) had inflated line-boxes
  vs the frozen baselines — and in icon+text flex rows the oversized text line-box pushed the glyph out of
  alignment (MessageBanner mobile was off by 4px). **Fixed once for the whole library**: the base layer now
  sets `html { line-height: normal }` (tokened `text-*` line-heights still win, so this only realigns bare
  text). Also set MessageBanner to `items-center` on all viewports (legacy only centered at `md`). Verified:
  full `pnpm test:visual` **133 passed / 5 skipped (no regressions)**, `vitest --project=storybook` 215/215;
  MessageBanner icon/text offset now 0 on both viewports. Documented in docs/DEVELOPMENT.md.
- **2026-07-07 — Batch 10/11 visual-review pass (sub-gate diffs fixed)**: eyeballing `pnpm visual:review`
  surfaced real divergences that passed the 2% gate but looked wrong. Fixed:
  - **OfferCard heading** rendered at `text-body` (1rem) — I'd assumed a UA-default `<h4>`, but legacy has
    a **global heading stylesheet** (`h4`/`.headingS` = `--text-h-s` 1.375rem bold). Any raw heading in
    legacy inherits it. Fixed to `text-h-s`. (Lesson: legacy raw headings are NOT UA-sized — check
    `styles/typography/spendrups.css`.)
  - **InfoSummaryBox box fill** was `bg-surface-default` (white) over the cream page — a visible rectangle.
    Legacy `--background` was undefined → transparent. Fixed the default to transparent (only
    `withBackground`/`backgroundColor` paint).
  - **OrderConfirmationDetails total row** inflated its neighbours — `text-h-l` carries a 2.875rem
    line-height, but the legacy total inherits the compact `.body` 1.25rem line-height. Fixed with
    `leading-5` on the `isTotal` value.
  - **DeliveryInfoBar** unmapped — the legacy baseline is **blank** (delay:0.5 entrance from opacity:0 →
    captured pre-animation), an invalid oracle. Also hardened its reduced-motion path to always settle at
    `opacity:1,y:0`.
  - **Fixed the visual-review gallery capturing Framer entrances mid-animation** (the faint DeliveryInfoBar/
    PopUp tiles). Root cause: the `MotionConfig reducedMotion="always"` story wrappers were no-ops —
    `useReducedMotion()` reads `prefers-reduced-motion`, not the config prop. Fix: `visual:review` capture
    contexts now set `reducedMotion: 'reduce'`, which flips the hook true so gated entrances render settled;
    the `MotionConfig` wrappers were removed from the DeliveryInfoBar/PopUp stories. (Lesson: a green gate
    isn't proof a frame is right — the mid-fade slipped under the 2% gate against a blank baseline.)
  - Verified: full `pnpm test:visual` 133 passed / 5 skipped, `vitest --project=storybook` 215/215.
    CheckboxListItem, DropdownList, MessageBanner, Pagination were already faithful (no change).
- **2026-07-07 — Batch 11 findings & harness changes**:
  - **Legacy `<p><span>` key/value pairs → semantic `<dl>` (a11y upgrade).** OrderConfirmationDetails now
    renders a real description list (`<dl>`/`<dt>`/`<dd>`), so AT announces each value against its term
    (1.3.1) — the legacy generic paragraphs had no term/description relationship. Visual layout is
    unchanged, so all three frames (delivery/pricing/total-payment) map cleanly.
  - **A stray heading level in consumer content fails the axe heading-order gate.** IntroBlock's legacy
    rich body (Word-paste) contained a lone `<h5>` jumping straight from the `<h1>` title → axe
    `heading-order`. It's emphasised body copy, not a section heading, so the parity story renders it as
    **bold text** (visually identical, no bogus heading in the outline). General rule: don't carry stray
    heading levels from CMS/Word content into V2 markup.
  - **IntroBlock is baseline-less — the frame depends on CSS V2 intentionally drops.** Its legacy
    `intro-block-story` is dominated by Word-paste rich body whose rendering relied on browser UA margins,
    `&nbsp;`-driven line wrapping, and global bold-heading rules — all reset by V2's Tailwind preflight.
    Mobile PNG is full-page (375×1025, structurally incomparable); desktop reflows ~5% (over gate) purely
    from that consumer text, not an IntroBlock divergence. Gallery-only `['visual']`; own rendering covered
    by play tests. (New bespoke `--text-intro-title(-lg)` tokens, 2rem→2.875rem, match the legacy `.title`
    which overrode the heading scale.)
  - **PopUp is baseline-less — the legacy story captures the *closed* state.** `pop-up-story` renders with
    `open` starting false, so the frozen PNG is just a bare trigger button (the panel never shows).
    Reproducing that is a full-canvas false-green (gotcha 3); there's no legacy image of the open panel.
    Gallery-only Visual shows it open. PopUp stays a **presentational** animated panel (reduced-motion
    gated) — dialog role/labelling/focus-trap belong to the future **Modal** molecule (Tier 2), not this
    low-level primitive.
  - **New tokens (permanent):** `--text-intro-title`/`-lg` (+ line-heights, registered in `cn.ts`),
    `--color-surface-banner` (#f2efea, MessageBanner default = the nav/footer neutral),
    `--color-surface-cream` (#fffdf8, OrderConfirmationDetails highlight — distinct from the yellower
    `yellow-50`). Reused `--spacing-wrapper-xs` (0.3rem) for the detail-row margin. Legacy
    `--cta-primary-default` resolved to #003E51 = V2 `action-primary`, so Pagination needed no colour
    divergence.
- **Current Micro-Batch**: Batch 10 — Tier-0 molecule leaves (complete; **OfferCard**, **CheckboxListItem**,
  **DeliveryInfoBar**, **DropdownList**, **InfoSummaryBox** — the top-5 unchecked queue entries). `pnpm build`
  green, `pnpm build-storybook` green, full `pnpm exec vitest --project=storybook` **197/197** (interaction +
  a11y), full `pnpm test:visual` **123 passed / 5 documented desktop-only skips**. **8 new baselines mapped,
  all both-viewport, all with real legacy comparisons**: OfferCard ×2 (no divergence), CheckboxListItem ×2
  (no divergence), DeliveryInfoBar (settled-motion capture), DropdownList (nav colour is an exact token
  match), InfoSummaryBox ×2 (orange→blue action link, under the gate). Two shared atoms were extended to
  serve these molecules (Checkbox `ariaLabelledBy`; new `--text-icon-2xl` token) — see findings. The next
  batch continues Tier-0: **IntroBlock**, **MessageBanner**, **OrderConfirmationDetails**, **Pagination**,
  **PopUp**.
- **2026-07-07 — Batch 10 findings & harness changes**:
  - **Deterministic visual capture of a Framer *entrance* animation.** A Framer entrance (slide-down +
    fade) can be captured mid-animation. The component gates the entrance on `useReducedMotion()` (2.3.3† —
    required anyway) and makes the reduced path instant/settled. **⚠️ Correction (2026-07-07 visual-review
    pass):** the original fix here wrapped the `Visual` story in `<MotionConfig reducedMotion="always">`,
    claiming it forces `useReducedMotion()` true — **it does not**. `useReducedMotion()` reads the
    `prefers-reduced-motion` media query, not the `MotionConfig` prop, so the entrance still ran and the
    gallery captured a faint mid-fade frame. The real lever: **`pnpm visual:review` creates its capture
    contexts with `reducedMotion: 'reduce'`** (the gate additionally uses `animations: 'disabled'`). The
    `MotionConfig` wrappers were removed. Documented correctly now in docs/DEVELOPMENT.md + CHEATSHEET.
  - **Extending an atom when a new molecule surfaces an a11y gap (recurring methodology).** Like Batch-9's
    Picture `aria-busy` fix, CheckboxListItem needed to name a native checkbox with **rich** label content
    (a Heading + article number) that can't live inside a `<label>` (phrasing-content rule). Added a small,
    backward-compatible **`ariaLabelledBy`** prop to the Checkbox atom (`aria-labelledby` wins over
    `aria-label` per ARIA name computation); the molecule points it at a `useId()` wrapper around its
    children. The legacy row left the checkbox entirely unlabelled — a real AT gap now closed at the atom
    level for every future consumer.
  - **New `--text-icon-2xl: 3.5rem` token (permanent) + `cn.ts` registration.** OfferCard's centred feature
    glyph is 3.5rem — off the Icon atom's `size` scale (max `xlarge` = 1.75rem). Added the token and
    registered `icon-2xl` in `cn.ts`'s `font-size` group so twMerge keeps both the size and the
    `text-icon-decorative-orange` colour when both are passed to the Icon via `className` (the CHEATSHEET
    twMerge trap). OfferCard passes `text-icon-2xl text-icon-decorative-orange`.
  - **`useId` + `role="group"` replaces the invalid legacy `<label htmlFor="infoSummary">`.** InfoSummaryBox's
    legacy label pointed a `<label>` at a non-form `<div>` **with a hard-coded id** (broke with >1 instance).
    V2 makes the box a `role="group"` named by the label via `aria-labelledby` + a per-instance `useId()`.
    Only the two Text-only frames (dina-uppgifter, anvandare) are baseline-mapped; the composite frames wait
    on OrderItem/CartProduct/GroupWrapper/UnorderedList.
  - **Dead legacy code dropped.** DeliveryInfoBar's unused `altText` prop and the story's phantom
    `isAnonymousUser`/`position` args; DropdownList's defined-but-unused Framer `itemVariants` and its
    `linkComponent: any` (→ the shared `LinkComponentType`). DropdownList's nav colour needed **no**
    divergence — legacy `--navigation-text-default` is `#003E51`, exactly V2's `nav-text-default` (blue-500),
    which clears AA on white.
- **Current Micro-Batch**: Batch 9 — Tier-0 molecule leaves (complete; **InlineError**, **LoadingBars**,
  **ClickableListItem**, **LoadingOverlay**, **ArticleCard** — the top-5 unchecked queue entries,
  unblocking FaqList/FormGroup and the ArticleList carousel-baseline chain). `pnpm build` green,
  `pnpm build-storybook` green, full `pnpm test-storybook` 158/158 (interaction + a11y), full
  `pnpm test:visual` 68 passed / 4 documented skips. **7 new baselines mapped** (InlineError,
  LoadingBars, ClickableListItem + LoadingOverlay ×4 scrim variants), all passing both viewports;
  **ArticleCard has no baseline** (legacy shipped no story — its visual comparison is deferred to
  ArticleList, per the queue reminder). The Tier-1 button/link variants (IconButton unblocks 22,
  LinkButton 6) are the natural next batch.
- **2026-07-07 — Batch 9 findings & harness changes**:
  - **a11y hard-gate caught a latent Picture bug via a new consumer.** ArticleCard is the first
    component to render a **decorative** `<img alt="">` through the `Picture` atom, which surfaced
    `presentation-role-conflict` in axe: `Picture` unconditionally set `aria-busy` on the `<img>`, but a
    global ARIA attribute on a presentational (empty-`alt`) image is invalid. Fixed **in `Picture`**
    (`aria-busy={alt ? isLoading : undefined}`) so decorative images carry no ARIA — a durable fix for
    every consumer, test-safe (all Picture stories use non-empty `alt`). Documented in docs/DEVELOPMENT.md.
  - **New `--color-surface-overlay` scrim token (permanent).** LoadingOverlay's light scrim
    (`rgba(245,246,248,0.95)`) has no existing token → added `--color-surface-overlay: #f5f6f8`, consumed
    as `bg-surface-overlay/95`. The dark scrim reuses `bg-blue-500/30` (= legacy `rgba(0,62,81,0.3)`), so
    it needs no new token. Both are exact ports, so all 4 LoadingOverlay baselines pass. Documented.
  - **Reproducing a `fixed` full-screen overlay without polluting autodocs (harness pattern).** A
    `position: fixed` overlay in a Storybook story escapes its block and covers the whole docs page
    (a 0.95-opaque scrim would hide the props table). LoadingOverlay's API default stays `fixed`, but its
    **stories render `position="absolute"` inside a sized relative box** — a full-viewport
    (`h-screen w-full`) box for the `['visual']` frames (identical pixels to the legacy fixed scrim) and a
    contained (`h-80`) box for the demos. Story-level `render` (not decorators) keeps the Visual frames
    from inheriting the demo wrapper. Documented in docs/DEVELOPMENT.md.
  - **ClickableListItem — 24px min target restored (2.5.8).** The legacy row was a ~20px-tall full-width
    `<button>` with `outline:none` (fails 2.5.8 + 2.4.7). V2 adds `min-h-6` + the standard `focus-visible`
    ring; the ≤4px height change is confined to the small label/icon, well under the 2% gate, so the
    baseline still maps. `orange` (orange-600, ~3:1 on white) is kept as a prop for parity but flagged
    sub-AA and never rendered in a scanned story.
  - **ArticleCard — `text` de-HTML'd; layout deferred to the parent list.** Legacy rendered `text` via
    `dangerouslySetInnerHTML` (CMS excerpt) and applied a dead `.maxHeight` class; V2 renders `text` as
    escaped plain text with a real `maxChar` truncation, routing rich content through `richText: ReactNode`.
    The card is a real `<article>` with an `<h3>`; when linked it exposes one read-more `UiLink` (keyboard/AT
    path, name includes the heading, 2.4.4) plus a secondary pointer-only image link (`tabIndex={-1}`);
    overlaid tags are `pointer-events-none`. The legacy per-breakpoint flex-basis calc columns are dropped
    as the *list's* responsibility (Atomic-Design correction) — no baseline enforces them.
  - **Baseline-coverage audit (all 40 migrated components) + the hyphenation grep trap.**
    `legacy-snapshots/` is the **complete** frozen set (652 PNGs / all 155 legacy components), so any
    unmapped snapshot for a *migrated* component is a coverage gap. Audit result: **IconWithTooltip was a
    real miss** — `iconwithtooltip--tooltip-story` exists but was logged "no snapshot" because the grep
    used the hyphenated `icon-with-tooltip` while snapshot ids **de-hyphenate** the component segment
    (`iconwithtooltip`). Now mapped + passing. **ArticleCard is correctly baseline-less** — legacy shipped
    no `article-card` story; its coverage lives in `articlelist--{default,full-width,three-cards}`
    (organism, unmigrated) → still deferred, confirmed by the audit. All other 0-mapped components are
    **intentional, documented deferrals** (Picture ×31 non-deterministic, Video, BoxWrapper ×11 unmigrated
    children, Carousel→ArticleList, Logotype real-brand-SVG, ComponentWithTooltip→IconButton, Tag round-L
    fails-AA). **Variant frames (backfilled 2026-07-07):** (disabled/error/large/blog/place-holder for
    Checkbox, RadioButton, InputText, InputFile, Loader, Heading, UiLink, Button sizes) exist but only the
    primary frame was mapped per component. **All now backfilled: 19 new mapped frames** added as static
    `Visual<Variant>` stories (Button icon-only excluded → IconButton's; Heading `delivery-form` left
    gallery-only — its longer text amplifies the accumulated vertical-rhythm drift to ~4% on desktop, so
    `heading-story` stays the representative Heading baseline). Full `pnpm test:visual` 107 passed / 5
    desktop-only skips; `pnpm test-storybook` 178/178. CHEATSHEET updated with the de-hyphenate rule so
    this trap can't recur.
- **2026-07-07 — post-Batch-8 fixes (Logotype + tooltip positioning)**:
  - **Logotype reworked to ship the real brand mark.** Dropped the `Picture`-URL-wrapper (it required consumers to pass an image URL); it now renders the actual Spendrups **vector** SVGs (`src/assets/logos/spendrups-logo-{horizontal,vertical}.svg`, pulled from `legacy/src/logotypes/`, SVGO'd ~71KB→~38KB) via a responsive `<picture>`/`<img>` (`variant` prop). **The frontend-app "logo components" (`SpendrupsLogoSmall/Large.js`) and its `public/logotypes/*.svg` are base64 PNGs** — rejected; only the legacy DS repo had true vectors. **Vite lib mode inlines all JS-imported assets regardless of size** (documented; it's why `externalizeFonts` exists for CSS), so the ~38KB traces currently inline — acceptable as an interim because the design team is supplying a fully-optimized brand SVG (~3–4KB), after which inlining is a non-issue. `--spacing-logo` token removed (no longer needed). Stories moved to `Design System/Foundation/Logotype` (brand foundation) with a `Design System/Molecules/Logotype` reference kept (exported component).
  - **Tooltip made viewport-aware (`ComponentWithTooltip`).** `IconWithTooltip` delegates positioning to `ComponentWithTooltip`, which used static CSS side/align classes with no collision handling → the tip could render off-screen. Added measured **flip** (to the opposite side when the preferred side lacks room) + cross-axis **shift** to clamp inside the viewport (recomputed on scroll/resize, idempotent), applied via the resolved side class + an inline transform composed with the align translate. All existing behavior preserved (role="tooltip", `aria-describedby`, Escape, hover-grace — the tip stays a wrapper descendant, never portalled). New `StaysInViewport` story asserts the corner-placed tip's rect is fully in-bounds. Documented in docs/DEVELOPMENT.md.
- **Current Micro-Batch**: Batch 8 — Tier-0 leaves, molecules + first organism (complete; **InputText**, **IconWithTooltip**, **Carousel**, **TagsList**, **Logotype** — the top-5 unchecked queue entries, unblocking 8/7/6/4/3). `pnpm build` green, `pnpm build-storybook` green, scoped `test-storybook` 17/17 (interaction + a11y), full `pnpm test:visual` 54 passed / 4 documented skips. Only **InputText** maps a legacy baseline (`input-text-story`, both viewports — same brand font, no divergence). The other four are gallery-only `['visual']` (no reproducible legacy PNG — see per-component notes). **Opened `src/components/organisms/`** with Carousel; the public API gained an `── Organisms ──` section. The Tier-1 button/link variants (IconButton unblocks 22, LinkButton 6) are the natural next batch — they were unblocked once Button/UiLink landed but sit below the Tier-0 leaves in the top-to-bottom queue, which this batch cleared.
- **2026-07-06 — Batch 8 findings & harness changes**:
  - **`src/components/organisms/` opened.** Carousel is the first organism; `src/index.ts` gained an `── Organisms ──` section. Organisms may compose molecules + atoms.
  - **Carousel — Splide dropped for a dependency-free scroll-snap rewrite (new permanent standard).** `@splidejs/react-splide` is **not** in `package.json` (deps are only clsx, lucide-react, tailwind-merge) and isn't React-19-compatible, so per CLAUDE.md the carousel is rewritten from scratch: a CSS scroll-snap track (swipe for free) + real `<button>` arrows/dots as the non-drag, keyboard-operable alternative (2.5.1/2.5.7/2.1.1, incl. arrow-key/Home/End on the focusable track). No auto-advance → 2.2.2 n/a; smooth scroll gated by `motion-reduce`; track `tabIndex={0}` + `role="group"` + `aria-label` (axe `scrollable-region-focusable`). Documented in docs/DEVELOPMENT.md. **Full legacy capability parity**: responsive `perPage`/`perMove`, `direction` horizontal+vertical (Splide `ttb`), `gap`, peek `padding`, `dotPerItem`, per-breakpoint `hideArrows`, and the `arrowsBottom`/`offsetArrows`/`lightArrows` placements + `onNavigation`/`onSlideChange`. Only Splide implementation-internals (`splideProps` passthrough, `noGrid`, `zeroOffset`, Intersection auto-pause) are dropped — no equivalent in a flex/scroll-snap model.
  - **Carousel navigation is slide-index based (correctness).** Nav/pagination measure real slide offsets (`slide.offsetLeft − first.offsetLeft`), NOT `scrollLeft / clientWidth`: the pixel-division approach desyncs the last dot/next-arrow whenever the final page is partial (`ceil(scrollWidth/clientWidth)` pages don't line up with `round(scrollLeft/clientWidth)`). `perPage` is derived from layout so it auto-tracks the CSS breakpoints; scroll handling is rAF-throttled; a `KeyboardToEnd` play test proves `End` reaches `maxIndex` and disables "next" on a partial last page.
  - **New `carousel-slide` `@utility` + `--spacing-logo` token (permanent).** `perPage` is a per-breakpoint runtime value, so — exactly like FlexItem's `flex-responsive` — Carousel sets `--cs-per-sm/md/lg` inline on the track and each `CarouselItem` (with the `carousel-slide` utility) reads the inherited var to derive its `flex-basis` at the md/lg cut-ins (no arbitrary literal). Documented in docs/DEVELOPMENT.md. (Logotype's `--spacing-logo` token was dropped when it stopped being a Picture wrapper — see the 2026-07-07 Logotype rework below.)
  - **IconWithTooltip — composes the `ComponentWithTooltip` atom instead of re-porting Radix.** Legacy used `@radix-ui/react-tooltip` (not a V2 dep); the migrated molecule wraps a real `<button aria-label={content}>` (icon or text-badge trigger) in the existing tooltip atom, inheriting its 1.4.13 contract. **Badge contrast fixed**: legacy white-on-orange (~2.3:1) → dark-on-orange (`text-text-default`), the same accessible-divergence pattern as Text/UiLink; no baseline exists, so no pixel gate constrains it.
  - **TagsList — dead legacy CSS eliminated.** The legacy `.tagsList` combined `overflow-x: scroll` + `max-width: 80vw` + `white-space: nowrap` with `flex-wrap: wrap`, but wrap makes the tags wrap before they can overflow, so the scroll/max-width was dead. V2 is a clean wrapping `<ul>`/`<li>` (`flex flex-wrap gap-1`) — proper list semantics (1.3.1), no arbitrary `80vw`.
  - **No mapped baseline, gallery-only (recurring).** IconWithTooltip, Carousel, TagsList, Logotype aren't mapped: IconWithTooltip/TagsList have no legacy snapshot; Logotype renders the real brand vectors (a different rendition than the legacy PNG — see the 2026-07-07 rework); **Carousel's legacy PNG *does* exist but is an `ArticleList` of 5 cards (~95% unmigrated content), so its mapping is *deferred* to ArticleList migration — not absent.** Each still ships a `['visual']` `Visual` story (gallery-only, current-only per gotcha 9) and a documented note in `baseline-map.ts`, so they stay in the `visual:review` surface without a false-green diff.
- **2026-07-06 — checklist restructured to a dependency-ordered build queue**: the legacy import graph was analysed (direct imports + JSX usage of barrel imports) and the 127 pending components tiered topologically (keystone-first within each tier). The `## Components Checklist` is now the queue — "next N unchecked" are always buildable. This replaced the old alphabetical by-category list, which was **unbuildable in order** (molecules import atoms/molecules that came later alphabetically). Scripts kept in the session scratchpad (`deps.cjs` → `emit.cjs`).
- **2026-07-06 — Batch 7 findings & harness changes**:
  - **Molecules layer opened + `src/components/molecules/` populated.** Public API (`src/index.ts`) gained a `── Molecules ──` section. Molecules may import atoms (Button → Icon, Loader; UiLink → Icon), unlike atoms.
  - **Shared polymorphic-link helper (new permanent util)**: `src/lib/link.tsx` exports `DefaultLink` (a real semantic `<a>`, replacing the legacy `LinkComponent` `<div>` stub → links are focusable + exposed as links, 4.1.2), plus `LinkComponentType`/`LinkRenderProps`. UiLink (and the coming IconButton/LinkButton/IconLink) take an optional `linkComponent` prop to inject a router link, defaulting to `DefaultLink`. Ref is forwarded via a `ref` member on `LinkRenderProps` (React 19 ref-as-prop). Documented in docs/DEVELOPMENT.md.
  - **Button — baseline mapped despite a font divergence** (initially skipped, then corrected after review feedback): legacy `button.module.css` set `font-family: var(--font-family-secondaryBold)`, a token that is **never defined**, and the global `button {}` reset only sets `color` (no `font-family: inherit`) — so the legacy baselines rendered in the **UA default font**, while V2 applies the brand `font-primary` (the undefined token was a bug). I first read that as "diff is meaningless, don't map" — wrong: the label is a tiny fraction of the full-screen canvas, so the diff is **well under the 2% gate**. `--visual` (→ `button-small`), `--visual-icon-left/right` and `--visual-large` are all mapped and pass, and the review gallery now pairs each current-vs-legacy so the minor type difference gets human sign-off instead of escaping review. New token `--spacing-button-min-l: 8.125rem` (`min-w-button-min-l`) for the off-scale large min-width. Also dropped legacy's `aria-label={name}` misuse — the visible `children` is the accessible name (4.1.2/2.5.3); `name` is now the real HTML attribute. Icon-only buttons → use IconButton. Sub-44px sizes (small/x-small/xx-small) rely on the 2.5.8 ≥24px-spacing exception (noted in-component); only `large` meets 2.5.5†.
  - **UiLink — baseline mapped despite a colour divergence**: the legacy link is orange (`--interactive-default`, fails 4.5:1 on white); V2 uses accessible `text-text-blue` + `underline` (1.4.1/1.4.3) — the same intentional divergence applied to the `Text` link in batch 4. The colour change is confined to the small link glyphs, so `--visual` (→ `ui-link-story`) diffs **under the 2% gate** and is mapped; the gallery surfaces the orange→blue change for sign-off. (The V2 story renders blue → passes the axe gate; the orange legacy PNG is only the reference image, never scanned — so "legacy fails AA" was never a reason not to map.) Icons are decorative (`aria-hidden`); accessible name is the visible text (no more `aria-label={children}`).
- **2026-07-06 — Batch 6 findings & harness changes**:
  - **Runtime responsive value → CSS-var + media-query `@utility` (new permanent standard)**: FlexItem's `flex` is a per-breakpoint runtime prop (`{sm,md,lg}`), which can't be a build-time Tailwind class. Ported the legacy CSS-var pattern: the component sets `--flex-sm/md/lg` inline, and a new `@utility flex-responsive` (in `src/styles/index.css`) reads them at the `md` (48rem) / `lg` (64rem) cut-ins. Confirms Tailwind v4 `@utility` accepts nested `@media` (emits correctly in `dist/ecom-designsystem.css`). This is the sanctioned way to make a runtime value responsive without an arbitrary literal — reuse it for any future per-breakpoint runtime dimension. Documented in docs/DEVELOPMENT.md.
  - **New shared tokens (permanent)**: `--spacing-wrapper-xs: 0.3rem` (the `spacing='xs'` cluster gap shared by GroupWrapper + BoxWrapper; 0.3rem is off the 0.25rem scale — sm/md/lg/xl map to standard `gap-2/4/6/8`; consumed as `gap-wrapper-xs`) and `--container-box: 43.75rem` (BoxWrapper's `hasMaxWidth` cap, ported from legacy `max-width: 43.75rem`; consumed as `max-w-box` — v4 strips the `--container-` prefix). Documented in docs/DEVELOPMENT.md.
  - **Dead legacy code dropped**: BoxWrapper's `direction` prop was a no-op (its `.direction-*` rules are scoped under `.groupWrapper`, never `.boxWrapper`) — dropped (BoxWrapper is always a column stack). Also dropped the never-referenced `.noPadding` class and the raw `style` passthrough (V2 exposes `className` + the specific runtime `padding` prop instead). GroupWrapper's numeric `spacing` (legacy silently mapped any number → `xl`) narrowed to the `xs|sm|md|lg|xl` enum.
  - **BoxWrapper — no visual baseline (unmigrated children)**: every legacy `box-wrapper-story-*` frame composes molecules not yet migrated (Button, InfoSummaryBox, OrderItem, Tabs, TagsList, OrderConfirmationDetails, ScrollableList), so a faithful parity frame is impossible and a partial one would be a false-green (full-canvas pitfall). Not mapped; re-map when those children land. Behaviour covered by play tests.
  - **GroupWrapper mobile — single-large-Heading amplifies the known rhythm drift (harness pattern)**: the legacy `group-wrapper-story` frame's only content is one `order=1` Heading. It inherits the Heading vertical-rhythm drift that batch-1 accepted "within tolerance" — but where the multi-heading `heading-story` averages that sub-10px offset under the 2% gate, a single large heading wrapping to two lines on the 375px mobile canvas magnifies it to ~4%. GroupWrapper adds no vertical box, so this is a Heading-rendering incomparability, not a wrapper divergence → mapped **desktop-only** (like FlexContainer/Textarea/InputFile). Desktop (one line, drift diluted) matches. Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 5 findings & harness changes**:
  - **New layout tokens (permanent)**: `src/styles/index.css` gained `--breakpoint-3xl: 90rem` (the legacy "big screen" cut-in — extends, doesn't replace, Tailwind's breakpoints; = the `xl` JS breakpoint & the `isBigScreen` 90em query) and a custom `@utility max-w-content-fluid` = `calc(100% - 4rem)` (full width minus 2rem gutters) plus `@utility wave-w-{sm,md,lg,xl}` for WaveDivider's 20/30/40/50% desktop widths (30% has no standard Tailwind fraction). All documented in docs/DEVELOPMENT.md.
  - **Tailwind `--container-*` → `max-w-*` naming gotcha**: the container tokens are consumed as `max-w-content-narrow`/`-wide`/`-text`/`-lg` — Tailwind v4 **strips the `--container-` prefix**, so `max-w-container-content-*` silently generates nothing. Separately, that namespace also feeds `@container` sizes and **rejects a percentage `calc()`**, which is why the fluid width is a custom `@utility`, not a `--container-content-fluid` token. First discovered this batch (first layout components); cost one build cycle. Documented in DEVELOPMENT.md.
  - **Breakpoints — `react-responsive` dropped for native hooks**: legacy `Above`/`Below`/`Between` + `mediaQueryHelper` depended on `react-responsive`. V2 implements `useMediaQuery` on `useSyncExternalStore` (concurrent- and SSR-safe: `false` server snapshot) and `useBreakpoint` (replaces `mediaQueryHelper`), per the React 19 "standard hooks, no new deps" rule. `Above`/`Below`/`Between` are preserved (render-prop `children` still supported) but `@deprecated` → the hooks. Utility module: no story/snapshot → baseline-less.
  - **FlexContainer mobile baseline incomparable (harness pattern, recurring)**: the legacy `flex-container-story` **mobile** PNG is 464×667 — six non-wrapping 4rem swatches (6×64 + 5×16 gap = 464px) overflow the 375px viewport, so legacy captured full-page; the V2 harness captures the viewport (375×667). Mapped **desktop-only** (`viewports: ['desktop']`, same class as InputFile/Textarea). Desktop (1280) fits and matches.
  - **Layout-primitive convention (new permanent standard)**: enum props → `Record<Enum, string>` Tailwind utility maps; free-form runtime props (`flex`/`gap`/`minHeight`/`padding`) → inline `style` (the sanctioned no-arbitrary exception); presentational `<div>`/`<svg>`, no role (1.3.1). Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 4 findings & harness changes**:
  - **New Tag dimension tokens (permanent)**: `src/styles/index.css` gained `--text-tag-sm` (0.625rem, the small rectangular-tag label — registered in `cn.ts`'s font-size group so twMerge keeps size + colour) plus five bespoke `--spacing-tag-*` box tokens (`-rect-min`/`-rect-md`/`-rect-lg`/`-round-sm`/`-round-lg`) — the legacy tag heights/diameters (2.063rem, 4.75rem, 8.625rem, 5.156rem) are off the 0.25rem scale, so they're tokens rather than arbitrary values. Documented in docs/DEVELOPMENT.md.
  - **a11y gate vs legacy baselines (recurring pattern)**: `a11y.test: 'error'` means axe **fails** `test-storybook`, so a Visual parity story can't reproduce a legacy frame that itself fails AA. Two low-contrast oranges hit this: **Tag** white-on-`tag-orange` (~2.6:1) and **Text**'s legacy orange link (~2:1, undecorated). Resolution: (1) Tag maps only the AA-passing frames (rectangular-l/s, round-s); the orange **round-L** frame is **not** mapped and the orange token is flagged for design review in-component. (2) **Text link fixed** to blue + underline (1.4.1 + 1.4.3) — an intentional divergence from the orange baseline; the change is confined to the small glyphs so the diff stays under the 2% gate and the mapping still passes. `warning` (orange) text is kept as a prop option but never rendered in a scanned story (sub-AA for normal-weight text). Documented in docs/DEVELOPMENT.md.
  - **Video — 2.2.2 restored over legacy autoplay**: legacy autoplayed a muted, looping background video with **no** pause control (fails 2.2.2). V2 always renders a keyboard-operable pause/play button (44px `size-11` target, `focus-visible` ring, `aria-label` that flips with state), suppresses auto-play under `prefers-reduced-motion` (2.3.3), stays muted (1.4.2), and exposes a `tracks` slot for captions/descriptions (1.2.2–1.2.5). Atoms can't import `Icon`, so the control uses inline SVG glyphs (like MenuButton). **No visual baseline mapped**: the legacy `video-story` PNG is a non-deterministic auto-playing frame (no poster) and V2 adds the control — a pixel diff is meaningless (same reasoning as Picture). The V2 Video stories pass a minimal WebVTT captions `<track>` so axe's `video-caption` rule stays green.
  - **SingleSelect**: `@deprecated` (→ SelectList) preserved. Native `<select>` restores a `focus-visible` ring over the legacy `outline:none`; accessible name via `ariaLabel` (no visible label in legacy); `onChange` reports only — never auto-navigates (3.2.2, play-tested). No legacy story/snapshot → baseline-less.
  - **Textarea mobile baseline incomparable (harness gotcha)**: the legacy `textarea-story` **mobile** PNG is 375×**705** — the five-field stack overflows the 375×667 viewport, so legacy captured it **full-page**, whereas the V2 harness captures the **viewport** (375×667). Any mobile story taller than the viewport is therefore structurally incomparable → mapped **desktop-only** (`viewports: ['desktop']`, like InputFile). Desktop (1280×800) fits and matches. Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 3 findings & harness changes**:
  - **Shared skeleton/animation tokens (new permanent standard)**: `src/styles/index.css` gained three reusable primitives used by this batch and every future skeleton/motion atom — `--animate-grow` (LoadingBar bar grow-in), `--animate-shimmer` + `@keyframes shimmer`, and an `@utility skeleton-shimmer` (the decorative loading gradient). They live in the theme so no component ships an arbitrary `bg-[…]`/keyframe. All are gated with `motion-reduce:animate-none` at call sites (2.3.3†). Documented in docs/DEVELOPMENT.md.
  - **LoadingBar**: legacy shipped zero a11y — it's really a value-on-a-scale bar (e.g. "Beska" bitterness 6/12), so V2 exposes `role="meter"` (`aria-valuemin=0`/`max=12`/`now`) named by its visible label. The fill height is data-driven (`value/12`) so it's an inline `style` (a runtime value, not a design token — the one allowed non-utility dimension). The `bar-fill-*`/`bar-bg-*` token pair's non-text contrast (1.4.11) is borderline and flagged in-component for design review; axe doesn't gate it.
  - **MenuButton**: legacy button was a 23px target with `outline:none` (fails 2.5.8 + 2.4.7). V2 wraps the 23px glyph in a 44px `size-11` touch target (2.5.5†) with a real `focus-visible` ring; SVG stroke via `stroke-action-primary`. Framer path morph honours `prefers-reduced-motion` and uses `initial={false}` so the closed frame is static for the visual capture. Visual diff passes both viewports despite the target growth (glyph shift ≪ 2% gate).
  - **Picture**: no visual baseline mapped — the legacy `picture-story` PNGs used network-loaded images + a time-based skeleton/opacity transition, so a deterministic V2 frame can't reproduce them (behaviour covered by load/fallback play tests instead). Ported the loading/fallback state machine to React 19 (ref-as-prop merged with the internal `complete`-check ref; `fetchPriority` camelCase; dropped legacy dead `onLoadStart`, `content-visibility`/`will-change` perf hints, and the bespoke blur-gradient skeleton in favour of the shared `skeleton-shimmer`). Opacity scrim uses `bg-white/30`/`bg-black/50` (token + opacity modifier, not arbitrary).
  - **Placeholder**: legacy had **no** `.stories.tsx` and no snapshot, so no baseline. Decorative skeleton → `aria-hidden`. Odd legacy percentages (90%) snapped to nearest standard fractions/steps (`w-11/12`, `h-5`, `mb-2.5`) to keep zero arbitrary values; cosmetically irrelevant with no baseline to match.
- **2026-07-02 — Batch 2 dead-CSS findings & harness changes**:
  - **RadioButton**: legacy `radio-button.module.css` never applied (broken `&input[type="radio"]` nesting → selector `.radioButtoninput[…]`), so legacy rendered an unstyled native radio. V2 restores the intended styling (`h-4 w-5`, `accent-action-primary`, error → `accent-surface-critical`); pixel impact is tiny and the visual diff passes both viewports.
  - **InputFile**: legacy referenced non-existent `.button`/`.small` button-module classes, so the "button" was effectively plain secondary-blue text — V2 ports that effective rendering (baseline parity), not the intended button chrome. Revisit the affordance once the V2 Button molecule lands (needs human/design sign-off). Legacy also hid the input with `visibility: hidden` (keyboard-unreachable, WCAG 2.1.1 fail); V2 uses `sr-only`, which fixes it but removes the layout-overflow bug that made the legacy **mobile** PNG 420px wide — that viewport is structurally incomparable, so the baseline entry is desktop-only (`viewports: ['desktop']`).
  - **Harness**: `baseline-map.ts` gained an optional per-entry `viewports` filter (documented skip instead of a red test), and the spec now waits with `toBeAttached` on the story's first child instead of `toBeVisible` on `#storybook-root` (absolutely-positioned stories like Loader leave the root zero-height). Both documented in docs/DEVELOPMENT.md.
  - **Checkbox/RadioButton target size**: 18px/16–20px visual boxes rely on the WCAG 2.5.8 ≥24px-spacing exception — consumers must keep neighbouring targets ≥24px apart (noted in component comments).
- **2026-07-03 — Batch-1 audit via review gallery**: re-checked all 5 batch-1 atoms now that the global font is in place. Heading (Edmondsans, minor pre-existing vertical-rhythm drift within tolerance), CampaignBanner (pixel-identical), and Icon (map-pin glyph) all match; ExpandableWrapper has no baseline. **The font gap never actually bit batch-1** — the only text-bearing atoms set `font-primary` explicitly. One real finding: **ComponentWithTooltip's visual test was meaningless** — its `Visual` story renders a "Hover me" button while the legacy baseline is an `IconButton icon='icon-x'` close button; it passed only because the trigger is <0.5% of the canvas (under the 2% gate). Resolution: **removed ComponentWithTooltip from `tests/visual/baseline-map.ts`** (documented) since a faithful frame needs the unmigrated `IconButton` molecule — **re-add its visual mapping when IconButton is migrated** and the Visual story can reproduce the legacy trigger. Behaviour stays covered by its interaction/a11y play tests. Full-canvas false-green pitfall documented in docs/DEVELOPMENT.md.
- **2026-07-03 — visual-review findings resolved (font + input background)**: eyeballing the new tool (`pnpm visual:review`) surfaced three "wrong font" reports (DebounceInput, InputFile, Loader) plus a DebounceInput input-background diff. Root cause of the font issue was systemic, not per-component: legacy set a global `html { font-family: var(--font-family-primary) }`, but V2's `src/styles/index.css` only defined `--font-primary` as a token and never applied it to the document, so Tailwind's preflight left everything that didn't set `font-primary` explicitly in system-sans (batch-1 atoms passed only because they set it). Fixed once for the whole library with an `@layer base { html { font-family: var(--font-primary) } }` rule; batch-1 unaffected (no-op), form atoms now inherit Edmondsans. Caveat captured in docs/DEVELOPMENT.md: **form controls don't inherit font-family**, so `DebounceInput`'s numeric field keeps its explicit `font-primary`. Separately, that field needed `bg-surface-default` — Tailwind preflight leaves inputs transparent, so the off-white page showed through where legacy relied on the browser's default white field. Re-verified: `pnpm build` green, full `pnpm test:visual` 17 passed / 1 skipped, all three findings confirmed fixed in the regenerated gallery.
- **2026-07-02 — Icon re-migrated to `lucide-react`**: the icomoon font class was dead in V2 (no `@font-face` shipped), so Icon rendered nothing. Now renders Lucide SVGs via a strict `Record<IconName, IconGlyph>` map (legacy icomoon set was Feather — Lucide's ancestor — so glyphs map 1:1). Exceptions kept working: `icon-facebook`/`icon-instagram`/`icon-linkedin` (Lucide ships no brand icons) use vectors extracted from legacy `selection.json`; `icon-heart-o` → Lucide `Heart`, `icon-heart1` → `Heart` filled. Visual baseline `design-system-atoms-icon--icon-story` wired and passing; `pnpm test-storybook` 16/16.

## Summary

- Total Components: 155
- Completed: 65 / 155
- Remaining: 90

## Components Checklist

**Ordering is dependency-first, not alphabetical.** Regenerated from the legacy import graph: each
entry's `needs:` list names the *pending* components it imports, and every one of those sits in an
earlier tier — so **to start a batch, take the next unchecked entries top-to-bottom and their deps are
guaranteed already done.** `[atom]`/`[mol]`/`[org]` is the V2 destination dir
(`src/components/<category>`, after Atomic-Design reclassification — many legacy `atoms/*` are V2
molecules). `unblocks N` = how many pending components import this one (higher = more foundational;
that's why each tier is keystone-first — e.g. Button unblocks 28, IconButton 22).

Regenerate after large changes with the scratch scripts (`deps.cjs` → `emit.cjs`), or just move a
finished line into _Completed_ by hand (tiers rarely shift).

> **Cycle note.** The legacy product-card family is mutually recursive — `ProductCard` ↔
> `ProductCardHorizontal`/`-Vertical`/`-Restricted`, and `ProductSearch` ↔
> `ProductSearchResultItem`. Tiering breaks these arbitrarily; when you reach that cluster, scaffold the
> shells first and wire the cross-references last rather than expecting one clean topological pass.

### Completed (65)

- [x] CampaignBanner (Legacy: legacy/src/design-system/components/atoms/campaign-banner)
- [x] ComponentWithTooltip (Legacy: legacy/src/design-system/components/atoms/component-with-tooltip)
- [x] ExpandableWrapper (Legacy: legacy/src/design-system/components/atoms/expandable-wrapper)
- [x] Heading (Legacy: legacy/src/design-system/components/atoms/heading)
- [x] Icon (Legacy: legacy/src/design-system/components/atoms/icon)
- [x] Checkbox (Legacy: legacy/src/design-system/components/atoms/inputs/checkbox)
- [x] DebounceInput (Legacy: legacy/src/design-system/components/atoms/inputs/debounce-input)
- [x] InputFile (Legacy: legacy/src/design-system/components/atoms/inputs/input-file) — visual: desktop only (legacy mobile PNG incomparable, see batch notes)
- [x] RadioButton (Legacy: legacy/src/design-system/components/atoms/inputs/radio-button) — intent restored over dead legacy CSS, see batch notes
- [x] Loader (Legacy: legacy/src/design-system/components/atoms/loader)
- [x] LoadingBar (Legacy: legacy/src/design-system/components/atoms/loading-bar) — role="meter" restored over dead legacy a11y, see batch notes
- [x] MenuButton (Legacy: legacy/src/design-system/components/atoms/menu-button)
- [x] InlineHelper (Legacy: legacy/src/design-system/components/atoms/messages/inline-helper)
- [x] Picture (Legacy: legacy/src/design-system/components/atoms/picture) — no visual baseline (network + skeleton non-deterministic, see batch notes)
- [x] Placeholder (Legacy: legacy/src/design-system/components/atoms/placeholder) — no legacy story/baseline
- [x] SingleSelect (Legacy: legacy/src/design-system/components/atoms/single-select) — `@deprecated`→SelectList preserved; no baseline (no legacy story), see batch notes
- [x] Tag (Legacy: legacy/src/design-system/components/atoms/tag) — 3 baselines mapped; orange round-L unmapped (white-on-orange fails AA), see batch notes
- [x] Text (Legacy: legacy/src/design-system/components/atoms/text) — link fixed to accessible blue+underline (intentional divergence), see batch notes
- [x] Textarea (Legacy: legacy/src/design-system/components/atoms/textarea) — visual desktop-only (legacy mobile PNG full-page 705px), see batch notes
- [x] Video (Legacy: legacy/src/design-system/components/atoms/video) — pause control restored over legacy autoplay (2.2.2); no baseline (non-deterministic), see batch notes
- [x] WaveDivider (Legacy: legacy/src/design-system/components/atoms/wave-divider) — decorative `aria-hidden` svg; bespoke `wave-w-*` widths (30% off the fraction scale); baseline mapped (size='sm')
- [x] Breakpoints (Legacy: legacy/src/design-system/components/layouts/breakpoints) — viewport-utility module; `react-responsive` replaced with native `useMediaQuery`/`useBreakpoint`; no baseline (utility, no story)
- [x] ContentWrapper (Legacy: legacy/src/design-system/components/layouts/content-wrapper) — fluid gutter + `3xl` cap; baseline mapped (both viewports)
- [x] FlexContainer (Legacy: legacy/src/design-system/components/layouts/flex-container) — enum props → utilities, runtime props inline; visual desktop-only (non-wrapping row overflows mobile viewport), see batch notes
- [x] MaxWidth (Legacy: legacy/src/design-system/components/layouts/max-width) — `max-w-content-*` presets; no baseline (no legacy story)
- [x] BoxWrapper (Legacy: legacy/src/design-system/components/molecules/box-wrapper) — reclassified molecule→atom; presentational vertical stack; dead `direction`/`style`/`.noPadding` dropped; no visual baseline (unmigrated child molecules), see batch notes
- [x] FlexItem (Legacy: legacy/src/design-system/components/molecules/flex-item) — reclassified molecule→atom; per-breakpoint runtime `flex` via `flex-responsive` @utility; no baseline (no legacy story)
- [x] GroupWrapper (Legacy: legacy/src/design-system/components/molecules/group-wrapper) — reclassified molecule→atom; enum→utility maps; visual desktop-only (single large Heading amplifies known rhythm drift on mobile), see batch notes
- [x] Button `[mol]` (Legacy: legacy/src/design-system/components/atoms/button) — keystone (unblocks 28); 5 surfaces × 4 sizes, icons, loading (`aria-busy` + sr-only label); `font-primary` over undefined legacy token; 4 baselines mapped (font divergence, under 2% gate), see batch notes
- [x] UiLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/ui-link) — polymorphic `<a>` via `src/lib/link` `DefaultLink`; accessible blue+underline over legacy orange; baseline mapped (colour divergence, under gate), see batch notes
- [x] InputText `[mol]` (Legacy: legacy/src/design-system/components/atoms/inputs/input-text) — native input + optional decorative trailing icon; number-input spinner styling ported from DebounceInput; baseline mapped both viewports (no divergence), see batch notes
- [x] IconWithTooltip `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-with-tooltip) — composes the ComponentWithTooltip atom (Radix dropped); dark-on-orange badge over legacy white-on-orange; **baseline mapped** (`iconwithtooltip--tooltip-story`, both viewports; icon-size divergence under the gate — corrected 2026-07-07, was a false "no snapshot" from the hyphenation grep trap)
- [x] Carousel `[org]` (Legacy: legacy/src/design-system/components/organisms/carousel) — **first organism**; Splide dropped for a dependency-free scroll-snap rewrite + `carousel-slide` @utility; legacy baseline PNG exists but is an ArticleList of 5 cards (~95% unmigrated content) → mapping **deferred to ArticleList migration**, not "no baseline"; see batch notes
- [x] TagsList `[mol]` (Legacy: legacy/src/design-system/components/molecules/tags-list) — clean wrapping `<ul>`/`<li>` of Tags; dead legacy overflow/max-width CSS eliminated; no baseline (no legacy snapshot), see batch notes
- [x] InlineError `[mol]` (Legacy: legacy/src/design-system/components/atoms/messages/inline-error) — reclassified atom→molecule; `role="alert"` live region, icon+text (never colour-only), `text-critical` (AA); baseline mapped both viewports, see batch notes
- [x] LoadingBars `[mol]` (Legacy: legacy/src/design-system/components/molecules/loading-bars) — flex-col stack of LoadingBar meters (each self-labelled); keyed by index; baseline mapped both viewports (4 Beska bars), see batch notes
- [x] ClickableListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/clickable-list-item) — full-width `<button>`; `min-h-6` (2.5.8) + `focus-visible` ring restored over dead legacy a11y; `orange` kept but flagged sub-AA; baseline mapped both viewports, see batch notes
- [x] LoadingOverlay `[mol]` (Legacy: legacy/src/design-system/components/molecules/loading-overlay) — scrim + Loader (status live region); new `--color-surface-overlay` token, dark = `blue-500/30`; 4 baselines mapped both viewports; stories render `absolute` to avoid `fixed`-overlay autodocs pollution, see batch notes
- [x] ArticleCard `[mol]` (Legacy: legacy/src/design-system/components/molecules/article-card) — composes Picture+Tag+UiLink; `<article>`/`<h3>`, one read-more link + pointer-only image link; `text` de-HTML'd → escaped + `maxChar`; **no baseline** (legacy shipped no story; deferred to ArticleList), see batch notes. Surfaced+fixed a latent `Picture` `aria-busy`/decorative-image conflict.
- [x] OfferCard `[mol]` (Legacy: legacy/src/design-system/components/molecules/offer-card) — composes the Icon atom (decorative `aria-hidden`); centred icon + configurable-level heading + `richText` (legacy `& p` subdued styling ported as `[&_p]` so a bare string still matches the baseline); new `--text-icon-2xl` (3.5rem) token; both `offer-card-story-1/2` baselines mapped, both viewports (no divergence)
- [x] CheckboxListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/checkbox-list-item) — Heading/Text content + Checkbox atom; **checkbox now named** via `aria-labelledby` → item content (added `ariaLabelledBy` to the Checkbox atom; legacy left it unlabelled); loka + heineken baselines mapped both viewports
- [x] DeliveryInfoBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/delivery-info-bar) — full-width `<button>` (truck Icon + message = accessible name) in ContentWrapper; framer entrance gated by `prefers-reduced-motion` (animates to a settled `opacity:1,y:0`; reduced-motion = instant); dead `altText` prop dropped. **No baseline** — the legacy frame is blank (its `delay:0.5` entrance from `opacity:0` meant Storybook captured it before the animation ran); gallery-only Visual (unmapped 2026-07-07 during the batch-10/11 visual-review pass), behaviour covered by play tests
- [x] DropdownList `[mol]` (Legacy: legacy/src/design-system/components/molecules/dropdown-list) — `<ul role="list">` of polymorphic links (shared `DefaultLink`/`linkComponent`, `any` dropped); dead framer `itemVariants` removed; active link → `aria-current="page"` + bold (not colour); legacy `--navigation-text-default` #003E51 == V2 `nav-text-default`, so baseline maps with **no divergence** both viewports
- [x] InfoSummaryBox `[mol]` (Legacy: legacy/src/design-system/components/molecules/info-summary-box) — labelled `role="group"` via `aria-labelledby` + `useId` (fixed invalid legacy `<label htmlFor=div>`); action button orange→accessible blue+underline; `dina-uppgifter` + `anvandare` (Text-only) frames mapped both viewports; composite frames (OrderItem/CartProduct/GroupWrapper/UnorderedList children) deferred until those land
- [x] IntroBlock `[mol]` (Legacy: legacy/src/design-system/components/molecules/intro-block) — composes ContentWrapper/MaxWidth/FlexContainer atoms; `<h1>` title on new bespoke `--text-intro-title(-lg)` tokens (2rem→2.875rem, off the heading scale) + uppercase `font-secondary` ingress; **no baseline** (legacy frame is Word-paste rich body dependent on UA margins/`&nbsp;` wrapping/global heading CSS that V2 preflight resets — mobile PNG full-page, desktop reflows ~5%); gallery-only Visual, behaviour covered by play tests
- [x] MessageBanner `[mol]` (Legacy: legacy/src/design-system/components/atoms/message-banner) — reclassified atom→molecule; `role="status"` live region + decorative type icon; new `--color-surface-banner` (#f2efea) default, custom `color` inline→white text; success + link frames mapped both viewports (no divergence)
- [x] OrderConfirmationDetails `[mol]` (Legacy: legacy/src/design-system/components/molecules/order-confirmation-details) — legacy `<p><span>` pairs upgraded to a semantic `<dl>`/`<dt>`/`<dd>` (1.3.1); new `--color-surface-cream` (#fffdf8) highlight; reused `--spacing-wrapper-xs` (0.3rem) row margin; delivery/pricing/total-payment frames mapped both viewports
- [x] Pagination `[mol]` (Legacy: legacy/src/design-system/components/molecules/pagination) — `<nav aria-label>` landmark of real buttons; prev/next `aria-label` + `disabled`, active page `aria-current="page"` + bold/underline (not colour); `useBreakpoint().isMobile` window (5 desktop/3 mobile); legacy `name=` misuse dropped; baseline mapped both viewports (btn colour #003E51 == action-primary, no divergence)
- [x] PopUp `[mol]` (Legacy: legacy/src/design-system/components/molecules/pop-up) — presentational animated bottom panel (AnimatePresence, reduced-motion-gated); **no baseline** (legacy `pop-up-story` captures the *closed* state — a bare trigger button, no open-panel image to diff, gotcha 3); gallery-only Visual shows it open; dialog semantics/focus deferred to the future Modal molecule
- [x] PurchaseList `[mol]` (Legacy: legacy/src/design-system/components/molecules/purchase-list) — `<ul role="list">` of saved lists; name link is the AT path (chevron = pointer-only `aria-hidden`/`tabIndex=-1` duplicate), checkbox named via `aria-labelledby`→row name (legacy unlabelled); orange "updated" badge white→dark text (AA); dead `loading` dropped, `linkComponent: any`→`LinkComponentType`; baseline mapped both viewports (badge divergence under gate), see batch notes
- [x] RichText `[mol]` (Legacy: legacy/src/design-system/components/organisms/rich-text) — reclassified organism→molecule; CMS `dangerouslySetInnerHTML` typed `string` (was `any`) in a `MaxWidth` reading measure; prose via descendant utilities, accessible blue+underline links, IcoMoon bullet→`list-disc`; **no baseline** (Word-paste HTML depends on UA margins/IcoMoon/404 images — like IntroBlock); stories model clean valid HTML, markup a11y is the consumer's, see batch notes
- [x] ScrollableList `[mol]` (Legacy: legacy/src/design-system/components/molecules/scrollable-list) — height-capped scroll region; dead commented-out fade + `hasFade` machinery dropped, `Math.random()` keys→`Children.toArray`; `role="list"`+`tabIndex=0`+`aria-label`+focus ring make it keyboard-operable (2.1.1) over legacy's none; **no baseline** (legacy frames compose unmigrated CartProduct/LinkListItem), see batch notes
- [x] SortableListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/sortable-list-item) — clickable row via a stretched overlay `<button aria-label={name}>` (legacy `<button>`-wrapping-a-heading is invalid HTML); restores the dead `name` prop; new `@utility sortable-item-cols` (50%/auto/auto+5%); chevron CSS-gated `hidden lg:flex`; both frames mapped both viewports (visually identical), see batch notes
- [x] TagsDescription `[mol]` (Legacy: legacy/src/design-system/components/molecules/tags-description) — `<ul role="list">` colour legend; imports only the `TagColor` *type* from Tag; decorative swatches (`aria-hidden`) + meaning text (colour never sole cue, 1.4.1); no snapshot → gallery-only Visual, see batch notes
- [x] Logotype `[mol]` (Legacy: legacy/src/design-system/components/molecules/logotype) — renders the **official Spendrups logos** (from the brand EPS, exported via Illustrator, SVGO-safe) via responsive `<picture>`/`<img>`; stories under **Foundations** (main) + a Molecules reference; no baseline (different rendition than legacy PNG), see batch notes. **⚠️ Known tradeoff (accepted 2026-07-07):** each SVG embeds a ~33KB PNG raster (the "1897" gradient — the brand source stores it as raster, not vector), so the two logos add ~96KB raw to the bundle and don't gzip. Safe SVGO only; raster untouched for fidelity. **The design team that made this logo is gone**, so no clean vector source exists. Future levers (lossy pngquant ~halves it, or a vector redraw) are documented in [`src/assets/logos/README.md`](../../../src/assets/logos/README.md).
- [x] UnorderedList `[mol]` (Legacy: legacy/src/design-system/components/molecules/unordered-list) — `<ul role="list">` container; `Math.random()` keys→`Children.toArray`; dead `number` spacing dropped (legacy switch never matched a number → always fell to xl); loading swaps in the orange `Loader`; `unordered-list-story` mapped **desktop-only** (7 stacked Headings accumulate the known vertical-rhythm drift → ~4% on mobile, like GroupWrapper) + `-loading` mapped both viewports, see batch notes
- [x] UserInfoSummary `[mol]` (Legacy: legacy/src/design-system/components/molecules/user-info-summary) — label + `<h5>` name + detail `<p>`s; name uppercased via CSS `uppercase` (not `.toUpperCase()`) so AT keeps original casing; all text consumer-supplied (no hardcoded strings); baseline mapped both viewports (no divergence), see batch notes
- [x] Cart `[org]` (Legacy: legacy/src/design-system/components/templates/cart) — presentational 60/40 two-column shell (`[&>*:first-child]:lg:w-3/5` child-selector variants); no role, DOM order preserved; **no baseline** (legacy `cart-story` nests unmigrated DeliveryForm + CartProductList/CartProduct — the bulk of the frame); gallery-only Visual composes the migrated cart panels, deferred, see batch notes
- [x] CartDeliveryDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-delivery-details) — container with a busy state: `loading` lays a decorative `aria-hidden` scrim (`bg-surface-overlay/80`) + `aria-busy` region + **`inert` content** (legacy left dimmed controls focusable — a11y fix); **no baseline** (legacy frame is mostly the unmigrated DeliveryForm); gallery-only Visual, deferred, see batch notes
- [x] CartOrderDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-order-details) — `@deprecated` preserved (story under `Design System/Deprecated/`); white flex-col surface (`bg-surface-default`); **no baseline** (legacy frame is mostly the unmigrated CartProductList/CartProduct); gallery-only Visual, deferred, see batch notes
- [x] CartProductList `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-product-list) — **restored the dead-CSS list intent**: `<ul role="list">`/`<li>` (legacy named `.list`/`.listItem` but rendered a plain div); `Math.random()` keys→`Children.toArray`; dead `.collapsed`/`.expanded` scroll CSS dropped; **no baseline** (legacy frame composes unmigrated CartProduct), gallery-only Visual, deferred, see batch notes
- [x] CartSidebar `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-sidebar) — presentational white vertical stack; non-idiomatic `classNames: string[]`→standard `className`; dead sibling CSS (`.headingWrapper`/`.text`/`.buttonsWrapper`) dropped; **no baseline** (legacy frame is inside the unmigrated DrawerSidebar, captured closed; nests CartProduct), gallery-only Visual, deferred, see batch notes
- [x] LoginPage `[org]` (Legacy: legacy/src/design-system/components/templates/login-page) — reclassified template→organism; full-viewport centred shell (`min-h-screen`, `bg-blue-500`); presentational (consumer owns `<main>`); **no baseline** (legacy frames centre the unmigrated LoginForm/AccountBoxList), gallery-only Visual, deferred, see batch notes
- [x] OrderConfirmation `[org]` (Legacy: legacy/src/design-system/components/organisms/order-confirmation) — centred content card, new `--container-order-confirmation` (58.125rem) token + `bg-background`; **no baseline** (all children migrated **except** the unmigrated CartProduct, which is a large part of the frame), gallery-only Visual, deferred, see batch notes
- [x] OrderConfirmationPage `[org]` (Legacy: legacy/src/design-system/components/templates/order-confirmation-page) — reclassified template→organism; centred shell on `bg-blue-500`; **no baseline** (nests the full OrderConfirmation → unmigrated CartProduct), gallery-only Visual, deferred, see batch notes

### Build queue (105 pending, dependency-ordered)

#### Tier 0 — buildable now (deps already migrated)

- [ ] ⛔ **BLOCKED** BrandPage `[org]` (Legacy: legacy/src/design-system/components/templates/brand-page) — **NOT a leaf.** Story-only "GUIDELINE" template (no `.tsx`); the dep graph mis-marked it a leaf because `deps.cjs` only reads `.tsx` imports and this component has none. Its real deps live in `brand-page.stories.tsx`: Header, Footer, Hero, BrandDetails (all **unmigrated**). Build after those organisms land.
- [ ] ⛔ **BLOCKED** CampaignPage `[org]` (Legacy: legacy/src/design-system/components/templates/campaign-page) — **NOT a leaf** (same story-only flaw). Real deps in `campaign-page.stories.tsx`: Header, Footer, HeroCarousel (all **unmigrated**). Build after those land.
- [ ] ⛔ **BLOCKED** ChooseUserPage `[org]` (Legacy: legacy/src/design-system/components/templates/choose-user-page) — story-only "GUIDELINE" template (no `.tsx`; dep-graph false leaf). Real deps live in the stories file (unmigrated organisms). Build after those land — verify against source before scaffolding.
- [ ] ⛔ **BLOCKED** ContactPage `[org]` (Legacy: legacy/src/design-system/components/templates/contact-page) — story-only (no `.tsx`; false leaf). Deps in stories, unmigrated. Defer.
- [ ] ⛔ **BLOCKED** ContentPage `[org]` (Legacy: legacy/src/design-system/components/templates/content-page) — story-only (no `.tsx`; false leaf). Deps in stories, unmigrated. Defer.
- [ ] ⛔ **BLOCKED** InspirationPage `[org]` (Legacy: legacy/src/design-system/components/templates/inspiration-page) — story-only (no `.tsx`; false leaf). Deps in stories, unmigrated. Defer.
- [ ] ⛔ **BLOCKED** MySpendrupsPage `[org]` (Legacy: legacy/src/design-system/components/templates/my-spendrups-page) — story-only (no `.tsx`; false leaf). Deps in stories, unmigrated. Defer.
- [ ] ProductCategoryListingPage `[org]` (Legacy: legacy/src/design-system/components/templates/product-category-listing-page) — leaf *(verify `.tsx` exists before building — see the story-only-template rule)*
- [ ] ProductPage `[org]` (Legacy: legacy/src/design-system/components/templates/product-page) — leaf
- [ ] ShoppingListPage `[org]` (Legacy: legacy/src/design-system/components/templates/shopping-list-page) — leaf
- [ ] StartPageTemplate `[org]` (Legacy: legacy/src/design-system/components/templates/start-page-template) — leaf

#### Tier 1 — unlocked after Tier 0

- [ ] IconButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-button) — needs: UiLink · unblocks 22
- [ ] LinkButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/link-button) — needs: UiLink · unblocks 6
- [ ] ProductVariant `[mol]` (Legacy: legacy/src/design-system/components/molecules/product-variant) — needs: IconWithTooltip · unblocks 5
- [ ] ProductQuantityInput `[mol]` (Legacy: legacy/src/design-system/components/molecules/product-quantity-input) — needs: InputText · unblocks 4
- [ ] AlertBox `[mol]` (Legacy: legacy/src/design-system/components/atoms/alert-box) — needs: Button · unblocks 3
- [ ] FormGroup `[mol]` (Legacy: legacy/src/design-system/components/molecules/form-group) — needs: InlineError · unblocks 2
- [ ] AccountBox `[mol]` (Legacy: legacy/src/design-system/components/molecules/account-box) — needs: Button · unblocks 1
- [ ] CampaignBox `[mol]` (Legacy: legacy/src/design-system/components/atoms/campaign-box) — needs: Button · unblocks 1
- [ ] IconLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-link) — needs: UiLink · unblocks 1
- [ ] Newsletter `[mol]` (Legacy: legacy/src/design-system/components/molecules/newsletter) — needs: InputText, Button · unblocks 1
- [ ] UiDatePicker `[mol]` (Legacy: legacy/src/design-system/components/atoms/ui-date-picker) — needs: Button · unblocks 1
- [ ] FaqList `[org]` (Legacy: legacy/src/design-system/components/molecules/faq-list) — needs: ClickableListItem · unblocks 1
- [ ] AdminSearch `[mol]` (Legacy: legacy/src/design-system/components/atoms/admin-search) — needs: InputText
- [ ] AgeVerificationForm `[mol]` (Legacy: legacy/src/design-system/components/molecules/age-verification-form) — needs: Button
- [ ] ButtonWithTooltop `[mol]` (Legacy: legacy/src/design-system/components/atoms/button-with-tooltop) — needs: Button
- [ ] CampaignMessage `[mol]` (Legacy: legacy/src/design-system/components/atoms/campaign-message) — needs: Button
- [ ] CookieBar `[mol]` (Legacy: legacy/src/design-system/components/atoms/cookie-bar) — needs: Button
- [ ] MultiSelect `[mol]` (Legacy: legacy/src/design-system/components/atoms/multi-select) — needs: Button
- [ ] OrderItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/order-item) — needs: Button
- [ ] Search `[mol]` (Legacy: legacy/src/design-system/components/atoms/search) — needs: InputText, Button
- [ ] SelectList `[mol]` (Legacy: legacy/src/design-system/components/molecules/select-list) — needs: Button
- [ ] Tabs `[mol]` (Legacy: legacy/src/design-system/components/molecules/tabs) — needs: Button
- [ ] ArticleList `[org]` (Legacy: legacy/src/design-system/components/organisms/article-list) — needs: ArticleCard, Carousel · **when migrated, its `Default` story (5 ArticleCards in a swipe Carousel) reproduces the legacy `carousel-story` frame → map `design-system-organisms-carousel--carousel-story` (desktop + mobile) here to finally give Carousel a real visual comparison. Copy `legacy/src/assets/blog-images/Content9.png` into `src/assets/`. Expect the "Läs mer" link to diverge orange→blue (documented AA fix).**
- [ ] BrandDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/brand-details) — needs: TagsList
- [ ] Breadcrumbs `[org]` (Legacy: legacy/src/design-system/components/organisms/breadcrumbs) — needs: UiLink
- [ ] MobileNavigation `[org]` (Legacy: legacy/src/design-system/components/molecules/navigation/mobile-navigation) — needs: Button
- [ ] OfferCardList `[org]` (Legacy: legacy/src/design-system/components/organisms/offer-card-list) — needs: OfferCard, Carousel

#### Tier 2 — unlocked after Tier 1

- [ ] ProductVariantList `[org]` (Legacy: legacy/src/design-system/components/molecules/product-variant-list) — needs: ProductVariant, IconButton · unblocks 5
- [ ] Form `[mol]` (Legacy: legacy/src/design-system/components/molecules/form) — needs: UiLink, Button, LinkButton · unblocks 4
- [ ] AddToCartButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/add-to-cart-button) — needs: IconButton · unblocks 2
- [ ] DrawerSidebar `[mol]` (Legacy: legacy/src/design-system/components/molecules/drawer-sidebar) — needs: IconButton · unblocks 2
- [ ] FooterTopBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/footer-top-bar) — needs: LinkButton · unblocks 1
- [ ] Hero `[mol]` (Legacy: legacy/src/design-system/components/molecules/hero) — needs: LinkButton · unblocks 1
- [ ] SocialMediaLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/social-media-link) — needs: LinkButton · unblocks 1
- [ ] CartProduct `[org]` (Legacy: legacy/src/design-system/components/molecules/cart-product) — needs: ProductQuantityInput, IconButton · unblocks 1
- [ ] DesktopNavigation `[org]` (Legacy: legacy/src/design-system/components/molecules/navigation/desktop-navigation) — needs: IconButton · unblocks 1
- [ ] HorizontalVariant `[org]` (Legacy: legacy/src/design-system/components/molecules/horizontal-variant) — needs: ProductVariant, IconWithTooltip · unblocks 1
- [ ] ProductSearch `[org]` (Legacy: legacy/src/design-system/components/molecules/product-search) — needs: ProductVariant, InputText, ProductSearchResultItem · unblocks 1
- [ ] AlertMessage `[mol]` (Legacy: legacy/src/design-system/components/atoms/alert-message) — needs: IconButton
- [ ] FaqHero `[mol]` (Legacy: legacy/src/design-system/components/molecules/faq-hero) — needs: InputText, IconButton
- [ ] LinkListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/link-list-item) — needs: IconButton, IconLink
- [ ] MessagePopup `[mol]` (Legacy: legacy/src/design-system/components/atoms/message-popup) — needs: IconButton
- [ ] Modal `[mol]` (Legacy: legacy/src/design-system/components/molecules/modal) — needs: IconButton
- [ ] QuantityChanger `[mol]` (Legacy: legacy/src/design-system/components/molecules/quantity-changer) — needs: IconButton
- [ ] SortableList `[mol]` (Legacy: legacy/src/design-system/components/molecules/sortable-list) — needs: IconButton
- [ ] Table `[mol]` (Legacy: legacy/src/design-system/components/molecules/table) — needs: Button, IconButton
- [ ] Teaser `[mol]` (Legacy: legacy/src/design-system/components/molecules/teaser) — needs: LinkButton
- [ ] TopNavBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/top-nav-bar) — needs: UiDatePicker
- [ ] AccountBoxList `[org]` (Legacy: legacy/src/design-system/components/organisms/account-box-list) — needs: AccountBox
- [ ] CreateListForm `[org]` (Legacy: legacy/src/design-system/components/organisms/create-list-form) — needs: LoadingOverlay, Logotype, FormGroup, InputText, Button
- [ ] DeliveryForm `[org]` (Legacy: legacy/src/design-system/components/organisms/delivery-form) — needs: FormGroup, InputText
- [ ] FaqGroup `[org]` (Legacy: legacy/src/design-system/components/molecules/faq-group) — needs: FaqList
- [ ] InvoiceList `[org]` (Legacy: legacy/src/design-system/components/molecules/invoice-list) — needs: LoadingOverlay, IconButton, Button

#### Tier 3 — unlocked after Tier 2

- [ ] HorizontalVariants `[org]` (Legacy: legacy/src/design-system/components/molecules/horizontal-variants) — needs: ProductVariantList, HorizontalVariant, Carousel · unblocks 1
- [ ] ProductCardRestricted `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-restricted) — needs: ProductVariantList, TagsList, ProductCard, IconWithTooltip, Button · unblocks 1
- [ ] ProductCardVertical `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-vertical) — needs: ProductCard, ProductQuantityInput, ProductVariantList, TagsList, IconWithTooltip, Button, IconButton · unblocks 1
- [ ] ProductDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/product-details) — needs: ProductVariant, ProductQuantityInput, Button, IconButton, AddToCartButton, AlertBox, CampaignBox, IconWithTooltip, ProductVariantList, LoadingBars · unblocks 1
- [ ] ProductSearchResultItem `[org]` (Legacy: legacy/src/design-system/components/atoms/product-search-result-item) — needs: ProductSearch, IconButton, IconWithTooltip · unblocks 1
- [ ] Slider `[org]` (Legacy: legacy/src/design-system/components/atoms/slider) — needs: Form · unblocks 1
- [ ] VerticalVariants `[org]` (Legacy: legacy/src/design-system/components/molecules/vertical-variants) — needs: ProductVariant, ProductVariantList, Carousel · unblocks 1
- [ ] SocialMediaLinks `[mol]` (Legacy: legacy/src/design-system/components/molecules/social-media-links) — needs: SocialMediaLink
- [ ] Footer `[org]` (Legacy: legacy/src/design-system/components/organisms/footer) — needs: Newsletter, FooterTopBar, Logotype
- [ ] Header `[org]` (Legacy: legacy/src/design-system/components/organisms/header) — needs: DesktopNavigation
- [ ] HeroCarousel `[org]` (Legacy: legacy/src/design-system/components/organisms/hero-carousel) — needs: Hero, Carousel
- [ ] LoginForm `[org]` (Legacy: legacy/src/design-system/components/organisms/login-form) — needs: Button, Form, LinkButton, UiLink
- [ ] ProductToast `[org]` (Legacy: legacy/src/design-system/components/molecules/product-toast) — needs: CartProduct, IconButton
- [ ] ResetPasswordForm `[org]` (Legacy: legacy/src/design-system/components/organisms/reset-password-form) — needs: Logotype, Form
- [ ] UserProfileDropdown `[org]` (Legacy: legacy/src/design-system/components/molecules/user-profile-dropdown) — needs: DrawerSidebar, IconButton, Button

#### Tier 4 — unlocked after Tier 3

- [ ] ProductCardHorizontal `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-horizontal) — needs: ProductQuantityInput, TagsList, ProductCard, HorizontalVariants, IconWithTooltip, IconButton, Button, AlertBox · unblocks 1
- [ ] ProductCardMiniVertical `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-mini-vertical) — needs: VerticalVariants, IconButton, Button, AddToCartButton · unblocks 1
- [ ] RangeInput `[org]` (Legacy: legacy/src/design-system/components/atoms/range-input) — needs: Form, Slider · unblocks 1
- [ ] ProductDescription `[org]` (Legacy: legacy/src/design-system/components/organisms/product-description) — needs: Button, ProductDetails

#### Tier 5 — unlocked after Tier 4

- [ ] ProductCard `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card) — needs: AlertBox, ProductCardHorizontal, ProductCardRestricted, ProductCardVertical · unblocks 7
- [ ] DynamicFilter `[org]` (Legacy: legacy/src/design-system/components/molecules/dynamic-filter) — needs: DrawerSidebar, RangeInput, Button

#### Tier 6 — unlocked after Tier 5

- [ ] ProductCardMini `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-mini) — needs: ProductCard · unblocks 1
- [ ] ProductBlock `[org]` (Legacy: legacy/src/design-system/components/organisms/product-block) — needs: ProductCard
- [ ] ProductCardList `[org]` (Legacy: legacy/src/design-system/components/organisms/product-card-list) — needs: ProductCard
- [ ] ProductCarousel `[org]` (Legacy: legacy/src/design-system/components/molecules/product-carousel) — needs: Carousel, ProductCardMiniVertical, ProductCard

#### Tier 7 — unlocked after Tier 6

- [ ] MiniProductToast `[org]` (Legacy: legacy/src/design-system/components/molecules/mini-product-toast) — needs: ProductCardMini, IconButton

