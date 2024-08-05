import{c as u}from"./index-09749a66.js";import{j as e}from"./jsx-runtime-03333307.js";import{c,d as p,b}from"./cart-product.stories-dae1bd81.js";import{C as f}from"./cart-product-list-f323bfda.js";import{H as v}from"./heading-ba18f9a9.js";import{T as s}from"./text-002528fe.js";import{M as y}from"./message-banner-8fd5f2bc.js";import{O as n}from"./order-confirmation-details-b1336e9b.js";import{G as g}from"./group-wrapper-5bc35e6d.js";import{B as o}from"./button-e2072245.js";const j="_orderConfirmation_1i816_1",x="_itemsList_1i816_16",D={orderConfirmation:j,itemsList:x};function i({children:r,className:a}){return e.jsx("div",{className:u(D.orderConfirmation,a||""),children:r})}i.__docgenInfo={description:"",methods:[],displayName:"OrderConfirmation",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Design System/Organisms/OrderConfirmation",component:i},C={render:({...r})=>e.jsx("div",{style:{margin:"auto",position:"relative"},children:e.jsxs(i,{...r,children:[e.jsx(v,{order:3,children:"Grattis"}),e.jsx(s,{children:"Din order är nu registrerad & kommer att förbereds för packning"}),e.jsxs(y,{type:"success",children:["Ditt order nr:  ",r.orderNumber]}),e.jsxs(s,{size:"small",children:[r.emailLabel,"   ",e.jsx("b",{children:r.email})]}),e.jsx(n,{detailItems:r.deliveryDetails,label:"Leveransuppgifter"}),e.jsx(n,{detailItems:r.pricingDetails}),e.jsx(n,{detailItems:r.paymentDetails,label:"Totalt"}),e.jsx(f,{children:r.itemsList.map(a=>e.jsx(b,{...a},Math.random()))}),e.jsxs(g,{spacing:"xl",children:[e.jsx(o,{children:"Fortsätt handla",type:"button",surface:"primary"}),e.jsx(o,{children:"Se över mina ordrar",type:"button",surface:"secondary"})]})]})})},L=[c.args,p.args],t={...C,args:{orderNumber:"12345678",emailLabel:"Vi har skickat din orderbekräftelse till ",email:"jon.jonsson@beerfest@com",deliveryDetailsLabel:"Leveransuppgifter",totalAmountLabel:"Totalt",deliveryDetails:[{label:"Postnummer",value:"135 44"},{label:"Adress",value:"Granängsringen 3"},{label:"Ort",value:"Tyresö"}],pricingDetails:[{label:"Summa produkter",value:"420,70"},{label:"Avdrag",value:"10%"},{label:"Frakt",value:"Gratis"}],paymentDetails:[{label:"Inklusive moms",value:"378,70 kr",isTotal:!0},{label:"Betalning",value:"Faktura"}],deliveryDateLabel:"Ditt aktuella leveransdatum",deliveryDate:"2022-06-03",itemsList:L}};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...OrderConfirmationStoryTemplate,
  args: {
    orderNumber: '12345678',
    emailLabel: 'Vi har skickat din orderbekräftelse till ',
    email: 'jon.jonsson@beerfest@com',
    deliveryDetailsLabel: 'Leveransuppgifter',
    totalAmountLabel: 'Totalt',
    deliveryDetails: [{
      label: 'Postnummer',
      value: '135 44'
    }, {
      label: 'Adress',
      value: 'Granängsringen 3'
    }, {
      label: 'Ort',
      value: 'Tyresö'
    }],
    pricingDetails: [{
      label: 'Summa produkter',
      value: '420,70'
    }, {
      label: 'Avdrag',
      value: '10%'
    }, {
      label: 'Frakt',
      value: 'Gratis'
    }],
    paymentDetails: [{
      label: 'Inklusive moms',
      value: '378,70 kr',
      isTotal: true
    }, {
      label: 'Betalning',
      value: 'Faktura'
    }],
    deliveryDateLabel: 'Ditt aktuella leveransdatum',
    deliveryDate: '2022-06-03',
    itemsList: cartProducts
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const _=["OrderConfirmationStory"],F=Object.freeze(Object.defineProperty({__proto__:null,OrderConfirmationStory:t,__namedExportsOrder:_,default:k},Symbol.toStringTag,{value:"Module"}));export{t as O,i as a,F as o};
