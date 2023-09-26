import{r as O}from"./index-6f814c40.js";import{C as h}from"./cart-sidebar-4baa0967.js";import{ShoppingListButtonStory as y,LatestOrderButtonStory as C,ButtonGoToCart as f}from"./button.stories-11476602.js";import{F as L}from"./featured-products.stories-6120c63f.js";import{CartProductListStory as v}from"./cart-product-list.stories-03986917.js";import{D as w}from"./drawer-sidebar-644efc19.js";import{B as s}from"./button-e43738b0.js";import{C as N}from"./cart-product-list-a1b9ae6a.js";import{L as D}from"./link-button-d63a9320.js";import{F as G}from"./form-group-90a35cf8.js";import{T as F}from"./toggle-switch-f3cc1685.js";import{b as A}from"./cart-product.stories-6a977a16.js";import{H as m}from"./heading-f7ae5826.js";import{j as r,a as t}from"./jsx-runtime-76c5c2e2.js";import{G as i}from"./group-wrapper-53e2b69f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./chunk-OPEUWD42-0dc0813d.js";import"./icon-7e598265.js";import"./button.module-42bc270d.js";import"./product-card.stories-5c447384.js";import"./picture-helper-86177d87.js";import"./format-helper-6b4b1091.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-4ed5cd8e.js";import"./product-quantity-input-ece36134.js";import"./input-text-b4497d63.js";import"./form-helper-ce65ae5e.js";import"./tags-list-f8e9454d.js";import"./tag-cf40f1b7.js";import"./loader-2ea78344.js";import"./placeholder-be41db54.js";import"./divider-lines-71f4f756.js";import"./picture-1385f78c.js";import"./icon-button-b8bc13de.js";import"./ui-link-edaab2a0.js";import"./product-card-vertical-5c92ba4e.js";import"./product-variant-list-2f60ef85.js";import"./product-variant-898c6f5d.js";import"./radio-button-14f33c2f.js";import"./dummy-product-117119f6.js";import"./product-carousel-b1268d06.js";import"./useSwipe-848e627d.js";import"./below-1d00122a.js";import"./product-card-list.stories-5a1e040a.js";import"./icon-button.stories-e21e5d16.js";import"./index-b3e0e324.js";import"./motion-354a1bac.js";import"./inline-helper-text-34c1f55e.js";import"./inline-error-text-8162642d.js";const Dt={title:"Design System/Organisms/CartSidebar",component:h},B={render:({...o})=>{var p,d;const[k,n]=O.useState(!1);function P(){n(!0)}function T(){n(!1)}return r("div",{style:{margin:"auto",position:"relative"},className:"light",children:[t(s,{onClick:P,type:"button",surface:"primary",children:"Open sidebar"}),t(w,{onClose:T,isOpen:k,children:r(h,{classNames:["light"],children:[r(i,{position:"apart",children:[t(m,{order:3,children:o.heading}),t(m,{order:3,children:"1378,00 kr"})]}),r(i,{spacing:"xl",children:[t(s,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),t(s,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),t(N,{children:(d=(p=o==null?void 0:o.cartProductsList)==null?void 0:p.children)==null?void 0:d.map(x=>t(A,{...x},Math.random()))}),r(i,{spacing:"xl",children:[t(D,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),t(G,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",isToggleBtnLabel:!0,children:t(F,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})]})}},a={...B,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:y.args,latestOrderButton:C.args,cartProductsList:v.args,goToCartButton:f.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:L.args}},e={...B,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:y.args,latestOrderButton:C.args,cartProductsList:[],goToCartButton:f.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:L.args}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...CartSidebarStoryTemplate,
  args: {
    heading: 'Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
    shoppingListButton: ShoppingListButtonStory.args,
    latestOrderButton: LatestOrderButtonStory.args,
    cartProductsList: CartProductListStory.args,
    goToCartButton: ButtonGoToCart.args,
    toggleSwitchLabel: 'Spara som inköpslista',
    suggestedProductsList: FeaturedProductsStory.args
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,S,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...CartSidebarStoryTemplate,
  args: {
    heading: 'Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
    shoppingListButton: ShoppingListButtonStory.args,
    latestOrderButton: LatestOrderButtonStory.args,
    cartProductsList: [],
    goToCartButton: ButtonGoToCart.args,
    toggleSwitchLabel: 'Spara som inköpslista',
    suggestedProductsList: FeaturedProductsStory.args
  }
}`,...(b=(S=e.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const Gt=["CartSidebarStory","CartSidebarStoryNoProducts"];export{a as CartSidebarStory,e as CartSidebarStoryNoProducts,Gt as __namedExportsOrder,Dt as default};
//# sourceMappingURL=cart-sidebar.stories-a32784e7.js.map
