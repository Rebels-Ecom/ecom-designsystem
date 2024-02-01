import{r,j as o,F as k}from"./jsx-runtime-a3a6c0b8.js";import{C as x}from"./checkbox-9e8e27d1.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./form-helper-af1dc92c.js";const v={title:"Design System/Atoms/Inputs/Checkbox",component:x},a={render:({...S})=>{const[n,g]=r.useState(!1);return r.useState(!1),r.useState(!1),r.useState(!0),o(k,{children:o("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:o(x,{...S,checked:n,onChange:()=>g(!n)})})})}},e={...a,args:{id:"input_1",value:"input_1",checked:!0,name:"group",disabled:!1}},s={...a,args:{...e.args,isErroneous:!0}},t={...a,args:{...e.args,disabled:!0}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    id: 'input_1',
    value: 'input_1',
    checked: true,
    name: 'group',
    disabled: false
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var i,p,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
    isErroneous: true
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,h,b;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
    disabled: true
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const D=["CheckboxStory","CheckboxStoryError","CheckboxStoryDisabled"];export{e as CheckboxStory,t as CheckboxStoryDisabled,s as CheckboxStoryError,D as __namedExportsOrder,v as default};
