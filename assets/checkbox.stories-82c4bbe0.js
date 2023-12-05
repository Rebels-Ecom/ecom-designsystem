import{r,j as o,F as h}from"./jsx-runtime-a3a6c0b8.js";import{C as x}from"./checkbox-2dd08965.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./form-helper-ce65ae5e.js";const _={title:"Design System/Atoms/Inputs/Checkbox",component:x},a={render:({...S})=>(r.useState(!1),r.useState(!1),r.useState(!1),r.useState(!0),o(h,{children:o("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:o(x,{...S})})}))},e={...a,args:{id:"input_1",value:"input_1",checked:!0,name:"group",disabled:!1}},s={...a,args:{...e.args,isErroneous:!0}},t={...a,args:{...e.args,disabled:!0}};var n,c,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    id: 'input_1',
    value: 'input_1',
    checked: true,
    name: 'group',
    disabled: false
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
    isErroneous: true
  }
}`,...(i=(u=s.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,l,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
    disabled: true
  }
}`,...(b=(l=t.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const T=["CheckboxStory","CheckboxStoryError","CheckboxStoryDisabled"];export{e as CheckboxStory,t as CheckboxStoryDisabled,s as CheckboxStoryError,T as __namedExportsOrder,_ as default};
