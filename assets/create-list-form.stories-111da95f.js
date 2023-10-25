import{r as C}from"./index-6f814c40.js";import{c as w}from"./index-74f03c09.js";import{L as I}from"./loading-overlay-c138819b.js";import{L as M}from"./logotype-2914ab84.js";import{j as O,a as e}from"./jsx-runtime-76c5c2e2.js";import{F as b}from"./form-group-e3990990.js";import{I as j}from"./input-text-4314ba0f.js";import{T as B}from"./textarea-df5ac981.js";import{B as _}from"./button-df2f483d.js";import{l as a}from"./Spendrups_logo_horizontal-038b757f.js";const A="_createListForm_1g8x1_1",K="_logo_1g8x1_30",H="_closeButton_1g8x1_35",P="_overlay_1g8x1_44",i={createListForm:A,logo:K,closeButton:H,overlay:P},m=({logo:n,linkComponent:s,title:u,description:l,nameLabel:c,name:d,commentLabel:p,comment:g,submitLabel:t,onSubmit:q,onCancel:T,cancelLabel:f,offerLinkLabel:h,errorMessage:L,onNameChange:z,onCommentChange:E,loading:y})=>O("form",{className:i.createListForm,onSubmit:q,children:[y&&e(I,{isVisible:y,position:"absolute",className:i.overlay,loaderSize:"md"}),n&&e(M,{...n,classNamePicture:i.logo}),e("h1",{className:"h3",children:u}),l&&e("p",{children:l}),e(b,{label:c,formElementId:"name",children:e(j,{id:"name",value:d,onChange:z})}),e(b,{label:p,formElementId:"comment",children:e(B,{id:"comment",value:g,onChange:E})}),L&&e("div",{className:w(i.errorMessage),children:L}),e(_,{type:"submit",surface:"primary",size:"small",fullWidth:!0,children:t}),f&&e(_,{type:"button",onClick:T,surface:"secondary",size:"small",fullWidth:!0,children:f}),h&&e(s,{size:"default",href:"#",children:h})]});try{m.displayName="CreateListForm",m.__docgenInfo={description:"",displayName:"CreateListForm",props:{logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"IPicture"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},nameLabel:{defaultValue:null,description:"",name:"nameLabel",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},commentLabel:{defaultValue:null,description:"",name:"commentLabel",required:!0,type:{name:"string"}},comment:{defaultValue:null,description:"",name:"comment",required:!1,type:{name:"string"}},submitLabel:{defaultValue:null,description:"",name:"submitLabel",required:!0,type:{name:"string"}},cancelLabel:{defaultValue:null,description:"",name:"cancelLabel",required:!1,type:{name:"string"}},offerLinkLabel:{defaultValue:null,description:"",name:"offerLinkLabel",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(event: FormEvent<HTMLFormElement>) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}},onNameChange:{defaultValue:null,description:"",name:"onNameChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onCommentChange:{defaultValue:null,description:"",name:"onCommentChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"Design System/Organisms/CreateListForm",component:m},N={render:({...n})=>{const[s,u]=C.useState(""),[l,c]=C.useState("");function d(t){u(t.currentTarget.value)}function p(t){c(t.currentTarget.value)}function g(){console.log("Cancel form submission")}return e("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:e(m,{...n,name:s,onNameChange:d,comment:l,onCommentChange:p,onCancel:g})})}},r={...N,args:{logo:{src:a,alt:"logo",href:"/",id:"logo",sources:[{srcset:a,media:"(max-width: 767px)"},{srcset:a,media:"(min-width: 768px)"}]},linkComponent:"a",title:"Skapa upp inköpslista",description:"Fyll i dina uppgifter här nedanför",nameLabel:"Namn",name:"Vårfesten",commentLabel:"Kommentar",comment:"Öl för hela slanten",submitLabel:"Spara",cancelLabel:"Avbryt & stäng ner fönster",offerLinkLabel:"Läs mer om hur listor fungerar och dess fördelar",onSubmit:n=>{},onCancel:()=>{},onNameChange:n=>{},onCommentChange:n=>{}}},o={...N,args:{logo:{src:a,alt:"logo",href:"/",id:"logo",sources:[{srcset:a,media:"(max-width: 767px)"},{srcset:a,media:"(min-width: 768px)"}]},linkComponent:"a",title:"Skapa upp inköpslista",description:"Fyll i dina uppgifter här nedanför",nameLabel:"Namn",name:"Vårfesten",commentLabel:"Kommentar",comment:"Öl för hela slanten",submitLabel:"Spara",cancelLabel:"Avbryt & stäng ner fönster",offerLinkLabel:"Läs mer om hur listor fungerar och dess fördelar",onSubmit:n=>{},onCancel:()=>{},onNameChange:n=>{},onCommentChange:n=>{},loading:!0}};var S,k,v;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,F,V;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(F=o.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const D=["CreateListFormStory","CreateListFormStory_Loading"],ne=Object.freeze(Object.defineProperty({__proto__:null,CreateListFormStory:r,CreateListFormStory_Loading:o,__namedExportsOrder:D,default:W},Symbol.toStringTag,{value:"Module"}));export{m as C,r as a,ne as c};
//# sourceMappingURL=create-list-form.stories-111da95f.js.map
