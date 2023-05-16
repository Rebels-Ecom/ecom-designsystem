import{c}from"./index-74f03c09.js";import{a as e,j as n}from"./jsx-runtime-76c5c2e2.js";import{c as p,d as f,a as b}from"./cart-product.stories-00eff095.js";import{C as v}from"./cart-product-list-a1b9ae6a.js";import{H as y}from"./heading-43e58b60.js";import{T as o}from"./text-e81d2378.js";import{M as g}from"./message-banner-238d48ce.js";import{O as l}from"./order-confirmation-details-b40f81d7.js";import{G as _}from"./group-wrapper-a93e0b46.js";import{B as s}from"./button-c74bbcb5.js";const C="_orderConfirmation_1i816_1",D="_itemsList_1i816_16",k={orderConfirmation:C,itemsList:D};function i({children:r,className:t}){return e("div",{className:c(k.orderConfirmation,t||""),children:r})}try{i.displayName="OrderConfirmation",i.__docgenInfo={description:"",displayName:"OrderConfirmation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Design System/Organisms/OrderConfirmation",component:i},O={render:({...r})=>e("div",{style:{margin:"auto",position:"relative"},children:n(i,{...r,children:[e(y,{order:3,children:"Grattis"}),e(o,{children:"Din order är nu registrerad & kommer att förbereds för packning"}),n(g,{type:"success",children:["Ditt order nr:  ",r.orderNumber]}),n(o,{size:"small",children:[r.emailLabel,"   ",e("b",{children:r.email})]}),e(l,{detailItems:r.deliveryDetails,label:"Leveransuppgifter"}),e(l,{detailItems:r.pricingDetails}),e(l,{detailItems:r.paymentDetails,label:"Totalt"}),e(v,{children:r.itemsList.map(t=>e(b,{...t},Math.random()))}),n(_,{spacing:"xl",children:[e(s,{children:"Fortsätt handla",type:"button",surface:"primary"}),e(s,{children:"Se över mina ordrar",type:"button",surface:"secondary"})]})]})})},h=[p.args,f.args],a={...O,args:{orderNumber:"12345678",emailLabel:"Vi har skickat din orderbekräftelse till ",email:"jon.jonsson@beerfest@com",deliveryDetailsLabel:"Leveransuppgifter",totalAmountLabel:"Totalt",deliveryDetails:[{label:"Postnummer",value:"135 44"},{label:"Adress",value:"Granängsringen 3"},{label:"Ort",value:"Tyresö"}],pricingDetails:[{label:"Summa produkter",value:"420,70"},{label:"Avdrag",value:"10%"},{label:"Frakt",value:"Gratis"}],paymentDetails:[{label:"Inklusive moms",value:"378,70 kr",isTotal:!0},{label:"Betalning",value:"Faktura"}],deliveryDateLabel:"Ditt aktuella leveransdatum",deliveryDate:"2022-06-03",itemsList:h}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const T=["OrderConfirmationStory"],M=Object.freeze(Object.defineProperty({__proto__:null,OrderConfirmationStory:a,__namedExportsOrder:T,default:L},Symbol.toStringTag,{value:"Module"}));export{a as O,i as a,M as o};
//# sourceMappingURL=order-confirmation.stories-ab933064.js.map
