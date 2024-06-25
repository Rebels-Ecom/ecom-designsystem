import{r as s,j as e}from"./jsx-runtime-03333307.js";import{T as t}from"./textarea-383fe271.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";const D={title:"Design System/Atoms/Textarea",component:t},V={render:r=>{function c(a){v(a.currentTarget.value)}function i(a){g(a.currentTarget.value)}function T(a){j(a.currentTarget.value)}function d(a){C(a.currentTarget.value)}function m(a){_(a.currentTarget.value)}const[h,v]=s.useState(""),[p,g]=s.useState("Some text here"),[S,j]=s.useState("Some text here"),[y,C]=s.useState("Some text here"),[f,_]=s.useState(""),n={margin:"0 0 1rem 0",maxWidth:"616px"};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:n,children:e.jsx(t,{...r,id:"Textarea_1",value:h,onChange:c})}),e.jsx("div",{style:n,children:e.jsx(t,{...r,id:"Textarea_2",value:p,onChange:i})}),e.jsx("div",{style:n,children:e.jsx(t,{...r,id:"Textarea_3",value:S,onChange:T,disabled:!0})}),e.jsx("div",{style:n,children:e.jsx(t,{...r,id:"Textarea_4",value:y,isErroneous:!0,onChange:d})}),e.jsx("div",{style:n,children:e.jsx(t,{...r,id:"Textarea_5",value:f,placeholder:"Placeholder text",onChange:m})})]})}},o={...V,args:{id:"textarea",cols:5,rows:5}};var x,l,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...TextareaStoryTemplate,
  args: {
    id: 'textarea',
    cols: 5,
    rows: 5
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const F=["TextareaStory"];export{o as TextareaStory,F as __namedExportsOrder,D as default};
