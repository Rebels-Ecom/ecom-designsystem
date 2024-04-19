import{j as t,r as C}from"./jsx-runtime-a3a6c0b8.js";import{M as N,a as j,b as E,c as I}from"./multi-select.stories-f3a9050d.js";import{S as A,a as D}from"./single-select.stories-e916a0b3.js";import"./_commonjsHelpers-de833af9.js";import"./button-97f3af74.js";import"./index-a587463d.js";import"./icon-5fefd509.js";import"./button.module-16a60bae.js";import"./loader-81f0d221.js";import"./useOnClickOutside-338168d6.js";const R="_filter_1q89m_1",W={filter:R},m=({id:a,name:S,filterType:l,options:s,selectedOptions:i,updateFilterSelection:o,disabled:e})=>{const r=n=>{o&&o(n.value,n.name)};function k(n,y,L,f,w){switch(L){case"single":return t(A,{id:n,name:y,options:f,onChange:r});case"range":return t("div",{children:"Range filter"});case"multi":default:return t(N,{id:n,name:y,icon:{icon:"icon-chevron-down"},options:f,selectedOptions:w,onToggleOption:r,disabled:e})}}return!a||!l||!s?null:t("div",{className:W.filter,children:k(a,S,l,s,i)})};try{m.displayName="Filter",m.__docgenInfo={description:"",displayName:"Filter",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},filterType:{defaultValue:null,description:"",name:"filterType",required:!0,type:{name:"enum",value:[{value:'"range"'},{value:'"single"'},{value:'"multi"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"string[]"}},updateFilterSelection:{defaultValue:null,description:"",name:"updateFilterSelection",required:!1,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Design System/Molecules/Filter",component:m},g={render:a=>{const[S,l]=C.useState([]);function s(i){l(o=>{const e=[...o];return e.some(r=>r===i)?e.filter(r=>r!=i):(e.push(i),e)})}return t("div",{style:{margin:"auto",maxWidth:"1800px"},children:t(m,{...a,selectedOptions:S,updateFilterSelection:s})})}},c={...g,args:{...D.args,id:"134-abc",filterType:"single"}},u={...g,args:{...j.args,id:"10766",filterType:"multi"}},d={...g,args:{...E.args,id:"10770",filterType:"multi"}},p={...g,args:{...I.args,id:"12336",filterType:"multi"}};var F,T,_;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...SingleSelectStory.args,
    id: '134-abc',
    filterType: 'single'
  }
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var h,v,M;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryLand.args,
    id: '10766',
    filterType: 'multi'
  }
}`,...(M=(v=u.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var P,q,b;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryProducer.args,
    id: '10770',
    filterType: 'multi'
  }
}`,...(b=(q=d.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};var O,x,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryPackaging.args,
    id: '12336',
    filterType: 'multi'
  }
}`,...(V=(x=p.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const $=["FilterStorySorting","FilterStoryLand","FilterStoryProducer","FilterStoryPackaging"];export{u as FilterStoryLand,p as FilterStoryPackaging,d as FilterStoryProducer,c as FilterStorySorting,$ as __namedExportsOrder,Z as default};
