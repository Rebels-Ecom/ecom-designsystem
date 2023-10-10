import{c}from"./index-74f03c09.js";import{U as x}from"./ui-link-8e83d4a8.js";import{P as k}from"./picture-097a8d40.js";import{j as b,a,F as I}from"./jsx-runtime-76c5c2e2.js";import{C as P}from"./content-wrapper-1d622804.js";import{PictureStoryField as V,PictureStory_BreadcrumbsContentPage as w}from"./picture.stories-05fb3950.js";const C="_breadcrumbsContainer_11fcg_1",N="_minHeight_11fcg_5",q="_breadcrumbsPicture_11fcg_16",A="_breadcrumbsImg_11fcg_21",T="_title_11fcg_33",W="_wide_11fcg_42",j="_narrow_11fcg_45",F="_list_11fcg_51",H="_listItem_11fcg_61",O="_listItemActive_11fcg_84",r={breadcrumbsContainer:C,minHeight:N,breadcrumbsPicture:q,breadcrumbsImg:A,title:T,wide:W,narrow:j,list:F,listItem:H,listItemActive:O},o=({title:s,image:e,breadcrumbs:B,className:m,location:U,textWidth:d="wide"})=>b("div",{className:c(r.breadcrumbsContainer,m||"",{[r.minHeight]:e==null?void 0:e.src}),children:[e&&a(k,{...e,classNamePicture:r.breadcrumbsPicture,classNameImg:r.breadcrumbsImg}),a(P,{children:b(I,{children:[(e==null?void 0:e.src)&&s&&a("h2",{className:c(r.title,r[d]),children:s}),a("ul",{className:c(r.list,r[d]),children:B.map(t=>a(x,{href:t.active?"":t.href,onSurface:"transparent",isExternal:!t.active,size:"default",className:c(r.listItem,t.active?r.listItemActive:""),children:t.children},t.href))})]})})]});try{o.displayName="Breadcrumbs",o.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"TBreadcrumb[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"ILink"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},textWidth:{defaultValue:{value:"wide"},description:"",name:"textWidth",required:!1,type:{name:"enum",value:[{value:'"wide"'},{value:'"narrow"'}]}}}}}catch{}const z={title:"Design System/Organisms/Breadcrumbs",component:o},u={render:({...s})=>a(o,{...s})},n={...u,args:{title:"Våra ölsorter",image:V.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}],location:"/SE-sv/c/ol"}},i={...u,args:{title:"Våra ölsorter",breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}]}},l={...u,args:{title:"Små aktörer brygger mer hållbart",image:w.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/artikel",children:"Artikel",isExternal:!0},{href:"/SE-sv/artikel/hallbarhet",children:"Små aktörer, mer hållbart?",isExternal:!0}],location:"/SE-sv/artikel/hallbarhet"}};var h,p,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...BreadcrumbsStoryTemplate,
  args: {
    title: 'Våra ölsorter',
    image: PictureStoryField.args,
    breadcrumbs: [{
      href: '/SE-sv/',
      children: 'Start',
      isExternal: true
    }, {
      href: '/SE-sv/c/ol',
      children: 'Öl',
      isExternal: true
    }],
    location: '/SE-sv/c/ol'
  }
}`,...(S=(p=n.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var f,_,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...BreadcrumbsStoryTemplate,
  args: {
    title: 'Våra ölsorter',
    breadcrumbs: [{
      href: '/SE-sv/',
      children: 'Start',
      isExternal: true
    }, {
      href: '/SE-sv/c/ol',
      children: 'Öl',
      isExternal: true
    }]
  }
}`,...(g=(_=i.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var E,y,v;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...BreadcrumbsStoryTemplate,
  args: {
    title: 'Små aktörer brygger mer hållbart',
    image: PictureStory_BreadcrumbsContentPage.args,
    breadcrumbs: [{
      href: '/SE-sv/',
      children: 'Start',
      isExternal: true
    }, {
      href: '/SE-sv/artikel',
      children: 'Artikel',
      isExternal: true
    }, {
      href: '/SE-sv/artikel/hallbarhet',
      children: 'Små aktörer, mer hållbart?',
      isExternal: true
    }],
    location: '/SE-sv/artikel/hallbarhet'
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const L=["BreadcrumbsStoryWithBackground","BreadcrumbsStoryWithoutBackground","BreadcrumbsStory_Sustainability"],R=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbsStoryWithBackground:n,BreadcrumbsStoryWithoutBackground:i,BreadcrumbsStory_Sustainability:l,__namedExportsOrder:L,default:z},Symbol.toStringTag,{value:"Module"}));export{l as B,o as a,n as b,R as c};
//# sourceMappingURL=breadcrumbs.stories-76a6896a.js.map
