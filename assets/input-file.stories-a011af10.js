import{r as v,a as h,j as n}from"./jsx-runtime-a3a6c0b8.js";import{c as y}from"./index-a587463d.js";import{b as t}from"./button.module-d4e6cb42.js";import"./_commonjsHelpers-de833af9.js";const B="_value_hzhu7_1",O="_inputFile_hzhu7_9",p={value:B,inputFile:O},s=v.forwardRef(({id:e,className:i,value:a,defaultValue:u,required:o,onChange:c,onBlur:m,disabled:f,label:S,placeholder:N,other:x},C)=>{function j(d){c&&c(d)}function T(d){m&&m(d)}return h("div",{className:y(i),children:[h("label",{htmlFor:e,className:p.labelButton,children:[n("span",{className:y(t.button,t.small,t.secondary,f&&t.disabled),children:S}),n("span",{className:p.value,children:a||N})]}),n("input",{ref:C,type:"file",className:p.inputFile,id:e,value:a,defaultValue:u,onChange:j,onBlur:T,disabled:f,required:o,...x})]})});try{s.displayName="InputFile",s.__docgenInfo={description:"",displayName:"InputFile",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"CallableFunction"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},other:{defaultValue:null,description:"",name:"other",required:!1,type:{name:"TOther"}}}}}catch{}const A={title:"Design System/Atoms/Inputs/InputFile",component:s},q={render:({...e})=>{const[i,a]=v.useState(e.value);function u(o){a(o.currentTarget.value)}return n("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:n(s,{...e,onChange:u,value:i})})}},l={...q,args:{id:"input_1",value:"",disabled:!1,label:"Välj fil",placeholder:"Ingen fil har valts"}},r={...q,args:{...l.args,disabled:!0,placeholder:"Ingen fil har valts"}};var g,b,F;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...InputFileStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    label: 'Välj fil',
    placeholder: 'Ingen fil har valts'
  }
}`,...(F=(b=l.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var I,_,V;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...InputFileStoryTemplate,
  args: {
    ...InputFileStory.args,
    disabled: true,
    placeholder: 'Ingen fil har valts'
  }
}`,...(V=(_=r.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const R=["InputFileStory","InputFileStoryDisabled"];export{l as InputFileStory,r as InputFileStoryDisabled,R as __namedExportsOrder,A as default};
