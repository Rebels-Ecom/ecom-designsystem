import{F as h}from"./form-group-3d2833e4.js";import{r as P}from"./index-6f814c40.js";import{InputTextStory as m}from"./input-text.stories-01fbfde7.js";import{a as o,F as R}from"./jsx-runtime-76c5c2e2.js";import{I as L}from"./input-text-9b6e45e8.js";import"./index-74f03c09.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./icon-eb31426b.js";import"./_commonjsHelpers-042e6b4d.js";import"./form-helper-ce65ae5e.js";const z={title:"Design System/Molecules/FormGroup/InputText",component:h},s=(u,y)=>{const[F,S]=P.useState("");function b(V){S(V.currentTarget.value)}const G={onChange:b,value:F},C=u.errorText,D=y.story.includes("Disabled");return o(R,{children:o("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:o(h,{...u,formElementId:m.args.id,children:o(L,{...m.args,...G,disabled:D,isErroneous:C})})})})},a={label:"Vilka är dina favoritfilmer?",helperText:"Genom att skriva filmens titel, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},e=s.bind({});e.storyName="Form Group with InputText";e.args={...a};const r=s.bind({});r.storyName="Form Group with InputText Error";r.args={...a,errorText:"Du behöver fylla i dina favoritfilmer"};const n=s.bind({});n.storyName="Form Group with InputText Disabled";n.args={...a};const t=s.bind({});t.storyName="Form Group with InputText Label Right Text";t.args={...a,requiredText:"",labelRightText:o("a",{href:"/",children:"Se filmer"})};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args, context) => {
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,d,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`(args, context) => {
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
}`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,T,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args, context) => {
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
}`,...(I=(T=n.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var v,E,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`(args, context) => {
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
}`,...(f=(E=t.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const B=["FormGroupInputTextStory","FormGroupInputTextStoryError","FormGroupInputTextStoryDisabled","FormGroupInputTextStoryRightLabelText"];export{e as FormGroupInputTextStory,n as FormGroupInputTextStoryDisabled,r as FormGroupInputTextStoryError,t as FormGroupInputTextStoryRightLabelText,B as __namedExportsOrder,z as default};
//# sourceMappingURL=form-group-input-text.stories-72a9e988.js.map
