import{r as D}from"./index-6f814c40.js";import{I as v}from"./input-text-c991f326.js";import{a as p}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-ce8cb337.js";const V={title:"Design System/Atoms/Inputs/InputText",component:v},r={render:({...s})=>{const[k,E]=D.useState(s.value);function _(C){E(C.currentTarget.value)}return p("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:p(v,{...s,onChange:_,value:k})})}},e={...r,args:{id:"input_1",value:"",disabled:!1,placeholder:""}},t={...r,args:{id:"input_1",value:"",disabled:!1,placeholder:"Write anything you like"}},a={...r,args:{...e.args,isErroneous:!0}},n={...r,args:{...e.args,disabled:!0}},o={...r,args:{...e.args,iconRight:{icon:"icon-check"}}};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    iconRight: {
      icon: 'icon-check'
    }
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const q=["InputTextStory","InputTextStoryPlaceHolder","InputTextStoryError","InputTextStoryDisabled","InputTextStoryCheckIcon"];export{e as InputTextStory,o as InputTextStoryCheckIcon,n as InputTextStoryDisabled,a as InputTextStoryError,t as InputTextStoryPlaceHolder,q as __namedExportsOrder,V as default};
//# sourceMappingURL=input-text.stories-329ed6ba.js.map
