import{r as v,j as e}from"./jsx-runtime-03333307.js";import{c as f}from"./index-09749a66.js";import{b as s}from"./button.module-867d0823.js";const O="_value_hzhu7_1",V="_inputFile_hzhu7_9",p={value:O,inputFile:V},c=v.forwardRef(({id:t,className:r,value:a,defaultValue:i,required:o,onChange:d,onBlur:m,disabled:h,label:_,placeholder:j,other:N},T)=>{function D(u){d&&d(u)}function E(u){m&&m(u)}return e.jsxs("div",{className:f(r),children:[e.jsxs("label",{htmlFor:t,className:p.labelButton,children:[e.jsx("span",{className:f(s.button,s.small,s.secondary,h&&s.disabled),children:_}),e.jsx("span",{className:p.value,children:a||j})]}),e.jsx("input",{ref:T,type:"file",className:p.inputFile,id:t,value:a,defaultValue:i,onChange:D,onBlur:E,disabled:h,required:o,...N})]})});c.__docgenInfo={description:"",methods:[],displayName:"InputFile"};const R={title:"Design System/Atoms/Inputs/InputFile",component:c},S={render:({...t})=>{const[r,a]=v.useState(t.value);function i(o){a(o.currentTarget.value)}return e.jsx("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:e.jsx(c,{...t,onChange:i,value:r})})}},n={...S,args:{id:"input_1",value:"",disabled:!1,label:"Välj fil",placeholder:"Ingen fil har valts"}},l={...S,args:{...n.args,disabled:!0,placeholder:"Ingen fil har valts"}};var g,I,F;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...InputFileStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    label: 'Välj fil',
    placeholder: 'Ingen fil har valts'
  }
}`,...(F=(I=n.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var x,y,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...InputFileStoryTemplate,
  args: {
    ...InputFileStory.args,
    disabled: true,
    placeholder: 'Ingen fil har valts'
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const w=["InputFileStory","InputFileStoryDisabled"];export{n as InputFileStory,l as InputFileStoryDisabled,w as __namedExportsOrder,R as default};
