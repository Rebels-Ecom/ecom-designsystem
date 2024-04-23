import{r as a,a as S,j as o}from"./jsx-runtime-a3a6c0b8.js";import{P as n}from"./product-toast-21a68cb1.js";import{C as u}from"./cart-product.stories-6c33988d.js";import{a as k}from"./product-card-list.stories-073f7f09.js";import{A as y}from"./index-4058f88b.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./text-cdc0625f.js";import"./hooks-740d1016.js";import"./react-responsive-fe908079.js";import"./useOnClickOutside-338168d6.js";import"./motion-54668070.js";import"./icon-button-4b52a229.js";import"./ui-link-a18343fc.js";import"./icon-5fefd509.js";import"./product-quantity-input-650dae44.js";import"./input-text-832858aa.js";import"./form-helper-af1dc92c.js";import"./picture-helper-50cd833e.js";import"./picture-7e21d28d.js";import"./loader-72deb8c4.js";import"./format-helper-6b4b1091.js";import"./icon-button.stories-f0df0aa9.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./product-card.stories-1d462f59.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-232c612c.js";import"./tags-list-3f7fda62.js";import"./tag-fac2d6a3.js";import"./debounce-input-5bd94146.js";import"./generic-helper-0893f968.js";import"./placeholder-0f82f781.js";import"./flex-container-145d4933.js";import"./icon-with-tooltip-4f5d815c.js";import"./extends-98964cd2.js";import"./index-79d56f34.js";import"./alert-box-3c1be98a.js";import"./button-369dade1.js";import"./button.module-16a60bae.js";import"./product-card-vertical-b9778fde.js";import"./product-variant-list-6638e134.js";import"./product-variant-e3dcc086.js";import"./radio-button-ac06a94c.js";import"./product-card-restricted-51266958.js";import"./dummy-product-d82fa475.js";import"./content-wrapper-c985da24.js";const gr={title:"Design System/Molecules/ProductToast",component:n},l={render:({...g})=>{const[P,e]=a.useState(!1);return a.useEffect(()=>{const T=setInterval(()=>{e(!1)},3e3);return()=>{clearInterval(T)}},[]),S("div",{children:[o("button",{onClick:()=>e(!0),children:"Add toast"}),o(y,{children:P&&o(n,{...g})})]})}},r={...l,args:{cartProduct:u.args,position:"top-right",label:"Tillagd i varukorgen"}},t={...l,args:{cartProduct:u.args,recommendedProducts:k.args.productCards,recommendedProductsTitle:"Du kanske också gillar",position:"top-right",label:"Tillagd i varukorgen"}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    recommendedProducts: ProductCardListStoryLoka.args.productCards,
    recommendedProductsTitle: 'Du kanske också gillar',
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Pr=["ProductToastStory","ProductToastStory_WithRecommendedProducts"];export{r as ProductToastStory,t as ProductToastStory_WithRecommendedProducts,Pr as __namedExportsOrder,gr as default};
