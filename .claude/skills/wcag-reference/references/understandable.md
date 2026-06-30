# Principle 3 — Understandable

Information and the operation of the UI must be understandable.

> Scope: all Level A + AA criteria (no AAA adopted in this principle). Includes the WCAG 2.2 additions
> `3.2.6` Consistent Help, `3.3.7` Redundant Entry, `3.3.8` Accessible Authentication (Minimum).
> Entry schema is defined in `../SKILL.md`.

## Contents

- **3.1 Readable:** [3.1.1](#311-language-of-page--a) · [3.1.2](#312-language-of-parts--aa)
- **3.2 Predictable:** [3.2.1](#321-on-focus--a) · [3.2.2](#322-on-input--a) · [3.2.3](#323-consistent-navigation--aa) · [3.2.4](#324-consistent-identification--aa) · [3.2.6](#326-consistent-help--a)
- **3.3 Input Assistance:** [3.3.1](#331-error-identification--a) · [3.3.2](#332-labels-or-instructions--a) · [3.3.3](#333-error-suggestion--aa) · [3.3.4](#334-error-prevention-legal-financial-data--aa) · [3.3.7](#337-redundant-entry--a) · [3.3.8](#338-accessible-authentication-minimum--aa)

---

## 3.1 Readable

### 3.1.1 Language of Page — A
**Requirement:** The default human language of the page is programmatically determinable (`<html lang>`).
**Implementation (React/Tailwind):** App/document concern — components don't own `<html>`. Note as a consumer/template responsibility; no atom sets `lang` for the page.
**Verify:** axe (`html-has-lang`, `html-lang-valid`) — but only meaningful at app level, not in isolated component stories.

### 3.1.2 Language of Parts — AA
**Requirement:** Passages in a different language from the page default must carry their own `lang`.
**Implementation (React/Tailwind):** When a component renders content known to be in another language (e.g. a foreign-language quote/term), wrap it with `lang="…"`. Expose a `lang` prop pass-through on text-bearing atoms where mixed-language content is realistic.
**Verify:** axe (`valid-lang`); manual review where mixed-language copy occurs.

---

## 3.2 Predictable

### 3.2.1 On Focus — A
**Requirement:** Receiving focus must not trigger an unexpected change of context (no auto-navigation, no auto-opening that disorients).
**Implementation (React/Tailwind):** Focusing a control must not submit a form, navigate, or open a modal on its own. Dropdowns/menus open on activation (`Enter`/`Space`/click), not merely on focus. Tabs may show their panel on focus only if it doesn't move focus or change context unexpectedly.
**Verify:** play function — focus each interactive element and assert no navigation/submission/overlay occurs.

### 3.2.2 On Input — A
**Requirement:** Changing a setting (typing, selecting) must not automatically cause an unexpected change of context unless the user was warned.
**Implementation (React/Tailwind):** Don't auto-submit or navigate on `onChange` of a `select`/`input` without warning. A `single-select` choosing a value should update state, not navigate, unless the component documents and the consumer expects it. Provide an explicit submit affordance.
**Verify:** play function — change select/input values and assert no surprise navigation/submit.

### 3.2.3 Consistent Navigation — AA
**Requirement:** Navigation repeated across pages appears in the same relative order each time.
**Implementation (React/Tailwind):** Navigation organisms (`header`, `desktop-navigation`, `footer`) must render items in a stable, prop-driven order and not reshuffle between routes. Keep item ordering deterministic (don't sort by volatile data).
**Verify:** Manual — multi-page review; component side is "order is stable and prop-driven".

### 3.2.4 Consistent Identification — AA
**Requirement:** Components with the same function are identified consistently (same name/icon/label across the UI).
**Implementation (React/Tailwind):** This is a core design-system guarantee: the same action uses the same `Icon`, label, and accessible name everywhere (e.g. one "search" icon + "Search" label, one close-button pattern). Centralize these so every instance matches; don't let one screen call it "Close" and another "Dismiss".
**Verify:** Manual review across stories; consistency is enforced by reusing the shared atoms.

### 3.2.6 Consistent Help — A
**Requirement:** *(New in WCAG 2.2.)* If a help mechanism (contact link, chat, help link) repeats across pages, it appears in the same relative order/location.
**Implementation (React/Tailwind):** Place help affordances (support link, contact, chat launcher) in a consistent slot within `header`/`footer` so their relative position is stable across pages. Don't move the help link around per template.
**Verify:** Manual — confirm help entry points are positioned consistently across page compositions.

---

## 3.3 Input Assistance

### 3.3.1 Error Identification — A
**Requirement:** Input errors are identified in text and the erroring field is indicated.
**Implementation (React/Tailwind):** On validation failure, set `aria-invalid="true"` on the field, render a text error message, and link it with `aria-describedby={errorId}`. Use the `inline-error` atom for the message (text + icon + `text-critical`, per 1.4.1 — colour is not the only cue). Don't signal errors with border colour alone.
**Verify:** axe (`aria-valid-attr`, describedby wiring); play function triggers an error and asserts `aria-invalid` + the linked message is announced.

### 3.3.2 Labels or Instructions — A
**Requirement:** Labels or instructions are provided when content requires user input.
**Implementation (React/Tailwind):** Every field atom has a visible, associated `<label htmlFor>` (or wraps the input in a label). Make `label` a required prop. Surface format hints (e.g. date format, required marker) via `aria-describedby` helper text (`inline-helper` atom), not placeholder-only. Group related controls in `<fieldset><legend>`.
**Verify:** axe (`label`); play function asserts `getByLabelText` finds each field.

### 3.3.3 Error Suggestion — AA
**Requirement:** If an input error is detected and a correction is known, suggest it (unless it would jeopardize security/purpose).
**Implementation (React/Tailwind):** Error messages should be actionable: "Enter a valid email like name@example.com", "Quantity must be 1–99" — not just "Invalid". Drive suggestion text from the validation rule. Render in the same `inline-error`/`aria-describedby` channel as 3.3.1.
**Verify:** Manual review of message content; play function asserts the suggestion text appears on the relevant error.

### 3.3.4 Error Prevention (Legal, Financial, Data) — AA
**Requirement:** For submissions that are legal/financial or change/delete user data, the action is reversible, checked, or confirmed.
**Implementation (React/Tailwind):** For checkout/order/delete flows, provide a confirmation step (review screen or confirm dialog) before committing, or a way to reverse. Destructive actions (remove from cart, delete list) use a confirming `Modal`. Components expose the confirm affordance; the flow lives in organisms/templates.
**Verify:** play function — assert destructive/confirm actions require a confirmation step; manual flow review.

### 3.3.7 Redundant Entry — A
**Requirement:** *(New in WCAG 2.2.)* Information already entered in the same process is auto-populated or selectable, not re-typed (unless re-entry is essential, e.g. a password).
**Implementation (React/Tailwind):** In multi-step forms (`delivery-form`, `login-form`, checkout), don't ask for the same data twice — offer "same as billing" toggles, pre-fill from earlier steps, or show prior values. Form molecules should accept initial/default values so consumers can pass forward earlier answers.
**Verify:** Manual flow review; assert later steps can be pre-populated from earlier ones.

### 3.3.8 Accessible Authentication (Minimum) — AA
**Requirement:** *(New in WCAG 2.2.)* Authentication must not require a cognitive function test (remembering/transcribing, solving puzzles) unless there's an alternative or it's object/personal-content recognition. Must allow paste and password managers.
**Implementation (React/Tailwind):** Login/auth field atoms must **not** block paste, not disable autofill, and not impose puzzle-style steps. Set proper `autocomplete` (`username`, `current-password`, `one-time-code`) so password managers and OTP autofill work. Never use `onPaste` preventDefault on credential fields. Don't build CAPTCHA-as-cognitive-test into the library.
**Verify:** play function — assert paste is allowed and `autocomplete` is set on credential fields; axe (`autocomplete-valid`); manual check that password managers can fill.
