/// <reference types="vite/client" />
/// <reference types="react" />
export type TIcon = 'icon-alert-circle' | 'icon-bell' | 'icon-arrow-right' | 'icon-mail' | 'icon-map-pin' | 'icon-menu' | 'icon-x' | 'icon-phone' | 'icon-refresh-cw' | 'icon-search' | 'icon-x-circle' | 'icon-plus-circle' | 'icon-chevron-down' | 'icon-layers' | 'icon-check' | 'icon-user' | 'icon-heart' | 'icon-shopping-cart' | 'icon-award' | 'icon-package' | 'icon-users';
export interface IIcon {
    icon: TIcon;
    className?: CSSModuleClasses | string;
}
declare const Icon: ({ icon, className }: IIcon) => JSX.Element;
export { Icon };
