import{r as e}from"./index-6f814c40.js";import{P as n}from"./product-toast-c5f1ac56.js";import{C as d}from"./cart-product.stories-00eff095.js";import{j as l,a as r}from"./jsx-runtime-76c5c2e2.js";import{A as u}from"./index-bacfeb97.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./text-e81d2378.js";import"./format-helper-aac6be36.js";import"./input-text-b673fc3a.js";import"./form-helper-ce65ae5e.js";import"./icon-8c95f315.js";import"./divider-lines-aed21525.js";import"./picture-1385f78c.js";import"./icon-button-6af62ba5.js";import"./ui-link-d168131e.js";import"./loader-7383e603.js";import"./icon-button.stories-5a73a7ee.js";import"./chunk-OPEUWD42-0dc0813d.js";const M={title:"Design System/Molecules/ProductToast",component:n},g={render:({...m})=>{const[p,o]=e.useState(!1);return e.useEffect(()=>{const c=setInterval(()=>{o(!1)},3e3);return()=>{clearInterval(c)}},[]),l("div",{children:[r("button",{onClick:()=>o(!0),children:"Add toast"}),r(u,{children:p&&r(n,{...m})})]})}},t={...g,args:{cartProduct:d.args,position:"top-right",label:"Tillagd i varukorgen"}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const q=["ProductToastStory"];export{t as ProductToastStory,q as __namedExportsOrder,M as default};
//# sourceMappingURL=product-toast.stories-09963600.js.map
