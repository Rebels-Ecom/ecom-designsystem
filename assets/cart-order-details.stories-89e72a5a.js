import{c as m}from"./index-09749a66.js";import{j as r}from"./jsx-runtime-03333307.js";import{CartProductListStory as y}from"./cart-product-list.stories-259e88de.js";import{B as i}from"./button-adba1f05.js";import{L as g}from"./link-button-deeb7d4c.js";import{C as h}from"./cart-product-list-f323bfda.js";import{H as c}from"./heading-ba18f9a9.js";import{G as o}from"./group-wrapper-5bc35e6d.js";import{b as x}from"./cart-product.stories-97b3eeaa.js";const f="_cartOrderDetails_2czyz_1",j="_contentWrapper_2czyz_8",_="_productListWrapper_2czyz_19",C={cartOrderDetails:f,contentWrapper:j,productListWrapper:_};function s({children:t,className:e}){return r.jsx("div",{className:m(C.cartOrderDetails,e||""),children:t})}s.__docgenInfo={description:"@deprecated",methods:[],displayName:"CartOrderDetails",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Design System/Deprecated/CartOrderDetails",component:s},O={render:t=>{var e,n;return r.jsx("div",{style:{margin:"auto",position:"relative"},children:r.jsx(s,{children:r.jsxs(o,{direction:"column",align:"left",spacing:"lg",children:[r.jsxs(o,{position:"apart",children:[r.jsx(c,{order:3,children:t.heading}),r.jsx(c,{order:3,children:"1378,00 kr"})]}),r.jsxs(o,{children:[r.jsx(i,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),r.jsx(i,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),r.jsx(h,{children:(n=(e=t==null?void 0:t.cartProductsList)==null?void 0:e.children)==null?void 0:n.map(u=>r.jsx(x,{...u,onClickRemoveProduct:()=>{}},Math.random()))}),r.jsx(o,{align:"right",children:r.jsx(g,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"})})]})})})}},a={...O,args:{heading:"Din Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p>Tillagda produkter</p>",cartProductsList:y.args}};var d,p,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...CartOrderDetailsStoryTemplate,
  args: {
    heading: 'Din Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p>Tillagda produkter</p>',
    cartProductsList: CartProductListStory.args
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const L=["CartOrderDetailsStory"],N=Object.freeze(Object.defineProperty({__proto__:null,CartOrderDetailsStory:a,__namedExportsOrder:L,default:D},Symbol.toStringTag,{value:"Module"}));export{a as C,s as a,N as c};