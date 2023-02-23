import{F}from"./form-group-3d2833e4.js";import{r as P}from"./index-6f814c40.js";import{T as m,a as R}from"./textarea.stories-90199d1c.js";import{a as o,F as L}from"./jsx-runtime-76c5c2e2.js";import"./index-74f03c09.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./icon-eb31426b.js";import"./_commonjsHelpers-042e6b4d.js";import"./form-helper-ce65ae5e.js";const A={title:"Design System/Molecules/FormGroup/Textarea",component:F},a=(u,f)=>{const[S,b]=P.useState("");function G(V){b(V.currentTarget.value)}const I={onChange:G,value:S},C=u.errorText,D=f.story.includes("Disabled");return o(L,{children:o("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:o(F,{...u,formElementId:m.args.id,children:o(R,{...m.args,...I,disabled:D,isErroneous:C})})})})},s={label:"Vad letar du efter?",helperText:"Genom att skriva produkt namn, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},e=a.bind({});e.storyName="Form Group with Textarea";e.args={...s};const r=a.bind({});r.storyName="Form Group with Textarea Error";r.args={...s,errorText:"Du behöver fylla i produkt namn"};const n=a.bind({});n.storyName="Form Group with Textarea Disabled";n.args={...s};const t=a.bind({});t.storyName="Form Group with Textarea Label Right Text";t.args={...s,requiredText:"",labelRightText:o("a",{href:"/",children:"Se produkter"})};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args, context) => {
  const [value, setValue] = useState('');
  function onChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  const formElementProps = {
    onChange: onChangeInput,
    value: value
  };
  const isErroneous = args.errorText;
  const disabled = context.story.includes('Disabled');
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <FormGroup {...args} formElementId={TextareaStory.args.id}>
          {<Textarea {...{
          ...TextareaStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,c,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(args, context) => {
  const [value, setValue] = useState('');
  function onChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  const formElementProps = {
    onChange: onChangeInput,
    value: value
  };
  const isErroneous = args.errorText;
  const disabled = context.story.includes('Disabled');
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <FormGroup {...args} formElementId={TextareaStory.args.id}>
          {<Textarea {...{
          ...TextareaStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var g,T,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args, context) => {
  const [value, setValue] = useState('');
  function onChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  const formElementProps = {
    onChange: onChangeInput,
    value: value
  };
  const isErroneous = args.errorText;
  const disabled = context.story.includes('Disabled');
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <FormGroup {...args} formElementId={TextareaStory.args.id}>
          {<Textarea {...{
          ...TextareaStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var h,v,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args, context) => {
  const [value, setValue] = useState('');
  function onChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  const formElementProps = {
    onChange: onChangeInput,
    value: value
  };
  const isErroneous = args.errorText;
  const disabled = context.story.includes('Disabled');
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <FormGroup {...args} formElementId={TextareaStory.args.id}>
          {<Textarea {...{
          ...TextareaStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const z=["FormGroupTextareaStory","FormGroupTextareaStoryError","FormGroupTextareaStoryDisabled","FormGroupTextareaStoryRightLabelText"];export{e as FormGroupTextareaStory,n as FormGroupTextareaStoryDisabled,r as FormGroupTextareaStoryError,t as FormGroupTextareaStoryRightLabelText,z as __namedExportsOrder,A as default};
//# sourceMappingURL=form-group-textarea.stories-9d5a49d7.js.map
