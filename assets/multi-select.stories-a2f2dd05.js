import{r as M}from"./index-6f814c40.js";import{B as P}from"./button-e43738b0.js";import{j as v,a as m}from"./jsx-runtime-76c5c2e2.js";const V="_multiSelectDropdown_h68xn_2",I="_multiSelectDropdownOptions_h68xn_6",N="_multiSelectDropdownOption_h68xn_6",q="_multiSelectDropdownOptionCheckbox_h68xn_35",d={multiSelectDropdown:V,multiSelectDropdownOptions:I,multiSelectDropdownOption:N,multiSelectDropdownOptionCheckbox:q},S=({name:t,options:n,selectedOptions:e,onToggleOption:g,icon:i})=>{const[p,a]=M.useState(!1);function l(){a(!p)}function B(){return n instanceof Array&&n.length}function C(r,_){const o=r.find(T=>T.value===_);return o==null?void 0:o.name}return B()?v(P,{type:"button",surface:"x",size:"xx-small",className:d.multiSelectDropdown,onClick:()=>l(),iconRight:i,children:[!e||e.length===0?t:e.length===1?`${t} (${C(n,e[0])})`:`${t} (${e.length} valda)`,p?m("ul",{className:d.multiSelectDropdownOptions,children:n.map(r=>{const _=e&&e.some(o=>o===r.value);return v("li",{className:d.multiSelectDropdownOption,children:[m("input",{type:"checkbox",checked:_,onChange:()=>g(r),className:d.multiSelectDropdownOptionCheckbox}),m("span",{children:r.name})]},r.value)})}):null]}):null};try{S.displayName="MultiSelect",S.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOption[]"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"string[]"}},onToggleOption:{defaultValue:null,description:"",name:"onToggleOption",required:!0,type:{name:"CallableFunction"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}}}}}catch{}const E={title:"Design System/Atoms/MultiSelect",component:S},f={render:t=>{const[n,e]=M.useState([]),g=i=>{e(p=>{const a=[...p];return a.some(l=>l===i.value)?a.filter(l=>l!=i.value):(a.push(i.value),a)})};return m("div",{style:{margin:"auto",maxWidth:"1800px"},children:m(S,{name:t.name,options:t.options,selectedOptions:n,onToggleOption:g,icon:t.icon})})}},u={...f,args:{id:"10766",name:"Land",options:[{name:"Belgien",value:"attributefilter*L10766_41516"},{name:"England",value:"attributefilter*L10766_118421"},{name:"Irland",value:"attributefilter*L10766_41532"},{name:"Spanien",value:"attributefilter*L10766_41523"},{name:"Sverige",value:"attributefilter*L10766_41547"}],icon:{icon:"icon-map-pin"}}},c={...f,args:{id:"10770",name:"Producent",options:[{name:"Beavertown Brewery",value:"attributefilter*L10770_110433"},{name:"Brutal Brewing",value:"attributefilter*L10766_118421"},{name:"Cervezas Victoria",value:"attributefilter*L10770_110444"},{name:"Starobrno",value:"attributefilter*L10770_41806"}],icon:{icon:"icon-award"}}},s={...f,args:{id:"12336",name:"Förpackning",options:[{name:"Burk",value:"attributefilter*L12336_122639"},{name:"Engångsglas",value:"attributefilter*L12336_122646"},{name:"FAT",value:"attributefilter*L12336_122643"},{name:"Returglas",value:"attributefilter*L12336_122649"}],icon:{icon:"icon-package"}}};var b,y,L;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const j=["MultiSelectStoryLand","MultiSelectStoryProducer","MultiSelectStoryPackaging"],$=Object.freeze(Object.defineProperty({__proto__:null,MultiSelectStoryLand:u,MultiSelectStoryPackaging:s,MultiSelectStoryProducer:c,__namedExportsOrder:j,default:E},Symbol.toStringTag,{value:"Module"}));export{S as M,u as a,c as b,s as c,$ as m};
//# sourceMappingURL=multi-select.stories-a2f2dd05.js.map
