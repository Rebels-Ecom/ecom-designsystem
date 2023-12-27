import{r as k,j as l,a as m,F as L}from"./jsx-runtime-a3a6c0b8.js";import{I as S}from"./icon-button-2f0ea5c0.js";import{c as h}from"./index-a587463d.js";import{B as P}from"./button-8a1c536b.js";import{L as z}from"./loader-72deb8c4.js";import{H as A}from"./heading-a9520268.js";import{C as F}from"./content-wrapper-c985da24.js";import"./_commonjsHelpers-de833af9.js";import"./ui-link-a18343fc.js";import"./icon-5fefd509.js";import"./motion-54668070.js";import"./button.module-d4e6cb42.js";const H="_table_155pb_1",K="_top_155pb_7",J="_mobile_155pb_13",M="_columnTitle_155pb_22",Q="_group_155pb_28",U="_icons_155pb_32",X="_row_155pb_40",Y="_item_155pb_47",Z="_desktop_155pb_52",B="_column_155pb_22",ee="_equalWidthColumn_155pb_63",ne="_lastTextColumn_155pb_68",te="_icon_155pb_32",o={table:H,top:K,mobile:J,columnTitle:M,group:Q,icons:U,row:X,item:Y,desktop:Z,column:B,equalWidthColumn:ee,lastTextColumn:ne,icon:te},g=({listItems:s,hideColumnTitles:_=!1,equalWidthColumns:x=!1,listGap:G=0,loading:W,initialSortBy:w,title:C,action:N})=>{const[e,y]=k.useState(),I=s==null?void 0:s.sort((n,t)=>Object.keys(t).length-Object.keys(n).length)[0],a=s.length?Object.keys(I):[];k.useEffect(()=>{y({by:w??a[0],dir:"asc"})},[]);const j=(n,t)=>(e==null?void 0:e.dir)==="asc"?n[(e==null?void 0:e.by)??a[0]]>t[(e==null?void 0:e.by)??a[0]]?1:-1:(e==null?void 0:e.dir)==="desc"?n[(e==null?void 0:e.by)??a[0]]>t[(e==null?void 0:e.by)??a[0]]?-1:1:0,f=(n,t)=>l(S,{...n,size:"medium",noPadding:!0,isTransparent:!0,noBorder:!0},t),V=n=>s.sort((t,i)=>j(t,i)).map((t,i)=>typeof t[n]=="object"?l("div",{className:h(o.item,o.icon),children:f(t[n],i.toString())},`${t[n]}-${i}`):l("span",{className:o.item,children:t[n]},`${t[n]}-${i}`)),R={"--list-gap":`${G}rem`};return W?l(z,{visible:!0,size:"md"}):m("div",{className:o.table,style:R,children:[m("div",{className:o.top,children:[C&&l(A,{order:5,children:C}),N&&l(P,{...N})]}),l("div",{className:o.mobile,children:s.map((n,t)=>{const i=Object.entries(n),r=i==null?void 0:i.filter(([c])=>!c.includes("icon")),u=i==null?void 0:i.filter(([c])=>c.includes("icon"));return m("div",{className:o.group,children:[r!=null&&r.length?r.map(([c,d])=>m("div",{className:o.row,children:[!_&&!c.includes("icon")?l("span",{className:o.columnTitle,children:`${c}: `}):"",l("span",{className:o.item,children:typeof d=="object"?f(d,`${c}-${t}`):d})]},`${c}-${t}`)):null,u!=null&&u.length?l("div",{className:o.icons,children:u.map(([c,d])=>typeof d=="object"&&f(d,`${c}-${t}`))}):null]},t)})}),l("div",{className:o.desktop,children:a==null?void 0:a.map((n,t)=>{const i=a==null?void 0:a.filter(r=>!r.includes("icon"));return m("div",{className:h(o.column,{[o.equalWidthColumn]:x,[o.textColumn]:!n.includes("icon"),[o.iconColumn]:n.includes("icon"),[o.lastTextColumn]:i[(i==null?void 0:i.length)-1]===n}),children:[!_&&l("span",{className:h(o.item,o.columnTitle,{[o.icon]:n.includes("icon")}),children:!n.includes("icon")&&m(L,{children:[n,l(S,{icon:(e==null?void 0:e.by)===n&&(e==null?void 0:e.dir)==="asc"?"icon-chevron-down":"icon-chevron-up",type:"button",onClick:()=>y({by:n,dir:(e==null?void 0:e.by)===n&&(e==null?void 0:e.dir)==="asc"?"desc":"asc"}),isTransparent:!0,noBorder:!0})]})}),V(n)]},`${n}-${t}`)})})]})};try{g.displayName="Table",g.__docgenInfo={description:"",displayName:"Table",props:{listItems:{defaultValue:null,description:"",name:"listItems",required:!0,type:{name:"TListItems"}},hideColumnTitles:{defaultValue:{value:"false"},description:"If true, no column titles will be display",name:"hideColumnTitles",required:!1,type:{name:"boolean"}},equalWidthColumns:{defaultValue:{value:"false"},description:"If true, each column will get equal width",name:"equalWidthColumns",required:!1,type:{name:"boolean"}},listGap:{defaultValue:{value:"0"},description:"Adds a gap (in rem) between the columns",name:"listGap",required:!1,type:{name:"number"}},initialSortBy:{defaultValue:{value:"'first column title'"},description:"What column title to sort by initially",name:"initialSortBy",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"undefined"},description:"loading contacts indicator",name:"loading",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"undefined"},description:"Title to display on top of table",name:"title",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"IButton"}}}}}catch{}const ge={title:"Design System/Atoms/Table",component:g,parameters:{controls:{exclude:["listItems"]}}},$={render:s=>l(F,{children:l(g,{...s})})},p={...$,args:{listItems:[{name:"Name 1",status:"OK",id:"1",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"},icon2:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 6",status:"IN PROGRESS",id:"2",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 3",status:"DONE",id:"3",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 5",status:"DONE",id:"4",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 2",status:"DONE",id:"5",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 4",status:"DONE",id:"6",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}},b={...$,args:{listItems:[{animal:"Dog",breed:"Golden Retriever",id:"1"},{animal:"Dog",breed:"German Shepherd",id:"2"},{animal:"Dog",breed:"English Setter",id:"3"}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}};var q,T,v;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(v=(T=p.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var O,D,E;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(D=b.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const fe=["TableStory","TableStoryTwo"];export{p as TableStory,b as TableStoryTwo,fe as __namedExportsOrder,ge as default};
