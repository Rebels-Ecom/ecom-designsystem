import{r as e}from"./index-6f814c40.js";import{P as m}from"./product-toast-42648ed5.js";import{c as d}from"./cart-product.stories-18df2d89.js";import{j as l,a as r}from"./jsx-runtime-76c5c2e2.js";import{A as u}from"./index-b3e0e324.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./text-3e056ff6.js";import"./motion-354a1bac.js";import"./product-quantity-input-e815c7e9.js";import"./input-text-e07cfb54.js";import"./form-helper-ce65ae5e.js";import"./icon-0e1526c5.js";import"./picture-helper-86177d87.js";import"./picture-097a8d40.js";import"./icon-button-9d46a25b.js";import"./ui-link-8e83d4a8.js";import"./divider-lines-71f4f756.js";import"./loader-2ea78344.js";import"./format-helper-6b4b1091.js";import"./icon-button.stories-060379fe.js";import"./chunk-OPEUWD42-0dc0813d.js";const z={title:"Design System/Molecules/ProductToast",component:m},g={render:({...p})=>{const[n,o]=e.useState(!1);return e.useEffect(()=>{const c=setInterval(()=>{o(!1)},3e3);return()=>{clearInterval(c)}},[]),l("div",{children:[r("button",{onClick:()=>o(!0),children:"Add toast"}),r(u,{children:n&&r(m,{...p})})]})}},t={...g,args:{cartProduct:d.args,position:"top-right",label:"Tillagd i varukorgen"}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const F=["ProductToastStory"];export{t as ProductToastStory,F as __namedExportsOrder,z as default};
//# sourceMappingURL=product-toast.stories-79021220.js.map
