import{r as h,j as e}from"./jsx-runtime-03333307.js";import{D as ue}from"./drawer-sidebar-d6a6b621.js";import{c as B}from"./index-09749a66.js";import{A as de}from"./index-61679f6b.js";import{m as L}from"./motion-9380e2c6.js";import{I as w}from"./icon-cf6ebd85.js";import{B as Q}from"./button-e2072245.js";import{B as ge,A as ve}from"./below-c0fccb92.js";import{E as D}from"./expandable-wrapper-ef692179.js";import{S as pe}from"./slider-6cb740ea.js";import{F as re}from"./flex-container-7aff6506.js";import{C as fe}from"./checkbox-0ec5ac00.js";const ye="_dynamicFilter_11lng_1",he="_filterItem_11lng_5",be="_filterName_11lng_18",xe="_filterItemIcon_11lng_23",ke="_expandableWrapper_11lng_28",Ve="_showMoreButton_11lng_36",_e="_showMoreLabel_11lng_48",je="_checkboxItem_11lng_53",we="_checkbox_11lng_53",Fe="_label_11lng_68",Te="_count_11lng_74",Ne="_radioItem_11lng_82",Ie="_radio_11lng_82",Se="_filtersWrapper_11lng_112",Me="_selectedFilters_11lng_125",Oe="_filterButton_11lng_136",Be="_selectedFilter_11lng_125",qe="_active_11lng_171",Ae="_clear_11lng_175",Ce="_stickyResult_11lng_183",Le="_removeAllBtn_11lng_212",r={dynamicFilter:ye,filterItem:he,filterName:be,filterItemIcon:xe,expandableWrapper:ke,showMoreButton:Ve,showMoreLabel:_e,checkboxItem:je,checkbox:we,label:Fe,count:Te,radioItem:Ne,radio:Ie,filtersWrapper:Se,selectedFilters:Me,filterButton:Oe,selectedFilter:Be,active:qe,clear:Ae,stickyResult:Ce,removeAllBtn:Le},E=m=>{if(!m||!Array.isArray(m))return;const g=m==null?void 0:m.map(v=>Number(v.name)),b=Math.max(...g);return{min:Math.min(...g),max:Math.ceil(b/10)*10}},W=({filters:m,title:g,preSelected:b,onUpdate:o,loading:v,hideSliderFields:p,hideFilters:F,maxOptionsToShow:_=6,result:x})=>{var G;const[j,T]=h.useState(!1),[le,ie]=h.useState([]),[c,q]=h.useState(b??[]),[f,A]=h.useState(!1),[C,se]=h.useState(!1),me=n=>{ie(i=>i.includes(n)?i.filter(t=>t!==n):[...i,n])},oe=(n,i,t)=>{$({name:i,value:`${i}_${t.min}-${t.max}`},i,!0)},$=(n,i,t)=>{q(u=>{var k;const a=u;let s=[];const l=a==null?void 0:a.find(y=>y.name===i);if(!l)s=[...a,{name:i,selectedOptions:[n]}];else{const y=(k=l.selectedOptions)==null?void 0:k.find(V=>V.name===n.name);s=[...a==null?void 0:a.map(V=>V.name===l.name?t?{...l,selectedOptions:[n]}:y?{...l,selectedOptions:l.selectedOptions.filter(M=>M.name!==y.name)}:{...l,selectedOptions:[...l.selectedOptions,n]}:V)]}const d=s.filter(y=>!!y.selectedOptions.length);return o==null||o(n,d),d})},ce=(n,i)=>{q(t=>{const u=t,s=(u==null?void 0:u.map(l=>({...l,selectedOptions:l.selectedOptions.filter(d=>d.name!==n.name)}))).filter(l=>!!l.selectedOptions.length);return i?o==null||o({name:n.value,value:n.name},s):o==null||o(n,s),s})},R=()=>{q([]),o==null||o(void 0,[])},P=()=>T(!1);h.useEffect(()=>{j||A(!1)},[j]);const S=n=>{var i;return(i=n.options)==null?void 0:i.map((t,u)=>{var l;const a=c==null?void 0:c.find(d=>d.name===n.name),s=(l=a==null?void 0:a.selectedOptions)==null?void 0:l.find(d=>d.value===t.value);switch(n.type){case"checkbox":case"radio":default:return e.jsxs("button",{className:r.checkboxItem,onClick:()=>$(t,n.name),disabled:v,children:[e.jsx(fe,{checked:!!s,id:t.value,name:t.value,className:r.checkbox,disabled:v}),e.jsx("span",{className:r.label,children:t.name}),t.count&&e.jsx("span",{className:B(r.label,r.count),children:t.count})]},`${t.name}-${u}`)}})},H=h.useMemo(()=>e.jsxs("div",{className:r.selectedFilters,children:[c==null?void 0:c.map(n=>{var i;return(i=n.selectedOptions)==null?void 0:i.map((t,u)=>{let a=t.name;const s=m==null?void 0:m.find(l=>{var d;return l.type==="range"&&((d=l.options)==null?void 0:d.find(k=>k.value===t.name))});return s&&(a=s.name),e.jsx(de,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:e.jsxs(L.button,{className:B(r.selectedFilter,r.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>ce(t,!!s),children:[e.jsx("span",{children:a}),e.jsx(w,{icon:"icon-x"})]})},`${t.value}-${u}`)})}),!!c.length&&e.jsx("button",{className:B(r.selectedFilter,r.clear),onClick:R,children:e.jsx(w,{icon:"icon-trash-2"})})]}),[c,m]),z=(G=c==null?void 0:c.flatMap(n=>n==null?void 0:n.selectedOptions))==null?void 0:G.length;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.filtersWrapper,children:[e.jsx(Q,{type:"button",surface:"x",size:"xx-small",onClick:()=>T(!0),className:r.filterButton,disabled:v,children:"Filtrera"}),!F&&c.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(ge,{breakpoint:"md",children:n=>n&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{type:"button",surface:"x",size:"xx-small",onClick:()=>se(!C),className:r.filterButton,iconRight:{icon:C?"icon-chevron-up":"icon-chevron-down"},children:z>0?`Valda filter (${z})`:"Valda filter"}),e.jsx(D,{open:C,children:H})]})}),e.jsx(ve,{breakpoint:"md",children:n=>n&&e.jsx(e.Fragment,{children:H})})]})]}),e.jsxs(ue,{isOpen:j,onClose:P,from:"left",width:"md",children:[e.jsxs("div",{className:r.dynamicFilter,children:[g&&e.jsx("h4",{className:r.title,children:g}),m==null?void 0:m.map((n,i)=>{var k,y,V,M,J,K;const t=le.includes(n.name),u=n.type==="range"?b==null?void 0:b.find(O=>O.name===n.id):void 0,a=(V=(y=(k=u==null?void 0:u.selectedOptions)==null?void 0:k[0])==null?void 0:y.value)==null?void 0:V.split("-"),s=a!=null&&a[0]?Number(a==null?void 0:a[0]):void 0,l=a!=null&&a[1]?Number(a==null?void 0:a[1]):void 0,d=(((M=E(n.options))==null?void 0:M.min)??0)>=10?((J=E(n.options))==null?void 0:J.min)??0:0;return e.jsxs("div",{className:r.filterCategory,children:[e.jsxs("button",{className:r.filterItem,onClick:()=>me(n.name),children:[e.jsx("span",{className:r.filterName,children:n.name}),e.jsx(w,{className:r.filterItemIcon,icon:t?"icon-chevron-up":"icon-chevron-down"})]}),e.jsxs(D,{open:t,className:r.expandableWrapper,children:[n.type==="range"?e.jsx(pe,{min:d,max:((K=E(n.options))==null?void 0:K.max)??10,defaultMinVal:s?s>=10?s:0:void 0,defaultMaxVal:l,withFields:!p,formatLabel:"kr",step:10,onChange:O=>oe(n.name,n.id,typeof O=="object"?O:{min:0,max:0}),disabled:v}):e.jsx(e.Fragment,{children:S(n).slice(0,_)}),S(n).length>_&&n.type!=="range"?e.jsxs(e.Fragment,{children:[e.jsx(D,{open:f,children:S(n).slice(_,S(n).length)}),e.jsxs(re,{alignItems:"center",justifyContent:"center",children:[f&&e.jsxs(L.button,{initial:{scale:.5},animate:{scale:f?1:0},exit:{scale:.5},onClick:()=>A(!1),className:r.showMoreButton,children:[e.jsx("span",{className:r.showMoreLabel,children:f?"Se mindre":"Se mer"}),e.jsx(w,{icon:f?"icon-x-circle":"icon-plus-circle"})]},"open"),!f&&e.jsxs(L.button,{initial:{scale:.5},animate:{scale:f?0:1},exit:{scale:.5},onClick:()=>A(!0),className:r.showMoreButton,children:[e.jsx("span",{className:r.showMoreLabel,children:f?"Se mindre":"Se mer"}),e.jsx(w,{icon:f?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${n.name}-${i}`)})]}),!!c.length&&e.jsx("button",{className:B(r.stickyResult,r.removeAllBtn),onClick:R,children:e.jsx(w,{icon:"icon-trash-2"})}),(x||x===0)&&e.jsx("button",{className:r.stickyResult,onClick:P,disabled:x===0,children:`Visa resultat (${x})`})]})]})};W.__docgenInfo={description:"",methods:[],displayName:"DynamicFilter",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
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
@default 6`,defaultValue:{value:"6",computed:!1}},result:{required:!1,tsType:{name:"number"},description:'If provided, a "show result (x)" button will be displayed at bottom of drawer'}}};const De={title:"Design System/Molecules/Dynamic Filter",component:W},X=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],te={render:m=>{const[g,b]=h.useState(),o=(p,F)=>{b(F)},v=h.useMemo(()=>X.filter(p=>g==null?void 0:g.find(F=>{var _;return(_=F.selectedOptions)==null?void 0:_.find(x=>{var j,T;return((j=x.name)==null?void 0:j.toLowerCase())===p.country||((T=x.name)==null?void 0:T.toLowerCase())===p.producer})})),[g]);return e.jsxs(e.Fragment,{children:[e.jsx(W,{onUpdate:o,title:"Filter",preSelected:m.preSelected??[],filters:m.filters}),e.jsx(re,{flexDirection:"column",children:(v.length?v:X).map(p=>e.jsxs("span",{style:{color:"blue"},children:[p.producer,", ",p.price,"kr"]},p.id))})]})}},N={...te,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},I={...te,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var Y,Z,U;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(U=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var ee,ne,ae;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const Ee=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:N,Dynamic_Filter_With_Pre_Selected:I,__namedExportsOrder:Ee,default:De},Symbol.toStringTag,{value:"Module"}));export{W as D,N as a,Ze as d};
