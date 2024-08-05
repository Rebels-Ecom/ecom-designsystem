import{r,j as s}from"./jsx-runtime-03333307.js";import{C as b}from"./checkbox-0ec5ac00.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";const _={title:"Design System/Atoms/Inputs/Checkbox",component:b},a={render:({...S})=>{const[n,g]=r.useState(!1);r.useState(!1),r.useState(!1),r.useState(!0);const k={margin:"0 0 1rem 0",maxWidth:"616px"};return s.jsx(s.Fragment,{children:s.jsx("div",{style:k,children:s.jsx(b,{...S,checked:n,onChange:()=>g(!n)})})})}},e={...a,args:{id:"input_1",value:"input_1",checked:!0,name:"group",disabled:!1}},t={...a,args:{...e.args,isErroneous:!0}},o={...a,args:{...e.args,disabled:!0}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    id: 'input_1',
    value: 'input_1',
    checked: true,
    name: 'group',
    disabled: false
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,i,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
    isErroneous: true
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,x,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
    disabled: true
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const j=["CheckboxStory","CheckboxStoryError","CheckboxStoryDisabled"];export{e as CheckboxStory,o as CheckboxStoryDisabled,t as CheckboxStoryError,j as __namedExportsOrder,_ as default};
