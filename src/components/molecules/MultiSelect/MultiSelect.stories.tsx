import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { MultiSelect, type MultiSelectOption, type MultiSelectProps } from './MultiSelect'

const meta = {
  title: 'Design System/Deprecated/MultiSelect',
  component: MultiSelect,
} satisfies Meta<typeof MultiSelect>

export default meta
type Story = StoryObj<typeof meta>

const landOptions: MultiSelectOption[] = [
  { name: 'Belgien', value: 'attributefilter*L10766_41516' },
  { name: 'England', value: 'attributefilter*L10766_118421' },
  { name: 'Irland', value: 'attributefilter*L10766_41532' },
  { name: 'Spanien', value: 'attributefilter*L10766_41523' },
  { name: 'Sverige', value: 'attributefilter*L10766_41547' },
]

const producerOptions: MultiSelectOption[] = [
  { name: 'Beavertown Brewery', value: 'attributefilter*L10770_110433' },
  { name: 'Brutal Brewing', value: 'attributefilter*L10766_118421' },
  { name: 'Cervezas Victoria', value: 'attributefilter*L10770_110444' },
  { name: 'Starobrno', value: 'attributefilter*L10770_41806' },
]

const packagingOptions: MultiSelectOption[] = [
  { name: 'Burk', value: 'attributefilter*L12336_122639' },
  { name: 'Engångsglas', value: 'attributefilter*L12336_122646' },
  { name: 'FAT', value: 'attributefilter*L12336_122643' },
  { name: 'Returglas', value: 'attributefilter*L12336_122649' },
]

/** Controlled wrapper mirroring how a consumer owns `selectedOptions`. */
function ControlledMultiSelect({
  name,
  options,
  icon,
  labels,
}: Pick<MultiSelectProps, 'name' | 'options' | 'icon' | 'labels'>) {
  const [selected, setSelected] = useState<string[]>([])
  const onToggleOption = (option: MultiSelectOption) =>
    setSelected((prev) =>
      prev.includes(option.value) ? prev.filter((value) => value !== option.value) : [...prev, option.value],
    )
  return (
    <div className="min-h-80">
      <MultiSelect
        name={name}
        options={options}
        selectedOptions={selected}
        onToggleOption={onToggleOption}
        icon={icon}
        labels={labels}
      />
    </div>
  )
}

/** Open the popup, toggle a checkbox and confirm the trigger reflects the single selection. */
export const Default: Story = {
  args: { name: 'Land', options: landOptions, icon: 'icon-map-pin', selectedOptions: [], onToggleOption: () => {} },
  render: (args) => <ControlledMultiSelect name={args.name} options={args.options} icon={args.icon} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Land' })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')

    const belgien = canvas.getByRole('checkbox', { name: 'Belgien' })
    await userEvent.click(belgien)
    await expect(belgien).toBeChecked()
    await expect(canvas.getByRole('button', { name: 'Land (Belgien)' })).toBeInTheDocument()

    // Escape closes the popup and returns focus to the trigger.
    await userEvent.keyboard('{Escape}')
    await expect(canvas.getByRole('button', { name: /Land/ })).toHaveFocus()
    await expect(canvas.queryByRole('checkbox', { name: 'Belgien' })).not.toBeInTheDocument()
  },
}

/** The multi-selection count is an overridable label; here it is localised to Swedish. */
export const Localized: Story = {
  args: {
    name: 'Land',
    options: landOptions,
    icon: 'icon-map-pin',
    selectedOptions: [],
    onToggleOption: () => {},
  },
  render: (args) => (
    <ControlledMultiSelect
      name={args.name}
      options={args.options}
      icon={args.icon}
      labels={{ selectedCount: (count) => `${count} valda` }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Land' }))
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Belgien' }))
    await userEvent.click(canvas.getByRole('checkbox', { name: 'England' }))
    await expect(canvas.getByRole('button', { name: 'Land (2 valda)' })).toBeInTheDocument()
  },
}

/** Static closed-trigger frame reproducing the legacy `multi-select-story-land` baseline. */
export const VisualLand: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { name: 'Land', options: landOptions, icon: 'icon-map-pin', selectedOptions: [], onToggleOption: () => {} },
}

/** Static closed-trigger frame reproducing the legacy `multi-select-story-producer` baseline. */
export const VisualProducer: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    name: 'Producent',
    options: producerOptions,
    icon: 'icon-award',
    selectedOptions: [],
    onToggleOption: () => {},
  },
}

/** Static closed-trigger frame reproducing the legacy `multi-select-story-packaging` baseline. */
export const VisualPackaging: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    name: 'Förpackning',
    options: packagingOptions,
    icon: 'icon-package',
    selectedOptions: [],
    onToggleOption: () => {},
  },
}
