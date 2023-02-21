import{r as _}from"./index-6f814c40.js";import{c as g}from"./index-74f03c09.js";import{b as r}from"./button.module-495ac369.js";import{j as h,a as l,F as j}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";const B="_value_hzhu7_1",D="_inputFile_hzhu7_9",p={value:B,inputFile:D},u=_.forwardRef(({id:a,className:s,value:t,defaultValue:i,required:o,onChange:c,onBlur:m,disabled:f,label:x,placeholder:C,other:N},S)=>{function T(d){c&&c(d)}function E(d){m&&m(d)}return h("div",{className:g(s),children:[h("label",{htmlFor:a,className:p.labelButton,children:[l("span",{className:g(r.button,r.small,r.secondary,f&&r.disabled),children:x}),l("span",{className:p.value,children:t||C})]}),l("input",{ref:S,type:"file",className:p.inputFile,id:a,value:t,defaultValue:i,onChange:T,onBlur:E,disabled:f,required:o,...N})]})});try{u.displayName="InputFile",u.__docgenInfo={description:"",displayName:"InputFile",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"CallableFunction"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},other:{defaultValue:null,description:"",name:"other",required:!1,type:{name:"TOther"}}}}}catch{}const L={title:"Design System/Atoms/Inputs/InputFile",component:u},q=a=>{const[s,t]=_.useState(a.value);function i(o){t(o.currentTarget.value)}return l(j,{children:l("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:l(u,{...a,onChange:i,value:s})})})},e=q.bind({});e.storyName="Input File";e.args={id:"input_1",value:"",disabled:!1,label:"Välj fil",placeholder:"Ingen fil har valts"};const n=q.bind({});n.storyName="Input File Disabled";n.args={...e.args,disabled:!0,placeholder:"Ingen fil har valts"};var y,v,F;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputFile {...args} onChange={onChange} value={value} />
      </div>
    </>;
}`,...(F=(v=e.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var b,V,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputFile {...args} onChange={onChange} value={value} />
      </div>
    </>;
}`,...(I=(V=n.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const M=["InputFileStory","InputFileStoryDisabled"];export{e as InputFileStory,n as InputFileStoryDisabled,M as __namedExportsOrder,L as default};
//# sourceMappingURL=input-file.stories-3362c7b3.js.map
