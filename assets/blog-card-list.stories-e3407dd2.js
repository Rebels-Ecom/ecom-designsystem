import{j as e,a as R,F as U,r as b}from"./jsx-runtime-a3a6c0b8.js";import{c as D}from"./index-a587463d.js";import{a as y,B as X,b as z,c as M,d as i,e as f,f as h}from"./blog-card.stories-538e62f8.js";import{C as L,a as T}from"./carousel-851c0365.js";import{B as Y,A as Z}from"./below-b6d38995.js";import{C as x}from"./content-wrapper-c985da24.js";import{F as ee}from"./flex-container-145d4933.js";import{m as re}from"./motion-54668070.js";const te="_blogCardList_1iteq_1",se="_title_1iteq_2",ae="_list_1iteq_6",le="_listItem_1iteq_21",oe="_maxColumnsThree_1iteq_28",ne="_odd_1iteq_36",o={blogCardList:te,title:se,list:ae,listItem:le,maxColumnsThree:oe,odd:ne},ie="_flexItem_u6s27_1",de={flexItem:ie},I=({flex:r,className:a="",children:n})=>{const _={"--flex-sm":r.sm??"1","--flex-md":r.md??"1","--flex-lg":r.lg??"1"};return e("div",{className:D(de.flexItem,a),style:_,children:n&&n})};try{I.displayName="FlexItem",I.__docgenInfo={description:"",displayName:"FlexItem",props:{flex:{defaultValue:null,description:"Defines the flex property per breakpoint",name:"flex",required:!0,type:{name:"{ sm?: string | undefined; md?: string | undefined; lg?: string | undefined; }"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=({title:r,blogCards:a,swipe:n,oddHeights:_,stretchItems:J})=>{if(!Array.isArray(a)||!a.length)return null;const K=(a==null?void 0:a.length)>3,Q=(t,s)=>e(re.div,{className:D(o.listItem,o.maxColumnsThree,s?o.even:o.odd),initial:{y:"-10%",opacity:0},animate:{y:0,opacity:1},children:e(y,{...t,fullWidth:t.fullWidth,maxChar:160})}),B=t=>{const s=J?"1 1":"0 1";return e(I,{flex:t.fullWidth?{lg:"1"}:{sm:`${s} 100%`,md:`${s} calc(33% - 1rem)`,lg:`${s} calc(25% - 1rem)`},children:e(y,{...t,fullWidth:t.fullWidth,maxChar:t.fullWidth?600:t.maxChar??200})})},S=t=>e(y,{...t,fullWidth:t.fullWidth,maxChar:t.maxChar??200});return R("div",{className:o.blogCardList,children:[r&&e("h3",{className:o.title,children:r}),e(Y,{breakpoint:"md",children:t=>t&&e(U,{children:n?e(L,{offsetArrows:!0,padding:"2rem",children:a.map((s,l)=>e(T,{children:S(s)},l))}):e(x,{children:e("ul",{className:o.list,children:a.map((s,l)=>e(b.Fragment,{children:B(s)},l))})})})}),e(Z,{breakpoint:"md",children:t=>t&&e(x,{children:n&&K?e(L,{offsetArrows:!0,breakpoints:{lg:{perPage:4},md:{perPage:2}},children:a.map((s,l)=>e(T,{children:S(s)},l))}):e(ee,{wrap:!0,className:o.list,children:a.map((s,l)=>e(b.Fragment,{children:_?Q(s,l%2==0):B(s)},l))})})})]})};try{C.displayName="BlogCardList",C.__docgenInfo={description:"",displayName:"BlogCardList",props:{blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},swipe:{defaultValue:null,description:"",name:"swipe",required:!1,type:{name:"boolean"}},oddHeights:{defaultValue:null,description:"Applies a specific design for three card layouts only",name:"oddHeights",required:!1,type:{name:"boolean"}},stretchItems:{defaultValue:null,description:"If true, flex items will fill available width",name:"stretchItems",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"Design System/Organisms/BlogCardList",component:C},g={render:r=>e(x,{children:e(C,{blogCards:r.blogCards,title:r.title,oddHeights:!!r.oddHeights,stretchItems:r.stretchItems,swipe:r.swipe})})},G=[X.args],ce=[z.args,M.args],pe=[z.args,M.args,i.args],ue=[i.args,f.args,h.args,i.args,f.args,h.args,i.args,f.args,h.args,i.args,f.args,h.args],d={...g,args:{blogCards:G}},m={...g,args:{blogCards:G.map(r=>({...r,fullWidth:!1})),stretchItems:!1}},c={...g,args:{title:"Varför Spendrups",blogCards:ce,stretchItems:!1}},p={...g,args:{title:"Varför Spendrups",blogCards:pe,oddHeights:!0,stretchItems:!1}},u={...g,args:{blogCards:ue,swipe:!1,stretchItems:!1}};var q,F,w;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var W,N,V;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList.map(x => ({
      ...x,
      fullWidth: false
    })),
    stretchItems: false
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var v,A,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: twoCardList,
    stretchItems: false
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var H,j,E;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: threeCardList,
    oddHeights: true,
    stretchItems: false
  }
}`,...(E=(j=p.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var k,P,$;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment,
    swipe: false,
    stretchItems: false
  }
}`,...($=(P=u.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const ge=["Full_Width","One_Card","Two_Cards","Three_Cards","Four_Cards"],Se=Object.freeze(Object.defineProperty({__proto__:null,Four_Cards:u,Full_Width:d,One_Card:m,Three_Cards:p,Two_Cards:c,__namedExportsOrder:ge,default:me},Symbol.toStringTag,{value:"Module"}));export{C as B,u as F,p as T,d as a,Se as b};
