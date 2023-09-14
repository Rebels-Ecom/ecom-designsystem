import{j as a,a as e,F as h}from"./jsx-runtime-76c5c2e2.js";import{I as L}from"./icon-button-b8bc13de.js";import{T as t}from"./text-9b083925.js";import{G as _}from"./group-wrapper-53e2b69f.js";import{H as g}from"./heading-f7ae5826.js";const f="_listItem_hsakl_1",b="_itemWrapper_hsakl_6",y="_iconButton_hsakl_20",i={listItem:f,itemWrapper:b,iconButton:y};function s({children:r,onClick:I}){return r?a("div",{className:i.listItem,children:[e("div",{className:i.itemWrapper,children:r}),e(L,{className:i.iconButton,onClick:I,icon:"icon-chevrons-right",isLink:!1})]}):null}try{s.displayName="SortableListItem",s.__docgenInfo={description:"",displayName:"SortableListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const v={title:"Design System/Molecules/SortableListItem",component:s},S={render:({...r})=>e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(s,{...r,onClick:()=>console.log("Open the modal")})})},k=a(h,{children:[a(_,{direction:"column",children:[e(g,{order:5,noMargin:!0,children:"E-HANDELSFRÅGOR"}),e(t,{children:"Hej, vi testar för att se var den här infon syns"})]}),e(t,{children:"23/09/04"}),e(t,{children:"23/09/05"})]}),O=a(h,{children:[a(_,{direction:"column",spacing:"xs",children:[e(g,{order:5,noMargin:!0,children:"FRÅGA OM LEVERANS"}),e(t,{children:"Test test"})]}),e(t,{children:"23/09/04"}),e(t,{children:"23/09/05"})]}),n={...S,args:{children:k,onClick:()=>console.log("Open the modal")}},o={...S,args:{children:O,onClick:()=>console.log("Open the modal")}};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...SortableListItemStoryTemplate,
  args: {
    children: itemEHandel,
    onClick: () => console.log('Open the modal')
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...SortableListItemStoryTemplate,
  args: {
    children: itemLeverans,
    onClick: () => console.log('Open the modal')
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const E=["SortableListItem_EHandel","SortableListItem_Leverans"],j=Object.freeze(Object.defineProperty({__proto__:null,SortableListItem_EHandel:n,SortableListItem_Leverans:o,__namedExportsOrder:E,default:v},Symbol.toStringTag,{value:"Module"}));export{n as S,o as a,s as b,j as s};
//# sourceMappingURL=sortable-list-item.stories-9d3bb7c5.js.map
