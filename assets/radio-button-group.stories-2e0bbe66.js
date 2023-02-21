import{r as N}from"./index-6f814c40.js";import{c as l}from"./index-74f03c09.js";import{R as I}from"./radio-button-321ff782.js";import{a,j as T,F as k}from"./jsx-runtime-76c5c2e2.js";import{RadioButtonStory as e}from"./radio-button.stories-7ad91e18.js";const x="_defaultStyleList_1jk7r_1",j="_horizontal_1jk7r_13",E="_defaultStyleListItem_1jk7r_21",C="_vertical_1jk7r_43",q="_defaultStyleRadioWrapper_1jk7r_59",V="_defaultStyleRadio_1jk7r_59",W="_defaultStyleLabel_1jk7r_77",M="_disabled_1jk7r_91",n={defaultStyleList:x,horizontal:j,defaultStyleListItem:E,vertical:C,defaultStyleRadioWrapper:q,defaultStyleRadio:V,defaultStyleLabel:W,disabled:M},g=({className:u,classNameList:d,classNameListItem:p,classNameLabel:c,classNameRadio:s,classNameRadioWrapper:m,inputs:f,align:y="horizontal"})=>a("div",{className:l(u),children:a("ul",{className:d?l(d):l(n.defaultStyleList,n[y]),children:f.map(i=>a("li",{className:l(p||n.defaultStyleListItem),children:T("div",{className:l(m||n.defaultStyleRadioWrapper),children:[a(I,{...i,className:s||n.defaultStyleRadio},i.id),a("label",{className:l("body",c||n.defaultStyleLabel,i.disabled&&n.disabled),htmlFor:i.id,children:i.label})]})},i.id))})});try{g.displayName="RadioButtonGroup",g.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classNameHeading:{defaultValue:null,description:"",name:"classNameHeading",required:!1,type:{name:"string"}},classNameList:{defaultValue:null,description:"",name:"classNameList",required:!1,type:{name:"string"}},classNameListItem:{defaultValue:null,description:"",name:"classNameListItem",required:!1,type:{name:"string"}},classNameLabel:{defaultValue:null,description:"",name:"classNameLabel",required:!1,type:{name:"string"}},classNameRadio:{defaultValue:null,description:"",name:"classNameRadio",required:!1,type:{name:"string"}},classNameRadioWrapper:{defaultValue:null,description:"",name:"classNameRadioWrapper",required:!1,type:{name:"string"}},inputs:{defaultValue:null,description:"",name:"inputs",required:!0,type:{name:"TypeInputs[]"}},align:{defaultValue:{value:"horizontal"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const z={title:"Design System/Molecules/RadioButtonGroup",component:g},R=u=>{const[d,p]=N.useState(u.inputs.map(s=>({...s,onChange:c})));function c(s){const m=s.currentTarget.value;p(f=>f.map(y=>({...y,checked:y.value===m})))}return a(k,{children:a("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:a(g,{inputs:d,align:u.align})})})},r=R.bind({});r.storyName="Radio Button Group";r.args={inputs:[{...e.args,label:"Liten popcorn"},{...e.args,id:`${e.args.id}_2`,value:`${e.args.value}_2`,checked:!1,label:"Mellan popcorn"}]};const t=R.bind({});t.storyName="Radio Button Group Error";t.args={inputs:[{...e.args,label:"Liten popcorn",isErroneous:!0},{...e.args,id:`${e.args.id}_2`,value:`${e.args.value}_2`,checked:!1,label:"Mellan popcorn",isErroneous:!0}]};const o=R.bind({});o.storyName="Radio Button Group Disabled";o.args={inputs:[{...e.args,label:"Liten popcorn",disabled:!0},{...e.args,id:`${e.args.id}_2`,value:`${e.args.value}_2`,checked:!1,label:"Mellan popcorn",disabled:!0}]};var v,_,B;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [radioBtnsGroupOne, setRadioBtnsGroupOne] = useState<Array<TypeInputs>>(args.inputs.map((radioBtn: any) => {
    return {
      ...radioBtn,
      onChange: onChangeRadioGroupOne
    };
  }));
  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setRadioBtnsGroupOne((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false
        };
      });
    });
  }
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <RadioButtonGroup inputs={radioBtnsGroupOne} align={args.align} />
      </div>
    </>;
}`,...(B=(_=r.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,h,S;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [radioBtnsGroupOne, setRadioBtnsGroupOne] = useState<Array<TypeInputs>>(args.inputs.map((radioBtn: any) => {
    return {
      ...radioBtn,
      onChange: onChangeRadioGroupOne
    };
  }));
  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setRadioBtnsGroupOne((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false
        };
      });
    });
  }
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <RadioButtonGroup inputs={radioBtnsGroupOne} align={args.align} />
      </div>
    </>;
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,O,L;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [radioBtnsGroupOne, setRadioBtnsGroupOne] = useState<Array<TypeInputs>>(args.inputs.map((radioBtn: any) => {
    return {
      ...radioBtn,
      onChange: onChangeRadioGroupOne
    };
  }));
  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setRadioBtnsGroupOne((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false
        };
      });
    });
  }
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <RadioButtonGroup inputs={radioBtnsGroupOne} align={args.align} />
      </div>
    </>;
}`,...(L=(O=o.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const $=["RadioButtonGroupStory","RadioButtonGroupStoryError","RadioButtonGroupStoryDisabled"],w=Object.freeze(Object.defineProperty({__proto__:null,RadioButtonGroupStory:r,RadioButtonGroupStoryDisabled:o,RadioButtonGroupStoryError:t,__namedExportsOrder:$,default:z},Symbol.toStringTag,{value:"Module"}));export{r as R,g as a,w as r};
//# sourceMappingURL=radio-button-group.stories-2e0bbe66.js.map
