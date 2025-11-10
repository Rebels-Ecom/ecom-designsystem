import{j as e,r as v}from"./jsx-runtime-03333307.js";import{P as u}from"./placeholder-3cf73146.js";import{I as g}from"./icon-a32914e5.js";import{C as j}from"./checkbox-aacef711.js";import{C as x}from"./content-wrapper-adfa8526.js";import{B as _}from"./button-856a03f5.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";import"./loader-5c06d14e.js";import"./button.module-867d0823.js";const b="_purchaseList_djucf_1",q="_item_djucf_12",P="_linkWrapper_djucf_18",N="_content_djucf_28",C="_row_djucf_35",L="_name_djucf_40",w="_label_djucf_46",O="_updated_djucf_51",T="_checkbox_djucf_62",n={purchaseList:b,item:q,linkWrapper:P,content:N,row:C,name:L,label:w,updated:O,checkbox:T},c=({items:s,selectedItems:a,onSelectChange:i,linkComponent:o,loading:m})=>{const t=r=>{i(r)};return e.jsx("ul",{className:n.purchaseList,children:s==null?void 0:s.map(r=>{const p=!!(a!=null&&a.find(f=>f.id===r.id)),l=p&&r.removing;return e.jsxs("li",{className:n.item,children:[e.jsxs("div",{className:n.content,children:[e.jsxs("div",{className:n.row,children:[l?e.jsx(u,{type:"heading"}):e.jsx(o,{to:r.linkUrl,"aria-label":`Navigate to ${r.name}`,className:n.linkWrapper,children:e.jsx("h4",{className:n.name,children:r.name})}),r.shared&&e.jsx(g,{icon:"icon-share-2"})]}),e.jsx("div",{className:n.row,children:l?e.jsx(u,{type:"p_short"}):e.jsx("p",{className:n.label,children:r.noOfProducts})}),e.jsx("div",{className:n.row,children:l&&r.updated?e.jsx(u,{type:"p_short"}):e.jsx(e.Fragment,{children:r.updated?e.jsx("span",{className:n.updated,children:r.updated}):null})})]}),!l&&!r.shared?e.jsxs(e.Fragment,{children:[e.jsx(j,{id:r.id,className:n.checkbox,name:r.name,checked:p,onChange:()=>t(r)}),e.jsx(o,{to:r.linkUrl,"aria-label":`Navigate to ${r.name}`,className:n.linkWrapper,children:e.jsx(g,{icon:"icon-chevrons-right"})})]}):null]},r.id)})})};c.__docgenInfo={description:"",methods:[],displayName:"PurchaseList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  linkUrl: string
  noOfProducts: string
  updated?: string
  shared?: boolean
  removing?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"linkUrl",value:{name:"string",required:!0}},{key:"noOfProducts",value:{name:"string",required:!0}},{key:"updated",value:{name:"string",required:!1}},{key:"shared",value:{name:"boolean",required:!1}},{key:"removing",value:{name:"boolean",required:!1}}]}}],raw:"Array<TPurchaseListItem>"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  linkUrl: string
  noOfProducts: string
  updated?: string
  shared?: boolean
  removing?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"linkUrl",value:{name:"string",required:!0}},{key:"noOfProducts",value:{name:"string",required:!0}},{key:"updated",value:{name:"string",required:!1}},{key:"shared",value:{name:"boolean",required:!1}},{key:"removing",value:{name:"boolean",required:!1}}]}}],raw:"TPurchaseListItem[]"},description:""},onSelectChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: TPurchaseListItem) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string
  name: string
  linkUrl: string
  noOfProducts: string
  updated?: string
  shared?: boolean
  removing?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"linkUrl",value:{name:"string",required:!0}},{key:"noOfProducts",value:{name:"string",required:!0}},{key:"updated",value:{name:"string",required:!1}},{key:"shared",value:{name:"boolean",required:!1}},{key:"removing",value:{name:"boolean",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Design System/Atoms/PurchaseList",component:c,parameters:{controls:{exclude:["listItems"]}}},U={render:s=>{const[a,i]=v.useState([]),o=t=>{a.includes(t)?i(a.filter(r=>r.name!==t.name)):i([...a,t])},m=()=>{console.log("Deleting items:",a)};return e.jsxs(x,{children:[e.jsx(_,{type:"button",surface:"primary",onClick:m,iconRight:{icon:"icon-trash"},children:"Delete"}),e.jsx(c,{...s,linkComponent:"p",onSelectChange:o,selectedItems:a})]})}},S=[{id:"1",name:"Item 1",linkUrl:"url1",noOfProducts:"10 produkter",updated:"2024-01-21",shared:!0,removing:!0},{id:"2",name:"Item 2",linkUrl:"url2",noOfProducts:"20 produkter",updated:void 0,shared:!1}],d={...U,args:{items:S}};var h,k,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...PurchaseListTemplate,
  args: {
    items: items
  }
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const H=["PurchaseListStory"];export{d as PurchaseListStory,H as __namedExportsOrder,G as default};
