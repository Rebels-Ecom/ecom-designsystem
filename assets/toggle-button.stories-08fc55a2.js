import{I as d}from"./icon-5fefd509.js";import{a as p,j as n}from"./jsx-runtime-a3a6c0b8.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";const m="_toggleButton_c22m7_1",B="_icon_c22m7_15",T="_buttonText_c22m7_21",r={toggleButton:m,icon:B,buttonText:T};function l({toggleBtnLabelExpand:e,toggleBtnLabelCollapse:a,isExpanded:t,onToggleClick:c}){function u(){c()}return p("button",{className:r.toggleButton,onClick:()=>u(),children:[n("span",{className:r.buttonText,children:t?a:e}),n(d,{icon:t?"icon-x-circle":"icon-plus-circle",className:r.icon})]})}try{l.displayName="ToggleButton",l.__docgenInfo={description:"",displayName:"ToggleButton",props:{toggleBtnLabelExpand:{defaultValue:null,description:"",name:"toggleBtnLabelExpand",required:!0,type:{name:"string"}},toggleBtnLabelCollapse:{defaultValue:null,description:"",name:"toggleBtnLabelCollapse",required:!0,type:{name:"string"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!0,type:{name:"boolean"}},onToggleClick:{defaultValue:null,description:"",name:"onToggleClick",required:!0,type:{name:"CallableFunction"}}}}}catch{}const C={title:"Design System/Atoms/ToggleButton",component:l},_={render:e=>{function a(t){console.log("---",t)}return n("div",{style:{margin:"2rem"},children:n(l,{...e,onToggleClick:a})})}},o={..._,args:{toggleBtnLabelExpand:"Visa alla dina tillagda produkter",toggleBtnLabelCollapse:"Dölja tillagda produkter"}};var g,i,s;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...ToggleButtonStoryTemplate,
  args: {
    toggleBtnLabelExpand: 'Visa alla dina tillagda produkter',
    toggleBtnLabelCollapse: 'Dölja tillagda produkter'
  }
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const k=["ToggleButtonStory"];export{o as ToggleButtonStory,k as __namedExportsOrder,C as default};