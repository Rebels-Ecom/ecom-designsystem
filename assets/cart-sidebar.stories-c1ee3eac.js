import{r as O}from"./index-6f814c40.js";import{C as h}from"./cart-sidebar-88c024f1.js";import{ShoppingListButtonStory as y,LatestOrderButtonStory as C,ButtonGoToCart as f}from"./button.stories-3280b45e.js";import{F as L}from"./featured-products.stories-db005d59.js";import{CartProductListStory as v}from"./cart-product-list.stories-4232dfa9.js";import{D as w}from"./drawer-sidebar-89d8e917.js";import{B as s}from"./button-2f92d37b.js";import{C as N}from"./cart-product-list-a1b9ae6a.js";import{L as D}from"./link-button-0c2c3426.js";import{F as G}from"./form-group-e0041968.js";import{T as F}from"./toggle-switch-f3cc1685.js";import{b as A}from"./cart-product.stories-c7ea9da4.js";import{H as m}from"./heading-1b9cc643.js";import{j as r,a as t}from"./jsx-runtime-76c5c2e2.js";import{G as i}from"./group-wrapper-53e2b69f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./chunk-OPEUWD42-0dc0813d.js";import"./icon-db71b6f0.js";import"./button.module-3bdf7fd3.js";import"./loader-ce89f5e5.js";import"./product-card.stories-2cb676f8.js";import"./picture-helper-86177d87.js";import"./format-helper-6b4b1091.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-06b1bbfe.js";import"./product-quantity-input-028b8c2d.js";import"./input-text-9c8d5d7a.js";import"./form-helper-ce65ae5e.js";import"./tags-list-5098e390.js";import"./tag-4d467d25.js";import"./placeholder-13465f94.js";import"./picture-097a8d40.js";import"./icon-button-200b4be5.js";import"./ui-link-400688a2.js";import"./motion-354a1bac.js";import"./product-card-vertical-8f800067.js";import"./product-variant-list-8a51d410.js";import"./product-variant-39800cba.js";import"./radio-button-14f33c2f.js";import"./dummy-product-117119f6.js";import"./product-carousel-c957d255.js";import"./carousel-f8718485.js";import"./content-wrapper-19d15755.js";import"./below-25cbe62a.js";import"./product-card-list.stories-511ce392.js";import"./icon-button.stories-7c5a874b.js";import"./index-b3e0e324.js";import"./inline-helper-text-34c1f55e.js";import"./inline-error-text-54c9b914.js";const Dt={title:"Design System/Organisms/CartSidebar",component:h},B={render:({...o})=>{var p,d;const[k,n]=O.useState(!1);function P(){n(!0)}function T(){n(!1)}return r("div",{style:{margin:"auto",position:"relative"},className:"light",children:[t(s,{onClick:P,type:"button",surface:"primary",children:"Open sidebar"}),t(w,{onClose:T,isOpen:k,children:r(h,{classNames:["light"],children:[r(i,{position:"apart",children:[t(m,{order:3,children:o.heading}),t(m,{order:3,children:"1378,00 kr"})]}),r(i,{spacing:"xl",children:[t(s,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),t(s,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),t(N,{children:(d=(p=o==null?void 0:o.cartProductsList)==null?void 0:p.children)==null?void 0:d.map(x=>t(A,{...x},Math.random()))}),r(i,{spacing:"xl",children:[t(D,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),t(G,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",isToggleBtnLabel:!0,children:t(F,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})]})}},a={...B,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:y.args,latestOrderButton:C.args,cartProductsList:v.args,goToCartButton:f.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:L.args}},e={...B,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:y.args,latestOrderButton:C.args,cartProductsList:[],goToCartButton:f.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:L.args}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
//# sourceMappingURL=cart-sidebar.stories-c1ee3eac.js.map
