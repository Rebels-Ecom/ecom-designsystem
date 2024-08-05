import{j as t,r as L}from"./jsx-runtime-03333307.js";import{M as C,a as E,b as I,c as N}from"./multi-select.stories-22e2a87e.js";import{S as R,a as D}from"./single-select.stories-52f51f18.js";import"./button-e2072245.js";import"./index-09749a66.js";import"./icon-cf6ebd85.js";import"./button.module-16a60bae.js";import"./loader-5c06d14e.js";import"./useOnClickOutside-9d2c35bb.js";const W="_filter_1q89m_1",z={filter:W},S=({id:s,name:g,filterType:a,options:o,selectedOptions:i,updateFilterSelection:l,disabled:e})=>{const r=n=>{l&&l(n.value,n.name)};function w(n,y,A,f,k){switch(A){case"single":return t.jsx(R,{id:n,name:y,options:f,onChange:r});case"range":return t.jsx("div",{children:"Range filter"});case"multi":default:return t.jsx(C,{id:n,name:y,icon:{icon:"icon-chevron-down"},options:f,selectedOptions:k,onToggleOption:r,disabled:e})}}return!s||!a||!o?null:t.jsx("div",{className:z.filter,children:w(s,g,a,o,i)})};S.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},filterType:{required:!0,tsType:{name:"union",raw:"'single' | 'multi' | 'range'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multi'"},{name:"literal",value:"'range'"}]},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ISelectOption"}],raw:"Array<ISelectOption>"},description:""},selectedOptions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},updateFilterSelection:{required:!1,tsType:{name:"CallableFunction"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Z={title:"Design System/Molecules/Filter",component:S},u={render:s=>{const[g,a]=L.useState([]);function o(i){a(l=>{const e=[...l];return e.some(r=>r===i)?e.filter(r=>r!=i):(e.push(i),e)})}return t.jsx("div",{style:{margin:"auto",maxWidth:"1800px"},children:t.jsx(S,{...s,selectedOptions:g,updateFilterSelection:o})})}},c={...u,args:{...D.args,id:"134-abc",filterType:"single"}},m={...u,args:{...E.args,id:"10766",filterType:"multi"}},p={...u,args:{...I.args,id:"10770",filterType:"multi"}},d={...u,args:{...N.args,id:"12336",filterType:"multi"}};var F,T,x;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...SingleSelectStory.args,
    id: '134-abc',
    filterType: 'single'
  }
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var h,M,P;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryLand.args,
    id: '10766',
    filterType: 'multi'
  }
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var j,q,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryProducer.args,
    id: '10770',
    filterType: 'multi'
  }
}`,...(v=(q=p.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var O,_,b;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...FilterStoryTemplate,
  args: {
    ...MultiSelectStoryPackaging.args,
    id: '12336',
    filterType: 'multi'
  }
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const $=["FilterStorySorting","FilterStoryLand","FilterStoryProducer","FilterStoryPackaging"];export{m as FilterStoryLand,d as FilterStoryPackaging,p as FilterStoryProducer,c as FilterStorySorting,$ as __namedExportsOrder,Z as default};
