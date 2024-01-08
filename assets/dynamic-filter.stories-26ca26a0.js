import{r as b,a as s,j as l,F as k}from"./jsx-runtime-a3a6c0b8.js";import{D as ce}from"./drawer-sidebar-d15cb52b.js";import{c as z}from"./index-a587463d.js";import{A as ue}from"./index-4058f88b.js";import{m as $}from"./motion-54668070.js";import{I as M}from"./icon-5fefd509.js";import{B as G}from"./button-3cce3bbf.js";import{B as de,A as fe}from"./below-e3c1f628.js";import{E as q}from"./expandable-wrapper-5e4804ab.js";import{S as ve}from"./slider-26585f7f.js";import{F as ae}from"./flex-container-145d4933.js";import{C as pe}from"./checkbox-45f9076c.js";import{R as ge}from"./radio-button-f4956d18.js";const he="_dynamicFilter_1ndbo_1",ye="_filterItem_1ndbo_4",be="_filterName_1ndbo_17",Ve="_filterItemIcon_1ndbo_21",_e="_expandableWrapper_1ndbo_26",ke="_showMoreButton_1ndbo_34",xe="_showMoreLabel_1ndbo_46",Fe="_checkboxItem_1ndbo_51",Ne="_checkbox_1ndbo_51",Ie="_label_1ndbo_66",Se="_radioItem_1ndbo_71",Me="_radio_1ndbo_71",we="_filtersWrapper_1ndbo_95",Be="_selectedFilters_1ndbo_106",De="_filterButton_1ndbo_117",Le="_selectedFilter_1ndbo_106",Oe="_active_1ndbo_152",Ce="_clear_1ndbo_156",r={dynamicFilter:he,filterItem:ye,filterName:be,filterItemIcon:Ve,expandableWrapper:_e,showMoreButton:ke,showMoreLabel:xe,checkboxItem:Fe,checkbox:Ne,label:Ie,radioItem:Se,radio:Me,filtersWrapper:we,selectedFilters:Be,filterButton:De,selectedFilter:Le,active:Oe,clear:Ce},J=m=>{if(!m||!Array.isArray(m))return;const v=m==null?void 0:m.map(p=>Number(p.name)),V=Math.max(...v);return{min:Math.min(...v),max:Math.ceil(V/10)*10}},T=({filters:m,title:v,preSelected:V,onUpdate:c,loading:p,hideSliderFields:g,hideFilters:N,maxOptionsToShow:x=6})=>{var R;const[F,I]=b.useState(!1),[D,le]=b.useState([]),[u,A]=b.useState(V??[]),[h,j]=b.useState(!1),[W,re]=b.useState(!1),te=e=>{le(t=>t.includes(e)?t.filter(a=>a!==e):[...t,e])},ie=(e,t,a)=>{E({name:t,value:`${t}_${a.min}-${a.max}`},e,!0)},E=(e,t,a)=>{A(d=>{var S;const n=d;let o=[];const i=n==null?void 0:n.find(y=>y.name===t);if(!i)o=[...n,{name:t,selectedOptions:[e]}];else{const y=(S=i.selectedOptions)==null?void 0:S.find(_=>_.name===e.name);o=[...n==null?void 0:n.map(_=>_.name===i.name?a?{...i,selectedOptions:[e]}:y?{...i,selectedOptions:i.selectedOptions.filter(O=>O.name!==y.name)}:{...i,selectedOptions:[...i.selectedOptions,e]}:_)]}const f=o.filter(y=>!!y.selectedOptions.length);return c==null||c(e,f),f})},se=e=>{A(t=>{const a=t,n=(a==null?void 0:a.map(o=>({...o,selectedOptions:o.selectedOptions.filter(i=>i.name!==e.name)}))).filter(o=>!!o.selectedOptions.length);return c==null||c(e,n),n})},me=()=>{A([]),c==null||c(void 0,[])},oe=()=>I(!1);b.useEffect(()=>{F||j(!1)},[F]);const L=e=>{var t;return(t=e.options)==null?void 0:t.map((a,d)=>{var i;const n=u==null?void 0:u.find(f=>f.name===e.name),o=(i=n==null?void 0:n.selectedOptions)==null?void 0:i.find(f=>f.value===a.value);switch(e.type){case"radio":return s("button",{className:r.radioItem,onClick:()=>E(a,e.name,!0),disabled:p,children:[l(ge,{checked:!!o,id:a.value,name:a.value,className:r.radio,disabled:p}),l("span",{className:r.label,children:a.name})]},`${a.name}-${d}`);case"checkbox":default:return s("button",{className:r.checkboxItem,onClick:()=>E(a,e.name),disabled:p,children:[l(pe,{checked:!!o,id:a.value,name:a.value,className:r.checkbox,disabled:p}),l("span",{className:r.label,children:a.name})]},`${a.name}-${d}`)}})},P=b.useMemo(()=>s("div",{className:r.selectedFilters,children:[u==null?void 0:u.map(e=>{var t;return(t=e.selectedOptions)==null?void 0:t.map((a,d)=>{let n=a.name;return m!=null&&m.find(o=>{var i;return o.type==="range"&&((i=o.options)==null?void 0:i.find(f=>f.value===a.name))})&&(n=e.name),l(ue,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:s($.button,{className:z(r.selectedFilter,r.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>se(a),children:[l("span",{children:n}),l(M,{icon:"icon-x"})]},`${a.value}-${d}`)})})}),!!u.length&&l("button",{className:z(r.selectedFilter,r.clear),onClick:me,children:l(M,{icon:"icon-trash-2"})})]}),[u,m]),H=(R=u==null?void 0:u.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:R.length;return s(k,{children:[s("div",{className:r.filtersWrapper,children:[l(G,{type:"button",surface:"x",size:"xx-small",onClick:()=>I(!0),className:r.filterButton,children:"Filtrera"}),!N&&u.length>0&&s(k,{children:[l(de,{breakpoint:"md",children:e=>e&&s(k,{children:[l(G,{type:"button",surface:"x",size:"xx-small",onClick:()=>re(!W),className:r.filterButton,iconRight:{icon:W?"icon-chevron-up":"icon-chevron-down"},children:H>0?`Valda filter (${H})`:"Valda filter"}),l(q,{open:W,children:P})]})}),l(fe,{breakpoint:"md",children:e=>e&&l(k,{children:P})})]})]}),l(ce,{isOpen:F,onClose:oe,from:"left",width:"md",hideOverlay:!0,children:s("div",{className:r.dynamicFilter,children:[v&&l("h4",{className:r.title,children:v}),m==null?void 0:m.map((e,t)=>{var f,S,y,_,O;const a=D.includes(e.name),d=e.type==="range"?V==null?void 0:V.find(C=>C.name===e.name):void 0,n=(y=(S=(f=d==null?void 0:d.selectedOptions)==null?void 0:f[0])==null?void 0:S.value)==null?void 0:y.split("-"),o=n!=null&&n[0]?Number(n==null?void 0:n[0]):void 0,i=n!=null&&n[1]?Number(n==null?void 0:n[1]):void 0;return s("div",{className:r.filterCategory,children:[s("button",{className:r.filterItem,onClick:()=>te(e.name),children:[l("span",{className:r.filterName,children:e.name}),l(M,{className:r.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),s(q,{open:a,className:r.expandableWrapper,children:[e.type==="range"?l(ve,{min:((_=J(e.options))==null?void 0:_.min)??0,max:((O=J(e.options))==null?void 0:O.max)??10,defaultMinVal:o,defaultMaxVal:i,withFields:!g,formatLabel:"kr",step:10,onChange:C=>ie(e.name,e.id,typeof C=="object"?C:{min:0,max:0}),disabled:p}):l(k,{children:L(e).slice(0,x)}),L(e).length>x&&e.type!=="range"?s(k,{children:[l(q,{open:h,children:L(e).slice(x,L(e).length)}),s(ae,{alignItems:"center",justifyContent:"center",children:[h&&s($.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>j(!1),className:r.showMoreButton,children:[l("span",{className:r.showMoreLabel,children:h?"Se mindre":"Se mer"}),l(M,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&s($.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>j(!0),className:r.showMoreButton,children:[l("span",{className:r.showMoreLabel,children:h?"Se mindre":"Se mer"}),l(M,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${t}`)})]})})]})};try{T.displayName="DynamicFilter",T.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}}}}}catch{}const Te={title:"Design System/Molecules/Dynamic Filter",component:T},K=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],ne={render:m=>{const[v,V]=b.useState(),c=(g,N)=>{V(N)},p=b.useMemo(()=>K.filter(g=>v==null?void 0:v.find(N=>{var x;return(x=N.selectedOptions)==null?void 0:x.find(F=>{var I,D;return((I=F.name)==null?void 0:I.toLowerCase())===g.country||((D=F.name)==null?void 0:D.toLowerCase())===g.producer})})),[v]);return s(k,{children:[l(T,{onUpdate:c,title:"Filter",preSelected:m.preSelected??[],filters:m.filters}),l(ae,{flexDirection:"column",children:(p.length?p:K).map(g=>s("span",{style:{color:"blue"},children:[g.producer,", ",g.price,"kr"]},g.id))})]})}},w={...ne,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},B={...ne,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(U=B.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};const Ae=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:w,Dynamic_Filter_With_Pre_Selected:B,__namedExportsOrder:Ae,default:Te},Symbol.toStringTag,{value:"Module"}));export{T as D,w as a,Xe as d};
