import{r}from"./index-6f814c40.js";import{c as O}from"./index-74f03c09.js";import{g as I}from"./form-helper-ce65ae5e.js";import{a as n,F as j}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";const w="_checkbox_78aad_1",A="_error_78aad_89",d={checkbox:w,error:A},s=r.forwardRef((a,u)=>{const{id:k,name:C,value:S,defaultValue:_,checked:q,className:V,isErroneous:E,required:v,onChange:c,disabled:N,other:T}=a;function D(F){c&&c(F)}return n("input",{ref:u,type:"checkbox",className:O("body",d.checkbox,I(d,E),V),id:k,name:C,onChange:D,value:S,defaultValue:_,checked:q,disabled:N,required:v,...T})});try{s.displayName="Checkbox",s.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isErroneous:{defaultValue:null,description:"",name:"isErroneous",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},other:{defaultValue:null,description:"",name:"other",required:!1,type:{name:"TOther"}}}}}catch{}const H={title:"Design System/Atoms/Inputs/Checkbox",component:s},l={render:({...a})=>(r.useState(!1),r.useState(!1),r.useState(!1),r.useState(!0),n(j,{children:n("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:n(s,{...a})})}))},e={...l,args:{id:"input_1",value:"input_1",checked:!0,name:"group",disabled:!1}},t={...l,args:{...e.args,isErroneous:!0}},o={...l,args:{...e.args,disabled:!0}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    id: 'input_1',
    value: 'input_1',
    checked: true,
    name: 'group',
    disabled: false
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,f,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
    isErroneous: true
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,g,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
    disabled: true
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const J=["CheckboxStory","CheckboxStoryError","CheckboxStoryDisabled"];export{e as CheckboxStory,o as CheckboxStoryDisabled,t as CheckboxStoryError,J as __namedExportsOrder,H as default};
//# sourceMappingURL=checkbox.stories-c3863e1d.js.map
