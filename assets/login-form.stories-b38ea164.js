import{r as m,j as s}from"./jsx-runtime-03333307.js";import{F as z,v as I}from"./form-b4c75e60.js";import{l as i}from"./Spendrups_logo_horizontal-038b757f.js";const J="_loginForm_n3mi9_1",U="_logoWrapper_n3mi9_15",W="_logo_n3mi9_15",A="_closeButton_n3mi9_44",D="_overlay_n3mi9_53",p={loginForm:J,logoWrapper:U,logo:W,closeButton:A,overlay:D},l=({title:e,description:L,usernameLabel:v,username:k,passwordLabel:S,password:w,forgotPassword:t,onSubmit:F,offerLink:o,errorMessage:_,usernameError:T,passwordError:q,onPasswordChange:C,onUsernameChange:x,loading:j,logo:d,responseMessage:M,captcha:E,actions:B,linkActions:P})=>{const N=m.useMemo(()=>{const r=[];return t&&r.push(t),o&&r.push(o),r},[t,o]),R=m.useMemo(()=>[{fieldType:"input",name:"email",label:v,originalValue:k??"",type:"text",pattern:"email",onControlledChange:x,required:!0,error:T??"Ange en korrekt e-post e.g. mail@mail.com",size:"full"},{fieldType:"input",name:"password",label:S,originalValue:w??"",type:"password",pattern:"password",onControlledChange:C,required:!0,error:q??"Lösenord måste vara minst x tecken...",size:"full"}],[]);return s.jsxs("div",{className:p.loginForm,children:[s.jsx("div",{className:p.logoWrapper,children:d&&d}),s.jsx(z,{formTitle:e,formSubtitle:L,fields:R.map(r=>({...r,valid:I(r)})),loading:!!j,onControlledSubmit:F,actions:B,linkActions:P,generalErrorMessage:_,links:N,responseMessage:M,captcha:E,isLogin:!0})]})};l.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},usernameLabel:{required:!0,tsType:{name:"string"},description:""},username:{required:!1,tsType:{name:"string"},description:""},passwordLabel:{required:!0,tsType:{name:"string"},description:""},password:{required:!1,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"IButton"}],raw:"IButton[]"},description:""},linkActions:{required:!1,tsType:{name:"Array",elements:[{name:"ILinkButton"}],raw:"ILinkButton[]"},description:""},forgotPassword:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  name: string;
  href: string;
  onClick?: CallableFunction;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onClick",value:{name:"CallableFunction",required:!1}}]}},description:""},primarySubmitLabel:{required:!0,tsType:{name:"string"},description:""},secondarySubmitLabel:{required:!1,tsType:{name:"string"},description:""},offerLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string;
  href: string;
  onClick?: CallableFunction;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onClick",value:{name:"CallableFunction",required:!1}}]}},description:""},errorMessage:{required:!1,tsType:{name:"any"},description:""},usernameError:{required:!1,tsType:{name:"string"},description:""},passwordError:{required:!1,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},name:"event"}],return:{name:"void"}}},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onUsernameChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},captcha:{required:!1,tsType:{name:"JSX.Element"},description:""},submitDisabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Pick"]};const G={title:"Design System/Organisms/LoginForm",component:l},h={render:({...e})=>s.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:s.jsx(l,{...e,responseMessage:e.success?{title:"Success!",message:"Success message..."}:void 0,loading:e.loading})})},n={...h,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPassword:{name:"Glömt mitt lösenord?",href:"#"},primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLink:{name:"Ny på Spendrups & vill veta mer om vårat erbjudande?",href:"#"},onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},errorMessage:`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.`,logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:i,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},success:!1,loading:!1}},a={...h,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},loading:!0}};var u,g,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var y,f,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const O=["LoginFormStory","LoginFormStory_Loading"],K=Object.freeze(Object.defineProperty({__proto__:null,LoginFormStory:n,LoginFormStory_Loading:a,__namedExportsOrder:O,default:G},Symbol.toStringTag,{value:"Module"}));export{n as L,a,l as b,K as l};
