import{r as k,j as a,a as m,F as L}from"./jsx-runtime-a3a6c0b8.js";import{I as S}from"./icon-button-c1cc9278.js";import{c as h}from"./index-a587463d.js";import{B as P}from"./button-369dade1.js";import{L as z}from"./loader-72deb8c4.js";import{H as A}from"./heading-49a03c05.js";import{C as F}from"./content-wrapper-c985da24.js";import"./_commonjsHelpers-de833af9.js";import"./ui-link-a18343fc.js";import"./icon-5fefd509.js";import"./motion-54668070.js";import"./button.module-16a60bae.js";const H="_table_1f266_1",K="_top_1f266_8",J="_heading_1f266_19",M="_mobile_1f266_27",Q="_columnTitle_1f266_36",U="_group_1f266_42",X="_icons_1f266_46",Y="_row_1f266_54",Z="_item_1f266_61",B="_desktop_1f266_66",ee="_column_1f266_36",ne="_equalWidthColumn_1f266_77",te="_lastTextColumn_1f266_82",oe="_icon_1f266_46",o={table:H,top:K,heading:J,mobile:M,columnTitle:Q,group:U,icons:X,row:Y,item:Z,desktop:B,column:ee,equalWidthColumn:ne,lastTextColumn:te,icon:oe},b=({listItems:s,hideColumnTitles:_=!1,equalWidthColumns:x=!1,listGap:G=0,loading:W,initialSortBy:w,title:C,action:N})=>{const[e,y]=k.useState(),I=s==null?void 0:s.sort((n,t)=>Object.keys(t).length-Object.keys(n).length)[0],l=s.length?Object.keys(I):[];k.useEffect(()=>{y({by:w??l[0],dir:"asc"})},[]);const j=(n,t)=>(e==null?void 0:e.dir)==="asc"?n[(e==null?void 0:e.by)??l[0]]>t[(e==null?void 0:e.by)??l[0]]?1:-1:(e==null?void 0:e.dir)==="desc"?n[(e==null?void 0:e.by)??l[0]]>t[(e==null?void 0:e.by)??l[0]]?-1:1:0,g=(n,t)=>a(S,{...n,size:"medium",noPadding:!0,isTransparent:!0,noBorder:!0},t),V=n=>s.sort((t,i)=>j(t,i)).map((t,i)=>typeof t[n]=="object"?a("div",{className:h(o.item,o.icon),children:g(t[n],i.toString())},`${t[n]}-${i}`):a("span",{className:o.item,children:t[n]},`${t[n]}-${i}`)),R={"--list-gap":`${G}rem`};return W?a(z,{visible:!0,size:"md"}):m("div",{className:o.table,style:R,children:[m("div",{className:o.top,children:[C&&a(A,{className:o.heading,order:5,children:C}),N&&a(P,{...N})]}),a("div",{className:o.mobile,children:s.map((n,t)=>{const i=Object.entries(n),r=i==null?void 0:i.filter(([c])=>!c.includes("icon")),u=i==null?void 0:i.filter(([c])=>c.includes("icon"));return m("div",{className:o.group,children:[r!=null&&r.length?r.map(([c,d])=>m("div",{className:o.row,children:[!_&&!c.includes("icon")?a("span",{className:o.columnTitle,children:`${c}: `}):"",a("span",{className:o.item,children:typeof d=="object"?g(d,`${c}-${t}`):d})]},`${c}-${t}`)):null,u!=null&&u.length?a("div",{className:o.icons,children:u.map(([c,d])=>typeof d=="object"&&g(d,`${c}-${t}`))}):null]},t)})}),a("div",{className:o.desktop,children:l==null?void 0:l.map((n,t)=>{const i=l==null?void 0:l.filter(r=>!r.includes("icon"));return m("div",{className:h(o.column,{[o.equalWidthColumn]:x,[o.textColumn]:!n.includes("icon"),[o.iconColumn]:n.includes("icon"),[o.lastTextColumn]:i[(i==null?void 0:i.length)-1]===n}),children:[!_&&a("span",{className:h(o.item,o.columnTitle,{[o.icon]:n.includes("icon")}),children:!n.includes("icon")&&m(L,{children:[n,a(S,{icon:(e==null?void 0:e.by)===n&&(e==null?void 0:e.dir)==="asc"?"icon-chevron-down":"icon-chevron-up",type:"button",onClick:()=>y({by:n,dir:(e==null?void 0:e.by)===n&&(e==null?void 0:e.dir)==="asc"?"desc":"asc"}),isTransparent:!0,noBorder:!0})]})}),V(n)]},`${n}-${t}`)})})]})};try{b.displayName="Table",b.__docgenInfo={description:"",displayName:"Table",props:{listItems:{defaultValue:null,description:"",name:"listItems",required:!0,type:{name:"TListItems"}},hideColumnTitles:{defaultValue:{value:"false"},description:"If true, no column titles will be display",name:"hideColumnTitles",required:!1,type:{name:"boolean"}},equalWidthColumns:{defaultValue:{value:"false"},description:"If true, each column will get equal width",name:"equalWidthColumns",required:!1,type:{name:"boolean"}},listGap:{defaultValue:{value:"0"},description:"Adds a gap (in rem) between the columns",name:"listGap",required:!1,type:{name:"number"}},initialSortBy:{defaultValue:{value:"'first column title'"},description:"What column title to sort by initially",name:"initialSortBy",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"undefined"},description:"loading contacts indicator",name:"loading",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"undefined"},description:"Title to display on top of table",name:"title",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"IButton"}}}}}catch{}const ge={title:"Design System/Atoms/Table",component:b,parameters:{controls:{exclude:["listItems"]}}},$={render:s=>a(F,{children:a(b,{...s})})},p={...$,args:{listItems:[{name:"Name 1",status:"OK",id:"1",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"},icon2:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 6",status:"IN PROGRESS",id:"2",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 3",status:"DONE",id:"3",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 5",status:"DONE",id:"4",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 2",status:"DONE",id:"5",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 4",status:"DONE",id:"6",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}},f={...$,args:{listItems:[{animal:"Dog",breed:"Golden Retriever",id:"1"},{animal:"Dog",breed:"German Shepherd",id:"2"},{animal:"Dog",breed:"English Setter",id:"3"}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}};var q,T,v;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(v=(T=p.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var O,D,E;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(D=f.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const he=["TableStory","TableStoryTwo"];export{p as TableStory,f as TableStoryTwo,he as __namedExportsOrder,ge as default};
