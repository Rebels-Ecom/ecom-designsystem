import{r as k,j as l,a as m,F as L}from"./jsx-runtime-a3a6c0b8.js";import{I as T}from"./icon-button-f9728073.js";import{c as _}from"./index-a587463d.js";import{B as P}from"./button-97f3af74.js";import{L as z}from"./loader-81f0d221.js";import{H as A}from"./heading-47d2ab87.js";import{C as F}from"./content-wrapper-c985da24.js";import"./_commonjsHelpers-de833af9.js";import"./ui-link-a18343fc.js";import"./icon-5fefd509.js";import"./motion-54668070.js";import"./button.module-16a60bae.js";const H="_table_1nm6j_1",K="_top_1nm6j_8",J="_heading_1nm6j_22",M="_mobile_1nm6j_30",Q="_columnTitle_1nm6j_39",U="_group_1nm6j_45",X="_icons_1nm6j_49",Y="_row_1nm6j_57",Z="_item_1nm6j_64",B="_desktop_1nm6j_69",ee="_column_1nm6j_39",ne="_equalWidthColumn_1nm6j_80",te="_lastTextColumn_1nm6j_85",oe="_columnTitleText_1nm6j_109",ie="_icon_1nm6j_49",t={table:H,top:K,heading:J,mobile:M,columnTitle:Q,group:U,icons:X,row:Y,item:Z,desktop:B,column:ee,equalWidthColumn:ne,lastTextColumn:te,columnTitleText:oe,icon:ie},g=({listItems:s,hideColumnTitles:f=!1,equalWidthColumns:E=!1,listGap:$=0,loading:G,initialSortBy:W,title:N,action:C})=>{const[e,y]=k.useState(),w=s==null?void 0:s.sort((n,o)=>Object.keys(o).length-Object.keys(n).length)[0],a=s.length?Object.keys(w):[];k.useEffect(()=>{y({by:W??a[0],dir:"asc"})},[]);const I=(n,o)=>(e==null?void 0:e.dir)==="asc"?n[(e==null?void 0:e.by)??a[0]]>o[(e==null?void 0:e.by)??a[0]]?1:-1:(e==null?void 0:e.dir)==="desc"?n[(e==null?void 0:e.by)??a[0]]>o[(e==null?void 0:e.by)??a[0]]?-1:1:0,h=(n,o)=>l(T,{...n,size:"medium",noPadding:!0,isTransparent:!0,noBorder:!0},o),V=n=>s.sort((o,i)=>I(o,i)).map((o,i)=>typeof o[n]=="object"?l("div",{className:_(t.item,t.icon),children:h(o[n],i.toString())},`${o[n]}-${i}`):l("span",{className:t.item,children:o[n]},`${o[n]}-${i}`)),R={"--list-gap":`${$}rem`};return G?l(z,{visible:!0,size:"md"}):m("div",{className:t.table,style:R,children:[m("div",{className:t.top,children:[N&&l(A,{className:t.heading,order:5,children:N}),C&&l(P,{...C})]}),l("div",{className:t.mobile,children:s.map((n,o)=>{const i=Object.entries(n),r=i==null?void 0:i.filter(([c])=>!c.includes("icon")),u=i==null?void 0:i.filter(([c])=>c.includes("icon"));return m("div",{className:t.group,children:[r!=null&&r.length?r.map(([c,d])=>m("div",{className:t.row,children:[!f&&!c.includes("icon")?l("span",{className:t.columnTitle,children:`${c}: `}):"",l("span",{className:t.item,children:typeof d=="object"?h(d,`${c}-${o}`):d})]},`${c}-${o}`)):null,u!=null&&u.length?l("div",{className:t.icons,children:u.map(([c,d])=>typeof d=="object"&&h(d,`${c}-${o}`))}):null]},o)})}),l("div",{className:t.desktop,children:a==null?void 0:a.map((n,o)=>{const i=a==null?void 0:a.filter(r=>!r.includes("icon"));return m("div",{className:_(t.column,{[t.equalWidthColumn]:E,[t.textColumn]:!n.includes("icon"),[t.iconColumn]:n.includes("icon"),[t.lastTextColumn]:i[(i==null?void 0:i.length)-1]===n}),children:[!f&&l("span",{className:_(t.item,t.columnTitle,{[t.icon]:n.includes("icon")}),children:!n.includes("icon")&&m(L,{children:[l("span",{className:t.columnTitleText,children:n}),l(T,{icon:(e==null?void 0:e.by)===n&&(e==null?void 0:e.dir)==="asc"?"icon-chevron-down":"icon-chevron-up",type:"button",onClick:()=>y({by:n,dir:(e==null?void 0:e.by)===n&&(e==null?void 0:e.dir)==="asc"?"desc":"asc"}),isTransparent:!0,noBorder:!0})]})}),V(n)]},`${n}-${o}`)})})]})};try{g.displayName="Table",g.__docgenInfo={description:"",displayName:"Table",props:{listItems:{defaultValue:null,description:"",name:"listItems",required:!0,type:{name:"TListItems"}},hideColumnTitles:{defaultValue:{value:"false"},description:"If true, no column titles will be display",name:"hideColumnTitles",required:!1,type:{name:"boolean"}},equalWidthColumns:{defaultValue:{value:"false"},description:"If true, each column will get equal width",name:"equalWidthColumns",required:!1,type:{name:"boolean"}},listGap:{defaultValue:{value:"0"},description:"Adds a gap (in rem) between the columns",name:"listGap",required:!1,type:{name:"number"}},initialSortBy:{defaultValue:{value:"'first column title'"},description:"What column title to sort by initially",name:"initialSortBy",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"undefined"},description:"loading contacts indicator",name:"loading",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"undefined"},description:"Title to display on top of table",name:"title",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"IButton"}}}}}catch{}const _e={title:"Design System/Atoms/Table",component:g,parameters:{controls:{exclude:["listItems"]}}},D={render:s=>l(F,{children:l(g,{...s})})},p={...D,args:{listItems:[{name:"Name 1",status:"OK",id:"1",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"},icon2:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 6",status:"IN PROGRESS",id:"2",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 3",status:"DONE",id:"3",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 5",status:"DONE",id:"4",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 2",status:"DONE",id:"5",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 4",status:"DONE",id:"6",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}},b={...D,args:{listItems:[{animal:"Dog",breed:"Golden Retriever",id:"1"},{animal:"Dog",breed:"German Shepherd",id:"2"},{animal:"Dog",breed:"English Setter",id:"3"}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}};var j,S,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...TableStoryTemplate,
  args: ({
    listItems: [{
      name: 'Name 1',
      status: 'OK',
      id: '1',
      "icon": {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      },
      "icon2": {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 6',
      status: 'IN PROGRESS',
      id: '2',
      "icon": {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 3',
      status: 'DONE',
      id: '3',
      "icon": {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 5',
      status: 'DONE',
      id: '4',
      "icon": {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 2',
      status: 'DONE',
      id: '5',
      "icon": {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 4',
      status: 'DONE',
      id: '6',
      "icon": {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }],
    hideColumnTitles: false,
    equalWidthColumns: false,
    listGap: 0
  } as ITable)
}`,...(q=(S=p.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var v,O,x;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...TableStoryTemplate,
  args: ({
    listItems: [{
      animal: 'Dog',
      breed: 'Golden Retriever',
      id: '1'
    }, {
      animal: 'Dog',
      breed: 'German Shepherd',
      id: '2'
    }, {
      animal: 'Dog',
      breed: 'English Setter',
      id: '3'
    }],
    hideColumnTitles: false,
    equalWidthColumns: false,
    listGap: 0
  } as ITable)
}`,...(x=(O=b.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const fe=["TableStory","TableStoryTwo"];export{p as TableStory,b as TableStoryTwo,fe as __namedExportsOrder,_e as default};
