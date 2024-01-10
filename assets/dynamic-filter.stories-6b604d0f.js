import{r as V,a as s,j as l,F as k}from"./jsx-runtime-a3a6c0b8.js";import{D as oe}from"./drawer-sidebar-b0bfef9e.js";import{c as C}from"./index-a587463d.js";import{A as ue}from"./index-4058f88b.js";import{m as $}from"./motion-54668070.js";import{I as S}from"./icon-5fefd509.js";import{B as G}from"./button-3cce3bbf.js";import{B as de,A as ve}from"./below-e3c1f628.js";import{E as P}from"./expandable-wrapper-5e4804ab.js";import{S as fe}from"./slider-26585f7f.js";import{F as ae}from"./flex-container-145d4933.js";import{C as pe}from"./checkbox-45f9076c.js";import{R as ge}from"./radio-button-f4956d18.js";const he="_dynamicFilter_13qwv_1",ye="_filterItem_13qwv_4",Ve="_filterName_13qwv_17",_e="_filterItemIcon_13qwv_22",be="_expandableWrapper_13qwv_27",ke="_showMoreButton_13qwv_35",xe="_showMoreLabel_13qwv_47",we="_checkboxItem_13qwv_52",Fe="_checkbox_13qwv_52",Ne="_label_13qwv_67",Ie="_count_13qwv_72",Se="_radioItem_13qwv_80",Me="_radio_13qwv_80",qe="_filtersWrapper_13qwv_109",Be="_selectedFilters_13qwv_120",De="_filterButton_13qwv_131",Le="_selectedFilter_13qwv_120",Oe="_active_13qwv_166",Ce="_clear_13qwv_170",r={dynamicFilter:he,filterItem:ye,filterName:Ve,filterItemIcon:_e,expandableWrapper:be,showMoreButton:ke,showMoreLabel:xe,checkboxItem:we,checkbox:Fe,label:Ne,count:Ie,radioItem:Se,radio:Me,filtersWrapper:qe,selectedFilters:Be,filterButton:De,selectedFilter:Le,active:Oe,clear:Ce},J=c=>{if(!c||!Array.isArray(c))return;const f=c==null?void 0:c.map(p=>Number(p.name)),_=Math.max(...f);return{min:Math.min(...f),max:Math.ceil(_/10)*10}},T=({filters:c,title:f,preSelected:_,onUpdate:o,loading:p,hideSliderFields:g,hideFilters:F,maxOptionsToShow:x=6})=>{var z;const[w,N]=V.useState(!1),[B,le]=V.useState([]),[u,A]=V.useState(_??[]),[h,j]=V.useState(!1),[W,re]=V.useState(!1),te=e=>{le(t=>t.includes(e)?t.filter(a=>a!==e):[...t,e])},ie=(e,t,a)=>{E({name:t,value:`${t}_${a.min}-${a.max}`},e,!0)},E=(e,t,a)=>{A(d=>{var I;const n=d;let m=[];const i=n==null?void 0:n.find(y=>y.name===t);if(!i)m=[...n,{name:t,selectedOptions:[e]}];else{const y=(I=i.selectedOptions)==null?void 0:I.find(b=>b.name===e.name);m=[...n==null?void 0:n.map(b=>b.name===i.name?a?{...i,selectedOptions:[e]}:y?{...i,selectedOptions:i.selectedOptions.filter(L=>L.name!==y.name)}:{...i,selectedOptions:[...i.selectedOptions,e]}:b)]}const v=m.filter(y=>!!y.selectedOptions.length);return o==null||o(e,v),v})},se=e=>{A(t=>{const a=t,n=(a==null?void 0:a.map(m=>({...m,selectedOptions:m.selectedOptions.filter(i=>i.name!==e.name)}))).filter(m=>!!m.selectedOptions.length);return o==null||o(e,n),n})},ce=()=>{A([]),o==null||o(void 0,[])},me=()=>N(!1);V.useEffect(()=>{w||j(!1)},[w]);const D=e=>{var t;return(t=e.options)==null?void 0:t.map((a,d)=>{var i;const n=u==null?void 0:u.find(v=>v.name===e.name),m=(i=n==null?void 0:n.selectedOptions)==null?void 0:i.find(v=>v.value===a.value);switch(e.type){case"radio":return s("button",{className:r.radioItem,onClick:()=>E(a,e.name,!0),disabled:p,children:[l(ge,{checked:!!m,id:a.value,name:a.value,className:r.radio,disabled:p}),l("span",{className:r.label,children:a.name}),a.count&&l("span",{className:C(r.label,r.count),children:a.count})]},`${a.name}-${d}`);case"checkbox":default:return s("button",{className:r.checkboxItem,onClick:()=>E(a,e.name),disabled:p,children:[l(pe,{checked:!!m,id:a.value,name:a.value,className:r.checkbox,disabled:p}),l("span",{className:r.label,children:a.name}),a.count&&l("span",{className:C(r.label,r.count),children:a.count})]},`${a.name}-${d}`)}})},H=V.useMemo(()=>s("div",{className:r.selectedFilters,children:[u==null?void 0:u.map(e=>{var t;return(t=e.selectedOptions)==null?void 0:t.map((a,d)=>{let n=a.name;return c!=null&&c.find(m=>{var i;return m.type==="range"&&((i=m.options)==null?void 0:i.find(v=>v.value===a.name))})&&(n=e.name),l(ue,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:s($.button,{className:C(r.selectedFilter,r.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>se(a),children:[l("span",{children:n}),l(S,{icon:"icon-x"})]})},`${a.value}-${d}`)})}),!!u.length&&l("button",{className:C(r.selectedFilter,r.clear),onClick:ce,children:l(S,{icon:"icon-trash-2"})})]}),[u,c]),R=(z=u==null?void 0:u.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:z.length;return s(k,{children:[s("div",{className:r.filtersWrapper,children:[l(G,{type:"button",surface:"x",size:"xx-small",onClick:()=>N(!0),className:r.filterButton,children:"Filtrera"}),!F&&u.length>0&&s(k,{children:[l(de,{breakpoint:"md",children:e=>e&&s(k,{children:[l(G,{type:"button",surface:"x",size:"xx-small",onClick:()=>re(!W),className:r.filterButton,iconRight:{icon:W?"icon-chevron-up":"icon-chevron-down"},children:R>0?`Valda filter (${R})`:"Valda filter"}),l(P,{open:W,children:H})]})}),l(ve,{breakpoint:"md",children:e=>e&&l(k,{children:H})})]})]}),l(oe,{isOpen:w,onClose:me,from:"left",width:"md",hideOverlay:!0,children:s("div",{className:r.dynamicFilter,children:[f&&l("h4",{className:r.title,children:f}),c==null?void 0:c.map((e,t)=>{var v,I,y,b,L;const a=B.includes(e.name),d=e.type==="range"?_==null?void 0:_.find(O=>O.name===e.name):void 0,n=(y=(I=(v=d==null?void 0:d.selectedOptions)==null?void 0:v[0])==null?void 0:I.value)==null?void 0:y.split("-"),m=n!=null&&n[0]?Number(n==null?void 0:n[0]):void 0,i=n!=null&&n[1]?Number(n==null?void 0:n[1]):void 0;return s("div",{className:r.filterCategory,children:[s("button",{className:r.filterItem,onClick:()=>te(e.name),children:[l("span",{className:r.filterName,children:e.name}),l(S,{className:r.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),s(P,{open:a,className:r.expandableWrapper,children:[e.type==="range"?l(fe,{min:((b=J(e.options))==null?void 0:b.min)??0,max:((L=J(e.options))==null?void 0:L.max)??10,defaultMinVal:m,defaultMaxVal:i,withFields:!g,formatLabel:"kr",step:10,onChange:O=>ie(e.name,e.id,typeof O=="object"?O:{min:0,max:0}),disabled:p}):l(k,{children:D(e).slice(0,x)}),D(e).length>x&&e.type!=="range"?s(k,{children:[l(P,{open:h,children:D(e).slice(x,D(e).length)}),s(ae,{alignItems:"center",justifyContent:"center",children:[h&&s($.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>j(!1),className:r.showMoreButton,children:[l("span",{className:r.showMoreLabel,children:h?"Se mindre":"Se mer"}),l(S,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&s($.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>j(!0),className:r.showMoreButton,children:[l("span",{className:r.showMoreLabel,children:h?"Se mindre":"Se mer"}),l(S,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${t}`)})]})})]})};try{T.displayName="DynamicFilter",T.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}}}}}catch{}const Te={title:"Design System/Molecules/Dynamic Filter",component:T},K=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],ne={render:c=>{const[f,_]=V.useState(),o=(g,F)=>{_(F)},p=V.useMemo(()=>K.filter(g=>f==null?void 0:f.find(F=>{var x;return(x=F.selectedOptions)==null?void 0:x.find(w=>{var N,B;return((N=w.name)==null?void 0:N.toLowerCase())===g.country||((B=w.name)==null?void 0:B.toLowerCase())===g.producer})})),[f]);return s(k,{children:[l(T,{onUpdate:o,title:"Filter",preSelected:c.preSelected??[],filters:c.filters}),l(ae,{flexDirection:"column",children:(p.length?p:K).map(g=>s("span",{style:{color:"blue"},children:[g.producer,", ",g.price,"kr"]},g.id))})]})}},M={...ne,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},q={...ne,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var Q,X,Y;M.parameters={...M.parameters,docs:{...(Q=M.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=M.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,U,ee;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
    }] as TFilterType[]),
    preSelected: [{
      name: 'Listpris',
      selectedOptions: [{
        name: 'range-id',
        value: '20-600'
      }]
    }, {
      name: 'Land',
      selectedOptions: [{
        name: 'Italien',
        value: 'italien'
      }]
    }]
  }
}`,...(ee=(U=q.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};const Ae=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:M,Dynamic_Filter_With_Pre_Selected:q,__namedExportsOrder:Ae,default:Te},Symbol.toStringTag,{value:"Module"}));export{T as D,M as a,Ye as d};
