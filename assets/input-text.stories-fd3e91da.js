import{r as D,j as p}from"./jsx-runtime-a3a6c0b8.js";import{I as v}from"./input-text-74e0e79c.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./form-helper-af1dc92c.js";import"./icon-5fefd509.js";const O={title:"Design System/Atoms/Inputs/InputText",component:v},r={render:({...s})=>{const[k,E]=D.useState(s.value);function _(C){E(C.currentTarget.value)}return p("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:p(v,{...s,onChange:_,value:k})})}},e={...r,args:{id:"input_1",value:"",disabled:!1,placeholder:""}},t={...r,args:{id:"input_1",value:"",disabled:!1,placeholder:"Write anything you like"}},a={...r,args:{...e.args,isErroneous:!0}},n={...r,args:{...e.args,disabled:!0}},o={...r,args:{...e.args,iconRight:{icon:"icon-check"}}};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    placeholder: ''
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    placeholder: 'Write anything you like'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,T,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    isErroneous: true
  }
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,y,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    disabled: true
  }
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var h,b,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    iconRight: {
      icon: 'icon-check'
    }
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const V=["InputTextStory","InputTextStoryPlaceHolder","InputTextStoryError","InputTextStoryDisabled","InputTextStoryCheckIcon"];export{e as InputTextStory,o as InputTextStoryCheckIcon,n as InputTextStoryDisabled,a as InputTextStoryError,t as InputTextStoryPlaceHolder,V as __namedExportsOrder,O as default};
