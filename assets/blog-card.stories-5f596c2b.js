import{c as m}from"./index-a587463d.js";import{P as Ge}from"./picture-7e21d28d.js";import{T as Re}from"./tag-fac2d6a3.js";import{a as w,j as t,F as O}from"./jsx-runtime-a3a6c0b8.js";import{U as $e}from"./ui-link-9b0840f4.js";import{PictureStory as ze,PictureStory_AmericanBeer as Je,PictureStory_Pang as Ke,PictureStory_SummerWine as Qe,PictureStory_GeorgianWine as Xe,PictureStory_Suppliers as Ye,PictureStory_EHandel as Ze,PictureStory_Cooperation as ei,PictureStory_BrewingFeeling as ii,PictureStory_BrewInPeace as ri,PictureStory_DarkLightBeer as ai,PictureStory_Oranges as ti,PictureStory_Equipment as oi,PictureStory_BeerTap as ni,PictureStory_Brewery as si,PictureStoryPistonHead_Blog as li,PictureStoryMariestad_Blog as ui,PictureStoryVisby_Blog as di,PictureStoryPang_Blog as mi}from"./picture.stories-fb612c6c.js";import{UILinkBlogStory as r}from"./ui-link.stories-1d9d26f1.js";import{TagStoryRectangular_S as W}from"./tag.stories-8b101b34.js";const ci="_blogCard_xwp8j_1",gi="_fullWidth_xwp8j_13",pi="_pictureWrapper_xwp8j_21",Si="_smallHeight_xwp8j_32",yi="_picture_xwp8j_21",Bi="_image_xwp8j_49",_i="_tags_xwp8j_63",xi="_tag_xwp8j_63",hi="_content_xwp8j_77",qi="_maxHeight_xwp8j_85",Ci="_centered_xwp8j_96",vi="_textContent_xwp8j_103",bi="_richTextContent_xwp8j_107",fi="_heading_xwp8j_113",Li="_headingLink_xwp8j_117",Pi="_text_xwp8j_103",ki="_link_xwp8j_140",e={blogCard:ci,fullWidth:gi,pictureWrapper:pi,smallHeight:Si,picture:yi,image:Bi,tags:_i,tag:xi,content:hi,maxHeight:qi,centered:Ci,textContent:vi,richTextContent:bi,heading:fi,headingLink:Li,text:Pi,link:ki},N=({image:s,tags:T,heading:o,text:Ae,richText:u,link:a,fullWidth:j,maxChar:D})=>{const n=(d=>{if(typeof document>"u")return;const l=document==null?void 0:document.createElement("span");return l?(l.innerHTML=d,l.textContent||l.innerText):d})(Ae??""),I=D&&((n==null?void 0:n.length)??0)>D?n==null?void 0:n.substring(0,D).concat("..."):n,E=()=>{if(s)return w("div",{className:m(e.pictureWrapper,{[e.smallHeight]:j}),children:[t(Ge,{...s,classNamePicture:e.picture,classNameImg:e.image}),(T==null?void 0:T.length)&&t("div",{className:e.tags,children:T.map((d,l)=>t(Re,{...d,className:e.tag},`${d.text}-${l}`))})]})};return w("div",{className:m(e.blogCard,{[e.fullWidth]:j}),children:[s&&t(O,{children:a?t("a",{href:a.href,target:"_self","aria-label":o?`Read more about ${o}`:"Read more",children:E()}):E()}),(o||I||u||(a==null?void 0:a.children))&&w("div",{className:m(e.content,{[e.centered]:j,[e.maxHeight]:!!D&&(I||u)}),children:[w("div",{className:m(e.textContent,{[e.richTextContent]:u}),children:[o&&t(O,{children:a?t("a",{href:a.href,target:"_self",className:m(e.heading,e.headingLink),"aria-label":`Read more about ${o}`,children:t("h4",{className:e.heading,children:o})}):t("h4",{className:e.heading,children:o})}),I&&t("p",{className:e.text,dangerouslySetInnerHTML:{__html:I}}),u&&u]}),a&&t($e,{...a,onSurface:"transparent",className:e.link,children:a==null?void 0:a.children})]})]})};try{N.displayName="BlogCard",N.__docgenInfo={description:"",displayName:"BlogCard",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"ITag[]"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},richText:{defaultValue:null,description:"",name:"richText",required:!1,type:{name:"FC<RichTextProps>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},maxChar:{defaultValue:null,description:"",name:"maxChar",required:!1,type:{name:"number"}}}}}catch{}const Ui={title:"Design System/Molecules/Blog",component:N},i={render:({...s})=>t(N,{...s})},c={...i,args:{image:ze.args,tags:[W.args],heading:"Blog Card Heading",text:"<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>",link:r.args}},g={...i,args:{image:Je.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:r.args}},p={...i,args:{image:Ke.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:r.args}},S={...i,args:{image:Qe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:r.args}},y={...i,args:{image:Xe.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:r.args}},B={...i,args:{image:Ye.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},_={...i,args:{image:Ze.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},x={...i,args:{image:ei.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},h={...i,args:{image:ii.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},q={...i,args:{image:ri.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},C={...i,args:{image:ai.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},v={...i,args:{image:ti.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args,tags:[W.args,W.args]}},b={...i,args:{image:oi.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},f={...i,args:{image:ni.args,heading:"Blog Card Heading",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",link:r.args}},L={...i,args:{image:si.args,heading:"Vi testar oss fram för den bästa smakupplevelsen",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",link:r.args,fullWidth:!0}},P={...i,args:{image:li.args,heading:"NO NONSENSE BEER!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",fullWidth:!0}},k={...i,args:{image:ui.args,heading:"Mariestad",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:r.args}},U={...i,args:{image:di.args,heading:"Wisby",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:r.args}},H={...i,args:{image:mi.args,heading:"PANG PANG!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",link:r.args}};var M,F,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory.args,
    tags: [TagStoryRectangular_S.args],
    heading: 'Blog Card Heading',
    text: '<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>',
    link: UILinkBlogStory.args
  }
}`,...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var A,G,R;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_AmericanBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(R=(G=g.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var $,z,J;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Pang.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(J=(z=p.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_SummerWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_GeorgianWine.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: UILinkBlogStory.args
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ie,re,ae;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Suppliers.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ae=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_EHandel.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ne=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,le,ue;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Cooperation.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ue=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,me,ce;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewingFeeling.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(ce=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,pe,Se;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BrewInPeace.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(Se=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:Se.source}}};var ye,Be,_e;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_DarkLightBeer.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(_e=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var xe,he,qe;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Oranges.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args,
    tags: [TagStoryRectangular_S.args, TagStoryRectangular_S.args]
  }
}`,...(qe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:qe.source}}};var Ce,ve,be;b.parameters={...b.parameters,docs:{...(Ce=b.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Equipment.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(be=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Le,Pe;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_BeerTap.args,
    heading: 'Blog Card Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
    link: UILinkBlogStory.args
  }
}`,...(Pe=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var ke,Ue,He;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStory_Brewery.args,
    heading: 'Vi testar oss fram för den bästa smakupplevelsen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    link: UILinkBlogStory.args,
    fullWidth: true
  }
}`,...(He=(Ue=L.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Te,De,Ie;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPistonHead_Blog.args,
    heading: 'NO NONSENSE BEER!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    fullWidth: true
  }
}`,...(Ie=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var we,Ne,je;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryMariestad_Blog.args,
    heading: 'Mariestad',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(je=(Ne=k.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var We,Ee,Oe;U.parameters={...U.parameters,docs:{...(We=U.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryVisby_Blog.args,
    heading: 'Wisby',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Oe=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Me,Fe,Ve;H.parameters={...H.parameters,docs:{...(Me=H.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  ...BlogCardStoryTemplate,
  args: {
    image: PictureStoryPang_Blog.args,
    heading: 'PANG PANG!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    link: UILinkBlogStory.args
  }
}`,...(Ve=(Fe=H.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};const Hi=["BlogCardStory","BlogCardStory_AmericanBeer","BlogCardStory_Pang","BlogCardStory_SummerWine","BlogCardStory_GeorgianWine","BlogCardStory_Suppliers","BlogCardStory_EHandel","BlogCardStory_Cooperation","BlogCardStory_BrewingFeeling","BlogCardStory_BrewInPeace","BlogCardStory_DarkLightBeer","BlogCardStory_Oranges","BlogCardStory_BeerEquipment","BlogCardStory_BeerTap","BlogCardStoryFullWidth","BlogCardStoryPistonhead","BlogCardStoryMariestad","BlogCardStoryWisby","BlogCardStoryPang"],Mi=Object.freeze(Object.defineProperty({__proto__:null,BlogCardStory:c,BlogCardStoryFullWidth:L,BlogCardStoryMariestad:k,BlogCardStoryPang:H,BlogCardStoryPistonhead:P,BlogCardStoryWisby:U,BlogCardStory_AmericanBeer:g,BlogCardStory_BeerEquipment:b,BlogCardStory_BeerTap:f,BlogCardStory_BrewInPeace:q,BlogCardStory_BrewingFeeling:h,BlogCardStory_Cooperation:x,BlogCardStory_DarkLightBeer:C,BlogCardStory_EHandel:_,BlogCardStory_GeorgianWine:y,BlogCardStory_Oranges:v,BlogCardStory_Pang:p,BlogCardStory_SummerWine:S,BlogCardStory_Suppliers:B,__namedExportsOrder:Hi,default:Ui},Symbol.toStringTag,{value:"Module"}));export{L as B,N as a,g as b,p as c,v as d,b as e,f,Mi as g};
