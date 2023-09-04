import{r as g}from"./index-6f814c40.js";import{c as y}from"./index-74f03c09.js";import{I as v}from"./icon-7e598265.js";import{a as r,j as u}from"./jsx-runtime-76c5c2e2.js";const h="_buttonsList_ewljw_1",B="_radioBtn_ewljw_10",b="_disabled_ewljw_27",f="_icon_ewljw_34",j="_radioBtnWrapper_ewljw_51",t={buttonsList:h,radioBtn:B,disabled:b,icon:f,radioBtnWrapper:j};function l({options:n,onChange:s,selectedOption:i}){const o=Array.isArray(n)&&n.length>0;function c(e){s&&s(e)}return o?r("ul",{className:t.buttonsList,children:n.map((e,S)=>{const _=e.name===i;return u("li",{className:t.radioBtnWrapper,children:[r("input",{type:"radio",id:e.name,name:e.name,className:t.radio,checked:_,value:e.value,onChange:c}),u("label",{className:y(t.radioBtn,"cta-s"),htmlFor:e.name,children:[e.name,r(v,{icon:"icon-calendar",className:t.icon})]})]},`${e.value}-${e.name}-${S}`)})}):null}try{l.displayName="SingleSelectButtonsList",l.__docgenInfo={description:"",displayName:"SingleSelectButtonsList",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"CallableFunction"}}}}}catch{}const L={title:"Design System/Molecules/SingleSelectButtonsList",component:l},M={render:n=>{const[s,i]=g.useState(n.selectedOption);function o(c){i(c.currentTarget.value)}return r("div",{style:{margin:"auto",maxWidth:"1800px"},children:r(l,{...n,selectedOption:s,onChange:o})})}},a={...M,args:{selectedOption:"Juni 2023",options:[{name:"Juni 2023",value:"Juni 2023"},{name:"Maj 2023",value:"Maj 2023"},{name:"April 2023",value:"April 2023"},{name:"Mars 2023",value:"Mars 2023"},{name:"Februari 2023",value:"Februari 2023"},{name:"Januari 2023",value:"Januari 2023"}]}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const O=["SingleSelectButtonsListStory"],A=Object.freeze(Object.defineProperty({__proto__:null,SingleSelectButtonsListStory:a,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{l as S,a,A as s};
//# sourceMappingURL=single-select-buttons-list.stories-2a4352ba.js.map
