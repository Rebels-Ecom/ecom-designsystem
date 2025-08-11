import{j as n,r as h}from"./jsx-runtime-03333307.js";import{I as b}from"./icon-a32914e5.js";import{c as f}from"./index-09749a66.js";const _="_clickableListItem_165r9_1",g="_label_165r9_16",k="_icon_165r9_17",w="_small_165r9_24",x="_start_165r9_32",y="_center_165r9_36",I="_end_165r9_40",L="_bold_165r9_44",C="_blue_165r9_51",T="_orange_165r9_58",e={clickableListItem:_,label:g,icon:k,small:w,start:x,center:y,end:I,bold:L,blue:C,orange:T},c=({onClick:i,label:r,icon:a,weight:m,color:u="default",align:v="space-between",size:d="medium",...p})=>n.jsxs("button",{type:"button",className:f(e.clickableListItem,e[u],e[v],e[d],{[e.bold]:m==="bold"}),onClick:i,...p,children:[n.jsx("span",{className:e.label,children:r}),a&&n.jsx(b,{className:e.icon,icon:a,"aria-hidden":"true"})]});c.__docgenInfo={description:"",methods:[],displayName:"ClickableListItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:`| 'icon-alert-circle'\r
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
| 'icon-minus'`,elements:[{name:"literal",value:"'icon-alert-circle'"},{name:"literal",value:"'icon-bell'"},{name:"literal",value:"'icon-arrow-right'"},{name:"literal",value:"'icon-mail'"},{name:"literal",value:"'icon-map-pin'"},{name:"literal",value:"'icon-menu'"},{name:"literal",value:"'icon-x'"},{name:"literal",value:"'icon-phone'"},{name:"literal",value:"'icon-refresh-cw'"},{name:"literal",value:"'icon-search'"},{name:"literal",value:"'icon-x-circle'"},{name:"literal",value:"'icon-plus-circle'"},{name:"literal",value:"'icon-plus'"},{name:"literal",value:"'icon-chevron-up'"},{name:"literal",value:"'icon-chevron-down'"},{name:"literal",value:"'icon-chevron-left'"},{name:"literal",value:"'icon-chevron-right'"},{name:"literal",value:"'icon-chevrons-left'"},{name:"literal",value:"'icon-chevrons-right'"},{name:"literal",value:"'icon-layers'"},{name:"literal",value:"'icon-check'"},{name:"literal",value:"'icon-check-circle'"},{name:"literal",value:"'icon-user'"},{name:"literal",value:"'icon-heart'"},{name:"literal",value:"'icon-shopping-cart'"},{name:"literal",value:"'icon-award'"},{name:"literal",value:"'icon-package'"},{name:"literal",value:"'icon-users'"},{name:"literal",value:"'icon-facebook'"},{name:"literal",value:"'icon-instagram'"},{name:"literal",value:"'icon-linkedin'"},{name:"literal",value:"'icon-clipboard'"},{name:"literal",value:"'icon-download'"},{name:"literal",value:"'icon-calendar'"},{name:"literal",value:"'icon-settings'"},{name:"literal",value:"'icon-info'"},{name:"literal",value:"'icon-play'"},{name:"literal",value:"'icon-archive'"},{name:"literal",value:"'icon-file'"},{name:"literal",value:"'icon-file-text'"},{name:"literal",value:"'icon-message-circle'"},{name:"literal",value:"'icon-share'"},{name:"literal",value:"'icon-arrow-down-circle'"},{name:"literal",value:"'icon-trash'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-edit'"},{name:"literal",value:"'icon-truck'"},{name:"literal",value:"'icon-share-2'"},{name:"literal",value:"'icon-heart-o'"},{name:"literal",value:"'icon-heart1'"},{name:"literal",value:"'icon-file-plus'"},{name:"literal",value:"'icon-eye'"},{name:"literal",value:"'icon-save'"},{name:"literal",value:"'icon-alert-triangle'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-minus-circle'"},{name:"literal",value:"'icon-minus'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'bold'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'default' | 'blue' | 'orange'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'orange'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'space-between'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'space-between'"}]},description:"",defaultValue:{value:"'space-between'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const E={title:"Design System/Molecules/ClickableListItem",component:c},j={render:({...i})=>{const[r,a]=h.useState(!1);return n.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:n.jsx(c,{...i,onClick:()=>a(!r)})})}},l={...j,args:{label:"Click me",icon:"icon-x"}};var t,o,s;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...ClickableListItemStoryTemplate,
  args: {
    label: 'Click me',
    icon: 'icon-x'
  }
}`,...(s=(o=l.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const V=["ClickableListItem_Loka"];export{l as ClickableListItem_Loka,V as __namedExportsOrder,E as default};
