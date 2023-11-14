import{r as d}from"./index-6f814c40.js";import{P as u}from"./product-quantity-input-2d54494a.js";import{InputTextStory as y}from"./input-text.stories-de90c5d3.js";import{c as r}from"./format-helper-6b4b1091.js";import{a as n}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./input-text-92e9fb9d.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-99d60fba.js";const _={title:"Design System/Molecules/ProductQuantityInput",component:u},S={render:({...e})=>{const[p,s]=d.useState(r(23.34*e.itemNumberPerSalesUnit));function m(c){const l=parseInt(c.target.value)||1;s(r(23.34*e.itemNumberPerSalesUnit*l))}return n("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:n(u,{...e,onChange:m,totalPrice:p})})}},t={...S,args:{salesUnit:"KLI",itemNumberPerSalesUnit:15,quantityInputId:"1105101",inputProps:{...y,id:"input_1",sizeSmall:!0,defaultValue:"1",placeholder:"1"}}};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const q=["InputQuantityStory"];export{t as InputQuantityStory,q as __namedExportsOrder,_ as default};
//# sourceMappingURL=product-quantity-input.stories-c8f18f01.js.map
