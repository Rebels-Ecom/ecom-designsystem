import{P as $e}from"./product-quantity-input-a65dfb53.js";import{f as D}from"./defaultFallbackImage-b43581a6.js";import{c as o}from"./index-09749a66.js";import{T as Ve}from"./tags-list-dcc30c34.js";import{D as Oe}from"./debounce-input-f51e0718.js";import{j as e,r as fe}from"./jsx-runtime-03333307.js";import{F as z}from"./flex-container-7aff6506.js";import{I as M}from"./icon-with-tooltip-a95bbda3.js";import{I as B}from"./icon-cf6ebd85.js";import{P as Q}from"./picture-d7d6bf69.js";import{u as We}from"./useOnClickOutside-9d2c35bb.js";import{m as Se}from"./motion-9380e2c6.js";import{C as Ae,a as He}from"./carousel-906f834b.js";import{m as Le}from"./hooks-0265167d.js";import{I as q}from"./icon-button-4b635669.js";import{P as j}from"./placeholder-7c72702c.js";import{A as Re}from"./alert-box-29cffed7.js";import{B as Ue}from"./button-8e3f9b10.js";import{C as E}from"./component-with-tooltip-74101d4d.js";const Ee="_productCardHorizontal_fw5fo_1",De="_border_fw5fo_17",Me="_campaign_fw5fo_23",Qe="_campaignBox_fw5fo_30",Ge="_iconLink_fw5fo_45",Je="_limitedProduct_fw5fo_53",Ke="_limitedBox_fw5fo_60",Xe="_withExtraPadding_fw5fo_74",Ye="_outOfStockProduct_fw5fo_85",Ze="_outOfStockBox_fw5fo_92",er="_picture_fw5fo_113",rr="_smallPicture_fw5fo_124",ar="_image_fw5fo_131",nr="_smallImage_fw5fo_144",tr="_content_fw5fo_151",ir="_mainLink_fw5fo_161",sr="_heading_fw5fo_170",or="_cardInfoWrapper_fw5fo_178",cr="_alertBox_fw5fo_190",lr="_packaging_fw5fo_197",dr="_priceText_fw5fo_198",ur="_partNo_fw5fo_199",mr="_buttonsWrapper_fw5fo_222",pr="_productCardBtn_fw5fo_237",fr="_cartBtnIcon_fw5fo_241",gr="_favoriteIconActive_fw5fo_250",yr="_imageWrapperPlaceholder_fw5fo_255",_r="_placeholderContent_fw5fo_262",xr="_standardIcon_fw5fo_266",r={productCardHorizontal:Ee,border:De,campaign:Me,campaignBox:Qe,iconLink:Ge,limitedProduct:Je,limitedBox:Ke,withExtraPadding:Xe,outOfStockProduct:Ye,outOfStockBox:Ze,picture:er,smallPicture:rr,image:ar,smallImage:nr,content:tr,mainLink:ir,heading:sr,cardInfoWrapper:or,alertBox:cr,packaging:lr,priceText:dr,partNo:ur,buttonsWrapper:mr,productCardBtn:pr,cartBtnIcon:fr,favoriteIconActive:gr,imageWrapperPlaceholder:yr,placeholderContent:_r,standardIcon:xr},hr="_horizontalVariants_1o2ln_1",br="_closeVariantsIcon_1o2ln_10",Tr="_carousel_1o2ln_16",qr="_carouselTrack_1o2ln_19",jr="_list_1o2ln_24",vr="_listItem_1o2ln_33",Ir="_variantPicture_1o2ln_40",F={horizontalVariants:hr,closeVariantsIcon:br,carousel:Tr,carouselTrack:qr,list:jr,listItem:vr,variantPicture:Ir},Pr="_horizontalVariant_1xjbf_1",Nr="_selected_1xjbf_21",wr="_topRow_1xjbf_25",kr="_mainContent_1xjbf_30",Cr="_imageWrapper_1xjbf_43",Fr="_picture_1xjbf_52",zr="_image_1xjbf_43",Br="_contentWrapper_1xjbf_63",$r="_heading_1xjbf_73",Vr="_partNo_1xjbf_74",Or="_price_1xjbf_75",Wr="_selectedIcon_1xjbf_90",s={horizontalVariant:Pr,selected:Nr,topRow:wr,mainContent:kr,imageWrapper:Cr,picture:Fr,image:zr,contentWrapper:Br,heading:$r,partNo:Vr,price:Or,selectedIcon:Wr},ge=({checked:i,onClick:n,variantId:d,sellerOnly:f,sellerOnlyTooltipText:g,image:u,isRestrictedUser:y,variantName:h,partNoLabel:m,priceStr:c,currencyLabel:p,unitLabel:T})=>e.jsxs("button",{className:o(s.horizontalVariant,{[s.selected]:i}),onClick:()=>n==null?void 0:n(d),children:[e.jsx(z,{stretch:!0,justifyContent:"flex-end",alignItems:"center",className:s.topRow,children:f&&e.jsx(e.Fragment,{children:g?e.jsx(M,{content:g,icon:{icon:"icon-eye"}}):e.jsx(B,{icon:"icon-eye",size:"large"})})}),e.jsxs("div",{className:s.mainContent,children:[e.jsxs("div",{className:s.imageWrapper,children:[e.jsx(Q,{...u,classNamePicture:s.picture,classNameImg:`${s.image}`,fallbackImageUrl:D})," "]}),e.jsxs("div",{className:`${s.contentWrapper}`,children:[e.jsx("p",{className:s.heading,children:h}),!y&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:s.partNo,children:`${m} ${d}`}),e.jsx("p",{className:s.price,children:`${c} ${p}/${T}`})]})]})]}),i&&e.jsx(B,{icon:"icon-check",className:s.selectedIcon})]});ge.__docgenInfo={description:"",methods:[],displayName:"HorizontalVariant",props:{productName:{required:!0,tsType:{name:"string"},description:""},variantName:{required:!0,tsType:{name:"string"},description:""},variantId:{required:!0,tsType:{name:"string"},description:""},country:{required:!0,tsType:{name:"string"},description:""},priceStr:{required:!0,tsType:{name:"string"},description:""},salesUnit:{required:!0,tsType:{name:"string"},description:""},sellerOnly:{required:!0,tsType:{name:"boolean"},description:""},image:{required:!0,tsType:{name:"IPicture"},description:""},onChange:{required:!0,tsType:{name:"CallableFunction"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(partNo: string) => void",signature:{arguments:[{type:{name:"string"},name:"partNo"}],return:{name:"void"}}},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},partNoLabel:{required:!0,tsType:{name:"string"},description:""},unitLabel:{required:!0,tsType:{name:"string"},description:""},currencyLabel:{required:!0,tsType:{name:"string"},description:""},sellerOnlyTooltipText:{required:!1,tsType:{name:"string"},description:""},isRestrictedUser:{required:!1,tsType:{name:"boolean"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:""}}};const ye=({variantsList:i,onCloseVariants:n,open:d,onVariantSelect:f,selectedVariantId:g})=>{const u=fe.useRef(null),[y,h]=fe.useState(g);function m(c){h(c);const p=i.find(T=>T.variantId===c);f(p,i)}return We({ref:u,onClose:n}),e.jsx(Se.div,{ref:u,className:o(F.horizontalVariants,{[F.open]:d}),initial:{y:"100%"},animate:d?{y:"0%"}:{y:"100%"},exit:{y:"100%"},transition:{type:"tween",duration:.3,ease:[.4,0,.2,1]},children:e.jsx(Ae,{className:F.carousel,noGrid:!0,trackClassName:F.carouselTrack,splideProps:{options:{gap:"0.25rem"}},zeroOffset:!0,breakpoints:{md:{perPage:2,perMove:2},lg:{perPage:2,perMove:2}},children:i==null?void 0:i.map(c=>e.jsx(He,{children:e.jsx(ge,{...c,checked:c.variantId===y,onClick:m})},c.variantId))})})};ye.__docgenInfo={description:"",methods:[],displayName:"HorizontalVariants",props:{className:{required:!1,tsType:{name:"string"},description:""},variantsList:{required:!0,tsType:{name:"Array",elements:[{name:"IProductVariant"}],raw:"Array<IProductVariant>"},description:""},onVariantSelect:{required:!0,tsType:{name:"CallableFunction"},description:""},selectedVariantId:{required:!0,tsType:{name:"string"},description:""},sellerOnlyTooltipText:{required:!1,tsType:{name:"string"},description:""},onCloseVariants:{required:!0,tsType:{name:"CallableFunction"},description:""},isRestrictedUser:{required:!1,tsType:{name:"boolean"},description:""},absolutePositioned:{required:!1,tsType:{name:"boolean"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};const Sr=({product:i,loading:n=!1,addToCart:d,addToCartBtnLabel:f,hideCartButton:g,hidePrice:u,onClickRemoveProduct:y,hideRemoveButton:h,onChangeQuantity:m,productQuantityDisabled:c,linkComponent:p,className:T="",defaultQuantity:G,buttonLoading:$,disabled:J,displaySmallImage:v=!1,showAddToPurchaseListIcon:K,onSaveToPurchaseListClick:V,maxQuantity:X,isRestrictedUser:O,alertBox:Y,onClick:Z,debounceQuantityVal:ee,productArea:re,onVariantsButtonClick:W,variantsOpen:_e,onCloseVariants:xe,selectedVariantId:ae,handlePackageChange:he,productImage:ne,showPackaging:be=!1,favoriteProductsIds:S,showFavoriteIcon:te,onFavoriteIconClick:A,tooltips:a,isAddingToFavorites:Te})=>{var pe;const{activeCampaign:t,partNo:l,partNoLabel:qe,productName:ie,productUrl:b,tags:H,isLimitedProduct:L,country:R,priceStr:se,totalPrice:I,quantity:P,outOfStock:N,salesUnit:oe,itemNumberPerSalesUnit:ce,priceLabel:je,currencyLabel:le,unitLabel:de,outOfStockLabel:w,limitedLabel:k,sellerOnly:ve,isAccessoryPotItem:Ie,pricePerUnit:U,aLabel:Pe,productVariantList:_,packaging:ue}=i,{isMobile:me}=Le();function Ne(x){y&&y(x)}function we(x){const Be=parseInt(x.target.value)||0;m&&m(Be)}function ke(x){m&&m(parseInt(x))}function Ce(x){return!S||S.length===0?!1:S.includes(x)}const Fe={"--campaign-color":(t==null?void 0:t.color)??"#FFF","--limited-product-color":L&&k?"#F08A00":"#FFF","--out-of-stock-product-color":N&&w?"#e4b6c3":"#FFF"},ze=e.jsxs(z,{alignItems:"center",gap:.5,minHeight:2.25,stretch:!0,children:[ve&&e.jsx(e.Fragment,{children:a!=null&&a.sellerOnly?e.jsx(M,{content:a.sellerOnly,icon:{icon:"icon-eye"}}):e.jsx(B,{icon:"icon-eye",size:"large"})}),Ie&&e.jsx(e.Fragment,{children:a!=null&&a.accessoryPotItem?e.jsx(M,{content:a.accessoryPotItem,text:"S"}):e.jsx("span",{className:r.standardIcon,children:"S"})}),Array.isArray(H)&&H.length?e.jsx(Ve,{tagsList:H}):null,!h&&y&&e.jsx("div",{className:r.iconLink,children:e.jsx(q,{className:r.iconBtn,type:"button",icon:"icon-x-circle",onClick:()=>Ne(l),isTransparent:!0,noBorder:!0,noPadding:!0,size:"large",name:"Remove product"})})]}),C=Ce(l);return e.jsxs("div",{className:o(r.productCardHorizontal,T,{[r.campaign]:(t==null?void 0:t.title)&&!n,[r.limitedProduct]:!t&&L&&k&&!n,[r.outOfStockProduct]:!t&&N&&w&&!n}),style:Fe,children:[!N&&(t==null?void 0:t.title)&&!n&&e.jsx("div",{className:r.campaignBox,children:t.title}),!t&&L&&k&&!n&&e.jsx("div",{className:o(r.limitedBox,{[r.withExtraPadding]:!h}),children:k}),N&&w&&!n&&e.jsx("div",{className:r.outOfStockBox,children:w}),n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o(r.imageWrapper,r.imageWrapperPlaceholder),children:e.jsx(j,{type:"image"})}),e.jsxs("div",{className:r.placeholderContent,children:[e.jsx(j,{type:"heading"}),e.jsx(j,{type:"p_long"}),e.jsx(j,{type:"p_short"}),e.jsx(j,{type:"p_short"})]})]}):e.jsxs(e.Fragment,{children:[b&&p?e.jsx(p,{to:b,href:b,className:r.imageWrapper,onClick:Z,children:e.jsx(Q,{...ne,classNamePicture:o(r.picture,v&&r.smallPicture),classNameImg:o(r.image,v&&r.smallImage),fallbackImageUrl:D})}):e.jsx("div",{className:r.imageWrapper,children:e.jsx(Q,{...ne,classNamePicture:o(r.picture,v&&r.smallPicture),classNameImg:o(r.image,v&&r.smallImage),fallbackImageUrl:D})}),e.jsxs(z,{flexDirection:"column",className:r.content,gap:.25,children:[ze,b&&p?e.jsx(p,{to:b,href:b,className:r.mainLink,onClick:Z,children:e.jsx("h5",{className:r.heading,children:ie})}):e.jsx("h5",{className:r.heading,children:ie}),e.jsxs("div",{className:r.cardInfoWrapper,children:[e.jsxs("div",{children:[be&&ue&&e.jsx("p",{className:o(r.packaging,"bodyS"),children:ue}),!u&&!O&&e.jsx("p",{className:o(r.priceText,"bodyS"),children:`${je}: ${se?`${se} ${le??""}/${de?de.toLowerCase():""}`:""}`}),(R!==""||l!=="")&&!O&&e.jsx("p",{className:o(r.partNo,"bodyS"),children:`${l?`${qe} ${l}`:""} ${R&&`- ${R}`}`}),!O&&e.jsx(e.Fragment,{children:ee?e.jsx(Oe,{debounceVal:ee,debouncedEvent:ke,salesUnit:oe,itemNumberPerSalesUnit:ce,totalPrice:I,quantity:G??P,quantityInputId:`${l}-${re}`,maxQuantity:X,disabled:c,hidePrice:u,pricePerUnitText:`${Pe} ${(pe=U==null?void 0:U.toFixed(2))==null?void 0:pe.replace(".",",")} ${le}`}):e.jsx($e,{className:r.quantityInput,salesUnit:oe,itemNumberPerSalesUnit:ce,totalPrice:I,quantity:G??P,quantityInputId:`${l}-${re}`,onChange:we,disabled:c,maxQuantity:X,hidePrice:u})})]}),Y&&e.jsx(Re,{className:r.alertBox,...Y}),e.jsxs("div",{className:r.buttonsWrapper,children:[me&&!g&&e.jsxs(Ue,{type:"button",surface:"primary",className:n?"":r.productCardBtn,size:"x-small",onClick:()=>d(i),disabled:$||n||J||P<="0",loading:$,name:f,children:[e.jsx(B,{icon:"icon-shopping-cart",className:r.cartBtnIcon}),e.jsx("span",{className:r.cartBtnText,children:f})]}),(!!(_!=null&&_.length)||K&&V||te&&A)&&e.jsxs(z,{gap:.5,children:[(_==null?void 0:_.length)>1&&e.jsx(E,{content:a==null?void 0:a.changeVariant,element:e.jsx(q,{type:"button",icon:"icon-layers",onClick:()=>W==null?void 0:W(),noBorder:!0,isTransparent:!0,size:"medium",noPadding:!0,name:"Open variants list"})}),K&&V&&e.jsx(E,{content:a==null?void 0:a.addToPurchaseList,element:e.jsx(q,{type:"button",icon:"icon-file-plus",onClick:()=>V(l,I),noBorder:!0,isTransparent:!0,size:"medium",noPadding:!0,name:"Add to purchase list"})}),te&&A&&e.jsx(E,{content:C?a==null?void 0:a.removeFromFavorites:a==null?void 0:a.addToFavorites,element:e.jsx(q,{type:"button",icon:C?"icon-heart1":"icon-heart-o",onClick:()=>A(l,C,I),noBorder:!0,isTransparent:!0,name:"Add to favorite list",className:C?r.favoriteIconActive:void 0,size:"medium",noPadding:!0,animate:Te?"loading":"default"})})]}),!me&&!g&&e.jsx(q,{type:"button",icon:"icon-shopping-cart",onClick:()=>d(i),surface:"primary",noBorder:!0,disabled:$||n||J||P<="0",name:f,size:"medium"})]})]})]})]}),ae&&e.jsx(ye,{open:_e,variantsList:_,onVariantSelect:he,onCloseVariants:xe,selectedVariantId:ae,sellerOnlyTooltipText:a==null?void 0:a.sellerOnly})]})};Sr.__docgenInfo={description:"",methods:[],displayName:"ProductCardHorizontal",props:{productImage:{required:!0,tsType:{name:"IPicture"},description:""},cardDisplay:{required:!0,tsType:{name:"literal",value:"'horizontal'"},description:""},isRestrictedUser:{required:!1,tsType:{name:"boolean"},description:""},product:{required:!0,tsType:{name:"IProduct"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLoading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},hidePrice:{required:!1,tsType:{name:"boolean"},description:""},addToCart:{required:!0,tsType:{name:"CallableFunction"},description:""},addToCartBtnLabel:{required:!0,tsType:{name:"string"},description:""},hideCartButton:{required:!1,tsType:{name:"boolean"},description:""},onChangeQuantity:{required:!1,tsType:{name:"CallableFunction"},description:""},productQuantityDisabled:{required:!1,tsType:{name:"boolean"},description:""},defaultQuantity:{required:!1,tsType:{name:"string"},description:`Sets a custom default quantity to start from
@default 0`},onRemoveProduct:{required:!1,tsType:{name:"CallableFunction"},description:""},hideRemoveButton:{required:!1,tsType:{name:"boolean"},description:""},showFavoriteIcon:{required:!1,tsType:{name:"boolean"},description:""},favoriteProductsIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},onFavoriteIconClick:{required:!1,tsType:{name:"CallableFunction"},description:""},isAddingToFavorites:{required:!1,tsType:{name:"boolean"},description:""},showAddToPurchaseListIcon:{required:!1,tsType:{name:"boolean"},description:""},onSaveToPurchaseListClick:{required:!1,tsType:{name:"CallableFunction"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},displaySmallImage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},linkComponent:{required:!1,tsType:{name:"any"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxQuantity:{required:!1,tsType:{name:"number"},description:""},alertBox:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string
  buttonText?: string
  color?: TBoxColor
  className?: string
  onClick?: () => void
  loading?: boolean
  minHeight?: boolean
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"buttonText",value:{name:"string",required:!1}},{key:"color",value:{name:"union",raw:"'error' | 'warning' | 'information'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'information'"}],required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"minHeight",value:{name:"boolean",required:!1}}]}},description:""},onClick:{required:!1,tsType:{name:"CallableFunction"},description:""},debounceQuantityVal:{required:!1,tsType:{name:"number"},description:""},productArea:{required:!1,tsType:{name:"union",raw:"'category' | 'recommended' | 'details' | 'cart' | 'inspiration'",elements:[{name:"literal",value:"'category'"},{name:"literal",value:"'recommended'"},{name:"literal",value:"'details'"},{name:"literal",value:"'cart'"},{name:"literal",value:"'inspiration'"}]},description:""},imagePriority:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  fetchPriority: 'auto' | 'high' | 'low',
  loading: 'eager' | 'lazy',
}`,signature:{properties:[{key:"fetchPriority",value:{name:"union",raw:"'auto' | 'high' | 'low'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'high'"},{name:"literal",value:"'low'"}],required:!0}},{key:"loading",value:{name:"union",raw:"'eager' | 'lazy'",elements:[{name:"literal",value:"'eager'"},{name:"literal",value:"'lazy'"}],required:!0}}]}},description:""},variantsOpen:{required:!1,tsType:{name:"boolean"},description:""},handlePackageChange:{required:!0,tsType:{name:"CallableFunction"},description:""},selectedVariantId:{required:!1,tsType:{name:"string"},description:""},onVariantsButtonClick:{required:!0,tsType:{name:"CallableFunction"},description:""},onVariantChange:{required:!1,tsType:{name:"CallableFunction"},description:""},onCloseVariants:{required:!0,tsType:{name:"CallableFunction"},description:""},tooltips:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  addToFavorites?: string;
  removeFromFavorites?: string;
  addToPurchaseList?: string;
  changeVariant?: string;
  sellerOnly?: string;
  accessoryPotItem?: string;
}`,signature:{properties:[{key:"addToFavorites",value:{name:"string",required:!1}},{key:"removeFromFavorites",value:{name:"string",required:!1}},{key:"addToPurchaseList",value:{name:"string",required:!1}},{key:"changeVariant",value:{name:"string",required:!1}},{key:"sellerOnly",value:{name:"string",required:!1}},{key:"accessoryPotItem",value:{name:"string",required:!1}}]}},description:""},onClickRemoveProduct:{required:!1,tsType:{name:"CallableFunction"},description:""},removingProduct:{required:!1,tsType:{name:"boolean"},description:""},showPackaging:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{Sr as P};