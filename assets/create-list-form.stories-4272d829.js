import{j as e,r as C}from"./jsx-runtime-03333307.js";import{c as I}from"./index-09749a66.js";import{L as M}from"./loading-overlay-e351c68c.js";import{L as z}from"./logotype-be1d1890.js";import{F as b}from"./form-group-44d7ee51.js";import{I as R}from"./input-text-a5cf147f.js";import{T as H}from"./textarea-383fe271.js";import{B as x}from"./button-e2072245.js";import{l as t}from"./Spendrups_logo_horizontal-038b757f.js";const O="_createListForm_1g8x1_1",B="_logo_1g8x1_30",V="_closeButton_1g8x1_35",A="_overlay_1g8x1_44",i={createListForm:O,logo:B,closeButton:V,overlay:A},g=({logo:n,linkComponent:m,title:l,description:s,nameLabel:c,name:p,commentLabel:d,comment:u,submitLabel:r,onSubmit:j,onCancel:N,cancelLabel:f,offerLinkLabel:h,errorMessage:y,onNameChange:q,onCommentChange:w,loading:L})=>e.jsxs("form",{className:i.createListForm,onSubmit:j,children:[L&&e.jsx(M,{isVisible:L,position:"absolute",className:i.overlay,loaderSize:"md"}),n&&e.jsx(z,{...n,classNamePicture:i.logo}),e.jsx("h1",{className:"h3",children:l}),s&&e.jsx("p",{children:s}),e.jsx(b,{label:c,formElementId:"name",children:e.jsx(R,{id:"name",value:p,onChange:q})}),e.jsx(b,{label:d,formElementId:"comment",children:e.jsx(H,{id:"comment",value:u,onChange:w})}),y&&e.jsx("div",{className:I(i.errorMessage),children:y}),e.jsx(x,{type:"submit",surface:"primary",size:"small",fullWidth:!0,children:r}),f&&e.jsx(x,{type:"button",onClick:N,surface:"secondary",size:"small",fullWidth:!0,children:f}),h&&e.jsx(m,{size:"default",href:"#",children:h})]});g.__docgenInfo={description:"",methods:[],displayName:"CreateListForm",props:{logo:{required:!1,tsType:{name:"IPicture"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},nameLabel:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},commentLabel:{required:!0,tsType:{name:"string"},description:""},comment:{required:!1,tsType:{name:"string"},description:""},submitLabel:{required:!0,tsType:{name:"string"},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:""},offerLinkLabel:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},name:"event"}],return:{name:"void"}}},description:""},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNameChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onCommentChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const K={title:"Design System/Organisms/CreateListForm",component:g},E={render:({...n})=>{const[m,l]=C.useState(""),[s,c]=C.useState("");function p(r){l(r.currentTarget.value)}function d(r){c(r.currentTarget.value)}function u(){console.log("Cancel form submission")}return e.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:e.jsx(g,{...n,name:m,onNameChange:p,comment:s,onCommentChange:d,onCancel:u})})}},a={...E,args:{logo:{src:t,alt:"logo",href:"/",id:"logo",sources:[{srcset:t,media:"(max-width: 767px)"},{srcset:t,media:"(min-width: 768px)"}]},linkComponent:"a",title:"Skapa upp inköpslista",description:"Fyll i dina uppgifter här nedanför",nameLabel:"Namn",name:"Vårfesten",commentLabel:"Kommentar",comment:"Öl för hela slanten",submitLabel:"Spara",cancelLabel:"Avbryt & stäng ner fönster",offerLinkLabel:"Läs mer om hur listor fungerar och dess fördelar",onSubmit:n=>{},onCancel:()=>{},onNameChange:n=>{},onCommentChange:n=>{}}},o={...E,args:{logo:{src:t,alt:"logo",href:"/",id:"logo",sources:[{srcset:t,media:"(max-width: 767px)"},{srcset:t,media:"(min-width: 768px)"}]},linkComponent:"a",title:"Skapa upp inköpslista",description:"Fyll i dina uppgifter här nedanför",nameLabel:"Namn",name:"Vårfesten",commentLabel:"Kommentar",comment:"Öl för hela slanten",submitLabel:"Spara",cancelLabel:"Avbryt & stäng ner fönster",offerLinkLabel:"Läs mer om hur listor fungerar och dess fördelar",onSubmit:n=>{},onCancel:()=>{},onNameChange:n=>{},onCommentChange:n=>{},loading:!0}};var v,_,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...CreateListFormStoryTemplate,
  args: {
    logo: {
      src: logotype_desktop_horizontal,
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [{
        srcset: logotype_mobile_horiontal,
        media: \`(max-width: 767px)\`
      }, {
        srcset: logotype_desktop_horizontal,
        media: \`(min-width: 768px)\`
      }]
    },
    linkComponent: 'a',
    title: 'Skapa upp inköpslista',
    description: 'Fyll i dina uppgifter här nedanför',
    nameLabel: 'Namn',
    name: 'Vårfesten',
    commentLabel: 'Kommentar',
    comment: 'Öl för hela slanten',
    submitLabel: 'Spara',
    cancelLabel: 'Avbryt & stäng ner fönster',
    offerLinkLabel: 'Läs mer om hur listor fungerar och dess fördelar',
    onSubmit: e => {},
    onCancel: () => {},
    onNameChange: e => {},
    onCommentChange: e => {}
  }
}`,...(T=(_=a.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var S,F,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...CreateListFormStoryTemplate,
  args: {
    logo: {
      src: logotype_desktop_horizontal,
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [{
        srcset: logotype_mobile_horiontal,
        media: \`(max-width: 767px)\`
      }, {
        srcset: logotype_desktop_horizontal,
        media: \`(min-width: 768px)\`
      }]
    },
    linkComponent: 'a',
    title: 'Skapa upp inköpslista',
    description: 'Fyll i dina uppgifter här nedanför',
    nameLabel: 'Namn',
    name: 'Vårfesten',
    commentLabel: 'Kommentar',
    comment: 'Öl för hela slanten',
    submitLabel: 'Spara',
    cancelLabel: 'Avbryt & stäng ner fönster',
    offerLinkLabel: 'Läs mer om hur listor fungerar och dess fördelar',
    onSubmit: e => {},
    onCancel: () => {},
    onNameChange: e => {},
    onCommentChange: e => {},
    loading: true
  }
}`,...(k=(F=o.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const P=["CreateListFormStory","CreateListFormStory_Loading"],$=Object.freeze(Object.defineProperty({__proto__:null,CreateListFormStory:a,CreateListFormStory_Loading:o,__namedExportsOrder:P,default:K},Symbol.toStringTag,{value:"Module"}));export{g as C,a,$ as c};
