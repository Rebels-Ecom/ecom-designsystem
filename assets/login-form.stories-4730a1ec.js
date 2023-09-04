import{c as N}from"./index-74f03c09.js";import{L as j}from"./loading-overlay-50e5892b.js";import{j as E,a as e}from"./jsx-runtime-76c5c2e2.js";import{F as u}from"./form-group-90a35cf8.js";import{I as p}from"./input-text-da894f75.js";import{U as g}from"./ui-link-edaab2a0.js";import{B as c}from"./button-90dd05d4.js";const x="_loginForm_1cnww_1",I="_closeButton_1cnww_29",T="_overlay_1cnww_38",t={loginForm:x,closeButton:I,overlay:T},o=({title:r,description:s,usernameLabel:v,username:_,passwordLabel:F,password:k,forgotPasswordLabel:C,onSubmit:V,primarySubmitLabel:q,secondarySubmitLabel:l,offerLinkLabel:i,errorMessage:d,onPasswordChange:P,onUsernameChange:M,loading:m})=>E("form",{className:t.loginForm,onSubmit:V,children:[m&&e(j,{isVisible:m,position:"absolute",className:t.overlay,loaderSize:"md"}),e("h1",{className:"h3",children:r}),s&&e("p",{children:s}),e(u,{label:v,formElementId:"email",children:e(p,{id:"email",value:_,autocomplete:"username",onChange:M})}),e(u,{label:F,formElementId:"password",children:e(p,{id:"password",type:"password",autocomplete:"current-password",value:k,onChange:P})}),d&&e("div",{className:N(t.errorMessage),children:d}),e(g,{onSurface:"transparent",size:"default",href:"#",children:C}),e(c,{type:"submit",surface:"primary",size:"small",fullWidth:!0,children:q}),l&&e(c,{type:"submit",surface:"secondary",size:"small",fullWidth:!0,children:l}),i&&e(g,{onSurface:"transparent",size:"default",href:"#",children:i})]});try{o.displayName="LoginForm",o.__docgenInfo={description:"",displayName:"LoginForm",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},usernameLabel:{defaultValue:null,description:"",name:"usernameLabel",required:!0,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string"}},passwordLabel:{defaultValue:null,description:"",name:"passwordLabel",required:!0,type:{name:"string"}},password:{defaultValue:null,description:"",name:"password",required:!1,type:{name:"string"}},forgotPasswordLabel:{defaultValue:null,description:"",name:"forgotPasswordLabel",required:!0,type:{name:"string"}},primarySubmitLabel:{defaultValue:null,description:"",name:"primarySubmitLabel",required:!0,type:{name:"string"}},secondarySubmitLabel:{defaultValue:null,description:"",name:"secondarySubmitLabel",required:!1,type:{name:"string"}},offerLinkLabel:{defaultValue:null,description:"",name:"offerLinkLabel",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(event: FormEvent<HTMLFormElement>) => void"}},onPasswordChange:{defaultValue:null,description:"",name:"onPasswordChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onUsernameChange:{defaultValue:null,description:"",name:"onUsernameChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const U={title:"Design System/Organisms/LoginForm",component:o},w={render:({...r})=>e("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:e(o,{...r})})},n={...w,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Skapa ett konto & bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:r=>{},onPasswordChange:r=>{},onUsernameChange:r=>{}}},a={...w,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Skapa ett konto & bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:r=>{},onPasswordChange:r=>{},onUsernameChange:r=>{},loading:!0}};var L,b,f;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...LoginFormStoryTemplate,
  args: {
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    forgotPasswordLabel: 'Glömt mitt lösenord?',
    primarySubmitLabel: 'Logga in',
    secondarySubmitLabel: 'Skapa ett konto & bli e-handelskund',
    offerLinkLabel: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
    onSubmit: e => {},
    onPasswordChange: e => {},
    onUsernameChange: e => {}
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...LoginFormStoryTemplate,
  args: {
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    forgotPasswordLabel: 'Glömt mitt lösenord?',
    primarySubmitLabel: 'Logga in',
    secondarySubmitLabel: 'Skapa ett konto & bli e-handelskund',
    offerLinkLabel: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
    onSubmit: e => {},
    onPasswordChange: e => {},
    onUsernameChange: e => {},
    loading: true
  }
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const z=["LoginFormStory","LoginFormStory_Loading"],A=Object.freeze(Object.defineProperty({__proto__:null,LoginFormStory:n,LoginFormStory_Loading:a,__namedExportsOrder:z,default:U},Symbol.toStringTag,{value:"Module"}));export{n as L,a,o as b,A as l};
//# sourceMappingURL=login-form.stories-4730a1ec.js.map
