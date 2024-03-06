import{r as a,a as S,j as o}from"./jsx-runtime-a3a6c0b8.js";import{P as n}from"./product-toast-1614507b.js";import{C as u}from"./cart-product.stories-4b694bd5.js";import{a as k}from"./product-card-list.stories-33e30405.js";import{A as y}from"./index-4058f88b.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./text-e8b57ff8.js";import"./useOnClickOutside-338168d6.js";import"./motion-54668070.js";import"./icon-button-c1cc9278.js";import"./ui-link-a18343fc.js";import"./icon-5fefd509.js";import"./product-quantity-input-2bd64f9e.js";import"./input-text-82d8ab72.js";import"./form-helper-af1dc92c.js";import"./picture-helper-51da5c7d.js";import"./picture-7e21d28d.js";import"./loader-72deb8c4.js";import"./format-helper-6b4b1091.js";import"./icon-button.stories-2e13fcb1.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./product-card.stories-71617a13.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-e1925b4b.js";import"./tags-list-3f7fda62.js";import"./tag-fac2d6a3.js";import"./placeholder-0f82f781.js";import"./flex-container-145d4933.js";import"./icon-with-tooltip-d80949f5.js";import"./extends-98964cd2.js";import"./index-79d56f34.js";import"./alert-box-f6b70b16.js";import"./button-369dade1.js";import"./button.module-16a60bae.js";import"./product-card-vertical-b4c58d0a.js";import"./product-variant-list-857a537c.js";import"./product-variant-e1a5ff52.js";import"./radio-button-f4956d18.js";import"./product-card-restricted-2d22eedf.js";import"./hooks-740d1016.js";import"./react-responsive-fe908079.js";import"./dummy-product-d82fa475.js";import"./content-wrapper-c985da24.js";const ur={title:"Design System/Molecules/ProductToast",component:n},l={render:({...g})=>{const[P,e]=a.useState(!1);return a.useEffect(()=>{const T=setInterval(()=>{e(!1)},3e3);return()=>{clearInterval(T)}},[]),S("div",{children:[o("button",{onClick:()=>e(!0),children:"Add toast"}),o(y,{children:P&&o(n,{...g})})]})}},r={...l,args:{cartProduct:u.args,position:"top-right",label:"Tillagd i varukorgen"}},t={...l,args:{cartProduct:u.args,recommendedProducts:k.args.productCards,recommendedProductsTitle:"Du kanske också gillar",position:"top-right",label:"Tillagd i varukorgen"}};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const lr=["ProductToastStory","ProductToastStory_WithRecommendedProducts"];export{r as ProductToastStory,t as ProductToastStory_WithRecommendedProducts,lr as __namedExportsOrder,ur as default};
