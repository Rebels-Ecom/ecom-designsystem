import{r as m,a as l,j as o}from"./jsx-runtime-a3a6c0b8.js";import{B as T}from"./button-369dade1.js";import{c as b}from"./index-a587463d.js";import{A as h}from"./index-4058f88b.js";import{m as I}from"./motion-54668070.js";import{d as D}from"./dummy-product-details-4e51bf9d.js";const k="_productDescription_15vkg_1",P="_buttonsWrapper_15vkg_6",C="_btn_15vkg_24",x="_active_15vkg_28",O="_contentOuterWrapper_15vkg_34",W="_contentWrapper_15vkg_41",N="_content_15vkg_34",A="_specsText_15vkg_64",L="_specTitle_15vkg_69",i={productDescription:k,buttonsWrapper:P,btn:C,active:x,contentOuterWrapper:O,contentWrapper:W,content:N,specsText:A,specTitle:L},B={key:"contentAnimation",initial:{y:"-90%",opacity:0},animate:{y:0,opacity:1,zIndex:1},transition:{duration:.5,ease:"easeOut"},exit:{y:"-90%",opacity:0,transition:{duration:.5}}};function d({productDescriptionItems:t}){const[n,a]=m.useState(!1),[s,u]=m.useState(""),y=(e,r)=>{r?(a(!1),u(e.currentTarget.id),r()):s===e.currentTarget.id?(a(!1),u("")):(a(!0),u(e.currentTarget.id))};function S(e){return e&&Array.isArray(e)&&e.length>0?e.map((r,c)=>r.value&&r.value!=="False"&&l("p",{className:b(i.specsText,"bodyS"),children:[o("span",{className:i.specTitle,children:`${r.name}: `}),r.value]},c)):null}return l("div",{className:i.productDescription,children:[o("div",{className:i.buttonsWrapper,children:t.map((e,r)=>o(T,{id:e.id,className:b(i.btn,s===`${e.id}`&&i.active),iconRight:{icon:e.btnIcon},onClick:c=>y(c,e.onClick&&e.onClick),type:"button",surface:"secondary",size:"large",rounded:!0,children:e.btnLabel},r))}),o("ul",{className:i.contentOuterWrapper,children:t.map((e,r)=>{var c;return o("li",{children:o(h,{children:e.descriptionContent&&n&&o(I.div,{className:i.contentWrapper,...B,children:s===`${e.id}`&&l("div",{className:i.content,children:[((c=e.descriptionContent)==null?void 0:c.invisibleDescription)&&l("p",{className:i.description,children:[" ",e.descriptionContent.invisibleDescription]}),e.descriptionContent.invisibleSpecs&&S(e.descriptionContent.invisibleSpecs)]})})})},r)})})]})}try{d.displayName="ProductDescription",d.__docgenInfo={description:"",displayName:"ProductDescription",props:{productDescriptionItems:{defaultValue:null,description:"",name:"productDescriptionItems",required:!0,type:{name:"IProductDescriptionItem[]"}}}}}catch{}const V={title:"Design System/Organisms/ProductDescription",component:d},j={render:({...t})=>o(d,{...t})};function z(t){return t.map(n=>({text:n.Text,shape:n.Shape?n.Shape:"pill",color:n.Class}))}function _(t){return t.map(n=>({name:n.Item1,value:n.Item2}))}function F(t,n){const a=n==="Vin"?"purple":"orange";return t.map(s=>({name:s.Key,value:s.Value,color:a}))}function $(t){return{visibleSpecs:_(t.VisibleInfo.Specifications),visibleDescription:t.VisibleInfo.FullDescription,invisibleSpecs:_(t.InvisibleInfo.Specifications),invisibleDescription:t.InvisibleInfo.FullDescription,tags:z(t.Tags),loaderValues:F(t.ClockValues,t.CategoryString)}}const E=$(D),K=[{id:"item1",btnLabel:"Beskrivning",btnIcon:"icon-info",descriptionContent:E},{id:"item2",btnLabel:"Ladda ner produktbeskrivning",btnIcon:"icon-download",onClick:()=>{console.log("DOWNLOAD PRODUKTBLAD")}},{id:"item3",btnLabel:"Spela video",btnIcon:"icon-play",descriptionContent:"Some video might be played here one day"}],p={...j,args:{productDescriptionItems:K}};var g,v,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...ProductDescriptionStoryTemplate,
  args: {
    productDescriptionItems: items
  }
}`,...(f=(v=p.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const R=["ProductDescriptionStory"],J=Object.freeze(Object.defineProperty({__proto__:null,ProductDescriptionStory:p,__namedExportsOrder:R,default:V},Symbol.toStringTag,{value:"Module"}));export{p as P,d as a,J as p};