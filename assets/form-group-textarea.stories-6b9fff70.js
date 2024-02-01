import{F as h}from"./form-group-1e7117c8.js";import{j as a,r as j}from"./jsx-runtime-a3a6c0b8.js";import{TextareaStory as n}from"./textarea.stories-cfc124e8.js";import{T as q}from"./textarea-82822c06.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./inline-helper-text-1f598236.js";import"./inline-error-text-34a06e17.js";import"./icon-5fefd509.js";import"./form-helper-af1dc92c.js";const z={title:"Design System/Molecules/FormGroup/Textarea",component:h},s={render:(p,F)=>{const[b,k]=j.useState("");function v(R){k(R.currentTarget.value)}const E={onChange:v,value:b},D=!!p.errorText,A=F.story.includes("Disabled");return a("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:a(h,{...p,formElementId:n.args.id,children:a(q,{...n.args,...E,disabled:A,isErroneous:D})})})}},m={label:"Vad letar du efter?",helperText:"Genom att skriva produkt namn, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},r={...s,args:{...m}},e={...s,args:{...m,errorText:"Du behöver fylla i produkt namn"}},o={...s,args:{...m}},t={...s,args:{...m,requiredText:"",labelRightText:a("a",{href:"/",children:"Se produkter"})}};var u,i,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs,
    errorText: 'Du behöver fylla i produkt namn'
  }
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var T,x,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var G,f,y;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs,
    requiredText: '',
    labelRightText: <a href="/">Se produkter</a>
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const B=["FormGroupTextareaStory","FormGroupTextareaStoryError","FormGroupTextareaStoryDisabled","FormGroupTextareaStoryRightLabelText"];export{r as FormGroupTextareaStory,o as FormGroupTextareaStoryDisabled,e as FormGroupTextareaStoryError,t as FormGroupTextareaStoryRightLabelText,B as __namedExportsOrder,z as default};
