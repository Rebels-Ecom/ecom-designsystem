import{c as k}from"./index-a587463d.js";import{a as l,j as e}from"./jsx-runtime-a3a6c0b8.js";import{B as S}from"./button-369dade1.js";import{Button_Large_Icon_Right as N}from"./button.stories-b979c630.js";import{a as f}from"./chunk-WFFRPTHA-a68c42c5.js";const T="_accountBox_1ydil_1",q="_companyName_1ydil_17",V="_accountNumber_1ydil_18",j="_addressTitle_1ydil_22",F="_address_1ydil_22",n={accountBox:T,companyName:q,accountNumber:V,addressTitle:j,address:F};function s({companyName:t,accountNumber:A,contactPerson:d,addressTitle:u,address:i,zipcode:r,city:a,chooseAccountBtn:x,onClickChooseAccount:b}){const C=()=>{b()};return l("div",{className:n.accountBox,children:[l("div",{children:[e("p",{className:n.companyName,children:e("b",{children:t})}),e("p",{className:n.accountNumber,children:A}),d&&e("p",{children:d}),u&&e("p",{className:n.addressTitle,children:u}),l("p",{className:k({[n.address]:!!u}),children:[i&&(r||a?`${i},`:i)," ",r&&(a?`${r},`:r)," ",a&&a]})]}),e(S,{...x,type:"button",surface:"primary",onClick:C})]})}try{s.displayName="AccountBox",s.__docgenInfo={description:"",displayName:"AccountBox",props:{companyName:{defaultValue:null,description:"",name:"companyName",required:!0,type:{name:"string"}},accountNumber:{defaultValue:null,description:"",name:"accountNumber",required:!0,type:{name:"string"}},contactPerson:{defaultValue:null,description:"",name:"contactPerson",required:!1,type:{name:"string"}},addressTitle:{defaultValue:null,description:"",name:"addressTitle",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!1,type:{name:"string"}},zipcode:{defaultValue:null,description:"",name:"zipcode",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!1,type:{name:"string"}},chooseAccountBtn:{defaultValue:null,description:"",name:"chooseAccountBtn",required:!0,type:{name:"IButton"}},onClickChooseAccount:{defaultValue:null,description:"",name:"onClickChooseAccount",required:!0,type:{name:"CallableFunction"}}}}}catch{}const I={title:"Design System/Molecules/AccountBox",component:s},h={render:({...t})=>e(s,{...t})},o={...h,args:{companyName:"Beer Fest",accountNumber:"Kundnr: 186922",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:N.args,onClickChooseAccount:f("clicked")}},c={...h,args:{companyName:"Beer Fest",accountNumber:"Kundnr: 186922",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:N.args,onClickChooseAccount:f("clicked")}};var m,p,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: 'Kundnr: 186922',
    contactPerson: 'Jon Jonsson',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: Button_Large_Icon_Right.args,
    onClickChooseAccount: action('clicked')
  }
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var _,g,B;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: 'Kundnr: 186922',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: Button_Large_Icon_Right.args,
    onClickChooseAccount: action('clicked')
  }
}`,...(B=(g=c.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const z=["AccountBoxStory","AccountBoxStory_2"],L=Object.freeze(Object.defineProperty({__proto__:null,AccountBoxStory:o,AccountBoxStory_2:c,__namedExportsOrder:z,default:I},Symbol.toStringTag,{value:"Module"}));export{s as A,o as a,c as b,L as c};
