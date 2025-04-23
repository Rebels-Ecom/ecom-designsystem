import{F as h}from"./form-group-4de333d7.js";import{j as a,r as R}from"./jsx-runtime-03333307.js";import{TextareaStory as n}from"./textarea.stories-5a175da6.js";import{T as q}from"./textarea-383fe271.js";import"./index-09749a66.js";import"./inline-helper-text-5f61e543.js";import"./inline-error-text-caf17fd4.js";import"./icon-a32914e5.js";import"./form-helper-af1dc92c.js";const w={title:"Design System/Molecules/FormGroup/Textarea",component:h},s={render:(p,F)=>{const[b,k]=R.useState("");function v(A){k(A.currentTarget.value)}const E={onChange:v,value:b},j=!!p.errorText,D=F.story.includes("Disabled");return a.jsx("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:a.jsx(h,{...p,formElementId:n.args.id,children:a.jsx(q,{...n.args,...E,disabled:D,isErroneous:j})})})}},m={label:"Vad letar du efter?",helperText:"Genom att skriva produkt namn, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},r={...s,args:{...m}},e={...s,args:{...m,errorText:"Du behöver fylla i produkt namn"}},o={...s,args:{...m}},t={...s,args:{...m,requiredText:"",labelRightText:a.jsx("a",{href:"/",children:"Se produkter"})}};var u,i,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const z=["FormGroupTextareaStory","FormGroupTextareaStoryError","FormGroupTextareaStoryDisabled","FormGroupTextareaStoryRightLabelText"];export{r as FormGroupTextareaStory,o as FormGroupTextareaStoryDisabled,e as FormGroupTextareaStoryError,t as FormGroupTextareaStoryRightLabelText,z as __namedExportsOrder,w as default};
