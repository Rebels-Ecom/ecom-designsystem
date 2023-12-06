import{r as _,a as s,F as S,j as l}from"./jsx-runtime-a3a6c0b8.js";import{D as re}from"./drawer-sidebar-878b7f04.js";import{c as q}from"./index-a587463d.js";import{F as W}from"./flex-container-145d4933.js";import{B as te}from"./button-93555bd8.js";import{A as ie}from"./index-4058f88b.js";import{m as $}from"./motion-54668070.js";import{I as M}from"./icon-b918f330.js";import{E as P}from"./expandable-wrapper-5e4804ab.js";import{S as se}from"./slider-7c49339a.js";import{C as me}from"./checkbox-2dd08965.js";import{R as ce}from"./radio-button-611b19a6.js";const oe="_dynamicFilter_3c8ot_1",ue="_filterItem_3c8ot_4",de="_filterName_3c8ot_16",ve="_filterItemIcon_3c8ot_20",fe="_expandableWrapper_3c8ot_25",ge="_showMoreButton_3c8ot_33",pe="_showMoreLabel_3c8ot_45",he="_checkboxItem_3c8ot_50",ye="_checkbox_3c8ot_50",Ve="_label_3c8ot_65",be="_selectedFilter_3c8ot_71",_e="_active_3c8ot_92",ke="_clear_3c8ot_96",r={dynamicFilter:oe,filterItem:ue,filterName:de,filterItemIcon:ve,expandableWrapper:fe,showMoreButton:ge,showMoreLabel:pe,checkboxItem:he,checkbox:ye,label:Ve,selectedFilter:be,active:_e,clear:ke},H=m=>{if(!m||!Array.isArray(m))return;const v=m==null?void 0:m.map(f=>Number(f.name)),y=Math.max(...v);return{min:Math.min(...v),max:Math.ceil(y/10)*10}},T=({filters:m,title:v,preSelected:y,onUpdate:o,loading:f,hideSliderFields:g,hideFilters:F,maxOptionsToShow:k=6})=>{const[x,I]=_.useState(!1),[L,Z]=_.useState([]),[V,A]=_.useState(y??[]),[p,j]=_.useState(!1),U=e=>{Z(t=>t.includes(e)?t.filter(a=>a!==e):[...t,e])},ee=(e,t,a)=>{E({name:t,value:`${t}_${a.min}-${a.max}`},e,!0)},E=(e,t,a)=>{A(u=>{var N;const n=u;let c=[];const i=n==null?void 0:n.find(h=>h.name===t);if(!i)c=[...n,{name:t,selectedOptions:[e]}];else{const h=(N=i.selectedOptions)==null?void 0:N.find(b=>b.name===e.name);c=[...n==null?void 0:n.map(b=>b.name===i.name?a?{...i,selectedOptions:[e]}:h?{...i,selectedOptions:i.selectedOptions.filter(C=>C.name!==h.name)}:{...i,selectedOptions:[...i.selectedOptions,e]}:b)]}const d=c.filter(h=>!!h.selectedOptions.length);return o==null||o(e,d),d})},ae=e=>{A(t=>{const a=t,n=(a==null?void 0:a.map(c=>({...c,selectedOptions:c.selectedOptions.filter(i=>i.name!==e.name)}))).filter(c=>!!c.selectedOptions.length);return o==null||o(e,n),n})},ne=()=>{A([]),o==null||o(void 0,[])},le=()=>I(!1);_.useEffect(()=>{x||j(!1)},[x]);const B=e=>{var t;return(t=e.options)==null?void 0:t.map((a,u)=>{var i;const n=V==null?void 0:V.find(d=>d.name===e.name),c=(i=n==null?void 0:n.selectedOptions)==null?void 0:i.find(d=>d.value===a.value);switch(e.type){case"radio":return s("button",{className:r.checkboxItem,onClick:()=>E(a,e.name,!0),disabled:f,children:[l(ce,{checked:!!c,id:a.value,name:a.value,className:r.radio,disabled:f}),l("span",{className:r.label,children:a.name})]},`${a.name}-${u}`);case"checkbox":default:return s("button",{className:r.checkboxItem,onClick:()=>E(a,e.name),disabled:f,children:[l(me,{checked:!!c,id:a.value,name:a.value,className:r.checkbox,disabled:f}),l("span",{className:r.label,children:a.name})]},`${a.name}-${u}`)}})};return s(S,{children:[s(W,{alignItems:"center",children:[l(te,{type:"button",surface:"x",size:"xx-small",onClick:()=>I(!0),children:"Filtrera"}),!F&&s(S,{children:[V==null?void 0:V.map(e=>{var t;return(t=e.selectedOptions)==null?void 0:t.map((a,u)=>{let n=a.name;return m!=null&&m.find(c=>{var i;return c.type==="range"&&((i=c.options)==null?void 0:i.find(d=>d.value===a.name))})&&(n=e.name),l(ie,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:s($.button,{className:q(r.selectedFilter,r.active),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>ae(a),children:[l("span",{children:n}),l(M,{icon:"icon-x"})]},`${a.value}-${u}`)})})}),!!V.length&&s("button",{className:q(r.selectedFilter,r.clear),onClick:ne,children:[l("span",{children:"Rensa"}),l(M,{icon:"icon-x"})]})]})]}),l(re,{isOpen:x,onClose:le,from:"left",width:"md",hideOverlay:!0,children:s("div",{className:r.dynamicFilter,children:[v&&l("h4",{className:r.title,children:v}),m==null?void 0:m.map((e,t)=>{var d,N,h,b,C;const a=L.includes(e.name),u=e.type==="range"?y==null?void 0:y.find(O=>O.name===e.name):void 0,n=(h=(N=(d=u==null?void 0:u.selectedOptions)==null?void 0:d[0])==null?void 0:N.value)==null?void 0:h.split("-"),c=n!=null&&n[0]?Number(n==null?void 0:n[0]):void 0,i=n!=null&&n[1]?Number(n==null?void 0:n[1]):void 0;return s("div",{className:r.filterCategory,children:[s("button",{className:r.filterItem,onClick:()=>U(e.name),children:[l("span",{className:r.filterName,children:e.name}),l(M,{className:r.filterItemIcon,icon:a?"icon-chevron-up":"icon-chevron-down"})]}),s(P,{open:a,className:r.expandableWrapper,children:[e.type==="range"?l(se,{min:((b=H(e.options))==null?void 0:b.min)??0,max:((C=H(e.options))==null?void 0:C.max)??10,defaultMinVal:c,defaultMaxVal:i,withFields:!g,formatLabel:"kr",step:10,onChange:O=>ee(e.name,e.id,typeof O=="object"?O:{min:0,max:0}),disabled:f}):l(S,{children:B(e).slice(0,k)}),B(e).length>k&&e.type!=="range"?s(S,{children:[l(P,{open:p,children:B(e).slice(k,B(e).length)}),s(W,{alignItems:"center",justifyContent:"center",children:[p&&s($.button,{initial:{scale:.5},animate:{scale:p?1:0},exit:{scale:.5},onClick:()=>j(!1),className:r.showMoreButton,children:[l("span",{className:r.showMoreLabel,children:p?"Se mindre":"Se mer"}),l(M,{icon:p?"icon-x-circle":"icon-plus-circle"})]},"open"),!p&&s($.button,{initial:{scale:.5},animate:{scale:p?0:1},exit:{scale:.5},onClick:()=>j(!0),className:r.showMoreButton,children:[l("span",{className:r.showMoreLabel,children:p?"Se mindre":"Se mer"}),l(M,{icon:p?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${e.name}-${t}`)})]})})]})};try{T.displayName="DynamicFilter",T.__docgenInfo={description:"",displayName:"DynamicFilter",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"TFilterType[]"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!0,type:{name:"TSelected[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((option?: TOptionType, filters?: TSelected[]) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},hideSliderFields:{defaultValue:null,description:"",name:"hideSliderFields",required:!1,type:{name:"boolean"}},hideFilters:{defaultValue:{value:"false"},description:"Defines if selected filters should be hidden",name:"hideFilters",required:!1,type:{name:"boolean"}},maxOptionsToShow:{defaultValue:{value:"6"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)`,name:"maxOptionsToShow",required:!1,type:{name:"number"}}}}}catch{}const xe={title:"Design System/Molecules/Dynamic Filter",component:T},R=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],Y={render:m=>{const[v,y]=_.useState(),o=(g,F)=>{y(F)},f=_.useMemo(()=>R.filter(g=>v==null?void 0:v.find(F=>{var k;return(k=F.selectedOptions)==null?void 0:k.find(x=>{var I,L;return((I=x.name)==null?void 0:I.toLowerCase())===g.country||((L=x.name)==null?void 0:L.toLowerCase())===g.producer})})),[v]);return s(S,{children:[l(T,{onUpdate:o,title:"Filter",preSelected:m.preSelected??[],filters:m.filters}),l(W,{flexDirection:"column",children:(f.length?f:R).map(g=>s("span",{style:{color:"blue"},children:[g.producer,", ",g.price,"kr"]},g.id))})]})}},w={...Y,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},D={...Y,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var z,G,J;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Fe=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],je=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:w,Dynamic_Filter_With_Pre_Selected:D,__namedExportsOrder:Fe,default:xe},Symbol.toStringTag,{value:"Module"}));export{T as D,w as a,je as d};
