import{r as C,j as p}from"./jsx-runtime-03333307.js";import{I as v}from"./input-text-e1680c6c.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";import"./icon-a32914e5.js";const A={title:"Design System/Atoms/Inputs/InputText",component:v},r={render:({...o})=>{const[E,k]=C.useState(o.value);function _(j){k(j.currentTarget.value)}return p.jsx("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:p.jsx(v,{...o,onChange:_,value:E})})}},e={...r,args:{id:"input_1",value:"",disabled:!1,placeholder:""}},t={...r,args:{id:"input_1",value:"",disabled:!1,placeholder:"Write anything you like"}},a={...r,args:{...e.args,isErroneous:!0}},n={...r,args:{...e.args,disabled:!0}},s={...r,args:{...e.args,iconRight:{icon:"icon-check"}}};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,g,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    isErroneous: true
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var S,y,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    disabled: true
  }
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var h,b,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    iconRight: {
      icon: 'icon-check'
    }
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const O=["InputTextStory","InputTextStoryPlaceHolder","InputTextStoryError","InputTextStoryDisabled","InputTextStoryCheckIcon"];export{e as InputTextStory,s as InputTextStoryCheckIcon,n as InputTextStoryDisabled,a as InputTextStoryError,t as InputTextStoryPlaceHolder,O as __namedExportsOrder,A as default};
