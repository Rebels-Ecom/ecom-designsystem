import{c as I}from"./index-a587463d.js";import{P as Ae}from"./picture-7e21d28d.js";import{T as Ge}from"./tag-fac2d6a3.js";import{a as H,j as t}from"./jsx-runtime-a3a6c0b8.js";import{U as Fe}from"./ui-link-0c065042.js";import{PictureStory as Re,PictureStory_AmericanBeer as $e,PictureStory_Pang as ze,PictureStory_SummerWine as Je,PictureStory_GeorgianWine as Ke,PictureStory_Suppliers as Qe,PictureStory_EHandel as Xe,PictureStory_Cooperation as Ye,PictureStory_BrewingFeeling as Ze,PictureStory_BrewInPeace as ei,PictureStory_DarkLightBeer as ii,PictureStory_Oranges as ri,PictureStory_Equipment as ai,PictureStory_BeerTap as ti,PictureStory_Brewery as oi,PictureStoryPistonHead_Blog as ni,PictureStoryMariestad_Blog as si,PictureStoryVisby_Blog as li,PictureStoryPang_Blog as ui}from"./picture.stories-fb612c6c.js";import{UILinkBlogStory as i}from"./ui-link.stories-ae6d6647.js";import{TagStoryRectangular_S as W}from"./tag.stories-8b101b34.js";const di="_blogCard_r8bqc_1",mi="_fullWidth_r8bqc_12",ci="_pictureWrapper_r8bqc_20",gi="_smallHeight_r8bqc_31",pi="_picture_r8bqc_20",Si="_image_r8bqc_48",yi="_tags_r8bqc_62",Bi="_tag_r8bqc_62",qi="_content_r8bqc_76",_i="_maxHeight_r8bqc_84",xi="_centered_r8bqc_95",hi="_textContent_r8bqc_102",Ci="_heading_r8bqc_106",bi="_text_r8bqc_102",r={blogCard:di,fullWidth:mi,pictureWrapper:ci,smallHeight:gi,picture:pi,image:Si,tags:yi,tag:Bi,content:qi,maxHeight:_i,centered:xi,textContent:hi,heading:Ci,text:bi},T=({image:n,tags:P,heading:N,text:Ve,richText:E,link:s,fullWidth:D,maxChar:U})=>{const a=(l=>{if(typeof document>"u")return;const o=document==null?void 0:document.createElement("span");return o?(o.innerHTML=l,o.textContent||o.innerText):l})(Ve??""),O=U&&((a==null?void 0:a.length)??0)>U?a==null?void 0:a.substring(0,U).concat("..."):a;return H("div",{className:I(r.blogCard,{[r.fullWidth]:D}),children:[n&&H("div",{className:I(r.pictureWrapper,{[r.smallHeight]:D}),children:[t(Ae,{...n,classNamePicture:r.picture,classNameImg:r.image}),(P==null?void 0:P.length)&&t("div",{className:r.tags,children:P.map((l,o)=>t(Ge,{...l,className:r.tag},`${l.text}-${o}`))})]}),H("div",{className:I(r.content,{[r.centered]:D,[r.maxHeight]:!!U}),children:[H("div",{className:r.textContent,children:[N&&t("h4",{className:r.heading,children:N}),O&&t("p",{className:r.text,dangerouslySetInnerHTML:{__html:O}}),E&&E]}),s&&t(Fe,{...s,onSurface:"transparent",className:r.link,children:s==null?void 0:s.children})]})]})};try{T.displayName="BlogCard",T.__docgenInfo={description:"",displayName:"BlogCard",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"ITag[]"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},richText:{defaultValue:null,description:"",name:"richText",required:!1,type:{name:"FC<RichTextProps>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},maxChar:{defaultValue:null,description:"",name:"maxChar",required:!1,type:{name:"number"}}}}}catch{}const vi={title:"Design System/Molecules/Blog",component:T},e={render:({...n})=>t(T,{...n})},u={...e,args:{image:Re.args,tags:[W.args],heading:"Blog Card Heading",text:"<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>",link:i.args}},d={...e,args:{image:$e.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},m={...e,args:{image:ze.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},c={...e,args:{image:Je.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},g={...e,args:{image:Ke.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},p={...e,args:{image:Qe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},S={...e,args:{image:Xe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},y={...e,args:{image:Ye.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},B={...e,args:{image:Ze.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},q={...e,args:{image:ei.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},_={...e,args:{image:ii.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},x={...e,args:{image:ri.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args,tags:[W.args,W.args]}},h={...e,args:{image:ai.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},C={...e,args:{image:ti.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},b={...e,args:{image:oi.args,heading:"Vi testar oss fram för den bästa smakupplevelsen",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",link:i.args,fullWidth:!0}},v={...e,args:{image:ni.args,heading:"NO NONSENSE BEER!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",fullWidth:!0}},f={...e,args:{image:si.args,heading:"Mariestad",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}},L={...e,args:{image:li.args,heading:"Wisby",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}},k={...e,args:{image:ui.args,heading:"PANG PANG!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}};var w,M,j;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory.args,
    tags: [TagStoryRectangular_S.args],
    heading: 'Blog Card Heading',
    text: '<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>',
    link: UILinkBlogStory.args
  }
}`,...(j=(M=u.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var V,A,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_AmericanBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(G=(A=d.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var F,R,$;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Pang.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...($=(R=m.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var z,J,K;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_SummerWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_GeorgianWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ie;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Suppliers.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ie=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ie.source}}};var re,ae,te;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_EHandel.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(te=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ne,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Cooperation.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var le,ue,de;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewingFeeling.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(de=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ce,ge;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewInPeace.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ge=(ce=q.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var pe,Se,ye;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_DarkLightBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ye=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Be,qe,_e;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Oranges.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args,
    tags: [TagStoryRectangular_S.args, TagStoryRectangular_S.args]
  }
}`,...(_e=(qe=x.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var xe,he,Ce;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Equipment.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(Ce=(he=h.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var be,ve,fe;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BeerTap.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(fe=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Le,ke,Pe;b.parameters={...b.parameters,docs:{...(Le=b.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Brewery.args,
    heading: 'Vi testar oss fram för den bästa smakupplevelsen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    link: UILinkBlogStory.args,
    fullWidth: true
  }
}`,...(Pe=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Ue,He,Te;v.parameters={...v.parameters,docs:{...(Ue=v.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPistonHead_Blog.args,
    heading: 'NO NONSENSE BEER!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    fullWidth: true
  }
}`,...(Te=(He=v.parameters)==null?void 0:He.docs)==null?void 0:Te.source}}};var De,Ie,We;f.parameters={...f.parameters,docs:{...(De=f.parameters)==null?void 0:De.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryMariestad_Blog.args,
    heading: 'Mariestad',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(We=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var Ne,Ee,Oe;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryVisby_Blog.args,
    heading: 'Wisby',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Oe=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var we,Me,je;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPang_Blog.args,
    heading: 'PANG PANG!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(je=(Me=k.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};const fi=["BlogCardStory","BlogCardStory_AmericanBeer","BlogCardStory_Pang","BlogCardStory_SummerWine","BlogCardStory_GeorgianWine","BlogCardStory_Suppliers","BlogCardStory_EHandel","BlogCardStory_Cooperation","BlogCardStory_BrewingFeeling","BlogCardStory_BrewInPeace","BlogCardStory_DarkLightBeer","BlogCardStory_Oranges","BlogCardStory_BeerEquipment","BlogCardStory_BeerTap","BlogCardStoryFullWidth","BlogCardStoryPistonhead","BlogCardStoryMariestad","BlogCardStoryWisby","BlogCardStoryPang"],Ni=Object.freeze(Object.defineProperty({__proto__:null,BlogCardStory:u,BlogCardStoryFullWidth:b,BlogCardStoryMariestad:f,BlogCardStoryPang:k,BlogCardStoryPistonhead:v,BlogCardStoryWisby:L,BlogCardStory_AmericanBeer:d,BlogCardStory_BeerEquipment:h,BlogCardStory_BeerTap:C,BlogCardStory_BrewInPeace:q,BlogCardStory_BrewingFeeling:B,BlogCardStory_Cooperation:y,BlogCardStory_DarkLightBeer:_,BlogCardStory_EHandel:S,BlogCardStory_GeorgianWine:g,BlogCardStory_Oranges:x,BlogCardStory_Pang:m,BlogCardStory_SummerWine:c,BlogCardStory_Suppliers:p,__namedExportsOrder:fi,default:vi},Symbol.toStringTag,{value:"Module"}));export{b as B,T as a,d as b,m as c,x as d,h as e,C as f,Ni as g};
