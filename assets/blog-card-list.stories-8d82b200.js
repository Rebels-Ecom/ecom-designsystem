import{c as G}from"./index-74f03c09.js";import{B as H,a as w,b as F,c as E,d as I,e as V,f as j,g as N,h as W,i as O,j as v,k as A,l as P,m as k,n as M}from"./blog-card.stories-e1e9e44e.js";import{j as J,a}from"./jsx-runtime-76c5c2e2.js";const K="_title_1quqb_1",Q="_list_1quqb_5",R="_listItem_1quqb_18",U="_maxColumnsThree_1quqb_23",X="_maxColumnsFour_1quqb_46",s={title:K,list:Q,listItem:R,maxColumnsThree:U,maxColumnsFour:X};function Y(r){return r===1?s.fullWidth:r===3?s.maxColumnsThree:s.maxColumnsFour}const g=({title:r,blogCards:i})=>{if(!Array.isArray(i)||!i.length)return null;const m=i.slice(0,4);return J("div",{className:s.blogCardList,children:[r&&a("h3",{className:s.title,children:r}),a("ul",{className:s.list,children:m.map((D,z)=>a("li",{className:G(s.listItem,Y(m.length)),children:a(H,{...D,fullWidth:m.length===1})},z))})]})};try{g.displayName="BlogCardList",g.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const Z={title:"Design System/Organisms/BlogCardList",component:g},d={render:r=>a("div",{style:{margin:"0 auto",maxWidth:"1800px"},children:a(g,{blogCards:r.blogCards,title:r.title})})};w.args,F.args,E.args,I.args,V.args,j.args,N.args,W.args,O.args,v.args,A.args,P.args,k.args;const $=[M.args],rr=[w.args,F.args,E.args,I.args],sr=[V.args,j.args,N.args],ar=[W.args,O.args,v.args],er=[A.args,P.args,k.args],e={...d,args:{blogCards:$}},t={...d,args:{title:"Varför Spendrups",blogCards:rr}},o={...d,args:{blogCards:sr}},l={...d,args:{blogCards:ar}},n={...d,args:{blogCards:er}};var p,c,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var C,_,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: whySpendrupsList
  }
}`,...(S=(_=t.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var B,y,L;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsCooperation
  }
}`,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var b,h,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsBrewing
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var q,x,T;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment
  }
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const tr=["BlogCardListStory_Fullwidth","BlogCardListStory_VarförSpendrups","BlogCardListStory_Samarbete","BlogCardListStory_Brewing","BlogCardListStory_Equipmemt"],dr=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_Brewing:l,BlogCardListStory_Equipmemt:n,BlogCardListStory_Fullwidth:e,BlogCardListStory_Samarbete:o,BlogCardListStory_VarförSpendrups:t,__namedExportsOrder:tr,default:Z},Symbol.toStringTag,{value:"Module"}));export{g as B,t as a,o as b,l as c,n as d,dr as e};
//# sourceMappingURL=blog-card-list.stories-8d82b200.js.map
