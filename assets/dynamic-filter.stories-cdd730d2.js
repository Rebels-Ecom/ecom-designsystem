import{r as V,a as i,F as N,j as n}from"./jsx-runtime-a3a6c0b8.js";import{D as te}from"./drawer-sidebar-878b7f04.js";import{c as W}from"./index-a587463d.js";import{F as E}from"./flex-container-145d4933.js";import{B as le}from"./button-93555bd8.js";import{A as re}from"./index-4058f88b.js";import{m as j}from"./motion-54668070.js";import{I}from"./icon-b918f330.js";import{E as q}from"./expandable-wrapper-5e4804ab.js";import{S as ie}from"./slider-528f06ee.js";import{C as se}from"./checkbox-2dd08965.js";import{R as ce}from"./radio-button-611b19a6.js";const oe="_dynamicFilter_3c8ot_1",me="_filterItem_3c8ot_4",de="_filterName_3c8ot_16",ue="_filterItemIcon_3c8ot_20",pe="_expandableWrapper_3c8ot_25",fe="_showMoreButton_3c8ot_33",he="_showMoreLabel_3c8ot_45",ve="_checkboxItem_3c8ot_50",ge="_checkbox_3c8ot_50",ye="_label_3c8ot_65",_e="_selectedFilter_3c8ot_71",be="_active_3c8ot_92",Ve="_clear_3c8ot_96",l={dynamicFilter:oe,filterItem:me,filterName:de,filterItemIcon:ue,expandableWrapper:pe,showMoreButton:fe,showMoreLabel:he,checkboxItem:ve,checkbox:ge,label:ye,selectedFilter:_e,active:be,clear:Ve},P=d=>{if(!d||!Array.isArray(d))return;const u=d.map(p=>Number(p.name)),g=Math.max(...u);return{min:Math.min(...u),max:Math.ceil(g/10)*10}},L=({filters:d,title:u,preSelected:g,onUpdate:m,loading:p,hideSliderFields:O,hideFilters:f,maxOptionsToShow:_=6})=>{const[x,k]=V.useState(!1),[w,Y]=V.useState([]),[B,T]=V.useState(g??[]),[h,A]=V.useState(!1),Z=e=>{Y(a=>a.includes(e)?a.filter(r=>r!==e):[...a,e])},U=(e,a,r)=>{$({name:a,value:`${a}_${r.min}-${r.max}`},e,!0)},$=(e,a,r)=>{T(c=>{const s=c;let t=[];const o=s.find(v=>v.name===a);if(!o)t=[...s,{name:a,selectedOptions:[e]}];else{const v=o.selectedOptions.find(b=>b.name===e.name);t=[...s.map(b=>b.name===o.name?r?(console.log("2"),{...o,selectedOptions:[e]}):v?{...o,selectedOptions:o.selectedOptions.filter(C=>C.name!==v.name)}:(console.log("1"),{...o,selectedOptions:[...o.selectedOptions,e]}):b)]}const F=t.filter(v=>!!v.selectedOptions.length);return m==null||m(e,F),F})},ee=e=>{T(a=>{const r=a,s=(r==null?void 0:r.map(t=>({...t,selectedOptions:t.selectedOptions.filter(o=>o.name!==e.name)}))).filter(t=>!!t.selectedOptions.length);return m==null||m(e,s),s})},ae=()=>{T([]),m==null||m(void 0,[])},ne=()=>k(!1);V.useEffect(()=>{x||A(!1)},[x]);const D=e=>e.options.map((a,r)=>{const c=B.find(t=>t.name===e.name),s=c==null?void 0:c.selectedOptions.find(t=>t.value===a.value);switch(e.type){case"radio":return i("button",{className:l.checkboxItem,onClick:()=>$(a,e.name,!0),disabled:p,children:[n(ce,{checked:!!s,id:a.value,name:a.value,className:l.radio,disabled:p}),n("span",{className:l.label,children:a.name})]},`${a.name}-${r}`);case"checkbox":default:return i("button",{className:l.checkboxItem,onClick:()=>$(a,e.name),disabled:p,children:[n(se,{checked:!!s,id:a.value,name:a.value,className:l.checkbox,disabled:p}),n("span",{className:l.label,children:a.name})]},`${a.name}-${r}`)}});return i(N,{children:[i(E,{alignItems:"center",children:[n(le,{type:"button",surface:"x",size:"xx-small",onClick:()=>k(!0),children:"Filtrera"}),!f&&i(N,{children:[B.map(e=>e.selectedOptions.map((a,r)=>{let c=a.name;return d.find(s=>s.type==="range"&&s.options.find(t=>t.value===a.name))&&(c=e.name),n(re,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:i(j.button,{className:W(l.selectedFilter,l.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>ee(a),children:[n("span",{children:c}),n(I,{icon:"icon-x"})]},`${a.value}-${r}`)})})),!!B.length&&i("button",{className:W(l.selectedFilter,l.clear),onClick:ae,children:[n("span",{children:"Rensa"}),n(I,{icon:"icon-x"})]})]})]}),n(te,{isOpen:x,onClose:ne,from:"left",width:"md",hideOverlay:!0,children:i("div",{className:l.dynamicFilter,children:[u&&n("h4",{className:l.title,children:u}),d.map((e,a)=>{var o,F,v,b,C;const r=w.includes(e.name),c=e.type==="range"?g==null?void 0:g.find(y=>y.name===e.name):void 0,s=(o=c==null?void 0:c.selectedOptions)==null?void 0:o.find(y=>y.value),t=(v=(F=s==null?void 0:s.value)==null?void 0:F.split("_")[1])==null?void 0:v.split("-").map(y=>Number(y));return i("div",{className:l.filterCategory,children:[i("button",{className:l.filterItem,onClick:()=>Z(e.name),children:[n("span",{className:l.filterName,children:e.name}),n(I,{className:l.filterItemIcon,icon:r?"icon-chevron-up":"icon-chevron-down"})]}),i(q,{open:r,className:l.expandableWrapper,children:[e.type==="range"?n(ie,{min:((b=P(e.options))==null?void 0:b.min)??0,max:((C=P(e.options))==null?void 0:C.max)??10,defaultMinVal:t==null?void 0:t[0],defaultMaxVal:t==null?void 0:t[1],withFields:!O,formatLabel:"kr",step:10,onChange:y=>U(e.name,e.id,typeof y=="object"?y:{min:0,max:0}),disabled:p}):n(N,{children:D(e).slice(0,_)}),D(e).length>_&&e.type!=="range"?i(N,{children:[n(q,{open:h,children:D(e).slice(_,D(e).length)}),i(E,{alignItems:"center",justifyContent:"center",children:[h&&i(j.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>A(!1),className:l.showMoreButton,children:[n("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),n(I,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&i(j.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>A(!0),className:l.showMoreButton,children:[n("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),n(I,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${a}`)})]})})]})};try{L.displayName="DynamicFilter",L.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}}}}}catch{}const xe={title:"Design System/Molecules/Dynamic Filter",component:L},R=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],X={render:d=>{const[u,g]=V.useState(),m=(f,_)=>{g(_)},p=u??d.preSelected??[],O=V.useMemo(()=>R.filter(f=>u==null?void 0:u.find(_=>_.selectedOptions.find(x=>{var k,w;return((k=x.name)==null?void 0:k.toLowerCase())===f.country||((w=x.name)==null?void 0:w.toLowerCase())===f.producer}))),[u]);return i(N,{children:[n(L,{onUpdate:m,title:"Filter",preSelected:p.length?p:d.preSelected,filters:d.filters}),n(E,{flexDirection:"column",children:(O.length?O:R).map(f=>i("span",{style:{color:"blue"},children:[f.producer,", ",f.price,"kr"]},f.id))})]})}},S={...X,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},M={...X,args:{preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"range-id_20-60"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var H,z,G;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DynamicFilterStoryTemplate,
  args: {
    filters: ([{
      name: 'Listpris',
      type: 'range',
      id: 'rangefilter*V16062',
      options: [{
        name: "0",
        value: "rangefilter*V16062"
      }, {
        name: "10",
        value: "rangefilter*V16062"
      }, {
        name: "20",
        value: "rangefilter*V16062"
      }, {
        name: "30",
        value: "rangefilter*V16062"
      }, {
        name: "40",
        value: "rangefilter*V16062"
      }, {
        name: "50",
        value: "rangefilter*V16062"
      }, {
        name: "60",
        value: "rangefilter*V16062"
      }, {
        name: "70",
        value: "rangefilter*V16062"
      }, {
        name: "80",
        value: "rangefilter*V16062"
      }, {
        name: "90",
        value: "rangefilter*V16062"
      }, {
        name: "100",
        value: "rangefilter*V16062"
      }, {
        name: "200",
        value: "rangefilter*V16062"
      }, {
        name: "300",
        value: "rangefilter*V16062"
      }, {
        name: "400",
        value: "rangefilter*V16062"
      }, {
        name: "500",
        value: "rangefilter*V16062"
      }, {
        name: "1000",
        value: "rangefilter*V16062"
      }, {
        name: "1500",
        value: "rangefilter*V16062"
      }, {
        name: "2000",
        value: "rangefilter*V16062"
      }, {
        name: "2466",
        value: "rangefilter*V16062"
      }]
    }, {
      name: 'Land',
      type: 'checkbox',
      options: [{
        name: 'Sverige',
        value: 'sverige'
      }, {
        name: 'Italien',
        value: 'italien'
      }, {
        name: 'USA',
        value: 'usa'
      }, {
        name: 'Belgien',
        value: 'belgien'
      }, {
        name: 'Norge',
        value: 'norge'
      }, {
        name: 'Irland',
        value: 'irland'
      }, {
        name: 'Tyskland',
        value: 'tyskland'
      }, {
        name: 'Nederländerna',
        value: 'nederländerna'
      }, {
        name: 'Tjeckien',
        value: 'tjeckien'
      }]
    }, {
      name: 'Producent',
      type: 'checkbox',
      options: [{
        name: 'Heineken',
        value: 'heineken'
      }, {
        name: 'Birra Moretti',
        value: 'birra-moretti'
      }]
    }, {
      name: 'Single Select',
      type: 'radio',
      options: [{
        name: 'Endast dryck',
        value: 'drink-only'
      }, {
        name: 'Allt',
        value: 'all'
      }]
    }] as TFilterType[])
  }
}`,...(G=(z=S.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DynamicFilterStoryTemplate,
  args: {
    preSelected: [{
      name: 'Listpris',
      selectedOptions: [{
        name: 'range-id',
        value: 'range-id_20-60'
      }]
    }, {
      name: 'Land',
      selectedOptions: [{
        name: 'Italien',
        value: 'italien'
      }]
    }]
  }
}`,...(Q=(K=M.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ke=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:S,Dynamic_Filter_With_Pre_Selected:M,__namedExportsOrder:ke,default:xe},Symbol.toStringTag,{value:"Module"}));export{L as D,S as a,Ae as d};
