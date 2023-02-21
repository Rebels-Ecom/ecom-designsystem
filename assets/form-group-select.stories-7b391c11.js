import{F as y}from"./form-group-3d2833e4.js";import{r as P}from"./index-6f814c40.js";import{S as m,a as R}from"./select.stories-f741101b.js";import{a as o,F as L}from"./jsx-runtime-76c5c2e2.js";import"./index-74f03c09.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./icon-eb31426b.js";import"./_commonjsHelpers-042e6b4d.js";import"./form-helper-ce65ae5e.js";const A={title:"Design System/Molecules/FormGroup/Select",component:y},s=(l,F)=>{const[b,G]=P.useState("");function T(V){G(V.currentTarget.value)}const I={onChange:T,value:b},C=l.errorText,D=F.story.includes("Disabled");return o(L,{children:o("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:o(y,{...l,formElementId:m.args.id,children:o(R,{...m.args,...I,disabled:D,isErroneous:C})})})})},a={label:"Vilka är dina favoritfilmer?",helperText:"Genom att skriva filmens titel, kan vi lättare hjälpa dig vidare.",requiredText:"(Obligatorisk)"},e=s.bind({});e.storyName="Form Group with Select";e.args={...a};const r=s.bind({});r.storyName="Form Group with Select Error";r.args={...a,errorText:"Du behöver fylla i dina favoritfilmer"};const n=s.bind({});n.storyName="Form Group with Select Disabled";n.args={...a};const t=s.bind({});t.storyName="Form Group with Select Label Right Text";t.args={...a,requiredText:"",labelRightText:o("a",{href:"/",children:"Se filmer"})};var i,u,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args, context) => {
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
        <FormGroup {...args} formElementId={SelectStory.args.id}>
          {<Select {...{
          ...SelectStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(args, context) => {
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
        <FormGroup {...args} formElementId={SelectStory.args.id}>
          {<Select {...{
          ...SelectStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,v,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`(args, context) => {
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
        <FormGroup {...args} formElementId={SelectStory.args.id}>
          {<Select {...{
          ...SelectStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(E=(v=n.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var h,x,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args, context) => {
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
        <FormGroup {...args} formElementId={SelectStory.args.id}>
          {<Select {...{
          ...SelectStory.args,
          ...formElementProps,
          disabled,
          isErroneous
        }} />}
        </FormGroup>
      </div>
    </>;
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const z=["FormGroupSelectStory","FormGroupSelectStoryError","FormGroupSelectStoryDisabled","FormGroupSelectStoryRightLabelText"];export{e as FormGroupSelectStory,n as FormGroupSelectStoryDisabled,r as FormGroupSelectStoryError,t as FormGroupSelectStoryRightLabelText,z as __namedExportsOrder,A as default};
//# sourceMappingURL=form-group-select.stories-7b391c11.js.map
