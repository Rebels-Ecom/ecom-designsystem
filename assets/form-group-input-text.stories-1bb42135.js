import{F as h}from"./form-group-4de333d7.js";import{j as a,r as A}from"./jsx-runtime-03333307.js";import{InputTextStory as m}from"./input-text.stories-e55584e9.js";import{I as R}from"./input-text-e1680c6c.js";import"./index-09749a66.js";import"./inline-helper-text-5f61e543.js";import"./inline-error-text-caf17fd4.js";import"./icon-a32914e5.js";import"./form-helper-af1dc92c.js";const w={title:"Design System/Molecules/FormGroup/InputText",component:h},s={render:(n,F)=>{const[I,b]=A.useState("");function k(D){b(D.currentTarget.value)}const v={onChange:k,value:I},E=!!n.errorText,j=F.story.includes("Disabled");return a.jsx("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:a.jsx(h,{...n,formElementId:m.args.id,children:a.jsx(R,{...m.args,...v,disabled:j,isErroneous:E})})})}},p={label:"Vad letar du efter?",helperText:"Genom att skriva produkt namn, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},r={...s,args:{...p}},e={...s,args:{...p,errorText:"Du behöver fylla i produkt namn"}},o={...s,args:{...p}},t={...s,args:{...p,requiredText:"",labelRightText:a.jsx("a",{href:"/",children:"Se produkter"})}};var u,i,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,x;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs,
    errorText: 'Du behöver fylla i produkt namn'
  }
}`,...(x=(d=e.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,T,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var G,f,y;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs,
    requiredText: '',
    labelRightText: <a href="/">Se produkter</a>
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const z=["FormGroupInputTextStory","FormGroupInputTextStoryError","FormGroupInputTextStoryDisabled","FormGroupInputTextStoryRightLabelText"];export{r as FormGroupInputTextStory,o as FormGroupInputTextStoryDisabled,e as FormGroupInputTextStoryError,t as FormGroupInputTextStoryRightLabelText,z as __namedExportsOrder,w as default};
