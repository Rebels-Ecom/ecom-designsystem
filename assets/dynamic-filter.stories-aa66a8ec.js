import{r as V,a as s,j as l,F}from"./jsx-runtime-a3a6c0b8.js";import{D as fe}from"./drawer-sidebar-b0bfef9e.js";import{c as A}from"./index-a587463d.js";import{A as ve}from"./index-4058f88b.js";import{m as q}from"./motion-54668070.js";import{I as w}from"./icon-5fefd509.js";import{B as X}from"./button-369dade1.js";import{B as pe,A as ge}from"./below-b6d38995.js";import{E as P}from"./expandable-wrapper-5e4804ab.js";import{S as he}from"./slider-035ade36.js";import{F as re}from"./flex-container-145d4933.js";import{C as ye}from"./checkbox-9e8e27d1.js";import{R as Ve}from"./radio-button-f4956d18.js";const ke="_dynamicFilter_8koxe_1",_e="_filterItem_8koxe_5",be="_filterName_8koxe_18",xe="_filterItemIcon_8koxe_23",Fe="_expandableWrapper_8koxe_28",Ne="_showMoreButton_8koxe_36",Ie="_showMoreLabel_8koxe_48",Se="_checkboxItem_8koxe_53",Me="_checkbox_8koxe_53",we="_label_8koxe_68",Be="_count_8koxe_74",Ce="_radioItem_8koxe_82",De="_radio_8koxe_82",Le="_filtersWrapper_8koxe_112",Oe="_selectedFilters_8koxe_125",Ae="_filterButton_8koxe_136",Te="_selectedFilter_8koxe_125",je="_active_8koxe_171",We="_clear_8koxe_175",$e="_stickyResult_8koxe_183",n={dynamicFilter:ke,filterItem:_e,filterName:be,filterItemIcon:xe,expandableWrapper:Fe,showMoreButton:Ne,showMoreLabel:Ie,checkboxItem:Se,checkbox:Me,label:we,count:Be,radioItem:Ce,radio:De,filtersWrapper:Le,selectedFilters:Oe,filterButton:Ae,selectedFilter:Te,active:je,clear:We,stickyResult:$e},R=m=>{if(!m||!Array.isArray(m))return;const v=m==null?void 0:m.map(p=>Number(p.name)),k=Math.max(...v);return{min:Math.min(...v),max:Math.ceil(k/10)*10}},T=({filters:m,title:v,preSelected:k,onUpdate:o,loading:p,hideSliderFields:g,hideFilters:S,maxOptionsToShow:N=6,result:_})=>{var J;const[I,M]=V.useState(!1),[ie,se]=V.useState([]),[f,j]=V.useState(k??[]),[h,W]=V.useState(!1),[$,ce]=V.useState(!1),me=e=>{se(i=>i.includes(e)?i.filter(a=>a!==e):[...i,e])},oe=(e,i,a)=>{E({name:i,value:`${i}_${a.min}-${a.max}`},i,!0)},E=(e,i,a)=>{j(u=>{var b;const r=u;let c=[];const t=r==null?void 0:r.find(y=>y.name===i);if(!t)c=[...r,{name:i,selectedOptions:[e]}];else{const y=(b=t.selectedOptions)==null?void 0:b.find(x=>x.name===e.name);c=[...r==null?void 0:r.map(x=>x.name===t.name?a?{...t,selectedOptions:[e]}:y?{...t,selectedOptions:t.selectedOptions.filter(L=>L.name!==y.name)}:{...t,selectedOptions:[...t.selectedOptions,e]}:x)]}const d=c.filter(y=>!!y.selectedOptions.length);return o==null||o(e,d),d})},ue=(e,i)=>{j(a=>{const u=a,c=(u==null?void 0:u.map(t=>({...t,selectedOptions:t.selectedOptions.filter(d=>d.name!==e.name)}))).filter(t=>!!t.selectedOptions.length);return i?o==null||o({name:e.value,value:e.name},c):o==null||o(e,c),c})},de=()=>{j([]),o==null||o(void 0,[])},H=()=>M(!1);V.useEffect(()=>{I||W(!1)},[I]);const D=e=>{var i;return(i=e.options)==null?void 0:i.map((a,u)=>{var t;const r=f==null?void 0:f.find(d=>d.name===e.name),c=(t=r==null?void 0:r.selectedOptions)==null?void 0:t.find(d=>d.value===a.value);switch(e.type){case"radio":return s("button",{className:n.radioItem,onClick:()=>E(a,e.name,!0),disabled:p,children:[l(Ve,{checked:!!c,id:a.value,name:a.value,className:n.radio,disabled:p}),l("span",{className:n.label,children:a.name}),a.count&&l("span",{className:A(n.label,n.count),children:a.count})]},`${a.name}-${u}`);case"checkbox":default:return s("button",{className:n.checkboxItem,onClick:()=>E(a,e.name),disabled:p,children:[l(ye,{checked:!!c,id:a.value,name:a.value,className:n.checkbox,disabled:p}),l("span",{className:n.label,children:a.name}),a.count&&l("span",{className:A(n.label,n.count),children:a.count})]},`${a.name}-${u}`)}})},z=V.useMemo(()=>s("div",{className:n.selectedFilters,children:[f==null?void 0:f.map(e=>{var i;return(i=e.selectedOptions)==null?void 0:i.map((a,u)=>{let r=a.name;const c=m==null?void 0:m.find(t=>{var d;return t.type==="range"&&((d=t.options)==null?void 0:d.find(b=>b.value===a.name))});return c&&(r=c.name),l(ve,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:s(q.button,{className:A(n.selectedFilter,n.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>ue(a,!!c),children:[l("span",{children:r}),l(w,{icon:"icon-x"})]})},`${a.value}-${u}`)})}),!!f.length&&l("button",{className:A(n.selectedFilter,n.clear),onClick:de,children:l(w,{icon:"icon-trash-2"})})]}),[f,m]),G=(J=f==null?void 0:f.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:J.length;return s(F,{children:[s("div",{className:n.filtersWrapper,children:[l(X,{type:"button",surface:"x",size:"xx-small",onClick:()=>M(!0),className:n.filterButton,children:"Filtrera"}),!S&&f.length>0&&s(F,{children:[l(pe,{breakpoint:"md",children:e=>e&&s(F,{children:[l(X,{type:"button",surface:"x",size:"xx-small",onClick:()=>ce(!$),className:n.filterButton,iconRight:{icon:$?"icon-chevron-up":"icon-chevron-down"},children:G>0?`Valda filter (${G})`:"Valda filter"}),l(P,{open:$,children:z})]})}),l(ge,{breakpoint:"md",children:e=>e&&l(F,{children:z})})]})]}),s(fe,{isOpen:I,onClose:H,from:"left",width:"md",hideOverlay:!0,children:[s("div",{className:n.dynamicFilter,children:[v&&l("h4",{className:n.title,children:v}),m==null?void 0:m.map((e,i)=>{var b,y,x,L,K,Q;const a=ie.includes(e.name),u=e.type==="range"?k==null?void 0:k.find(O=>O.name===e.id):void 0,r=(x=(y=(b=u==null?void 0:u.selectedOptions)==null?void 0:b[0])==null?void 0:y.value)==null?void 0:x.split("-"),c=r!=null&&r[0]?Number(r==null?void 0:r[0]):void 0,t=r!=null&&r[1]?Number(r==null?void 0:r[1]):void 0,d=(((L=R(e.options))==null?void 0:L.min)??0)>=10?((K=R(e.options))==null?void 0:K.min)??0:0;return s("div",{className:n.filterCategory,children:[s("button",{className:n.filterItem,onClick:()=>me(e.name),children:[l("span",{className:n.filterName,children:e.name}),l(w,{className:n.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),s(P,{open:a,className:n.expandableWrapper,children:[e.type==="range"?l(he,{min:d,max:((Q=R(e.options))==null?void 0:Q.max)??10,defaultMinVal:c?c>=10?c:0:void 0,defaultMaxVal:t,withFields:!g,formatLabel:"kr",step:10,onChange:O=>oe(e.name,e.id,typeof O=="object"?O:{min:0,max:0}),disabled:p}):l(F,{children:D(e).slice(0,N)}),D(e).length>N&&e.type!=="range"?s(F,{children:[l(P,{open:h,children:D(e).slice(N,D(e).length)}),s(re,{alignItems:"center",justifyContent:"center",children:[h&&s(q.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>W(!1),className:n.showMoreButton,children:[l("span",{className:n.showMoreLabel,children:h?"Se mindre":"Se mer"}),l(w,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&s(q.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>W(!0),className:n.showMoreButton,children:[l("span",{className:n.showMoreLabel,children:h?"Se mindre":"Se mer"}),l(w,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${i}`)})]}),(_||_===0)&&l("button",{className:n.stickyResult,onClick:H,disabled:_===0,children:`Visa resultat (${_})`})]})]})};try{T.displayName="DynamicFilter",T.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}},result:{defaultValue:null,description:'If provided, a "show result (x)" button will be displayed at bottom of drawer',name:"result",required:!1,type:{name:"number"}}}}}catch{}const Ee={title:"Design System/Molecules/Dynamic Filter",component:T},Y=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],te={render:m=>{const[v,k]=V.useState(),o=(g,S)=>{k(S)},p=V.useMemo(()=>Y.filter(g=>v==null?void 0:v.find(S=>{var N;return(N=S.selectedOptions)==null?void 0:N.find(_=>{var I,M;return((I=_.name)==null?void 0:I.toLowerCase())===g.country||((M=_.name)==null?void 0:M.toLowerCase())===g.producer})})),[v]);return s(F,{children:[l(T,{onUpdate:o,title:"Filter",preSelected:m.preSelected??[],filters:m.filters}),l(re,{flexDirection:"column",children:(p.length?p:Y).map(g=>s("span",{style:{color:"blue"},children:[g.producer,", ",g.price,"kr"]},g.id))})]})}},B={...te,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},C={...te,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var Z,U,ee;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(U=B.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};var ae,ne,le;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const qe=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],aa=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:B,Dynamic_Filter_With_Pre_Selected:C,__namedExportsOrder:qe,default:Ee},Symbol.toStringTag,{value:"Module"}));export{T as D,B as a,aa as d};
