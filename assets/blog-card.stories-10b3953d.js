import{c as T}from"./index-74f03c09.js";import{P as Ve}from"./picture-097a8d40.js";import{T as Ae}from"./tag-4d467d25.js";import{j as P,a as n}from"./jsx-runtime-76c5c2e2.js";import{U as Ge}from"./ui-link-1bd4bf5e.js";import{PictureStory as Fe,PictureStory_AmericanBeer as Re,PictureStory_Pang as $e,PictureStory_SummerWine as Je,PictureStory_GeorgianWine as Ke,PictureStory_Suppliers as Qe,PictureStory_EHandel as Xe,PictureStory_Cooperation as Ye,PictureStory_BrewingFeeling as Ze,PictureStory_BrewInPeace as ei,PictureStory_DarkLightBeer as ii,PictureStory_Oranges as ri,PictureStory_Equipment as ai,PictureStory_BeerTap as ti,PictureStory_Brewery as oi,PictureStoryPistonHead_Blog as ni,PictureStoryMariestad_Blog as si,PictureStoryVisby_Blog as li,PictureStoryPang_Blog as ui}from"./picture.stories-05fb3950.js";import{UILinkBlogStory as i}from"./ui-link.stories-0a8cf00a.js";import{TagStoryRectangular_S as D}from"./tag.stories-39bc95dc.js";const di="_blogCard_up2zl_1",mi="_fullWidth_up2zl_12",ci="_pictureWrapper_up2zl_21",gi="_smallHeight_up2zl_32",pi="_picture_up2zl_21",Si="_image_up2zl_52",yi="_tags_up2zl_65",Bi="_tag_up2zl_65",_i="_content_up2zl_79",qi="_maxHeight_up2zl_88",hi="_centered_up2zl_99",xi="_textContent_up2zl_106",Ci="_heading_up2zl_111",vi="_text_up2zl_106",r={blogCard:di,fullWidth:mi,pictureWrapper:ci,smallHeight:gi,picture:pi,image:Si,tags:yi,tag:Bi,content:_i,maxHeight:qi,centered:hi,textContent:xi,heading:Ci,text:vi};function bi(t){var a=document.createElement("span");return a.innerHTML=t,a.textContent||a.innerText}const U=({image:t,tags:a,heading:I,text:we,richText:W,link:s,fullWidth:H,maxChar:k})=>{const o=bi(we??""),N=k&&((o==null?void 0:o.length)??0)>k?o==null?void 0:o.substring(0,k).concat("..."):o;return P("div",{className:T(r.blogCard,H&&r.fullWidth),children:[t&&P("div",{className:T(r.pictureWrapper,H&&r.smallHeight),children:[n(Ve,{...t,classNamePicture:r.picture,classNameImg:r.image}),(a==null?void 0:a.length)&&n("div",{className:r.tags,children:a.map((E,Me)=>n(Ae,{...E,className:r.tag},`${E.text}-${Me}`))})]}),P("div",{className:T(r.content,{[r.centered]:H,[r.maxHeight]:!!k}),children:[P("div",{className:r.textContent,children:[I&&n("h4",{className:r.heading,children:I}),N&&n("p",{className:r.text,dangerouslySetInnerHTML:{__html:N}}),W&&W]}),s&&n(Ge,{...s,onSurface:"transparent",size:"default",className:r.link,children:s==null?void 0:s.children})]})]})};try{U.displayName="BlogCard",U.__docgenInfo={description:"",displayName:"BlogCard",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"ITag[]"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},richText:{defaultValue:null,description:"",name:"richText",required:!1,type:{name:"FC<RichTextProps>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},maxChar:{defaultValue:null,description:"",name:"maxChar",required:!1,type:{name:"number"}}}}}catch{}const fi={title:"Design System/Molecules/Blog",component:U},e={render:({...t})=>n(U,{...t})},l={...e,args:{image:Fe.args,tags:[D.args],heading:"Blog Card Heading",text:"<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>",link:i.args}},u={...e,args:{image:Re.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},d={...e,args:{image:$e.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},m={...e,args:{image:Je.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},c={...e,args:{image:Ke.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:i.args}},g={...e,args:{image:Qe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},p={...e,args:{image:Xe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},S={...e,args:{image:Ye.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},y={...e,args:{image:Ze.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},B={...e,args:{image:ei.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},_={...e,args:{image:ii.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},q={...e,args:{image:ri.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args,tags:[D.args,D.args]}},h={...e,args:{image:ai.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},x={...e,args:{image:ti.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:i.args}},C={...e,args:{image:oi.args,heading:"Vi testar oss fram för den bästa smakupplevelsen",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",link:i.args,fullWidth:!0}},v={...e,args:{image:ni.args,heading:"NO NONSENSE BEER!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",fullWidth:!0}},b={...e,args:{image:si.args,heading:"Mariestad",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}},f={...e,args:{image:li.args,heading:"Wisby",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}},L={...e,args:{image:ui.args,heading:"PANG PANG!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:i.args}};var z,O,j;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory.args,
    tags: [TagStoryRectangular_S.args],
    heading: 'Blog Card Heading',
    text: '<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>',
    link: UILinkBlogStory.args
  }
}`,...(j=(O=l.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var w,M,V;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_AmericanBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var A,G,F;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Pang.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(F=(G=d.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var R,$,J;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_SummerWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(J=($=m.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,X;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_GeorgianWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Suppliers.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ie,re,ae;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_EHandel.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ae=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Cooperation.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ne=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,le,ue;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewingFeeling.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ue=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,me,ce;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewInPeace.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ce=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,pe,Se;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_DarkLightBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(Se=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:Se.source}}};var ye,Be,_e;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Oranges.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args,
    tags: [TagStoryRectangular_S.args, TagStoryRectangular_S.args]
  }
}`,...(_e=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var qe,he,xe;h.parameters={...h.parameters,docs:{...(qe=h.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Equipment.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(xe=(he=h.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Ce,ve,be;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BeerTap.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(be=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Le,ke;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Brewery.args,
    heading: 'Vi testar oss fram för den bästa smakupplevelsen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    link: UILinkBlogStory.args,
    fullWidth: true
  }
}`,...(ke=(Le=C.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Pe,Ue,He;v.parameters={...v.parameters,docs:{...(Pe=v.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPistonHead_Blog.args,
    heading: 'NO NONSENSE BEER!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    fullWidth: true
  }
}`,...(He=(Ue=v.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Te,De,Ie;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryMariestad_Blog.args,
    heading: 'Mariestad',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Ie=(De=b.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var We,Ne,Ee;f.parameters={...f.parameters,docs:{...(We=f.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryVisby_Blog.args,
    heading: 'Wisby',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Ee=(Ne=f.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var ze,Oe,je;L.parameters={...L.parameters,docs:{...(ze=L.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPang_Blog.args,
    heading: 'PANG PANG!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(je=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};const Li=["BlogCardStory","BlogCardStory_AmericanBeer","BlogCardStory_Pang","BlogCardStory_SummerWine","BlogCardStory_GeorgianWine","BlogCardStory_Suppliers","BlogCardStory_EHandel","BlogCardStory_Cooperation","BlogCardStory_BrewingFeeling","BlogCardStory_BrewInPeace","BlogCardStory_DarkLightBeer","BlogCardStory_Oranges","BlogCardStory_BeerEquipment","BlogCardStory_BeerTap","BlogCardStoryFullWidth","BlogCardStoryPistonhead","BlogCardStoryMariestad","BlogCardStoryWisby","BlogCardStoryPang"],Ni=Object.freeze(Object.defineProperty({__proto__:null,BlogCardStory:l,BlogCardStoryFullWidth:C,BlogCardStoryMariestad:b,BlogCardStoryPang:L,BlogCardStoryPistonhead:v,BlogCardStoryWisby:f,BlogCardStory_AmericanBeer:u,BlogCardStory_BeerEquipment:h,BlogCardStory_BeerTap:x,BlogCardStory_BrewInPeace:B,BlogCardStory_BrewingFeeling:y,BlogCardStory_Cooperation:S,BlogCardStory_DarkLightBeer:_,BlogCardStory_EHandel:p,BlogCardStory_GeorgianWine:c,BlogCardStory_Oranges:q,BlogCardStory_Pang:d,BlogCardStory_SummerWine:m,BlogCardStory_Suppliers:g,__namedExportsOrder:Li,default:fi},Symbol.toStringTag,{value:"Module"}));export{U as B,u as a,d as b,m as c,c as d,g as e,p as f,S as g,y as h,B as i,_ as j,q as k,h as l,x as m,C as n,b as o,f as p,L as q,v as r,Ni as s};
//# sourceMappingURL=blog-card.stories-10b3953d.js.map
