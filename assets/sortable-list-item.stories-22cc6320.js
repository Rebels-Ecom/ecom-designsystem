import{j as a,a as e,F as h}from"./jsx-runtime-76c5c2e2.js";import{I}from"./icon-button-da898f55.js";import{T as t}from"./text-3e056ff6.js";import{G as g}from"./group-wrapper-53e2b69f.js";import{H as S}from"./heading-e5a679a5.js";const L="_listItem_jz1b0_1",f="_itemWrapper_jz1b0_6",y="_iconButton_jz1b0_20",i={listItem:L,itemWrapper:f,iconButton:y};function s({children:r,onClick:l}){return r?a("div",{className:i.listItem,children:[e("div",{className:i.itemWrapper,children:r}),l&&e(I,{type:"button",className:i.iconButton,onClick:l,icon:"icon-chevrons-right",noPadding:!0,isTransparent:!0,noBorder:!0})]}):null}try{s.displayName="SortableListItem",s.__docgenInfo={description:"",displayName:"SortableListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const v={title:"Design System/Molecules/SortableListItem",component:s},b={render:({...r})=>e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(s,{...r,onClick:()=>console.log("Open the modal")})})},O=a(h,{children:[a(g,{direction:"column",children:[e(S,{order:5,noMargin:!0,children:"E-HANDELSFRÅGOR"}),e(t,{children:"Hej, vi testar för att se var den här infon syns"})]}),e(t,{children:"23/09/04"}),e(t,{children:"23/09/05"})]}),j=a(h,{children:[a(g,{direction:"column",spacing:"xs",children:[e(S,{order:5,noMargin:!0,children:"FRÅGA OM LEVERANS"}),e(t,{children:"Test test"})]}),e(t,{children:"23/09/04"}),e(t,{children:"23/09/05"})]}),n={...b,args:{children:O,onClick:()=>console.log("Open the modal")}},o={...b,args:{children:j,onClick:()=>console.log("Open the modal")}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...SortableListItemStoryTemplate,
  args: {
    children: itemEHandel,
    onClick: () => console.log('Open the modal')
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,_;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...SortableListItemStoryTemplate,
  args: {
    children: itemLeverans,
    onClick: () => console.log('Open the modal')
  }
}`,...(_=(u=o.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const E=["SortableListItem_EHandel","SortableListItem_Leverans"],B=Object.freeze(Object.defineProperty({__proto__:null,SortableListItem_EHandel:n,SortableListItem_Leverans:o,__namedExportsOrder:E,default:v},Symbol.toStringTag,{value:"Module"}));export{n as S,o as a,s as b,B as s};
//# sourceMappingURL=sortable-list-item.stories-22cc6320.js.map
