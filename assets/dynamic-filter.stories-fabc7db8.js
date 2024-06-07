import{r as V,a as s,j as l,F}from"./jsx-runtime-a3a6c0b8.js";import{D as fe}from"./drawer-sidebar-d3b36277.js";import{c as B}from"./index-a587463d.js";import{A as ve}from"./index-4058f88b.js";import{m as q}from"./motion-54668070.js";import{I as S}from"./icon-5fefd509.js";import{B as Y}from"./button-43643fd6.js";import{B as ge,A as pe}from"./below-b6d38995.js";import{E as P}from"./expandable-wrapper-5e4804ab.js";import{S as he}from"./slider-6554f103.js";import{F as te}from"./flex-container-145d4933.js";import{C as ye}from"./checkbox-f72ac4b8.js";import{R as Ve}from"./radio-button-ac06a94c.js";const _e="_dynamicFilter_11lng_1",be="_filterItem_11lng_5",ke="_filterName_11lng_18",xe="_filterItemIcon_11lng_23",Fe="_expandableWrapper_11lng_28",Ne="_showMoreButton_11lng_36",Ie="_showMoreLabel_11lng_48",Se="_checkboxItem_11lng_53",Me="_checkbox_11lng_53",we="_label_11lng_68",Be="_count_11lng_74",Ae="_radioItem_11lng_82",Ce="_radio_11lng_82",De="_filtersWrapper_11lng_112",Le="_selectedFilters_11lng_125",Oe="_filterButton_11lng_136",Te="_selectedFilter_11lng_125",je="_active_11lng_171",We="_clear_11lng_175",$e="_stickyResult_11lng_183",Ee="_removeAllBtn_11lng_212",n={dynamicFilter:_e,filterItem:be,filterName:ke,filterItemIcon:xe,expandableWrapper:Fe,showMoreButton:Ne,showMoreLabel:Ie,checkboxItem:Se,checkbox:Me,label:we,count:Be,radioItem:Ae,radio:Ce,filtersWrapper:De,selectedFilters:Le,filterButton:Oe,selectedFilter:Te,active:je,clear:We,stickyResult:$e,removeAllBtn:Ee},R=m=>{if(!m||!Array.isArray(m))return;const g=m==null?void 0:m.map(v=>Number(v.name)),_=Math.max(...g);return{min:Math.min(...g),max:Math.ceil(_/10)*10}},T=({filters:m,title:g,preSelected:_,onUpdate:o,loading:v,hideSliderFields:p,hideFilters:M,maxOptionsToShow:N=6,result:b})=>{var K;const[I,w]=V.useState(!1),[se,ce]=V.useState([]),[d,j]=V.useState(_??[]),[h,W]=V.useState(!1),[$,me]=V.useState(!1),oe=e=>{ce(i=>i.includes(e)?i.filter(a=>a!==e):[...i,e])},ue=(e,i,a)=>{E({name:i,value:`${i}_${a.min}-${a.max}`},i,!0)},E=(e,i,a)=>{j(u=>{var k;const r=u;let c=[];const t=r==null?void 0:r.find(y=>y.name===i);if(!t)c=[...r,{name:i,selectedOptions:[e]}];else{const y=(k=t.selectedOptions)==null?void 0:k.find(x=>x.name===e.name);c=[...r==null?void 0:r.map(x=>x.name===t.name?a?{...t,selectedOptions:[e]}:y?{...t,selectedOptions:t.selectedOptions.filter(L=>L.name!==y.name)}:{...t,selectedOptions:[...t.selectedOptions,e]}:x)]}const f=c.filter(y=>!!y.selectedOptions.length);return o==null||o(e,f),f})},de=(e,i)=>{j(a=>{const u=a,c=(u==null?void 0:u.map(t=>({...t,selectedOptions:t.selectedOptions.filter(f=>f.name!==e.name)}))).filter(t=>!!t.selectedOptions.length);return i?o==null||o({name:e.value,value:e.name},c):o==null||o(e,c),c})},H=()=>{j([]),o==null||o(void 0,[])},z=()=>w(!1);V.useEffect(()=>{I||W(!1)},[I]);const D=e=>{var i;return(i=e.options)==null?void 0:i.map((a,u)=>{var t;const r=d==null?void 0:d.find(f=>f.name===e.name),c=(t=r==null?void 0:r.selectedOptions)==null?void 0:t.find(f=>f.value===a.value);switch(e.type){case"radio":return s("button",{className:n.radioItem,onClick:()=>E(a,e.name,!0),disabled:v,children:[l(Ve,{checked:!!c,id:a.value,name:a.value,className:n.radio,disabled:v}),l("span",{className:n.label,children:a.name}),a.count&&l("span",{className:B(n.label,n.count),children:a.count})]},`${a.name}-${u}`);case"checkbox":default:return s("button",{className:n.checkboxItem,onClick:()=>E(a,e.name),disabled:v,children:[l(ye,{checked:!!c,id:a.value,name:a.value,className:n.checkbox,disabled:v}),l("span",{className:n.label,children:a.name}),a.count&&l("span",{className:B(n.label,n.count),children:a.count})]},`${a.name}-${u}`)}})},G=V.useMemo(()=>s("div",{className:n.selectedFilters,children:[d==null?void 0:d.map(e=>{var i;return(i=e.selectedOptions)==null?void 0:i.map((a,u)=>{let r=a.name;const c=m==null?void 0:m.find(t=>{var f;return t.type==="range"&&((f=t.options)==null?void 0:f.find(k=>k.value===a.name))});return c&&(r=c.name),l(ve,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:s(q.button,{className:B(n.selectedFilter,n.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>de(a,!!c),children:[l("span",{children:r}),l(S,{icon:"icon-x"})]})},`${a.value}-${u}`)})}),!!d.length&&l("button",{className:B(n.selectedFilter,n.clear),onClick:H,children:l(S,{icon:"icon-trash-2"})})]}),[d,m]),J=(K=d==null?void 0:d.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:K.length;return s(F,{children:[s("div",{className:n.filtersWrapper,children:[l(Y,{type:"button",surface:"x",size:"xx-small",onClick:()=>w(!0),className:n.filterButton,disabled:v,children:"Filtrera"}),!M&&d.length>0&&s(F,{children:[l(ge,{breakpoint:"md",children:e=>e&&s(F,{children:[l(Y,{type:"button",surface:"x",size:"xx-small",onClick:()=>me(!$),className:n.filterButton,iconRight:{icon:$?"icon-chevron-up":"icon-chevron-down"},children:J>0?`Valda filter (${J})`:"Valda filter"}),l(P,{open:$,children:G})]})}),l(pe,{breakpoint:"md",children:e=>e&&l(F,{children:G})})]})]}),s(fe,{isOpen:I,onClose:z,from:"left",width:"md",hideOverlay:!0,children:[s("div",{className:n.dynamicFilter,children:[g&&l("h4",{className:n.title,children:g}),m==null?void 0:m.map((e,i)=>{var k,y,x,L,Q,X;const a=se.includes(e.name),u=e.type==="range"?_==null?void 0:_.find(O=>O.name===e.id):void 0,r=(x=(y=(k=u==null?void 0:u.selectedOptions)==null?void 0:k[0])==null?void 0:y.value)==null?void 0:x.split("-"),c=r!=null&&r[0]?Number(r==null?void 0:r[0]):void 0,t=r!=null&&r[1]?Number(r==null?void 0:r[1]):void 0,f=(((L=R(e.options))==null?void 0:L.min)??0)>=10?((Q=R(e.options))==null?void 0:Q.min)??0:0;return s("div",{className:n.filterCategory,children:[s("button",{className:n.filterItem,onClick:()=>oe(e.name),children:[l("span",{className:n.filterName,children:e.name}),l(S,{className:n.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),s(P,{open:a,className:n.expandableWrapper,children:[e.type==="range"?l(he,{min:f,max:((X=R(e.options))==null?void 0:X.max)??10,defaultMinVal:c?c>=10?c:0:void 0,defaultMaxVal:t,withFields:!p,formatLabel:"kr",step:10,onChange:O=>ue(e.name,e.id,typeof O=="object"?O:{min:0,max:0}),disabled:v}):l(F,{children:D(e).slice(0,N)}),D(e).length>N&&e.type!=="range"?s(F,{children:[l(P,{open:h,children:D(e).slice(N,D(e).length)}),s(te,{alignItems:"center",justifyContent:"center",children:[h&&s(q.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>W(!1),className:n.showMoreButton,children:[l("span",{className:n.showMoreLabel,children:h?"Se mindre":"Se mer"}),l(S,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&s(q.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>W(!0),className:n.showMoreButton,children:[l("span",{className:n.showMoreLabel,children:h?"Se mindre":"Se mer"}),l(S,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${i}`)})]}),!!d.length&&l("button",{className:B(n.stickyResult,n.removeAllBtn),onClick:H,children:l(S,{icon:"icon-trash-2"})}),(b||b===0)&&l("button",{className:n.stickyResult,onClick:z,disabled:b===0,children:`Visa resultat (${b})`})]})]})};try{T.displayName="DynamicFilter",T.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}},result:{defaultValue:null,description:'If provided, a "show result (x)" button will be displayed at bottom of drawer',name:"result",required:!1,type:{name:"number"}}}}}catch{}const qe={title:"Design System/Molecules/Dynamic Filter",component:T},Z=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],ie={render:m=>{const[g,_]=V.useState(),o=(p,M)=>{_(M)},v=V.useMemo(()=>Z.filter(p=>g==null?void 0:g.find(M=>{var N;return(N=M.selectedOptions)==null?void 0:N.find(b=>{var I,w;return((I=b.name)==null?void 0:I.toLowerCase())===p.country||((w=b.name)==null?void 0:w.toLowerCase())===p.producer})})),[g]);return s(F,{children:[l(T,{onUpdate:o,title:"Filter",preSelected:m.preSelected??[],filters:m.filters}),l(te,{flexDirection:"column",children:(v.length?v:Z).map(p=>s("span",{style:{color:"blue"},children:[p.producer,", ",p.price,"kr"]},p.id))})]})}},A={...ie,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},C={...ie,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var U,ee,ae;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(ae=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,le,re;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(le=C.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};const Pe=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],na=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:A,Dynamic_Filter_With_Pre_Selected:C,__namedExportsOrder:Pe,default:qe},Symbol.toStringTag,{value:"Module"}));export{T as D,A as a,na as d};
