import{r as E}from"./index-6f814c40.js";import{I}from"./input-text-3d4ace24.js";import{a as n}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";const j={title:"Design System/Atoms/Inputs/InputText",component:I},s={render:({...o})=>{const[f,h]=E.useState(o.value);function b(v){h(v.currentTarget.value)}return n("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:n(I,{...o,onChange:b,value:f})})}},e={...s,args:{id:"input_1",value:"",disabled:!1,placeholder:""}},r={...s,args:{id:"input_1",value:"",disabled:!1,placeholder:"Write anything you like"}},t={...s,args:{...e.args,isErroneous:!0}},a={...s,args:{...e.args,disabled:!0}};var p,u,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    placeholder: ''
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    placeholder: 'Write anything you like'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,x,T;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    isErroneous: true
  }
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var g,y,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    disabled: true
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const A=["InputTextStory","InputTextStoryPlaceHolder","InputTextStoryError","InputTextStoryDisabled"];export{e as InputTextStory,a as InputTextStoryDisabled,t as InputTextStoryError,r as InputTextStoryPlaceHolder,A as __namedExportsOrder,j as default};
//# sourceMappingURL=input-text.stories-922e0ad3.js.map
