import{r as e}from"./index-6f814c40.js";import{P as n}from"./product-toast-54aba13e.js";import{C as d}from"./cart-product.stories-bbe8759a.js";import{j as l,a as r}from"./jsx-runtime-76c5c2e2.js";import{A as u}from"./index-b3e0e324.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./text-e81d2378.js";import"./motion-354a1bac.js";import"./format-helper-144e19ab.js";import"./input-text-9cc9c5f8.js";import"./form-helper-ce65ae5e.js";import"./icon-86740a42.js";import"./divider-lines-aed21525.js";import"./picture-1385f78c.js";import"./icon-button-9a6ec805.js";import"./ui-link-6e50597b.js";import"./loader-2ea78344.js";import"./icon-button.stories-71a01ac1.js";import"./chunk-OPEUWD42-0dc0813d.js";const q={title:"Design System/Molecules/ProductToast",component:n},g={render:({...m})=>{const[p,o]=e.useState(!1);return e.useEffect(()=>{const c=setInterval(()=>{o(!1)},3e3);return()=>{clearInterval(c)}},[]),l("div",{children:[r("button",{onClick:()=>o(!0),children:"Add toast"}),r(u,{children:p&&r(n,{...m})})]})}},t={...g,args:{cartProduct:d.args,position:"top-right",label:"Tillagd i varukorgen"}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const w=["ProductToastStory"];export{t as ProductToastStory,w as __namedExportsOrder,q as default};
//# sourceMappingURL=product-toast.stories-1ab5b72b.js.map
