import{c as s}from"./index-74f03c09.js";import{b as l}from"./cart-product.stories-2bf4d399.js";import{T as d}from"./text-3e056ff6.js";import{a as t,j as u}from"./jsx-runtime-76c5c2e2.js";import{m as c}from"./motion-354a1bac.js";const p="_toastContainer_1ijuj_1",m="_toast_1ijuj_1",_="_header_1ijuj_34",e={toastContainer:p,"top-right":"_top-right_1ijuj_7","top-left":"_top-left_1ijuj_13",toast:m,header:_};function i({cartProduct:a,position:n="top-left",className:r,label:o}){return a?t(c.div,{animate:{x:0},initial:{x:"100%"},exit:{x:"100%"},transition:{duration:.2,ease:"easeIn"},className:s(r||e.toastContainer,e[n]),children:u("div",{className:e.toast,children:[t("div",{className:e.header,children:o&&t(d,{align:"center",weight:"bold",children:o})}),t(l,{...a})]})}):null}try{i.displayName="ProductToast",i.__docgenInfo={description:"",displayName:"ProductToast",props:{cartProduct:{defaultValue:null,description:"",name:"cartProduct",required:!0,type:{name:"ICartProduct"}},position:{defaultValue:{value:"top-left"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{i as P};
//# sourceMappingURL=product-toast-7b459b52.js.map