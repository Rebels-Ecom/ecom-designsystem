import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { useState, type CSSProperties } from 'react'
import {
  colorSections,
  colorTokenCount,
  type ColorSection,
  type ColorToken,
} from './theme-colors'

/**
 * Live color reference for the design system. The tokens below are parsed from
 * the `@theme` / `@theme inline` blocks in `src/styles/index.css` at build time
 * (see `theme-colors.ts`), so this page stays in sync with the theme
 * automatically — there is no hardcoded color list to maintain.
 */

/** Checkerboard so semi-transparent tokens read correctly against the card. */
const CHECKER: CSSProperties = {
  backgroundImage: `
    linear-gradient(45deg, rgb(0 0 0 / 0.06) 25%, transparent 25%),
    linear-gradient(-45deg, rgb(0 0 0 / 0.06) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgb(0 0 0 / 0.06) 75%),
    linear-gradient(-45deg, transparent 75%, rgb(0 0 0 / 0.06) 75%)`,
  backgroundSize: '16px 16px',
  backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0',
}

function Swatch({ token }: { token: ColorToken }) {
  const [copied, setCopied] = useState(false)

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(token.value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      // Clipboard is unavailable (e.g. insecure context) — silently ignore.
    }
  }

  return (
    <button
      type="button"
      onClick={copyValue}
      aria-label={`Copy ${token.name}, value ${token.value}`}
      className="group flex flex-col gap-2 rounded-lg border border-grey-300 bg-white p-2 text-left transition-colors hover:border-grey-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
    >
      <span
        className="relative block h-16 w-full overflow-hidden rounded-md border border-grey-300"
        style={CHECKER}
      >
        <span className="absolute inset-0" style={{ backgroundColor: token.value }} />
      </span>
      <span className="flex flex-col gap-0.5 px-0.5 pb-0.5">
        <span className="text-sm font-bold text-text-default">{token.name}</span>
        <span className="font-secondary text-xs text-text-subdued">
          {copied ? 'Copied!' : token.value}
        </span>
        {token.alias ? (
          <span className="font-secondary text-xs text-text-subdued">alias of {token.alias}</span>
        ) : null}
      </span>
    </button>
  )
}

function Group({ group }: { group: ColorSection['groups'][number] }) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-h-xs font-bold text-text-default">{group.name}</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {group.tokens.map((token) => (
          <Swatch key={token.cssVar} token={token} />
        ))}
      </div>
    </section>
  )
}

function Section({ section }: { section: ColorSection }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-h-s font-bold text-text-default">{section.name}</h2>
        <p className="max-w-content-text text-body text-text-subdued">{section.description}</p>
      </div>
      {section.groups.map((group) => (
        <Group key={group.name} group={group} />
      ))}
    </section>
  )
}

function Palette({ sections }: { sections: ColorSection[] }) {
  const total = sections.reduce(
    (sum, section) =>
      sum + section.groups.reduce((count, group) => count + group.tokens.length, 0),
    0,
  )

  return (
    <main className="flex flex-col gap-10 bg-white p-6 font-primary text-text-default">
      <header className="flex flex-col gap-2">
        <h1 className="text-h-m font-bold">Colors</h1>
        <p className="max-w-content-text text-body text-text-subdued">
          {total} tokens, extracted live from the Tailwind theme in{' '}
          <code className="font-secondary">src/styles/index.css</code>. Click any swatch to copy
          its value.
        </p>
      </header>
      {sections.map((section) => (
        <Section key={section.name} section={section} />
      ))}
    </main>
  )
}

const meta = {
  title: 'Design System/Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Central overview of the design system color palette, generated dynamically from the Tailwind v4 `@theme` tokens.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/** The full palette — primitives and semantic tokens. */
export const Overview: Story = {
  render: () => <Palette sections={colorSections} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Section + group headings render from the parsed theme.
    await expect(canvas.getByRole('heading', { level: 1, name: 'Colors' })).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { name: /brand/i })).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { name: /^action$/i })).toBeInTheDocument()

    // A foundational brand primitive and its resolved value are present.
    await expect(canvas.getAllByText('blue-500').length).toBeGreaterThan(0)
    await expect(canvas.getAllByText('#003e51').length).toBeGreaterThan(0)

    // Every token is an accessible, copyable button.
    const swatches = canvas.getAllByRole('button')
    await expect(swatches.length).toBe(colorTokenCount)
  },
}

/** Just the raw palette (ramps and base hues). */
export const Primitives: Story = {
  render: () => <Palette sections={colorSections.filter((s) => s.name === 'Primitives')} />,
}

/** Just the role-based semantic tokens. */
export const SemanticTokens: Story = {
  render: () => <Palette sections={colorSections.filter((s) => s.name === 'Semantic Tokens')} />,
}
