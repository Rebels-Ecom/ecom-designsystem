import{r as O}from"./index-6f814c40.js";import{C as h}from"./cart-sidebar-4baa0967.js";import{ShoppingListButtonStory as y,LatertOrderButtonStory as C,ButtonGoToCart as f}from"./button.stories-6e742f23.js";import{F as L}from"./featured-products.stories-c9c73eaa.js";import{C as v,a as w}from"./cart-product-list.stories-621eec58.js";import{D as N}from"./drawer-sidebar-cee9680d.js";import{B as s}from"./button-b550aacc.js";import{L as D}from"./link-button-80edf68b.js";import{F as G}from"./form-group-2e5fc1d5.js";import{T as F}from"./toggle-switch-3de5b197.js";import{a as A}from"./cart-product.stories-3b2b3c29.js";import{H as m}from"./heading-6b05711d.js";import{j as r,a as t}from"./jsx-runtime-76c5c2e2.js";import{G as n}from"./group-wrapper-8dd6fc40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./chunk-OPEUWD42-0dc0813d.js";import"./icon-ce8cb337.js";import"./button.module-3e783005.js";import"./product-card.stories-5b20ed2c.js";import"./picture-1385f78c.js";import"./divider-lines-aed21525.js";import"./format-helper-db7271cf.js";import"./input-text-c991f326.js";import"./form-helper-ce65ae5e.js";import"./product-variant-list-62a9c744.js";import"./product-variant-322089ce.js";import"./radio-button-2412efc2.js";import"./tag-f7025b30.js";import"./dummy-product-a4cbc78e.js";import"./product-carousel-aa7d56b2.js";import"./useSwipe-848e627d.js";import"./index-cb7985c3.js";import"./above-38bf1a4b.js";import"./product-card-list.stories-e9a5ed6c.js";import"./ui-link-a6e7e805.js";import"./index-bacfeb97.js";import"./icon-button-c73945f1.js";import"./inline-helper-text-34c1f55e.js";import"./inline-error-text-be6d2135.js";import"./loader-79f9fda8.js";import"./icon-button.stories-b61016a8.js";const kt={title:"Design System/Organisms/CartSidebar",component:h},B={render:({...o})=>{var p,d;const[k,i]=O.useState(!1);function P(){i(!0)}function T(){i(!1)}return r("div",{style:{margin:"auto",position:"relative"},className:"light",children:[t(s,{onClick:P,type:"button",surface:"primary",children:"Open sidebar"}),t(N,{onClose:T,isOpen:k,children:r(h,{classNames:["light"],children:[r(n,{position:"apart",children:[t(m,{order:3,children:o.heading}),t(m,{order:3,children:"1378,00 kr"})]}),r(n,{spacing:"xl",children:[t(s,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),t(s,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),t(w,{children:(d=(p=o==null?void 0:o.cartProductsList)==null?void 0:p.children)==null?void 0:d.map(x=>t(A,{...x},Math.random()))}),r(n,{spacing:"xl",children:[t(D,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),t(G,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",isToggleBtnLabel:!0,children:t(F,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})]})}},a={...B,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:y.args,latestOrderButton:C.args,cartProductsList:v.args,goToCartButton:f.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:L.args}},e={...B,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:y.args,latestOrderButton:C.args,cartProductsList:[],goToCartButton:f.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:L.args}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...CartSidebarStoryTemplate,
  args: {
    heading: 'Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
    shoppingListButton: ShoppingListButtonStory.args,
    latestOrderButton: LatertOrderButtonStory.args,
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
    latestOrderButton: LatertOrderButtonStory.args,
    cartProductsList: [],
    goToCartButton: ButtonGoToCart.args,
    toggleSwitchLabel: 'Spara som inköpslista',
    suggestedProductsList: FeaturedProductsStory.args
  }
}`,...(b=(S=e.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const Pt=["CartSidebarStory","CartSidebarStoryNoProducts"];export{a as CartSidebarStory,e as CartSidebarStoryNoProducts,Pt as __namedExportsOrder,kt as default};
//# sourceMappingURL=cart-sidebar.stories-c1dba00d.js.map
