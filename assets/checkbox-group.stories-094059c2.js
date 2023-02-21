import{r as G}from"./index-6f814c40.js";import{c as u}from"./index-74f03c09.js";import{C as N}from"./checkbox-e3dc60f0.js";import{a,j as E,F as z}from"./jsx-runtime-76c5c2e2.js";import{CheckboxStory as t}from"./checkbox.stories-37aef0ae.js";const V="_defaultStyleList_k93x1_1",W="_horizontal_k93x1_13",q="_defaultStyleListItem_k93x1_21",$="_vertical_k93x1_43",j="_defaultStyleCheckboxWrapper_k93x1_59",A="_defaultStyleCheckbox_k93x1_59",F="_defaultStyleLabel_k93x1_79",M="_disabled_k93x1_91",c={defaultStyleList:V,horizontal:W,defaultStyleListItem:q,vertical:$,defaultStyleCheckboxWrapper:j,defaultStyleCheckbox:A,defaultStyleLabel:F,disabled:M},k=({className:e,classNameList:i,classNameListItem:p,classNameLabel:d,classNameCheckbox:n,classNameCheckboxWrapper:h,inputs:b=[],align:m="horizontal"})=>a("div",{className:u(e),children:a("ul",{className:u(i||`${c.defaultStyleList} ${c[m]}`),children:b.map(r=>a("li",{className:u(p||c.defaultStyleListItem),children:E("div",{className:u(h||c.defaultStyleCheckboxWrapper),children:[a(N,{...r,className:u(n||c.defaultStyleCheckbox)}),a("label",{className:u("body",d||c.defaultStyleLabel,r.disabled&&c.disabled),htmlFor:r.id,children:r.label})]})},r.id))})});try{k.displayName="CheckboxGroup",k.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classNameList:{defaultValue:null,description:"",name:"classNameList",required:!1,type:{name:"string"}},classNameListItem:{defaultValue:null,description:"",name:"classNameListItem",required:!1,type:{name:"string"}},classNameLabel:{defaultValue:null,description:"",name:"classNameLabel",required:!1,type:{name:"string"}},classNameCheckbox:{defaultValue:null,description:"",name:"classNameCheckbox",required:!1,type:{name:"string"}},classNameCheckboxWrapper:{defaultValue:null,description:"",name:"classNameCheckboxWrapper",required:!1,type:{name:"string"}},inputs:{defaultValue:{value:"[]"},description:"",name:"inputs",required:!1,type:{name:"TypeInputs[]"}},align:{defaultValue:{value:"horizontal"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const D={title:"Design System/Molecules/CheckboxGroup",component:k},x=e=>{const[i,p]=G.useState(e.inputs.map(n=>({...n,onChange:d})));function d(n){const h=n.currentTarget.value,b=n.currentTarget.checked;p(m=>m.map(r=>({...r,checked:r.value===h?b:r.checked})))}return a(z,{children:a("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:a(k,{...e,inputs:i})})})},y=[{...t.args,label:"Liten popcorn"},{...t.args,id:`${t.args.id}_2`,value:`${t.args.value}_2`,checked:!1,label:"Mellan popcorn"},{...t.args,id:`${t.args.id}_3`,value:`${t.args.value}_3`,checked:!1,label:"Stor popcorn"}],o=x.bind({});o.storyName="Checkbox Group";o.args={align:"horizontal",inputs:y};const s=x.bind({});s.storyName="Checkbox Group Error";s.args={align:"horizontal",inputs:y.map(e=>({...e,validation:{state:"error"}}))};const l=x.bind({});l.storyName="Checkbox Group Disabled";l.args={label:"Välj popkornstorlek",align:"horizontal",inputs:y.map(e=>({...e,disabled:!0}))};var g,C,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(args.inputs.map((checkbox: any) => {
    return {
      ...checkbox,
      onChange: onChangeCheckbox
    };
  }));
  function onChangeCheckbox(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    setCheckboxes((prevCheckboxes: Array<TypeInputs>) => {
      return prevCheckboxes.map((checkbox: TypeInputs) => {
        return {
          ...checkbox,
          checked: checkbox.value === value ? checked : checkbox.checked
        };
      });
    });
  }
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <CheckboxGroup {...args} inputs={checkboxes} />
      </div>
    </>;
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var v,_,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(args.inputs.map((checkbox: any) => {
    return {
      ...checkbox,
      onChange: onChangeCheckbox
    };
  }));
  function onChangeCheckbox(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    setCheckboxes((prevCheckboxes: Array<TypeInputs>) => {
      return prevCheckboxes.map((checkbox: TypeInputs) => {
        return {
          ...checkbox,
          checked: checkbox.value === value ? checked : checkbox.checked
        };
      });
    });
  }
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <CheckboxGroup {...args} inputs={checkboxes} />
      </div>
    </>;
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var T,I,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(args.inputs.map((checkbox: any) => {
    return {
      ...checkbox,
      onChange: onChangeCheckbox
    };
  }));
  function onChangeCheckbox(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    setCheckboxes((prevCheckboxes: Array<TypeInputs>) => {
      return prevCheckboxes.map((checkbox: TypeInputs) => {
        return {
          ...checkbox,
          checked: checkbox.value === value ? checked : checkbox.checked
        };
      });
    });
  }
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <CheckboxGroup {...args} inputs={checkboxes} />
      </div>
    </>;
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const H=["CheckboxGroupStory","CheckboxGroupStoryError","CheckboxGroupStoryDisabled"],J=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroupStory:o,CheckboxGroupStoryDisabled:l,CheckboxGroupStoryError:s,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{o as C,k as a,J as c};
//# sourceMappingURL=checkbox-group.stories-094059c2.js.map
