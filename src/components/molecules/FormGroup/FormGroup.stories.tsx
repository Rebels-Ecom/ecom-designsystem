import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { FormGroup } from './FormGroup';
import { InputText } from '../InputText';
import { UiLink } from '../UiLink';
import { Textarea } from '../../atoms/Textarea';

const meta = {
  title: 'Design System/Molecules/FormGroup',
  component: FormGroup,
  // The legacy frames were captured inside a 616px-wide column; reproduce it so the full-width
  // control diffs at the same size.
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '616px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Canonical labelled field. The `play` proves the `<label>` names the control (`getByLabelText`) and
 * that the helper text is exposed to the field as its accessible description via `aria-describedby`.
 */
export const Default: Story = {
  args: {
    label: 'What are you looking for?',
    requiredText: '(Required)',
    helperText: 'Add the product name so we can help you faster.',
    formElementId: 'fg-search',
    children: <InputText id='fg-search' />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('What are you looking for? (Required)');
    await expect(input).toHaveAccessibleDescription(/Add the product name/);
  },
};

/**
 * Error state. The `play` proves the error is wired to the field: `aria-invalid="true"`, the message
 * is part of the field's accessible description (`aria-describedby`), and it is a `role="alert"`.
 */
export const WithError: Story = {
  args: {
    label: 'What are you looking for?',
    helperText: 'Add the product name so we can help you faster.',
    errorText: 'Please enter a product name.',
    formElementId: 'fg-search',
    children: <InputText id='fg-search' />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('What are you looking for?');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription(
      /Please enter a product name/,
    );
    await expect(canvas.getByRole('alert')).toHaveTextContent(
      'Please enter a product name.',
    );
  },
};

/*
 * Visual-regression frames — reproduce the eight legacy `form-group-*` baselines (InputText + Textarea
 * × default / error / disabled / right-label-text) with the Swedish copy. No `play`,
 * `layout: 'fullscreen'`. The `labelRightText` link is an accessible blue `UiLink` (legacy's orange
 * link fails AA) — the same documented orange→blue divergence as UiLink, a tiny top-right glyph well
 * under the 2% gate.
 */
const sv = {
  label: 'Vad letar du efter?',
  helperText: 'Genom att skriva produktnamn, kan vi lättare hjälpa dig vidare.',
  requiredText: '(Obligatorisk)',
};
const errorText = 'Du behöver fylla i produktnamn';
const seeProducts = <UiLink href='/'>Se produkter</UiLink>;

// ── InputText ──
export const VisualInputText: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    ...sv,
    formElementId: 'fg-input',
    children: <InputText id='fg-input' />,
  },
};

export const VisualInputTextError: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    ...sv,
    errorText,
    formElementId: 'fg-input',
    children: <InputText id='fg-input' />,
  },
};

export const VisualInputTextDisabled: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    ...sv,
    formElementId: 'fg-input',
    children: <InputText id='fg-input' disabled />,
  },
};

export const VisualInputTextRightLabel: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    ...sv,
    requiredText: '',
    labelRightText: seeProducts,
    formElementId: 'fg-input',
    children: <InputText id='fg-input' />,
  },
};

// ── Textarea ──
export const VisualTextarea: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    ...sv,
    formElementId: 'fg-textarea',
    children: <Textarea id='fg-textarea' />,
  },
};

export const VisualTextareaError: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    ...sv,
    errorText,
    formElementId: 'fg-textarea',
    children: <Textarea id='fg-textarea' />,
  },
};

export const VisualTextareaDisabled: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    ...sv,
    formElementId: 'fg-textarea',
    children: <Textarea id='fg-textarea' disabled />,
  },
};

export const VisualTextareaRightLabel: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    ...sv,
    requiredText: '',
    labelRightText: seeProducts,
    formElementId: 'fg-textarea',
    children: <Textarea id='fg-textarea' />,
  },
};
