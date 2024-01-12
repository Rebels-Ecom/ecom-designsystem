import{r as V,a as s,j as n,F as x}from"./jsx-runtime-a3a6c0b8.js";import{D as oe}from"./drawer-sidebar-b0bfef9e.js";import{c as A}from"./index-a587463d.js";import{A as ue}from"./index-4058f88b.js";import{m as q}from"./motion-54668070.js";import{I as M}from"./icon-5fefd509.js";import{B as G}from"./button-369dade1.js";import{B as de,A as fe}from"./below-e3c1f628.js";import{E as P}from"./expandable-wrapper-5e4804ab.js";import{S as ve}from"./slider-2bdb20ad.js";import{F as ae}from"./flex-container-145d4933.js";import{C as pe}from"./checkbox-45f9076c.js";import{R as ge}from"./radio-button-f4956d18.js";const he="_dynamicFilter_1fnr0_1",ye="_filterItem_1fnr0_4",Ve="_filterName_1fnr0_17",_e="_filterItemIcon_1fnr0_22",be="_expandableWrapper_1fnr0_27",ke="_showMoreButton_1fnr0_35",xe="_showMoreLabel_1fnr0_47",Fe="_checkboxItem_1fnr0_52",Ne="_checkbox_1fnr0_52",Ie="_label_1fnr0_67",Se="_count_1fnr0_73",Me="_radioItem_1fnr0_81",we="_radio_1fnr0_81",Be="_filtersWrapper_1fnr0_111",De="_selectedFilters_1fnr0_122",Le="_filterButton_1fnr0_133",Oe="_selectedFilter_1fnr0_122",Ce="_active_1fnr0_168",Ae="_clear_1fnr0_172",l={dynamicFilter:he,filterItem:ye,filterName:Ve,filterItemIcon:_e,expandableWrapper:be,showMoreButton:ke,showMoreLabel:xe,checkboxItem:Fe,checkbox:Ne,label:Ie,count:Se,radioItem:Me,radio:we,filtersWrapper:Be,selectedFilters:De,filterButton:Le,selectedFilter:Oe,active:Ce,clear:Ae},J=c=>{if(!c||!Array.isArray(c))return;const v=c==null?void 0:c.map(p=>Number(p.name)),_=Math.max(...v);return{min:Math.min(...v),max:Math.ceil(_/10)*10}},T=({filters:c,title:v,preSelected:_,onUpdate:o,loading:p,hideSliderFields:g,hideFilters:I,maxOptionsToShow:F=6})=>{var z;const[N,S]=V.useState(!1),[D,le]=V.useState([]),[f,j]=V.useState(_??[]),[h,W]=V.useState(!1),[E,re]=V.useState(!1),te=e=>{le(i=>i.includes(e)?i.filter(a=>a!==e):[...i,e])},ie=(e,i,a)=>{$({name:i,value:`${i}_${a.min}-${a.max}`},i,!0)},$=(e,i,a)=>{j(u=>{var b;const r=u;let m=[];const t=r==null?void 0:r.find(y=>y.name===i);if(!t)m=[...r,{name:i,selectedOptions:[e]}];else{const y=(b=t.selectedOptions)==null?void 0:b.find(k=>k.name===e.name);m=[...r==null?void 0:r.map(k=>k.name===t.name?a?{...t,selectedOptions:[e]}:y?{...t,selectedOptions:t.selectedOptions.filter(O=>O.name!==y.name)}:{...t,selectedOptions:[...t.selectedOptions,e]}:k)]}const d=m.filter(y=>!!y.selectedOptions.length);return o==null||o(e,d),d})},se=(e,i)=>{j(a=>{const u=a,m=(u==null?void 0:u.map(t=>({...t,selectedOptions:t.selectedOptions.filter(d=>d.name!==e.name)}))).filter(t=>!!t.selectedOptions.length);return i?o==null||o({name:e.value,value:e.name},m):o==null||o(e,m),m})},ce=()=>{j([]),o==null||o(void 0,[])},me=()=>S(!1);V.useEffect(()=>{N||W(!1)},[N]);const L=e=>{var i;return(i=e.options)==null?void 0:i.map((a,u)=>{var t;const r=f==null?void 0:f.find(d=>d.name===e.name),m=(t=r==null?void 0:r.selectedOptions)==null?void 0:t.find(d=>d.value===a.value);switch(e.type){case"radio":return s("button",{className:l.radioItem,onClick:()=>$(a,e.name,!0),disabled:p,children:[n(ge,{checked:!!m,id:a.value,name:a.value,className:l.radio,disabled:p}),n("span",{className:l.label,children:a.name}),a.count&&n("span",{className:A(l.label,l.count),children:a.count})]},`${a.name}-${u}`);case"checkbox":default:return s("button",{className:l.checkboxItem,onClick:()=>$(a,e.name),disabled:p,children:[n(pe,{checked:!!m,id:a.value,name:a.value,className:l.checkbox,disabled:p}),n("span",{className:l.label,children:a.name}),a.count&&n("span",{className:A(l.label,l.count),children:a.count})]},`${a.name}-${u}`)}})},H=V.useMemo(()=>s("div",{className:l.selectedFilters,children:[f==null?void 0:f.map(e=>{var i;return(i=e.selectedOptions)==null?void 0:i.map((a,u)=>{let r=a.name;const m=c==null?void 0:c.find(t=>{var d;return t.type==="range"&&((d=t.options)==null?void 0:d.find(b=>b.value===a.name))});return m&&(r=m.name),n(ue,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:s(q.button,{className:A(l.selectedFilter,l.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>se(a,!!m),children:[n("span",{children:r}),n(M,{icon:"icon-x"})]})},`${a.value}-${u}`)})}),!!f.length&&n("button",{className:A(l.selectedFilter,l.clear),onClick:ce,children:n(M,{icon:"icon-trash-2"})})]}),[f,c]),R=(z=f==null?void 0:f.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:z.length;return s(x,{children:[s("div",{className:l.filtersWrapper,children:[n(G,{type:"button",surface:"x",size:"xx-small",onClick:()=>S(!0),className:l.filterButton,children:"Filtrera"}),!I&&f.length>0&&s(x,{children:[n(de,{breakpoint:"md",children:e=>e&&s(x,{children:[n(G,{type:"button",surface:"x",size:"xx-small",onClick:()=>re(!E),className:l.filterButton,iconRight:{icon:E?"icon-chevron-up":"icon-chevron-down"},children:R>0?`Valda filter (${R})`:"Valda filter"}),n(P,{open:E,children:H})]})}),n(fe,{breakpoint:"md",children:e=>e&&n(x,{children:H})})]})]}),n(oe,{isOpen:N,onClose:me,from:"left",width:"md",hideOverlay:!0,children:s("div",{className:l.dynamicFilter,children:[v&&n("h4",{className:l.title,children:v}),c==null?void 0:c.map((e,i)=>{var d,b,y,k,O;const a=D.includes(e.name),u=e.type==="range"?_==null?void 0:_.find(C=>C.name===e.id):void 0,r=(y=(b=(d=u==null?void 0:u.selectedOptions)==null?void 0:d[0])==null?void 0:b.value)==null?void 0:y.split("-"),m=r!=null&&r[0]?Number(r==null?void 0:r[0]):void 0,t=r!=null&&r[1]?Number(r==null?void 0:r[1]):void 0;return s("div",{className:l.filterCategory,children:[s("button",{className:l.filterItem,onClick:()=>te(e.name),children:[n("span",{className:l.filterName,children:e.name}),n(M,{className:l.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),s(P,{open:a,className:l.expandableWrapper,children:[e.type==="range"?n(ve,{min:((k=J(e.options))==null?void 0:k.min)??0,max:((O=J(e.options))==null?void 0:O.max)??10,defaultMinVal:m,defaultMaxVal:t,withFields:!g,formatLabel:"kr",step:10,onChange:C=>ie(e.name,e.id,typeof C=="object"?C:{min:0,max:0}),disabled:p}):n(x,{children:L(e).slice(0,F)}),L(e).length>F&&e.type!=="range"?s(x,{children:[n(P,{open:h,children:L(e).slice(F,L(e).length)}),s(ae,{alignItems:"center",justifyContent:"center",children:[h&&s(q.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>W(!1),className:l.showMoreButton,children:[n("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),n(M,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&s(q.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>W(!0),className:l.showMoreButton,children:[n("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),n(M,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${i}`)})]})})]})};try{T.displayName="DynamicFilter",T.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}}}}}catch{}const Te={title:"Design System/Molecules/Dynamic Filter",component:T},K=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],ne={render:c=>{const[v,_]=V.useState(),o=(g,I)=>{_(I)},p=V.useMemo(()=>K.filter(g=>v==null?void 0:v.find(I=>{var F;return(F=I.selectedOptions)==null?void 0:F.find(N=>{var S,D;return((S=N.name)==null?void 0:S.toLowerCase())===g.country||((D=N.name)==null?void 0:D.toLowerCase())===g.producer})})),[v]);return s(x,{children:[n(T,{onUpdate:o,title:"Filter",preSelected:c.preSelected??[],filters:c.filters}),n(ae,{flexDirection:"column",children:(p.length?p:K).map(g=>s("span",{style:{color:"blue"},children:[g.producer,", ",g.price,"kr"]},g.id))})]})}},w={...ne,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},B={...ne,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,U,ee;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(U=B.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};const je=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:w,Dynamic_Filter_With_Pre_Selected:B,__namedExportsOrder:je,default:Te},Symbol.toStringTag,{value:"Module"}));export{T as D,w as a,Ye as d};
