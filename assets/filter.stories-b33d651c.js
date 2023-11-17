import{r as C}from"./index-6f814c40.js";import{M as N,a as E,b as I,c as j}from"./multi-select.stories-5ed17281.js";import{S as A,a as D}from"./single-select.stories-4b87d349.js";import{a as t}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./button-689f1284.js";import"./index-74f03c09.js";import"./icon-17f6a5b2.js";import"./button.module-3bdf7fd3.js";import"./loader-ce89f5e5.js";import"./useOnClickOutside-47d3035a.js";const R="_filter_1q89m_1",W={filter:R},m=({id:a,name:S,filterType:l,options:s,selectedOptions:i,updateFilterSelection:o,disabled:e})=>{const r=n=>{o&&o(n.value,n.name)};function k(n,y,L,f,w){switch(L){case"single":return t(A,{id:n,name:y,options:f,onChange:r});case"range":return t("div",{children:"Range filter"});case"multi":default:return t(N,{id:n,name:y,icon:{icon:"icon-chevron-down"},options:f,selectedOptions:w,onToggleOption:r,disabled:e})}}return!a||!l||!s?null:t("div",{className:W.filter,children:k(a,S,l,s,i)})};try{m.displayName="Filter",m.__docgenInfo={description:"",displayName:"Filter",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},filterType:{defaultValue:null,description:"",name:"filterType",required:!0,type:{name:"enum",value:[{value:'"single"'},{value:'"multi"'},{value:'"range"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"string[]"}},updateFilterSelection:{defaultValue:null,description:"",name:"updateFilterSelection",required:!1,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Design System/Molecules/Filter",component:m},g={render:a=>{const[S,l]=C.useState([]);function s(i){l(o=>{const e=[...o];return e.some(r=>r===i)?e.filter(r=>r!=i):(e.push(i),e)})}return t("div",{style:{margin:"auto",maxWidth:"1800px"},children:t(m,{...a,selectedOptions:S,updateFilterSelection:s})})}},c={...g,args:{...D.args,id:"134-abc",filterType:"single"}},u={...g,args:{...E.args,id:"10766",filterType:"multi"}},d={...g,args:{...I.args,id:"10770",filterType:"multi"}},p={...g,args:{...j.args,id:"12336",filterType:"multi"}};var F,T,_;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(x=p.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const ee=["FilterStorySorting","FilterStoryLand","FilterStoryProducer","FilterStoryPackaging"];export{u as FilterStoryLand,p as FilterStoryPackaging,d as FilterStoryProducer,c as FilterStorySorting,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=filter.stories-b33d651c.js.map
