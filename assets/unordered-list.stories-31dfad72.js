import{c as d}from"./index-09749a66.js";import{j as t}from"./jsx-runtime-03333307.js";import{L as j}from"./loader-5c06d14e.js";import{a as i,C as m,b as v}from"./checkbox-list-item.stories-abe87978.js";const U="_cartProductList_1n04m_1",I="_list_1n04m_6",T="_listItem_1n04m_14",N="_withSeparatingLines_1n04m_21",s={cartProductList:U,list:I,listItem:T,"spacing-xs":"_spacing-xs_1n04m_16","spacing-sm":"_spacing-sm_1n04m_17","spacing-md":"_spacing-md_1n04m_18","spacing-lg":"_spacing-lg_1n04m_19","spacing-xl":"_spacing-xl_1n04m_20",withSeparatingLines:N},c=({children:e,loading:n,withSeparatingLines:f,spacing:w="md",className:l})=>{function b(o){switch(o){case"xs":return"spacing-xs";case"sm":return"spacing-sm";case"md":return"spacing-md";case"lg":return"spacing-lg";case"xl":default:return"spacing-xl"}}return!Array.isArray(e)||!e.length?null:t.jsx("div",{className:d(s.cartProductList,l&&l),children:n?t.jsx(j,{visible:n,size:"sm",position:"relative",color:"orange"}):t.jsx("ul",{className:s.list,children:e==null?void 0:e.map(o=>t.jsx("li",{className:d(s.listItem,f?s.withSeparatingLines:"",s[b(w)]),children:o},Math.random()))})})};c.__docgenInfo={description:"",methods:[],displayName:"UnorderedList",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Array<React.ReactNode>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},withSeparatingLines:{required:!1,tsType:{name:"boolean"},description:""},spacing:{required:!1,tsType:{name:"union",raw:"number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"number"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Design System/Molecules/UnorderedList",component:c},h=[i.args,m.args,i.args,m.args,i.args,m.args,i.args],y=e=>e==null?void 0:e.map(n=>t.jsx(v,{...n},Math.random())),S={render:e=>t.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:t.jsx(c,{...e,children:e.children})})},r={...S,args:{children:y(h),withSeparatingLines:!0}},a={...S,args:{children:y(h),withSeparatingLines:!0,loading:!0}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...UnorderedListStoryTemplate,
  args: {
    children: itemsList(items),
    withSeparatingLines: true
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var _,L,x;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...UnorderedListStoryTemplate,
  args: {
    children: itemsList(items),
    withSeparatingLines: true,
    loading: true
  }
}`,...(x=(L=a.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const k=["UnorderedListStory","UnorderedListStory_Loading"],M=Object.freeze(Object.defineProperty({__proto__:null,UnorderedListStory:r,UnorderedListStory_Loading:a,__namedExportsOrder:k,default:R},Symbol.toStringTag,{value:"Module"}));export{c as U,r as a,M as u};