import{r as M}from"./index-6f814c40.js";import{B as P}from"./button-314e4000.js";import{j as b,a as m}from"./jsx-runtime-76c5c2e2.js";const q="_multiSelectDropdown_h68xn_2",I="_multiSelectDropdownOptions_h68xn_6",N="_multiSelectDropdownOption_h68xn_6",E="_multiSelectDropdownOptionCheckbox_h68xn_35",p={multiSelectDropdown:q,multiSelectDropdownOptions:I,multiSelectDropdownOption:N,multiSelectDropdownOptionCheckbox:E},d=({name:t,options:a,selectedOptions:e,onToggleOption:S,icon:l,disabled:g})=>{const[n,i]=M.useState(!1);function B(){i(!n)}function C(){return a instanceof Array&&a.length}function T(r,_){const o=r.find(V=>V.value===_);return o==null?void 0:o.name}return C()?b(P,{type:"button",surface:"x",size:"xx-small",className:p.multiSelectDropdown,onClick:()=>B(),iconRight:l,disabled:g,children:[!e||e.length===0?t:e.length===1?`${t} (${T(a,e[0])})`:`${t} (${e.length} valda)`,n?m("ul",{className:p.multiSelectDropdownOptions,children:a.map(r=>{const _=e&&e.some(o=>o===r.value);return b("li",{className:p.multiSelectDropdownOption,children:[m("input",{type:"checkbox",checked:_,onChange:()=>S(r),className:p.multiSelectDropdownOptionCheckbox}),m("span",{children:r.name})]},r.value)})}):null]}):null};try{d.displayName="MultiSelect",d.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"string[]"}},onToggleOption:{defaultValue:null,description:"",name:"onToggleOption",required:!0,type:{name:"CallableFunction"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const j={title:"Design System/Atoms/MultiSelect",component:d},f={render:t=>{const[a,e]=M.useState([]),S=l=>{e(g=>{const n=[...g];return n.some(i=>i===l.value)?n.filter(i=>i!=l.value):(n.push(l.value),n)})};return m("div",{style:{margin:"auto",maxWidth:"1800px"},children:m(d,{name:t.name,options:t.options,selectedOptions:a,onToggleOption:S,icon:t.icon})})}},u={...f,args:{id:"10766",name:"Land",options:[{name:"Belgien",value:"attributefilter*L10766_41516"},{name:"England",value:"attributefilter*L10766_118421"},{name:"Irland",value:"attributefilter*L10766_41532"},{name:"Spanien",value:"attributefilter*L10766_41523"},{name:"Sverige",value:"attributefilter*L10766_41547"}],icon:{icon:"icon-map-pin"}}},c={...f,args:{id:"10770",name:"Producent",options:[{name:"Beavertown Brewery",value:"attributefilter*L10770_110433"},{name:"Brutal Brewing",value:"attributefilter*L10766_118421"},{name:"Cervezas Victoria",value:"attributefilter*L10770_110444"},{name:"Starobrno",value:"attributefilter*L10770_41806"}],icon:{icon:"icon-award"}}},s={...f,args:{id:"12336",name:"Förpackning",options:[{name:"Burk",value:"attributefilter*L12336_122639"},{name:"Engångsglas",value:"attributefilter*L12336_122646"},{name:"FAT",value:"attributefilter*L12336_122643"},{name:"Returglas",value:"attributefilter*L12336_122649"}],icon:{icon:"icon-package"}}};var v,y,L;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(y=u.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var w,h,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(h=c.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var O,x,k;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const A=["MultiSelectStoryLand","MultiSelectStoryProducer","MultiSelectStoryPackaging"],R=Object.freeze(Object.defineProperty({__proto__:null,MultiSelectStoryLand:u,MultiSelectStoryPackaging:s,MultiSelectStoryProducer:c,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{d as M,u as a,c as b,s as c,R as m};
//# sourceMappingURL=multi-select.stories-b4be9dbd.js.map
