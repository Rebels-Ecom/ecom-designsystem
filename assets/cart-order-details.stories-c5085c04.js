import{c as g}from"./index-74f03c09.js";import{a as r,j as o}from"./jsx-runtime-76c5c2e2.js";import{F as y}from"./featured-products.stories-e2941f34.js";import{CartProductListStory as h}from"./cart-product-list.stories-4d7c465d.js";import{B as c}from"./button-bc254079.js";import{L as f}from"./link-button-688965c9.js";import{F as _}from"./form-group-660f0dcc.js";import{T as C}from"./toggle-switch-f3cc1685.js";import{C as O}from"./cart-product-list-a1b9ae6a.js";import{H as d}from"./heading-e5a679a5.js";import{G as s}from"./group-wrapper-53e2b69f.js";import{b as D}from"./cart-product.stories-e6bf67cf.js";const S="_cartOrderDetails_2czyz_1",L="_contentWrapper_2czyz_8",P="_productListWrapper_2czyz_19",k={cartOrderDetails:S,contentWrapper:L,productListWrapper:P};function i({children:t,className:e}){return r("div",{className:g(k.cartOrderDetails,e||""),children:t})}try{i.displayName="CartOrderDetails",i.__docgenInfo={description:"",displayName:"CartOrderDetails",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const b={title:"Design System/Organisms/CartOrderDetails",component:i},v={render:({...t})=>{var e,n;return r("div",{style:{margin:"auto",position:"relative"},children:r(i,{children:o(s,{direction:"column",align:"left",spacing:"lg",children:[o(s,{position:"apart",children:[r(d,{order:3,children:t.heading}),r(d,{order:3,children:"1378,00 kr"})]}),o(s,{children:[r(c,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),r(c,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),r(O,{children:(n=(e=t==null?void 0:t.cartProductsList)==null?void 0:e.children)==null?void 0:n.map(u=>r(D,{...u,onClickRemoveProduct:()=>{}},Math.random()))}),o(s,{align:"right",children:[r(f,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),r(_,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",children:r(C,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})})}},a={...v,args:{heading:"Din Kundvagn",totalAmount:"1378,70",productsNumber:7,text:"<p>Tillagda produkter</p>",cartProductsList:h.args,suggestedProductsList:y.args}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...CartOrderDetailsStoryTemplate,
  args: {
    heading: 'Din Kundvagn',
    totalAmount: '1378,70',
    productsNumber: 7,
    text: '<p>Tillagda produkter</p>',
    cartProductsList: CartProductListStory.args,
    suggestedProductsList: FeaturedProductsStory.args
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const x=["CartOrderDetailsStory"],I=Object.freeze(Object.defineProperty({__proto__:null,CartOrderDetailsStory:a,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{a as C,i as a,I as c};
//# sourceMappingURL=cart-order-details.stories-c5085c04.js.map