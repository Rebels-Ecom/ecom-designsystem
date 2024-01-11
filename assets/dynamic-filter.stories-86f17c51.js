import{r as V,a as s,j as r,F as k}from"./jsx-runtime-a3a6c0b8.js";import{D as oe}from"./drawer-sidebar-b0bfef9e.js";import{c as T}from"./index-a587463d.js";import{A as ue}from"./index-4058f88b.js";import{m as q}from"./motion-54668070.js";import{I as M}from"./icon-5fefd509.js";import{B as G}from"./button-369dade1.js";import{B as de,A as fe}from"./below-e3c1f628.js";import{E as P}from"./expandable-wrapper-5e4804ab.js";import{S as ve}from"./slider-566dbf30.js";import{F as ae}from"./flex-container-145d4933.js";import{C as pe}from"./checkbox-45f9076c.js";import{R as ge}from"./radio-button-f4956d18.js";const he="_dynamicFilter_1fnr0_1",ye="_filterItem_1fnr0_4",Ve="_filterName_1fnr0_17",_e="_filterItemIcon_1fnr0_22",be="_expandableWrapper_1fnr0_27",ke="_showMoreButton_1fnr0_35",xe="_showMoreLabel_1fnr0_47",Fe="_checkboxItem_1fnr0_52",Ne="_checkbox_1fnr0_52",Ie="_label_1fnr0_67",Se="_count_1fnr0_73",Me="_radioItem_1fnr0_81",we="_radio_1fnr0_81",Be="_filtersWrapper_1fnr0_111",De="_selectedFilters_1fnr0_122",Le="_filterButton_1fnr0_133",Oe="_selectedFilter_1fnr0_122",Ce="_active_1fnr0_168",Te="_clear_1fnr0_172",l={dynamicFilter:he,filterItem:ye,filterName:Ve,filterItemIcon:_e,expandableWrapper:be,showMoreButton:ke,showMoreLabel:xe,checkboxItem:Fe,checkbox:Ne,label:Ie,count:Se,radioItem:Me,radio:we,filtersWrapper:Be,selectedFilters:De,filterButton:Le,selectedFilter:Oe,active:Ce,clear:Te},J=c=>{if(!c||!Array.isArray(c))return;const v=c==null?void 0:c.map(p=>Number(p.name)),_=Math.max(...v);return{min:Math.min(...v),max:Math.ceil(_/10)*10}},A=({filters:c,title:v,preSelected:_,onUpdate:o,loading:p,hideSliderFields:g,hideFilters:N,maxOptionsToShow:x=6})=>{var z;const[F,I]=V.useState(!1),[D,re]=V.useState([]),[u,j]=V.useState(_??[]),[h,W]=V.useState(!1),[E,le]=V.useState(!1),te=e=>{re(t=>t.includes(e)?t.filter(a=>a!==e):[...t,e])},ie=(e,t,a)=>{$({name:t,value:`${t}_${a.min}-${a.max}`},e,!0)},$=(e,t,a)=>{j(d=>{var S;const n=d;let m=[];const i=n==null?void 0:n.find(y=>y.name===t);if(!i)m=[...n,{name:t,selectedOptions:[e]}];else{const y=(S=i.selectedOptions)==null?void 0:S.find(b=>b.name===e.name);m=[...n==null?void 0:n.map(b=>b.name===i.name?a?{...i,selectedOptions:[e]}:y?{...i,selectedOptions:i.selectedOptions.filter(O=>O.name!==y.name)}:{...i,selectedOptions:[...i.selectedOptions,e]}:b)]}const f=m.filter(y=>!!y.selectedOptions.length);return o==null||o(e,f),f})},se=e=>{j(t=>{const a=t,n=(a==null?void 0:a.map(m=>({...m,selectedOptions:m.selectedOptions.filter(i=>i.name!==e.name)}))).filter(m=>!!m.selectedOptions.length);return o==null||o(e,n),n})},ce=()=>{j([]),o==null||o(void 0,[])},me=()=>I(!1);V.useEffect(()=>{F||W(!1)},[F]);const L=e=>{var t;return(t=e.options)==null?void 0:t.map((a,d)=>{var i;const n=u==null?void 0:u.find(f=>f.name===e.name),m=(i=n==null?void 0:n.selectedOptions)==null?void 0:i.find(f=>f.value===a.value);switch(e.type){case"radio":return s("button",{className:l.radioItem,onClick:()=>$(a,e.name,!0),disabled:p,children:[r(ge,{checked:!!m,id:a.value,name:a.value,className:l.radio,disabled:p}),r("span",{className:l.label,children:a.name}),a.count&&r("span",{className:T(l.label,l.count),children:a.count})]},`${a.name}-${d}`);case"checkbox":default:return s("button",{className:l.checkboxItem,onClick:()=>$(a,e.name),disabled:p,children:[r(pe,{checked:!!m,id:a.value,name:a.value,className:l.checkbox,disabled:p}),r("span",{className:l.label,children:a.name}),a.count&&r("span",{className:T(l.label,l.count),children:a.count})]},`${a.name}-${d}`)}})},H=V.useMemo(()=>s("div",{className:l.selectedFilters,children:[u==null?void 0:u.map(e=>{var t;return(t=e.selectedOptions)==null?void 0:t.map((a,d)=>{let n=a.name;return c!=null&&c.find(m=>{var i;return m.type==="range"&&((i=m.options)==null?void 0:i.find(f=>f.value===a.name))})&&(n=e.name),r(ue,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:s(q.button,{className:T(l.selectedFilter,l.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>se(a),children:[r("span",{children:n}),r(M,{icon:"icon-x"})]})},`${a.value}-${d}`)})}),!!u.length&&r("button",{className:T(l.selectedFilter,l.clear),onClick:ce,children:r(M,{icon:"icon-trash-2"})})]}),[u,c]),R=(z=u==null?void 0:u.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:z.length;return s(k,{children:[s("div",{className:l.filtersWrapper,children:[r(G,{type:"button",surface:"x",size:"xx-small",onClick:()=>I(!0),className:l.filterButton,children:"Filtrera"}),!N&&u.length>0&&s(k,{children:[r(de,{breakpoint:"md",children:e=>e&&s(k,{children:[r(G,{type:"button",surface:"x",size:"xx-small",onClick:()=>le(!E),className:l.filterButton,iconRight:{icon:E?"icon-chevron-up":"icon-chevron-down"},children:R>0?`Valda filter (${R})`:"Valda filter"}),r(P,{open:E,children:H})]})}),r(fe,{breakpoint:"md",children:e=>e&&r(k,{children:H})})]})]}),r(oe,{isOpen:F,onClose:me,from:"left",width:"md",hideOverlay:!0,children:s("div",{className:l.dynamicFilter,children:[v&&r("h4",{className:l.title,children:v}),c==null?void 0:c.map((e,t)=>{var f,S,y,b,O;const a=D.includes(e.name),d=e.type==="range"?_==null?void 0:_.find(C=>C.name===e.name):void 0,n=(y=(S=(f=d==null?void 0:d.selectedOptions)==null?void 0:f[0])==null?void 0:S.value)==null?void 0:y.split("-"),m=n!=null&&n[0]?Number(n==null?void 0:n[0]):void 0,i=n!=null&&n[1]?Number(n==null?void 0:n[1]):void 0;return s("div",{className:l.filterCategory,children:[s("button",{className:l.filterItem,onClick:()=>te(e.name),children:[r("span",{className:l.filterName,children:e.name}),r(M,{className:l.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),s(P,{open:a,className:l.expandableWrapper,children:[e.type==="range"?r(ve,{min:((b=J(e.options))==null?void 0:b.min)??0,max:((O=J(e.options))==null?void 0:O.max)??10,defaultMinVal:m,defaultMaxVal:i,withFields:!g,formatLabel:"kr",step:10,onChange:C=>ie(e.name,e.id,typeof C=="object"?C:{min:0,max:0}),disabled:p}):r(k,{children:L(e).slice(0,x)}),L(e).length>x&&e.type!=="range"?s(k,{children:[r(P,{open:h,children:L(e).slice(x,L(e).length)}),s(ae,{alignItems:"center",justifyContent:"center",children:[h&&s(q.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>W(!1),className:l.showMoreButton,children:[r("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),r(M,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&s(q.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>W(!0),className:l.showMoreButton,children:[r("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),r(M,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${t}`)})]})})]})};try{A.displayName="DynamicFilter",A.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}}}}}catch{}const Ae={title:"Design System/Molecules/Dynamic Filter",component:A},K=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],ne={render:c=>{const[v,_]=V.useState(),o=(g,N)=>{_(N)},p=V.useMemo(()=>K.filter(g=>v==null?void 0:v.find(N=>{var x;return(x=N.selectedOptions)==null?void 0:x.find(F=>{var I,D;return((I=F.name)==null?void 0:I.toLowerCase())===g.country||((D=F.name)==null?void 0:D.toLowerCase())===g.producer})})),[v]);return s(k,{children:[r(A,{onUpdate:o,title:"Filter",preSelected:c.preSelected??[],filters:c.filters}),r(ae,{flexDirection:"column",children:(p.length?p:K).map(g=>s("span",{style:{color:"blue"},children:[g.producer,", ",g.price,"kr"]},g.id))})]})}},w={...ne,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},B={...ne,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(U=B.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};const je=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:w,Dynamic_Filter_With_Pre_Selected:B,__namedExportsOrder:je,default:Ae},Symbol.toStringTag,{value:"Module"}));export{A as D,w as a,Ye as d};
