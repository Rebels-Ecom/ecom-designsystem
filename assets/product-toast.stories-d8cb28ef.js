import{r as e}from"./index-6f814c40.js";import{P as m}from"./product-toast-aebeb366.js";import{c as d}from"./cart-product.stories-c7ea9da4.js";import{j as l,a as r}from"./jsx-runtime-76c5c2e2.js";import{A as u}from"./index-b3e0e324.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./text-288eb4bf.js";import"./motion-354a1bac.js";import"./product-quantity-input-028b8c2d.js";import"./input-text-9c8d5d7a.js";import"./form-helper-ce65ae5e.js";import"./icon-db71b6f0.js";import"./picture-helper-86177d87.js";import"./picture-097a8d40.js";import"./icon-button-200b4be5.js";import"./ui-link-400688a2.js";import"./loader-ce89f5e5.js";import"./format-helper-6b4b1091.js";import"./icon-button.stories-7c5a874b.js";import"./chunk-OPEUWD42-0dc0813d.js";const w={title:"Design System/Molecules/ProductToast",component:m},g={render:({...n})=>{const[p,o]=e.useState(!1);return e.useEffect(()=>{const c=setInterval(()=>{o(!1)},3e3);return()=>{clearInterval(c)}},[]),l("div",{children:[r("button",{onClick:()=>o(!0),children:"Add toast"}),r(u,{children:p&&r(m,{...n})})]})}},t={...g,args:{cartProduct:d.args,position:"top-right",label:"Tillagd i varukorgen"}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const z=["ProductToastStory"];export{t as ProductToastStory,z as __namedExportsOrder,w as default};
//# sourceMappingURL=product-toast.stories-d8cb28ef.js.map
