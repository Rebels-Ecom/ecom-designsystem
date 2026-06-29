# V2 Tailwind v4 `@theme` Style Guide

> How the **live** (consumed) legacy CSS variables map into Tailwind v4's `@theme`.
> Source of truth: [`EXTRACTED-VARIABLES.md`](EXTRACTED-VARIABLES.md) — only the **174 variables that are NOT marked 💀 DEAD** are carried over. The 148 dead tokens are intentionally dropped.
> Reference: <https://tailwindcss.com/docs/theme>

---

## 0. Non-negotiable rules

1. **Arbitrary values are strictly forbidden.** Never write `w-[15px]`, `text-[#003E51]`, `z-[999]`, `mt-[37.5rem]`, etc. Every value must resolve to a token defined in `@theme` or a standard Tailwind scale step. If a value isn't expressible through a token, add the token — do not inline it.
2. **Semantic first.** Always map to a semantic token (`bg-action-primary`, `text-default`, `border-critical`) rather than a raw primitive (`bg-blue-500`). Primitives exist only to *feed* semantic tokens via `var()`; components should consume the semantic layer.
3. **Prefer the standard Tailwind scale.** Before minting a custom token, check whether a default scale step already fits (`p-4`, `text-sm`, `rounded-md`, `z-50`, `gap-2`). Only define a custom token when the design genuinely deviates from the default scale.
4. **Two-layer color architecture.** `@theme` holds **primitives** (raw ramp) and **`@theme inline`** holds **semantic** tokens that reference primitives with `var(--color-…)`. The `inline` keyword is required so utilities emit the resolved value and avoid CSS-variable scope bugs.
5. **No light/dark forks in token names.** A semantic token has one name; light is the default value, dark is a `.dark { … }` override of the same custom property. Never create `--color-x-dark`.

---

## 1. Naming convention

| Legacy form | V2 `@theme` form | Generated utilities |
|---|---|---|
| Primitive ramp `--blue-500` | `--color-blue-500` | `bg-blue-500`, `text-blue-500`, `border-blue-500` |
| Semantic alias (e.g. `--cta-primary-default`) | `--color-action-primary` | `bg-action-primary`, `text-action-primary` |
| `--color-text-default` | `--color-text-default` → util base `text-default` via `--color-*` | `text-default`, `bg-text-default` |
| `--heading-xl-*-font-size/line-height` | `--text-h-xl` (+`--text-h-xl--line-height`) | `text-h-xl` |
| `--font-family-primary` | `--font-primary` | `font-primary` |
| `--cta-s-letter-spacing` | `--tracking-cta-s` | `tracking-cta-s` |
| `--content-max-width-text` | `--container-content-text` | `max-w-content-text` |
| `--nav-bar-height-mobile` (dead) / sizing | `--spacing-nav-bar` | `h-nav-bar`, `top-nav-bar` |
| z-index `--modal-backdrop-z-index` | named `@utility z-modal-backdrop` | `z-modal-backdrop` |

**Rules of the convention**
- Strip the redundant `--color-` / `-z-index` legacy prefixes/suffixes; let the namespace carry the meaning.
- Drop state words into Tailwind-style suffixes: `-default` → base name, `-hover`/`-disabled`/`-pressed`/`-focused` kept as explicit suffixes (`--color-action-primary-hover`).
- kebab-case only. No camelCase, no abbreviations beyond the established `xl/l/m/s/xs`.
- The legacy `--cta-*` cluster is the **consumed** action system (the parallel `--action-*` cluster is 100% dead) — so it is renamed to the clean semantic **`action`** family below.

---

## 2. Colors

Defined in the entry CSS. Values shown are the **light** theme; dark-theme divergences are applied as overrides in §2.4.

### 2.1 Primitives (raw ramp — live steps only)
Keep ramp naming verbatim. These are the only ramp steps actually consumed; reintroduce missing steps only when a new design needs them.

```css
@theme {
  --color-blue-500:   #003E51;
  --color-orange-500: #F08A00;
  --color-orange-600: #DA7E00;
  --color-grey-200:   #F7F9FA;
  --color-grey-300:   #E6ECEE;
  --color-grey-400:   #CFD4D6;
  --color-grey-500:   #B8BDBE;
  --color-grey-700:   #8A8E8F;
  --color-grey-800:   #676A6B;
  --color-grey-900:   #000709;

  /* Off-ramp values still consumed semantically — promote to named primitives */
  --color-blue-400:    #336574; /* hover tints */
  --color-orange-accent: #DE9034; /* not in the orange ramp */
  --color-orange-muted:  #C79A48;
  --color-purple:        #9A576F;
  --color-red-critical:  #cc0028;
  --color-red-error:     #CE0B0B; /* distinct from red-critical */
  --color-green-success: #38B000;
  --color-black:         #1D1D1B;
  --color-white:         #ffffff;
  --color-yellow-50:     #FFF9E8;
}
```

### 2.2 Semantic tokens (`@theme inline` → reference primitives)
This is the layer components consume. `inline` resolves `var()` at utility-generation time.

```css
@theme inline {
  /* Action — primary (blue) · was --cta-primary-* (38 uses) */
  --color-action-primary:          var(--color-blue-500);
  --color-action-primary-hover:    var(--color-blue-400);
  --color-action-primary-disabled: var(--color-grey-300);

  /* Action — secondary (white) · was --cta-secondary-* */
  --color-action-secondary:         var(--color-white);
  --color-action-secondary-opacity: rgb(255 255 255 / 0.8);

  /* Action — tertiary (orange) · was --cta-tertiary-* (20 uses) */
  --color-action-tertiary:          var(--color-orange-500);
  --color-action-tertiary-hover:    #F3A133;
  --color-action-tertiary-disabled: #FEF3E6;

  /* Action — neutral "x" · was --cta-x-default */
  --color-action-x: var(--color-white);

  /* Action — icon · was --cta-icon-* */
  --color-action-icon-bg: var(--color-yellow-50);
  --color-action-icon:    var(--color-blue-500);

  /* Interactive (links / controls) */
  --color-interactive:          var(--color-orange-500);
  --color-interactive-hover:     var(--color-orange-600);
  --color-interactive-disabled:  #d5d5d5;

  /* Text */
  --color-text-default:           var(--color-black);
  --color-text-white:             var(--color-white);
  --color-text-subdued:           var(--color-grey-800);
  --color-text-blue:              var(--color-blue-500);
  --color-text-orange:            var(--color-orange-accent);
  --color-text-critical:          var(--color-red-critical);
  --color-text-input:             var(--color-blue-500);
  --color-text-decorative-grey:   #4E4E5C;
  --color-text-decorative-orange: var(--color-orange-muted);
  --color-text-decorative-purple: var(--color-purple);
  --color-text-on-primary:          var(--color-white);          /* was --color-on-primary */
  --color-text-on-primary-disabled: var(--color-grey-700);
  --color-text-on-secondary:          var(--color-blue-500);
  --color-text-on-secondary-hover:    var(--color-blue-400);
  --color-text-on-secondary-disabled: #547E8A;
  --color-text-on-tertiary:           var(--color-black);
  --color-text-on-tertiary-disabled:  var(--color-grey-700);

  /* Surface */
  --color-surface-default:          var(--color-white);
  --color-surface-subdued:          #f7f7f7;
  --color-surface-disabled:         #f7f7f7;
  --color-surface-critical:         var(--color-red-critical);
  --color-surface-critical-subdued: #ffe6eb;

  /* Border */
  --color-border-default:               #b3b3b3;
  --color-border-disabled:              #d5d5d5;
  --color-border-critical:              var(--color-red-critical);
  --color-border-grey:                  #E5ECEE;
  --color-border-orange:                var(--color-orange-600);
  --color-border-on-secondary:          var(--color-blue-500);
  --color-border-on-secondary-hover:    var(--color-blue-400);
  --color-border-on-secondary-disabled: #B0C3C9;
  --color-border-on-x:                  #B7B5B5;

  /* Background / surfaces by region */
  --color-background:             #FBFAF9;
  --color-background-light-orange: var(--color-yellow-50);
  --color-background-nav:          #F2EFEA;
  --color-background-sub-nav:      #FBFAF9;
  --color-background-top-nav:      var(--color-blue-500);
  --color-background-product-desc: #FBFAF9;
  --color-background-footer:       #f2efea;

  /* Navigation text */
  --color-nav-text-default: var(--color-blue-500);
  --color-nav-text-hover:   var(--color-blue-400);
  --color-nav-text-focus:   var(--color-blue-400);
  --color-nav-border-subdued: rgb(240 138 0 / 0.4);
  --color-nav-surface-default: var(--color-white);
  --color-top-nav-text-default: var(--color-white);
  --color-top-nav-text-hover:   var(--color-orange-500);
  --color-top-nav-text-focus:   var(--color-orange-500);

  /* Tags */
  --color-tag-green:  #3D5B49;
  --color-tag-mint:   #C0E1D7;
  --color-tag-blue:   var(--color-blue-500);
  --color-tag-orange: var(--color-orange-accent);
  --color-tag-white:  var(--color-white);
  --color-tag-grey:   #F1F1F1;
  --color-tag-yellow: var(--color-yellow-50);
  --color-tag-purple: var(--color-purple);
  --color-tag-black:  var(--color-black);

  /* Loading bar */
  --color-bar-bg-orange:   #EEE1C8;
  --color-bar-bg-purple:   #E1CDD4;
  --color-bar-fill-orange: var(--color-orange-muted);
  --color-bar-fill-purple: var(--color-purple);

  /* Inputs */
  --color-input-bg-readonly: #FEF9EA;
  --color-input-bg-focused:  rgb(255 196 22 / 0.1);
  --color-input-border:      var(--color-orange-accent);

  /* Alerts */
  --color-alert-error-bg:        #CD8AA2;
  --color-alert-warning-bg:      #fadbb0;
  --color-alert-info-bg:         #3D5B49;
  --color-alert-icon-error-bg:   #e4b6c3;
  --color-alert-icon-warning-bg: var(--color-yellow-50);
  --color-alert-icon-info-bg:    #708E7C;

  /* Icons */
  --color-icon-blue:             var(--color-blue-500);
  --color-icon-critical:         var(--color-red-error);
  --color-icon-decorative-orange: var(--color-orange-600);
  --color-icon-bg-blue:          #eaeaeb; /* legacy typo --icon-backgorund-blue, corrected */

  /* Misc */
  --color-decorative-image: #f7f7f7;
}
```

### 2.3 Usage
```html
<button class="bg-action-primary text-text-white hover:bg-action-primary-hover">…</button>
<p class="text-default">…</p>
<div class="border border-border-grey bg-surface-default">…</div>
```

### 2.4 Dark theme overrides
Only the tokens whose value diverges between light/dark (flagged in `EXTRACTED-VARIABLES.md` §3) are overridden — same names, new values:

```css
.dark {
  --color-background:          var(--color-black);
  --color-surface-default:     #333333;
  --color-surface-subdued:     #555555;
  --color-surface-disabled:    #777777;
  --color-surface-critical:    #ee0030;
  --color-border-default:      #777777;
  --color-border-disabled:     #777777;
  --color-border-critical:     #ee0030;
  --color-interactive-hover:   #F3A133;
  --color-interactive-disabled:#777777;
  --color-background-footer:   #333333;
  --color-alert-error-bg:      #e4b6c3;
  --color-alert-warning-bg:    var(--color-yellow-50);
}
```

---

## 3. Typography

### 3.1 Font families & weight (`--font-*`, `--font-weight-*`)
```css
@theme {
  --font-primary:   'spendrups_primary', Arial, sans-serif; /* was --font-family-primary */
  --font-secondary: 'spendrups_secondary', sans-serif;      /* was --font-family-secondary */
  --font-weight-bold: 700;
}
```
→ `font-primary`, `font-secondary`, `font-bold`.

### 3.2 Type scale (`--text-*` + paired modifiers)
Tailwind v4 attaches line-height/tracking to a size via the `--text-{name}--line-height` / `--text-{name}--letter-spacing` modifier syntax, so one utility carries the full style. Values are mobile; the desktop step is a separate token applied with the `md:` breakpoint variant. **Headings S and XS are identical mobile/desktop → single token each** (no responsive pair).

```css
@theme {
  /* Headings — mobile */
  --text-h-xl: 2.5rem;     --text-h-xl--line-height: 3.25rem;
  --text-h-l:  2.25rem;    --text-h-l--line-height: 2.875rem;
  --text-h-m:  2rem;       --text-h-m--line-height: 2.75rem;
  --text-h-s:  1.375rem;   --text-h-s--line-height: 1.75rem;
  --text-h-xs: 1.125rem;   --text-h-xs--line-height: 1.5rem;

  /* Headings — desktop steps (apply via md:) where they differ */
  --text-h-xl-lg: 3.625rem; --text-h-xl-lg--line-height: 4.25rem;
  --text-h-l-lg:  2.5rem;   --text-h-l-lg--line-height: 3.5rem;
  --text-h-m-lg:  2.25rem;  --text-h-m-lg--line-height: 2.875rem;

  /* Body */
  --text-body:   1rem;     --text-body--line-height: 1.25rem;
  --text-body-s: 0.875rem; --text-body-s--line-height: 1.125rem;

  /* CTA labels */
  --text-cta-s: 0.875rem;  --text-cta-s--line-height: 1.125rem;
  --text-cta-l: 1rem;      --text-cta-l--line-height: 1.25rem;

  /* Tag labels */
  --text-tag-rect:    0.75rem; --text-tag-rect--line-height: 1.25rem;
  --text-tag-rect-lg: 1rem;    --text-tag-rect-lg--line-height: 1.875rem;
}
```

Usage (responsive heading):
```html
<h1 class="font-primary font-bold text-h-xl md:text-h-xl-lg">…</h1>
<p class="text-body">…</p>
```

### 3.3 Letter spacing (`--tracking-*`)
```css
@theme {
  --tracking-cta-s: 0.02rem; /* was --cta-s-letter-spacing */
  --tracking-cta-l: 0.03rem; /* was --cta-l-letter-spacing */
}
```
→ `tracking-cta-s`, `tracking-cta-l`. (Could also be folded into the `--text-cta-*--letter-spacing` modifier.)

> **Reuse the standard scale where it fits.** `--font-weight-bold: 700` is identical to Tailwind's built-in `font-bold` — prefer the native `font-bold` and only keep the token if a semantic alias is required.

---

## 4. Spacing & sizing

Tailwind v4 derives spacing utilities from a single base multiplier; **fixed layout dimensions** go in `--spacing-*` (named) or `--container-*` (max-widths). There is **no z-index namespace** — handle layering with named `@utility` rules (§4.3), never `z-[999]`.

### 4.1 Max-width / content containers (`--container-*`)
`--container-*` feeds `max-w-*` and container-query variants. Collapse the value-collisions noted in `EXTRACTED-VARIABLES.md` to one token each.

```css
@theme {
  --container-content-wide:   103rem;  /* --content-max-width-wide */
  --container-content-md:      80rem;  /* --content-max-width-md */
  --container-content-narrow:  73rem;  /* --content-max-width-narrow + --text-width-narrow (73rem) */
  --container-content-text:    52rem;  /* --content-max-width-text */
  --container-content-lg:    77.5rem;  /* --content-width-lg + --product-listing-width-l (77.5rem) */
  --container-listing-m:     37.5rem;  /* --product-listing-width-m + --text-width-m (37.5rem) */
  --container-product-card:  18.75rem; /* --product-card-width-vertical */
  --container-cta-default:   13.75rem; /* --cta-width-default */
}
```
→ `max-w-content-wide`, `max-w-product-card`, etc.

### 4.2 Component dimensions (`--spacing-*`)
For fixed heights/widths that aren't max-widths. Prefer the **standard spacing scale** (`h-16`, `py-4`) for anything that lands on a 0.25rem step; only mint a token for genuinely bespoke dimensions.

```css
@theme {
  --spacing-product-card-v:   30.5rem;  /* --product-card-height-vertical */
  --spacing-breadcrumbs-mobile:  10rem; /* --breadcrumbs-container-height-mobile */
  --spacing-breadcrumbs-desktop: 13rem; /* --breadcrumbs-container-height-desktop */
  --spacing-footer-bar-mobile:  4.25rem;/* --footer-top-bar-height-mobile */
  --spacing-footer-bar-desktop:    6rem;/* --footer-top-bar-height-desktop */
  --spacing-logotype-mobile:       2rem;/* --logotype-height-mobile */
  --spacing-logotype-desktop:   2.25rem;/* --logotype-height-desktop */
}
```
→ `h-product-card-v`, `h-breadcrumbs-mobile`, `h-logotype-desktop`, …

### 4.3 Z-index (no `@theme` namespace → named utilities)
Tailwind v4 has **no `--z-*` namespace**, and the legacy values (10/99/100/101/997/998/999) don't map to the default `z-0…z-50` scale. Define an explicit, ordered layering scale as named utilities so intent is readable and arbitrary `z-[999]` stays forbidden:

```css
@layer utilities {
  .z-select   { z-index: 10;  } /* --select-list-z-index */
  .z-backdrop { z-index: 99;  } /* --menu-backdrop-z-index */
  .z-menu     { z-index: 100; } /* --menu-z-index */
  .z-menu-icon{ z-index: 101; } /* --menu-icon-z-index + --tooltip-z-index (101) */
  .z-drawer-backdrop { z-index: 997; } /* --drawer-sidebar-backdrop-z-index */
  .z-drawer          { z-index: 998; } /* --drawer-sidebar-z-index */
  .z-modal-backdrop  { z-index: 999; } /* --modal-backdrop-z-index */
}
```
→ `z-menu`, `z-modal-backdrop`, … (Tooltip shares layer 101 with the menu icon — confirm with design whether they should differ.)

---

## 5. Quick-reference: forbidden vs. correct

| ❌ Forbidden | ✅ Correct |
|---|---|
| `text-[#003E51]` | `text-action-primary` |
| `bg-[#FBFAF9]` | `bg-background` |
| `w-[300px]` | `w-product-card` (or `w-75` if on-scale) |
| `z-[999]` | `z-modal-backdrop` |
| `text-[40px]/[52px]` | `text-h-xl` |
| `tracking-[0.02rem]` | `tracking-cta-s` |
| `max-w-[73rem]` | `max-w-content-narrow` |
| raw `var(--cta-primary-default)` in JSX | `bg-action-primary` |

---

## 6. Migration checklist
- [ ] Define primitives in `@theme`, semantic tokens in `@theme inline`.
- [ ] Collapse value-duplicate tokens (73rem, 77.5rem, 37.5rem) to one name each.
- [ ] Drop all 148 💀 tokens — do **not** port them (and remove their `theme.ts` twins).
- [ ] Replace every `var(--legacy-name)` / hex literal in components with a semantic utility.
- [ ] Verify no arbitrary-value utilities (`[...]`) remain: `grep -rE '\b[a-z-]+\[' src/`.
- [ ] Confirm dark mode via `.dark` overrides only (no `-dark` token names).
