import{r as a,a as S,j as o}from"./jsx-runtime-a3a6c0b8.js";import{P as n}from"./product-toast-1264d4c5.js";import{C as u}from"./cart-product.stories-cf90b2b3.js";import{a as k}from"./product-card-list.stories-e90f1169.js";import{A as y}from"./index-4058f88b.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./text-59fe9fb2.js";import"./useOnClickOutside-338168d6.js";import"./motion-54668070.js";import"./icon-button-c1cc9278.js";import"./ui-link-a18343fc.js";import"./icon-5fefd509.js";import"./product-quantity-input-d9144e45.js";import"./input-text-b0c69555.js";import"./form-helper-ce65ae5e.js";import"./picture-helper-1d1954b7.js";import"./picture-7e21d28d.js";import"./loader-72deb8c4.js";import"./format-helper-6b4b1091.js";import"./icon-button.stories-2e13fcb1.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./product-card.stories-be314f38.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-e4b89333.js";import"./tags-list-3f7fda62.js";import"./tag-fac2d6a3.js";import"./placeholder-0f82f781.js";import"./flex-container-145d4933.js";import"./icon-with-tooltip-a4bd05fb.js";import"./extends-98964cd2.js";import"./index-79d56f34.js";import"./button-369dade1.js";import"./button.module-16a60bae.js";import"./product-card-vertical-d7be6886.js";import"./product-variant-list-4e80b5e9.js";import"./product-variant-ee2988b7.js";import"./radio-button-f4956d18.js";import"./dummy-product-d82fa475.js";import"./content-wrapper-c985da24.js";const pr={title:"Design System/Molecules/ProductToast",component:n},l={render:({...g})=>{const[P,e]=a.useState(!1);return a.useEffect(()=>{const T=setInterval(()=>{e(!1)},3e3);return()=>{clearInterval(T)}},[]),S("div",{children:[o("button",{onClick:()=>e(!0),children:"Add toast"}),o(y,{children:P&&o(n,{...g})})]})}},r={...l,args:{cartProduct:u.args,position:"top-right",label:"Tillagd i varukorgen"}},t={...l,args:{cartProduct:u.args,recommendedProducts:k.args.productCards,recommendedProductsTitle:"Du kanske också gillar",position:"top-right",label:"Tillagd i varukorgen"}};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    recommendedProducts: ProductCardListStoryLoka.args.productCards,
    recommendedProductsTitle: 'Du kanske också gillar',
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const cr=["ProductToastStory","ProductToastStory_WithRecommendedProducts"];export{r as ProductToastStory,t as ProductToastStory_WithRecommendedProducts,cr as __namedExportsOrder,pr as default};
