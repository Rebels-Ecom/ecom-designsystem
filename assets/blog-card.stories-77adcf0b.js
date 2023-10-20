import{c as H}from"./index-74f03c09.js";import{P as Ee}from"./picture-097a8d40.js";import{T as Oe}from"./tag-dd67dc89.js";import{j as L,a}from"./jsx-runtime-76c5c2e2.js";import{U as Ve}from"./ui-link-1bd4bf5e.js";import{PictureStory as we,PictureStory_AmericanBeer as Me,PictureStory_Pang as Ae,PictureStory_SummerWine as Ge,PictureStory_GeorgianWine as Fe,PictureStory_Suppliers as Re,PictureStory_EHandel as ze,PictureStory_Cooperation as Je,PictureStory_BrewingFeeling as Ke,PictureStory_BrewInPeace as Qe,PictureStory_DarkLightBeer as Xe,PictureStory_Oranges as Ye,PictureStory_Equipment as Ze,PictureStory_BeerTap as $e,PictureStory_Brewery as ei,PictureStoryPistonHead_Blog as ii,PictureStoryMariestad_Blog as ri,PictureStoryVisby_Blog as ai,PictureStoryPang_Blog as ti}from"./picture.stories-05fb3950.js";import{UILinkBlogStory as i}from"./ui-link.stories-0a8cf00a.js";import{TagStoryRectangular_S as oi}from"./tag.stories-65b5b93e.js";const ni="_blogCard_etypj_1",si="_fullWidth_etypj_12",li="_pictureWrapper_etypj_21",ui="_smallHeight_etypj_32",di="_picture_etypj_21",mi="_image_etypj_52",ci="_tag_etypj_65",gi="_content_etypj_71",pi="_maxHeight_etypj_80",Si="_centered_etypj_91",yi="_textContent_etypj_98",Bi="_heading_etypj_103",qi="_text_etypj_98",r={blogCard:ni,fullWidth:si,pictureWrapper:li,smallHeight:ui,picture:di,image:mi,tag:ci,content:gi,maxHeight:pi,centered:Si,textContent:yi,heading:Bi,text:qi},k=({image:t,tag:T,heading:D,text:P,link:o,fullWidth:U,maxChar:f})=>{const je=f&&P.length>f?P.substring(0,f).concat("..."):P;return L("div",{className:H(r.blogCard,U&&r.fullWidth),children:[t&&L("div",{className:H(r.pictureWrapper,U&&r.smallHeight),children:[a(Ee,{...t,classNamePicture:r.picture,classNameImg:r.image}),T&&a(Oe,{...T,className:r.tag})]}),L("div",{className:H(r.content,{[r.centered]:U,[r.maxHeight]:!!f}),children:[L("div",{className:r.textContent,children:[D&&a("h4",{className:r.heading,children:D}),a("p",{className:r.text,dangerouslySetInnerHTML:{__html:je}})]}),o&&a(Ve,{...o,onSurface:"transparent",size:"default",className:r.link,children:o==null?void 0:o.children})]})]})};try{k.displayName="BlogCard",k.__docgenInfo={description:"",displayName:"BlogCard",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"ITag"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},maxChar:{defaultValue:null,description:"",name:"maxChar",required:!1,type:{name:"number"}}}}}catch{}const _i={title:"Design System/Molecules/Blog",component:k},e={render:({...t})=>a(k,{...t})},n={...e,args:{image:we.args,tag:oi.args,heading:"Blog Card Heading",text:"<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>",link:i.args}},s={...e,args:{image:Me.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},l={...e,args:{image:Ae.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},u={...e,args:{image:Ge.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},d={...e,args:{image:Fe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},m={...e,args:{image:Re.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},c={...e,args:{image:ze.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},g={...e,args:{image:Je.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},p={...e,args:{image:Ke.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},S={...e,args:{image:Qe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},y={...e,args:{image:Xe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},B={...e,args:{image:Ye.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},q={...e,args:{image:Ze.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},_={...e,args:{image:$e.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},h={...e,args:{image:ei.args,heading:"Vi testar oss fram för den bästa smakupplevelsen",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",link:i.args,fullWidth:!0}},x={...e,args:{image:ii.args,heading:"NO NONSENSE BEER!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",fullWidth:!0}},C={...e,args:{image:ri.args,heading:"Mariestad",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}},v={...e,args:{image:ai.args,heading:"Wisby",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}},b={...e,args:{image:ti.args,heading:"PANG PANG!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}};var I,W,N;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory.args,
    tag: TagStoryRectangular_S.args,
    heading: 'Blog Card Heading',
    text: '<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>',
    link: UILinkBlogStory.args
  }
}`,...(N=(W=n.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var j,E,O;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_AmericanBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(O=(E=s.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var V,w,M;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Pang.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(M=(w=l.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var A,G,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_SummerWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(F=(G=u.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var R,z,J;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_GeorgianWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(J=(z=d.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Suppliers.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_EHandel.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ie,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Cooperation.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(re=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,te,oe;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewingFeeling.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(oe=(te=p.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,se,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewInPeace.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(le=(se=S.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ue,de,me;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_DarkLightBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(me=(de=y.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,ge,pe;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Oranges.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(pe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var Se,ye,Be;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Equipment.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(Be=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var qe,_e,he;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BeerTap.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(he=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:he.source}}};var xe,Ce,ve;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Brewery.args,
    heading: 'Vi testar oss fram för den bästa smakupplevelsen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    link: UILinkBlogStory.args,
    fullWidth: true
  }
}`,...(ve=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var be,fe,Le;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPistonHead_Blog.args,
    heading: 'NO NONSENSE BEER!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    fullWidth: true
  }
}`,...(Le=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Le.source}}};var ke,Pe,Ue;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryMariestad_Blog.args,
    heading: 'Mariestad',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Ue=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:Ue.source}}};var He,Te,De;v.parameters={...v.parameters,docs:{...(He=v.parameters)==null?void 0:He.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryVisby_Blog.args,
    heading: 'Wisby',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(De=(Te=v.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Ie,We,Ne;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPang_Blog.args,
    heading: 'PANG PANG!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Ne=(We=b.parameters)==null?void 0:We.docs)==null?void 0:Ne.source}}};const hi=["BlogCardStory","BlogCardStory_AmericanBeer","BlogCardStory_Pang","BlogCardStory_SummerWine","BlogCardStory_GeorgianWine","BlogCardStory_Suppliers","BlogCardStory_EHandel","BlogCardStory_Cooperation","BlogCardStory_BrewingFeeling","BlogCardStory_BrewInPeace","BlogCardStory_DarkLightBeer","BlogCardStory_Oranges","BlogCardStory_BeerEquipment","BlogCardStory_BeerTap","BlogCardStoryFullWidth","BlogCardStoryPistonhead","BlogCardStoryMariestad","BlogCardStoryWisby","BlogCardStoryPang"],Ui=Object.freeze(Object.defineProperty({__proto__:null,BlogCardStory:n,BlogCardStoryFullWidth:h,BlogCardStoryMariestad:C,BlogCardStoryPang:b,BlogCardStoryPistonhead:x,BlogCardStoryWisby:v,BlogCardStory_AmericanBeer:s,BlogCardStory_BeerEquipment:q,BlogCardStory_BeerTap:_,BlogCardStory_BrewInPeace:S,BlogCardStory_BrewingFeeling:p,BlogCardStory_Cooperation:g,BlogCardStory_DarkLightBeer:y,BlogCardStory_EHandel:c,BlogCardStory_GeorgianWine:d,BlogCardStory_Oranges:B,BlogCardStory_Pang:l,BlogCardStory_SummerWine:u,BlogCardStory_Suppliers:m,__namedExportsOrder:hi,default:_i},Symbol.toStringTag,{value:"Module"}));export{k as B,s as a,l as b,u as c,d,m as e,c as f,g,p as h,S as i,y as j,B as k,q as l,_ as m,h as n,C as o,v as p,b as q,x as r,Ui as s};
//# sourceMappingURL=blog-card.stories-77adcf0b.js.map
