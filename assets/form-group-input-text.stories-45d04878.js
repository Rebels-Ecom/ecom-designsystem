import{F as h}from"./form-group-464f226c.js";import{r as R}from"./index-6f814c40.js";import{InputTextStory as m}from"./input-text.stories-94017743.js";import{a}from"./jsx-runtime-76c5c2e2.js";import{I as q}from"./input-text-4314ba0f.js";import"./index-74f03c09.js";import"./inline-helper-text-34c1f55e.js";import"./inline-error-text-1872b058.js";import"./icon-af819d0c.js";import"./_commonjsHelpers-042e6b4d.js";import"./form-helper-ce65ae5e.js";const B={title:"Design System/Molecules/FormGroup/InputText",component:h},s={render:(n,F)=>{const[I,b]=R.useState("");function k(A){b(A.currentTarget.value)}const v={onChange:k,value:I},E=!!n.errorText,D=F.story.includes("Disabled");return a("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:a(h,{...n,formElementId:m.args.id,children:a(q,{...m.args,...v,disabled:D,isErroneous:E})})})}},p={label:"Vad letar du efter?",helperText:"Genom att skriva produkt namn, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},r={...s,args:{...p}},e={...s,args:{...p,errorText:"Du behöver fylla i produkt namn"}},o={...s,args:{...p}},t={...s,args:{...p,requiredText:"",labelRightText:a("a",{href:"/",children:"Se produkter"})}};var u,i,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,T,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const H=["FormGroupInputTextStory","FormGroupInputTextStoryError","FormGroupInputTextStoryDisabled","FormGroupInputTextStoryRightLabelText"];export{r as FormGroupInputTextStory,o as FormGroupInputTextStoryDisabled,e as FormGroupInputTextStoryError,t as FormGroupInputTextStoryRightLabelText,H as __namedExportsOrder,B as default};
//# sourceMappingURL=form-group-input-text.stories-45d04878.js.map
