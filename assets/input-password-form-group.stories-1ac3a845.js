import{r as x}from"./index-6f814c40.js";import{c as R}from"./index-74f03c09.js";import{F as C}from"./form-group-3d2833e4.js";import{j as g,F as L,a as r}from"./jsx-runtime-76c5c2e2.js";import{I as j}from"./input-text-9b6e45e8.js";import{C as D}from"./checkbox-e3dc60f0.js";import{InputTextStory as l}from"./input-text.stories-01fbfde7.js";import"./_commonjsHelpers-042e6b4d.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./icon-eb31426b.js";import"./form-helper-ce65ae5e.js";const O="_defaultStyleLabel_1seve_1",A="_checkboxWrapper_1seve_13",M="_disabled_1seve_23",c={defaultStyleLabel:O,checkboxWrapper:A,disabled:M},i=({className:n,label:N,inputProps:e,helperText:q,errorText:b,checkboxLabel:V,labelRightText:W,visiblePassword:m=!1})=>{const[d,h]=x.useState(m);x.useEffect(()=>{h(m)},[m]);function E(z){h(!d)}return g(L,{children:[r(C,{formElementId:e.id,className:n,label:N,errorText:b,helperText:q,labelRightText:W,children:r(j,{...e,type:d?"text":"password",isErroneous:!!b})}),g("div",{className:c.checkboxWrapper,children:[r(D,{id:"password-checkbox",name:"password-checkbox",value:"password-checkbox",checked:d,onChange:E,disabled:e==null?void 0:e.disabled,"aria-controls":e.id,"aria-expanded":d}),r("label",{htmlFor:"password-checkbox",className:R("body",c.defaultStyleLabel,(e==null?void 0:e.disabled)&&c.disabled),children:V})]})]})};try{i.displayName="InputPasswordFormGroup",i.__docgenInfo={description:"",displayName:"InputPasswordFormGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:"IInputText"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},checkboxLabel:{defaultValue:null,description:"",name:"checkboxLabel",required:!0,type:{name:"string"}},labelRightText:{defaultValue:null,description:"",name:"labelRightText",required:!1,type:{name:"ReactNode"}},visiblePassword:{defaultValue:{value:"false"},description:"",name:"visiblePassword",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Design System/Molecules/InputPasswordFormGroup",component:i},p=n=>r(L,{children:r("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:r(i,{...n})})}),u={label:"Lösenord",helperText:"Lösenordet behöver innehålla minst ett tecken, en stor bokstav, en liten bokstav, ett specialtecken och vara minst 8 tecken lång.",requiredText:"*",checkboxLabel:"Visa lösenord"},a=p.bind({});a.storyName="Form Group with Input Password";a.args={...u,inputProps:{...l,id:"input_1"}};const s=p.bind({});s.storyName="Form Group with Input Password Error";s.args={...u,errorText:"Lösenordet är ej korrekt utfört",inputProps:{...l,id:"input_1"}};const t=p.bind({});t.storyName="Form Group with Input Password Disabled";t.args={...u,inputProps:{...l,id:"input_1",disabled:!0}};const o=p.bind({});o.storyName="Form Group Password with Label Right Text";o.args={...u,requiredText:"",inputProps:{...l,id:"input_1"},labelRightText:r("a",{href:"/",children:"Glömt lösenord"})};var y,f,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputPasswordFormGroup {...args} />
      </div>
    </>;
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var F,I,G;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputPasswordFormGroup {...args} />
      </div>
    </>;
}`,...(G=(I=s.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var _,k,S;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputPasswordFormGroup {...args} />
      </div>
    </>;
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var v,P,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputPasswordFormGroup {...args} />
      </div>
    </>;
}`,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const se=["FormGroupInputPasswordStory","FormGroupInputPasswordStoryError","FormGroupInputPasswordStoryDisabled","FormGroupInputPasswordStoryRightLabelText"];export{a as FormGroupInputPasswordStory,t as FormGroupInputPasswordStoryDisabled,s as FormGroupInputPasswordStoryError,o as FormGroupInputPasswordStoryRightLabelText,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=input-password-form-group.stories-1ac3a845.js.map
