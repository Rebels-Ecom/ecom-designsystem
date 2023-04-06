import{c as o}from"./index-74f03c09.js";import{U as y}from"./ui-link-c02b79d3.js";import{P as E}from"./picture-45f1777a.js";import{j as m,a as t}from"./jsx-runtime-76c5c2e2.js";import{PictureStoryField as v}from"./picture.stories-d0d099ca.js";const x="_breadcrumbsContainer_1orz1_1",B="_breadcrumbsPicture_1orz1_6",I="_breadcrumbsImg_1orz1_11",P="_textContainer_1orz1_23",z="_title_1orz1_30",C="_list_1orz1_42",N="_listItem_1orz1_56",V="_listItemActive_1orz1_79",e={breadcrumbsContainer:x,breadcrumbsPicture:B,breadcrumbsImg:I,textContainer:P,title:z,list:C,listItem:N,listItemActive:V},n=({title:r,image:i,breadcrumbs:h,className:l,location:S})=>m("div",{className:o(e.breadcrumbsContainer,l||""),children:[i&&t(E,{...i,classNamePicture:e.breadcrumbsPicture,classNameImg:e.breadcrumbsImg}),m("div",{className:e.textContainer,children:[r&&t("h2",{className:e.title,children:r}),t("ul",{className:e.list,children:h.map(c=>t(y,{...c,onSurface:"transparent",size:"default",className:o(e.listItem,S===c.href?e.listItemActive:""),children:c.children}))})]})]});try{n.displayName="Breadcrumbs",n.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"TBreadcrumb[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"ILink"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}}}}}catch{}const k={title:"Design System/Organisms/Breadcrumbs",component:n},g={render:({...r})=>t(n,{...r})},a={...g,args:{title:"Våra ölsorter",image:v.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}],location:"/SE-sv/c/ol"}},s={...g,args:{title:"Våra ölsorter",breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}]}};var u,d,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var p,_,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const q=["BreadcrumbsStoryWithBackground","BreadcrumbsStoryWithoutBackground"],F=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbsStoryWithBackground:a,BreadcrumbsStoryWithoutBackground:s,__namedExportsOrder:q,default:k},Symbol.toStringTag,{value:"Module"}));export{n as B,a,F as b};
//# sourceMappingURL=breadcrumbs.stories-6486e679.js.map
