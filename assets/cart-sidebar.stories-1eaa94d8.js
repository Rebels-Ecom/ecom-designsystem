import{r as P,a as o,j as t}from"./jsx-runtime-a3a6c0b8.js";import{C as L}from"./cart-sidebar-a3081d80.js";import{Button_Large_Icon_Right as r}from"./button.stories-42790d50.js";import{F as f}from"./featured-products.stories-b5fb3eaf.js";import{CartProductListStory as x}from"./cart-product-list.stories-ae95b9da.js";import{D as T}from"./drawer-sidebar-da1ff374.js";import{B as s}from"./button-8a1c536b.js";import{C as R}from"./cart-product-list-c0ae9926.js";import{L as v}from"./link-button-1db7193c.js";import{F as w}from"./form-group-953293a9.js";import{T as I}from"./toggle-switch-6a44e951.js";import{b as N}from"./cart-product.stories-79bc66f7.js";import{H as c}from"./heading-808ea78c.js";import{G as n}from"./group-wrapper-8f1ce8c7.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./icon-5fefd509.js";import"./button.module-d4e6cb42.js";import"./loader-72deb8c4.js";import"./product-card-699e7030.js";import"./picture-helper-1d1954b7.js";import"./format-helper-6b4b1091.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-fb05b21c.js";import"./product-quantity-input-289618f1.js";import"./input-text-aa9063aa.js";import"./form-helper-ce65ae5e.js";import"./tags-list-5108b032.js";import"./tag-fac2d6a3.js";import"./placeholder-0f82f781.js";import"./picture-7e21d28d.js";import"./icon-button-4986945f.js";import"./ui-link-a18343fc.js";import"./motion-54668070.js";import"./product-card-vertical-3575fa71.js";import"./product-variant-list-019e3375.js";import"./product-variant-3f6157eb.js";import"./radio-button-f4956d18.js";import"./product-carousel-d062b02d.js";import"./carousel-e9caa029.js";import"./content-wrapper-c985da24.js";import"./below-e3c1f628.js";import"./product-card-list.stories-fbbde57f.js";import"./index-4058f88b.js";import"./product-card.stories-2edc9fc5.js";import"./dummy-product-2b5b59bc.js";import"./icon-button.stories-2d5d60c9.js";import"./inline-helper-text-1f598236.js";import"./inline-error-text-34a06e17.js";const It={title:"Design System/Organisms/CartSidebar",component:L},C={render:({...a})=>{var d,m;const[y,p]=P.useState(!1);function k(){p(!0)}function B(){p(!1)}return o("div",{style:{margin:"auto",position:"relative"},className:"light",children:[t(s,{onClick:k,type:"button",surface:"primary",children:"Open sidebar"}),t(T,{onClose:B,isOpen:y,children:o(L,{classNames:["light"],children:[o(n,{position:"apart",children:[t(c,{order:3,children:a.heading}),t(c,{order:3,children:"1378,00 kr"})]}),o(n,{spacing:"xl",children:[t(s,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),t(s,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),t(R,{children:(m=(d=a==null?void 0:a.cartProductsList)==null?void 0:d.children)==null?void 0:m.map(_=>t(N,{..._},Math.random()))}),o(n,{spacing:"xl",children:[t(v,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),t(w,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",isToggleBtnLabel:!0,children:t(I,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})]})}},e={...C,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:r.args,latestOrderButton:r.args,cartProductsList:x.args,goToCartButton:r.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:f.args}},i={...C,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:r.args,latestOrderButton:r.args,cartProductsList:[],goToCartButton:r.args,toggleSwitchLabel:"Spara som inköpslista",suggestedProductsList:f.args}};var g,l,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...CartSidebarStoryTemplate,
  args: {
    heading: 'Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
    shoppingListButton: Button_Large_Icon_Right.args,
    latestOrderButton: Button_Large_Icon_Right.args,
    cartProductsList: CartProductListStory.args,
    goToCartButton: Button_Large_Icon_Right.args,
    toggleSwitchLabel: 'Spara som inköpslista',
    suggestedProductsList: FeaturedProductsStory.args
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,b,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...CartSidebarStoryTemplate,
  args: {
    heading: 'Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
    shoppingListButton: Button_Large_Icon_Right.args,
    latestOrderButton: Button_Large_Icon_Right.args,
    cartProductsList: [],
    goToCartButton: Button_Large_Icon_Right.args,
    toggleSwitchLabel: 'Spara som inköpslista',
    suggestedProductsList: FeaturedProductsStory.args
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const Nt=["CartSidebarStory","CartSidebarStoryNoProducts"];export{e as CartSidebarStory,i as CartSidebarStoryNoProducts,Nt as __namedExportsOrder,It as default};
