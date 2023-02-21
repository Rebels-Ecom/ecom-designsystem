import{r as f}from"./index-6f814c40.js";import{I}from"./input-text-9b6e45e8.js";import{a as s,F as b}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";const L={title:"Design System/Atoms/Inputs/InputText",component:I},a=o=>{const[y,S]=f.useState(o.value);function E(C){S(C.currentTarget.value)}return s(b,{children:s("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:s(I,{...o,onChange:E,value:y})})})},e=a.bind({});e.storyName="Input Text";e.args={id:"input_1",value:"",disabled:!1,placeholder:""};const t=a.bind({});t.storyName="Input Text Placeholder";t.args={id:"input_1",value:"",disabled:!1,placeholder:"Write anything you like"};const n=a.bind({});n.storyName="Input Text Error";n.args={...e.args,isErroneous:!0};const r=a.bind({});r.storyName="Input Text Disabled";r.args={...e.args,disabled:!0};var u,l,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputText {...args} onChange={onChange} value={value} />
      </div>
    </>;
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputText {...args} onChange={onChange} value={value} />
      </div>
    </>;
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,g,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputText {...args} onChange={onChange} value={value} />
      </div>
    </>;
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,T,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <InputText {...args} onChange={onChange} value={value} />
      </div>
    </>;
}`,...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const M=["InputTextStory","InputTextStoryPlaceHolder","InputTextStoryError","InputTextStoryDisabled"];export{e as InputTextStory,r as InputTextStoryDisabled,n as InputTextStoryError,t as InputTextStoryPlaceHolder,M as __namedExportsOrder,L as default};
//# sourceMappingURL=input-text.stories-01fbfde7.js.map
