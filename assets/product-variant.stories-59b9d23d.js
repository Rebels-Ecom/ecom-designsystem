import{r as d}from"./index-6f814c40.js";import{P as o,g as u}from"./picture-helper-8d380938.js";import{a as m}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./divider-lines-9d28c35d.js";import"./radio-button-321ff782.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./picture-8799a0b4.js";const C={title:"Design System/Molecules/Product/ ProductVariant",component:o},p=s=>{const[n,c]=d.useState(!1);function i(){c(!0)}return m(o,{...s,onChange:i,checked:n})},t=p.bind({});t.storyName="Product Variant Story";t.args={productName:"Norrlands Guld Export 5,3",variantName:"50cl Returglas",variantId:"1105101",country:"Sverige",listPricePerUnitString:"22,68",salesUnit:"KLI",image:u("1105101","https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb")};var e,r,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [isSelected, setIsSelected] = useState(false);
  function handleOnChange() {
    setIsSelected(true);
  }
  return <ProductVariant {...args} onChange={handleOnChange} checked={isSelected} />;
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const I=["ProductVariantStory"];export{t as ProductVariantStory,I as __namedExportsOrder,C as default};
//# sourceMappingURL=product-variant.stories-59b9d23d.js.map
