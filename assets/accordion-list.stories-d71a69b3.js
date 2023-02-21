import{r as A}from"./index-6f814c40.js";import{A as _,a as i}from"./accordion.stories-165d93b2.js";import{a as o}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./icon-eb31426b.js";import"./index-822585cb.js";const g="_list_1eu27_1",L="_listItem_1eu27_11",d={list:g,listItem:L},e=({list:r=[],onAccordionBtnClick:n})=>o("ul",{className:d.list,children:r.map(s=>o("li",{className:d.listItem,children:o(_,{...s,onAccordionBtnClick:n})},s.id))});try{e.displayName="AccordionList",e.__docgenInfo={description:"",displayName:"AccordionList",props:{list:{defaultValue:{value:"[]"},description:"",name:"list",required:!1,type:{name:"IAccordion[]"}},onAccordionBtnClick:{defaultValue:null,description:"",name:"onAccordionBtnClick",required:!0,type:{name:"CallableFunction"}}}}}catch{}const B={title:"Design System/Molecules/Accordion List",component:e},y=r=>{const[n,s]=A.useState(r.list);function p(u){s(n.map(c=>c.id===u?{...c,isExpanded:!c.isExpanded}:c))}return o("div",{style:{margin:"0",maxWidth:"616px"},children:o(e,{list:n,onAccordionBtnClick:p})})},t=y.bind({});t.storyName="Accordion List";t.args={list:[{...i.args,id:i.args.id+"_1"},{...i.args,id:i.args.id+"_2"},{...i.args,id:i.args.id+"_3"},{...i.args,id:i.args.id+"_4"}]};var a,l,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [accordionList, setAccordionList] = useState(args.list);
  function onAccordionBtnClick(id: string) {
    setAccordionList(accordionList.map((li: IAccordion) => {
      return li.id === id ? {
        ...li,
        isExpanded: !li.isExpanded
      } : li;
    }));
  }
  return <div style={{
    margin: '0',
    maxWidth: '616px'
  }}>
      <AccordionList list={accordionList} onAccordionBtnClick={onAccordionBtnClick} />
    </div>;
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const E=["AccordionListStory"];export{t as AccordionListStory,E as __namedExportsOrder,B as default};
//# sourceMappingURL=accordion-list.stories-d71a69b3.js.map
