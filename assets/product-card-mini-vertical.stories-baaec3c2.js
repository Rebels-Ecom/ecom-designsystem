import{r as s,j as d}from"./jsx-runtime-03333307.js";import{p as y,a as h}from"./dummy-product-213464fa.js";import{P as m}from"./product-card-mini-vertical-d35aa5fd.js";import"./picture-helper-dd6bd3b8.js";import"./index-09749a66.js";import"./defaultFallbackImage-b43581a6.js";import"./format-helper-580ef2bc.js";import"./generic-helper-ddbede2e.js";import"./debounce-27b61785.js";import"./isSymbol-9d21be03.js";import"./tag-8d2e34a8.js";import"./picture-6b702374.js";import"./icon-a32914e5.js";import"./useOnClickOutside-9d2c35bb.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./carousel-c1935f6a.js";import"./placeholder-3cf73146.js";import"./icon-button-aa68e962.js";import"./ui-link-974ac70a.js";import"./button-856a03f5.js";import"./loader-5c06d14e.js";import"./button.module-867d0823.js";import"./add-to-cart-button-488bfed1.js";import"./index-61679f6b.js";const z={title:"Design System/Molecules/ProductCardMiniVertical",parameters:{controls:{exclude:["product","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:m},f={render:({...o})=>{const[n,l]=s.useState([]);s.useState(Array(4).fill(0));const C=r=>{l(e=>{const t=[...e],i=t.findIndex(g=>g.partNo===r.partNo);return i!==-1?t[i].quantity+=r.quantity||0:t.push(r),t})};return d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",backgroundColor:"lightgray",width:"100%",padding:"0.5rem"},children:Array.from(Array(1)).map((r,e)=>d.jsx(m,{...o,product:{...o.product},variantsInCart:n==null?void 0:n.map(t=>({variantId:t.partNo,quantity:t.quantity})),addToCart:t=>C(t)},`${o.product.partNo}-${e}`))})}},I={...y(h),totalPrice:""},a={...f,args:{product:{...I,quantity:"0",priceStr:"10"},loading:!1,linkComponent:"a",hideCartButton:!1,showPackaging:!0,addToCart:()=>{},addToCartBtnLabel:"Add to cart",handlePackageChange:()=>{},onCloseVariants:()=>{},onVariantsButtonClick:()=>{},productImage:{id:"",sources:[],src:""},showFavoriteIcon:!0,onFavoriteIconClick:()=>{},showAddToPurchaseListIcon:!0,productQuantityDisabled:!1}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...ProductCardMiniVerticalStory,
  args: ({
    product: {
      ...productBeerArgs,
      quantity: '0',
      priceStr: '10'
    },
    loading: false,
    linkComponent: 'a',
    hideCartButton: false,
    showPackaging: true,
    addToCart: () => {},
    addToCartBtnLabel: 'Add to cart',
    handlePackageChange: () => {},
    onCloseVariants: () => {},
    onVariantsButtonClick: () => {},
    productImage: {
      id: '',
      sources: [],
      src: ''
    },
    showFavoriteIcon: true,
    onFavoriteIconClick: () => {},
    showAddToPurchaseListIcon: true,
    productQuantityDisabled: false
  } as IProductCardMiniVertical)
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const G=["Product_Card_Mini_Vertical"];export{a as Product_Card_Mini_Vertical,G as __namedExportsOrder,z as default};
