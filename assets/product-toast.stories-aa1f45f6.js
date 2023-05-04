import{r as o}from"./index-6f814c40.js";import{P as n}from"./product-toast-eb4ea664.js";import{C as m}from"./cart-product.stories-3b2b3c29.js";import{j as d,a as e}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./text-ab30c4d2.js";import"./format-helper-db7271cf.js";import"./input-text-c991f326.js";import"./form-helper-ce65ae5e.js";import"./icon-ce8cb337.js";import"./divider-lines-aed21525.js";import"./picture-1385f78c.js";import"./icon-button-c73945f1.js";import"./ui-link-a6e7e805.js";import"./loader-79f9fda8.js";import"./icon-button.stories-b61016a8.js";import"./chunk-OPEUWD42-0dc0813d.js";const A={title:"Design System/Molecules/ProductToast",component:n},l={render:({...p})=>{const[u,r]=o.useState(!1);return o.useEffect(()=>{const c=setInterval(()=>{r(!1)},3e3);return()=>{clearInterval(c)}},[]),d("div",{children:[e("button",{onClick:()=>r(!0),children:"Add toast"}),e(n,{...p})]})}},t={...l,args:{cartProduct:m.args,position:"top-right",label:"Tillagd i varukorgen"}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const D=["ProductToastStory"];export{t as ProductToastStory,D as __namedExportsOrder,A as default};
//# sourceMappingURL=product-toast.stories-aa1f45f6.js.map
