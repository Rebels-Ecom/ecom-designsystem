import{L as I}from"./logotype-5f577bc9.js";import{r as d,a as D,j as s}from"./jsx-runtime-a3a6c0b8.js";import{F as G,v as J}from"./form-00a32b27.js";import{l as u}from"./Spendrups_logo_horizontal-038b757f.js";const O="_loginForm_2yyuq_1",H="_logo_2yyuq_25",A="_closeButton_2yyuq_34",R="_overlay_2yyuq_43",c={loginForm:O,logo:H,closeButton:A,overlay:R},o=({title:e,description:v,usernameLabel:w,username:F,passwordLabel:q,password:k,forgotPassword:t,onSubmit:V,primarySubmitLabel:m,secondarySubmitLabel:l,offerLink:i,errorMessage:M,usernameError:C,passwordError:x,onPasswordChange:E,onUsernameChange:P,loading:T,logo:p,responseMessage:j,captcha:z,submitDisabled:g})=>{const N=d.useMemo(()=>{const n=[{children:m,surface:"primary",type:"submit",size:"small",disabled:g}];return l&&n.push({children:l,surface:"secondary",type:"button",size:"small"}),n},[m,l,g]),B=d.useMemo(()=>{const n=[];return t&&n.push(t),i&&n.push(i),n},[t,i]),U=d.useMemo(()=>[{fieldType:"input",name:"email",label:w,originalValue:F??"",type:"text",pattern:"email",onControlledChange:P,required:!0,error:C??"Ange en korrekt e-post e.g. mail@mail.com",size:"full"},{fieldType:"input",name:"password",label:q,originalValue:k??"",type:"password",pattern:"password",onControlledChange:E,required:!0,error:x??"Lösenord måste vara minst x tecken...",size:"full"}],[]);return D("div",{className:c.loginForm,children:[p&&s(I,{...p,classNamePicture:c.logo}),s(G,{formTitle:e,formSubtitle:v,fields:U.map(n=>({...n,valid:J(n)})),loading:!!T,onControlledSubmit:V,actions:N,generalErrorMessage:M,links:B,responseMessage:j,captcha:z})]})};try{o.displayName="LoginForm",o.__docgenInfo={description:"",displayName:"LoginForm",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},usernameLabel:{defaultValue:null,description:"",name:"usernameLabel",required:!0,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string"}},passwordLabel:{defaultValue:null,description:"",name:"passwordLabel",required:!0,type:{name:"string"}},password:{defaultValue:null,description:"",name:"password",required:!1,type:{name:"string"}},forgotPassword:{defaultValue:null,description:"",name:"forgotPassword",required:!0,type:{name:"{ name: string; href: string; }"}},primarySubmitLabel:{defaultValue:null,description:"",name:"primarySubmitLabel",required:!0,type:{name:"string"}},secondarySubmitLabel:{defaultValue:null,description:"",name:"secondarySubmitLabel",required:!1,type:{name:"string"}},offerLink:{defaultValue:null,description:"",name:"offerLink",required:!1,type:{name:"{ name: string; href: string; }"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},usernameError:{defaultValue:null,description:"",name:"usernameError",required:!1,type:{name:"string"}},passwordError:{defaultValue:null,description:"",name:"passwordError",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(event: FormEvent<HTMLFormElement>) => void"}},onPasswordChange:{defaultValue:null,description:"",name:"onPasswordChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onUsernameChange:{defaultValue:null,description:"",name:"onUsernameChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"IPicture"}},captcha:{defaultValue:null,description:"",name:"captcha",required:!1,type:{name:"Element"}},submitDisabled:{defaultValue:null,description:"",name:"submitDisabled",required:!1,type:{name:"boolean"}},responseMessage:{defaultValue:null,description:"If true, a message will be displayed after submit response",name:"responseMessage",required:!1,type:{name:"TFormResponseMessage"}}}}}catch{}const W={title:"Design System/Organisms/LoginForm",component:o},S={render:({...e})=>s("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:s(o,{...e,responseMessage:e.success?{title:"Success!",message:"Success message..."}:void 0,loading:e.loading})})},r={...S,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPassword:{name:"Glömt mitt lösenord?",href:"#"},primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLink:{name:"Ny på Spendrups & vill veta mer om vårat erbjudande?",href:"#"},onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},errorMessage:`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.`,logo:{src:u,alt:"logo",href:"/",id:"logo",sources:[{srcset:u,media:"(max-width: 767px)"},{srcset:u,media:"(min-width: 768px)"}]},success:!1,loading:!1}},a={...S,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},loading:!0}};var f,y,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,L,_;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(L=a.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const K=["LoginFormStory","LoginFormStory_Loading"],$=Object.freeze(Object.defineProperty({__proto__:null,LoginFormStory:r,LoginFormStory_Loading:a,__namedExportsOrder:K,default:W},Symbol.toStringTag,{value:"Module"}));export{r as L,a,o as b,$ as l};
