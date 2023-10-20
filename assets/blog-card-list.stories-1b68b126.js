import{r as y}from"./index-6f814c40.js";import{c as Y}from"./index-74f03c09.js";import{B as Z,a as v,b as O,c as A,d as D,e as z,f as G,g as H,h as J,i as K,j as Q,k as i,l as g,m as d,n as $,o as rr,p as ar,q as sr}from"./blog-card.stories-77adcf0b.js";import{j as er,a as t}from"./jsx-runtime-76c5c2e2.js";import{m as tr}from"./motion-354a1bac.js";import{B as or}from"./button-603bb392.js";import{C as nr}from"./content-wrapper-854859bc.js";const lr="_blogCardList_tp175_1",ir="_title_tp175_2",gr="_list_tp175_6",dr="_listItem_tp175_17",mr="_maxColumnsThree_tp175_24",pr="_maxColumnsFour_tp175_56",cr="_showMoreButton_tp175_89",s={blogCardList:lr,title:ir,list:gr,listItem:dr,maxColumnsThree:mr,maxColumnsFour:pr,showMoreButton:cr};function ur(r){return r===1?s.fullWidth:r===3?s.maxColumnsThree:s.maxColumnsFour}const B=({title:r,blogCards:a})=>{if(!Array.isArray(a)||!a.length)return null;const[e,S]=y.useState(a.slice(0,4)),n=y.useRef(null),R=()=>{var l;n!=null&&n.current&&((l=n.current)==null||l.scrollIntoView({behavior:"smooth",block:"end"}))},U=()=>{e.length===a.length?S(a.slice(0,4)):S(a.slice(0,e.length+4)),setTimeout(()=>R(),100)};return er("div",{className:s.blogCardList,children:[r&&t("h3",{className:s.title,children:r}),t("ul",{className:s.list,children:e.map((l,X)=>t(tr.li,{className:Y(s.listItem,ur(e.length)),initial:{y:"-10%",opacity:0},animate:{y:0,opacity:1},children:t(Z,{...l,fullWidth:e.length===1,maxChar:e.length===3?l.maxChar??200:void 0})},X))}),a.length>4&&t(or,{ref:n,className:s.showMoreButton,type:"button",surface:"primary",onClick:U,children:e.length===a.length?"Visa färre":"Visa fler"})]})};try{B.displayName="BlogCardList",B.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const Cr={title:"Design System/Organisms/BlogCardList",component:B},o={render:r=>t(nr,{children:t(B,{blogCards:r.blogCards,title:r.title})})};v.args,O.args,A.args,D.args,z.args,G.args,H.args,J.args,K.args,Q.args,i.args,g.args,d.args;const _r=[$.args],Br=[v.args,O.args,A.args,D.args],Sr=[z.args,G.args,H.args],yr=[J.args,K.args,Q.args],hr=[i.args,g.args,d.args,i.args,g.args,d.args,i.args,g.args,d.args,i.args,g.args,d.args],Lr=[rr.args,ar.args,sr.args],m={...o,args:{blogCards:_r}},p={...o,args:{title:"Varför Spendrups",blogCards:Br}},c={...o,args:{blogCards:Sr}},u={...o,args:{blogCards:yr}},C={...o,args:{blogCards:hr}},_={...o,args:{title:"Likande varumärken",blogCards:Lr}};var h,L,f;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(f=(L=m.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var b,w,x;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: whySpendrupsList
  }
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var T,k,V;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsCooperation
  }
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var q,E,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsBrewing
  }
}`,...(F=(E=u.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var I,P,M;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment
  }
}`,...(M=(P=C.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var N,W,j;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Likande varumärken',
    blogCards: brandPromoPage_Blog
  }
}`,...(j=(W=_.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const fr=["BlogCardListStory_Fullwidth","BlogCardListStory_VarförSpendrups","BlogCardListStory_Samarbete","BlogCardListStory_Brewing","BlogCardListStory_Equipmemt","BlogCardListStory_Likande_Varumarken"],Er=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_Brewing:u,BlogCardListStory_Equipmemt:C,BlogCardListStory_Fullwidth:m,BlogCardListStory_Likande_Varumarken:_,BlogCardListStory_Samarbete:c,BlogCardListStory_VarförSpendrups:p,__namedExportsOrder:fr,default:Cr},Symbol.toStringTag,{value:"Module"}));export{_ as B,B as a,C as b,c,u as d,p as e,Er as f};
//# sourceMappingURL=blog-card-list.stories-1b68b126.js.map
