import{r as n,a as g,j as a}from"./jsx-runtime-a3a6c0b8.js";import{c as N}from"./index-a587463d.js";import{B as q}from"./button-93555bd8.js";import{A as V}from"./index-4058f88b.js";import{m as w}from"./motion-54668070.js";const B="_selectListWrapper_1gkwv_1",O="_selectList_1gkwv_1",R="_left_1gkwv_35",W="_right_1gkwv_40",z="_selectItem_1gkwv_45",E="_selectItemButton_1gkwv_53",j="_radio_1gkwv_68",T="_label_1gkwv_74",s={selectListWrapper:B,selectList:O,left:R,right:W,selectItem:z,selectItemButton:E,radio:j,label:T},y=({options:r,preSelected:L,onClickButton:c,onClickItem:o,closeOnSelect:I,disabled:u,placeholder:v})=>{const i=n.useRef(null),[m,f]=n.useState(!1),[p,_]=n.useState("left"),[l,S]=n.useState(L),k=n.useRef(null),b=()=>{c==null||c(),f(!m)},x=e=>{o==null||o(e),S(t=>(t==null?void 0:t.name)===e.name?t:e),I&&f(!1)};function d(){var t,h;window.innerWidth-(((h=(t=i==null?void 0:i.current)==null?void 0:t.getBoundingClientRect())==null?void 0:h.right)??0)<=32?_("right"):p!=="left"&&_("left")}return n.useEffect(()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[]),g("div",{ref:k,className:s.selectListWrapper,children:[a(q,{ref:i,type:"button",surface:"x",size:"xx-small",onClick:b,iconRight:{icon:m?"icon-chevron-up":"icon-chevron-down"},disabled:u,children:(l==null?void 0:l.name)??v}),a(V,{children:m&&a(w.ul,{className:N(s.selectList,s[p]),children:r==null?void 0:r.map((e,t)=>a(w.li,{className:s.selectItem,children:g("button",{className:s.selectItemButton,onClick:()=>x(e),disabled:u,children:[a("input",{type:"radio",checked:e.name===(l==null?void 0:l.name),className:s.radio,readOnly:!0}),a("span",{className:s.label,children:e.name})]})},`${e.name}-${t}`))})})]})};try{y.displayName="SelectList",y.__docgenInfo={description:"",displayName:"SelectList",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TSelectItem[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},preSelected:{defaultValue:null,description:"",name:"preSelected",required:!1,type:{name:"TSelectItem"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"(() => void)"}},onClickItem:{defaultValue:null,description:"",name:"onClickItem",required:!1,type:{name:"((item?: TSelectItem) => void)"}},closeOnSelect:{defaultValue:null,description:"",name:"closeOnSelect",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{y as S};