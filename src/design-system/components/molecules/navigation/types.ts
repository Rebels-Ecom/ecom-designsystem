export type TNavLink = {
  // Link text / title
  name: string;
  // Path to destination
  href: string;
  // Boolean for toggling target="_blank"
  openInNewTab?: boolean;
  // Descriptive text
  description?: string;
  links?: never;
};

export type TNavCategory = {
  // Link text / title
  name: string;
  // Path to destination
  href: string;
  // Boolean for toggling target="_blank"
  openInNewTab?: boolean;
  // Descriptive text
  description?: string;
  // Subtitle
  subtitle?: string;
  // Required sub level of links
  links: Array<TNavLink | TNavCategory>;
};

export interface INavigation {
  // Array of all your link objects
  categories: Array<TNavLink | TNavCategory>;
  // Active slug/path
  currentSlug: string;
  // inital active top level
  initial?: string;
  // User logged in status
  isAuthenticated?: boolean;
  signOutLabel?: string;
  onSignOut?: () => void;
  actions?: JSX.Element;
}