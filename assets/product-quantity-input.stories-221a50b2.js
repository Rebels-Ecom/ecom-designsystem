import{r as d,j as r}from"./jsx-runtime-03333307.js";import{P as u}from"./product-quantity-input-a65dfb53.js";import{InputTextStory as y}from"./input-text.stories-8f63f37e.js";import{c as n}from"./format-helper-a8a0bc10.js";import"./input-text-0d02e73b.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";import"./icon-cf6ebd85.js";const N={title:"Design System/Molecules/ProductQuantityInput",component:u},S={render:({...e})=>{const[s,p]=d.useState(n(23.34*e.itemNumberPerSalesUnit));function m(c){const l=parseInt(c.target.value)||1;p(n(23.34*e.itemNumberPerSalesUnit*l))}return r.jsx("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:r.jsx(u,{...e,onChange:m,totalPrice:s})})}},t={...S,args:{salesUnit:"KLI",itemNumberPerSalesUnit:15,quantityInputId:"1105101",inputProps:{...y,id:"input_1",sizeSmall:!0,defaultValue:"1",placeholder:"1"}}};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...ProductQuantityInputStoryTemplate,
  args: {
    salesUnit: 'KLI',
    itemNumberPerSalesUnit: 15,
    quantityInputId: '1105101',
    inputProps: {
      ...InputTextStory,
      id: 'input_1',
      sizeSmall: true,
      defaultValue: '1',
      placeholder: '1'
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const b=["InputQuantityStory"];export{t as InputQuantityStory,b as __namedExportsOrder,N as default};
