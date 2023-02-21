import{c as I}from"./index-74f03c09.js";import{a as r,F as v}from"./jsx-runtime-76c5c2e2.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const x="_linkList_1twgo_1",S="_vertical_1twgo_13",w="_horizontal_1twgo_37",N="_linkListItem_1twgo_47",a={linkList:x,vertical:S,horizontal:w,linkListItem:N},o=({links:t=[],linkComponent:h,direction:_="vertical"})=>r(v,{children:t instanceof Array&&t.length&&r("ul",{className:I(a.linkList,_==="vertical"?a.vertical:a.horizontal),children:t.map((i,f)=>r("li",{className:a.linkListItem,children:i.isExternal?r("a",{href:i.href,target:i.target,children:i.text}):r(h,{to:i.href,children:i.text})},`${i.text}-${f}`))})});try{o.displayName="LinkList",o.__docgenInfo={description:"",displayName:"LinkList",props:{links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"ILink[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const T={title:"Design System/Molecules/Link List",component:o,argTypes:{direction:{options:["vertical","horizontal"],control:{type:"radio"}}}},l=t=>r(v,{children:r("div",{style:{width:"100%"},children:r(o,{...t})})}),z=["Gävle","Göteborg","Helsingborg","Jönköping","Karlstad","Linköping","Luleå","Lund","Malmö","Norrköping","Stockholm","Umeå","Uppsala","Västerås","Växjö"],e=l.bind({});e.args={direction:"vertical",links:z.map(t=>({href:`/#${t}`,text:t,isExternal:!0})),linkComponent:"a"};e.storyName="Link List Many";const n=l.bind({});n.args={...e.args,links:e.args.links.slice(0,5)};n.storyName="Link List 5 Items";const s=l.bind({});s.args={...e.args,links:e.args.links.slice(0,2)};s.storyName="Link List 2 Items";var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      width: '100%'
    }}>
        <LinkList {...args} />
      </div>
    </>;
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,L,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      width: '100%'
    }}>
        <LinkList {...args} />
      </div>
    </>;
}`,...(u=(L=n.parameters)==null?void 0:L.docs)==null?void 0:u.source}}};var g,k,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      width: '100%'
    }}>
        <LinkList {...args} />
      </div>
    </>;
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const q=["LinkListStory","LinkListFiveItemsStory","LinkListTwoItemsStory"];export{n as LinkListFiveItemsStory,e as LinkListStory,s as LinkListTwoItemsStory,q as __namedExportsOrder,T as default};
//# sourceMappingURL=link-list.stories-13e13cb3.js.map
