import{c}from"./index-74f03c09.js";import{a as e,j as n}from"./jsx-runtime-76c5c2e2.js";import{C as p,a as f,b}from"./cart-product.stories-e6bf67cf.js";import{C as v}from"./cart-product-list-a1b9ae6a.js";import{H as y}from"./heading-e5a679a5.js";import{T as l}from"./text-3e056ff6.js";import{M as g}from"./message-banner-f33df239.js";import{O as o}from"./order-confirmation-details-d5ce0235.js";import{D}from"./delivery-date-info-e395a2ef.js";import{G as _}from"./group-wrapper-53e2b69f.js";import{B as s}from"./button-bc254079.js";const C="_orderConfirmation_1i816_1",k="_itemsList_1i816_16",L={orderConfirmation:C,itemsList:k};function i({children:r,className:t}){return e("div",{className:c(L.orderConfirmation,t||""),children:r})}try{i.displayName="OrderConfirmation",i.__docgenInfo={description:"",displayName:"OrderConfirmation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Design System/Organisms/OrderConfirmation",component:i},h={render:({...r})=>e("div",{style:{margin:"auto",position:"relative"},children:n(i,{...r,children:[e(y,{order:3,children:"Grattis"}),e(l,{children:"Din order är nu registrerad & kommer att förbereds för packning"}),n(g,{type:"success",children:["Ditt order nr:  ",r.orderNumber]}),n(l,{size:"small",children:[r.emailLabel,"   ",e("b",{children:r.email})]}),e(o,{detailItems:r.deliveryDetails,label:"Leveransuppgifter"}),e(o,{detailItems:r.pricingDetails}),e(o,{detailItems:r.paymentDetails,label:"Totalt"}),e(l,{children:"Ditt aktuella leveransdatum"}),e(D,{dateLabel:"2023-06-15"}),e(v,{children:r.itemsList.map(t=>e(b,{...t},Math.random()))}),n(_,{spacing:"xl",children:[e(s,{children:"Fortsätt handla",type:"button",surface:"primary"}),e(s,{children:"Se över mina ordrar",type:"button",surface:"secondary"})]})]})})},T=[p.args,f.args],a={...h,args:{orderNumber:"12345678",emailLabel:"Vi har skickat din orderbekräftelse till ",email:"jon.jonsson@beerfest@com",deliveryDetailsLabel:"Leveransuppgifter",totalAmountLabel:"Totalt",deliveryDetails:[{label:"Postnummer",value:"135 44"},{label:"Adress",value:"Granängsringen 3"},{label:"Ort",value:"Tyresö"}],pricingDetails:[{label:"Summa produkter",value:"420,70"},{label:"Avdrag",value:"10%"},{label:"Frakt",value:"Gratis"}],paymentDetails:[{label:"Inklusive moms",value:"378,70 kr",isTotal:!0},{label:"Betalning",value:"Faktura"}],deliveryDateLabel:"Ditt aktuella leveransdatum",deliveryDate:"2022-06-03",itemsList:T}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const S=["OrderConfirmationStory"],z=Object.freeze(Object.defineProperty({__proto__:null,OrderConfirmationStory:a,__namedExportsOrder:S,default:O},Symbol.toStringTag,{value:"Module"}));export{a as O,i as a,z as o};
//# sourceMappingURL=order-confirmation.stories-204bd56d.js.map