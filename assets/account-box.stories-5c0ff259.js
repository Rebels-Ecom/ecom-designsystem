import{a as r,j as e}from"./jsx-runtime-a3a6c0b8.js";import{B as b}from"./button-93555bd8.js";import{Button_Large_Icon_Right as y}from"./button.stories-61dbc126.js";import{a as g}from"./chunk-WFFRPTHA-a68c42c5.js";const C="_accountBox_7hkkm_1",S="_companyName_7hkkm_17",q="_accountNumber_7hkkm_18",a={accountBox:C,companyName:S,accountNumber:q};function t({companyName:c,accountNumber:B,contactPerson:s,address:h,zipcode:N,city:A,chooseAccountBtn:f,onClickChooseAccount:x}){const k=()=>{x()};return r("div",{className:a.accountBox,children:[r("div",{children:[e("p",{className:a.companyName,children:e("b",{children:c})}),e("p",{className:a.accountNumber,children:B}),s&&e("p",{children:s}),r("p",{children:[h,", ",N,", ",A]})]}),e(b,{...f,type:"button",surface:"primary",onClick:k})]})}try{t.displayName="AccountBox",t.__docgenInfo={description:"",displayName:"AccountBox",props:{companyName:{defaultValue:null,description:"",name:"companyName",required:!0,type:{name:"string"}},accountNumber:{defaultValue:null,description:"",name:"accountNumber",required:!0,type:{name:"string"}},contactPerson:{defaultValue:null,description:"",name:"contactPerson",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!1,type:{name:"string"}},zipcode:{defaultValue:null,description:"",name:"zipcode",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!1,type:{name:"string"}},chooseAccountBtn:{defaultValue:null,description:"",name:"chooseAccountBtn",required:!0,type:{name:"IButton"}},onClickChooseAccount:{defaultValue:null,description:"",name:"onClickChooseAccount",required:!0,type:{name:"CallableFunction"}}}}}catch{}const T={title:"Design System/Molecules/AccountBox",component:t},_={render:({...c})=>e(t,{...c})},n={..._,args:{companyName:"Beer Fest",accountNumber:"Kundnr: 186922",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:y.args,onClickChooseAccount:g("clicked")}},o={..._,args:{companyName:"Beer Fest",accountNumber:"Kundnr: 186922",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:y.args,onClickChooseAccount:g("clicked")}};var u,i,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const V=["AccountBoxStory","AccountBoxStory_2"],G=Object.freeze(Object.defineProperty({__proto__:null,AccountBoxStory:n,AccountBoxStory_2:o,__namedExportsOrder:V,default:T},Symbol.toStringTag,{value:"Module"}));export{t as A,n as a,o as b,G as c};
