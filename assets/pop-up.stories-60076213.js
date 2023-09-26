import{r as y}from"./index-6f814c40.js";import{c as f}from"./index-74f03c09.js";import{a as e,j as i}from"./jsx-runtime-76c5c2e2.js";import{A as h}from"./index-b3e0e324.js";import{m as _}from"./motion-354a1bac.js";import{G as s}from"./group-wrapper-53e2b69f.js";import{H as g}from"./heading-f7ae5826.js";import{B as c}from"./button-e43738b0.js";import"./_commonjsHelpers-042e6b4d.js";import"./icon-7e598265.js";import"./button.module-42bc270d.js";const P="_popUp_10jh8_1",U="_left_10jh8_13",v="_right_10jh8_14",x="_center_10jh8_15",p={popUp:P,left:U,right:v,center:x};function o({open:r,children:n,contentPosition:a="center"}){return e(h,{children:r?e(_.div,{className:f(p.popUp,p[a]),onClick:m=>m.stopPropagation(),initial:{y:"35%",opacity:0},animate:{y:"0%",opacity:1,position:"fixed",zIndex:2},transition:{duration:.4},exit:{y:"20%",opacity:0,transition:{duration:.4}},children:e("div",{className:p.content,children:n})}):null})}try{o.displayName="PopUp",o.__docgenInfo={description:"",displayName:"PopUp",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},contentPosition:{defaultValue:{value:"center"},description:"",name:"contentPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}}}catch{}const k={title:"Design System/Molecules/PopUp",component:o},S={render:({...r})=>{const[n,a]=y.useState(!1);return i("div",{children:[e("button",{onClick:()=>a(!0),children:"Open Modal"}),e(o,{...r,open:n,children:r.children})]})}},t={...S,args:{children:i(s,{direction:"column",children:[e(g,{order:4,children:"Vill du spara dina ändringar?"}),i(s,{children:[e(c,{type:"button",surface:"primary",children:"Save"}),e(c,{type:"button",surface:"secondary",children:"Discard"})]})]})}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...PopUpStoryTemplate,
  args: {
    children: <GroupWrapper direction="column">
        <Heading order={4}>Vill du spara dina ändringar?</Heading>
        <GroupWrapper>
          <Button type={'button'} surface={'primary'}>
            Save
          </Button>
          <Button type={'button'} surface={'secondary'}>
            Discard
          </Button>
        </GroupWrapper>
      </GroupWrapper>
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const q=["PopUpStory"];export{t as PopUpStory,q as __namedExportsOrder,k as default};
//# sourceMappingURL=pop-up.stories-60076213.js.map
