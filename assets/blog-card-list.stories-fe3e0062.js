import{c as v}from"./index-74f03c09.js";import{B as W,a as r,b as C,c as t}from"./blog-card.stories-53508834.js";import{j as q,a as o}from"./jsx-runtime-76c5c2e2.js";const A="_title_8wfuh_1",V="_list_8wfuh_5",z="_listItem_8wfuh_18",D="_maxColumnsThree_8wfuh_23",E="_maxColumnsFour_8wfuh_49",a={title:A,list:V,listItem:z,maxColumnsThree:D,maxColumnsFour:E};function M(s){return s===1?a.fullWidth:s===3?a.maxColumnsThree:a.maxColumnsFour}const c=({title:s,blogCards:m})=>{if(!Array.isArray(m)||!m.length)return null;const u=m.slice(0,4);return q("div",{className:a.blogCardList,children:[s&&o("h3",{className:a.title,children:s}),o("ul",{className:a.list,children:u.map((j,O)=>o("li",{className:v(a.listItem,M(u.length)),children:o(W,{...j,fullWidth:u.length===1})},O))})]})};try{c.displayName="BlogCardList",c.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const P={title:"Design System/Organisms/BlogCardList",component:c},g={render:s=>o("div",{style:{margin:"0 auto",maxWidth:"1800px"},children:o(c,{blogCards:s.blogCards,title:s.title})})},k=[r.args,r.args,r.args,r.args,C.args,t.args,t.args,C.args,t.args],G=[r.args],H=[r.args,r.args],J=[r.args,r.args,r.args],K=[t.args,t.args,t.args,t.args],e={...g,args:{blogCards:G}},l={...g,args:{blogCards:H}},n={...g,args:{title:"Three columns list",blogCards:J}},i={...g,args:{title:"Four columns list",blogCards:K}},d={...g,args:{title:"Loooong list",blogCards:k}};var p,_,L;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(L=(_=e.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var y,h,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: twoCardsList
  }
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var B,f,b;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Three columns list',
    blogCards: threeCardsList
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,T,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Four columns list',
    blogCards: fourCardsList
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var F,I,N;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Loooong list',
    blogCards: cardList
  }
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const Q=["BlogCardListStory_Fullwidth","BlogCardListStory_2_Columns","BlogCardListStory_3_Columns","BlogCardListStory_4_Columns","BlogCardListStory_LongList"],Y=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_2_Columns:l,BlogCardListStory_3_Columns:n,BlogCardListStory_4_Columns:i,BlogCardListStory_Fullwidth:e,BlogCardListStory_LongList:d,__namedExportsOrder:Q,default:P},Symbol.toStringTag,{value:"Module"}));export{c as B,i as a,n as b,Y as c};
//# sourceMappingURL=blog-card-list.stories-fe3e0062.js.map
