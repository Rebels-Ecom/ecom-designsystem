import{r as d,j as n}from"./jsx-runtime-03333307.js";import{F as I,v as J}from"./form-cdc89d10.js";const R="_loginForm_n3mi9_1",U="_logoWrapper_n3mi9_15",W="_logo_n3mi9_15",A="_closeButton_n3mi9_44",D="_overlay_n3mi9_53",m={loginForm:R,logoWrapper:U,logo:W,closeButton:A,overlay:D},i=({title:e,description:L,usernameLabel:h,username:v,passwordLabel:S,password:k,forgotPassword:o,onSubmit:q,offerLink:t,errorMessage:w,usernameError:F,passwordError:T,onPasswordChange:_,onUsernameChange:C,loading:j,logo:l,responseMessage:x,captcha:M,actions:B,linkActions:P})=>{const N=d.useMemo(()=>{const r=[];return o&&r.push(o),t&&r.push(t),r},[o,t]),E=d.useMemo(()=>[{fieldType:"input",name:"email",label:h,originalValue:v??"",type:"text",pattern:"email",onControlledChange:C,required:!0,error:F??"Ange en korrekt e-post e.g. mail@mail.com",size:"full"},{fieldType:"input",name:"password",label:S,originalValue:k??"",type:"password",pattern:"password",onControlledChange:_,required:!0,error:T??"Lösenord måste vara minst x tecken...",size:"full"}],[]);return n.jsxs("div",{className:m.loginForm,children:[n.jsx("div",{className:m.logoWrapper,children:l&&l}),n.jsx(I,{formTitle:e,formSubtitle:L,fields:E.map(r=>({...r,valid:J(r)})),loading:!!j,onSubmit:q,actions:B,linkActions:P,generalErrorMessage:w,links:N,responseMessage:x,captcha:M,isLogin:!0})]})};i.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},usernameLabel:{required:!0,tsType:{name:"string"},description:""},username:{required:!1,tsType:{name:"string"},description:""},passwordLabel:{required:!0,tsType:{name:"string"},description:""},password:{required:!1,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"IButton"}],raw:"IButton[]"},description:""},linkActions:{required:!1,tsType:{name:"Array",elements:[{name:"ILinkButton"}],raw:"ILinkButton[]"},description:""},forgotPassword:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  name: string
  href: string
  onClick?: CallableFunction
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onClick",value:{name:"CallableFunction",required:!1}}]}},description:""},primarySubmitLabel:{required:!0,tsType:{name:"string"},description:""},secondarySubmitLabel:{required:!1,tsType:{name:"string"},description:""},offerLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string
  href: string
  onClick?: CallableFunction
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onClick",value:{name:"CallableFunction",required:!1}}]}},description:""},errorMessage:{required:!1,tsType:{name:"any"},description:""},usernameError:{required:!1,tsType:{name:"string"},description:""},passwordError:{required:!1,tsType:{name:"string"},description:""},onPasswordChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onUsernameChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},captcha:{required:!1,tsType:{name:"JSX.Element"},description:""},submitDisabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Pick"]};const G={title:"Design System/Organisms/LoginForm",component:i},b={render:({...e})=>n.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:n.jsx(i,{...e,responseMessage:e.success?{title:"Success!",message:"Success message..."}:void 0,loading:e.loading})})},a={...b,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPassword:{name:"Glömt mitt lösenord?",href:"#"},primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLink:{name:"Ny på Spendrups & vill veta mer om vårat erbjudande?",href:"#"},onSubmit:()=>{},onPasswordChange:()=>{},onUsernameChange:()=>{},errorMessage:`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.`,logo:n.jsx("span",{children:"Logo goes here"}),success:!1,loading:!1}},s={...b,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},loading:!0}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    onSubmit: () => {},
    onPasswordChange: () => {},
    onUsernameChange: () => {},
    errorMessage: \`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.\`,
    logo: <span>Logo goes here</span>,
    success: false,
    loading: false
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var c,y,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const O=["LoginFormStory","LoginFormStory_Loading"],X=Object.freeze(Object.defineProperty({__proto__:null,LoginFormStory:a,LoginFormStory_Loading:s,__namedExportsOrder:O,default:G},Symbol.toStringTag,{value:"Module"}));export{a as L,s as a,i as b,X as l};
