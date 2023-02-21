import{r as s}from"./index-6f814c40.js";import{T as t}from"./textarea-9285016a.js";import{j as _,F as b,a as e}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";const R={title:"Design System/Atoms/Textarea",component:t},W=r=>{function x(a){g(a.currentTarget.value)}function i(a){p(a.currentTarget.value)}function v(a){y(a.currentTarget.value)}function c(a){V(a.currentTarget.value)}function d(a){E(a.currentTarget.value)}const[m,g]=s.useState(""),[h,p]=s.useState("We make movies better"),[C,y]=s.useState("We make movies better"),[S,V]=s.useState("We make movies better"),[f,E]=s.useState(""),o={margin:"0 0 1rem 0",maxWidth:"616px"};return _(b,{children:[e("div",{style:o,children:e(t,{...r,id:"Textarea_1",value:m,onChange:x})}),e("div",{style:o,children:e(t,{...r,id:"Textarea_2",value:h,onChange:i})}),e("div",{style:o,children:e(t,{...r,id:"Textarea_3",value:C,onChange:v,disabled:!0})}),e("div",{style:o,children:e(t,{...r,id:"Textarea_4",value:S,isErroneous:!0,onChange:c})}),e("div",{style:o,children:e(t,{...r,id:"Textarea_5",value:f,placeholder:"Placeholder text",onChange:d})})]})},n=W.bind({});n.storyName="Textarea";n.args={id:"textarea",cols:5,rows:5};var l,u,T;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  function onChangeTextarea1(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea1(e.currentTarget.value);
  }
  function onChangeTextarea2(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea2(e.currentTarget.value);
  }
  function onChangeTextarea3(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea3(e.currentTarget.value);
  }
  function onChangeTextarea4(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea4(e.currentTarget.value);
  }
  function onChangeTextarea5(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea5(e.currentTarget.value);
  }
  const [valueTextarea1, setValueTextarea1] = useState('');
  const [valueTextarea2, setValueTextarea2] = useState('We make movies better');
  const [valueTextarea3, setValueTextarea3] = useState('We make movies better');
  const [valueTextarea4, setValueTextarea4] = useState('We make movies better');
  const [valueTextarea5, setValueTextarea5] = useState('');
  const presentationStyle = {
    margin: '0 0 1rem 0',
    maxWidth: '616px'
  };
  return <>
      <div style={presentationStyle}>
        <Textarea {...args} {...{
        id: 'Textarea_1',
        value: valueTextarea1
      }} onChange={onChangeTextarea1} />
      </div>

      <div style={presentationStyle}>
        <Textarea {...args} {...{
        id: 'Textarea_2',
        value: valueTextarea2
      }} onChange={onChangeTextarea2} />
      </div>

      <div style={presentationStyle}>
        <Textarea {...args} {...{
        id: 'Textarea_3',
        value: valueTextarea3
      }} onChange={onChangeTextarea3} disabled={true} />
      </div>

      <div style={presentationStyle}>
        <Textarea {...args} {...{
        id: 'Textarea_4',
        value: valueTextarea4
      }} isErroneous onChange={onChangeTextarea4} />
      </div>

      <div style={presentationStyle}>
        <Textarea {...args} {...{
        id: 'Textarea_5',
        value: valueTextarea5,
        placeholder: 'Placeholder text'
      }} onChange={onChangeTextarea5} />
      </div>
    </>;
}`,...(T=(u=n.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const j=["TextareaStory"];export{n as TextareaStory,j as __namedExportsOrder,R as default};
//# sourceMappingURL=textarea.stories-d70cdb40.js.map
