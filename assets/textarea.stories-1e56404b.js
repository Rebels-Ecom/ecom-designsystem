import{r as o,a as j,F as E,j as e}from"./jsx-runtime-a3a6c0b8.js";import{T as t}from"./textarea-46c93b0d.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./form-helper-ce65ae5e.js";const P={title:"Design System/Atoms/Textarea",component:t},w={render:r=>{function c(a){v(a.currentTarget.value)}function i(a){g(a.currentTarget.value)}function T(a){y(a.currentTarget.value)}function d(a){f(a.currentTarget.value)}function m(a){V(a.currentTarget.value)}const[h,v]=o.useState(""),[p,g]=o.useState("Some text here"),[S,y]=o.useState("Some text here"),[C,f]=o.useState("Some text here"),[_,V]=o.useState(""),n={margin:"0 0 1rem 0",maxWidth:"616px"};return j(E,{children:[e("div",{style:n,children:e(t,{...r,id:"Textarea_1",value:h,onChange:c})}),e("div",{style:n,children:e(t,{...r,id:"Textarea_2",value:p,onChange:i})}),e("div",{style:n,children:e(t,{...r,id:"Textarea_3",value:S,onChange:T,disabled:!0})}),e("div",{style:n,children:e(t,{...r,id:"Textarea_4",value:C,isErroneous:!0,onChange:d})}),e("div",{style:n,children:e(t,{...r,id:"Textarea_5",value:_,placeholder:"Placeholder text",onChange:m})})]})}},s={...w,args:{id:"textarea",cols:5,rows:5}};var l,u,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...TextareaStoryTemplate,
  args: {
    id: 'textarea',
    cols: 5,
    rows: 5
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const W=["TextareaStory"];export{s as TextareaStory,W as __namedExportsOrder,P as default};
