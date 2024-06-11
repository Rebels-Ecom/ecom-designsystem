import{r as V,a as s,j as a,F}from"./jsx-runtime-a3a6c0b8.js";import{D as fe}from"./drawer-sidebar-d3b36277.js";import{c as O}from"./index-a587463d.js";import{A as ve}from"./index-4058f88b.js";import{m as $}from"./motion-54668070.js";import{I as S}from"./icon-5fefd509.js";import{B as Y}from"./button-43643fd6.js";import{B as ge,A as pe}from"./below-b6d38995.js";import{E as q}from"./expandable-wrapper-5e4804ab.js";import{S as he}from"./slider-6554f103.js";import{F as te}from"./flex-container-145d4933.js";import{C as ye}from"./checkbox-f72ac4b8.js";const Ve="_dynamicFilter_11lng_1",_e="_filterItem_11lng_5",be="_filterName_11lng_18",ke="_filterItemIcon_11lng_23",xe="_expandableWrapper_11lng_28",Fe="_showMoreButton_11lng_36",Ne="_showMoreLabel_11lng_48",Ie="_checkboxItem_11lng_53",Se="_checkbox_11lng_53",Me="_label_11lng_68",we="_count_11lng_74",Be="_radioItem_11lng_82",Ae="_radio_11lng_82",Ce="_filtersWrapper_11lng_112",De="_selectedFilters_11lng_125",Le="_filterButton_11lng_136",Oe="_selectedFilter_11lng_125",Te="_active_11lng_171",je="_clear_11lng_175",We="_stickyResult_11lng_183",Ee="_removeAllBtn_11lng_212",l={dynamicFilter:Ve,filterItem:_e,filterName:be,filterItemIcon:ke,expandableWrapper:xe,showMoreButton:Fe,showMoreLabel:Ne,checkboxItem:Ie,checkbox:Se,label:Me,count:we,radioItem:Be,radio:Ae,filtersWrapper:Ce,selectedFilters:De,filterButton:Le,selectedFilter:Oe,active:Te,clear:je,stickyResult:We,removeAllBtn:Ee},P=c=>{if(!c||!Array.isArray(c))return;const v=c==null?void 0:c.map(g=>Number(g.name)),_=Math.max(...v);return{min:Math.min(...v),max:Math.ceil(_/10)*10}},T=({filters:c,title:v,preSelected:_,onUpdate:o,loading:g,hideSliderFields:p,hideFilters:M,maxOptionsToShow:N=6,result:b})=>{var K;const[I,w]=V.useState(!1),[se,ce]=V.useState([]),[u,j]=V.useState(_??[]),[h,W]=V.useState(!1),[E,me]=V.useState(!1),oe=e=>{ce(i=>i.includes(e)?i.filter(r=>r!==e):[...i,e])},ue=(e,i,r)=>{H({name:i,value:`${i}_${r.min}-${r.max}`},i,!0)},H=(e,i,r)=>{j(d=>{var k;const n=d;let m=[];const t=n==null?void 0:n.find(y=>y.name===i);if(!t)m=[...n,{name:i,selectedOptions:[e]}];else{const y=(k=t.selectedOptions)==null?void 0:k.find(x=>x.name===e.name);m=[...n==null?void 0:n.map(x=>x.name===t.name?r?{...t,selectedOptions:[e]}:y?{...t,selectedOptions:t.selectedOptions.filter(D=>D.name!==y.name)}:{...t,selectedOptions:[...t.selectedOptions,e]}:x)]}const f=m.filter(y=>!!y.selectedOptions.length);return o==null||o(e,f),f})},de=(e,i)=>{j(r=>{const d=r,m=(d==null?void 0:d.map(t=>({...t,selectedOptions:t.selectedOptions.filter(f=>f.name!==e.name)}))).filter(t=>!!t.selectedOptions.length);return i?o==null||o({name:e.value,value:e.name},m):o==null||o(e,m),m})},R=()=>{j([]),o==null||o(void 0,[])},z=()=>w(!1);V.useEffect(()=>{I||W(!1)},[I]);const C=e=>{var i;return(i=e.options)==null?void 0:i.map((r,d)=>{var t;const n=u==null?void 0:u.find(f=>f.name===e.name),m=(t=n==null?void 0:n.selectedOptions)==null?void 0:t.find(f=>f.value===r.value);switch(e.type){case"checkbox":case"radio":default:return s("button",{className:l.checkboxItem,onClick:()=>H(r,e.name),disabled:g,children:[a(ye,{checked:!!m,id:r.value,name:r.value,className:l.checkbox,disabled:g}),a("span",{className:l.label,children:r.name}),r.count&&a("span",{className:O(l.label,l.count),children:r.count})]},`${r.name}-${d}`)}})},G=V.useMemo(()=>s("div",{className:l.selectedFilters,children:[u==null?void 0:u.map(e=>{var i;return(i=e.selectedOptions)==null?void 0:i.map((r,d)=>{let n=r.name;const m=c==null?void 0:c.find(t=>{var f;return t.type==="range"&&((f=t.options)==null?void 0:f.find(k=>k.value===r.name))});return m&&(n=m.name),a(ve,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:s($.button,{className:O(l.selectedFilter,l.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>de(r,!!m),children:[a("span",{children:n}),a(S,{icon:"icon-x"})]})},`${r.value}-${d}`)})}),!!u.length&&a("button",{className:O(l.selectedFilter,l.clear),onClick:R,children:a(S,{icon:"icon-trash-2"})})]}),[u,c]),J=(K=u==null?void 0:u.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:K.length;return s(F,{children:[s("div",{className:l.filtersWrapper,children:[a(Y,{type:"button",surface:"x",size:"xx-small",onClick:()=>w(!0),className:l.filterButton,disabled:g,children:"Filtrera"}),!M&&u.length>0&&s(F,{children:[a(ge,{breakpoint:"md",children:e=>e&&s(F,{children:[a(Y,{type:"button",surface:"x",size:"xx-small",onClick:()=>me(!E),className:l.filterButton,iconRight:{icon:E?"icon-chevron-up":"icon-chevron-down"},children:J>0?`Valda filter (${J})`:"Valda filter"}),a(q,{open:E,children:G})]})}),a(pe,{breakpoint:"md",children:e=>e&&a(F,{children:G})})]})]}),s(fe,{isOpen:I,onClose:z,from:"left",width:"md",hideOverlay:!0,children:[s("div",{className:l.dynamicFilter,children:[v&&a("h4",{className:l.title,children:v}),c==null?void 0:c.map((e,i)=>{var k,y,x,D,Q,X;const r=se.includes(e.name),d=e.type==="range"?_==null?void 0:_.find(L=>L.name===e.id):void 0,n=(x=(y=(k=d==null?void 0:d.selectedOptions)==null?void 0:k[0])==null?void 0:y.value)==null?void 0:x.split("-"),m=n!=null&&n[0]?Number(n==null?void 0:n[0]):void 0,t=n!=null&&n[1]?Number(n==null?void 0:n[1]):void 0,f=(((D=P(e.options))==null?void 0:D.min)??0)>=10?((Q=P(e.options))==null?void 0:Q.min)??0:0;return s("div",{className:l.filterCategory,children:[s("button",{className:l.filterItem,onClick:()=>oe(e.name),children:[a("span",{className:l.filterName,children:e.name}),a(S,{className:l.filterItemIcon,icon:r?"icon-chevron-up":"icon-chevron-down"})]}),s(q,{open:r,className:l.expandableWrapper,children:[e.type==="range"?a(he,{min:f,max:((X=P(e.options))==null?void 0:X.max)??10,defaultMinVal:m?m>=10?m:0:void 0,defaultMaxVal:t,withFields:!p,formatLabel:"kr",step:10,onChange:L=>ue(e.name,e.id,typeof L=="object"?L:{min:0,max:0}),disabled:g}):a(F,{children:C(e).slice(0,N)}),C(e).length>N&&e.type!=="range"?s(F,{children:[a(q,{open:h,children:C(e).slice(N,C(e).length)}),s(te,{alignItems:"center",justifyContent:"center",children:[h&&s($.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>W(!1),className:l.showMoreButton,children:[a("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),a(S,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&s($.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>W(!0),className:l.showMoreButton,children:[a("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),a(S,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${i}`)})]}),!!u.length&&a("button",{className:O(l.stickyResult,l.removeAllBtn),onClick:R,children:a(S,{icon:"icon-trash-2"})}),(b||b===0)&&a("button",{className:l.stickyResult,onClick:z,disabled:b===0,children:`Visa resultat (${b})`})]})]})};try{T.displayName="DynamicFilter",T.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}},result:{defaultValue:null,description:'If provided, a "show result (x)" button will be displayed at bottom of drawer',name:"result",required:!1,type:{name:"number"}}}}}catch{}const $e={title:"Design System/Molecules/Dynamic Filter",component:T},Z=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],ie={render:c=>{const[v,_]=V.useState(),o=(p,M)=>{_(M)},g=V.useMemo(()=>Z.filter(p=>v==null?void 0:v.find(M=>{var N;return(N=M.selectedOptions)==null?void 0:N.find(b=>{var I,w;return((I=b.name)==null?void 0:I.toLowerCase())===p.country||((w=b.name)==null?void 0:w.toLowerCase())===p.producer})})),[v]);return s(F,{children:[a(T,{onUpdate:o,title:"Filter",preSelected:c.preSelected??[],filters:c.filters}),a(te,{flexDirection:"column",children:(g.length?g:Z).map(p=>s("span",{style:{color:"blue"},children:[p.producer,", ",p.price,"kr"]},p.id))})]})}},B={...ie,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},A={...ie,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var U,ee,ae;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(ae=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,le,re;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(le=A.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};const qe=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],ea=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:B,Dynamic_Filter_With_Pre_Selected:A,__namedExportsOrder:qe,default:$e},Symbol.toStringTag,{value:"Module"}));export{T as D,B as a,ea as d};
