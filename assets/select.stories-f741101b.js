import{r as p}from"./index-6f814c40.js";import{c as V}from"./index-74f03c09.js";import{g as b}from"./form-helper-ce65ae5e.js";import{a as e,j as h,F as _}from"./jsx-runtime-76c5c2e2.js";const I="_wrapper_10fys_1",q="_select_10fys_9",E="_error_10fys_49",T="_icon_10fys_69",d={wrapper:I,select:q,error:E,icon:T},r=p.forwardRef(({id:a,options:n,onChange:s,value:u,selectedIndex:i,disabled:o,isErroneous:m,required:l,other:y},x)=>{function v(c){s&&s(c)}function O(){return n instanceof Array&&n.length}return e("div",{className:d.wrapper,children:O()&&h(_,{children:[e("select",{className:V("body",d.select,b(d,m)),onChange:v,disabled:o,required:l,id:a,value:i?n[i].value:u,ref:x,...y,children:n==null?void 0:n.map((c,C)=>e("option",{value:c.value,children:c.name},`option_${C}`))}),e("div",{className:d.icon})]})})});try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"CallableFunction"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isErroneous:{defaultValue:null,description:"",name:"isErroneous",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},other:{defaultValue:null,description:"",name:"other",required:!1,type:{name:"TOther"}}}}}catch{}const j={title:"Design System/Atoms/Selects",component:r},N=a=>{const[n,s]=p.useState("2"),[u,i]=p.useState(1);function o(l){s(l.currentTarget.value)}function m(l){i(l.currentTarget.selectedIndex)}return h(_,{children:[e("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:e(r,{...a,onChange:o,value:n,id:"select_1"})}),e("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:e(r,{...a,onChange:o,disabled:!0,id:"select_2"})}),e("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:e(r,{...a,onChange:m,selectedIndex:u,isErroneous:!0,id:"select_3"})})]})},t=N.bind({});t.storyName="Select";t.args={id:"select",options:[{name:"Välj en film",value:""},{name:"Shrek",value:"1"},{name:"Sing",value:"2"},{name:"Sing 2",value:"3"}]};var g,S,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [selectedOptionValue, setSelectedOptionValue] = useState('2');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(1);
  function onChangeSelect1(e: React.FormEvent<HTMLSelectElement>) {
    setSelectedOptionValue(e.currentTarget.value);
  }
  function onChangeSelect2(e: React.FormEvent<HTMLSelectElement>) {
    setSelectedOptionIndex(e.currentTarget.selectedIndex);
  }
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <Select {...args} onChange={onChangeSelect1} value={selectedOptionValue} id={'select_1'} />
      </div>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <Select {...args} onChange={onChangeSelect1} disabled={true} id={'select_2'} />
      </div>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <Select {...args} onChange={onChangeSelect2} selectedIndex={selectedOptionIndex} isErroneous id={'select_3'} />
      </div>
    </>;
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const W=["SelectStory"],A=Object.freeze(Object.defineProperty({__proto__:null,SelectStory:t,__namedExportsOrder:W,default:j},Symbol.toStringTag,{value:"Module"}));export{t as S,r as a,A as s};
//# sourceMappingURL=select.stories-f741101b.js.map
