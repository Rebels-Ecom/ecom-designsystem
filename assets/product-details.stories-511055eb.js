import{j as e,r as G}from"./jsx-runtime-03333307.js";import{P as we}from"./product-quantity-input-b87eabed.js";import{B as Re}from"./button-adba1f05.js";import{c as _}from"./format-helper-a8a0bc10.js";import{P as Ke}from"./product-variant-list-36349a47.js";import{g as de}from"./picture-helper-e0ae1ee4.js";import{c as o}from"./index-09749a66.js";import{P as ue}from"./picture-41b0d9ed.js";import{T as He}from"./tag-84e76236.js";import{f as h}from"./defaultFallbackImage-b43581a6.js";import{C as M}from"./campaign-box-d70debcf.js";import{I as Q}from"./icon-button-dbb2b0a4.js";import{m as ze}from"./hooks-0265167d.js";import{L as ge}from"./loading-bars-8517f967.js";import{P as g}from"./placeholder-87f072f7.js";import{I as J}from"./icon-with-tooltip-a95bbda3.js";import{I as Ge}from"./icon-cf6ebd85.js";import{A as Me}from"./alert-box-067a4f3d.js";import{B as Qe}from"./button-with-tooltip-68577e6d.js";import{Button_Large_Icon_Right as p}from"./button.stories-fe3984a5.js";import{d as Je,a as Xe}from"./dummy-product-details-4e51bf9d.js";import{C as Ye}from"./content-wrapper-adfa8526.js";const Ze="_productDetails_10brh_1",er="_iconWrapper_10brh_10",rr="_content_10brh_25",ar="_leftContent_10brh_36",tr="_loadingBars_10brh_41",nr="_imageWrapper_10brh_50",ir="_variantsListOpen_10brh_59",sr="_cardPicture_10brh_65",lr="_cardImage_10brh_74",or="_rightContent_10brh_88",cr="_quantityInput_10brh_99",dr="_productVariants_10brh_104",ur="_heading_10brh_112",gr="_description_10brh_118",pr="_specsText_10brh_122",mr="_textPurple_10brh_130",Pr="_packagePerPalletText_10brh_136",yr="_btn_10brh_140",br="_variantBtn_10brh_147",fr="_tagsList_10brh_157",hr="_buttonsWrapper_10brh_183",Tr="_favoriteIconActive_10brh_190",r={productDetails:Ze,iconWrapper:er,content:rr,leftContent:ar,loadingBars:tr,imageWrapper:nr,variantsListOpen:ir,cardPicture:sr,cardImage:lr,rightContent:or,quantityInput:cr,productVariants:dr,heading:ur,description:gr,specsText:pr,textPurple:mr,packagePerPalletText:Pr,btn:yr,variantBtn:br,tagsList:fr,buttonsWrapper:hr,favoriteIconActive:Tr},pe=()=>e.jsxs("div",{className:o(r.productDetails),children:[e.jsxs("div",{className:o(r.content,r.leftContent),children:[e.jsx(ge,{loadingBars:[{color:"orange",name:"Beska",value:"1"},{color:"orange",name:"Sötma",value:"1"},{color:"orange",name:"Fyllighet",value:"1"}],className:r.loadingBars}),e.jsx("div",{className:r.imageWrapper,children:e.jsx(ue,{...de("loading",h),id:"loading",classNamePicture:r.cardPicture,classNameImg:`${r.cardImage}`,fallbackImageUrl:h})})]}),e.jsxs("div",{className:o(r.content,r.rightContent),children:[e.jsxs("div",{children:[e.jsx(g,{type:"heading"}),e.jsx(g,{type:"p_long"}),e.jsx(g,{type:"p_short"}),e.jsx(g,{type:"p_short"})]}),e.jsxs("div",{children:[e.jsx(g,{type:"heading"}),e.jsx(g,{type:"p_long"}),e.jsx(g,{type:"p_short"}),e.jsx(g,{type:"p_short"})]})]})]});pe.__docgenInfo={description:"",methods:[],displayName:"GhostProductDetails"};const C=({isRestrictedUser:n,partNo:a,productName:d,primaryImageUrl:l,packaging:Pe,priceStr:ye,price:be,packagePriceString:fe,packagePrice:S,salesUnit:A,itemNumberPerSalesUnit:he,productVariantList:Te,productDetail:i,addToCart:ke,productDescription:V,limitedProduct:B,showFavoriteIcon:Se,favoriteProductsIds:x,onFavoriteIconClick:j,showAddToPurchaseListIcon:xe,onSaveToPurchaseListClick:E,partNoLabel:ve,priceLabel:Ne,currencyLabel:v,unitLabel:F,addToCartLabel:Ue,quantityPerPackageLabel:Ie,aLabel:Le,packagePerPalletLabel1:_e,packagePerPalletLabel2:Ce,onPackageChange:O,sellerOnly:W,isAccessoryPotItem:D,activeCampaign:qe,outOfStock:Ae,alertBox:$,availableForOrder:Ve,loading:Be,tooltips:c})=>{var K,H,z;const{isMobile:m,isTablet:N}=ze(),[t,je]=G.useState({partNo:a,productName:d,productImage:de(a,l||h,m||N?"120":"240"),packaging:Pe,priceStr:ye,price:be,packagePriceString:fe,packagePrice:S,salesUnit:A,itemNumberPerSalesUnit:he,quantity:"1",totalPrice:S?_(S):"",productVariantList:Te,selectedVariantId:a,priceLabel:Ne,unitLabel:F,currencyLabel:v,activeCampaign:qe,outOfStock:Ae}),[Ee,U]=G.useState(!1),w=((K=i==null?void 0:i.visibleSpecs)==null?void 0:K.find(s=>s.name==="PackagePerPallet"))||((H=i==null?void 0:i.invisibleSpecs)==null?void 0:H.find(s=>s.name==="PackagePerPallet"));function Fe(s){const u=parseInt(s.target.value)||0;je({...t,quantity:u.toString(),totalPrice:_(t.packagePrice*u)})}function Oe(){U(!0)}function We(){U(!1)}function De(s){return s&&Array.isArray(s)&&s.length>0?s.map((u,L)=>u.value&&u.value!=="False"&&e.jsx("p",{className:o(r.specsText,"bodyS"),children:`${u.name} : ${u.value}`},L)):null}function $e(s){O&&O(s.variantId),U(!1)}function I(s){return!x||x.length===0?!1:x.includes(s)}const R=({tagsList:s=[]})=>Array.isArray(s)&&s.length>0?e.jsx("ul",{className:r.tagsList,children:s.map((u,L)=>e.jsx("li",{children:e.jsx(He,{...u})},L))}):null;return Be?e.jsx(pe,{}):i?e.jsxs("div",{className:o(r.productDetails),children:[(W||D)&&e.jsxs("div",{className:r.iconWrapper,children:[W&&e.jsx(e.Fragment,{children:c!=null&&c.sellerOnly?e.jsx(J,{content:c.sellerOnly,icon:{icon:"icon-eye"}}):e.jsx(Ge,{icon:"icon-eye",size:"large"})}),D&&e.jsx(e.Fragment,{children:c!=null&&c.accessoryPotItem?e.jsx(J,{content:c.accessoryPotItem,text:"S"}):e.jsx("span",{style:{fontSize:"0.875rem",width:"1.25rem",height:"1.25rem",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("b",{children:"S"})})})]}),m&&i.tags&&e.jsx(R,{tagsList:i.tags}),e.jsxs("div",{className:o(r.content,r.leftContent),children:[(i==null?void 0:i.loaderValues)&&i.loaderValues.length>0&&e.jsx(ge,{loadingBars:i.loaderValues,className:r.loadingBars}),e.jsx("div",{className:r.imageWrapper,children:e.jsx(ue,{...t.productImage,classNamePicture:r.cardPicture,classNameImg:`${r.cardImage}`,fallbackImageUrl:h})})]}),e.jsx("div",{className:o(r.content,r.rightContent),children:Ee?e.jsx(Ke,{className:o(r.contentWrapper,r.productVariants),variantsList:t.productVariantList,onVariantSelect:$e,selectedVariantId:t.selectedVariantId,sellerOnlyTooltipText:c==null?void 0:c.sellerOnly,onCloseVariants:We,isRestrictedUser:n}):e.jsxs(e.Fragment,{children:[!m&&i.tags&&e.jsx(R,{tagsList:i.tags}),e.jsxs("div",{children:[e.jsx("h3",{className:r.heading,children:t.productName}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:o(r.textPurple,r.specsText,"bodyS"),children:`${t.priceLabel}: ${t.packagePriceString} ${v}/${A.toLowerCase()}`}),e.jsx("p",{className:o(r.textGrey,r.specsText,"bodyS"),children:`${Ie} ${t.itemNumberPerSalesUnit} ${F} ${Le} ${t.priceStr} ${v}`}),e.jsx("p",{className:o(r.textGrey,r.specsText,"bodyS"),children:`${ve} ${t.partNo}`})]})]}),((z=t==null?void 0:t.activeCampaign)==null?void 0:z.title)&&e.jsx(M,{...t.activeCampaign,hideSelectBtn:!0}),B&&e.jsx(M,{...B,limited:!0,hideSelectBtn:!0}),$&&e.jsx(Me,{...$}),e.jsx("div",{className:r.specs,children:i.visibleSpecs&&De(i.visibleSpecs)}),V&&e.jsx("p",{className:r.description,children:V}),Array.isArray(t.productVariantList)&&e.jsx(Qe,{content:"Välj variant",type:"button",className:o(r.btn,r.variantBtn),surface:"secondary",iconRight:t.productVariantList.length<=1?void 0:{icon:"icon-layers"},rounded:!0,onClick:()=>Oe(),disabled:t.productVariantList.length<=1,name:"Select packaging",side:m||N?"top":"right",align:m||N?"end":"center",fullWidth:!0,children:t.packaging}),!n&&e.jsx(we,{className:r.quantityInput,salesUnit:t.salesUnit,itemNumberPerSalesUnit:t.itemNumberPerSalesUnit,totalPrice:t.totalPrice,quantity:t.quantity,quantityInputId:t.partNo,onChange:Fe}),e.jsxs("div",{className:r.buttonsWrapper,children:[e.jsx(Re,{className:r.btn,type:"button",surface:"primary",size:"large",onClick:()=>ke(t),disabled:t.quantity==="0"||t.outOfStock||!Ve,name:"Add to cart",fullWidth:!0,children:Ue}),xe&&E&&e.jsx(Q,{type:"button",icon:"icon-file-plus",className:r.purchaseListIcon,onClick:()=>E(t.partNo),size:"large",isTransparent:!0,noBorder:!0,noPadding:!0,name:"Add to purchase list"}),Se&&j&&e.jsx(Q,{type:"button",icon:I(a)?"icon-heart1":"icon-heart-o",className:o(r.favoriteIcon,I(a)?r.favoriteIconActive:""),onClick:()=>j(t.partNo,I(a)),size:"large",isTransparent:!0,noBorder:!0,noPadding:!0,name:"Add to favorite list"})]}),!n&&w&&e.jsx("p",{className:o(r.textGrey,"bodyS",r.packagePerPalletText),children:`${_e} ${w.value} ${Ce}`})]})})]}):null};C.__docgenInfo={description:"",methods:[],displayName:"ProductDetails",props:{partNo:{required:!0,tsType:{name:"string"},description:""},productName:{required:!0,tsType:{name:"string"},description:""},productUrl:{required:!1,tsType:{name:"string"},description:""},primaryImageUrl:{required:!0,tsType:{name:"string"},description:""},productDescription:{required:!1,tsType:{name:"string"},description:""},country:{required:!1,tsType:{name:"string"},description:""},packaging:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},priceStr:{required:!0,tsType:{name:"string"},description:""},pricePerUnit:{required:!0,tsType:{name:"number"},description:""},pricePerUnitString:{required:!0,tsType:{name:"string"},description:""},packagePrice:{required:!0,tsType:{name:"number"},description:""},packagePriceString:{required:!0,tsType:{name:"string"},description:""},salesUnit:{required:!0,tsType:{name:"string"},description:""},itemNumberPerSalesUnit:{required:!0,tsType:{name:"number"},description:""},quantity:{required:!0,tsType:{name:"string"},description:""},totalPrice:{required:!0,tsType:{name:"string"},description:""},productVariantList:{required:!0,tsType:{name:"Array",elements:[{name:"IProductVariant"}],raw:"Array<IProductVariant>"},description:""},outOfStock:{required:!1,tsType:{name:"boolean"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"ITag"}],raw:"Array<ITag>"},description:""},sellerOnly:{required:!1,tsType:{name:"boolean"},description:""},activeCampaign:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string;
  description?: string;
  subDescription?: string;
  color?: string;
  onClick?: () => void;
  loading?: boolean;
  btnLabel?: string;
  limited?: boolean;
  hideSelectBtn?: boolean;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"subDescription",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"btnLabel",value:{name:"string",required:!1}},{key:"limited",value:{name:"boolean",required:!1}},{key:"hideSelectBtn",value:{name:"boolean",required:!1}}]}},description:""},isLimitedProduct:{required:!1,tsType:{name:"boolean"},description:""},isAccessoryPotItem:{required:!1,tsType:{name:"boolean"},description:""},partNoLabel:{required:!1,tsType:{name:"string"},description:""},unitLabel:{required:!1,tsType:{name:"string"},description:""},currencyLabel:{required:!1,tsType:{name:"string"},description:""},priceLabel:{required:!1,tsType:{name:"string"},description:""},addToCartLabel:{required:!1,tsType:{name:"string"},description:""},quantityPerPackageLabel:{required:!1,tsType:{name:"string"},description:""},aLabel:{required:!1,tsType:{name:"string"},description:""},packagePerPalletLabel1:{required:!1,tsType:{name:"string"},description:""},packagePerPalletLabel2:{required:!1,tsType:{name:"string"},description:""},outOfStockLabel:{required:!1,tsType:{name:"string"},description:""},limitedLabel:{required:!1,tsType:{name:"string"},description:""},product:{required:!0,tsType:{name:"IProduct"},description:""},isRestrictedUser:{required:!0,tsType:{name:"boolean"},description:""},productDetail:{required:!0,tsType:{name:"IProductDetail"},description:""},changePackagingButton:{required:!0,tsType:{name:"IButton"},description:""},addToCart:{required:!0,tsType:{name:"CallableFunction"},description:""},className:{required:!0,tsType:{name:"string"},description:""},limitedProduct:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string;
  description?: string;
  subDescription?: string;
  color?: string;
  onClick?: () => void;
  loading?: boolean;
  btnLabel?: string;
  limited?: boolean;
  hideSelectBtn?: boolean;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"subDescription",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"btnLabel",value:{name:"string",required:!1}},{key:"limited",value:{name:"boolean",required:!1}},{key:"hideSelectBtn",value:{name:"boolean",required:!1}}]}},description:""},showFavoriteIcon:{required:!1,tsType:{name:"boolean"},description:""},favoriteProductsIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},onFavoriteIconClick:{required:!1,tsType:{name:"CallableFunction"},description:""},showAddToPurchaseListIcon:{required:!1,tsType:{name:"boolean"},description:""},onSaveToPurchaseListClick:{required:!1,tsType:{name:"CallableFunction"},description:""},onPackageChange:{required:!1,tsType:{name:"CallableFunction"},description:""},alertBox:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string
  buttonText?: string
  color?: TBoxColor
  className?: string
  onClick?: () => void
  loading?: boolean
  minHeight?: boolean
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"buttonText",value:{name:"string",required:!1}},{key:"color",value:{name:"union",raw:"'error' | 'warning' | 'information'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'information'"}],required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"minHeight",value:{name:"boolean",required:!1}}]}},description:""},availableForOrder:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},tooltips:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  addToFavorites?: string;
  removeFromFavorites?: string;
  addToPurchaseList?: string;
  changeVariant?: string;
  sellerOnly?: string;
  accessoryPotItem?: string;
}`,signature:{properties:[{key:"addToFavorites",value:{name:"string",required:!1}},{key:"removeFromFavorites",value:{name:"string",required:!1}},{key:"addToPurchaseList",value:{name:"string",required:!1}},{key:"changeVariant",value:{name:"string",required:!1}},{key:"sellerOnly",value:{name:"string",required:!1}},{key:"accessoryPotItem",value:{name:"string",required:!1}}]}},description:""}}};const kr={FirstVariantName:"50cl Returglas",PricePerUnit:24.627,PricePerUnitString:"24,63",Name:"Norrlands Guld Export 5,3",ProductUrl:"/Product/1105101",IsHit:!0,IsProduct:!0,PrimaryImageUrl:"https://spendrups.cdn.storm.io/95aad95e-e89d-4f61-ad23-63295ff180fe",PartNo:"1105101",LimitedProduct:!1,CampaignProduct:!1,ActiveCampaign:null,Tags:[],SellerOnly:!1,ShortTexts:["Sverige"],Variants:[{Name:"50cl Returglas",VariantFullName:"50cl Returglas",PartNo:"1105101",PrimaryImageUrl:"https://spendrups.cdn.storm.io/95aad95e-e89d-4f61-ad23-63295ff180fe",SalesUnit:"Kolli",UnitsPerBaseUnit:15,Tags:[],ShortTexts:["Sverige"],PricePerUnit:24.627,PricePerUnitString:"24,63",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"33cl Engångsglas",VariantFullName:"33cl Engångsglas",PartNo:"1105111",PrimaryImageUrl:"https://spendrups.cdn.storm.io/86b1a64a-aab6-49da-9393-73550434c5f7",SalesUnit:"Kolli",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],PricePerUnit:17.588,PricePerUnitString:"17,59",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"33cl PET",VariantFullName:"33cl PET",PartNo:"1152339",PrimaryImageUrl:"https://spendrups.cdn.storm.io/cd93d939-d5e4-4c36-a963-7b4682f04655",SalesUnit:"Kolli",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],PricePerUnit:17.598,PricePerUnitString:"17,60",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"50cl PET",VariantFullName:"50cl PET",PartNo:"1152340",PrimaryImageUrl:"https://spendrups.cdn.storm.io/edffc69f-094d-4b9c-ba0c-e83ef0d0782e",SalesUnit:"Kolli",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],PricePerUnit:25.666,PricePerUnitString:"25,67",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"33cl Burk",VariantFullName:"33cl Burk",PartNo:"1147921",PrimaryImageUrl:"https://spendrups.cdn.storm.io/b87afb1e-20b6-42a1-894d-5275c89e2d83",SalesUnit:"Kolli",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],PricePerUnit:17.38,PricePerUnitString:"17,38",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"50cl Burk",VariantFullName:"50cl Burk",PartNo:"1146323",PrimaryImageUrl:"https://spendrups.cdn.storm.io/052d5601-6e47-4fbe-9ac1-18bc2a5c64c0",SalesUnit:"Kolli",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],PricePerUnit:25.381,PricePerUnitString:"25,38",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"30l ",VariantFullName:"30l ",PartNo:"1105191",PrimaryImageUrl:"https://spendrups.cdn.storm.io/f40fd058-e6f7-490b-9f72-fd3d09030259",SalesUnit:"Kolli",UnitsPerBaseUnit:1,Tags:[],ShortTexts:["Sverige"],PricePerUnit:1554,PricePerUnitString:"1554",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null}],Desc:"",SalesUnit:"Kolli",UnitsPerBaseUnit:15,AccessoryPotItem:!1,ModelName:"50cl Returglas",CategoryName:"Öl",BrandName:"Spendrups"},Sr={FirstVariantName:"75cl Engångsglas",PricePerUnit:99.9,PricePerUnitString:"99,90",Name:"Valpolicella Valpantena Superiore DOC Nytt",ProductUrl:"/Product/2454124",IsHit:!0,IsProduct:!0,PrimaryImageUrl:"https://spendrups.cdn.storm.io/0d08251a-d6df-4e2d-bbb6-858999e1d460",PartNo:"2454124",LimitedProduct:!1,CampaignProduct:!1,ActiveCampaign:null,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],SellerOnly:!0,ShortTexts:["Argentina"],Variants:[{Name:"75cl Engångsglas",VariantFullName:"75cl Engångsglas",PartNo:"2454124",PrimaryImageUrl:"https://spendrups.cdn.storm.io/0d08251a-d6df-4e2d-bbb6-858999e1d460",SalesUnit:"Styck",UnitsPerBaseUnit:1,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],ShortTexts:["Argentina"],PricePerUnit:99.9,PricePerUnitString:"99,90",SellerOnly:!0,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"75cl Engångsglas",VariantFullName:"75cl Engångsglas",PartNo:"2454114",PrimaryImageUrl:"https://spendrups.cdn.storm.io/0d08251a-d6df-4e2d-bbb6-858999e1d460",SalesUnit:"Kolli",UnitsPerBaseUnit:6,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],ShortTexts:["Argentina"],PricePerUnit:99.9,PricePerUnitString:"99,90",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null}],Desc:"",SalesUnit:"Styck",UnitsPerBaseUnit:1,AccessoryPotItem:!1,ModelName:"75cl Engångsglas",CategoryName:"Vin",BrandName:"Spendrups"},xr={FirstVariantName:"75cl Engångsglas",PricePerUnit:99.9,PricePerUnitString:"99,90",Name:"Valpolicella Valpantena Superiore DOC Nytt",ProductUrl:"/Product/2454124",IsHit:!0,IsProduct:!0,PrimaryImageUrl:"https://spendrups.cdn.storm.io/0d08251a-d6df-4e2d-bbb6-858999e1d460",PartNo:"2454124",LimitedProduct:!1,CampaignProduct:!1,ActiveCampaign:null,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],SellerOnly:!0,ShortTexts:["Argentina"],Variants:[{Name:"75cl Engångsglas",VariantFullName:"75cl Engångsglas",PartNo:"2454124",PrimaryImageUrl:"https://spendrups.cdn.storm.io/0d08251a-d6df-4e2d-bbb6-858999e1d460",SalesUnit:"Styck",UnitsPerBaseUnit:1,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],ShortTexts:["Argentina"],PricePerUnit:99.9,PricePerUnitString:"99,90",SellerOnly:!0,AccessoryPotVariant:!1,ActiveCampaign:null}],Desc:"",SalesUnit:"Styck",UnitsPerBaseUnit:1,AccessoryPotItem:!1,ModelName:"75cl Engångsglas",CategoryName:"Vin",BrandName:"Spendrups"},vr={FirstVariantName:"75cl Engångsglas",PricePerUnit:99.9,PricePerUnitString:"99,90",Name:"Valpolicella Valpantena Superiore DOC Nytt",ProductUrl:"/Product/2454124",IsHit:!0,IsProduct:!0,PrimaryImageUrl:"https://spendrups.cdn.storm.io/3d7badb2-7b39-45d2-b64d-fbfb8544d5c8",PartNo:"2454124",LimitedProduct:!1,CampaignProduct:!1,ActiveCampaign:null,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],SellerOnly:!0,ShortTexts:["Argentina"],Variants:[{Name:"75cl Engångsglas",VariantFullName:"75cl Engångsglas",PartNo:"2454124",PrimaryImageUrl:"https://spendrups.cdn.storm.io/3d7badb2-7b39-45d2-b64d-fbfb8544d5c8",SalesUnit:"Styck",UnitsPerBaseUnit:1,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],ShortTexts:["Argentina"],PricePerUnit:99.9,PricePerUnitString:"99,90",SellerOnly:!0,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"75cl Engångsglas",VariantFullName:"75cl Engångsglas",PartNo:"2454114",PrimaryImageUrl:"https://spendrups.cdn.storm.io/3d7badb2-7b39-45d2-b64d-fbfb8544d5c8",SalesUnit:"Kolli",UnitsPerBaseUnit:6,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],ShortTexts:["Argentina"],PricePerUnit:99.9,PricePerUnitString:"99,90",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null}],Desc:"",SalesUnit:"Styck",UnitsPerBaseUnit:1,AccessoryPotItem:!1,ModelName:"75cl Engångsglas",CategoryName:"Vin",BrandName:"Spendrups"},Nr={title:"Design System/Organisms/ProductDetails",component:C},T={render:({...n})=>{function a(d){alert(`Adding to cart - ${d.productName} - ${d.packaging}. Quantity: ${d.quantity}, Total: ${d.totalPrice}`)}return e.jsx(Ye,{children:e.jsx(C,{...n,addToCart:a})})}};function Ur(n){return n.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"pill",color:a.Class}))}function X(n){return n.map(a=>({name:a.Item1,value:a.Item2}))}function Ir(n,a){const d=a==="Vin"?"purple":"orange";return n.map(l=>({name:l.Key,value:l.Value,color:d}))}function me(n){return{visibleSpecs:X(n.VisibleInfo.Specifications),visibleDescription:n.VisibleInfo.FullDescription,invisibleSpecs:X(n.InvisibleInfo.Specifications),invisibleDescription:n.InvisibleInfo.FullDescription,tags:Ur(n.Tags),loaderValues:Ir(n.ClockValues,n.CategoryString)}}function Lr(n,a){const d=a[0].VariantId;return a.map(l=>({productName:n,variantName:l.Name,variantId:l.PartNo,country:Array.isArray(l.ShortTexts)&&l.ShortTexts.length?l.ShortTexts[0]:"",priceStr:l.PricePerUnitString,price:l.PricePerUnit,salesUnit:l.SalesUnit,itemNumberPerSalesUnit:l.UnitsPerBaseUnit,imageUrl:l.PrimaryImageUrl,checked:l.PartNo===d,onChange:()=>{}}))}function k(n){const a=n.Variants[0];return{partNo:a.PartNo,productUrl:n.ProductUrl,productName:n.Name,primaryImageUrl:a.PrimaryImageUrl,country:Array.isArray(a.ShortTexts)&&a.ShortTexts.length?a.ShortTexts[0]:"",packaging:a.VariantFullName,priceStr:a.PricePerUnitString,price:a.PricePerUnit,salesUnit:a.SalesUnit,itemNumberPerSalesUnit:a.UnitsPerBaseUnit,quantity:"1",totalPrice:_(a.PricePerUnit*a.UnitsPerBaseUnit),productVariantList:Lr(n.Name,n.Variants),priceLabel:"Listpris"}}const _r=k(kr),Cr=k(Sr),qr=k(vr),Ar=k(xr),Vr=me(Je),q=me(Xe),P={...T,args:{..._r,productDetail:Vr,changePackagingButton:p.args,addToCart:p.args,campaign:{title:"Campaign",description:"Campaign description",subDescription:"Campaign sub description"},addToCartBtnLabel:"Lägg i varukorg",partNoLabel:"Artikelnummer:",quantityPerPackageLabel:"Antal/kolli",unitLabel:"styck",currencyLabel:"kr",aLabel:"a",packagePerPalletLabel1:"Det går",packagePerPalletLabel2:"kolli på en pall"}},y={...T,args:{...Cr,productDetail:q,changePackagingButton:p.args,addToCart:p.args,addToCartBtnLabel:"Lägg i varukorg",partNoLabel:"Artikelnummer:",quantityPerPackageLabel:"Antal/kolli",unitLabel:"styck",currencyLabel:"kr",aLabel:"a",packagePerPalletLabel1:"Det går",packagePerPalletLabel2:"kolli på en pall"}},b={...T,args:{...Ar,productDetail:q,changePackagingButton:p.args,addToCart:p.args,addToCartBtnLabel:"Lägg i varukorg",partNoLabel:"Artikelnummer:",quantityPerPackageLabel:"Antal/kolli",unitLabel:"styck",currencyLabel:"kr",aLabel:"a",packagePerPalletLabel1:"Det går",packagePerPalletLabel2:"kolli på en pall"}},f={...T,args:{...qr,productDetail:q,changePackagingButton:p.args,addToCart:p.args,addToCartBtnLabel:"Lägg i varukorg",partNoLabel:"Artikelnummer:",quantityPerPackageLabel:"Antal/kolli",unitLabel:"styck",currencyLabel:"kr",aLabel:"a",packagePerPalletLabel1:"Det går",packagePerPalletLabel2:"kolli på en pall"}};var Y,Z,ee;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...ProductDetailsStoryTemplate,
  args: {
    ...productArgs,
    productDetail: productDetailsArgs,
    changePackagingButton: Button_Large_Icon_Right.args,
    addToCart: Button_Large_Icon_Right.args,
    campaign: {
      title: 'Campaign',
      description: 'Campaign description',
      subDescription: 'Campaign sub description'
    },
    addToCartBtnLabel: 'Lägg i varukorg',
    partNoLabel: 'Artikelnummer:',
    quantityPerPackageLabel: 'Antal/kolli',
    unitLabel: 'styck',
    currencyLabel: 'kr',
    aLabel: 'a',
    packagePerPalletLabel1: 'Det går',
    packagePerPalletLabel2: 'kolli på en pall'
  }
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...ProductDetailsStoryTemplate,
  args: {
    ...productArgsWine,
    productDetail: productDetailsArgsWine,
    changePackagingButton: Button_Large_Icon_Right.args,
    addToCart: Button_Large_Icon_Right.args,
    addToCartBtnLabel: 'Lägg i varukorg',
    partNoLabel: 'Artikelnummer:',
    quantityPerPackageLabel: 'Antal/kolli',
    unitLabel: 'styck',
    currencyLabel: 'kr',
    aLabel: 'a',
    packagePerPalletLabel1: 'Det går',
    packagePerPalletLabel2: 'kolli på en pall'
  }
}`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,ie,se;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...ProductDetailsStoryTemplate,
  args: {
    ...productArgsWineNoVariants,
    productDetail: productDetailsArgsWine,
    changePackagingButton: Button_Large_Icon_Right.args,
    addToCart: Button_Large_Icon_Right.args,
    addToCartBtnLabel: 'Lägg i varukorg',
    partNoLabel: 'Artikelnummer:',
    quantityPerPackageLabel: 'Antal/kolli',
    unitLabel: 'styck',
    currencyLabel: 'kr',
    aLabel: 'a',
    packagePerPalletLabel1: 'Det går',
    packagePerPalletLabel2: 'kolli på en pall'
  }
}`,...(se=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,oe,ce;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...ProductDetailsStoryTemplate,
  args: {
    ...productArgsWine_VariantDefaultImg,
    productDetail: productDetailsArgsWine,
    changePackagingButton: Button_Large_Icon_Right.args,
    addToCart: Button_Large_Icon_Right.args,
    addToCartBtnLabel: 'Lägg i varukorg',
    partNoLabel: 'Artikelnummer:',
    quantityPerPackageLabel: 'Antal/kolli',
    unitLabel: 'styck',
    currencyLabel: 'kr',
    aLabel: 'a',
    packagePerPalletLabel1: 'Det går',
    packagePerPalletLabel2: 'kolli på en pall'
  }
}`,...(ce=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const Br=["ProductDetailsStory","ProductDetailsStory_Wine","ProductDetailsStory_Wine_NoVariants","ProductDetailsStory_Wine_VariantFallbackImg"],ta=Object.freeze(Object.defineProperty({__proto__:null,ProductDetailsStory:P,ProductDetailsStory_Wine:y,ProductDetailsStory_Wine_NoVariants:b,ProductDetailsStory_Wine_VariantFallbackImg:f,__namedExportsOrder:Br,default:Nr},Symbol.toStringTag,{value:"Module"}));export{P,C as a,ta as p};