import{c as p}from"./index-09749a66.js";import{j as e,r as N}from"./jsx-runtime-03333307.js";import{B as V}from"./button-856a03f5.js";import{I as w}from"./icon-button-aa68e962.js";import{H as W}from"./heading-eedc9d10.js";import{P as _}from"./placeholder-3cf73146.js";import{C as K}from"./content-wrapper-adfa8526.js";import"./icon-a32914e5.js";import"./loader-5c06d14e.js";import"./button.module-867d0823.js";import"./ui-link-974ac70a.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";const M="_table_1nm6j_1",B="_top_1nm6j_8",F="_heading_1nm6j_22",J="_mobile_1nm6j_30",Q="_columnTitle_1nm6j_39",U="_group_1nm6j_45",X="_icons_1nm6j_49",Y="_row_1nm6j_57",Z="_item_1nm6j_64",ee="_desktop_1nm6j_69",ne="_column_1nm6j_39",ae="_equalWidthColumn_1nm6j_80",ie="_lastTextColumn_1nm6j_85",le="_columnTitleText_1nm6j_109",oe="_icon_1nm6j_49",n={table:M,top:B,heading:F,mobile:J,columnTitle:Q,group:U,icons:X,row:Y,item:Z,desktop:ee,column:ne,equalWidthColumn:ae,lastTextColumn:ie,columnTitleText:le,icon:oe},C=3,q=5,$=({title:r})=>e.jsxs("div",{className:n.table,children:[r&&e.jsx("div",{className:n.top,children:e.jsx(W,{className:n.heading,order:5,children:r})}),e.jsx("div",{className:n.mobile,children:Array.from({length:C}).map((h,d)=>e.jsx("div",{className:n.group,children:Array.from({length:q}).map((b,s)=>e.jsx("div",{className:n.row,children:e.jsx(_,{type:s%2===0?"p_short":"p_long",noMargin:!0})},s))},d))}),e.jsx("div",{className:n.desktop,children:Array.from({length:q}).map((h,d)=>e.jsxs("div",{className:p(n.column,n.lastTextColumn),children:[e.jsx("div",{className:p(n.item,n.columnTitle),children:e.jsx(_,{type:"p_short",noMargin:!0})}),Array.from({length:C}).map((b,s)=>e.jsx("div",{className:n.item,children:e.jsx(_,{type:s%2===0?"p_short":"p_long",noMargin:!0})},s))]},d))})]});$.__docgenInfo={description:"",methods:[],displayName:"GhostTable",props:{title:{required:!1,tsType:{name:"string"},description:""}}};const x=({listItems:r=[],hideColumnTitles:h=!1,equalWidthColumns:d=!1,listGap:b=0,loading:s,initialSortBy:P,title:y,action:j})=>{const[o,T]=N.useState(),R=r==null?void 0:r.sort((a,l)=>Object.keys(l).length-Object.keys(a).length)[0],c=r.length?Object.keys(R):[];N.useEffect(()=>{c.length>0&&T({by:P??c[0],dir:"asc"})},[]);const z=(a,l)=>{const i=(o==null?void 0:o.by)??c[0];return i?(o==null?void 0:o.dir)==="asc"?a[i]===l[i]?0:a[i]>l[i]?1:-1:(o==null?void 0:o.dir)==="desc"?a[i]===l[i]?0:a[i]>l[i]?-1:1:0:0},k=(a,l)=>a?e.jsx(w,{...a,size:"medium",noPadding:!0,isTransparent:!0,noBorder:!0,name:a.icon==="icon-edit"?"Edit field":"Delete field"},l):null,L=a=>r.sort((l,i)=>z(l,i)).map((l,i)=>typeof l[a]=="object"?e.jsx("div",{className:p(n.item,n.icon),children:k(l[a],i.toString())},`${l[a]}-${i}`):e.jsx("span",{className:n.item,children:l[a]},`${l[a]}-${i}`)),H={"--list-gap":`${b}rem`};return s?e.jsx($,{title:y}):e.jsxs("div",{className:n.table,style:H,children:[e.jsxs("div",{className:n.top,children:[y&&e.jsx(W,{className:n.heading,order:5,children:y}),j&&e.jsx(V,{...j})]}),e.jsx("div",{className:n.mobile,children:r.map((a,l)=>{const i=Object.entries(a||{}),m=i==null?void 0:i.filter(([t])=>!t.includes("icon")),v=i==null?void 0:i.filter(([t])=>t.includes("icon"));return e.jsxs("div",{className:n.group,children:[m!=null&&m.length?m.map(([t,u])=>e.jsxs("div",{className:n.row,children:[!h&&!t.includes("icon")?e.jsx("span",{className:n.columnTitle,children:`${t}: `}):"",e.jsx("span",{className:n.item,children:typeof u=="object"?k(u,`${t}-${l}`):u})]},`${t}-${l}`)):null,v!=null&&v.length?e.jsx("div",{className:n.icons,children:v.map(([t,u])=>typeof u=="object"&&k(u,`${t}-${l}`))}):null]},l)})}),e.jsx("div",{className:n.desktop,children:c==null?void 0:c.map((a,l)=>{const i=c==null?void 0:c.filter(m=>!m.includes("icon"));return e.jsxs("div",{className:p(n.column,{[n.equalWidthColumn]:d,[n.textColumn]:!a.includes("icon"),[n.iconColumn]:a.includes("icon"),[n.lastTextColumn]:i[(i==null?void 0:i.length)-1]===a}),children:[!h&&e.jsx("span",{className:p(n.item,n.columnTitle,{[n.icon]:a.includes("icon")}),children:!a.includes("icon")&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:n.columnTitleText,children:a}),e.jsx(w,{icon:(o==null?void 0:o.by)===a&&(o==null?void 0:o.dir)==="asc"?"icon-chevron-down":"icon-chevron-up",type:"button",onClick:()=>T({by:a,dir:(o==null?void 0:o.by)===a&&(o==null?void 0:o.dir)==="asc"?"desc":"asc"}),isTransparent:!0,noBorder:!0,name:"Sort by"})]})}),L(a)]},`${a}-${l}`)})})]})};x.__docgenInfo={description:"",methods:[],displayName:"Table",props:{listItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [key: string]: string | TIconButton }",signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | TIconButton",elements:[{name:"string"},{name:"intersection",raw:`{
  type: 'link' | 'button' // TODO: remove link option
  icon: TIcon
  name?: string
  size?: TIconButtonSize
  isTransparent?: boolean
  className?: string
  noPadding?: boolean
  noBorder?: boolean
  round?: boolean
  disabled?: boolean
  /**
   * If a positive number (1-99) has been provided a number  will be displayed in a notification format
   * @default undefined
   */
  notification?: number
  weight?: 'normal' | 'bold'
  surface?: 'primary' | 'white'
  animate?: 'default' | 'loading' | 'updated'
} & (TWithLink | TWithoutLink)`,elements:[{name:"signature",type:"object",raw:`{
  type: 'link' | 'button' // TODO: remove link option
  icon: TIcon
  name?: string
  size?: TIconButtonSize
  isTransparent?: boolean
  className?: string
  noPadding?: boolean
  noBorder?: boolean
  round?: boolean
  disabled?: boolean
  /**
   * If a positive number (1-99) has been provided a number  will be displayed in a notification format
   * @default undefined
   */
  notification?: number
  weight?: 'normal' | 'bold'
  surface?: 'primary' | 'white'
  animate?: 'default' | 'loading' | 'updated'
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'link' | 'button'",elements:[{name:"literal",value:"'link'"},{name:"literal",value:"'button'"}],required:!0}},{key:"icon",value:{name:"union",raw:`| 'icon-alert-circle'\r
| 'icon-bell'\r
| 'icon-arrow-right'\r
| 'icon-mail'\r
| 'icon-map-pin'\r
| 'icon-menu'\r
| 'icon-x'\r
| 'icon-phone'\r
| 'icon-refresh-cw'\r
| 'icon-search'\r
| 'icon-x-circle'\r
| 'icon-plus-circle'\r
| 'icon-plus'\r
| 'icon-chevron-up'\r
| 'icon-chevron-down'\r
| 'icon-chevron-left'\r
| 'icon-chevron-right'\r
| 'icon-chevrons-left'\r
| 'icon-chevrons-right'\r
| 'icon-layers'\r
| 'icon-check'\r
| 'icon-check-circle'\r
| 'icon-user'\r
| 'icon-heart'\r
| 'icon-shopping-cart'\r
| 'icon-award'\r
| 'icon-package'\r
| 'icon-users'\r
| 'icon-facebook'\r
| 'icon-instagram'\r
| 'icon-linkedin'\r
| 'icon-clipboard'\r
| 'icon-download'\r
| 'icon-calendar'\r
| 'icon-settings'\r
| 'icon-info'\r
| 'icon-play'\r
| 'icon-archive'\r
| 'icon-file'\r
| 'icon-file-text'\r
| 'icon-message-circle'\r
| 'icon-share'\r
| 'icon-arrow-down-circle'\r
| 'icon-trash'\r
| 'icon-trash-2'\r
| 'icon-edit'\r
| 'icon-truck'\r
| 'icon-share-2'\r
| 'icon-heart-o'\r
| 'icon-heart1'\r
| 'icon-file-plus'\r
| 'icon-eye'\r
| 'icon-save'\r
| 'icon-alert-triangle'\r
| 'icon-trash-2'\r
| 'icon-minus-circle'\r
| 'icon-minus'`,elements:[{name:"literal",value:"'icon-alert-circle'"},{name:"literal",value:"'icon-bell'"},{name:"literal",value:"'icon-arrow-right'"},{name:"literal",value:"'icon-mail'"},{name:"literal",value:"'icon-map-pin'"},{name:"literal",value:"'icon-menu'"},{name:"literal",value:"'icon-x'"},{name:"literal",value:"'icon-phone'"},{name:"literal",value:"'icon-refresh-cw'"},{name:"literal",value:"'icon-search'"},{name:"literal",value:"'icon-x-circle'"},{name:"literal",value:"'icon-plus-circle'"},{name:"literal",value:"'icon-plus'"},{name:"literal",value:"'icon-chevron-up'"},{name:"literal",value:"'icon-chevron-down'"},{name:"literal",value:"'icon-chevron-left'"},{name:"literal",value:"'icon-chevron-right'"},{name:"literal",value:"'icon-chevrons-left'"},{name:"literal",value:"'icon-chevrons-right'"},{name:"literal",value:"'icon-layers'"},{name:"literal",value:"'icon-check'"},{name:"literal",value:"'icon-check-circle'"},{name:"literal",value:"'icon-user'"},{name:"literal",value:"'icon-heart'"},{name:"literal",value:"'icon-shopping-cart'"},{name:"literal",value:"'icon-award'"},{name:"literal",value:"'icon-package'"},{name:"literal",value:"'icon-users'"},{name:"literal",value:"'icon-facebook'"},{name:"literal",value:"'icon-instagram'"},{name:"literal",value:"'icon-linkedin'"},{name:"literal",value:"'icon-clipboard'"},{name:"literal",value:"'icon-download'"},{name:"literal",value:"'icon-calendar'"},{name:"literal",value:"'icon-settings'"},{name:"literal",value:"'icon-info'"},{name:"literal",value:"'icon-play'"},{name:"literal",value:"'icon-archive'"},{name:"literal",value:"'icon-file'"},{name:"literal",value:"'icon-file-text'"},{name:"literal",value:"'icon-message-circle'"},{name:"literal",value:"'icon-share'"},{name:"literal",value:"'icon-arrow-down-circle'"},{name:"literal",value:"'icon-trash'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-edit'"},{name:"literal",value:"'icon-truck'"},{name:"literal",value:"'icon-share-2'"},{name:"literal",value:"'icon-heart-o'"},{name:"literal",value:"'icon-heart1'"},{name:"literal",value:"'icon-file-plus'"},{name:"literal",value:"'icon-eye'"},{name:"literal",value:"'icon-save'"},{name:"literal",value:"'icon-alert-triangle'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-minus-circle'"},{name:"literal",value:"'icon-minus'"}],required:!0}},{key:"name",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:"'x-small' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1}},{key:"isTransparent",value:{name:"boolean",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"noPadding",value:{name:"boolean",required:!1}},{key:"noBorder",value:{name:"boolean",required:!1}},{key:"round",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"notification",value:{name:"number",required:!1},description:`If a positive number (1-99) has been provided a number  will be displayed in a notification format
@default undefined`},{key:"weight",value:{name:"union",raw:"'normal' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'bold'"}],required:!1}},{key:"surface",value:{name:"union",raw:"'primary' | 'white'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'white'"}],required:!1}},{key:"animate",value:{name:"union",raw:"'default' | 'loading' | 'updated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'updated'"}],required:!1}}]}},{name:"unknown"}]}],required:!0}}]}}],raw:"Array<TListItem>"},description:"",defaultValue:{value:"[]",computed:!1}},hideColumnTitles:{required:!1,tsType:{name:"boolean"},description:`If true, no column titles will be display
@default false`,defaultValue:{value:"false",computed:!1}},equalWidthColumns:{required:!1,tsType:{name:"boolean"},description:`If true, each column will get equal width
@default false`,defaultValue:{value:"false",computed:!1}},listGap:{required:!1,tsType:{name:"number"},description:`Adds a gap (in rem) between the columns
@default 0`,defaultValue:{value:"0",computed:!1}},initialSortBy:{required:!1,tsType:{name:"string"},description:`What column title to sort by initially
@default 'first column title'`},loading:{required:!1,tsType:{name:"boolean"},description:`loading contacts indicator
@default undefined`},title:{required:!1,tsType:{name:"string"},description:`Title to display on top of table
@default undefined`},action:{required:!1,tsType:{name:"IButton"},description:""}}};const ye={title:"Design System/Atoms/Table",component:x,parameters:{controls:{exclude:["listItems"]}}},A={render:r=>e.jsx(K,{children:e.jsx(x,{...r})})},f={...A,args:{listItems:[{name:"Name 1",status:"OK",id:"1",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"},icon2:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 2",status:"IN PROGRESS",id:"2",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 3",status:"DONE",id:"3",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 4",status:"DONE",id:"4",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 5",status:"DONE",id:"5",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 6",status:"DONE",id:"6",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}},g={...A,args:{listItems:[{animal:"Dog",breed:"Golden Retriever",id:"1"},{animal:"Dog",breed:"German Shepherd",id:"2"},{animal:"Dog",breed:"English Setter",id:"3"}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}};var S,O,I;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...TableStoryTemplate,
  args: ({
    listItems: [{
      name: 'Name 1',
      status: 'OK',
      id: '1',
      icon: {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      },
      icon2: {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 2',
      status: 'IN PROGRESS',
      id: '2',
      icon: {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 3',
      status: 'DONE',
      id: '3',
      icon: {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 4',
      status: 'DONE',
      id: '4',
      icon: {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 5',
      status: 'DONE',
      id: '5',
      icon: {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }, {
      name: 'Name 6',
      status: 'DONE',
      id: '6',
      icon: {
        icon: 'icon-alert-circle',
        onClick: () => console.log('clicked'),
        type: 'button'
      }
    }],
    hideColumnTitles: false,
    equalWidthColumns: false,
    listGap: 0
  } as ITable)
}`,...(I=(O=f.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var D,E,G;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(E=g.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const ke=["TableStory","TableStoryTwo"];export{f as TableStory,g as TableStoryTwo,ke as __namedExportsOrder,ye as default};
