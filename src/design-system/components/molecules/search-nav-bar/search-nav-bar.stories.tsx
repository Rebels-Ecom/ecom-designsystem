import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchNavBar } from './search-nav-bar'
import { SearchStory } from '../../atoms/search/search.stories'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_desktop_horizontal.svg'
import logotype_mobile_horiontal from '../../../../logotypes/Spendrups_logo_desktop_horizontal.svg'

const meta: Meta<typeof SearchNavBar> = {
  title: 'Design System/Molecules/Search Nav Bar',
  component: SearchNavBar,
}

export default meta
type Story = StoryObj<typeof SearchNavBar>

const SearchNavBarStoryTemplate: Story = {
  render: (args) => (
    <div style={{ position: 'relative', height: '5rem', display: 'flex', justifyContent: 'center', padding: '0.5rem 1rem' }}>
      <SearchNavBar {...args} />
    </div>
  ),
}

const itemsToFilterOn = [
  { id: 'NCG626689', label: 'Ekoöl på riktigt', text: 'Testa vår ekoöl', slug: 'eko-ol' },
  { id: 'NCG691725', label: 'Loka årets vinnare', text: 'Loka årets vinnare i sustainable brand index', slug: 'loka-arets-vinnare' },
  { id: 'NCG383172', label: 'Spendrups hållbarhetsredovisning', text: 'Läsa om Spendrups hållbarhetsredovisning', slug: 'spendrups-hallbarhetsredovisning' },
  { id: 'NCG521824', label: 'Briska', text: 'Briska', slug: 'briska' },
  { id: 'NCG583714', label: 'Spring wine and spirits', text: 'Vårens nya smak', slug: 'spring-wine-spirits' },
  { id: 'NCG769205', label: 'Det här är vi', text: 'Familjeföretaget med öl i blodet', slug: 'om-oss' },
  { id: 'NCG880524', label: 'Kiviks musteri', text: 'Prova nya cider', slug: 'kiviks-cider' },
  { id: 'NCG153793', label: 'Här är nya Loka likes favorites', text: 'loka likes favorites - smakar glass och kokos ', slug: 'loka-favorites' },
  { id: 'NCG660063', label: 'Övrig läsk och vatten', text: 'Övrig läsk och vatten', slug: 'lask-och-vatten' },
]

const searchNavBarArgs = {
  logo: {
    src: logotype_desktop_horizontal,
    alt: 'logo',
    href: '/',
    id: 'logo',
    sources: [
      { srcset: logotype_mobile_horiontal, media: `(max-width: 767px)` },
      { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
    ],
  },
  searchNavLinks: [
    {
      navLinkType: 'favorites',
      href: '/favorites',
      text: 'My favorites',
      isExternal: false,
    },
    {
      navLinkType: 'cart',
      href: '/cart',
      text: 'Cart',
      isExternal: false,
    },
  ],
  linkComponent: 'a',
  searchArgs: SearchStory.args,
  itemsToFilterOn: itemsToFilterOn,
}

export const SearchNavBarStory = {
  ...SearchNavBarStoryTemplate,
  args: {
    ...searchNavBarArgs,
  },
}
