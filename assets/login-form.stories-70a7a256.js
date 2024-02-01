import{L as I}from"./logotype-564a64e9.js";import{r as u,a as z,j as s}from"./jsx-runtime-a3a6c0b8.js";import{F as U,v as D}from"./form-16d9b755.js";import{l as i}from"./Spendrups_logo_horizontal-038b757f.js";const G="_loginForm_cmt81_1",J="_logo_cmt81_29",O="_closeButton_cmt81_38",A="_overlay_cmt81_47",m={loginForm:G,logo:J,closeButton:O,overlay:A},o=({title:e,description:h,usernameLabel:S,username:_,passwordLabel:v,password:w,forgotPassword:t,onSubmit:F,offerLink:l,errorMessage:k,usernameError:q,passwordError:V,onPasswordChange:C,onUsernameChange:M,loading:x,logo:d,responseMessage:E,captcha:P,actions:T,linkActions:j})=>{const B=u.useMemo(()=>{const n=[];return t&&n.push(t),l&&n.push(l),n},[t,l]),N=u.useMemo(()=>[{fieldType:"input",name:"email",label:S,originalValue:_??"",type:"text",pattern:"email",onControlledChange:M,required:!0,error:q??"Ange en korrekt e-post e.g. mail@mail.com",size:"full"},{fieldType:"input",name:"password",label:v,originalValue:w??"",type:"password",pattern:"password",onControlledChange:C,required:!0,error:V??"Lösenord måste vara minst x tecken...",size:"full"}],[]);return z("div",{className:m.loginForm,children:[d&&s(I,{...d,classNamePicture:m.logo}),s(U,{formTitle:e,formSubtitle:h,fields:N.map(n=>({...n,valid:D(n)})),loading:!!x,onControlledSubmit:F,actions:T,linkActions:j,generalErrorMessage:k,links:B,responseMessage:E,captcha:P,isLogin:!0})]})};try{o.displayName="LoginForm",o.__docgenInfo={description:"",displayName:"LoginForm",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},usernameLabel:{defaultValue:null,description:"",name:"usernameLabel",required:!0,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string"}},passwordLabel:{defaultValue:null,description:"",name:"passwordLabel",required:!0,type:{name:"string"}},password:{defaultValue:null,description:"",name:"password",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"IButton[]"}},linkActions:{defaultValue:null,description:"",name:"linkActions",required:!1,type:{name:"ILinkButton[]"}},forgotPassword:{defaultValue:null,description:"",name:"forgotPassword",required:!0,type:{name:"{ name: string; href: string; }"}},primarySubmitLabel:{defaultValue:null,description:"",name:"primarySubmitLabel",required:!0,type:{name:"string"}},secondarySubmitLabel:{defaultValue:null,description:"",name:"secondarySubmitLabel",required:!1,type:{name:"string"}},offerLink:{defaultValue:null,description:"",name:"offerLink",required:!1,type:{name:"{ name: string; href: string; }"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},usernameError:{defaultValue:null,description:"",name:"usernameError",required:!1,type:{name:"string"}},passwordError:{defaultValue:null,description:"",name:"passwordError",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(event: FormEvent<HTMLFormElement>) => void"}},onPasswordChange:{defaultValue:null,description:"",name:"onPasswordChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onUsernameChange:{defaultValue:null,description:"",name:"onUsernameChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"IPicture"}},captcha:{defaultValue:null,description:"",name:"captcha",required:!1,type:{name:"Element"}},submitDisabled:{defaultValue:null,description:"",name:"submitDisabled",required:!1,type:{name:"boolean"}},responseMessage:{defaultValue:null,description:"If true, a message will be displayed after submit response",name:"responseMessage",required:!1,type:{name:"TFormResponseMessage"}}}}}catch{}const H={title:"Design System/Organisms/LoginForm",component:o},L={render:({...e})=>s("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:s(o,{...e,responseMessage:e.success?{title:"Success!",message:"Success message..."}:void 0,loading:e.loading})})},r={...L,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPassword:{name:"Glömt mitt lösenord?",href:"#"},primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLink:{name:"Ny på Spendrups & vill veta mer om vårat erbjudande?",href:"#"},onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},errorMessage:`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.`,logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:i,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},success:!1,loading:!1}},a={...L,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},loading:!0}};var p,g,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...LoginFormStoryTemplate,
  args: {
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    forgotPassword: {
      name: 'Glömt mitt lösenord?',
      href: '#'
    },
    primarySubmitLabel: 'Logga in',
    secondarySubmitLabel: 'Bli e-handelskund',
    offerLink: {
      name: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
      href: '#'
    },
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
    },
    success: false,
    loading: false
  }
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var f,y,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const R=["LoginFormStory","LoginFormStory_Loading"],Y=Object.freeze(Object.defineProperty({__proto__:null,LoginFormStory:r,LoginFormStory_Loading:a,__namedExportsOrder:R,default:H},Symbol.toStringTag,{value:"Module"}));export{r as L,a,o as b,Y as l};
