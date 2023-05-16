import{c as l}from"./index-74f03c09.js";import{U as k}from"./ui-link-d168131e.js";import{P as I}from"./picture-1385f78c.js";import{j as b,a as t}from"./jsx-runtime-76c5c2e2.js";import{PictureStoryField as P,PictureStory_BreadcrumbsContentPage as C}from"./picture.stories-e32ddd60.js";const V="_breadcrumbsContainer_1s43l_1",w="_breadcrumbsPicture_1s43l_6",N="_breadcrumbsImg_1s43l_11",q="_textContainer_1s43l_23",A="_title_1s43l_30",T="_wide_1s43l_38",j="_narrow_1s43l_41",W="_list_1s43l_47",O="_listItem_1s43l_66",z="_listItemActive_1s43l_89",e={breadcrumbsContainer:V,breadcrumbsPicture:w,breadcrumbsImg:N,textContainer:q,title:A,wide:T,narrow:j,list:W,listItem:O,listItemActive:z},i=({title:r,image:m,breadcrumbs:x,className:u,location:B,textWidth:d="wide"})=>b("div",{className:l(e.breadcrumbsContainer,u||""),children:[m&&t(I,{...m,classNamePicture:e.breadcrumbsPicture,classNameImg:e.breadcrumbsImg}),b("div",{className:e.textContainer,children:[r&&t("h2",{className:l(e.title,e[d]),children:r}),t("ul",{className:l(e.list,e[d]),children:x.map(c=>t(k,{...c,onSurface:"transparent",size:"default",className:l(e.listItem,B===c.href?e.listItemActive:""),children:c.children}))})]})]});try{i.displayName="Breadcrumbs",i.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"TBreadcrumb[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"ILink"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},textWidth:{defaultValue:{value:"wide"},description:"",name:"textWidth",required:!1,type:{name:"enum",value:[{value:'"wide"'},{value:'"narrow"'}]}}}}}catch{}const F={title:"Design System/Organisms/Breadcrumbs",component:i},o={render:({...r})=>t(i,{...r})},a={...o,args:{title:"Våra ölsorter",image:P.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}],location:"/SE-sv/c/ol"}},s={...o,args:{title:"Våra ölsorter",breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}]}},n={...o,args:{title:"Små aktörer brygger mer hållbart",image:C.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/artikel",children:"Artikel",isExternal:!0},{href:"/SE-sv/artikel/hallbarhet",children:"Små aktörer, mer hållbart?",isExternal:!0}],location:"/SE-sv/artikel/hallbarhet"}};var h,p,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(p=a.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var _,g,f;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,E,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(E=n.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const L=["BreadcrumbsStoryWithBackground","BreadcrumbsStoryWithoutBackground","BreadcrumbsStory_Sustainability"],J=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbsStoryWithBackground:a,BreadcrumbsStoryWithoutBackground:s,BreadcrumbsStory_Sustainability:n,__namedExportsOrder:L,default:F},Symbol.toStringTag,{value:"Module"}));export{i as B,n as a,a as b,J as c};
//# sourceMappingURL=breadcrumbs.stories-e5b36f0d.js.map
