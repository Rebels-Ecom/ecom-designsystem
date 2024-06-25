import{j as n,r as _}from"./jsx-runtime-03333307.js";import{c as g}from"./index-09749a66.js";import{I as j}from"./icon-e3522fc5.js";const v="_buttonsList_ewljw_1",y="_radioBtn_ewljw_10",b="_disabled_ewljw_27",h="_icon_ewljw_34",B="_radioBtnWrapper_ewljw_51",a={buttonsList:v,radioBtn:y,disabled:b,icon:h,radioBtnWrapper:B};function c({options:t,onChange:r,selectedOption:i}){const l=Array.isArray(t)&&t.length>0;function o(e){r&&r(e)}return l?n.jsx("ul",{className:a.buttonsList,children:t.map((e,p)=>{const S=e.name===i;return n.jsxs("li",{className:a.radioBtnWrapper,children:[n.jsx("input",{type:"radio",id:e.name,name:e.name,className:a.radio,checked:S,value:e.value,onChange:o}),n.jsxs("label",{className:g(a.radioBtn,"cta-s"),htmlFor:e.name,children:[e.name,n.jsx(j,{icon:"icon-calendar",className:a.icon})]})]},`${e.value}-${e.name}-${p}`)})}):null}c.__docgenInfo={description:"",methods:[],displayName:"SingleSelectButtonsList",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ISelectOption"}],raw:"Array<ISelectOption>"},description:""},selectedOption:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"CallableFunction"},description:""}}};const x={title:"Design System/Molecules/SingleSelectButtonsList",component:c},L={render:t=>{const[r,i]=_.useState(t.selectedOption);function l(o){i(o.currentTarget.value)}return n.jsx("div",{style:{margin:"auto",maxWidth:"1800px"},children:n.jsx(c,{...t,selectedOption:r,onChange:l})})}},s={...L,args:{selectedOption:"Juni 2023",options:[{name:"Juni 2023",value:"Juni 2023"},{name:"Maj 2023",value:"Maj 2023"},{name:"April 2023",value:"April 2023"},{name:"Mars 2023",value:"Mars 2023"},{name:"Februari 2023",value:"Februari 2023"},{name:"Januari 2023",value:"Januari 2023"}]}};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...SingleSelectButtonsListStoryTemplate,
  args: {
    selectedOption: 'Juni 2023',
    options: [{
      name: 'Juni 2023',
      value: 'Juni 2023'
    }, {
      name: 'Maj 2023',
      value: 'Maj 2023'
    }, {
      name: 'April 2023',
      value: 'April 2023'
    }, {
      name: 'Mars 2023',
      value: 'Mars 2023'
    }, {
      name: 'Februari 2023',
      value: 'Februari 2023'
    }, {
      name: 'Januari 2023',
      value: 'Januari 2023'
    }]
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const M=["SingleSelectButtonsListStory"],J=Object.freeze(Object.defineProperty({__proto__:null,SingleSelectButtonsListStory:s,__namedExportsOrder:M,default:x},Symbol.toStringTag,{value:"Module"}));export{c as S,s as a,J as s};
