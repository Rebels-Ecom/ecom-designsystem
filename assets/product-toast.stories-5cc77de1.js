import{r as a,a as S,j as o}from"./jsx-runtime-a3a6c0b8.js";import{P as n}from"./product-toast-eb589f7c.js";import{C as u}from"./cart-product.stories-5c9085eb.js";import{a as k}from"./product-card-list.stories-7249d0bb.js";import{A as y}from"./index-4058f88b.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./product-card-8c587d56.js";import"./picture-helper-1d1954b7.js";import"./format-helper-6b4b1091.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-a55475d9.js";import"./product-quantity-input-289618f1.js";import"./input-text-aa9063aa.js";import"./form-helper-ce65ae5e.js";import"./icon-5fefd509.js";import"./tags-list-5108b032.js";import"./tag-fac2d6a3.js";import"./loader-81f0d221.js";import"./placeholder-0f82f781.js";import"./picture-7e21d28d.js";import"./icon-button-c1cc9278.js";import"./ui-link-a18343fc.js";import"./motion-54668070.js";import"./button-97f3af74.js";import"./button.module-16a60bae.js";import"./product-card-vertical-7c21acfe.js";import"./product-variant-list-da7642de.js";import"./product-variant-3f6157eb.js";import"./radio-button-f4956d18.js";import"./text-59fe9fb2.js";import"./group-wrapper-8f1ce8c7.js";import"./content-wrapper-c985da24.js";import"./icon-button.stories-2e13fcb1.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./product-card.stories-d2f07b0f.js";import"./dummy-product-2b5b59bc.js";const sr={title:"Design System/Molecules/ProductToast",component:n},l={render:({...g})=>{const[P,e]=a.useState(!1);return a.useEffect(()=>{const T=setInterval(()=>{e(!1)},3e3);return()=>{clearInterval(T)}},[]),S("div",{children:[o("button",{onClick:()=>e(!0),children:"Add toast"}),o(y,{children:P&&o(n,{...g})})]})}},r={...l,args:{cartProduct:u.args,position:"top-right",label:"Tillagd i varukorgen"}},t={...l,args:{cartProduct:u.args,recommendedProducts:k.args.productCards,recommendedProductsTitle:"Du kanske också gillar",position:"top-right",label:"Tillagd i varukorgen"}};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    recommendedProducts: ProductCardListStoryLoka.args.productCards,
    recommendedProductsTitle: 'Du kanske också gillar',
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ir=["ProductToastStory","ProductToastStory_WithRecommendedProducts"];export{r as ProductToastStory,t as ProductToastStory_WithRecommendedProducts,ir as __namedExportsOrder,sr as default};
