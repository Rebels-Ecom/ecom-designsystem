import{r as Y}from"./index-6f814c40.js";import{c as Z}from"./index-74f03c09.js";import{B as $,a as D,b as M,c as z,d as G,e as H,f as J,g as K,h as Q,i as R,j as U,k as l,l as i,m as g,n as rr,o as ar,p as sr,q as er}from"./blog-card.stories-d111adc0.js";import{C as y,a as L}from"./carousel-6037f7ec.js";import{j as h,a as r,F as or}from"./jsx-runtime-76c5c2e2.js";import{C as tr}from"./content-wrapper-19d15755.js";import{B as nr,A as lr}from"./below-e3aa399e.js";import{m as ir}from"./motion-354a1bac.js";const gr="_blogCardList_joncc_1",dr="_title_joncc_2",mr="_list_joncc_6",cr="_listItem_joncc_21",pr="_maxColumnsThree_joncc_28",ur="_maxColumnsFour_joncc_59",o={blogCardList:gr,title:dr,list:mr,listItem:cr,maxColumnsThree:pr,maxColumnsFour:ur};function Cr(s){return s===1?o.fullWidth:s===3?o.maxColumnsThree:o.maxColumnsFour}const _=({title:s,blogCards:a})=>{if(!Array.isArray(a)||!a.length)return null;const X=(a==null?void 0:a.length)>3,B=e=>r(ir.div,{className:Z(o.listItem,Cr(a.length)),initial:{y:"-10%",opacity:0},animate:{y:0,opacity:1},children:r($,{...e,fullWidth:a.length===1,maxChar:a.length===3?e.maxChar??160:void 0})});return h("div",{className:o.blogCardList,children:[s&&r("h3",{className:o.title,children:s}),r(tr,{children:X?r(y,{offsetArrows:!0,breakpoints:{lg:{perPage:4},md:{perPage:2}},children:a.map((e,n)=>r(L,{children:B(e)},n))}):h(or,{children:[r(nr,{breakpoint:"sm",children:e=>e&&r(y,{offsetArrows:!0,children:a.map((n,S)=>r(L,{children:B(n)}))})}),r(lr,{breakpoint:"sm",children:e=>e&&r("ul",{className:o.list,children:a.map((n,S)=>r(Y.Fragment,{children:B(n)},S))})})]})})]})};try{_.displayName="BlogCardList",_.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const _r={title:"Design System/Organisms/BlogCardList",component:_},t={render:s=>r(_,{blogCards:s.blogCards,title:s.title})};D.args,M.args,z.args,G.args,H.args,J.args,K.args,Q.args,R.args,U.args,l.args,i.args,g.args;const Br=[rr.args],Sr=[D.args,M.args,z.args,G.args],yr=[H.args,J.args,K.args],Lr=[Q.args,R.args,U.args],hr=[l.args,i.args,g.args,l.args,i.args,g.args,l.args,i.args,g.args,l.args,i.args,g.args],fr=[ar.args,sr.args,er.args],d={...t,args:{blogCards:Br}},m={...t,args:{title:"Varför Spendrups",blogCards:Sr}},c={...t,args:{blogCards:yr}},p={...t,args:{blogCards:Lr}},u={...t,args:{blogCards:hr}},C={...t,args:{title:"Likande varumärken",blogCards:fr}};var f,b,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,w,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: whySpendrupsList
  }
}`,...(T=(w=m.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var j,F,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsCooperation
  }
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var I,V,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsBrewing
  }
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,v,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment
  }
}`,...(A=(v=u.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var W,N,O;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Likande varumärken',
    blogCards: brandPromoPage_Blog
  }
}`,...(O=(N=C.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const br=["BlogCardListStory_Fullwidth","BlogCardListStory_VarförSpendrups","BlogCardListStory_Samarbete","BlogCardListStory_Brewing","BlogCardListStory_Equipmemt","BlogCardListStory_Likande_Varumarken"],Vr=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_Brewing:p,BlogCardListStory_Equipmemt:u,BlogCardListStory_Fullwidth:d,BlogCardListStory_Likande_Varumarken:C,BlogCardListStory_Samarbete:c,BlogCardListStory_VarförSpendrups:m,__namedExportsOrder:br,default:_r},Symbol.toStringTag,{value:"Module"}));export{C as B,_ as a,u as b,c,p as d,m as e,Vr as f};
//# sourceMappingURL=blog-card-list.stories-35f128a5.js.map
