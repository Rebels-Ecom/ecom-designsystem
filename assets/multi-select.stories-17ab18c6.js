import{r as g}from"./index-6f814c40.js";import{B as I}from"./button-bc254079.js";import{j as y,a as i}from"./jsx-runtime-76c5c2e2.js";import{u as E}from"./useOnClickOutside-47d3035a.js";const j="_multiSelectDropdown_1krih_1",A="_button_1krih_4",F="_multiSelectDropdownOptions_1krih_11",R="_multiSelectDropdownOption_1krih_11",z="_multiSelectDropdownOptionCheckbox_1krih_44",c={multiSelectDropdown:j,button:A,multiSelectDropdownOptions:F,multiSelectDropdownOption:R,multiSelectDropdownOptionCheckbox:z},p=({name:t,options:r,selectedOptions:e,onToggleOption:S,icon:o,disabled:f})=>{const a=g.useRef(null),[l,v]=g.useState(!1);function C(){v(!l)}const T=()=>v(!1),V=n=>{S(n)};function N(){return r instanceof Array&&r.length}function P(n,_){const u=n.find(q=>q.value===_);return u==null?void 0:u.name}return E({ref:a,onClose:T}),N()?y("div",{className:c.multiSelectDropdown,ref:a,children:[i(I,{type:"button",surface:"x",size:"xx-small",onClick:C,iconRight:o,disabled:f,className:c.button,children:!e||e.length===0?t:e.length===1?`${t} (${P(r,e[0])})`:`${t} (${e.length} valda)`}),l?i("ul",{className:c.multiSelectDropdownOptions,children:r.map(n=>{const _=e&&e.some(u=>u===n.value);return y("li",{className:c.multiSelectDropdownOption,children:[i("input",{type:"checkbox",checked:_,onChange:()=>V(n),className:c.multiSelectDropdownOptionCheckbox}),i("span",{children:n.name})]},n.value)})}):null]}):null};try{p.displayName="MultiSelect",p.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"string[]"}},onToggleOption:{defaultValue:null,description:"",name:"onToggleOption",required:!0,type:{name:"CallableFunction"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Design System/Atoms/MultiSelect",component:p},b={render:t=>{const[r,e]=g.useState([]),S=o=>{e(f=>{const a=[...f];return a.some(l=>l===o.value)?a.filter(l=>l!=o.value):(a.push(o.value),a)})};return i("div",{style:{margin:"auto",maxWidth:"1800px"},children:i(p,{name:t.name,options:t.options,selectedOptions:r,onToggleOption:S,icon:t.icon})})}},s={...b,args:{id:"10766",name:"Land",options:[{name:"Belgien",value:"attributefilter*L10766_41516"},{name:"England",value:"attributefilter*L10766_118421"},{name:"Irland",value:"attributefilter*L10766_41532"},{name:"Spanien",value:"attributefilter*L10766_41523"},{name:"Sverige",value:"attributefilter*L10766_41547"}],icon:{icon:"icon-map-pin"}}},m={...b,args:{id:"10770",name:"Producent",options:[{name:"Beavertown Brewery",value:"attributefilter*L10770_110433"},{name:"Brutal Brewing",value:"attributefilter*L10766_118421"},{name:"Cervezas Victoria",value:"attributefilter*L10770_110444"},{name:"Starobrno",value:"attributefilter*L10770_41806"}],icon:{icon:"icon-award"}}},d={...b,args:{id:"12336",name:"Förpackning",options:[{name:"Burk",value:"attributefilter*L12336_122639"},{name:"Engångsglas",value:"attributefilter*L12336_122646"},{name:"FAT",value:"attributefilter*L12336_122643"},{name:"Returglas",value:"attributefilter*L12336_122649"}],icon:{icon:"icon-package"}}};var L,h,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var O,k,D;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var M,x,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(x=d.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const W=["MultiSelectStoryLand","MultiSelectStoryProducer","MultiSelectStoryPackaging"],Q=Object.freeze(Object.defineProperty({__proto__:null,MultiSelectStoryLand:s,MultiSelectStoryPackaging:d,MultiSelectStoryProducer:m,__namedExportsOrder:W,default:$},Symbol.toStringTag,{value:"Module"}));export{p as M,s as a,m as b,d as c,Q as m};
//# sourceMappingURL=multi-select.stories-17ab18c6.js.map
