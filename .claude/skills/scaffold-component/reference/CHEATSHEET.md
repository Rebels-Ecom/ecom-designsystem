# scaffold-component — Batch Primer

Read this **once at the start of a batch**. It exists so you don't re-read ~10 invariant files
(STYLE-GUIDE, cn.ts, index.css, the four WCAG principle files, four reference components) every time.
It is a **fast-path digest, not a source of truth** — if something here looks wrong or a token/criterion
isn't listed, go to the source (linked at the bottom) and trust that.

---

## Per-batch reading map

Read once per batch:

- **This file.**
- The **WCAG archetype card(s)** for your component's archetype(s) —
  `.claude/skills/wcag-reference/references/archetype-cards.md` — instead of the four principle files.
  Open a principle file only for an unusual criterion the card doesn't cover.

Read per component (genuinely unavoidable):

- The legacy `*.tsx` + `*.module.css` + `*.stories.tsx`.
- The component's line in `.claude/docs/ATOMIC-MAP.md` (category + any reclassification).
- Current `src/index.ts` and `tests/visual/baseline-map.ts` (you append to both).
- `ls legacy-snapshots | grep -i <name>` (does a baseline exist? how many variants?). **⚠ Snapshot ids
  de-hyphenate the component segment** (`icon-with-tooltip` → `iconwithtooltip`, `single-select` →
  `singleselect`), so grep the **de-hyphenated** form (or a loose stem like `tooltip`) — grepping the
  kebab name gives a false "no baseline". Also check for **variant** frames (`-story-disabled`,
  `-error`, `-large`, `-blog`) and for coverage that lives in a **parent** story (ArticleCard has no
  `article-card` snapshot; it's covered by `articlelist--*`).

Do **not** re-read STYLE-GUIDE / index.css / cn.ts wholesale — use the token map below + `grep`.
Open a **reference component** only when the archetype is new to you (table below); otherwise the
skeleton in SKILL.md + this primer is enough.

---

## Reference component per archetype (copy the closest, then adapt)

| Archetype | Copy from (`src/components/atoms/…`) |
|---|---|
| Form field (input/select/textarea/checkbox/radio) | `DebounceInput`, `Textarea`, `RadioButton`, `SingleSelect` |
| Static text | `Heading`, `Text`, `Tag` |
| Inline link | `Text` (link variant) |
| Media | `Picture`, `Video` |
| Motion / animated | `LoadingBar`, `Loader`, `Video` |
| Status / feedback | `InlineHelper` |
| Disclosure / tooltip | `ExpandableWrapper`, `ComponentWithTooltip` |

**Batch smart:** where the checklist order allows, group a batch by archetype — 5 form fields share one
card *and* one reference component, so the grounding amortises 5×.

---

## Token quick-map

Full list: `.claude/docs/STYLE-GUIDE.md` §2–4. Confirm a token exists with
`grep <token> src/styles/index.css`. **Arbitrary values are forbidden** (`w-[15px]`, `text-[#003E51]`) —
including in `.stories.tsx` (`grep -rE '\b[a-z-]+\[' src` must stay clean). An inline `style={{}}` is fine
for a genuinely runtime/one-off dimension in a story (e.g. reproducing a legacy `maxWidth`).

Common legacy `var()` → V2 utility:

| Legacy | V2 |
|---|---|
| `--surface-default` | `bg-surface-default` |
| `--color-text-input` | `text-text-input` |
| `--input-border-color` | `border-input-border` |
| `--input-background-focused` | `bg-input-bg-focused` |
| `--input-background-readonly` | `bg-input-bg-readonly` |
| `--border-critical` / `--surface-critical-subdued` | `border-border-critical` / `bg-surface-critical-subdued` |
| `--border-disabled` / `--surface-disabled` | `border-border-disabled` / `bg-surface-disabled` |
| `--color-text-subdued` | `text-text-subdued` |
| `--error-red` | `text-text-critical` (a text token; `--color-icon-critical` is the icon twin) |
| `--information-blue` / `--default-black` | `text-text-blue` / `text-text-default` |
| `--color-text-orange` (legacy link) | **`text-text-blue`** — orange fails AA on white (see gotcha 1) |
| `--tag-*` | `bg-tag-*` / `text-tag-*` |

- **Fonts:** `html` sets `font-primary` globally, **but form controls** (`input`/`select`/`textarea`/`button`)
  don't inherit it — set `font-primary` explicitly on those.
- **Legacy raw `h1`–`h6` are NOT UA-sized.** `legacy/src/design-system/styles/typography/spendrups.css`
  globally styles every heading (`h4`/`.headingS` = 1.375rem bold, etc.). A migrated component using a raw
  heading must match with the matching `text-h-*` token (h1→`h-xl`, h2→`h-l`, h3→`h-m`, h4→`h-s`, h5→`h-xs`)
  or use the `Heading` atom — never assume the 16px UA default (that under-sizes it and shows in review).
- **Canonical focus ring:** `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary`.
- **New `--text-*` token?** Also register it in `src/lib/cn.ts`'s `font-size` group, or `tailwind-merge`
  treats it as a colour and drops one of {size, colour}. **New bespoke dimension** off the 0.25rem scale?
  Add a `--spacing-*` token (e.g. `--spacing-tag-round-lg`); never inline it.

---

## Gotchas that bite (each cost a debugging cycle)

1. **a11y is a HARD gate.** `.storybook/preview.ts` sets `a11y.test: 'error'` → axe **fails**
   `test-storybook`, and **every** story is scanned (including `Visual`). So a `Visual` parity story
   **cannot** reproduce a legacy frame that itself fails AA. Resolve by: (a) **fixing** the component if
   the correct behaviour is unambiguous and the pixel delta stays under the 2% gate (e.g. link → blue +
   underline); or (b) **not mapping** that frame and flagging the token for design review. Never render a
   sub-AA colour option in a scanned story. Corollary: **no orange token clears 4.5:1 on white**
   (darkest `orange-600` ≈ 3:1) → inline links use `text-text-blue` + `underline`.
2. **Visual harness captures the VIEWPORT** (desktop 1280×800, mobile 375×667). If a **mobile** story is
   taller than 667px, the legacy PNG was captured **full-page** (e.g. 375×705) → dimensions never match →
   set `viewports: ['desktop']` on that baseline-map entry (like `InputFile`, `Textarea`).
3. **False-green on small frames.** `maxDiffPixelRatio: 0.02` is a share of the *whole* canvas, so a tiny
   element can render completely wrong and still pass. Reproduce the legacy frame faithfully; if a faithful
   frame needs an unmigrated component, don't map it (document why).
4. **Multiple legacy baselines** (e.g. Tag rect/round × sizes) → one `Visual*` story + one baseline-map
   entry each. StoryId = `kebab(title)` + `--` + `kebab(export)`: `VisualRoundS` → `…--visual-round-s`.
5. **Required-prop stories still need `args`.** A render-only story on a component with a required prop
   must carry `args: { requiredProp: … }` (or set it at `meta.args`), or `satisfies Meta<…>` errors.
6. **Atoms MUST NOT import other UI atoms** (ATOMIC-MAP rule). Need a glyph in an atom? Inline SVG
   (see `MenuButton`, `Video`) — never import the `Icon` atom.
7. **Muted autoplay media** needs a pause control (2.2.2) + reduced-motion suppression + set `.muted` via
   the **ref callback** (React doesn't reflect the `muted` *attribute* to the property) + native
   `autoPlay`. Pass a captions `<track>` in stories so axe's `video-caption` rule stays green.
8. Asset imports (`*.mp4`, `*.png`, `*.svg`) type-check via `vite/client` (already referenced in
   `src/vite-env.d.ts`) — no extra declaration needed.
9. **A `['visual']`-tagged static story is UNconditional — even with no baseline.** The baseline-map
   entry (Step 7) is what's conditional. The `['visual']` tag feeds two things: the regression gate
   (only if also in the map) *and* the `visual:review` gallery, which renders every `['visual']`
   story — mapped ones current-vs-legacy, unmapped ones current-only. Skip the tag on a no-baseline
   component (e.g. `BoxWrapper`, `MaxWidth`) and it vanishes from the review gallery entirely — no
   error, just silent loss of the human review surface. The `['visual']` story should be **one
   representative frame that reproduces a real legacy story** (so it can be mapped and pairs against
   the baseline), *not* an all-variants grid — a grid has no legacy counterpart to diff against.
11. **Framer entrance/exit animation?** Gate it on `useReducedMotion()` (2.3.3† anyway) and make the
   reduced path instant/settled (`initial={reduce ? false : {…}}`). Captures then settle automatically:
   the review gallery creates its contexts with `reducedMotion: 'reduce'` and the gate uses
   `animations: 'disabled'`. **`useReducedMotion()` reads the `prefers-reduced-motion` media query — a
   `MotionConfig reducedMotion` prop does NOT drive it**, so don't wrap `Visual` stories in `MotionConfig`
   (it's a no-op for capture). See DeliveryInfoBar / PopUp.
10. **Don't pre-judge a divergence as "unmappable" — measure the diff.** A font/colour fix (brand
   `font-primary` over a legacy UA font; accessible blue over orange) changes only a small
   label/glyph, a tiny fraction of the full-screen canvas, so it lands **under the 2% gate** and
   *should* be mapped — the gallery then surfaces it for sign-off (Button, UiLink, Text). Only
   genuinely non-reproducible frames go unmapped (non-deterministic media, unmigrated children, no
   legacy story). The legacy PNG is never axe-scanned — only the V2 story is — so "legacy fails AA"
   is not a reason to skip the map: render the V2 frame accessibly and diff against the legacy image.

---

## Verify (per component, then the batch gate)

- `pnpm build` — `tsc --noEmit` (×2 configs) + Vite lib build; zero TS errors.
- `pnpm exec vitest run --project=storybook src/components/<cat>/<Name>` — scoped interaction + a11y.
- `pnpm build-storybook` — **once per batch** (autodocs compile / docgen check).
- `pnpm exec playwright test --grep <name>` — scoped visual regression. Use this form, **not**
  `pnpm test:visual -- --grep` (the flag isn't forwarded). Keep a Storybook server on `:6006`
  (`pnpm dlx http-server storybook-static -p 6006` after `build-storybook`) so it reuses instead of
  rebuilding.
- `pnpm test:visual` — **full** suite once as the batch regression gate.
- Then **Step 9**: flip `MIGRATION-PROGRESS.md` checkboxes + counts + batch note; append to
  `docs/DEVELOPMENT.md` only if a new *permanent* standard emerged.

---

## Sources of truth (this primer defers to these)

- `docs/DEVELOPMENT.md` — human developer wiki (keep it authoritative; append new standards there).
- `.claude/docs/STYLE-GUIDE.md` — token/utility mapping.
- `.claude/skills/wcag-reference/` — accessibility (cards + principle files).
- `.claude/docs/MIGRATION-PROGRESS.md` — batch log + per-component findings.
