import{L as S}from"./link-button-1db7193c.js";import{P as b}from"./picture-78f09330.js";import{T as x}from"./tag-fac2d6a3.js";import{c as p}from"./index-a587463d.js";import{a as i,j as t}from"./jsx-runtime-a3a6c0b8.js";import{PictureStory_Equipment as w}from"./picture.stories-b9fdbc7d.js";import{TagStoryRound_S as L,TagStoryRectangular_L as P}from"./tag.stories-8b101b34.js";import{C as B}from"./content-wrapper-c985da24.js";const q="_teaser_wspnv_1",N="_imageWrapper_wspnv_12",W="_tag_wspnv_30",M="_tagLeft_wspnv_36",V="_tagRight_wspnv_40",j="_picture_wspnv_44",$="_imageRound_wspnv_52",C="_image_wspnv_12",E="_contentWrapper_wspnv_76",I="_contentLeft_wspnv_90",z="_contentRight_wspnv_99",O="_heading_wspnv_109",U="_preamble_wspnv_115",D="_text_wspnv_120",F="_textRight_wspnv_146",A="_linkButton_wspnv_153",G="_teaserLeft_wspnv_167",H="_teaserRight_wspnv_187",e={teaser:q,imageWrapper:N,tag:W,tagLeft:M,tagRight:V,picture:j,imageRound:$,image:C,contentWrapper:E,contentLeft:I,contentRight:z,heading:O,preamble:U,text:D,textRight:F,linkButton:A,teaserLeft:G,teaserRight:H},s=({heading:n,preamble:o,richText:u,image:v,imagePosition:l,tag:m,tagPosition:R,linkButton:y,imageRound:T,fullWidth:Q})=>i("div",{className:`${e.teaser} ${l==="left"?e.teaserLeft:e.teaserRight}`,children:[i("div",{className:p(e.imageWrapper,{[e.imageRound]:T}),children:[t(b,{...v,classNamePicture:e.picture,classNameImg:e.image}),m&&t(x,{...m,className:`${e.tag} ${R==="left"?e.tagLeft:e.tagRight}`})]}),i("div",{className:`${e.contentWrapper} ${l==="left"?e.contentRight:e.contentLeft}`,children:[t("h2",{className:e.heading,children:n}),o&&t("p",{className:e.preamble,children:o}),u&&t("div",{className:p(e.text,l==="right"&&e.textRight),children:u}),t(S,{surface:"primary",...y,className:e.linkButton})]})]});try{s.displayName="Teaser",s.__docgenInfo={description:"",displayName:"Teaser",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},richText:{defaultValue:null,description:"",name:"richText",required:!1,type:{name:"FC<RichTextProps>"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},imagePosition:{defaultValue:null,description:"",name:"imagePosition",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},imageRound:{defaultValue:null,description:"",name:"imageRound",required:!1,type:{name:"boolean"}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"ITag"}},tagPosition:{defaultValue:null,description:"",name:"tagPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},linkButton:{defaultValue:null,description:"",name:"linkButton",required:!0,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const J={title:"Design System/Molecules/Teaser",component:s},k={render:({...n})=>i(B,{children:[t(s,{...n}),t(s,{...n,imagePosition:"right"})]})},a={...k,args:{image:w.args,imageRound:!0,imagePosition:"left",tag:L.args,tagPosition:"left",heading:"Mer smak med Melleruds",preamble:"Utmärkt pilsner",text:"<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},r={...k,args:{...a.args,imageRound:!1,tag:P.args}};var g,d,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    image: PictureStory_Equipment.args,
    imageRound: true,
    imagePosition: 'left',
    tag: TagStoryRound_S.args,
    tagPosition: 'left',
    heading: 'Mer smak med Melleruds',
    preamble: 'Utmärkt pilsner',
    text: '<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>',
    linkButton: {
      text: 'Boka din plats',
      href: '#bokningsforfragan',
      linkComponent: 'a',
      title: 'Boka din plats',
      surface: 'primary',
      size: 'large',
      children: 'Boka din plats'
    }
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var _,f,h;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    ...Teaser_Round.args,
    imageRound: false,
    tag: TagStoryRectangular_L.args
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const K=["Teaser_Round","Teaser_Square"],se=Object.freeze(Object.defineProperty({__proto__:null,Teaser_Round:a,Teaser_Square:r,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{a as T,r as a,s as b,se as t};
