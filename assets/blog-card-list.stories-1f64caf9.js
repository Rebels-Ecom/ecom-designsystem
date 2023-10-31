import{r as f}from"./index-6f814c40.js";import{c as rr}from"./index-74f03c09.js";import{B as y,a as D,b as G,c as H,d as J,e as K,f as Q,g as R,h as U,i as X,j as Y,k as g,l as d,m,n as ar,o as sr,p as er,q as tr}from"./blog-card.stories-77adcf0b.js";import{S as or,a as nr}from"./swipe-list-e88622a7.js";import{j as b,a}from"./jsx-runtime-76c5c2e2.js";import{B as lr,A as ir}from"./below-e3aa399e.js";import{C as gr}from"./content-wrapper-854859bc.js";import{m as dr}from"./motion-354a1bac.js";import{B as mr}from"./button-df2f483d.js";const cr="_blogCardList_e8hzm_1",pr="_title_e8hzm_2",ur="_list_e8hzm_6",Cr="_listItem_e8hzm_17",Br="_maxColumnsThree_e8hzm_24",_r="_maxColumnsFour_e8hzm_56",hr="_showMoreButton_e8hzm_84",t={blogCardList:cr,title:pr,list:ur,listItem:Cr,maxColumnsThree:Br,maxColumnsFour:_r,showMoreButton:hr};function Sr(s){return s===1?t.fullWidth:s===3?t.maxColumnsThree:t.maxColumnsFour}const S=({title:s,blogCards:e})=>{if(!Array.isArray(e)||!e.length)return null;const[r,L]=f.useState(e.slice(0,4)),i=f.useRef(null),Z=()=>{var n;i!=null&&i.current&&((n=i.current)==null||n.scrollIntoView({behavior:"smooth",block:"end"}))},$=()=>{r.length===e.length?L(e.slice(0,4)):L(e.slice(0,r.length+4)),setTimeout(()=>Z(),100)};return b("div",{className:t.blogCardList,children:[s&&a("h3",{className:t.title,children:s}),a(lr,{breakpoint:"md",children:n=>n&&a(or,{children:r.map((o,h)=>r.length>1?a(nr,{children:a(y,{...o,fullWidth:r.length===1,maxChar:r.length===3?o.maxChar??200:void 0})},h):a(y,{...o,fullWidth:r.length===1,maxChar:r.length===3?o.maxChar??200:void 0},h))})}),a(ir,{breakpoint:"md",children:n=>n&&b(gr,{children:[a("ul",{className:t.list,children:r.map((o,h)=>a(dr.li,{className:rr(t.listItem,Sr(r.length)),initial:{y:"-10%",opacity:0},animate:{y:0,opacity:1},children:a(y,{...o,fullWidth:r.length===1,maxChar:r.length===3?o.maxChar??200:void 0})},h))}),e.length>4&&a(mr,{ref:i,className:t.showMoreButton,type:"button",surface:"primary",onClick:$,children:r.length===e.length?"Visa färre":"Visa fler"})]})})]})};try{S.displayName="BlogCardList",S.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const yr={title:"Design System/Organisms/BlogCardList",component:S},l={render:s=>a(S,{blogCards:s.blogCards,title:s.title})};D.args,G.args,H.args,J.args,K.args,Q.args,R.args,U.args,X.args,Y.args,g.args,d.args,m.args;const Lr=[ar.args],fr=[D.args,G.args,H.args,J.args],br=[K.args,Q.args,R.args],xr=[U.args,X.args,Y.args],wr=[g.args,d.args,m.args,g.args,d.args,m.args,g.args,d.args,m.args,g.args,d.args,m.args],Tr=[sr.args,er.args,tr.args],c={...l,args:{blogCards:Lr}},p={...l,args:{title:"Varför Spendrups",blogCards:fr}},u={...l,args:{blogCards:br}},C={...l,args:{blogCards:xr}},B={...l,args:{blogCards:wr}},_={...l,args:{title:"Likande varumärken",blogCards:Tr}};var x,w,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var k,V,v;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: whySpendrupsList
  }
}`,...(v=(V=p.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var I,W,q;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsCooperation
  }
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var z,E,F;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsBrewing
  }
}`,...(F=(E=C.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var P,M,N;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment
  }
}`,...(N=(M=B.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var j,A,O;_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Likande varumärken',
    blogCards: brandPromoPage_Blog
  }
}`,...(O=(A=_.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const kr=["BlogCardListStory_Fullwidth","BlogCardListStory_VarförSpendrups","BlogCardListStory_Samarbete","BlogCardListStory_Brewing","BlogCardListStory_Equipmemt","BlogCardListStory_Likande_Varumarken"],Mr=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_Brewing:C,BlogCardListStory_Equipmemt:B,BlogCardListStory_Fullwidth:c,BlogCardListStory_Likande_Varumarken:_,BlogCardListStory_Samarbete:u,BlogCardListStory_VarförSpendrups:p,__namedExportsOrder:kr,default:yr},Symbol.toStringTag,{value:"Module"}));export{_ as B,S as a,B as b,u as c,C as d,p as e,Mr as f};
//# sourceMappingURL=blog-card-list.stories-1f64caf9.js.map
