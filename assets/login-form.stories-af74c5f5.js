import{L as j}from"./logotype-2914ab84.js";import{r as u}from"./index-6f814c40.js";import{F as z,v as N}from"./form-7ea49480.js";import{j as B,a as o}from"./jsx-runtime-76c5c2e2.js";import{l}from"./Spendrups_logo_horizontal-038b757f.js";const U="_loginForm_2yyuq_1",G="_logo_2yyuq_25",I="_closeButton_2yyuq_34",J="_overlay_2yyuq_43",m={loginForm:U,logo:G,closeButton:I,overlay:J},t=({title:e,description:h,usernameLabel:_,username:v,passwordLabel:S,password:w,forgotPasswordLabel:i,onSubmit:F,primarySubmitLabel:k,secondarySubmitLabel:s,offerLinkLabel:H,errorMessage:q,usernameError:V,passwordError:C,onPasswordChange:x,onUsernameChange:M,loading:P,logo:d})=>{const E=u.useMemo(()=>{const r=[{children:k,surface:"primary",type:"submit",size:"small"}];return s&&r.push({children:s,surface:"secondary",type:"button",size:"small"}),r},[s]),T=u.useMemo(()=>[{fieldType:"input",name:"email",label:_,originalValue:v??"",type:"text",pattern:"email",onControlledChange:M,required:!0,error:V??"Ange en korrekt e-post e.g. mail@mail.com",size:"full"},{fieldType:"input",name:"password",label:S,originalValue:w??"",type:"password",pattern:"password",onControlledChange:x,required:!0,error:C??"Lösenord måste vara minst x tecken...",size:"full"}],[]);return B("div",{className:m.loginForm,children:[d&&o(j,{...d,classNamePicture:m.logo}),o(z,{formTitle:e,formSubtitle:h,fields:T.map(r=>({...r,valid:N(r)})),loading:!!P,onControlledSubmit:F,actions:E,generalErrorMessage:q,links:i?[{name:i,href:"#"}]:void 0})]})};try{t.displayName="LoginForm",t.__docgenInfo={description:"",displayName:"LoginForm",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},usernameLabel:{defaultValue:null,description:"",name:"usernameLabel",required:!0,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string"}},passwordLabel:{defaultValue:null,description:"",name:"passwordLabel",required:!0,type:{name:"string"}},password:{defaultValue:null,description:"",name:"password",required:!1,type:{name:"string"}},forgotPasswordLabel:{defaultValue:null,description:"",name:"forgotPasswordLabel",required:!0,type:{name:"string"}},primarySubmitLabel:{defaultValue:null,description:"",name:"primarySubmitLabel",required:!0,type:{name:"string"}},secondarySubmitLabel:{defaultValue:null,description:"",name:"secondarySubmitLabel",required:!1,type:{name:"string"}},offerLinkLabel:{defaultValue:null,description:"",name:"offerLinkLabel",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},usernameError:{defaultValue:null,description:"",name:"usernameError",required:!1,type:{name:"string"}},passwordError:{defaultValue:null,description:"",name:"passwordError",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(event: FormEvent<HTMLFormElement>) => void"}},onPasswordChange:{defaultValue:null,description:"",name:"onPasswordChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onUsernameChange:{defaultValue:null,description:"",name:"onUsernameChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"IPicture"}}}}}catch{}const O={title:"Design System/Organisms/LoginForm",component:t},b={render:({...e})=>o("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:o(t,{...e})})},n={...b,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},errorMessage:`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.`,logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:l,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]}}},a={...b,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},loading:!0}};var p,g,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    secondarySubmitLabel: 'Bli e-handelskund',
    offerLinkLabel: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
    onSubmit: e => {},
    onPasswordChange: e => {},
    onUsernameChange: e => {},
    errorMessage: \`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.\`,
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
    }
  }
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var f,y,L;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    secondarySubmitLabel: 'Bli e-handelskund',
    offerLinkLabel: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
    onSubmit: e => {},
    onPasswordChange: e => {},
    onUsernameChange: e => {},
    loading: true
  }
}`,...(L=(y=a.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const D=["LoginFormStory","LoginFormStory_Loading"],X=Object.freeze(Object.defineProperty({__proto__:null,LoginFormStory:n,LoginFormStory_Loading:a,__namedExportsOrder:D,default:O},Symbol.toStringTag,{value:"Module"}));export{n as L,a,t as b,X as l};
//# sourceMappingURL=login-form.stories-af74c5f5.js.map
