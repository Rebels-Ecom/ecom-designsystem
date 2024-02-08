import{r as V,a as c,j as n,F as x}from"./jsx-runtime-a3a6c0b8.js";import{D as de}from"./drawer-sidebar-b0bfef9e.js";import{c as A}from"./index-a587463d.js";import{A as fe}from"./index-4058f88b.js";import{m as q}from"./motion-54668070.js";import{I as M}from"./icon-5fefd509.js";import{B as Q}from"./button-369dade1.js";import{B as ve,A as pe}from"./below-b6d38995.js";import{E as P}from"./expandable-wrapper-5e4804ab.js";import{S as ge}from"./slider-035ade36.js";import{F as le}from"./flex-container-145d4933.js";import{C as he}from"./checkbox-9e8e27d1.js";import{R as ye}from"./radio-button-f4956d18.js";const Ve="_dynamicFilter_1fnr0_1",_e="_filterItem_1fnr0_4",be="_filterName_1fnr0_17",ke="_filterItemIcon_1fnr0_22",xe="_expandableWrapper_1fnr0_27",Fe="_showMoreButton_1fnr0_35",Ne="_showMoreLabel_1fnr0_47",Ie="_checkboxItem_1fnr0_52",Se="_checkbox_1fnr0_52",Me="_label_1fnr0_67",we="_count_1fnr0_73",Be="_radioItem_1fnr0_81",De="_radio_1fnr0_81",Le="_filtersWrapper_1fnr0_111",Oe="_selectedFilters_1fnr0_122",Ce="_filterButton_1fnr0_133",Ae="_selectedFilter_1fnr0_122",Te="_active_1fnr0_168",je="_clear_1fnr0_172",l={dynamicFilter:Ve,filterItem:_e,filterName:be,filterItemIcon:ke,expandableWrapper:xe,showMoreButton:Fe,showMoreLabel:Ne,checkboxItem:Ie,checkbox:Se,label:Me,count:we,radioItem:Be,radio:De,filtersWrapper:Le,selectedFilters:Oe,filterButton:Ce,selectedFilter:Ae,active:Te,clear:je},H=m=>{if(!m||!Array.isArray(m))return;const v=m==null?void 0:m.map(p=>Number(p.name)),_=Math.max(...v);return{min:Math.min(...v),max:Math.ceil(_/10)*10}},T=({filters:m,title:v,preSelected:_,onUpdate:o,loading:p,hideSliderFields:g,hideFilters:I,maxOptionsToShow:F=6})=>{var G;const[N,S]=V.useState(!1),[D,te]=V.useState([]),[f,j]=V.useState(_??[]),[h,W]=V.useState(!1),[E,ie]=V.useState(!1),se=e=>{te(i=>i.includes(e)?i.filter(a=>a!==e):[...i,e])},ce=(e,i,a)=>{$({name:i,value:`${i}_${a.min}-${a.max}`},i,!0)},$=(e,i,a)=>{j(u=>{var b;const r=u;let s=[];const t=r==null?void 0:r.find(y=>y.name===i);if(!t)s=[...r,{name:i,selectedOptions:[e]}];else{const y=(b=t.selectedOptions)==null?void 0:b.find(k=>k.name===e.name);s=[...r==null?void 0:r.map(k=>k.name===t.name?a?{...t,selectedOptions:[e]}:y?{...t,selectedOptions:t.selectedOptions.filter(O=>O.name!==y.name)}:{...t,selectedOptions:[...t.selectedOptions,e]}:k)]}const d=s.filter(y=>!!y.selectedOptions.length);return o==null||o(e,d),d})},me=(e,i)=>{j(a=>{const u=a,s=(u==null?void 0:u.map(t=>({...t,selectedOptions:t.selectedOptions.filter(d=>d.name!==e.name)}))).filter(t=>!!t.selectedOptions.length);return i?o==null||o({name:e.value,value:e.name},s):o==null||o(e,s),s})},oe=()=>{j([]),o==null||o(void 0,[])},ue=()=>S(!1);V.useEffect(()=>{N||W(!1)},[N]);const L=e=>{var i;return(i=e.options)==null?void 0:i.map((a,u)=>{var t;const r=f==null?void 0:f.find(d=>d.name===e.name),s=(t=r==null?void 0:r.selectedOptions)==null?void 0:t.find(d=>d.value===a.value);switch(e.type){case"radio":return c("button",{className:l.radioItem,onClick:()=>$(a,e.name,!0),disabled:p,children:[n(ye,{checked:!!s,id:a.value,name:a.value,className:l.radio,disabled:p}),n("span",{className:l.label,children:a.name}),a.count&&n("span",{className:A(l.label,l.count),children:a.count})]},`${a.name}-${u}`);case"checkbox":default:return c("button",{className:l.checkboxItem,onClick:()=>$(a,e.name),disabled:p,children:[n(he,{checked:!!s,id:a.value,name:a.value,className:l.checkbox,disabled:p}),n("span",{className:l.label,children:a.name}),a.count&&n("span",{className:A(l.label,l.count),children:a.count})]},`${a.name}-${u}`)}})},R=V.useMemo(()=>c("div",{className:l.selectedFilters,children:[f==null?void 0:f.map(e=>{var i;return(i=e.selectedOptions)==null?void 0:i.map((a,u)=>{let r=a.name;const s=m==null?void 0:m.find(t=>{var d;return t.type==="range"&&((d=t.options)==null?void 0:d.find(b=>b.value===a.name))});return s&&(r=s.name),n(fe,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:c(q.button,{className:A(l.selectedFilter,l.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>me(a,!!s),children:[n("span",{children:r}),n(M,{icon:"icon-x"})]})},`${a.value}-${u}`)})}),!!f.length&&n("button",{className:A(l.selectedFilter,l.clear),onClick:oe,children:n(M,{icon:"icon-trash-2"})})]}),[f,m]),z=(G=f==null?void 0:f.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:G.length;return c(x,{children:[c("div",{className:l.filtersWrapper,children:[n(Q,{type:"button",surface:"x",size:"xx-small",onClick:()=>S(!0),className:l.filterButton,children:"Filtrera"}),!I&&f.length>0&&c(x,{children:[n(ve,{breakpoint:"md",children:e=>e&&c(x,{children:[n(Q,{type:"button",surface:"x",size:"xx-small",onClick:()=>ie(!E),className:l.filterButton,iconRight:{icon:E?"icon-chevron-up":"icon-chevron-down"},children:z>0?`Valda filter (${z})`:"Valda filter"}),n(P,{open:E,children:R})]})}),n(pe,{breakpoint:"md",children:e=>e&&n(x,{children:R})})]})]}),n(de,{isOpen:N,onClose:ue,from:"left",width:"md",hideOverlay:!0,children:c("div",{className:l.dynamicFilter,children:[v&&n("h4",{className:l.title,children:v}),m==null?void 0:m.map((e,i)=>{var b,y,k,O,J,K;const a=D.includes(e.name),u=e.type==="range"?_==null?void 0:_.find(C=>C.name===e.id):void 0,r=(k=(y=(b=u==null?void 0:u.selectedOptions)==null?void 0:b[0])==null?void 0:y.value)==null?void 0:k.split("-"),s=r!=null&&r[0]?Number(r==null?void 0:r[0]):void 0,t=r!=null&&r[1]?Number(r==null?void 0:r[1]):void 0,d=(((O=H(e.options))==null?void 0:O.min)??0)>=10?((J=H(e.options))==null?void 0:J.min)??0:0;return c("div",{className:l.filterCategory,children:[c("button",{className:l.filterItem,onClick:()=>se(e.name),children:[n("span",{className:l.filterName,children:e.name}),n(M,{className:l.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),c(P,{open:a,className:l.expandableWrapper,children:[e.type==="range"?n(ge,{min:d,max:((K=H(e.options))==null?void 0:K.max)??10,defaultMinVal:s?s>=10?s:0:void 0,defaultMaxVal:t,withFields:!g,formatLabel:"kr",step:10,onChange:C=>ce(e.name,e.id,typeof C=="object"?C:{min:0,max:0}),disabled:p}):n(x,{children:L(e).slice(0,F)}),L(e).length>F&&e.type!=="range"?c(x,{children:[n(P,{open:h,children:L(e).slice(F,L(e).length)}),c(le,{alignItems:"center",justifyContent:"center",children:[h&&c(q.button,{initial:{scale:.5},animate:{scale:h?1:0},exit:{scale:.5},onClick:()=>W(!1),className:l.showMoreButton,children:[n("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),n(M,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"open"),!h&&c(q.button,{initial:{scale:.5},animate:{scale:h?0:1},exit:{scale:.5},onClick:()=>W(!0),className:l.showMoreButton,children:[n("span",{className:l.showMoreLabel,children:h?"Se mindre":"Se mer"}),n(M,{icon:h?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${i}`)})]})})]})};try{T.displayName="DynamicFilter",T.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}}}}}catch{}const We={title:"Design System/Molecules/Dynamic Filter",component:T},X=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],re={render:m=>{const[v,_]=V.useState(),o=(g,I)=>{_(I)},p=V.useMemo(()=>X.filter(g=>v==null?void 0:v.find(I=>{var F;return(F=I.selectedOptions)==null?void 0:F.find(N=>{var S,D;return((S=N.name)==null?void 0:S.toLowerCase())===g.country||((D=N.name)==null?void 0:D.toLowerCase())===g.producer})})),[v]);return c(x,{children:[n(T,{onUpdate:o,title:"Filter",preSelected:m.preSelected??[],filters:m.filters}),n(le,{flexDirection:"column",children:(p.length?p:X).map(g=>c("span",{style:{color:"blue"},children:[g.producer,", ",g.price,"kr"]},g.id))})]})}},w={...re,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},B={...re,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var Y,Z,U;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(U=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var ee,ae,ne;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const Ee=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Ue=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:w,Dynamic_Filter_With_Pre_Selected:B,__namedExportsOrder:Ee,default:We},Symbol.toStringTag,{value:"Module"}));export{T as D,w as a,Ue as d};
