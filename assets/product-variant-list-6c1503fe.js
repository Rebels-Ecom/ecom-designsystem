import{r as p}from"./index-6f814c40.js";import{B as V}from"./button-e8533fbe.js";import{P as f}from"./product-variant-1409f12c.js";import{j as I,a as e}from"./jsx-runtime-76c5c2e2.js";const _="_variantsList_msjd5_1",h="_listItem_msjd5_15",s={variantsList:_,listItem:h},l=({className:a,variantsList:r,onVariantSelect:c,selectedVariantId:d})=>{const[i,o]=p.useState(d);function u(t){const n=t.currentTarget.value;o(n)}function m(){const t=r.find(n=>n.variantId===i);c(t,r)}return I("div",{className:a||"",children:[e("ul",{className:s.variantsList,children:r.map(t=>e("li",{className:s.listItem,children:e(f,{...t,onChange:u,checked:t.variantId===i},t.variantId)},t.variantId))}),e(V,{className:s.productCardBtn,type:"button",surface:"primary",size:"small",fullWidth:!0,onClick:m,children:"Välj variant"})]})};try{l.displayName="ProductVariantList",l.__docgenInfo={description:"",displayName:"ProductVariantList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variantsList:{defaultValue:null,description:"",name:"variantsList",required:!0,type:{name:"IProductVariant[]"}},onVariantSelect:{defaultValue:null,description:"",name:"onVariantSelect",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!0,type:{name:"string"}}}}}catch{}export{l as P};
//# sourceMappingURL=product-variant-list-6c1503fe.js.map