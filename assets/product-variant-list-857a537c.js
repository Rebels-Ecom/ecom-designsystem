import{r as d,a as h,j as t}from"./jsx-runtime-a3a6c0b8.js";import{B as C}from"./button-369dade1.js";import{P}from"./product-variant-e1a5ff52.js";import{u as v}from"./useOnClickOutside-338168d6.js";const g="_variantsList_1nf5f_1",q="_listItem_1nf5f_15",i={variantsList:g,listItem:q},o=({className:a,variantsList:n,onVariantSelect:u,selectedVariantId:m,sellerOnlyTooltipText:p,onCloseVariants:f,isRestrictedUser:V})=>{const[l,s]=d.useState(m),c=d.useRef(null);function y(e){const r=e.currentTarget.value;s(r)}function I(e){s(e)}function _(){const e=n.find(r=>r.variantId===l);u(e,n)}return v({ref:c,onClose:f}),h("div",{ref:c,className:a||"",children:[t("ul",{className:i.variantsList,children:n.map(e=>t("li",{className:i.listItem,children:t(P,{...e,onChange:y,onClick:I,checked:e.variantId===l,sellerOnlyTooltipText:p,isRestrictedUser:V},e.variantId)},e.variantId))}),t(C,{className:i.productCardBtn,type:"button",surface:"primary",size:"small",fullWidth:!0,onClick:_,children:"Välj variant"})]})};try{o.displayName="ProductVariantList",o.__docgenInfo={description:"",displayName:"ProductVariantList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variantsList:{defaultValue:null,description:"",name:"variantsList",required:!0,type:{name:"IProductVariant[]"}},onVariantSelect:{defaultValue:null,description:"",name:"onVariantSelect",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!0,type:{name:"string"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},onCloseVariants:{defaultValue:null,description:"",name:"onCloseVariants",required:!0,type:{name:"CallableFunction"}},isRestrictedUser:{defaultValue:null,description:"",name:"isRestrictedUser",required:!1,type:{name:"boolean"}}}}}catch{}export{o as P};