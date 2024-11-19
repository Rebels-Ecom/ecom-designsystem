import{r as B,j as t}from"./jsx-runtime-03333307.js";import{C as S}from"./cart-sidebar-7b20221c.js";import{Button_Large_Icon_Right as r}from"./button.stories-fe3984a5.js";import{CartProductListStory as L}from"./cart-product-list.stories-ae316425.js";import{D as k}from"./drawer-sidebar-7d4d099a.js";import{B as e}from"./button-adba1f05.js";import{C as j}from"./cart-product-list-f323bfda.js";import{L as P}from"./link-button-deeb7d4c.js";import{b as R}from"./cart-product.stories-ec97fb41.js";import{H as c}from"./heading-ba18f9a9.js";import{G as s}from"./group-wrapper-5bc35e6d.js";import"./index-09749a66.js";import"./chunk-MZXVCX43-aa6c8130.js";import"./v4-4a60fe23.js";import"./icon-cf6ebd85.js";import"./button.module-0b94080e.js";import"./loader-5c06d14e.js";import"./product-quantity-input-b87eabed.js";import"./input-text-0d02e73b.js";import"./form-helper-af1dc92c.js";import"./picture-helper-e0ae1ee4.js";import"./picture-7d923a99.js";import"./icon-button-876cd016.js";import"./ui-link-9ccf406a.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./defaultFallbackImage-b43581a6.js";import"./format-helper-a8a0bc10.js";import"./icon-button.stories-3633d21a.js";import"./useOnClickOutside-9d2c35bb.js";import"./index-61679f6b.js";const st={title:"Design System/Organisms/CartSidebar",component:S},C={render:({...o})=>{var d,p;const[x,i]=B.useState(!1);function f(){i(!0)}function _(){i(!1)}return t.jsxs("div",{style:{margin:"auto",position:"relative"},className:"light",children:[t.jsx(e,{onClick:f,type:"button",surface:"primary",children:"Open sidebar"}),t.jsx(k,{onClose:_,isOpen:x,children:t.jsxs(S,{classNames:["light"],children:[t.jsxs(s,{position:"apart",children:[t.jsx(c,{order:3,children:o.heading}),t.jsx(c,{order:3,children:"1378,00 kr"})]}),t.jsxs(s,{spacing:"xl",children:[t.jsx(e,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),t.jsx(e,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),t.jsx(j,{children:(p=(d=o==null?void 0:o.cartProductsList)==null?void 0:d.children)==null?void 0:p.map(y=>t.jsx(R,{...y},Math.random()))}),t.jsx(s,{spacing:"xl",children:t.jsx(P,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"})})]})})]})}},a={...C,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:r.args,latestOrderButton:r.args,cartProductsList:L.args,goToCartButton:r.args}},n={...C,args:{heading:"Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>",shoppingListButton:r.args,latestOrderButton:r.args,cartProductsList:[],goToCartButton:r.args}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...CartSidebarStoryTemplate,
  args: {
    heading: 'Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
    shoppingListButton: Button_Large_Icon_Right.args,
    latestOrderButton: Button_Large_Icon_Right.args,
    cartProductsList: CartProductListStory.args,
    goToCartButton: Button_Large_Icon_Right.args
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,b,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...CartSidebarStoryTemplate,
  args: {
    heading: 'Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
    shoppingListButton: Button_Large_Icon_Right.args,
    latestOrderButton: Button_Large_Icon_Right.args,
    cartProductsList: [],
    goToCartButton: Button_Large_Icon_Right.args
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const it=["CartSidebarStory","CartSidebarStoryNoProducts"];export{a as CartSidebarStory,n as CartSidebarStoryNoProducts,it as __namedExportsOrder,st as default};
