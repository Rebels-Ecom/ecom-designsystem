import{c as l}from"./index-a587463d.js";import{j as t}from"./jsx-runtime-a3a6c0b8.js";import{L as b}from"./loader-81f0d221.js";import{a as i,C as d,b as I}from"./checkbox-list-item.stories-ddf5f255.js";const v="_cartProductList_1n04m_1",N="_list_1n04m_6",k="_listItem_1n04m_14",P="_withSeparatingLines_1n04m_21",s={cartProductList:v,list:N,listItem:k,"spacing-xs":"_spacing-xs_1n04m_16","spacing-sm":"_spacing-sm_1n04m_17","spacing-md":"_spacing-md_1n04m_18","spacing-lg":"_spacing-lg_1n04m_19","spacing-xl":"_spacing-xl_1n04m_20",withSeparatingLines:P},o=({children:e,loading:n,withSeparatingLines:x,spacing:U="md",className:m})=>{function w(c){switch(c){case"xs":return"spacing-xs";case"sm":return"spacing-sm";case"md":return"spacing-md";case"lg":return"spacing-lg";case"xl":default:return"spacing-xl"}}return!Array.isArray(e)||!e.length?null:t("div",{className:l(s.cartProductList,m&&m),children:n?t(b,{visible:n,size:"sm",position:"relative",color:"orange"}):t("ul",{className:s.list,children:e==null?void 0:e.map(c=>t("li",{className:l(s.listItem,x?s.withSeparatingLines:"",s[w(U)]),children:c},Math.random()))})})};try{o.displayName="UnorderedList",o.__docgenInfo={description:"",displayName:"UnorderedList",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},withSeparatingLines:{defaultValue:null,description:"",name:"withSeparatingLines",required:!1,type:{name:"boolean"}},spacing:{defaultValue:{value:"md"},description:"",name:"spacing",required:!1,type:{name:"TSpacing"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const T={title:"Design System/Molecules/UnorderedList",component:o},h=[i.args,d.args,i.args,d.args,i.args,d.args,i.args],y=e=>e==null?void 0:e.map(n=>t(I,{...n},Math.random())),f={render:e=>t("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:t(o,{...e,children:e.children})})},r={...f,args:{children:y(h),withSeparatingLines:!0}},a={...f,args:{children:y(h),withSeparatingLines:!0,loading:!0}};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...UnorderedListStoryTemplate,
  args: {
    children: itemsList(items),
    withSeparatingLines: true
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var _,L,S;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...UnorderedListStoryTemplate,
  args: {
    children: itemsList(items),
    withSeparatingLines: true,
    loading: true
  }
}`,...(S=(L=a.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const j=["UnorderedListStory","UnorderedListStory_Loading"],O=Object.freeze(Object.defineProperty({__proto__:null,UnorderedListStory:r,UnorderedListStory_Loading:a,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{o as U,r as a,O as u};