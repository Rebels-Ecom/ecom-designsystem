import{r as v,j as t,a as h}from"./jsx-runtime-a3a6c0b8.js";const b="_outerWrapper_11e9q_1",q="_select_11e9q_5",u={outerWrapper:b,select:q},l=v.forwardRef(({id:a,name:s,options:e,onChange:o,value:m,selectedIndex:i,disabled:g},S)=>{function y(r){o&&o(r)}function f(){return e instanceof Array&&e.length}return t("div",{className:u.outerWrapper,children:f()&&t("select",{className:u.select,onChange:y,disabled:g,id:a,value:i?e[i].value:m,ref:S,children:e==null?void 0:e.map((r,_)=>h("option",{value:r.value,children:[s," ",r.name]},`option_${_}`))})})});try{l.displayName="SingleSelect",l.__docgenInfo={description:"",displayName:"SingleSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"CallableFunction"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Design System/Atoms/SingleSelect",component:l},P={render:a=>{function s(e){alert(`Sort by: ${e.currentTarget.value}`),e.preventDefault()}return t("div",{style:{margin:"auto",maxWidth:"1800px"},children:t(l,{...a,onChange:s})})}},n={...P,args:{id:"select_sort",name:"Sort by: ",options:[{name:"Namn",value:"name"},{name:"Pris",value:"pris"},{name:"Sorteringsordning",value:"sortorder"},{name:"Popularitet",value:"popularity"},{name:"Popularitetsrankning",value:"popularityrank"}]}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...SingleSelectStoryTemplate,
  args: {
    id: 'select_sort',
    name: 'Sort by: ',
    options: [{
      name: 'Namn',
      value: 'name'
    }, {
      name: 'Pris',
      value: 'pris'
    }, {
      name: 'Sorteringsordning',
      value: 'sortorder'
    }, {
      name: 'Popularitet',
      value: 'popularity'
    }, {
      name: 'Popularitetsrankning',
      value: 'popularityrank'
    }]
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const V=["SingleSelectStory"],N=Object.freeze(Object.defineProperty({__proto__:null,SingleSelectStory:n,__namedExportsOrder:V,default:x},Symbol.toStringTag,{value:"Module"}));export{l as S,n as a,N as s};
