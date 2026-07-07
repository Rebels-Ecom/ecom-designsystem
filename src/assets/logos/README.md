# Spendrups brand logos

`spendrups-logo-horizontal.svg` (wordmark) and `spendrups-logo-vertical.svg` (compact mark) are the
official Spendrups logos, exported from the brand EPS via Illustrator and consumed by the `Logotype`
molecule (`src/components/molecules/Logotype`).

## ⚠️ Known tradeoff — embedded raster (revisit to cut bundle weight)

Each SVG is **~48KB, of which ~33KB is an embedded PNG raster** — the **"1897" gradient** element.
The brand source stores that element as a raster (not vector), clipped to the numeral shapes. The
"SPENDRUPS" wordmark itself is true vector.

Consequences:
- **Not infinitely scalable** — sharp at logo sizes (the 378px PNG renders ~180px), softens only at
  very large (hero) sizes.
- **Doesn't gzip** — base64 of already-compressed PNG is ~incompressible.
- **Duplicated** — the identical "1897" PNG is embedded in *both* variants.
- **Inlined into JS** — Vite library mode inlines all imported assets regardless of size (see the
  `externalizeFonts` plugin note in `vite.config.ts`). So the two logos add ~96KB raw to the bundle.

## Decision (2026-07-07)

Shipped **as-is**: SVGO markup cleanup only (`floatPrecision 2`, `removeViewBox: false`), raster
**untouched** for brand fidelity. **The design team that produced this logo is no longer available**,
so there is no clean vector source to fall back to, and hand-editing the brand mark was ruled out
(risk of an off-brand result).

## Future options to reduce weight (pick one when revisiting)

1. **Lossy-recompress the embedded PNG** (`pngquant`): ~33KB → ~15KB, visually identical for a smooth
   gradient — roughly halves each logo. Verify in Storybook (Foundations → Logotype) before shipping.
2. **Get / redraw a fully-vector logo** — the "1897" gradient as an SVG `<linearGradient>`. Makes the
   whole mark a few KB and crisp at any size. **Best long-term fix** (needs brand sign-off).
3. **Externalize assets out of JS** — requires extending the Vite build plugin to emit these as files
   (Vite lib mode inlines by default). Bigger change; only worth it if #1/#2 aren't viable.

## Updating the logos

Drop in replacements with the **same filenames** and a valid `viewBox`; `Logotype` imports them
directly (no code change). Re-run SVGO with the safe config if the new files need cleanup. Verify no
`<image>`/base64 sneaks back in unless it's an intentional (documented) raster like this one.
