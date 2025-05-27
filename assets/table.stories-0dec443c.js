import{c as f}from"./index-09749a66.js";import{r as _,j as i}from"./jsx-runtime-03333307.js";import{B as R}from"./button-1de8d46b.js";import{I as w}from"./icon-button-c6bda5d8.js";import{L}from"./loader-5c06d14e.js";import{H as P}from"./heading-ba18f9a9.js";import{C as A}from"./content-wrapper-adfa8526.js";import"./icon-a32914e5.js";import"./button.module-867d0823.js";import"./ui-link-974ac70a.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";const V="_table_1nm6j_1",K="_top_1nm6j_8",B="_heading_1nm6j_22",H="_mobile_1nm6j_30",F="_columnTitle_1nm6j_39",J="_group_1nm6j_45",M="_icons_1nm6j_49",Q="_row_1nm6j_57",U="_item_1nm6j_64",X="_desktop_1nm6j_69",Y="_column_1nm6j_39",Z="_equalWidthColumn_1nm6j_80",ee="_lastTextColumn_1nm6j_85",ne="_columnTitleText_1nm6j_109",ae="_icon_1nm6j_49",l={table:V,top:K,heading:B,mobile:H,columnTitle:F,group:J,icons:M,row:Q,item:U,desktop:X,column:Y,equalWidthColumn:Z,lastTextColumn:ee,columnTitleText:ne,icon:ae},h=({listItems:c=[],hideColumnTitles:b=!1,equalWidthColumns:O=!1,listGap:I=0,loading:D,initialSortBy:E,title:g,action:y})=>{const[o,k]=_.useState(),$=c==null?void 0:c.sort((e,a)=>Object.keys(a).length-Object.keys(e).length)[0],t=c.length?Object.keys($):[];_.useEffect(()=>{t.length>0&&k({by:E??t[0],dir:"asc"})},[]);const W=(e,a)=>{const n=(o==null?void 0:o.by)??t[0];return n?(o==null?void 0:o.dir)==="asc"?e[n]===a[n]?0:e[n]>a[n]?1:-1:(o==null?void 0:o.dir)==="desc"?e[n]===a[n]?0:e[n]>a[n]?-1:1:0:0},v=(e,a)=>e?i.jsx(w,{...e,size:"medium",noPadding:!0,isTransparent:!0,noBorder:!0,name:e.icon==="icon-edit"?"Edit field":"Delete field"},a):null,G=e=>c.sort((a,n)=>W(a,n)).map((a,n)=>typeof a[e]=="object"?i.jsx("div",{className:f(l.item,l.icon),children:v(a[e],n.toString())},`${a[e]}-${n}`):i.jsx("span",{className:l.item,children:a[e]},`${a[e]}-${n}`)),z={"--list-gap":`${I}rem`};return D?i.jsx(L,{visible:!0,size:"md"}):i.jsxs("div",{className:l.table,style:z,children:[i.jsxs("div",{className:l.top,children:[g&&i.jsx(P,{className:l.heading,order:5,children:g}),y&&i.jsx(R,{...y})]}),i.jsx("div",{className:l.mobile,children:c.map((e,a)=>{const n=Object.entries(e||{}),s=n==null?void 0:n.filter(([r])=>!r.includes("icon")),m=n==null?void 0:n.filter(([r])=>r.includes("icon"));return i.jsxs("div",{className:l.group,children:[s!=null&&s.length?s.map(([r,u])=>i.jsxs("div",{className:l.row,children:[!b&&!r.includes("icon")?i.jsx("span",{className:l.columnTitle,children:`${r}: `}):"",i.jsx("span",{className:l.item,children:typeof u=="object"?v(u,`${r}-${a}`):u})]},`${r}-${a}`)):null,m!=null&&m.length?i.jsx("div",{className:l.icons,children:m.map(([r,u])=>typeof u=="object"&&v(u,`${r}-${a}`))}):null]},a)})}),i.jsx("div",{className:l.desktop,children:t==null?void 0:t.map((e,a)=>{const n=t==null?void 0:t.filter(s=>!s.includes("icon"));return i.jsxs("div",{className:f(l.column,{[l.equalWidthColumn]:O,[l.textColumn]:!e.includes("icon"),[l.iconColumn]:e.includes("icon"),[l.lastTextColumn]:n[(n==null?void 0:n.length)-1]===e}),children:[!b&&i.jsx("span",{className:f(l.item,l.columnTitle,{[l.icon]:e.includes("icon")}),children:!e.includes("icon")&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:l.columnTitleText,children:e}),i.jsx(w,{icon:(o==null?void 0:o.by)===e&&(o==null?void 0:o.dir)==="asc"?"icon-chevron-down":"icon-chevron-up",type:"button",onClick:()=>k({by:e,dir:(o==null?void 0:o.by)===e&&(o==null?void 0:o.dir)==="asc"?"desc":"asc"}),isTransparent:!0,noBorder:!0,name:"Sort by"})]})}),G(e)]},`${e}-${a}`)})})]})};h.__docgenInfo={description:"",methods:[],displayName:"Table",props:{listItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [key: string]: string | TIconButton }",signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | TIconButton",elements:[{name:"string"},{name:"intersection",raw:`{
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
@default undefined`},action:{required:!1,tsType:{name:"IButton"},description:""}}};const fe={title:"Design System/Atoms/Table",component:h,parameters:{controls:{exclude:["listItems"]}}},S={render:c=>i.jsx(A,{children:i.jsx(h,{...c})})},d={...S,args:{listItems:[{name:"Name 1",status:"OK",id:"1",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"},icon2:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 2",status:"IN PROGRESS",id:"2",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 3",status:"DONE",id:"3",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 4",status:"DONE",id:"4",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 5",status:"DONE",id:"5",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}},{name:"Name 6",status:"DONE",id:"6",icon:{icon:"icon-alert-circle",onClick:()=>console.log("clicked"),type:"button"}}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}},p={...S,args:{listItems:[{animal:"Dog",breed:"Golden Retriever",id:"1"},{animal:"Dog",breed:"German Shepherd",id:"2"},{animal:"Dog",breed:"English Setter",id:"3"}],hideColumnTitles:!1,equalWidthColumns:!1,listGap:0}};var j,x,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(x=d.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var N,C,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(C=p.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const he=["TableStory","TableStoryTwo"];export{d as TableStory,p as TableStoryTwo,he as __namedExportsOrder,fe as default};
