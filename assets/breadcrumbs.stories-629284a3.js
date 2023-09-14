import{c}from"./index-74f03c09.js";import{U as w}from"./ui-link-edaab2a0.js";import{P as x}from"./picture-1385f78c.js";import{j as b,a as t,F as I}from"./jsx-runtime-76c5c2e2.js";import{C as P}from"./content-wrapper-92228f88.js";import{PictureStoryField as V,PictureStory_BreadcrumbsContentPage as C}from"./picture.stories-91d00d12.js";const N="_breadcrumbsContainer_1rwti_1",q="_minHeight_1rwti_6",A="_breadcrumbsPicture_1rwti_19",T="_breadcrumbsImg_1rwti_24",W="_title_1rwti_36",j="_wide_1rwti_45",F="_narrow_1rwti_48",H="_list_1rwti_54",O="_listItem_1rwti_64",z="_listItemActive_1rwti_87",r={breadcrumbsContainer:N,minHeight:q,breadcrumbsPicture:A,breadcrumbsImg:T,title:W,wide:j,narrow:F,list:H,listItem:O,listItemActive:z},o=({title:a,image:e,breadcrumbs:B,className:m,location:k,textWidth:d="wide"})=>b("div",{className:c(r.breadcrumbsContainer,m||"",{[r.minHeight]:e==null?void 0:e.src}),children:[e&&t(x,{...e,classNamePicture:r.breadcrumbsPicture,classNameImg:r.breadcrumbsImg}),t(P,{children:b(I,{children:[(e==null?void 0:e.src)&&a&&t("h2",{className:c(r.title,r[d]),children:a}),t("ul",{className:c(r.list,r[d]),children:B.map(l=>t(w,{...l,onSurface:"transparent",size:"default",className:c(r.listItem,k===l.href?r.listItemActive:""),children:l.children},l.href))})]})})]});try{o.displayName="Breadcrumbs",o.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"TBreadcrumb[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"ILink"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},textWidth:{defaultValue:{value:"wide"},description:"",name:"textWidth",required:!1,type:{name:"enum",value:[{value:'"wide"'},{value:'"narrow"'}]}}}}}catch{}const L={title:"Design System/Organisms/Breadcrumbs",component:o},u={render:({...a})=>t(o,{...a})},s={...u,args:{title:"Våra ölsorter",image:V.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}],location:"/SE-sv/c/ol"}},n={...u,args:{title:"Våra ölsorter",breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}]}},i={...u,args:{title:"Små aktörer brygger mer hållbart",image:C.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/artikel",children:"Artikel",isExternal:!0},{href:"/SE-sv/artikel/hallbarhet",children:"Små aktörer, mer hållbart?",isExternal:!0}],location:"/SE-sv/artikel/hallbarhet"}};var h,p,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(p=s.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var _,f,g;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,E,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(E=i.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const U=["BreadcrumbsStoryWithBackground","BreadcrumbsStoryWithoutBackground","BreadcrumbsStory_Sustainability"],R=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbsStoryWithBackground:s,BreadcrumbsStoryWithoutBackground:n,BreadcrumbsStory_Sustainability:i,__namedExportsOrder:U,default:L},Symbol.toStringTag,{value:"Module"}));export{o as B,i as a,s as b,R as c};
//# sourceMappingURL=breadcrumbs.stories-629284a3.js.map
