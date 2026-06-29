# Extracted CSS Variables — Review Sheet

> Source-of-truth extraction from the three core `spendrups.css` theme files in `legacy/`.
> Module/component `.module.css` files were ignored, per skill rules.
> **No source code was modified.** Use this checklist to delete / rename / consolidate before authoring the Tailwind v4 `@theme`.
>
> Scanned files:
> - `legacy/src/design-system/styles/layout/spendrups.css`
> - `legacy/src/design-system/styles/typography/spendrups.css`
> - `legacy/src/design-system/styles/themes/spendrups.css`

## ⚠️ Warning comments found in legacy source

These declarations carry explicit "needs work / remove" notes from the legacy authors — review them first:

- [ ] **Typography (top of file):** `SIZES FOR MOBILE NEED TO BE UPDATED, SPACING/MARGINS FOR ALL ELEMENTS NEED TO BE UPDATED`
- [ ] **Typography:** `We can remove the tags below` — flags the duplicated **CTA S / CTA L** and **Tag rectangular / round** blocks (see 🔁 markers in Typography below)
- [ ] **Themes (light & dark):** `CTA COLORS NEED TO BE REVIEWED AFTER THE DESIGN IS UPDATED` — flags the entire `--cta-*` group
- [ ] **Typo:** `--tag-s-round-esktop-font-size` — should be `--tag-s-round-desktop-font-size`
- [ ] **Typo:** `--icon-backgorund-blue` — should be `--icon-background-blue`

---

## 1. Layout — sizing & dimensions
_From `layout/spendrups.css` (`html` scope)_

- [ ] `--max-width: 120rem` — 💀 **DEAD** · 0 uses
- [ ] `--content-max-width-wide: 103rem` · 1 use
- [ ] `--content-max-width-narrow: 73rem` · 2 uses
- [ ] `--content-max-width-text: 52rem` · 6 uses
- [ ] `--content-max-width-md: 80rem` · 1 use
- [ ] `--product-listing-width-m: 37.5rem` · 1 use
- [ ] `--product-listing-width-l: 77.5rem` · 2 uses
- [ ] `--text-width-m: 37.5rem` · 3 uses
- [ ] `--text-width-narrow: 73rem` · 2 uses
- [ ] `--text-width-wide: 77.5rem` — 💀 **DEAD** · 0 uses
- [ ] `--blog-card-max-width: 36rem` — 💀 **DEAD** · 0 uses
- [ ] `--blog-card-fullwidth: 108rem` — 💀 **DEAD** · 0 uses
- [ ] `--product-card-width-vertical: 18.75rem` /* 300px */ · 3 uses
- [ ] `--product-card-height-vertical: 30.5rem` /* 488px */ · 2 uses
- [ ] `--product-card-width-horizontal: 18.75rem` /* 300px */ — 💀 **DEAD** · 0 uses
- [ ] `--product-card-height-horizontal: 40rem` /* 640px */ — 💀 **DEAD** · 0 uses
- [ ] `--breadcrumbs-container-height-mobile: 10rem` · 1 use
- [ ] `--breadcrumbs-container-height-desktop: 13rem` · 1 use
- [ ] `--footer-top-bar-height-mobile: 4.25rem` · 1 use
- [ ] `--footer-top-bar-height-desktop: 6rem` · 1 use
- [ ] `--signup-teaser-max-width: 43.875rem` — 💀 **DEAD** · 0 uses
- [ ] `--featured-products-max-width: 54.375rem` — 💀 **DEAD** · 0 uses
- [ ] `--product-details-height: 52rem` — 💀 **DEAD** · 0 uses
- [ ] `--product-details-max-width: 34.375rem` — 💀 **DEAD** · 0 uses
- [ ] `--nav-bar-height-mobile: 3.75rem` — 💀 **DEAD** · 0 uses
- [ ] `--nav-bar-height-desktop: 5rem` — 💀 **DEAD** · 0 uses
- [ ] `--logotype-height-desktop: 2.25rem` · 1 use
- [ ] `--logotype-height-mobile: 2rem` · 1 use
- [ ] `--cta-width-lg: 16.875rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-width-default: 13.75rem` · 2 uses
- [ ] `--search-bar-height-mobile: 3.125rem` — 💀 **DEAD** · 0 uses
- [ ] `--content-width-sm: 42.5rem` — 💀 **DEAD** · 0 uses
- [ ] `--content-width-md: 62.5rem` — 💀 **DEAD** · 0 uses
- [ ] `--content-width-lg: 77.5rem` · 1 use

### Layout — z-index
- [ ] `--menu-icon-z-index: 101` · 1 use
- [ ] `--menu-z-index: 100` · 5 uses
- [ ] `--menu-backdrop-z-index: 99` · 1 use
- [ ] `--select-list-z-index: 10` · 1 use
- [ ] `--tooltip-z-index: 101` · 3 uses
- [ ] `--drawer-sidebar-backdrop-z-index: 997` · 1 use
- [ ] `--drawer-sidebar-z-index: 998` · 1 use
- [ ] `--modal-backdrop-z-index: 999` · 1 use

> ⚠️ Width-value collisions worth collapsing into one token:
> `--content-max-width-narrow` / `--text-width-narrow` = **73rem** (same value, two names).
> `--product-listing-width-l` / `--text-width-wide` / `--content-width-lg` = **77.5rem** (three names).
> `--product-listing-width-m` / `--text-width-m` = **37.5rem**.
> `--content-max-width-text` / `--product-details-height` = **52rem**.

---

## 2. Typography
_From `typography/spendrups.css` (`html` scope)_

### Font family / weight
- [ ] `--font-family-primary: 'spendrups_primary'` · 31 uses
- [ ] `--font-family-secondary: 'spendrups_secondary'` · 26 uses
- [ ] `--font-weight-bold: 700` · 12 uses

### Headings (mobile / desktop pairs)
- [ ] `--heading-xl-mobile-font-size: 2.5rem` · 1 use
- [ ] `--heading-xl-mobile-line-height: 3.25rem` · 1 use
- [ ] `--heading-xl-desktop-font-size: 3.625rem` · 1 use
- [ ] `--heading-xl-desktop-line-height: 4.25rem` · 1 use
- [ ] `--heading-l-mobile-font-size: 2.25rem` · 1 use
- [ ] `--heading-l-mobile-line-height: 2.875rem` · 1 use
- [ ] `--heading-l-desktop-font-size: 2.5rem` · 3 uses
- [ ] `--heading-l-desktop-line-height: 3.5rem` · 3 uses
- [ ] `--heading-m-mobile-font-size: 2rem` · 2 uses
- [ ] `--heading-m-mobile-line-height: 2.75rem` · 2 uses
- [ ] `--heading-m-desktop-font-size: 2.25rem` · 1 use
- [ ] `--heading-m-desktop-line-height: 2.875rem` · 1 use
- [ ] `--heading-s-mobile-font-size: 1.375rem` · 1 use
- [ ] `--heading-s-mobile-line-height: 1.75rem` · 1 use
- [ ] `--heading-s-desktop-font-size: 1.375rem` · 1 use
- [ ] `--heading-s-desktop-line-height: 1.75rem` · 1 use
- [ ] `--heading-xs-mobile-font-size: 1.125rem` · 3 uses
- [ ] `--heading-xs-mobile-line-height: 1.5rem` · 5 uses
- [ ] `--heading-xs-desktop-font-size: 1.125rem` · 3 uses
- [ ] `--heading-xs-desktop-line-height: 1.5rem` · 3 uses

> Note: S and XS heading mobile/desktop values are identical — the responsive pair is redundant.

### Body
- [ ] `--body-mobile-font-size: 1rem` · 6 uses
- [ ] `--body-mobile-line-height: 1.25rem` · 5 uses
- [ ] `--body-desktop-font-size: 1rem` · 6 uses
- [ ] `--body-desktop-line-height: 1.25rem` · 4 uses
- [ ] `--body-s-mobile-font-size: 0.875rem` · 2 uses
- [ ] `--body-s-mobile-line-height: 1.125rem` · 1 use
- [ ] `--body-s-desktop-font-size: 0.875rem` · 1 use
- [ ] `--body-s-desktop-line-height: 1.125rem` · 1 use

### CTA (canonical set, used by `.cta-*` classes)
- [ ] `--cta-s-font-size: 0.875rem` · 6 uses
- [ ] `--cta-s-line-height: 1.125rem` · 6 uses
- [ ] `--cta-s-letter-spacing: 0.02rem` · 6 uses
- [ ] `--cta-l-font-size: 1rem` · 4 uses
- [ ] `--cta-l-line-height: 1.25rem` · 2 uses
- [ ] `--cta-l-letter-spacing: 0.03rem` · 1 use

### Tag (canonical set)
- [ ] `--tag-rectangular-mobile-font-size: 0.75rem` · 2 uses
- [ ] `--tag-rectangular-mobile-line-height: 1.25rem` · 8 uses
- [ ] `--tag-rectangular-desktop-font-size: 1rem` · 1 use
- [ ] `--tag-rectangular-desktop-line-height: 1.875rem` · 1 use
- [ ] `--tag-round-mobile-font-size: 1rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-round-mobile-line-height: 1.1rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-round-desktop-font-size: 1.375rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-round-desktop-line-height: 1.471rem` — 💀 **DEAD** · 0 uses

### 🔁 Marked "We can remove the tags below" — redundant CTA/Tag duplicates
_Legacy author flagged these for deletion; they overlap the canonical sets above._
- [ ] `--cta-s-mobile-font-size: 0.875rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-s-mobile-line-height: 1.125rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-s-mobile-letter-spacing: 0.02rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-s-desktop-font-size: 1rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-s-desktop-line-height: 1.25rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-s-desktop-letter-spacing: 0.03rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-l-mobile-font-size: 1rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-l-mobile-line-height: 1.25rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-l-mobile-letter-spacing: 0.02rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-l-desktop-font-size: 1rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-l-desktop-line-height: 1.25rem` — 💀 **DEAD** · 0 uses
- [ ] `--cta-l-desktop-letter-spacing: 0.03rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-s-rectangular-mobile-font-size: 0.75rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-s-rectangular-mobile-line-height: 1.5rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-s-rectangular-desktop-font-size: 1rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-s-rectangular-desktop-line-height: 1.875rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-l-rectangular-mobile-font-size: 0.75rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-l-rectangular-mobile-line-height: 1.5rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-l-rectangular-desktop-font-size: 1rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-l-rectangular-desktop-line-height: 1.875rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-s-round-mobile-font-size: 1rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-s-round-mobile-line-height: 1.1rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-s-round-esktop-font-size: 1.375rem` ⚠️ typo (`esktop`) — 💀 **DEAD** · 0 uses
- [ ] `--tag-s-round-desktop-line-height: 1.471rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-l-round-mobile-font-size: 1.375rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-l-round-mobile-line-height: 1.471rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-l-round-desktop-font-size: 2.188rem` — 💀 **DEAD** · 0 uses
- [ ] `--tag-l-round-desktop-line-height: 2.341rem` — 💀 **DEAD** · 0 uses

### Tag sizing (dimensions)
- [ ] `--tag-size-round-small: 4.75rem` · 4 uses
- [ ] `--tag-size-round-large: 8.625rem` · 2 uses
- [ ] `--tag-rectangular-height: 2.063rem` · 1 use
- [ ] `--tag-rectangular-min-width: 5.156rem` · 1 use

---

## 3. Colors / Theme
_From `themes/spendrups.css`. Defined in both `.light` and `.dark` — listed once, with **divergent values flagged** in §3.10._

### 3.1 Raw color palette (primitives) — identical in light & dark
- [ ] `--orange-50: #fef3e6` — 💀 **DEAD** · 0 uses
- [ ] `--orange-100: #fadbb0` — 💀 **DEAD** · 0 uses
- [ ] `--orange-200: #f8c98a` — 💀 **DEAD** · 0 uses
- [ ] `--orange-300: #F5B154` — 💀 **DEAD** · 0 uses
- [ ] `--orange-400: #F3A133` — 💀 **DEAD** · 0 uses
- [ ] `--orange-500: #F08A00` · 7 uses
- [ ] `--orange-600: #DA7E00` · 3 uses
- [ ] `--orange-700: #AA6200` — 💀 **DEAD** · 0 uses
- [ ] `--orange-800: #844C00` — 💀 **DEAD** · 0 uses
- [ ] `--orange-900: #653A00` — 💀 **DEAD** · 0 uses
- [ ] `--blue-50: #E6ECEE` — 💀 **DEAD** · 0 uses
- [ ] `--blue-100: #B0C3C9` — 💀 **DEAD** · 0 uses
- [ ] `--blue-200: #8AA6AF` — 💀 **DEAD** · 0 uses
- [ ] `--blue-300: #547E8A` — 💀 **DEAD** · 0 uses
- [ ] `--blue-400: #336574` — 💀 **DEAD** · 0 uses
- [ ] `--blue-500: #003E51` · 10 uses
- [ ] `--blue-600: #00384A` — 💀 **DEAD** · 0 uses
- [ ] `--blue-700: #002C3A` — 💀 **DEAD** · 0 uses
- [ ] `--blue-800: #00222D` — 💀 **DEAD** · 0 uses
- [ ] `--blue-900: #001A22` — 💀 **DEAD** · 0 uses
- [ ] `--grey-50: #FDFDFD` — 💀 **DEAD** · 0 uses
- [ ] `--grey-100: #FBFCFC` — 💀 **DEAD** · 0 uses
- [ ] `--grey-200: #F7F9FA` · 1 use
- [ ] `--grey-300: #E6ECEE` · 7 uses
- [ ] `--grey-400: #CFD4D6` · 3 uses
- [ ] `--grey-500: #B8BDBE` · 5 uses
- [ ] `--grey-600: #ADB1B3` — 💀 **DEAD** · 0 uses
- [ ] `--grey-700: #8A8E8F` · 4 uses
- [ ] `--grey-800: #676A6B` · 3 uses
- [ ] `--grey-900: #000709` · 3 uses
- [ ] `--decorative-purple: #9A576F` · 1 use
- [ ] `--success-green: #38B000` — 💀 **DEAD** · 0 uses
- [ ] `--error-red: #CE0B0B` · 10 uses
- [ ] `--warning-orange: #DA7E00` — 💀 **DEAD** · 0 uses
- [ ] `--information-blue: #003E51` · 1 use
- [ ] `--default-black: #1D1D1B` · 2 uses

### 3.2 CTA (legacy — ⚠️ "needs review", superseded by `--action-*`)
- [ ] `--cta-primary-default: #003E51` · 38 uses
- [ ] `--cta-primary-hover: #336574` · 5 uses
- [ ] `--cta-primary-disabled: #E6ECEE` · 4 uses
- [ ] `--cta-secondary-default: #ffffff` · 9 uses
- [ ] `--cta-secondary-default-opacity: rgba(255, 255, 255, 0.8)` · 1 use
- [ ] `--cta-x-default: #ffffff` · 6 uses
- [ ] `--cta-tertiary-default: #F08A00` · 20 uses
- [ ] `--cta-tertiary-hover: #F3A133` · 4 uses
- [ ] `--cta-tertiary-disabled: #FEF3E6` · 2 uses
- [ ] `--cta-icon-background: #FFF9E8` · 1 use
- [ ] `--cta-icon-color: #003E51` · 1 use
- [ ] `--cta-icon-hover-color: rgba(0, 62, 81, 0.8)` — 💀 **DEAD** · 0 uses

### 3.3 Action (current CTA system)
- [ ] `--action-primary-orange-default: #DE9034` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-orange-hover: rgba(222, 144, 52, 0.8)` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-orange-disabled: rgba(222, 144, 52, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-orange-pressed: #DE9034` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-orange-focused-shadow: rgba(222, 144, 52, 0.4)` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-blue-default: #003E51` · 1 use
- [ ] `--action-primary-blue-hover: rgba(0, 62, 81, 0.8)` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-blue-disabled: rgba(0, 62, 81, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-blue-pressed: #003E51` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-blue-focused-shadow: rgba(0, 62, 81, 0.4)` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-light-orange-default: #C79A48` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-light-orange-hover: rgba(199, 154, 72, 0.8)` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-light-orange-disabled: rgba(199, 154, 72, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-light-orange-pressed: #C79A48` — 💀 **DEAD** · 0 uses
- [ ] `--action-primary-light-orange-focused-shadow: rgba(199, 154, 72, 0.4)` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-default: #FFFFFF` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-default-border: #EAEAEB` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-hover: rgba(255, 255, 255, 0.8)` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-hover-border: #E28F33` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-disabled: rgba(255, 255, 255, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-disabled-border: rgba(0, 62, 81, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-pressed: rgba(255, 196, 22, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-pressed-border: #E28F33` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-focused: rgba(255, 196, 22, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-focused-border: #E28F33` — 💀 **DEAD** · 0 uses
- [ ] `--action-secondary-focused-shadow: #FFF9E8` — 💀 **DEAD** · 0 uses
- [ ] `--action-tertiary-default: #FFF9E8` — 💀 **DEAD** · 0 uses
- [ ] `--action-tertiary-hover-border: #E28F33` — 💀 **DEAD** · 0 uses
- [ ] `--action-tertiary-pressed: rgba(255, 196, 22, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-tertiary-pressed-border: #E28F33` — 💀 **DEAD** · 0 uses
- [ ] `--action-tertiary-focused: rgba(255, 196, 22, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--action-tertiary-focused-border: #E28F33` — 💀 **DEAD** · 0 uses

### 3.4 Tags
- [ ] `--tag-green: #3D5B49` · 7 uses
- [ ] `--tag-mint: #C0E1D7` · 2 uses
- [ ] `--tag-blue: #003E51` · 4 uses
- [ ] `--tag-orange: #DE9034` · 3 uses
- [ ] `--tag-white: #ffffff` · 1 use
- [ ] `--tag-grey: #F1F1F1` · 3 uses
- [ ] `--tag-yellow: #FFF9E8` · 2 uses
- [ ] `--tag-purple: #9A576F` · 2 uses
- [ ] `--tag-black: #1D1D1B` ⚠️ **light only** (missing from `.dark`) · 2 uses

### 3.5 Loading bar / Radio / checkbox / Input
- [ ] `--bar-bkg-orange: #EEE1C8` · 1 use
- [ ] `--bar-bkg-purple: #E1CDD4` · 1 use
- [ ] `--bar-fill-orange: #C79A48` · 1 use
- [ ] `--bar-fill-purple: #9A576F` · 1 use
- [ ] `--radio-checkbox-background: #FFF9E8` — 💀 **DEAD** · 0 uses
- [ ] `--radio-checkbox-background-checked: #DE9034` — 💀 **DEAD** · 0 uses
- [ ] `--radio-checkbox-color-checked: #003E51` — 💀 **DEAD** · 0 uses
- [ ] `--input-background-default: #FFFFFF` — 💀 **DEAD** · 0 uses
- [ ] `--input-background-readonly: #FEF9EA` · 4 uses
- [ ] `--input-border-color: #DE9034` · 17 uses
- [ ] `--input-background-focused: rgba(255, 196, 22, 0.1)` · 4 uses
- [ ] `--input-text-color: #003E51` · 3 uses

### 3.6 Backgrounds
- [ ] `--background` ⚠️ **diverges** (light `#FBFAF9` / dark `#1D1D1B`) · 15 uses
- [ ] `--light-orange-background: #FFF9E8` · 1 use
- [ ] `--nav-bar-background: #F2EFEA` · 3 uses
- [ ] `--sub-nav-background: #FBFAF9` · 1 use
- [ ] `--top-nav-bar-background: #003E51` · 2 uses
- [ ] `--menu-nav-bar-background: #ffffff` — 💀 **DEAD** · 0 uses
- [ ] `--product-description-background: #FBFAF9` · 2 uses
- [ ] `--pagination-indicators-active: #003E51` — 💀 **DEAD** · 0 uses
- [ ] `--pagination-indicators-inactive: rgba(247, 249, 250, 0.15)` — 💀 **DEAD** · 0 uses
- [ ] `--alert-message-error-background` ⚠️ **diverges** (light `#CD8AA2` / dark `#e4b6c3`) · 2 uses
- [ ] `--alert-message-warning-background` ⚠️ **diverges** (light `#fadbb0` / dark `#FFF9E8`) · 1 use
- [ ] `--alert-message-information-background: #3D5B49` · 1 use
- [ ] `--alert-message-icon-error-background` ⚠️ **diverges** (light `#e4b6c3` / dark `#CD8AA2`) · 1 use
- [ ] `--alert-message-icon-warning-background` ⚠️ **diverges** (light `#FFF9E8` / dark `#fadbb0`) · 2 uses
- [ ] `--alert-message-icon-information-background: #708E7C` · 2 uses

### 3.7 Text
- [ ] `--color-text-default: #1D1D1B` · 50 uses
- [ ] `--color-text-white: #ffffff` · 31 uses
- [ ] `--color-on-primary: #ffffff` · 8 uses
- [ ] `--color-on-primary-disabled: #8A8E8F` · 4 uses
- [ ] `--color-on-secondary: #003E51` · 2 uses
- [ ] `--color-on-secondary-hover: #336574` · 3 uses
- [ ] `--color-on-secondary-disabled: #547E8A` · 3 uses
- [ ] `--color-on-tertiary: #1D1D1B` · 2 uses
- [ ] `--color-on-tertiary-disabled: #8A8E8F` · 2 uses
- [ ] `--color-text-on-primary: #ffffff` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-on-primary-disabled: rgba(255, 255, 255, 0.3)` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-on-secondary: #72757A` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-on-secondary-disabled: rgba(114, 117, 122, 0.1)` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-on-secondary-pressed: #DE9034` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-on-secondary-focused: #E28F33` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-blue: #003E51` · 17 uses
- [ ] `--color-text-orange: #DE9034` · 14 uses
- [ ] `--color-text-orange-hover: #E28F33` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-subdued: #676A6B` ⚠️ **declared twice in each block** (same value) · 9 uses
- [ ] `--color-text-disabled` ⚠️ **diverges** (light `#666666` / dark `#b3b3b3`) — 💀 **DEAD** · 0 uses
- [ ] `--color-text-critical: #cc0028` · 1 use
- [ ] `--color-text-decorative-one: #850020` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-decorative-two: #ff3846` — 💀 **DEAD** · 0 uses
- [ ] `--color-text-decorative-purple: #9A576F` · 1 use
- [ ] `--color-text-decorative-orange: #C79A48` · 1 use
- [ ] `--color-text-decorative-grey: #4E4E5C` · 5 uses
- [ ] `--color-text-on-tertiary` ⚠️ **self-conflict + diverges**: redeclared within the same block (light: `#003E51` then `#333333`; dark: `#003E51` then `#f7f7f7`) — last wins — 💀 **DEAD** · 0 uses
- [ ] `--color-decorative-image: #f7f7f7` · 1 use
- [ ] `--color-text-input: var(--blue-500)` ⚠️ **dark only** · 5 uses

### 3.8 Surface
- [ ] `--surface-default` ⚠️ **diverges** (light `#ffffff` / dark `#333333`) · 6 uses
- [ ] `--surface-disabled` ⚠️ **diverges** (light `#f7f7f7` / dark `#777777`) · 4 uses
- [ ] `--surface-critical` ⚠️ **diverges** (light `#cc0028` / dark `#ee0030`) · 2 uses
- [ ] `--surface-subdued` ⚠️ **diverges** (light `#f7f7f7` / dark `#555555`) · 1 use
- [ ] `--surface-critical-subdued` ⚠️ **diverges** (light `#ffe6eb` / dark `#441015`) · 4 uses
- [ ] `--surface-decorative-one: #ffe6eb` — 💀 **DEAD** · 0 uses
- [ ] `--surface-decorative-two: #440015` — 💀 **DEAD** · 0 uses
- [ ] `--surface-hover` ⚠️ **diverges** (light `#e8faf6` / dark `#0d3d34`) — 💀 **DEAD** · 0 uses
- [ ] `--surface-light: #ffffff` ⚠️ **dark only** — 💀 **DEAD** · 0 uses

### 3.9 Focused / Border / Interactive / Icons / Gradient / Navigation / Footer / Dialog
- [ ] `--focused` ⚠️ **diverges** (light `#F3A133` / dark `#DA7E00`) — 💀 **DEAD** · 0 uses
- [ ] `--border-default` ⚠️ **diverges** (light `#b3b3b3` / dark `#777777`) · 3 uses
- [ ] `--border-orange: #DA7E00` · 2 uses
- [ ] `--border-subdued` ⚠️ **diverges** (light `#d5d5d5` / dark `#555555`) — 💀 **DEAD** · 0 uses
- [ ] `--border-disabled` ⚠️ **diverges** (light `#d5d5d5` / dark `#777777`) · 6 uses
- [ ] `--border-grey: #E5ECEE` · 37 uses
- [ ] `--border-critical` ⚠️ **diverges** (light `#cc0028` / dark `#ee0030`) · 4 uses
- [ ] `--border-on-primary: transparent` — 💀 **DEAD** · 0 uses
- [ ] `--border-on-secondary: #003E51` · 2 uses
- [ ] `--border-on-secondary-hover: #336574` · 2 uses
- [ ] `--border-on-secondary-disabled: #B0C3C9` · 3 uses
- [ ] `--border-on-x: #B7B5B5` · 5 uses
- [ ] `--interactive-default: #F08A00` · 5 uses
- [ ] `--interactive-hover` ⚠️ **diverges** (light `#DA7E00` / dark `#F3A133`) · 7 uses
- [ ] `--interactive-disabled` ⚠️ **diverges** (light `#d5d5d5` / dark `#777777`) · 2 uses
- [ ] `--interactive-decorative-one: #cc0028` — 💀 **DEAD** · 0 uses
- [ ] `--interactive-decorative-one-hover: #aa0025` — 💀 **DEAD** · 0 uses
- [ ] `--interactive-decorative-two: #ffa1ac` — 💀 **DEAD** · 0 uses
- [ ] `--interactive-decorative-two-hover: #ff5964` — 💀 **DEAD** · 0 uses
- [ ] `--interactive-decorative-image: #ffa1ac` — 💀 **DEAD** · 0 uses
- [ ] `--icon-default: var(--grey-900)` — 💀 **DEAD** · 0 uses
- [ ] `--icon-critical: var(--error-red)` · 1 use
- [ ] `--icon-interactive: var(--grey-500)` — 💀 **DEAD** · 0 uses
- [ ] `--icon-disabled: var(--grey-500)` — 💀 **DEAD** · 0 uses
- [ ] `--icon-decorative-orange: var(--orange-600)` · 1 use
- [ ] `--icon-blue: var(--blue-500)` · 1 use
- [ ] `--icon-orange: var(--orange-500)` — 💀 **DEAD** · 0 uses
- [ ] `--icon-backgorund-blue: #eaeaeb` ⚠️ typo (`backgorund`) · 1 use
- [ ] `--gradient-decorative: #440015` — 💀 **DEAD** · 0 uses
- [ ] `--gradient-decorative-to: #cc0028` — 💀 **DEAD** · 0 uses
- [ ] `--gradient-decorative-secondary: #ff3846` — 💀 **DEAD** · 0 uses
- [ ] `--gradient-decorative-secondary-to: #ffe6eb` — 💀 **DEAD** · 0 uses
- [ ] `--navigation-surface-default: #ffffff` · 3 uses
- [ ] `--navigation-surface-subdued: #f7f7f7` — 💀 **DEAD** · 0 uses
- [ ] `--navigation-surface-focus: #32d3b4` — 💀 **DEAD** · 0 uses
- [ ] `--navigation-border-default: #F08A00` — 💀 **DEAD** · 0 uses
- [ ] `--navigation-border-subdued: rgba(240, 138, 0, 0.4)` · 1 use
- [ ] `--navigation-action-primary-selected: #cc0028` — 💀 **DEAD** · 0 uses
- [ ] `--navigation-action-primary-hover: #b3b3b3` — 💀 **DEAD** · 0 uses
- [ ] `--navigation-action-primary-focus: #0d3d34` — 💀 **DEAD** · 0 uses
- [ ] `--navigation-text-default: #003E51` · 8 uses
- [ ] `--navigation-text-hover: #336574` · 2 uses
- [ ] `--navigation-text-focus: #336574` · 1 use
- [ ] `--top-nav-text-default: #ffffff` · 2 uses
- [ ] `--top-nav-text-hover: #F08A00` · 1 use
- [ ] `--top-nav-text-focus: #F08A00` · 1 use
- [ ] `--navigation-icon-default: #666666` — 💀 **DEAD** · 0 uses
- [ ] `--footer-background-default` ⚠️ **diverges** (light `#f2efea` / dark `#333333`) · 1 use
- [ ] `--dialog-surface-default` ⚠️ **diverges** (light `#ffffff` / dark `#333333`) — 💀 **DEAD** · 0 uses

---

## 4. Post-extraction audit — "competitor" tokens

Multiple names resolve to the **same hex value** across different naming conventions. Pick one canonical source per cluster before authoring `@theme`.

| Value | Competing names | Recommended source of truth |
|-------|-----------------|-----------------------------|
| `#003E51` | `--blue-500`, `--cta-primary-default`, `--action-primary-blue-default`, `--tag-blue`, `--cta-icon-color`, `--color-text-blue`, `--input-text-color`, `--information-blue`, `--color-on-secondary` | **`--blue-500`** as primitive; semantic tokens should reference it via `var(--blue-500)` |
| `#F08A00` | `--orange-500`, `--interactive-default`, `--cta-tertiary-default`, `--navigation-border-default`, `--top-nav-text-hover/focus` | **`--orange-500`** primitive; `--interactive-default` is the canonical semantic alias |
| `#DA7E00` | `--orange-600`, `--warning-orange`, `--border-orange`, `--interactive-hover` (light) | **`--orange-600`** primitive |
| `#DE9034` | `--action-primary-orange-default`, `--tag-orange`, `--color-text-orange`, `--radio-checkbox-background-checked`, `--input-border-color` | Promote to a primitive (it is **not** in the orange scale — closest is `--orange-400 #F3A133`). Define once, e.g. `--orange-accent` |
| `#9A576F` | `--decorative-purple`, `--tag-purple`, `--bar-fill-purple`, `--color-text-decorative-purple` | **`--decorative-purple`** |
| `#FFF9E8` | `--light-orange-background`, `--cta-icon-background`, `--tag-yellow`, `--action-tertiary-default`, `--radio-checkbox-background`, `--action-secondary-focused-shadow` | **`--light-orange-background`** (or a new `--yellow-50` primitive) |
| `#C79A48` | `--action-primary-light-orange-default`, `--bar-fill-orange`, `--color-text-decorative-orange` | One primitive, e.g. `--orange-muted` |
| `#cc0028` | `--surface-critical` (light), `--color-text-critical`, `--border-critical` (light), `--interactive-decorative-one`, `--gradient-decorative-to`, `--navigation-action-primary-selected` | Promote to a primitive `--red-critical`; note `--error-red` is a **different** red (`#CE0B0B`) |
| `#336574` | `--blue-400`, `--cta-primary-hover`, `--color-on-secondary-hover`, `--navigation-text-hover/focus`, `--border-on-secondary-hover` | **`--blue-400`** |
| `#E6ECEE` | `--blue-50`, `--grey-300`, `--cta-primary-disabled` | ⚠️ `--blue-50` and `--grey-300` are **the same hex** — decide whether this belongs to the blue or grey ramp |

### Naming-convention conflicts (semantic, near-duplicate intent)
- **`--cta-*` vs `--action-*`** — two parallel CTA systems. The legacy comment *"CTA COLORS NEED TO BE REVIEWED"* plus the richer state coverage of `--action-*` (hover/disabled/pressed/focused) indicates **`--action-*` is current**. Recommend dropping the `--cta-*` block.
- **`--color-on-*` vs `--color-text-on-*`** — overlapping "on-surface" text tokens (`--color-on-secondary` `#003E51` vs `--color-text-on-secondary` `#72757A`). They hold *different* values, so this is a genuine ambiguity to resolve with design, not a safe dedupe.
- **`#CE0B0B` (`--error-red`) vs `#cc0028` (critical cluster)** — two distinct "error" reds in play. Pick one to avoid an inconsistent critical state.

### Recommendation for the Tailwind v4 `@theme`
1. **Keep the raw ramps** (`--orange-*`, `--blue-*`, `--grey-*`) as the single primitive layer.
2. **Promote off-ramp values** (`#DE9034`, `#C79A48`, `#cc0028`) to named primitives so nothing is hard-coded twice.
3. **Rebuild semantic tokens** (`--interactive-*`, `--surface-*`, `--border-*`, etc.) as references to primitives via `var()`.
4. **Delete** the `--cta-*` block, the "remove the tags below" typography block, and fix the two typos (`esktop`, `backgorund`).
5. Map the **divergent** tokens (§3.10 markers) into light/dark variants — these are the only ones that legitimately need two values.

---

## Unused / Dead Variables

**148 of 322** extracted variables (46%) are **never consumed** anywhere in `legacy/` — i.e. zero `var(--x)` references in any `.css`, `.module.css`, `.scss`, or `.tsx` file.

**Method:** a variable is *defined* via `--name:` and *consumed* via `var(--name)`. Counts below exclude definitions. Declarations don't count as usage — including the JS mirror in `legacy/.../themes/theme.ts`, which re-declares the same tokens as `lightTheme`/`darkTheme` objects but does not read them. The component `.tsx` files reference only their own local custom properties (`--flex`, `--gap`, `--campaign-color`, `--ratio`, …), none of which belong to this theme set.

> ⚠️ **95 of the 148 dead tokens are also mirrored in `theme.ts`** (marked below). When pruning, delete them from **both** `spendrups.css` and `theme.ts` to keep the two in sync. As `legacy/` is READ ONLY, treat this as a *do-not-port* list for the Tailwind v4 `@theme` rather than an edit list.

These are safe candidates to **drop from the V2 `@theme`** unless design explicitly reintroduces them:

### Action (CTA system) (31)
- [ ] `--action-primary-blue-disabled` _(also in `theme.ts`)_
- [ ] `--action-primary-blue-focused-shadow` _(also in `theme.ts`)_
- [ ] `--action-primary-blue-hover` _(also in `theme.ts`)_
- [ ] `--action-primary-blue-pressed` _(also in `theme.ts`)_
- [ ] `--action-primary-light-orange-default` _(also in `theme.ts`)_
- [ ] `--action-primary-light-orange-disabled` _(also in `theme.ts`)_
- [ ] `--action-primary-light-orange-focused-shadow` _(also in `theme.ts`)_
- [ ] `--action-primary-light-orange-hover` _(also in `theme.ts`)_
- [ ] `--action-primary-light-orange-pressed` _(also in `theme.ts`)_
- [ ] `--action-primary-orange-default` _(also in `theme.ts`)_
- [ ] `--action-primary-orange-disabled` _(also in `theme.ts`)_
- [ ] `--action-primary-orange-focused-shadow` _(also in `theme.ts`)_
- [ ] `--action-primary-orange-hover` _(also in `theme.ts`)_
- [ ] `--action-primary-orange-pressed` _(also in `theme.ts`)_
- [ ] `--action-secondary-default` _(also in `theme.ts`)_
- [ ] `--action-secondary-default-border` _(also in `theme.ts`)_
- [ ] `--action-secondary-disabled` _(also in `theme.ts`)_
- [ ] `--action-secondary-disabled-border` _(also in `theme.ts`)_
- [ ] `--action-secondary-focused` _(also in `theme.ts`)_
- [ ] `--action-secondary-focused-border` _(also in `theme.ts`)_
- [ ] `--action-secondary-focused-shadow` _(also in `theme.ts`)_
- [ ] `--action-secondary-hover` _(also in `theme.ts`)_
- [ ] `--action-secondary-hover-border` _(also in `theme.ts`)_
- [ ] `--action-secondary-pressed` _(also in `theme.ts`)_
- [ ] `--action-secondary-pressed-border` _(also in `theme.ts`)_
- [ ] `--action-tertiary-default` _(also in `theme.ts`)_
- [ ] `--action-tertiary-focused`
- [ ] `--action-tertiary-focused-border`
- [ ] `--action-tertiary-hover-border`
- [ ] `--action-tertiary-pressed` _(also in `theme.ts`)_
- [ ] `--action-tertiary-pressed-border`

### Layout sizing (13)
- [ ] `--blog-card-fullwidth`
- [ ] `--blog-card-max-width`
- [ ] `--content-width-md`
- [ ] `--content-width-sm`
- [ ] `--featured-products-max-width`
- [ ] `--max-width`
- [ ] `--product-card-height-horizontal`
- [ ] `--product-card-width-horizontal`
- [ ] `--product-details-height`
- [ ] `--product-details-max-width`
- [ ] `--search-bar-height-mobile`
- [ ] `--signup-teaser-max-width`
- [ ] `--text-width-wide`

### Palette primitives (20)
- [ ] `--blue-100` _(also in `theme.ts`)_
- [ ] `--blue-200` _(also in `theme.ts`)_
- [ ] `--blue-300` _(also in `theme.ts`)_
- [ ] `--blue-400` _(also in `theme.ts`)_
- [ ] `--blue-50` _(also in `theme.ts`)_
- [ ] `--blue-600` _(also in `theme.ts`)_
- [ ] `--blue-700` _(also in `theme.ts`)_
- [ ] `--blue-800` _(also in `theme.ts`)_
- [ ] `--blue-900` _(also in `theme.ts`)_
- [ ] `--grey-100` _(also in `theme.ts`)_
- [ ] `--grey-50` _(also in `theme.ts`)_
- [ ] `--grey-600` _(also in `theme.ts`)_
- [ ] `--orange-100` _(also in `theme.ts`)_
- [ ] `--orange-200` _(also in `theme.ts`)_
- [ ] `--orange-300` _(also in `theme.ts`)_
- [ ] `--orange-400` _(also in `theme.ts`)_
- [ ] `--orange-50` _(also in `theme.ts`)_
- [ ] `--orange-700` _(also in `theme.ts`)_
- [ ] `--orange-800` _(also in `theme.ts`)_
- [ ] `--orange-900` _(also in `theme.ts`)_

### Border (2)
- [ ] `--border-on-primary` _(also in `theme.ts`)_
- [ ] `--border-subdued` _(also in `theme.ts`)_

### Text color (11)
- [ ] `--color-text-decorative-one` _(also in `theme.ts`)_
- [ ] `--color-text-decorative-two` _(also in `theme.ts`)_
- [ ] `--color-text-disabled` _(also in `theme.ts`)_
- [ ] `--color-text-on-primary` _(also in `theme.ts`)_
- [ ] `--color-text-on-primary-disabled` _(also in `theme.ts`)_
- [ ] `--color-text-on-secondary` _(also in `theme.ts`)_
- [ ] `--color-text-on-secondary-disabled` _(also in `theme.ts`)_
- [ ] `--color-text-on-secondary-focused` _(also in `theme.ts`)_
- [ ] `--color-text-on-secondary-pressed` _(also in `theme.ts`)_
- [ ] `--color-text-on-tertiary` _(also in `theme.ts`)_
- [ ] `--color-text-orange-hover` _(also in `theme.ts`)_

### CTA (legacy) (14)
- [ ] `--cta-icon-hover-color` _(also in `theme.ts`)_
- [ ] `--cta-l-desktop-font-size`
- [ ] `--cta-l-desktop-letter-spacing`
- [ ] `--cta-l-desktop-line-height`
- [ ] `--cta-l-mobile-font-size`
- [ ] `--cta-l-mobile-letter-spacing`
- [ ] `--cta-l-mobile-line-height`
- [ ] `--cta-s-desktop-font-size`
- [ ] `--cta-s-desktop-letter-spacing`
- [ ] `--cta-s-desktop-line-height`
- [ ] `--cta-s-mobile-font-size`
- [ ] `--cta-s-mobile-letter-spacing`
- [ ] `--cta-s-mobile-line-height`
- [ ] `--cta-width-lg`

### Other (4)
- [ ] `--dialog-surface-default`
- [ ] `--focused` _(also in `theme.ts`)_
- [ ] `--success-green` _(also in `theme.ts`)_
- [ ] `--warning-orange` _(also in `theme.ts`)_

### Gradient (4)
- [ ] `--gradient-decorative` _(also in `theme.ts`)_
- [ ] `--gradient-decorative-secondary` _(also in `theme.ts`)_
- [ ] `--gradient-decorative-secondary-to` _(also in `theme.ts`)_
- [ ] `--gradient-decorative-to` _(also in `theme.ts`)_

### Icon (4)
- [ ] `--icon-default` _(also in `theme.ts`)_
- [ ] `--icon-disabled` _(also in `theme.ts`)_
- [ ] `--icon-interactive` _(also in `theme.ts`)_
- [ ] `--icon-orange` _(also in `theme.ts`)_

### Input (1)
- [ ] `--input-background-default` _(also in `theme.ts`)_

### Interactive (5)
- [ ] `--interactive-decorative-image` _(also in `theme.ts`)_
- [ ] `--interactive-decorative-one` _(also in `theme.ts`)_
- [ ] `--interactive-decorative-one-hover` _(also in `theme.ts`)_
- [ ] `--interactive-decorative-two` _(also in `theme.ts`)_
- [ ] `--interactive-decorative-two-hover` _(also in `theme.ts`)_

### Navigation (10)
- [ ] `--menu-nav-bar-background` _(also in `theme.ts`)_
- [ ] `--nav-bar-height-desktop`
- [ ] `--nav-bar-height-mobile`
- [ ] `--navigation-action-primary-focus` _(also in `theme.ts`)_
- [ ] `--navigation-action-primary-hover` _(also in `theme.ts`)_
- [ ] `--navigation-action-primary-selected` _(also in `theme.ts`)_
- [ ] `--navigation-border-default` _(also in `theme.ts`)_
- [ ] `--navigation-icon-default` _(also in `theme.ts`)_
- [ ] `--navigation-surface-focus` _(also in `theme.ts`)_
- [ ] `--navigation-surface-subdued` _(also in `theme.ts`)_

### Pagination (2)
- [ ] `--pagination-indicators-active` _(also in `theme.ts`)_
- [ ] `--pagination-indicators-inactive` _(also in `theme.ts`)_

### Radio/checkbox (3)
- [ ] `--radio-checkbox-background` _(also in `theme.ts`)_
- [ ] `--radio-checkbox-background-checked` _(also in `theme.ts`)_
- [ ] `--radio-checkbox-color-checked` _(also in `theme.ts`)_

### Surface (4)
- [ ] `--surface-decorative-one` _(also in `theme.ts`)_
- [ ] `--surface-decorative-two` _(also in `theme.ts`)_
- [ ] `--surface-hover` _(also in `theme.ts`)_
- [ ] `--surface-light` _(also in `theme.ts`)_

### Tag typography/size (20)
- [ ] `--tag-l-rectangular-desktop-font-size`
- [ ] `--tag-l-rectangular-desktop-line-height`
- [ ] `--tag-l-rectangular-mobile-font-size`
- [ ] `--tag-l-rectangular-mobile-line-height`
- [ ] `--tag-l-round-desktop-font-size`
- [ ] `--tag-l-round-desktop-line-height`
- [ ] `--tag-l-round-mobile-font-size`
- [ ] `--tag-l-round-mobile-line-height`
- [ ] `--tag-round-desktop-font-size`
- [ ] `--tag-round-desktop-line-height`
- [ ] `--tag-round-mobile-font-size`
- [ ] `--tag-round-mobile-line-height`
- [ ] `--tag-s-rectangular-desktop-font-size`
- [ ] `--tag-s-rectangular-desktop-line-height`
- [ ] `--tag-s-rectangular-mobile-font-size`
- [ ] `--tag-s-rectangular-mobile-line-height`
- [ ] `--tag-s-round-desktop-line-height`
- [ ] `--tag-s-round-esktop-font-size`
- [ ] `--tag-s-round-mobile-font-size`
- [ ] `--tag-s-round-mobile-line-height`

