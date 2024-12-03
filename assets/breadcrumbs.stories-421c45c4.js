import{c as i}from"./index-09749a66.js";import{j as r}from"./jsx-runtime-03333307.js";import{C as k}from"./content-wrapper-adfa8526.js";import{F as x}from"./flex-container-7aff6506.js";import{I as m}from"./icon-cf6ebd85.js";import{PictureStoryField as E,PictureStory_BreadcrumbsContentPage as w}from"./picture.stories-b12bb409.js";const B="_breadcrumbsContainer_wp4kb_1",T="_minHeight_wp4kb_5",j="_breadcrumb_wp4kb_1",I="_lastBreadcrumb_wp4kb_22",C="_breadcrumbText_wp4kb_30",P="_underline_wp4kb_31",q="_breadcrumbsPicture_wp4kb_37",A="_breadcrumbsImg_wp4kb_42",N="_title_wp4kb_54",W="_wide_wp4kb_63",V="_narrow_wp4kb_67",F="_list_wp4kb_74",O="_listItem_wp4kb_84",H="_listItemActive_wp4kb_109",t={breadcrumbsContainer:B,minHeight:T,breadcrumb:j,lastBreadcrumb:I,breadcrumbText:C,underline:P,breadcrumbsPicture:q,breadcrumbsImg:A,title:N,wide:W,narrow:V,list:F,listItem:O,listItemActive:H},l=({title:o,image:G,breadcrumbs:f,className:M,location:R,textWidth:$="wide",linkComponent:y})=>r.jsx(k,{children:r.jsx(x,{gap:.5,children:f.map(e=>e!=null&&e.href?r.jsxs(y,{to:e.href,className:t.breadcrumb,"aria-label":`Go to ${e.children==="Start"?"Spendrups homepage":e.children}`,children:[r.jsx("span",{className:i(t.breadcrumbText,{[t.underline]:!e.active}),children:e.children}),!e.active&&r.jsx(m,{icon:"icon-chevron-right"})]},e.href):r.jsxs("span",{className:i(t.breadcrumb,t.lastBreadcrumb),children:[r.jsx("span",{className:i(t.breadcrumbText,{[t.underline]:!e.active}),children:e.children}),!e.active&&r.jsx(m,{icon:"icon-chevron-right"})]},"last-breadcrumb"))})});l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"IPicture"},description:""},breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    children: string;
    href?: string;
    active?: boolean;
}`,signature:{properties:[{key:"children",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"active",value:{name:"boolean",required:!1}}]}}],raw:"Array<TBreadcrumb>"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""},location:{required:!0,tsType:{name:"string"},description:""},textWidth:{required:!1,tsType:{name:"union",raw:"'wide' | 'narrow'",elements:[{name:"literal",value:"'wide'"},{name:"literal",value:"'narrow'"}]},description:"",defaultValue:{value:"'wide'",computed:!1}}}};const z={title:"Design System/Organisms/Breadcrumbs",component:l},c={render:({...o})=>r.jsx(l,{...o,linkComponent:"a"})},a={...c,args:{title:"Våra ölsorter",image:E.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0,active:!0}],location:"/SE-sv/c/ol"}},n={...c,args:{title:"Våra ölsorter",breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}]}},s={...c,args:{title:"Små aktörer brygger mer hållbart",image:w.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/artikel",children:"Artikel",isExternal:!0},{href:"/SE-sv/artikel/hallbarhet",children:"Små aktörer, mer hållbart?",isExternal:!0}],location:"/SE-sv/artikel/hallbarhet"}};var d,u,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      isExternal: true,
      active: true
    }],
    location: '/SE-sv/c/ol'
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,h,_;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var g,S,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const D=["BreadcrumbsStoryWithBackground","BreadcrumbsStoryWithoutBackground","BreadcrumbsStory_Sustainability"],Y=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbsStoryWithBackground:a,BreadcrumbsStoryWithoutBackground:n,BreadcrumbsStory_Sustainability:s,__namedExportsOrder:D,default:z},Symbol.toStringTag,{value:"Module"}));export{s as B,l as a,n as b,Y as c};
