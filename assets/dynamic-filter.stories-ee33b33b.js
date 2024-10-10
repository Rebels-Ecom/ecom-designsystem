import{r as h,j as n}from"./jsx-runtime-03333307.js";import{D as pe}from"./drawer-sidebar-7d4d099a.js";import{c as B}from"./index-09749a66.js";import{A as ve}from"./index-61679f6b.js";import{m as C}from"./motion-9380e2c6.js";import{I as j}from"./icon-cf6ebd85.js";import{B as Y}from"./button-8e3f9b10.js";import{B as fe,A as ye}from"./below-c0fccb92.js";import{E as A}from"./expandable-wrapper-968690e0.js";import{S as he}from"./slider-4785fc7a.js";import{F as le}from"./flex-container-7aff6506.js";import{C as be}from"./checkbox-0ec5ac00.js";const ke="_dynamicFilter_11lng_1",xe="_filterItem_11lng_5",Ve="_filterName_11lng_18",_e="_filterItemIcon_11lng_23",je="_expandableWrapper_11lng_28",we="_showMoreButton_11lng_36",Fe="_showMoreLabel_11lng_48",Te="_checkboxItem_11lng_53",Ie="_checkbox_11lng_53",Oe="_label_11lng_68",Ne="_count_11lng_74",Se="_radioItem_11lng_82",Be="_radio_11lng_82",Me="_filtersWrapper_11lng_112",qe="_selectedFilters_11lng_125",Ce="_filterButton_11lng_136",Ae="_selectedFilter_11lng_125",De="_active_11lng_171",Le="_clear_11lng_175",Ee="_stickyResult_11lng_183",We="_removeAllBtn_11lng_212",t={dynamicFilter:ke,filterItem:xe,filterName:Ve,filterItemIcon:_e,expandableWrapper:je,showMoreButton:we,showMoreLabel:Fe,checkboxItem:Te,checkbox:Ie,label:Oe,count:Ne,radioItem:Se,radio:Be,filtersWrapper:Me,selectedFilters:qe,filterButton:Ce,selectedFilter:Ae,active:De,clear:Le,stickyResult:Ee,removeAllBtn:We},D=o=>{if(!o||!Array.isArray(o))return;const p=o==null?void 0:o.map(v=>Number(v.name)),b=Math.max(...p);return{min:Math.min(...p),max:Math.ceil(b/10)*10}},L=({filters:o,title:p,preSelected:b,onUpdate:c,loading:v,hideSliderFields:f,hideFilters:w,maxOptionsToShow:V=6,result:k,backdropOptions:I})=>{var J;const[_,E]=h.useState(!1),[se,me]=h.useState([]),[u,M]=h.useState(b??[]),[oe,W]=h.useState([]),[q,ce]=h.useState(!1),ue=e=>{me(l=>l.includes(e)?l.filter(r=>r!==e):[...l,e])},$=e=>{W(l=>l.includes(e)?l.filter(r=>r!==e):[...l,e])},de=(e,l,r)=>{P({name:l,value:`${l}_${r.min}-${r.max}`},l,!0)},P=(e,l,r)=>{M(d=>{var s;const a=d;let m=[];const i=a==null?void 0:a.find(y=>y.name===l);if(!i)m=[...a,{name:l,selectedOptions:[e]}];else{const y=(s=i.selectedOptions)==null?void 0:s.find(x=>x.name===e.name);m=[...a==null?void 0:a.map(x=>x.name===i.name?r?{...i,selectedOptions:[e]}:y?{...i,selectedOptions:i.selectedOptions.filter(N=>N.name!==y.name)}:{...i,selectedOptions:[...i.selectedOptions,e]}:x)]}const g=m.filter(y=>!!y.selectedOptions.length);return c==null||c(e,g),g})},ge=(e,l)=>{M(r=>{const d=r,m=(d==null?void 0:d.map(i=>({...i,selectedOptions:i.selectedOptions.filter(g=>g.name!==e.name)}))).filter(i=>!!i.selectedOptions.length);return l?c==null||c({name:e.value,value:e.name},m):c==null||c(e,m),m})},R=()=>{M([]),c==null||c(void 0,[])},H=()=>E(!1);h.useEffect(()=>{_||W([])},[_]);const O=e=>{var l;return(l=e.options)==null?void 0:l.map((r,d)=>{var i,g;const a=u==null?void 0:u.find(s=>s.name===e.name),m=(i=a==null?void 0:a.selectedOptions)==null?void 0:i.find(s=>s.value===r.value);switch(e.type){case"checkbox":case"radio":default:return n.jsxs("button",{className:t.checkboxItem,onClick:()=>P(r,e.name),disabled:v,children:[n.jsx(be,{checked:!!m,id:r.value,name:r.value,className:t.checkbox,disabled:v}),n.jsx("span",{className:t.label,children:(g=r.name)==null?void 0:g.replace(/\s*\(.*$/,"")}),r.count&&n.jsx("span",{className:B(t.label,t.count),children:r.count})]},`${r.name}-${d}`)}})},z=h.useMemo(()=>n.jsxs("div",{className:t.selectedFilters,children:[u==null?void 0:u.map(e=>{var l;return(l=e.selectedOptions)==null?void 0:l.map((r,d)=>{let a=r.name;const m=o==null?void 0:o.find(i=>{var g;return i.type==="range"&&((g=i.options)==null?void 0:g.find(s=>s.value===r.name))});return m&&(a=m.name),n.jsx(ve,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:n.jsxs(C.button,{className:B(t.selectedFilter,t.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>ge(r,!!m),children:[n.jsx("span",{children:a}),n.jsx(j,{icon:"icon-x"})]})},`${r.value}-${d}`)})}),!!u.length&&n.jsx("button",{className:B(t.selectedFilter,t.clear),onClick:R,children:n.jsx(j,{icon:"icon-trash-2"})})]}),[u,o]),G=(J=u==null?void 0:u.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:J.length;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:t.filtersWrapper,children:[n.jsx(Y,{type:"button",surface:"x",size:"xx-small",iconRight:{icon:"icon-plus"},onClick:()=>E(!0),className:t.filterButton,disabled:v,children:"Filtrera"}),!w&&u.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(fe,{breakpoint:"md",children:e=>e&&n.jsxs(n.Fragment,{children:[n.jsx(Y,{type:"button",surface:"x",size:"xx-small",onClick:()=>ce(!q),className:t.filterButton,iconRight:{icon:q?"icon-chevron-up":"icon-chevron-down"},children:G>0?`Valda filter (${G})`:"Valda filter"}),n.jsx(A,{open:q,children:z})]})}),n.jsx(ye,{breakpoint:"md",children:e=>e&&n.jsx(n.Fragment,{children:z})})]})]}),n.jsxs(pe,{isOpen:_,onClose:H,from:"left",width:"md",...I,children:[n.jsxs("div",{className:t.dynamicFilter,children:[p&&n.jsx("h4",{className:t.title,children:p}),o==null?void 0:o.map((e,l)=>{var y,x,N,K,Q,X;const r=se.includes(e.name),d=e.type==="range"?b==null?void 0:b.find(S=>S.name===e.id):void 0,a=(N=(x=(y=d==null?void 0:d.selectedOptions)==null?void 0:y[0])==null?void 0:x.value)==null?void 0:N.split("-"),m=a!=null&&a[0]?Number(a==null?void 0:a[0]):void 0,i=a!=null&&a[1]?Number(a==null?void 0:a[1]):void 0,g=(((K=D(e.options))==null?void 0:K.min)??0)>=10?((Q=D(e.options))==null?void 0:Q.min)??0:0,s=oe.includes(e.name);return n.jsxs("div",{className:t.filterCategory,children:[n.jsxs("button",{className:t.filterItem,onClick:()=>ue(e.name),children:[n.jsx("span",{className:t.filterName,children:e.name}),n.jsx(j,{className:t.filterItemIcon,icon:r?"icon-chevron-up":"icon-chevron-down"})]}),n.jsxs(A,{open:r,className:t.expandableWrapper,children:[e.type==="range"?n.jsx(he,{min:g,max:((X=D(e.options))==null?void 0:X.max)??10,defaultMinVal:m?m>=10?m:0:void 0,defaultMaxVal:i,withFields:!f,formatLabel:"kr",step:10,onChange:S=>de(e.name,e.id,typeof S=="object"?S:{min:0,max:0}),disabled:v}):n.jsx(n.Fragment,{children:O(e).slice(0,V)}),O(e).length>V&&e.type!=="range"?n.jsxs(n.Fragment,{children:[n.jsx(A,{open:s,children:O(e).slice(V,O(e).length)}),n.jsxs(le,{alignItems:"center",justifyContent:"center",children:[s&&n.jsxs(C.button,{initial:{scale:.5},animate:{scale:s?1:0},exit:{scale:.5},onClick:()=>$(e.name),className:t.showMoreButton,children:[n.jsx("span",{className:t.showMoreLabel,children:s?"Se mindre":"Se mer"}),n.jsx(j,{icon:s?"icon-x-circle":"icon-plus-circle"})]},"open"),!s&&n.jsxs(C.button,{initial:{scale:.5},animate:{scale:s?0:1},exit:{scale:.5},onClick:()=>$(e.name),className:t.showMoreButton,children:[n.jsx("span",{className:t.showMoreLabel,children:s?"Se mindre":"Se mer"}),n.jsx(j,{icon:s?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${l}`)})]}),!!u.length&&n.jsx("button",{className:B(t.stickyResult,t.removeAllBtn),onClick:R,children:n.jsx(j,{icon:"icon-trash-2"})}),(k||k===0)&&n.jsx("button",{className:t.stickyResult,onClick:H,disabled:k===0,children:`Visa resultat (${k})`})]})]})};L.__docgenInfo={description:"",methods:[],displayName:"DynamicFilter",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  type: 'checkbox' | 'range' | 'radio';
  name: string;
  options: TOptionType[];
} & (TCheckbox | TRange | TRadio)`,elements:[{name:"signature",type:"object",raw:`{
  type: 'checkbox' | 'range' | 'radio';
  name: string;
  options: TOptionType[];
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'checkbox' | 'range' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'range'"},{name:"literal",value:"'radio'"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
  count?: string | number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}},{name:"unknown"}]}],raw:"TFilterType[]"},description:""},preSelected:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string,
  selectedOptions: TOptionType[]
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
  count?: string | number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}}],raw:"TSelected[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(option?: TOptionType, filters?: TSelected[]) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
  count?: string | number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}}]}},name:"option"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string,
  selectedOptions: TOptionType[]
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
  count?: string | number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}}],raw:"TSelected[]"},name:"filters"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},hideSliderFields:{required:!1,tsType:{name:"boolean"},description:""},hideFilters:{required:!1,tsType:{name:"boolean"},description:`Defines if selected filters should be hidden
@default false`},maxOptionsToShow:{required:!1,tsType:{name:"number"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)
@default 6`,defaultValue:{value:"6",computed:!1}},result:{required:!1,tsType:{name:"number"},description:'If provided, a "show result (x)" button will be displayed at bottom of drawer'},backdropOptions:{required:!1,tsType:{name:"Pick",elements:[{name:"IDrawerSidebar"},{name:"union",raw:"'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'",elements:[{name:"literal",value:"'enableBackgroundScroll'"},{name:"literal",value:"'hideOverlay'"},{name:"literal",value:"'disableCloseOnOutsideClick'"}]}],raw:"Pick<IDrawerSidebar, 'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'>"},description:""}}};const $e={title:"Design System/Molecules/Dynamic Filter",component:L},Z=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],ie={render:o=>{const[p,b]=h.useState(),c=(f,w)=>{b(w)},v=h.useMemo(()=>Z.filter(f=>p==null?void 0:p.find(w=>{var V;return(V=w.selectedOptions)==null?void 0:V.find(k=>{var I,_;return((I=k.name)==null?void 0:I.toLowerCase())===f.country||((_=k.name)==null?void 0:_.toLowerCase())===f.producer})})),[p]);return n.jsxs(n.Fragment,{children:[n.jsx(L,{onUpdate:c,title:"Filter",preSelected:o.preSelected??[],filters:o.filters}),n.jsx(le,{flexDirection:"column",children:(v.length?v:Z).map(f=>n.jsxs("span",{style:{color:"blue"},children:[f.producer,", ",f.price,"kr"]},f.id))})]})}},F={...ie,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},T={...ie,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var U,ee,ne;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(ne=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,re,te;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(re=T.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Pe=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],nn=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:F,Dynamic_Filter_With_Pre_Selected:T,__namedExportsOrder:Pe,default:$e},Symbol.toStringTag,{value:"Module"}));export{L as D,F as a,nn as d};
