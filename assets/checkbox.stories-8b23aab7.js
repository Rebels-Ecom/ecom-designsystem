import{r as s}from"./index-6f814c40.js";import{c as F}from"./index-74f03c09.js";import{g as O}from"./form-helper-ce65ae5e.js";import{a as r,F as T}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";const j="_checkbox_78aad_1",w="_error_78aad_89",d={checkbox:j,error:w},i=s.forwardRef((a,c)=>{const{id:g,name:y,value:x,defaultValue:S,checked:v,className:q,isErroneous:I,required:V,onChange:o,disabled:E,other:N}=a;function D(W){o&&o(W)}return r("input",{ref:c,type:"checkbox",className:F("body",d.checkbox,O(d,I),q),id:g,name:y,onChange:D,value:x,defaultValue:S,checked:v,disabled:E,required:V,...N})});try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isErroneous:{defaultValue:null,description:"",name:"isErroneous",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},other:{defaultValue:null,description:"",name:"other",required:!1,type:{name:"TOther"}}}}}catch{}const H={title:"Design System/Atoms/Inputs/Checkbox",component:i},u=a=>(s.useState(!1),s.useState(!1),s.useState(!1),s.useState(!0),r(T,{children:r("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:r(i,{...a})})})),e=u.bind({});e.storyName="Checkbox";e.args={id:"input_1",value:"input_1",checked:!0,name:"group",disabled:!1};const n=u.bind({});n.storyName="Checkbox Error";n.args={...e.args,isErroneous:!0};const t=u.bind({});t.storyName="Checkbox Disabled";t.args={...e.args,disabled:!0};var l,p,h;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const input = {
    id: 'input_1',
    value: 'input_1',
    checked: isChecked,
    name: 'group'
  };
  const input2 = {
    ...input,
    id: 'input_2',
    value: 'input_2',
    checked: isChecked2,
    disabled: true
  };
  const input3 = {
    ...input,
    id: 'input_3',
    value: 'input_3',
    checked: isChecked3,
    isErroneous: true
  };
  const input4 = {
    ...input,
    id: 'input_4',
    value: 'input_4',
    checked: isChecked4,
    name: 'group2',
    disabled: true
  };
  const style = {
    margin: '0 0 1rem 0',
    maxWidth: '616px'
  };
  return <>
      <div style={style}>
        <Checkbox {...args} />
      </div>
    </>;
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,k,C;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const input = {
    id: 'input_1',
    value: 'input_1',
    checked: isChecked,
    name: 'group'
  };
  const input2 = {
    ...input,
    id: 'input_2',
    value: 'input_2',
    checked: isChecked2,
    disabled: true
  };
  const input3 = {
    ...input,
    id: 'input_3',
    value: 'input_3',
    checked: isChecked3,
    isErroneous: true
  };
  const input4 = {
    ...input,
    id: 'input_4',
    value: 'input_4',
    checked: isChecked4,
    name: 'group2',
    disabled: true
  };
  const style = {
    margin: '0 0 1rem 0',
    maxWidth: '616px'
  };
  return <>
      <div style={style}>
        <Checkbox {...args} />
      </div>
    </>;
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,f,_;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const input = {
    id: 'input_1',
    value: 'input_1',
    checked: isChecked,
    name: 'group'
  };
  const input2 = {
    ...input,
    id: 'input_2',
    value: 'input_2',
    checked: isChecked2,
    disabled: true
  };
  const input3 = {
    ...input,
    id: 'input_3',
    value: 'input_3',
    checked: isChecked3,
    isErroneous: true
  };
  const input4 = {
    ...input,
    id: 'input_4',
    value: 'input_4',
    checked: isChecked4,
    name: 'group2',
    disabled: true
  };
  const style = {
    margin: '0 0 1rem 0',
    maxWidth: '616px'
  };
  return <>
      <div style={style}>
        <Checkbox {...args} />
      </div>
    </>;
}`,...(_=(f=t.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const J=["CheckboxStory","CheckboxStoryError","CheckboxStoryDisabled"];export{e as CheckboxStory,t as CheckboxStoryDisabled,n as CheckboxStoryError,J as __namedExportsOrder,H as default};
//# sourceMappingURL=checkbox.stories-8b23aab7.js.map
