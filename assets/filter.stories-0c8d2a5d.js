import{r as V}from"./index-6f814c40.js";import{M as C,a as N,b as E,c as I}from"./multi-select.stories-a2f2dd05.js";import{S as j,a as A}from"./single-select.stories-4b87d349.js";import{a as r}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./button-e43738b0.js";import"./index-74f03c09.js";import"./icon-7e598265.js";import"./button.module-42bc270d.js";const D="_filter_etw9t_1",R={filter:D},m=({id:t,name:S,filterType:n,options:l,selectedOptions:i,updateFilterSelection:s})=>{const e=o=>{s&&s(o.value)};function a(o,y,w,f,L){switch(w){case"single":return r(j,{id:o,name:y,options:f,onChange:e});case"range":return r("div",{children:"Range filter"});case"multi":default:return r(C,{id:o,name:y,icon:{icon:"icon-chevron-down"},options:f,selectedOptions:L,onToggleOption:e})}}return!t||!n||!l?null:r("div",{className:R.filter,children:a(t,S,n,l,i)})};try{m.displayName="Filter",m.__docgenInfo={description:"",displayName:"Filter",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},filterType:{defaultValue:null,description:"",name:"filterType",required:!0,type:{name:"enum",value:[{value:'"single"'},{value:'"multi"'},{value:'"range"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"string[]"}},updateFilterSelection:{defaultValue:null,description:"",name:"updateFilterSelection",required:!1,type:{name:"CallableFunction"}}}}}catch{}const X={title:"Design System/Molecules/Filter",component:m},g={render:t=>{const[S,n]=V.useState([]);function l(i){n(s=>{const e=[...s];return e.some(a=>a===i)?e.filter(a=>a!=i):(e.push(i),e)})}return r("div",{style:{margin:"auto",maxWidth:"1800px"},children:r(m,{...t,selectedOptions:S,updateFilterSelection:l})})}},c={...g,args:{...A.args,id:"134-abc",filterType:"single"}},u={...g,args:{...N.args,id:"10766",filterType:"multi"}},d={...g,args:{...E.args,id:"10770",filterType:"multi"}},p={...g,args:{...I.args,id:"12336",filterType:"multi"}};var F,T,_;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...SingleSelectStory.args,
    id: '134-abc',
    filterType: 'single'
  }
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var h,M,v;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryLand.args,
    id: '10766',
    filterType: 'multi'
  }
}`,...(v=(M=u.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var P,O,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryProducer.args,
    id: '10770',
    filterType: 'multi'
  }
}`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var x,b,k;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryPackaging.args,
    id: '12336',
    filterType: 'multi'
  }
}`,...(k=(b=p.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const Y=["FilterStorySorting","FilterStoryLand","FilterStoryProducer","FilterStoryPackaging"];export{u as FilterStoryLand,p as FilterStoryPackaging,d as FilterStoryProducer,c as FilterStorySorting,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=filter.stories-0c8d2a5d.js.map
