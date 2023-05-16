import{r as O}from"./index-6f814c40.js";import{C as h}from"./cart-sidebar-4baa0967.js";import{ShoppingListButtonStory as y,LatertOrderButtonStory as C,ButtonGoToCart as f}from"./button.stories-0e13d9d3.js";import{F as L}from"./featured-products.stories-9d33b7a7.js";import{CartProductListStory as v}from"./cart-product-list.stories-46dddbc7.js";import{D as w}from"./drawer-sidebar-7a8d13e3.js";import{B as s}from"./button-c74bbcb5.js";import{C as N}from"./cart-product-list-a1b9ae6a.js";import{L as D}from"./link-button-2405d582.js";import{F as G}from"./form-group-d97f30fc.js";import{T as F}from"./toggle-switch-3de5b197.js";import{a as A}from"./cart-product.stories-00eff095.js";import{H as m}from"./heading-43e58b60.js";import{j as r,a as t}from"./jsx-runtime-76c5c2e2.js";import{G as n}from"./group-wrapper-a93e0b46.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./chunk-OPEUWD42-0dc0813d.js";import"./icon-8c95f315.js";import"./button.module-3e783005.js";import"./product-card.stories-23e88546.js";import"./picture-1385f78c.js";import"./divider-lines-aed21525.js";import"./format-helper-aac6be36.js";import"./input-text-b673fc3a.js";import"./form-helper-ce65ae5e.js";import"./product-variant-list-7d72977b.js";import"./product-variant-322089ce.js";import"./radio-button-2412efc2.js";import"./tag-fb485b4a.js";import"./dummy-product-a4cbc78e.js";import"./product-carousel-f252ee97.js";import"./useSwipe-848e627d.js";import"./index-cb7985c3.js";import"./above-2d9e2fa5.js";import"./product-card-list.stories-9d159418.js";import"./icon-button-6af62ba5.js";import"./ui-link-d168131e.js";import"./loader-7383e603.js";import"./icon-button.stories-5a73a7ee.js";import"./index-bacfeb97.js";import"./inline-helper-text-34c1f55e.js";import"./inline-error-text-836183b9.js";const Pt={title:"Design System/Organisms/CartSidebar",component:h},B={render:({...o})=>{var p,d;const[k,i]=O.useState(!1);function P(){i(!0)}function T(){i(!1)}return r("div",{style:{margin:"auto",position:"relative"},className:"light",children:[t(s,{onClick:P,type:"button",surface:"primary",children:"Open sidebar"}),t(w,{onClose:T,isOpen:k,children:r(h,{classNames:["light"],children:[r(n,{position:"apart",children:[t(m,{order:3,children:o.heading}),t(m,{order:3,children:"1378,00 kr"})]}),r(n,{spacing:"xl",children:[t(s,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),t(s,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),t(N,{children:(d=(p=o==null?void 0:o.cartProductsList)==null?void 0:p.children)==null?void 0:d.map(x=>t(A,{...x},Math.random()))}),r(n,{spacing:"xl",children:[t(D,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),t(G,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",isToggleBtnLabel:!0,children:t(F,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})]})}},a={...B,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:y.args,latestOrderButton:C.args,cartProductsList:v.args,goToCartButton:f.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:L.args}},e={...B,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:y.args,latestOrderButton:C.args,cartProductsList:[],goToCartButton:f.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:L.args}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(S=e.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const Tt=["CartSidebarStory","CartSidebarStoryNoProducts"];export{a as CartSidebarStory,e as CartSidebarStoryNoProducts,Tt as __namedExportsOrder,Pt as default};
//# sourceMappingURL=cart-sidebar.stories-ac875036.js.map
