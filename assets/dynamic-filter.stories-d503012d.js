import{r as h,j as n}from"./jsx-runtime-03333307.js";import{D as ge}from"./drawer-sidebar-b96c10f4.js";import{c as w}from"./index-09749a66.js";import{B as X}from"./button-1de8d46b.js";import{B as fe,A as pe}from"./below-c0fccb92.js";import{E as C}from"./expandable-wrapper-968690e0.js";import{I as V}from"./icon-a32914e5.js";import{S as ye}from"./slider-ba96b228.js";import{F as te}from"./flex-container-7aff6506.js";import{m as M}from"./motion-9380e2c6.js";import{C as be}from"./checkbox-aacef711.js";import{A as he}from"./index-61679f6b.js";const ke="_dynamicFilter_1fs4n_1",xe="_filterItem_1fs4n_5",_e="_filterName_1fs4n_18",Ve="_filterItemIcon_1fs4n_23",je="_expandableWrapper_1fs4n_28",we="_showMoreButton_1fs4n_36",Fe="_showMoreLabel_1fs4n_48",Te="_checkboxItem_1fs4n_53",Ie="_inActive_1fs4n_64",Ne="_checkbox_1fs4n_53",Oe="_label_1fs4n_70",qe="_count_1fs4n_85",Ae="_radioItem_1fs4n_93",Be="_radio_1fs4n_93",Se="_filtersWrapper_1fs4n_123",Ce="_selectedFilters_1fs4n_136",Me="_filterButton_1fs4n_147",De="_selectedFilter_1fs4n_136",Le="_active_1fs4n_183",Ee="_clear_1fs4n_200",$e="_stickyResult_1fs4n_208",We="_removeAllBtn_1fs4n_237",r={dynamicFilter:ke,filterItem:xe,filterName:_e,filterItemIcon:Ve,expandableWrapper:je,showMoreButton:we,showMoreLabel:Fe,checkboxItem:Te,inActive:Ie,checkbox:Ne,label:Oe,count:qe,radioItem:Ae,radio:Be,filtersWrapper:Se,selectedFilters:Ce,filterButton:Me,selectedFilter:De,active:Le,clear:Ee,stickyResult:$e,removeAllBtn:We},D=m=>{if(!m||!Array.isArray(m))return;const v=m==null?void 0:m.map(y=>Number(y.name)),g=Math.max(...v);return{min:Math.min(...v),max:Math.ceil(g/10)*10}},L=({filters:m,title:v,preSelected:g,onUpdate:o,loading:y,hideSliderFields:b,hideFilters:j,maxOptionsToShow:_=6,result:k,backdropOptions:I})=>{var G;const[N,E]=h.useState(!1),[ie,se]=h.useState([]),[u,O]=h.useState(g??[]),[me,oe]=h.useState([]),[S,ce]=h.useState(!1),ue=e=>{se(l=>l.includes(e)?l.filter(a=>a!==e):[...l,e])},$=e=>{oe(l=>l.includes(e)?l.filter(a=>a!==e):[...l,e])},de=(e,l,a)=>{W({name:l,value:`${l}_${a.min}-${a.max}`},l,!0)},W=(e,l,a)=>{O(c=>{var f;const t=c==null?void 0:c.find(i=>i.name===l);let s=[];if(!t)s=[...c,{name:l,selectedOptions:[e]}];else{const i=(f=t.selectedOptions)==null?void 0:f.find(p=>p.name===e.name);s=[...c].map(p=>{if(p.name!==l)return p;let x=[];return a?x=[e]:i?x=p.selectedOptions.filter(A=>A.name!==e.name):x=[...p.selectedOptions,e],{...p,selectedOptions:[...x]}})}const d=s.filter(i=>i.selectedOptions.length);return o==null||o(e,d),d})},ve=(e,l)=>{O(a=>{const t=[...a].map(s=>({...s,selectedOptions:s.selectedOptions.filter(d=>d.name!==e.name)})).filter(s=>!!s.selectedOptions.length);return l?o==null||o({name:e.value,value:e.name},t):o==null||o(e,t),t})},P=()=>{O([]),o==null||o(void 0,[])};h.useEffect(()=>{O(g??[])},[g]);const R=()=>E(!1),q=e=>{var l;return(l=e.options)==null?void 0:l.map((a,c)=>{var d,f;const t=u==null?void 0:u.find(i=>i.name===e.name),s=(d=t==null?void 0:t.selectedOptions)==null?void 0:d.find(i=>i.value===a.value);switch(e.type){case"checkbox":case"radio":default:return n.jsxs("button",{className:w(r.checkboxItem,{[r.inActive]:a.disabled}),onClick:()=>W(a,e.name),disabled:y,children:[n.jsx(be,{checked:!!s,id:a.value,name:a.value,className:r.checkbox,disabled:y}),n.jsx("span",{className:r.label,children:(f=a.name)==null?void 0:f.replace(/\s*\(.*$/,"")}),a.count&&n.jsx("span",{className:w(r.label,r.count),children:a.count})]},`${a.name}-${c}`)}})},H=()=>n.jsxs("div",{className:r.selectedFilters,children:[u==null?void 0:u.map(e=>{var l;return(l=e.selectedOptions)==null?void 0:l.map((a,c)=>{let t=a.name;const s=m==null?void 0:m.find(d=>{var f;return d.type==="range"&&((f=d.options)==null?void 0:f.find(i=>i.value===a.name))});return s&&(t=s.name),n.jsx(he,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:n.jsxs(M.button,{className:w(r.selectedFilter,r.active,{[r.inActive]:a.disabled}),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>ve(a,!!s),children:[n.jsx("span",{children:t}),n.jsx(V,{icon:"icon-x"})]})},`${a.value}-${c}-${a.disabled}`)})}),!!u.length&&n.jsx("button",{className:w(r.selectedFilter,r.clear),onClick:P,children:n.jsx(V,{icon:"icon-trash-2"})})]}),z=(G=u==null?void 0:u.flatMap(e=>e==null?void 0:e.selectedOptions))==null?void 0:G.length;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:r.filtersWrapper,children:[n.jsx(X,{type:"button",surface:"x",size:"xx-small",iconRight:{icon:"icon-plus"},onClick:()=>E(!0),className:r.filterButton,disabled:y,children:"Filtrera"}),!j&&u.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(fe,{breakpoint:"md",children:e=>e&&n.jsxs(n.Fragment,{children:[n.jsx(X,{type:"button",surface:"x",size:"xx-small",onClick:()=>ce(!S),className:r.filterButton,iconRight:{icon:S?"icon-chevron-up":"icon-chevron-down"},children:z>0?`Valda filter (${z})`:"Valda filter"}),n.jsx(C,{open:S,children:H()})]})}),n.jsx(pe,{breakpoint:"md",children:e=>e&&n.jsx(n.Fragment,{children:H()})})]})]}),n.jsxs(ge,{isOpen:N,onClose:R,from:"left",width:"md",...I,children:[n.jsxs("div",{className:r.dynamicFilter,children:[v&&n.jsx("h4",{className:r.title,children:v}),m==null?void 0:m.map((e,l)=>{var p,x,A,J,K,Q;const a=ie.includes(e.name),c=e.type==="range"?g==null?void 0:g.find(B=>B.name===e.id):void 0,t=(A=(x=(p=c==null?void 0:c.selectedOptions)==null?void 0:p[0])==null?void 0:x.value)==null?void 0:A.split("-"),s=t!=null&&t[0]?Number(t==null?void 0:t[0]):void 0,d=t!=null&&t[1]?Number(t==null?void 0:t[1]):void 0,f=(((J=D(e.options))==null?void 0:J.min)??0)>=10?((K=D(e.options))==null?void 0:K.min)??0:0,i=me.includes(e.name);return n.jsxs("div",{className:r.filterCategory,children:[n.jsxs("button",{className:r.filterItem,onClick:()=>ue(e.name),children:[n.jsx("span",{className:r.filterName,children:e.name}),n.jsx(V,{className:r.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),n.jsxs(C,{open:a,className:r.expandableWrapper,children:[e.type==="range"?n.jsx(ye,{min:f,max:((Q=D(e.options))==null?void 0:Q.max)??10,defaultMinVal:s?s>=10?s:0:void 0,defaultMaxVal:d,withFields:!b,formatLabel:e.formatLabel||"kr",step:e.step||10,onChange:B=>de(e.name,e.id,typeof B=="object"?B:{min:0,max:0}),disabled:y}):n.jsx(n.Fragment,{children:q(e).slice(0,_)}),q(e).length>_&&e.type!=="range"?n.jsxs(n.Fragment,{children:[n.jsx(C,{open:i,children:q(e).slice(_,q(e).length)}),n.jsxs(te,{alignItems:"center",justifyContent:"center",children:[i&&n.jsxs(M.button,{initial:{scale:.5},animate:{scale:i?1:0},exit:{scale:.5},onClick:()=>$(e.name),className:r.showMoreButton,children:[n.jsx("span",{className:r.showMoreLabel,children:i?"Se mindre":"Se mer"}),n.jsx(V,{icon:i?"icon-x-circle":"icon-plus-circle"})]},"open"),!i&&n.jsxs(M.button,{initial:{scale:.5},animate:{scale:i?0:1},exit:{scale:.5},onClick:()=>$(e.name),className:r.showMoreButton,children:[n.jsx("span",{className:r.showMoreLabel,children:i?"Se mindre":"Se mer"}),n.jsx(V,{icon:i?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${l}`)})]}),!!u.length&&n.jsx("button",{className:w(r.stickyResult,r.removeAllBtn),onClick:P,children:n.jsx(V,{icon:"icon-trash-2"})}),(k||k===0)&&n.jsx("button",{className:r.stickyResult,onClick:R,disabled:k===0,children:`Visa resultat (${k})`})]})]})};L.__docgenInfo={description:"",methods:[],displayName:"DynamicFilter",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  type: 'checkbox' | 'range' | 'radio'
  name: string
  options: TOptionType[]
} & (TCheckbox | TRange | TRadio)`,elements:[{name:"signature",type:"object",raw:`{
  type: 'checkbox' | 'range' | 'radio'
  name: string
  options: TOptionType[]
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'checkbox' | 'range' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'range'"},{name:"literal",value:"'radio'"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}},{name:"unknown"}]}],raw:"TFilterType[]"},description:""},preSelected:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  selectedOptions: TOptionType[]
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}}],raw:"TSelected[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(option?: TOptionType, filters?: TSelected[]) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  selectedOptions: TOptionType[]
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}}],raw:"TSelected[]"},name:"filters"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},hideSliderFields:{required:!1,tsType:{name:"boolean"},description:""},hideFilters:{required:!1,tsType:{name:"boolean"},description:`Defines if selected filters should be hidden
@default false`},maxOptionsToShow:{required:!1,tsType:{name:"number"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)
@default 6`,defaultValue:{value:"6",computed:!1}},result:{required:!1,tsType:{name:"number"},description:'If provided, a "show result (x)" button will be displayed at bottom of drawer'},backdropOptions:{required:!1,tsType:{name:"Pick",elements:[{name:"IDrawerSidebar"},{name:"union",raw:"'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'",elements:[{name:"literal",value:"'enableBackgroundScroll'"},{name:"literal",value:"'hideOverlay'"},{name:"literal",value:"'disableCloseOnOutsideClick'"}]}],raw:"Pick<IDrawerSidebar, 'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'>"},description:""}}};const Pe={title:"Design System/Molecules/Dynamic Filter",component:L},Y=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],le={render:m=>{const[v,g]=h.useState(),o=(b,j)=>{g(j)},y=h.useMemo(()=>Y.filter(b=>v==null?void 0:v.find(j=>{var _;return(_=j.selectedOptions)==null?void 0:_.find(k=>{var I,N;return((I=k.name)==null?void 0:I.toLowerCase())===b.country||((N=k.name)==null?void 0:N.toLowerCase())===b.producer})})),[v]);return n.jsxs(n.Fragment,{children:[n.jsx(L,{onUpdate:o,title:"Filter",preSelected:m.preSelected??[],filters:m.filters}),n.jsx(te,{flexDirection:"column",children:(y.length?y:Y).map(b=>n.jsxs("span",{style:{color:"blue"},children:[b.producer,", ",b.price,"kr"]},b.id))})]})}},F={...le,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},T={...le,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var Z,U,ee;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(U=F.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};var ne,ae,re;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Re=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],an=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:F,Dynamic_Filter_With_Pre_Selected:T,__namedExportsOrder:Re,default:Pe},Symbol.toStringTag,{value:"Module"}));export{L as D,F as a,an as d};
