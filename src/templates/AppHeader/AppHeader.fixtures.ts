import type { NavItem } from '../../components/organisms/MobileNavigation'
import type { SearchNoResult } from '../../components/molecules/Search'
import type { UserProfileMenuItem } from '../../components/organisms/UserProfileDropdown'
import type { TopNavLink } from '../../components/molecules/TopNavBar'

/**
 * Story-only fixtures for {@link AppHeader}, shaped like the data the app's `HeaderContainer` /
 * `HeaderNavigation` feed the header (Swedish copy, deterministic — no network). Not part of the public
 * API; the template is Storybook-only.
 */

/** The mega-menu tree (mirrors the app's `HeaderNavigation` for the B2B portal). */
export const navCategories: NavItem[] = [
  { name: 'Nyheter', href: '/nyheter' },
  { name: 'Mina mest köpta', href: '/mina-mest-kopta' },
  {
    name: 'Drycker',
    href: '/drycker',
    subtitle: 'Hela vårt sortiment',
    links: [
      {
        name: 'Öl',
        href: '/drycker/ol',
        links: [
          { name: 'Ljus lager', href: '/drycker/ol/ljus-lager' },
          { name: 'Ale', href: '/drycker/ol/ale' },
          { name: 'Alkoholfritt', href: '/drycker/ol/alkoholfritt' },
        ],
      },
      {
        name: 'Vin',
        href: '/drycker/vin',
        links: [
          { name: 'Rött', href: '/drycker/vin/rott' },
          { name: 'Vitt', href: '/drycker/vin/vitt' },
          { name: 'Mousserande', href: '/drycker/vin/mousserande' },
        ],
      },
      {
        name: 'Vatten & Läsk',
        href: '/drycker/vatten-lask',
        links: [
          { name: 'Vatten', href: '/drycker/vatten' },
          { name: 'Läsk', href: '/drycker/lask' },
        ],
      },
    ],
  },
  {
    name: 'Tillbehör',
    href: '/tillbehor',
    links: [
      { name: 'Glas', href: '/tillbehor/glas' },
      { name: 'Serveringsmateriel', href: '/tillbehor/servering' },
    ],
  },
  {
    name: 'Event & Nätverk',
    href: '/event-natverk',
    links: [
      { name: 'Kommande event', href: '/event' },
      { name: 'Nätverk', href: '/natverk' },
    ],
  },
  {
    name: 'Utbildningar',
    href: '/utbildningar',
    links: [
      { name: 'Öl-akademin', href: '/utbildningar/ol' },
      { name: 'Vinkurser', href: '/utbildningar/vin' },
    ],
  },
  {
    name: 'Inspiration',
    href: '/inspiration',
    links: [
      { name: 'Recept', href: '/inspiration/recept' },
      { name: 'Artiklar', href: '/inspiration/artiklar' },
    ],
  },
  { name: 'Varumärken', href: '/varumarken' },
  {
    name: 'Om Spendrups',
    href: '/om-spendrups',
    links: [
      { name: 'Vår historia', href: '/om-spendrups/historia' },
      { name: 'Hållbarhet', href: '/om-spendrups/hallbarhet' },
    ],
  },
]

/** A small catalogue the search harness filters by query to produce type-ahead results. */
export const searchCatalog: { name: string; slug: string; text: string }[] = [
  { name: 'Norrlands Guld Export', slug: '/product/1105101', text: 'Öl · 50cl' },
  { name: 'Mariestads', slug: '/product/1103701', text: 'Öl · 33cl' },
  { name: 'El Esteco Malbec', slug: '/product/2543824', text: 'Vin · 75cl' },
  { name: 'Pistonhead Kustom Lager', slug: '/product/1186711', text: 'Öl · 33cl' },
  { name: 'Gränges Lättöl', slug: '/product/1181700', text: 'Öl · 33cl' },
]

export const searchNoResult: SearchNoResult = {
  label: 'Inga träffar',
  text: 'Vi hittade inga produkter som matchar din sökning.',
}

/** The user-profile drawer menu (mirrors the app's `LoginStatus` / profile links). */
export const profileItems: UserProfileMenuItem[] = [
  { id: 'account', label: 'Mina sidor', href: '/mina-sidor' },
  { id: 'orders', label: 'Orderhistorik', href: '/mina-sidor/orderhistorik' },
  { id: 'lists', label: 'Inköpslistor', href: '/mina-sidor/inkopslistor' },
  { id: 'invoices', label: 'Fakturor', href: '/mina-sidor/fakturor' },
]

/** The slim utility bar quick-links (left side). */
export const topLeftLinks: TopNavLink[] = [
  { href: '/kontakt', children: 'Kontakta oss' },
  { href: '/faq', children: 'Vanliga frågor' },
]
export const topRightLinks: TopNavLink[] = []
/** Right side of the utility bar — the signed-in customer (mirrors "Inloggad som 377693, SPENDRUPS EHANDEL"). */
export const loggedInAs = 'Inloggad som 377693, SPENDRUPS EHANDEL'
