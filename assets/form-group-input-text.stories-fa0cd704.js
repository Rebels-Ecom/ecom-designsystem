import{F as y}from"./form-group-3d2833e4.js";import{r as P}from"./index-6f814c40.js";import{InputTextStory as m}from"./input-text.stories-01fbfde7.js";import{a as o,F as R}from"./jsx-runtime-76c5c2e2.js";import{I as L}from"./input-text-9b6e45e8.js";import"./index-74f03c09.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./icon-eb31426b.js";import"./_commonjsHelpers-042e6b4d.js";import"./form-helper-ce65ae5e.js";const z={title:"Design System/Molecules/FormGroup/InputText",component:y},s=(u,f)=>{const[F,S]=P.useState("");function b(V){S(V.currentTarget.value)}const G={onChange:b,value:F},C=u.errorText,D=f.story.includes("Disabled");return o(R,{children:o("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:o(y,{...u,formElementId:m.args.id,children:o(L,{...m.args,...G,disabled:D,isErroneous:C})})})})},a={label:"Vad letar du efter?",helperText:"Genom att skriva produkt namn, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},e=s.bind({});e.storyName="Form Group with InputText";e.args={...a};const r=s.bind({});r.storyName="Form Group with InputText Error";r.args={...a,errorText:"Du behöver fylla i produkt namn"};const n=s.bind({});n.storyName="Form Group with InputText Disabled";n.args={...a};const t=s.bind({});t.storyName="Form Group with InputText Label Right Text";t.args={...a,requiredText:"",labelRightText:o("a",{href:"/",children:"Se produkter"})};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(args, context) => {
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
        <FormGroup {...args} formElementId={InputTextStory.args.id}>
          {<InputText {...{
          ...InputTextStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(args, context) => {
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
        <FormGroup {...args} formElementId={InputTextStory.args.id}>
          {<InputText {...{
          ...InputTextStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var g,T,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args, context) => {
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
        <FormGroup {...args} formElementId={InputTextStory.args.id}>
          {<InputText {...{
          ...InputTextStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(I=(T=n.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var E,h,v;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`(args, context) => {
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
        <FormGroup {...args} formElementId={InputTextStory.args.id}>
          {<InputText {...{
          ...InputTextStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const B=["FormGroupInputTextStory","FormGroupInputTextStoryError","FormGroupInputTextStoryDisabled","FormGroupInputTextStoryRightLabelText"];export{e as FormGroupInputTextStory,n as FormGroupInputTextStoryDisabled,r as FormGroupInputTextStoryError,t as FormGroupInputTextStoryRightLabelText,B as __namedExportsOrder,z as default};
//# sourceMappingURL=form-group-input-text.stories-fa0cd704.js.map
