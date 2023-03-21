import{c as h}from"./index-74f03c09.js";import{a as e,j as u}from"./jsx-runtime-76c5c2e2.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const g="_outerWrapper_3qh7z_1",_="_innerWrapper_3qh7z_13",f="_heading_3qh7z_37",x="_preamble_3qh7z_57",k="_linkList_3qh7z_79",y="_linkListItem_3qh7z_91",t={outerWrapper:g,innerWrapper:_,heading:f,preamble:x,linkList:k,linkListItem:y},o=({heading:n,preamble:s,links:i=[],linkComponent:m})=>e("footer",{className:t.outerWrapper,children:u("div",{className:t.innerWrapper,children:[n&&e("h1",{className:t.heading,children:n}),s&&e("p",{className:h("body",t.preamble),children:s}),i instanceof Array&&i.length&&e("ul",{className:t.linkList,children:i.map((r,d)=>e("li",{className:t.linkListItem,children:r.isExternal?e("a",{href:r.href,target:r.target,children:r.children}):e(m,{to:r.href,children:r.children})},`${r.children}-${d}`))})]})});try{o.displayName="Footer",o.__docgenInfo={description:"",displayName:"Footer",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"ILink[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}}}}}catch{}const N={title:"Design System/Molecules/Footer",component:o},L={render:({...n})=>e(o,{...n})},a={...L,args:{heading:"Footer will be placed here",preamble:"More info here",links:[{href:"/#page1",text:"Link to page 1",isExternal:!0},{href:"/#page2",text:"Link to page 2",isExternal:!0},{href:"/#page3",text:"Link to page 3",isExternal:!0},{href:"/#page4",text:"Link to page 4",isExternal:!0}],linkComponent:"a"}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...FooterStoryTemplate,
  args: {
    heading: 'Footer will be placed here',
    preamble: 'More info here',
    links: [{
      href: '/#page1',
      text: 'Link to page 1',
      isExternal: true
    }, {
      href: '/#page2',
      text: 'Link to page 2',
      isExternal: true
    }, {
      href: '/#page3',
      text: 'Link to page 3',
      isExternal: true
    }, {
      href: '/#page4',
      text: 'Link to page 4',
      isExternal: true
    }],
    linkComponent: 'a'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const W=["FooterStory"];export{a as FooterStory,W as __namedExportsOrder,N as default};
//# sourceMappingURL=footer.stories-cdd1fc38.js.map
