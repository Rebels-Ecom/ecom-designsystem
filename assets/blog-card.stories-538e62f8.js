import{c as d}from"./index-a587463d.js";import{P as Ae}from"./picture-7e21d28d.js";import{T as Ge}from"./tag-fac2d6a3.js";import{a as N,j as t,F as O}from"./jsx-runtime-a3a6c0b8.js";import{U as Re}from"./ui-link-a18343fc.js";import{PictureStory as $e,PictureStory_AmericanBeer as Je,PictureStory_Pang as Ke,PictureStory_SummerWine as Qe,PictureStory_GeorgianWine as Xe,PictureStory_Suppliers as Ye,PictureStory_EHandel as Ze,PictureStory_Cooperation as ei,PictureStory_BrewingFeeling as ii,PictureStory_BrewInPeace as ri,PictureStory_DarkLightBeer as ai,PictureStory_Oranges as ti,PictureStory_Equipment as oi,PictureStory_BeerTap as ni,PictureStory_Brewery as si,PictureStoryPistonHead_Blog as li,PictureStoryMariestad_Blog as ui,PictureStoryVisby_Blog as di,PictureStoryPang_Blog as mi}from"./picture.stories-fb612c6c.js";import{UILinkBlogStory as r}from"./ui-link.stories-7a85f29a.js";import{TagStoryRectangular_S as E}from"./tag.stories-8b101b34.js";const ci="_blogCard_16wyz_1",gi="_fullWidth_16wyz_12",pi="_pictureWrapper_16wyz_20",yi="_smallHeight_16wyz_31",Si="_picture_16wyz_20",Bi="_image_16wyz_48",_i="_tags_16wyz_62",hi="_tag_16wyz_62",qi="_content_16wyz_76",xi="_maxHeight_16wyz_84",Ci="_centered_16wyz_95",vi="_textContent_16wyz_102",bi="_richTextContent_16wyz_106",fi="_heading_16wyz_112",Li="_headingLink_16wyz_116",Pi="_text_16wyz_102",e={blogCard:ci,fullWidth:gi,pictureWrapper:pi,smallHeight:yi,picture:Si,image:Bi,tags:_i,tag:hi,content:qi,maxHeight:xi,centered:Ci,textContent:vi,richTextContent:bi,heading:fi,headingLink:Li,text:Pi},w=({image:n,tags:H,heading:T,text:Ve,richText:l,link:a,fullWidth:W,maxChar:D})=>{const o=(u=>{if(typeof document>"u")return;const s=document==null?void 0:document.createElement("span");return s?(s.innerHTML=u,s.textContent||s.innerText):u})(Ve??""),I=D&&((o==null?void 0:o.length)??0)>D?o==null?void 0:o.substring(0,D).concat("..."):o,z=()=>{if(n)return N("div",{className:d(e.pictureWrapper,{[e.smallHeight]:W}),children:[t(Ae,{...n,classNamePicture:e.picture,classNameImg:e.image}),(H==null?void 0:H.length)&&t("div",{className:e.tags,children:H.map((u,s)=>t(Ge,{...u,className:e.tag},`${u.text}-${s}`))})]})};return N("div",{className:d(e.blogCard,{[e.fullWidth]:W}),children:[n&&t(O,{children:a?t("a",{href:a.href,target:"_self",children:z()}):z()}),(T||I||l||(a==null?void 0:a.children))&&N("div",{className:d(e.content,{[e.centered]:W,[e.maxHeight]:!!D&&(I||l)}),children:[N("div",{className:d(e.textContent,{[e.richTextContent]:l}),children:[T&&t(O,{children:a?t("a",{href:a.href,target:"_self",className:d(e.heading,e.headingLink),children:t("h4",{className:e.heading,children:T})}):t("h4",{className:e.heading,children:T})}),I&&t("p",{className:e.text,dangerouslySetInnerHTML:{__html:I}}),l&&l]}),a&&t(Re,{...a,onSurface:"transparent",className:e.link,children:a==null?void 0:a.children})]})]})};try{w.displayName="BlogCard",w.__docgenInfo={description:"",displayName:"BlogCard",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"ITag[]"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},richText:{defaultValue:null,description:"",name:"richText",required:!1,type:{name:"FC<RichTextProps>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},maxChar:{defaultValue:null,description:"",name:"maxChar",required:!1,type:{name:"number"}}}}}catch{}const ki={title:"Design System/Molecules/Blog",component:w},i={render:({...n})=>t(w,{...n})},m={...i,args:{image:$e.args,tags:[E.args],heading:"Blog Card Heading",text:"<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>",link:r.args}},c={...i,args:{image:Je.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:r.args}},g={...i,args:{image:Ke.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:r.args}},p={...i,args:{image:Qe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:r.args}},y={...i,args:{image:Xe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:r.args}},S={...i,args:{image:Ye.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},B={...i,args:{image:Ze.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},_={...i,args:{image:ei.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},h={...i,args:{image:ii.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},q={...i,args:{image:ri.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},x={...i,args:{image:ai.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},C={...i,args:{image:ti.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args,tags:[E.args,E.args]}},v={...i,args:{image:oi.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},b={...i,args:{image:ni.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},f={...i,args:{image:si.args,heading:"Vi testar oss fram för den bästa smakupplevelsen",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",link:r.args,fullWidth:!0}},L={...i,args:{image:li.args,heading:"NO NONSENSE BEER!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",fullWidth:!0}},P={...i,args:{image:ui.args,heading:"Mariestad",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:r.args}},k={...i,args:{image:di.args,heading:"Wisby",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:r.args}},U={...i,args:{image:mi.args,heading:"PANG PANG!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:r.args}};var M,j,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory.args,
    tags: [TagStoryRectangular_S.args],
    heading: 'Blog Card Heading',
    text: '<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>',
    link: UILinkBlogStory.args
  }
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var V,A,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_AmericanBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(G=(A=c.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var R,$,J;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Pang.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_SummerWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_GeorgianWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ie,re,ae;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Suppliers.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ae=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_EHandel.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ne=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,le,ue;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Cooperation.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ue=(le=_.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,me,ce;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewingFeeling.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ce=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,pe,ye;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewInPeace.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ye=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var Se,Be,_e;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_DarkLightBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(_e=(Be=x.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var he,qe,xe;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Oranges.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args,
    tags: [TagStoryRectangular_S.args, TagStoryRectangular_S.args]
  }
}`,...(xe=(qe=C.parameters)==null?void 0:qe.docs)==null?void 0:xe.source}}};var Ce,ve,be;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Equipment.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(be=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Le,Pe;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BeerTap.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(Pe=(Le=b.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var ke,Ue,He;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Brewery.args,
    heading: 'Vi testar oss fram för den bästa smakupplevelsen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    link: UILinkBlogStory.args,
    fullWidth: true
  }
}`,...(He=(Ue=f.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Te,De,Ie;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPistonHead_Blog.args,
    heading: 'NO NONSENSE BEER!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    fullWidth: true
  }
}`,...(Ie=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ne,we,We;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryMariestad_Blog.args,
    heading: 'Mariestad',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(We=(we=P.parameters)==null?void 0:we.docs)==null?void 0:We.source}}};var Ee,ze,Oe;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryVisby_Blog.args,
    heading: 'Wisby',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Oe=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var Me,je,Fe;U.parameters={...U.parameters,docs:{...(Me=U.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPang_Blog.args,
    heading: 'PANG PANG!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Fe=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};const Ui=["BlogCardStory","BlogCardStory_AmericanBeer","BlogCardStory_Pang","BlogCardStory_SummerWine","BlogCardStory_GeorgianWine","BlogCardStory_Suppliers","BlogCardStory_EHandel","BlogCardStory_Cooperation","BlogCardStory_BrewingFeeling","BlogCardStory_BrewInPeace","BlogCardStory_DarkLightBeer","BlogCardStory_Oranges","BlogCardStory_BeerEquipment","BlogCardStory_BeerTap","BlogCardStoryFullWidth","BlogCardStoryPistonhead","BlogCardStoryMariestad","BlogCardStoryWisby","BlogCardStoryPang"],Oi=Object.freeze(Object.defineProperty({__proto__:null,BlogCardStory:m,BlogCardStoryFullWidth:f,BlogCardStoryMariestad:P,BlogCardStoryPang:U,BlogCardStoryPistonhead:L,BlogCardStoryWisby:k,BlogCardStory_AmericanBeer:c,BlogCardStory_BeerEquipment:v,BlogCardStory_BeerTap:b,BlogCardStory_BrewInPeace:q,BlogCardStory_BrewingFeeling:h,BlogCardStory_Cooperation:_,BlogCardStory_DarkLightBeer:x,BlogCardStory_EHandel:B,BlogCardStory_GeorgianWine:y,BlogCardStory_Oranges:C,BlogCardStory_Pang:g,BlogCardStory_SummerWine:p,BlogCardStory_Suppliers:S,__namedExportsOrder:Ui,default:ki},Symbol.toStringTag,{value:"Module"}));export{f as B,w as a,c as b,g as c,C as d,v as e,b as f,Oi as g};
