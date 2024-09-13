import{L as I}from"./logotype-b3b7cab7.js";import{r as m,j as a}from"./jsx-runtime-03333307.js";import{F as J,v as U}from"./form-30c4e65a.js";import{l as i}from"./Spendrups_logo_horizontal-038b757f.js";const A="_loginForm_dsko2_1",D="_logo_dsko2_31",G="_closeButton_dsko2_40",O="_overlay_dsko2_49",p={loginForm:A,logo:D,closeButton:G,overlay:O},l=({title:e,description:h,usernameLabel:v,username:S,passwordLabel:k,password:w,forgotPassword:t,onSubmit:T,offerLink:o,errorMessage:_,usernameError:F,passwordError:q,onPasswordChange:x,onUsernameChange:j,loading:C,logo:d,responseMessage:M,captcha:E,actions:P,linkActions:B})=>{const N=m.useMemo(()=>{const r=[];return t&&r.push(t),o&&r.push(o),r},[t,o]),z=m.useMemo(()=>[{fieldType:"input",name:"email",label:v,originalValue:S??"",type:"text",pattern:"email",onControlledChange:j,required:!0,error:F??"Ange en korrekt e-post e.g. mail@mail.com",size:"full"},{fieldType:"input",name:"password",label:k,originalValue:w??"",type:"password",pattern:"password",onControlledChange:x,required:!0,error:q??"Lösenord måste vara minst x tecken...",size:"full"}],[]);return a.jsxs("div",{className:p.loginForm,children:[d&&a.jsx(I,{...d,classNamePicture:p.logo}),a.jsx(J,{formTitle:e,formSubtitle:h,fields:z.map(r=>({...r,valid:U(r)})),loading:!!C,onControlledSubmit:T,actions:P,linkActions:B,generalErrorMessage:_,links:N,responseMessage:M,captcha:E,isLogin:!0})]})};l.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},usernameLabel:{required:!0,tsType:{name:"string"},description:""},username:{required:!1,tsType:{name:"string"},description:""},passwordLabel:{required:!0,tsType:{name:"string"},description:""},password:{required:!1,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"IButton"}],raw:"IButton[]"},description:""},linkActions:{required:!1,tsType:{name:"Array",elements:[{name:"ILinkButton"}],raw:"ILinkButton[]"},description:""},forgotPassword:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  name: string;
  href: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}},description:""},primarySubmitLabel:{required:!0,tsType:{name:"string"},description:""},secondarySubmitLabel:{required:!1,tsType:{name:"string"},description:""},offerLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string;
  href: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}},description:""},errorMessage:{required:!1,tsType:{name:"any"},description:""},usernameError:{required:!1,tsType:{name:"string"},description:""},passwordError:{required:!1,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},name:"event"}],return:{name:"void"}}},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onUsernameChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},logo:{required:!0,tsType:{name:"IPicture"},description:""},captcha:{required:!1,tsType:{name:"JSX.Element"},description:""},submitDisabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Pick"]};const R={title:"Design System/Organisms/LoginForm",component:l},L={render:({...e})=>a.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:a.jsx(l,{...e,responseMessage:e.success?{title:"Success!",message:"Success message..."}:void 0,loading:e.loading})})},n={...L,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPassword:{name:"Glömt mitt lösenord?",href:"#"},primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLink:{name:"Ny på Spendrups & vill veta mer om vårat erbjudande?",href:"#"},onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},errorMessage:`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.`,logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:i,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},success:!1,loading:!1}},s={...L,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},loading:!0}};var u,g,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var y,f,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const H=["LoginFormStory","LoginFormStory_Loading"],Q=Object.freeze(Object.defineProperty({__proto__:null,LoginFormStory:n,LoginFormStory_Loading:s,__namedExportsOrder:H,default:R},Symbol.toStringTag,{value:"Module"}));export{n as L,s as a,l as b,Q as l};
