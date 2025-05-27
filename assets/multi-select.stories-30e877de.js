import{r as _,j as n}from"./jsx-runtime-03333307.js";import{B as q}from"./button-1de8d46b.js";import{u as E}from"./useOnClickOutside-9d2c35bb.js";import"./index-09749a66.js";import"./icon-a32914e5.js";import"./loader-5c06d14e.js";import"./button.module-867d0823.js";const N="_multiSelectDropdown_1krih_1",P="_button_1krih_4",R="_multiSelectDropdownOptions_1krih_11",$="_multiSelectDropdownOption_1krih_11",F="_multiSelectDropdownOptionCheckbox_1krih_44",s={multiSelectDropdown:N,button:P,multiSelectDropdownOptions:R,multiSelectDropdownOption:$,multiSelectDropdownOptionCheckbox:F},b=({name:r,options:i,selectedOptions:e,onToggleOption:d,icon:l,disabled:S})=>{const a=_.useRef(null),[o,y]=_.useState(!1);function C(){y(!o)}const M=()=>y(!1),j=t=>{d(t)};function A(){return i instanceof Array&&i.length}function I(t,g){const u=t.find(f=>f.value===g);return u==null?void 0:u.name}return E({ref:a,onClose:M}),A()?n.jsxs("div",{className:s.multiSelectDropdown,ref:a,children:[n.jsx(q,{type:"button",surface:"x",size:"xx-small",onClick:C,iconRight:l,disabled:S,className:s.button,children:!e||e.length===0?r:e.length===1?`${r} (${I(i,e[0])})`:`${r} (${e.length} valda)`}),o?n.jsx("ul",{className:s.multiSelectDropdownOptions,children:i.map((t,g)=>{const u=e&&e.some(f=>f===t.value);return n.jsxs("li",{className:s.multiSelectDropdownOption,children:[n.jsx("input",{type:"checkbox",checked:u,onChange:()=>j(t),className:s.multiSelectDropdownOptionCheckbox}),n.jsx("span",{children:t.name})]},`${t.value}-${g}`)})}):null]}):null};b.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ISelectOption"}],raw:"Array<ISelectOption>"},description:""},selectedOptions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},onToggleOption:{required:!0,tsType:{name:"CallableFunction"},description:""},icon:{required:!1,tsType:{name:"IIcon"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Q={title:"Design System/Atoms/MultiSelect",component:b},v={render:r=>{const[i,e]=_.useState([]),d=l=>{e(S=>{const a=[...S];return a.some(o=>o===l.value)?a.filter(o=>o!=l.value):(a.push(l.value),a)})};return n.jsx("div",{style:{margin:"auto",maxWidth:"1800px"},children:n.jsx(b,{name:r.name,options:r.options,selectedOptions:i,onToggleOption:d,icon:r.icon})})}},c={...v,args:{id:"10766",name:"Land",options:[{name:"Belgien",value:"attributefilter*L10766_41516"},{name:"England",value:"attributefilter*L10766_118421"},{name:"Irland",value:"attributefilter*L10766_41532"},{name:"Spanien",value:"attributefilter*L10766_41523"},{name:"Sverige",value:"attributefilter*L10766_41547"}],icon:{icon:"icon-map-pin"}}},m={...v,args:{id:"10770",name:"Producent",options:[{name:"Beavertown Brewery",value:"attributefilter*L10770_110433"},{name:"Brutal Brewing",value:"attributefilter*L10766_118421"},{name:"Cervezas Victoria",value:"attributefilter*L10770_110444"},{name:"Starobrno",value:"attributefilter*L10770_41806"}],icon:{icon:"icon-award"}}},p={...v,args:{id:"12336",name:"Förpackning",options:[{name:"Burk",value:"attributefilter*L12336_122639"},{name:"Engångsglas",value:"attributefilter*L12336_122646"},{name:"FAT",value:"attributefilter*L12336_122643"},{name:"Returglas",value:"attributefilter*L12336_122649"}],icon:{icon:"icon-package"}}};var w,L,h;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(L=c.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var x,k,D;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var O,T,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const U=["MultiSelectStoryLand","MultiSelectStoryProducer","MultiSelectStoryPackaging"];export{c as MultiSelectStoryLand,p as MultiSelectStoryPackaging,m as MultiSelectStoryProducer,U as __namedExportsOrder,Q as default};
