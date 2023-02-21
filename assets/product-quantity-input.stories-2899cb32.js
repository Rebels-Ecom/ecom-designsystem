import{r as d}from"./index-6f814c40.js";import{P as s,c as r}from"./format-helper-9317824c.js";import{InputTextStory as y}from"./input-text.stories-01fbfde7.js";import{a as n,F as P}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./input-text-9b6e45e8.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";const b={title:"Design System/Molecules/ProductQuantityInput",component:s},g=e=>{const[u,c]=d.useState(r(23.34*e.itemNumberPerSalesUnit));function m(p){const l=parseInt(p.target.value)||1;c(r(23.34*e.itemNumberPerSalesUnit*l))}return n(P,{children:n("div",{style:{margin:"0 0 1rem 0",maxWidth:"616px"},children:n(s,{...e,onChange:m,totalPrice:u})})})},t=g.bind({});t.storyName="Form Group with Input Quantity";t.args={salesUnit:"KLI",itemNumberPerSalesUnit:15,quantityInputId:"1105101",inputProps:{...y,id:"input_1",sizeSmall:!0,defaultValue:"1",placeholder:"1"}};var a,i,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const price = 23.34;
  const [totalPrice, setTotalPrice] = useState(convertNumToStr(price * args.itemNumberPerSalesUnit));
  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 1;
    setTotalPrice(convertNumToStr(price * args.itemNumberPerSalesUnit * quantity));
  }
  return <>
      <div style={{
      margin: '0 0 1rem 0',
      maxWidth: '616px'
    }}>
        <ProductQuantityInput {...args} onChange={handleOnChangeQuantity} totalPrice={totalPrice} />
      </div>
    </>;
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const C=["InputQuantityStory"];export{t as InputQuantityStory,C as __namedExportsOrder,b as default};
//# sourceMappingURL=product-quantity-input.stories-2899cb32.js.map
