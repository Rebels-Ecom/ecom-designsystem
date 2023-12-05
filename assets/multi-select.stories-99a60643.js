import{r as b,a as L,j as i}from"./jsx-runtime-a3a6c0b8.js";import{B as I}from"./button-93555bd8.js";import{u as E}from"./useOnClickOutside-338168d6.js";const $="_multiSelectDropdown_1krih_1",j="_button_1krih_4",A="_multiSelectDropdownOptions_1krih_11",F="_multiSelectDropdownOption_1krih_11",R="_multiSelectDropdownOptionCheckbox_1krih_44",c={multiSelectDropdown:$,button:j,multiSelectDropdownOptions:A,multiSelectDropdownOption:F,multiSelectDropdownOptionCheckbox:R},p=({name:t,options:r,selectedOptions:e,onToggleOption:S,icon:o,disabled:f})=>{const a=b.useRef(null),[l,y]=b.useState(!1);function T(){y(!l)}const V=()=>y(!1),N=n=>{S(n)};function P(){return r instanceof Array&&r.length}function q(n,_){const u=n.find(g=>g.value===_);return u==null?void 0:u.name}return E({ref:a,onClose:V}),P()?L("div",{className:c.multiSelectDropdown,ref:a,children:[i(I,{type:"button",surface:"x",size:"xx-small",onClick:T,iconRight:o,disabled:f,className:c.button,children:!e||e.length===0?t:e.length===1?`${t} (${q(r,e[0])})`:`${t} (${e.length} valda)`}),l?i("ul",{className:c.multiSelectDropdownOptions,children:r.map((n,_)=>{const u=e&&e.some(g=>g===n.value);return L("li",{className:c.multiSelectDropdownOption,children:[i("input",{type:"checkbox",checked:u,onChange:()=>N(n),className:c.multiSelectDropdownOptionCheckbox}),i("span",{children:n.name})]},`${n.value}-${_}`)})}):null]}):null};try{p.displayName="MultiSelect",p.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"string[]"}},onToggleOption:{defaultValue:null,description:"",name:"onToggleOption",required:!0,type:{name:"CallableFunction"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Design System/Atoms/MultiSelect",component:p},v={render:t=>{const[r,e]=b.useState([]),S=o=>{e(f=>{const a=[...f];return a.some(l=>l===o.value)?a.filter(l=>l!=o.value):(a.push(o.value),a)})};return i("div",{style:{margin:"auto",maxWidth:"1800px"},children:i(p,{name:t.name,options:t.options,selectedOptions:r,onToggleOption:S,icon:t.icon})})}},s={...v,args:{id:"10766",name:"Land",options:[{name:"Belgien",value:"attributefilter*L10766_41516"},{name:"England",value:"attributefilter*L10766_118421"},{name:"Irland",value:"attributefilter*L10766_41532"},{name:"Spanien",value:"attributefilter*L10766_41523"},{name:"Sverige",value:"attributefilter*L10766_41547"}],icon:{icon:"icon-map-pin"}}},m={...v,args:{id:"10770",name:"Producent",options:[{name:"Beavertown Brewery",value:"attributefilter*L10770_110433"},{name:"Brutal Brewing",value:"attributefilter*L10766_118421"},{name:"Cervezas Victoria",value:"attributefilter*L10770_110444"},{name:"Starobrno",value:"attributefilter*L10770_41806"}],icon:{icon:"icon-award"}}},d={...v,args:{id:"12336",name:"Förpackning",options:[{name:"Burk",value:"attributefilter*L12336_122639"},{name:"Engångsglas",value:"attributefilter*L12336_122646"},{name:"FAT",value:"attributefilter*L12336_122643"},{name:"Returglas",value:"attributefilter*L12336_122649"}],icon:{icon:"icon-package"}}};var h,w,O;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(w=s.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var k,D,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var x,B,C;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const W=["MultiSelectStoryLand","MultiSelectStoryProducer","MultiSelectStoryPackaging"],K=Object.freeze(Object.defineProperty({__proto__:null,MultiSelectStoryLand:s,MultiSelectStoryPackaging:d,MultiSelectStoryProducer:m,__namedExportsOrder:W,default:z},Symbol.toStringTag,{value:"Module"}));export{p as M,s as a,m as b,d as c,K as m};
