import{r as l}from"./index-6f814c40.js";import{c as q}from"./index-74f03c09.js";import{g as b}from"./form-helper-ce65ae5e.js";import{a as e,j as F,F as A}from"./jsx-runtime-76c5c2e2.js";const M="_textarea_1xqx6_1",N="_error_1xqx6_61",_={textarea:M,error:N},n=l.forwardRef(({id:t,className:s,value:i,defaultValue:d,isErroneous:x,required:c,onChange:u,disabled:T,rows:m,cols:p,placeholder:v,other:g},h)=>{function f(y){u&&u(y)}return e("textarea",{ref:h,className:q("body",_.textarea,b(_,x),s),id:t,value:i,defaultValue:d,onChange:f,disabled:T,required:c,rows:m,cols:p,placeholder:v,...g})});try{n.displayName="Textarea",n.__docgenInfo={description:"",displayName:"Textarea",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"CallableFunction"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isErroneous:{defaultValue:null,description:"",name:"isErroneous",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},other:{defaultValue:null,description:"",name:"other",required:!1,type:{name:"TOther"}}}}}catch{}const R={title:"Design System/Atoms/Textarea",component:n},j=t=>{function s(a){T(a.currentTarget.value)}function i(a){p(a.currentTarget.value)}function d(a){g(a.currentTarget.value)}function x(a){f(a.currentTarget.value)}function c(a){E(a.currentTarget.value)}const[u,T]=l.useState(""),[m,p]=l.useState("Some text here"),[v,g]=l.useState("Some text here"),[h,f]=l.useState("Some text here"),[y,E]=l.useState(""),o={margin:"0 0 1rem 0",maxWidth:"616px"};return F(A,{children:[e("div",{style:o,children:e(n,{...t,id:"Textarea_1",value:u,onChange:s})}),e("div",{style:o,children:e(n,{...t,id:"Textarea_2",value:m,onChange:i})}),e("div",{style:o,children:e(n,{...t,id:"Textarea_3",value:v,onChange:d,disabled:!0})}),e("div",{style:o,children:e(n,{...t,id:"Textarea_4",value:h,isErroneous:!0,onChange:x})}),e("div",{style:o,children:e(n,{...t,id:"Textarea_5",value:y,placeholder:"Placeholder text",onChange:c})})]})},r=j.bind({});r.storyName="Textarea";r.args={id:"textarea",cols:5,rows:5};var S,C,V;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
  const [valueTextarea2, setValueTextarea2] = useState('Some text here');
  const [valueTextarea3, setValueTextarea3] = useState('Some text here');
  const [valueTextarea4, setValueTextarea4] = useState('Some text here');
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
}`,...(V=(C=r.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const H=["TextareaStory"],W=Object.freeze(Object.defineProperty({__proto__:null,TextareaStory:r,__namedExportsOrder:H,default:R},Symbol.toStringTag,{value:"Module"}));export{r as T,n as a,W as t};
//# sourceMappingURL=textarea.stories-90199d1c.js.map
