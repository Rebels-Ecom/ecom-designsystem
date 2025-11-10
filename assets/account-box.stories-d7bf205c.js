import{c as j}from"./index-09749a66.js";import{j as e}from"./jsx-runtime-03333307.js";import{B as C}from"./button-856a03f5.js";import{Button_Large_Icon_Right as B}from"./button.stories-38c8a8aa.js";import{a as h}from"./chunk-MZXVCX43-aa6c8130.js";const S="_accountBox_11l7a_1",k="_companyName_11l7a_17",q="_accountNumber_11l7a_18",L="_addressLabel_11l7a_22",F="_addressTitle_11l7a_27",I="_address_11l7a_22",n={accountBox:S,companyName:k,accountNumber:q,addressLabel:L,addressTitle:F,address:I};function d({companyName:t,accountNumber:b,contactPerson:u,addressLabel:m,addressTitle:a,address:i,zipcode:c,city:r,chooseAccountBtn:A,onClickChooseAccount:T}){const f=()=>{T()};return e.jsxs("div",{className:n.accountBox,children:[e.jsxs("div",{children:[e.jsx("p",{className:n.companyName,children:e.jsx("b",{children:t})}),e.jsx("p",{className:n.accountNumber,children:b}),u&&e.jsx("p",{children:u}),m&&e.jsx("p",{className:n.addressLabel,children:e.jsx("b",{children:m})}),a&&e.jsx("p",{className:n.addressTitle,children:a}),e.jsxs("p",{className:j({[n.address]:!!a}),children:[i&&(c||r?`${i},`:i)," ",c&&(r?`${c},`:c)," ",r&&r]})]}),e.jsx(C,{...A,type:"button",surface:"primary",onClick:f})]})}d.__docgenInfo={description:"",methods:[],displayName:"AccountBox",props:{companyName:{required:!0,tsType:{name:"string"},description:""},accountNumber:{required:!0,tsType:{name:"string"},description:""},contactPerson:{required:!1,tsType:{name:"string"},description:""},addressLabel:{required:!1,tsType:{name:"string"},description:""},addressTitle:{required:!1,tsType:{name:"string"},description:""},address:{required:!1,tsType:{name:"string"},description:""},zipcode:{required:!1,tsType:{name:"string"},description:""},city:{required:!1,tsType:{name:"string"},description:""},chooseAccountBtn:{required:!0,tsType:{name:"IButton"},description:""},onClickChooseAccount:{required:!0,tsType:{name:"CallableFunction"},description:""}}};const G={title:"Design System/Molecules/AccountBox",component:d},N={render:({...t})=>e.jsx(d,{...t})},o={...N,args:{companyName:"Beer Fest",accountNumber:"Kundnr: 186922",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:B.args,onClickChooseAccount:h("clicked")}},s={...N,args:{companyName:"Beer Fest",accountNumber:"Kundnr: 186922",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:B.args,onClickChooseAccount:h("clicked")}};var l,p,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var _,g,x;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const J=["AccountBoxStory","AccountBoxStory_2"],P=Object.freeze(Object.defineProperty({__proto__:null,AccountBoxStory:o,AccountBoxStory_2:s,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{d as A,o as a,s as b,P as c};
