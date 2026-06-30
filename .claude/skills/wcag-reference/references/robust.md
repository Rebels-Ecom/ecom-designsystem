# Principle 4 — Robust

Content must be robust enough to be interpreted reliably by user agents and assistive technologies.

> Scope: all Level A + AA criteria. No AAA in this principle. Entry schema is defined in `../SKILL.md`.

## Contents

- **4.1 Compatible:** [4.1.1 — removed](#411-parsing--removed-in-wcag-22) · [4.1.2](#412-name-role-value--a) · [4.1.3](#413-status-messages--aa)

---

## 4.1 Compatible

### 4.1.1 Parsing — REMOVED in WCAG 2.2
**Status:** Obsolete and removed. WCAG 2.2 dropped this criterion because the problems it covered
(duplicate IDs, unclosed tags) are now handled by browsers/AT directly or by other criteria. **Do not
treat it as a requirement and do not create an entry for it.** It is listed here only so its absence is
intentional and obvious. (Practically: still keep `id`s unique in React — duplicate `id`s break
`htmlFor`/`aria-*` references, which surfaces under 1.3.1 and 4.1.2 instead.)

### 4.1.2 Name, Role, Value — A
**Requirement:** For all UI components, the name and role must be programmatically determinable; states, properties, and values must be set and kept current; and changes must be notified to AT. This is the foundation of custom-widget accessibility.
**Implementation (React/Tailwind):**
- **Role:** prefer native elements (`<button>`, `<input>`, `<a>`, `<nav>`, `<dialog>`) so the role is implicit. For custom widgets add the correct ARIA role (`role="dialog"` + `aria-modal="true"` on `Modal`; `role="tablist"/"tab"/"tabpanel"` on tabs; `role="status"/"alert"` on messages).
- **Name:** every control has an accessible name via visible `<label>`, text content, or `aria-label`/`aria-labelledby` (icon-only → `aria-label`, see 1.1.1 & 2.5.3).
- **Value/State:** keep ARIA state in sync with React state — `aria-expanded` on disclosure/accordion/menu triggers, `aria-selected` on tabs, `aria-checked` on custom checkboxes/toggles, `aria-pressed` on toggle buttons, `aria-controls` linking trigger→region, `aria-describedby` for help/error text, `disabled`/`aria-disabled` consistently. Update these in the same render as the visual state — never let the visual and ARIA state diverge.
- Don't add redundant ARIA to native elements (no `role="button"` on a `<button>`).
**Verify:** axe (`aria-*` rule set: `aria-required-attr`, `aria-valid-attr-value`, `aria-allowed-attr`, `button-name`, `aria-roles`) in the Storybook a11y panel — this is axe's strongest area. play function asserts state attributes flip correctly (e.g. `aria-expanded` toggles `true`/`false` on activation).

### 4.1.3 Status Messages — AA
**Requirement:** Status messages (success/error/progress/results-count) that appear without moving focus must be programmatically exposed so AT announces them without a focus change.
**Implementation (React/Tailwind):** Wrap non-focus-stealing feedback in a live region:
- `role="status"` (polite) for confirmations, results counts, "added to cart" toasts (`mini-product-toast`), loading-complete messages.
- `role="alert"` (assertive) for important errors/`alert-box` warnings.
- The live region container must exist in the DOM **before** its text changes (render an empty `aria-live` region and update its children), otherwise the change isn't announced. Don't move focus to the message.
- `loader`/`loading-bar`: expose progress via `role="status"` or `aria-busy` so screen-reader users learn loading state.
**Verify:** play function — trigger the status, assert the live-region role/text is present (announcement itself isn't programmatically observable, so assert the role + content). axe checks `aria-live`/role validity but cannot confirm it actually announces — pair with a manual screen-reader spot check.
