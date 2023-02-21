import{F as y}from"./form-group-3d2833e4.js";import{r as P}from"./index-6f814c40.js";import{TextareaStory as i}from"./textarea.stories-d70cdb40.js";import{a as o,F as R}from"./jsx-runtime-76c5c2e2.js";import{T as L}from"./textarea-9285016a.js";import"./index-74f03c09.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./icon-eb31426b.js";import"./_commonjsHelpers-042e6b4d.js";import"./form-helper-ce65ae5e.js";const z={title:"Design System/Molecules/FormGroup/Textarea",component:y},a=(m,F)=>{const[S,b]=P.useState("");function G(V){b(V.currentTarget.value)}const I={onChange:G,value:S},C=m.errorText,D=F.story.includes("Disabled");return o(R,{children:o("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:o(y,{...m,formElementId:i.args.id,children:o(L,{...i.args,...I,disabled:D,isErroneous:C})})})})},s={label:"Vilka är dina favoritfilmer?",helperText:"Genom att skriva filmens titel, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},e=a.bind({});e.storyName="Form Group with Textarea";e.args={...s};const r=a.bind({});r.storyName="Form Group with Textarea Error";r.args={...s,errorText:"Du behöver fylla i dina favoritfilmer"};const n=a.bind({});n.storyName="Form Group with Textarea Disabled";n.args={...s};const t=a.bind({});t.storyName="Form Group with Textarea Label Right Text";t.args={...s,requiredText:"",labelRightText:o("a",{href:"/",children:"Se filmer"})};var u,l,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`(args, context) => {
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(args, context) => {
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
}`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,T,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args, context) => {
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
}`,...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var E,f,h;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`(args, context) => {
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const B=["FormGroupTextareaStory","FormGroupTextareaStoryError","FormGroupTextareaStoryDisabled","FormGroupTextareaStoryRightLabelText"];export{e as FormGroupTextareaStory,n as FormGroupTextareaStoryDisabled,r as FormGroupTextareaStoryError,t as FormGroupTextareaStoryRightLabelText,B as __namedExportsOrder,z as default};
//# sourceMappingURL=form-group-textarea.stories-24b06c91.js.map
