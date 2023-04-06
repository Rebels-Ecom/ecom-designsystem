import{r as M}from"./index-6f814c40.js";import{B as N}from"./button-08ef97ed.js";import{a as i,j as v}from"./jsx-runtime-76c5c2e2.js";const P="_multiSelectDropdown_fx1ia_2",V="_multiSelectDropdownOptions_fx1ia_6",I="_multiSelectDropdownOption_fx1ia_6",q="_multiSelectDropdownOptionCheckbox_fx1ia_35",c={multiSelectDropdown:P,multiSelectDropdownOptions:V,multiSelectDropdownOption:I,multiSelectDropdownOptionCheckbox:q},S=({name:t,options:n,selectedOptions:e,onToggleOption:f,icon:l})=>{const[d,a]=M.useState(!1);function o(){a(!d)}function B(){return n instanceof Array&&n.length}function C(r,g){const u=r.find(T=>T.value===g);return u==null?void 0:u.name}return i("div",{className:c.wrapper,children:B()&&v(N,{type:"button",surface:"secondary",className:c.multiSelectDropdown,onClick:()=>o(),iconRight:l,rounded:!0,children:[!e||e.length===0?t:e.length===1?`${t} (${C(n,e[0])})`:`${t} (${e.length} valda)`,d?i("ul",{className:c.multiSelectDropdownOptions,children:n.map(r=>{const g=e&&e.some(u=>u===r.value);return v("li",{className:c.multiSelectDropdownOption,children:[i("input",{type:"checkbox",checked:g,onChange:()=>f(r),className:c.multiSelectDropdownOptionCheckbox}),i("span",{children:r.name})]},r.value)})}):null]})})};try{S.displayName="MultiSelect",S.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"string[]"}},onToggleOption:{defaultValue:null,description:"",name:"onToggleOption",required:!0,type:{name:"CallableFunction"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}}}}}catch{}const E={title:"Design System/Atoms/MultiSelect",component:S},_={render:t=>{const[n,e]=M.useState([]),f=l=>{e(d=>{const a=[...d];return a.some(o=>o===l.value)?a.filter(o=>o!=l.value):(a.push(l.value),a)})};return i("div",{style:{margin:"auto",maxWidth:"1800px"},children:i(S,{name:t.name,options:t.options,selectedOptions:n,onToggleOption:f,icon:t.icon})})}},s={..._,args:{id:"10766",name:"Land",options:[{name:"Belgien",value:"attributefilter*L10766_41516"},{name:"England",value:"attributefilter*L10766_118421"},{name:"Irland",value:"attributefilter*L10766_41532"},{name:"Spanien",value:"attributefilter*L10766_41523"},{name:"Sverige",value:"attributefilter*L10766_41547"}],icon:{icon:"icon-map-pin"}}},m={..._,args:{id:"10770",name:"Producent",options:[{name:"Beavertown Brewery",value:"attributefilter*L10770_110433"},{name:"Brutal Brewing",value:"attributefilter*L10766_118421"},{name:"Cervezas Victoria",value:"attributefilter*L10770_110444"},{name:"Starobrno",value:"attributefilter*L10770_41806"}],icon:{icon:"icon-award"}}},p={..._,args:{id:"12336",name:"Förpackning",options:[{name:"Burk",value:"attributefilter*L12336_122639"},{name:"Engångsglas",value:"attributefilter*L12336_122646"},{name:"FAT",value:"attributefilter*L12336_122643"},{name:"Returglas",value:"attributefilter*L12336_122649"}],icon:{icon:"icon-package"}}};var b,y,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...MultiSelectStoryTemplate,
  args: {
    id: '10766',
    name: 'Land',
    options: [{
      name: 'Belgien',
      value: 'attributefilter*L10766_41516'
    }, {
      name: 'England',
      value: 'attributefilter*L10766_118421'
    }, {
      name: 'Irland',
      value: 'attributefilter*L10766_41532'
    }, {
      name: 'Spanien',
      value: 'attributefilter*L10766_41523'
    }, {
      name: 'Sverige',
      value: 'attributefilter*L10766_41547'
    }],
    icon: {
      icon: 'icon-map-pin'
    }
  }
}`,...(L=(y=s.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var w,h,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...MultiSelectStoryTemplate,
  args: {
    id: '10770',
    name: 'Producent',
    options: [{
      name: 'Beavertown Brewery',
      value: 'attributefilter*L10770_110433'
    }, {
      name: 'Brutal Brewing',
      value: 'attributefilter*L10766_118421'
    }, {
      name: 'Cervezas Victoria',
      value: 'attributefilter*L10770_110444'
    }, {
      name: 'Starobrno',
      value: 'attributefilter*L10770_41806'
    }],
    icon: {
      icon: 'icon-award'
    }
  }
}`,...(D=(h=m.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var O,k,x;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...MultiSelectStoryTemplate,
  args: {
    id: '12336',
    name: 'Förpackning',
    options: [{
      name: 'Burk',
      value: 'attributefilter*L12336_122639'
    }, {
      name: 'Engångsglas',
      value: 'attributefilter*L12336_122646'
    }, {
      name: 'FAT',
      value: 'attributefilter*L12336_122643'
    }, {
      name: 'Returglas',
      value: 'attributefilter*L12336_122649'
    }],
    icon: {
      icon: 'icon-package'
    }
  }
}`,...(x=(k=p.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const j=["MultiSelectStoryLand","MultiSelectStoryProducer","MultiSelectStoryPackaging"],z=Object.freeze(Object.defineProperty({__proto__:null,MultiSelectStoryLand:s,MultiSelectStoryPackaging:p,MultiSelectStoryProducer:m,__namedExportsOrder:j,default:E},Symbol.toStringTag,{value:"Module"}));export{S as M,s as a,m as b,p as c,z as m};
//# sourceMappingURL=multi-select.stories-e5fa7ba4.js.map
