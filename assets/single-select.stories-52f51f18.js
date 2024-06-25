import{r as _,j as n}from"./jsx-runtime-03333307.js";const h="_outerWrapper_11e9q_1",x="_select_11e9q_5",c={outerWrapper:h,select:x},l=_.forwardRef(({id:a,name:s,options:e,onChange:i,value:m,selectedIndex:o,disabled:S},g)=>{function y(t){i&&i(t)}function v(){return e instanceof Array&&e.length}return n.jsx("div",{className:c.outerWrapper,children:v()&&n.jsx("select",{className:c.select,onChange:y,disabled:S,id:a,value:o?e[o].value:m,ref:g,children:e==null?void 0:e.map((t,f)=>n.jsxs("option",{value:t.value,children:[s," ",t.name]},`option_${f}`))})})});l.__docgenInfo={description:"@deprecated Use SelectList instead",methods:[],displayName:"SingleSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ISelectOption"}],raw:"Array<ISelectOption>"},description:""},onChange:{required:!1,tsType:{name:"CallableFunction"},description:""},selectedIndex:{required:!1,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const T={title:"Design System/Deprecated/SingleSelect",component:l},b={render:a=>{function s(e){alert(`Sort by: ${e.currentTarget.value}`),e.preventDefault()}return n.jsx("div",{style:{margin:"auto",maxWidth:"1800px"},children:n.jsx(l,{...a,onChange:s})})}},r={...b,args:{id:"select_sort",name:"Sort by: ",options:[{name:"Namn",value:"name"},{name:"Pris",value:"pris"},{name:"Sorteringsordning",value:"sortorder"},{name:"Popularitet",value:"popularity"},{name:"Popularitetsrankning",value:"popularityrank"}]}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const j=["SingleSelectStory"],P=Object.freeze(Object.defineProperty({__proto__:null,SingleSelectStory:r,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{l as S,r as a,P as s};
