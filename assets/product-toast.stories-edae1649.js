import{r as a,j as r}from"./jsx-runtime-03333307.js";import{P as n}from"./product-toast-4a3afde4.js";import{C as u}from"./cart-product.stories-2739889b.js";import{a as S}from"./product-card-list.stories-132c523d.js";import{A as k}from"./index-61679f6b.js";import"./index-09749a66.js";import"./text-002528fe.js";import"./hooks-0265167d.js";import"./react-responsive-c4f2314e.js";import"./useOnClickOutside-9d2c35bb.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./icon-button-4ba5bdac.js";import"./ui-link-94ae867e.js";import"./icon-e3522fc5.js";import"./product-quantity-input-c49ab939.js";import"./input-text-6778a0ec.js";import"./form-helper-af1dc92c.js";import"./picture-helper-e0ae1ee4.js";import"./picture-d7d6bf69.js";import"./loader-5c06d14e.js";import"./format-helper-a8a0bc10.js";import"./icon-button.stories-15beff8b.js";import"./chunk-MZXVCX43-aa6c8130.js";import"./v4-4a60fe23.js";import"./product-card.stories-6311f975.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-4dfc8d88.js";import"./tags-list-dcc30c34.js";import"./tag-84e76236.js";import"./debounce-input-fd3c5c5c.js";import"./generic-helper-87eaa4e8.js";import"./debounce-27b61785.js";import"./isSymbol-9d21be03.js";import"./flex-container-7aff6506.js";import"./icon-with-tooltip-f1c3a3e7.js";import"./index-145cfc81.js";import"./index-821951ec.js";import"./placeholder-7c72702c.js";import"./alert-box-9adaa126.js";import"./button-1a287b34.js";import"./button.module-16a60bae.js";import"./product-card-vertical-e6e1d1d3.js";import"./product-variant-list-18861ff9.js";import"./product-variant-5d94cecd.js";import"./radio-button-8c0d660d.js";import"./product-card-restricted-7959352d.js";import"./dummy-product-d82fa475.js";import"./content-wrapper-adfa8526.js";const gr={title:"Design System/Molecules/ProductToast",component:n},l={render:({...g})=>{const[P,e]=a.useState(!1);return a.useEffect(()=>{const T=setInterval(()=>{e(!1)},3e3);return()=>{clearInterval(T)}},[]),r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Add toast"}),r.jsx(k,{children:P&&r.jsx(n,{...g})})]})}},t={...l,args:{cartProduct:u.args,position:"top-right",label:"Tillagd i varukorgen"}},o={...l,args:{cartProduct:u.args,recommendedProducts:S.args.productCards,recommendedProductsTitle:"Du kanske också gillar",position:"top-right",label:"Tillagd i varukorgen"}};var i,s,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    recommendedProducts: ProductCardListStoryLoka.args.productCards,
    recommendedProductsTitle: 'Du kanske också gillar',
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Pr=["ProductToastStory","ProductToastStory_WithRecommendedProducts"];export{t as ProductToastStory,o as ProductToastStory_WithRecommendedProducts,Pr as __namedExportsOrder,gr as default};
