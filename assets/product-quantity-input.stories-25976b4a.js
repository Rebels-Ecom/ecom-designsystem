import{r as d,j as r}from"./jsx-runtime-a3a6c0b8.js";import{P as u}from"./product-quantity-input-a4a450e0.js";import{InputTextStory as y}from"./input-text.stories-c9b7d20f.js";import{c as n}from"./format-helper-6b4b1091.js";import"./_commonjsHelpers-de833af9.js";import"./input-text-511f9335.js";import"./index-a587463d.js";import"./form-helper-a2e99778.js";import"./icon-5fefd509.js";const b={title:"Design System/Molecules/ProductQuantityInput",component:u},S={render:({...e})=>{const[s,p]=d.useState(n(23.34*e.itemNumberPerSalesUnit));function m(c){const l=parseInt(c.target.value)||1;p(n(23.34*e.itemNumberPerSalesUnit*l))}return r("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:r(u,{...e,onChange:m,totalPrice:s})})}},t={...S,args:{salesUnit:"KLI",itemNumberPerSalesUnit:15,quantityInputId:"1105101",inputProps:{...y,id:"input_1",sizeSmall:!0,defaultValue:"1",placeholder:"1"}}};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const _=["InputQuantityStory"];export{t as InputQuantityStory,_ as __namedExportsOrder,b as default};
