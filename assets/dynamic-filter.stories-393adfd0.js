import{r as i,j as v}from"./jsx-runtime-03333307.js";import{D as oa}from"./drawer-sidebar-b96c10f4.js";import{c as le}from"./index-09749a66.js";import{_ as ce,a as ca,b as $n,c as tn}from"./defineProperty-dca1f18b.js";import{_ as rn}from"./extends-4c19d496.js";import{r as da}from"./index-821951ec.js";import{u as ma}from"./generic-helper-ddbede2e.js";import{I as Cn}from"./input-field-0be9721f.js";import{B as Mn}from"./button-1de8d46b.js";import{B as fa,A as va}from"./below-c0fccb92.js";import{E as en}from"./expandable-wrapper-968690e0.js";import{I as He}from"./icon-a32914e5.js";import{F as Bn}from"./flex-container-7aff6506.js";import{m as nn}from"./motion-9380e2c6.js";import{C as ga}from"./checkbox-aacef711.js";import{A as ha}from"./index-61679f6b.js";const ya="_dynamicFilter_1fs4n_1",ba="_filterItem_1fs4n_5",_a="_filterName_1fs4n_18",xa="_filterItemIcon_1fs4n_23",pa="_expandableWrapper_1fs4n_28",Ea="_showMoreButton_1fs4n_36",Sa="_showMoreLabel_1fs4n_48",ka="_checkboxItem_1fs4n_53",Ca="_inActive_1fs4n_64",Ma="_checkbox_1fs4n_53",Na="_label_1fs4n_70",Ta="_count_1fs4n_85",Oa="_radioItem_1fs4n_93",Ra="_radio_1fs4n_93",Ia="_filtersWrapper_1fs4n_123",wa="_selectedFilters_1fs4n_136",Fa="_filterButton_1fs4n_147",Aa="_selectedFilter_1fs4n_136",La="_active_1fs4n_183",ja="_clear_1fs4n_200",Da="_stickyResult_1fs4n_208",Va="_removeAllBtn_1fs4n_237",P={dynamicFilter:ya,filterItem:ba,filterName:_a,filterItemIcon:xa,expandableWrapper:pa,showMoreButton:Ea,showMoreLabel:Sa,checkboxItem:ka,inActive:Ca,checkbox:Ma,label:Na,count:Ta,radioItem:Oa,radio:Ra,filtersWrapper:Ia,selectedFilters:wa,filterButton:Fa,selectedFilter:Aa,active:La,clear:ja,stickyResult:Da,removeAllBtn:Va};function Nn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,a)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Nn(Object(t),!0).forEach(function(a){ce(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Nn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Pa(e){if(Array.isArray(e))return ca(e)}function qa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ha(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e){return Pa(e)||qa(e)||$n(e)||Ha()}function $a(e){if(Array.isArray(e))return e}function Ba(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,l,s,m,c=[],E=!0,x=!1;try{if(s=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;E=!1}else for(;!(E=(a=s.call(t)).done)&&(c.push(a.value),c.length!==n);E=!0);}catch(k){x=!0,l=k}finally{try{if(!E&&t.return!=null&&(m=t.return(),Object(m)!==m))return}finally{if(x)throw l}}return c}}function Ua(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(e,n){return $a(e)||Ba(e,n)||$n(e,n)||Ua()}function $e(e){var n=i.useRef();n.current=e;var t=i.useCallback(function(){for(var a,l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=n.current)===null||a===void 0?void 0:a.call.apply(a,[n].concat(s))},[]);return t}function Wa(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Tn=Wa()?i.useLayoutEffect:i.useEffect,Un=function(n,t){var a=i.useRef(!0);Tn(function(){return n(a.current)},t),Tn(function(){return a.current=!1,function(){a.current=!0}},[])},On=function(n,t){Un(function(a){if(!a)return n()},t)};function Rn(e){var n=i.useRef(!1),t=i.useState(e),a=ne(t,2),l=a[0],s=a[1];i.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function m(c,E){E&&n.current||s(c)}return[l,m]}function an(e){return e!==void 0}function Ka(e,n){var t=n||{},a=t.defaultValue,l=t.value,s=t.onChange,m=t.postState,c=Rn(function(){return an(l)?l:an(a)?typeof a=="function"?a():a:typeof e=="function"?e():e}),E=ne(c,2),x=E[0],k=E[1],M=l!==void 0?l:x,T=m?m(M):M,_=$e(s),h=Rn([M]),b=ne(h,2),o=b[0],y=b[1];On(function(){var p=o[0];x!==p&&_(x,p)},[o]),On(function(){an(l)||k(l)},[l]);var r=$e(function(p,I){k(p,I),y([M],I)});return[T,r]}var ln={},Ga=function(n){};function Ya(e,n){}function Xa(e,n){}function Qa(){ln={}}function Wn(e,n,t){!n&&!ln[t]&&(e(!1,t),ln[t]=!0)}function Be(e,n){Wn(Ya,e,n)}function Za(e,n){Wn(Xa,e,n)}Be.preMessage=Ga;Be.resetWarned=Qa;Be.noteOnce=Za;function za(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=new Set;function l(s,m){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,E=a.has(s);if(Be(!E,"Warning: There may be circular references"),E)return!1;if(s===m)return!0;if(t&&c>1)return!1;a.add(s);var x=c+1;if(Array.isArray(s)){if(!Array.isArray(m)||s.length!==m.length)return!1;for(var k=0;k<s.length;k++)if(!l(s[k],m[k],x))return!1;return!0}if(s&&m&&tn(s)==="object"&&tn(m)==="object"){var M=Object.keys(s);return M.length!==Object.keys(m).length?!1:M.every(function(T){return l(s[T],m[T],x)})}return!1}return l(e,n)}function Ja(e,n){if(e==null)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;t[a]=e[a]}return t}function Kn(e,n){if(e==null)return{};var t,a,l=Ja(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function sn(e,n,t){return(e-n)/(t-n)}function un(e,n,t,a){var l=sn(n,t,a),s={};switch(e){case"rtl":s.right="".concat(l*100,"%"),s.transform="translateX(50%)";break;case"btt":s.bottom="".concat(l*100,"%"),s.transform="translateY(50%)";break;case"ttb":s.top="".concat(l*100,"%"),s.transform="translateY(-50%)";break;default:s.left="".concat(l*100,"%"),s.transform="translateX(-50%)";break}return s}function Ie(e,n){return Array.isArray(e)?e[n]:e}var f={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var t=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||t>=f.F1&&t<=f.F12)return!1;switch(t){case f.ALT:case f.CAPS_LOCK:case f.CONTEXT_MENU:case f.CTRL:case f.DOWN:case f.END:case f.ESC:case f.HOME:case f.INSERT:case f.LEFT:case f.MAC_FF_META:case f.META:case f.NUMLOCK:case f.NUM_CENTER:case f.PAGE_DOWN:case f.PAGE_UP:case f.PAUSE:case f.PRINT_SCREEN:case f.RIGHT:case f.SHIFT:case f.UP:case f.WIN_KEY:case f.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=f.ZERO&&n<=f.NINE||n>=f.NUM_ZERO&&n<=f.NUM_MULTIPLY||n>=f.A&&n<=f.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case f.SPACE:case f.QUESTION_MARK:case f.NUM_PLUS:case f.NUM_MINUS:case f.NUM_PERIOD:case f.NUM_DIVISION:case f.SEMICOLON:case f.DASH:case f.EQUALS:case f.COMMA:case f.PERIOD:case f.SLASH:case f.APOSTROPHE:case f.SINGLE_QUOTE:case f.OPEN_SQUARE_BRACKET:case f.BACKSLASH:case f.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},we=i.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),et=i.createContext({}),nt=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],In=i.forwardRef(function(e,n){var t=e.prefixCls,a=e.value,l=e.valueIndex,s=e.onStartMove,m=e.onDelete,c=e.style,E=e.render,x=e.dragging,k=e.draggingDelete,M=e.onOffsetChange,T=e.onChangeComplete,_=e.onFocus,h=e.onMouseEnter,b=Kn(e,nt),o=i.useContext(we),y=o.min,r=o.max,p=o.direction,I=o.disabled,F=o.keyboard,U=o.range,Q=o.tabIndex,z=o.ariaLabelForHandle,j=o.ariaLabelledByForHandle,g=o.ariaRequired,d=o.ariaValueTextFormatterForHandle,S=o.styles,q=o.classNames,w="".concat(t,"-handle"),X=function(L){I||s(L,l)},u=function(L){_==null||_(L,l)},N=function(L){h(L,l)},O=function(L){if(!I&&F){var R=null;switch(L.which||L.keyCode){case f.LEFT:R=p==="ltr"||p==="btt"?-1:1;break;case f.RIGHT:R=p==="ltr"||p==="btt"?1:-1;break;case f.UP:R=p!=="ttb"?1:-1;break;case f.DOWN:R=p!=="ttb"?-1:1;break;case f.HOME:R="min";break;case f.END:R="max";break;case f.PAGE_UP:R=2;break;case f.PAGE_DOWN:R=-2;break;case f.BACKSPACE:case f.DELETE:m(l);break}R!==null&&(L.preventDefault(),M(R,l))}},D=function(L){switch(L.which||L.keyCode){case f.LEFT:case f.RIGHT:case f.UP:case f.DOWN:case f.HOME:case f.END:case f.PAGE_UP:case f.PAGE_DOWN:T==null||T();break}},A=un(p,a,y,r),$={};if(l!==null){var Z;$={tabIndex:I?null:Ie(Q,l),role:"slider","aria-valuemin":y,"aria-valuemax":r,"aria-valuenow":a,"aria-disabled":I,"aria-label":Ie(z,l),"aria-labelledby":Ie(j,l),"aria-required":Ie(g,l),"aria-valuetext":(Z=Ie(d,l))===null||Z===void 0?void 0:Z(a),"aria-orientation":p==="ltr"||p==="rtl"?"horizontal":"vertical",onMouseDown:X,onTouchStart:X,onFocus:u,onMouseEnter:N,onKeyDown:O,onKeyUp:D}}var B=i.createElement("div",rn({ref:n,className:le(w,ce(ce(ce({},"".concat(w,"-").concat(l+1),l!==null&&U),"".concat(w,"-dragging"),x),"".concat(w,"-dragging-delete"),k),q.handle),style:te(te(te({},A),c),S.handle)},$,b));return E&&(B=E(B,{index:l,prefixCls:t,value:a,dragging:x,draggingDelete:k})),B}),at=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],tt=i.forwardRef(function(e,n){var t=e.prefixCls,a=e.style,l=e.onStartMove,s=e.onOffsetChange,m=e.values,c=e.handleRender,E=e.activeHandleRender,x=e.draggingIndex,k=e.draggingDelete,M=e.onFocus,T=Kn(e,at),_=i.useRef({}),h=i.useState(!1),b=ne(h,2),o=b[0],y=b[1],r=i.useState(-1),p=ne(r,2),I=p[0],F=p[1],U=function(d){F(d),y(!0)},Q=function(d,S){U(S),M==null||M(d)},z=function(d,S){U(S)};i.useImperativeHandle(n,function(){return{focus:function(d){var S;(S=_.current[d])===null||S===void 0||S.focus()},hideHelp:function(){da.flushSync(function(){y(!1)})}}});var j=te({prefixCls:t,onStartMove:l,onOffsetChange:s,render:c,onFocus:Q,onMouseEnter:z},T);return i.createElement(i.Fragment,null,m.map(function(g,d){var S=x===d;return i.createElement(In,rn({ref:function(w){w?_.current[d]=w:delete _.current[d]},dragging:S,draggingDelete:S&&k,style:Ie(a,d),key:d,value:g,valueIndex:d},j))}),E&&o&&i.createElement(In,rn({key:"a11y"},j,{value:m[I],valueIndex:null,dragging:x!==-1,draggingDelete:k,render:E,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),rt=function(n){var t=n.prefixCls,a=n.style,l=n.children,s=n.value,m=n.onClick,c=i.useContext(we),E=c.min,x=c.max,k=c.direction,M=c.includedStart,T=c.includedEnd,_=c.included,h="".concat(t,"-text"),b=un(k,s,E,x);return i.createElement("span",{className:le(h,ce({},"".concat(h,"-active"),_&&M<=s&&s<=T)),style:te(te({},b),a),onMouseDown:function(y){y.stopPropagation()},onClick:function(){m(s)}},l)},it=function(n){var t=n.prefixCls,a=n.marks,l=n.onClick,s="".concat(t,"-mark");return a.length?i.createElement("div",{className:s},a.map(function(m){var c=m.value,E=m.style,x=m.label;return i.createElement(rt,{key:c,prefixCls:s,style:E,value:c,onClick:l},x)})):null},lt=function(n){var t=n.prefixCls,a=n.value,l=n.style,s=n.activeStyle,m=i.useContext(we),c=m.min,E=m.max,x=m.direction,k=m.included,M=m.includedStart,T=m.includedEnd,_="".concat(t,"-dot"),h=k&&M<=a&&a<=T,b=te(te({},un(x,a,c,E)),typeof l=="function"?l(a):l);return h&&(b=te(te({},b),typeof s=="function"?s(a):s)),i.createElement("span",{className:le(_,ce({},"".concat(_,"-active"),h)),style:b})},st=function(n){var t=n.prefixCls,a=n.marks,l=n.dots,s=n.style,m=n.activeStyle,c=i.useContext(we),E=c.min,x=c.max,k=c.step,M=i.useMemo(function(){var T=new Set;if(a.forEach(function(h){T.add(h.value)}),l&&k!==null)for(var _=E;_<=x;)T.add(_),_+=k;return Array.from(T)},[E,x,k,l,a]);return i.createElement("div",{className:"".concat(t,"-step")},M.map(function(T){return i.createElement(lt,{prefixCls:t,key:T,value:T,style:s,activeStyle:m})}))},wn=function(n){var t=n.prefixCls,a=n.style,l=n.start,s=n.end,m=n.index,c=n.onStartMove,E=n.replaceCls,x=i.useContext(we),k=x.direction,M=x.min,T=x.max,_=x.disabled,h=x.range,b=x.classNames,o="".concat(t,"-track"),y=sn(l,M,T),r=sn(s,M,T),p=function(Q){!_&&c&&c(Q,-1)},I={};switch(k){case"rtl":I.right="".concat(y*100,"%"),I.width="".concat(r*100-y*100,"%");break;case"btt":I.bottom="".concat(y*100,"%"),I.height="".concat(r*100-y*100,"%");break;case"ttb":I.top="".concat(y*100,"%"),I.height="".concat(r*100-y*100,"%");break;default:I.left="".concat(y*100,"%"),I.width="".concat(r*100-y*100,"%")}var F=E||le(o,ce(ce({},"".concat(o,"-").concat(m+1),m!==null&&h),"".concat(t,"-track-draggable"),c),b.track);return i.createElement("div",{className:F,style:te(te({},I),a),onMouseDown:p,onTouchStart:p})},ut=function(n){var t=n.prefixCls,a=n.style,l=n.values,s=n.startPoint,m=n.onStartMove,c=i.useContext(we),E=c.included,x=c.range,k=c.min,M=c.styles,T=c.classNames,_=i.useMemo(function(){if(!x){if(l.length===0)return[];var b=s??k,o=l[0];return[{start:Math.min(b,o),end:Math.max(b,o)}]}for(var y=[],r=0;r<l.length-1;r+=1)y.push({start:l[r],end:l[r+1]});return y},[l,x,s,k]);if(!E)return null;var h=_!=null&&_.length&&(T.tracks||M.tracks)?i.createElement(wn,{index:null,prefixCls:t,start:_[0].start,end:_[_.length-1].end,replaceCls:le(T.tracks,"".concat(t,"-tracks")),style:M.tracks}):null;return i.createElement(i.Fragment,null,h,_.map(function(b,o){var y=b.start,r=b.end;return i.createElement(wn,{index:o,prefixCls:t,style:te(te({},Ie(a,o)),M.track),start:y,end:r,key:o,onStartMove:m})}))},ot=130;function Fn(e){var n="targetTouches"in e?e.targetTouches[0]:e;return{pageX:n.pageX,pageY:n.pageY}}function ct(e,n,t,a,l,s,m,c,E,x,k){var M=i.useState(null),T=ne(M,2),_=T[0],h=T[1],b=i.useState(-1),o=ne(b,2),y=o[0],r=o[1],p=i.useState(!1),I=ne(p,2),F=I[0],U=I[1],Q=i.useState(t),z=ne(Q,2),j=z[0],g=z[1],d=i.useState(t),S=ne(d,2),q=S[0],w=S[1],X=i.useRef(null),u=i.useRef(null),N=i.useRef(null),O=i.useContext(et),D=O.onDragStart,A=O.onDragChange;Un(function(){y===-1&&g(t)},[t,y]),i.useEffect(function(){return function(){document.removeEventListener("mousemove",X.current),document.removeEventListener("mouseup",u.current),N.current&&(N.current.removeEventListener("touchmove",X.current),N.current.removeEventListener("touchend",u.current))}},[]);var $=function(R,G,ee){G!==void 0&&h(G),g(R);var ae=R;ee&&(ae=R.filter(function(W,ie){return ie!==y})),m(ae),A&&A({rawValues:R,deleteIndex:ee?y:-1,draggingIndex:y,draggingValue:G})},Z=$e(function(L,R,G){if(L===-1){var ee=q[0],ae=q[q.length-1],W=a-ee,ie=l-ae,de=R*(l-a);de=Math.max(de,W),de=Math.min(de,ie);var Fe=s(ee+de);de=Fe-ee;var ve=q.map(function(ye){return ye+de});$(ve)}else{var ge=(l-a)*R,he=pe(j);he[L]=q[L];var Ee=E(he,ge,L,"dist");$(Ee.values,Ee.value,G)}}),B=function(R,G,ee){R.stopPropagation();var ae=ee||t,W=ae[G];r(G),h(W),w(ae),g(ae),U(!1);var ie=Fn(R),de=ie.pageX,Fe=ie.pageY,ve=!1;D&&D({rawValues:ae,draggingIndex:G,draggingValue:W});var ge=function(ye){ye.preventDefault();var se=Fn(ye),Ae=se.pageX,Le=se.pageY,je=Ae-de,fe=Le-Fe,me=e.current.getBoundingClientRect(),Te=me.width,De=me.height,Se,ke;switch(n){case"btt":Se=-fe/De,ke=je;break;case"ttb":Se=fe/De,ke=je;break;case"rtl":Se=-je/Te,ke=fe;break;default:Se=je/Te,ke=fe}ve=x?Math.abs(ke)>ot&&k<j.length:!1,U(ve),Z(G,Se,ve)},he=function Ee(ye){ye.preventDefault(),document.removeEventListener("mouseup",Ee),document.removeEventListener("mousemove",ge),N.current&&(N.current.removeEventListener("touchmove",X.current),N.current.removeEventListener("touchend",u.current)),X.current=null,u.current=null,N.current=null,c(ve),r(-1),U(!1)};document.addEventListener("mouseup",he),document.addEventListener("mousemove",ge),R.currentTarget.addEventListener("touchend",he),R.currentTarget.addEventListener("touchmove",ge),X.current=ge,u.current=he,N.current=R.currentTarget},K=i.useMemo(function(){var L=pe(t).sort(function(W,ie){return W-ie}),R=pe(j).sort(function(W,ie){return W-ie}),G={};R.forEach(function(W){G[W]=(G[W]||0)+1}),L.forEach(function(W){G[W]=(G[W]||0)-1});var ee=x?1:0,ae=Object.values(G).reduce(function(W,ie){return W+Math.abs(ie)},0);return ae<=ee?j:t},[t,j,x]);return[y,_,F,K,B]}function dt(e,n,t,a,l,s){var m=i.useCallback(function(_){return Math.max(e,Math.min(n,_))},[e,n]),c=i.useCallback(function(_){if(t!==null){var h=e+Math.round((m(_)-e)/t)*t,b=function(p){return(String(p).split(".")[1]||"").length},o=Math.max(b(t),b(n),b(e)),y=Number(h.toFixed(o));return e<=y&&y<=n?y:null}return null},[t,e,n,m]),E=i.useCallback(function(_){var h=m(_),b=a.map(function(r){return r.value});t!==null&&b.push(c(_)),b.push(e,n);var o=b[0],y=n-e;return b.forEach(function(r){var p=Math.abs(h-r);p<=y&&(o=r,y=p)}),o},[e,n,a,t,m,c]),x=function _(h,b,o){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof b=="number"){var r,p=h[o],I=p+b,F=[];a.forEach(function(g){F.push(g.value)}),F.push(e,n),F.push(c(p));var U=b>0?1:-1;y==="unit"?F.push(c(p+U*t)):F.push(c(I)),F=F.filter(function(g){return g!==null}).filter(function(g){return b<0?g<=p:g>=p}),y==="unit"&&(F=F.filter(function(g){return g!==p}));var Q=y==="unit"?p:I;r=F[0];var z=Math.abs(r-Q);if(F.forEach(function(g){var d=Math.abs(g-Q);d<z&&(r=g,z=d)}),r===void 0)return b<0?e:n;if(y==="dist")return r;if(Math.abs(b)>1){var j=pe(h);return j[o]=r,_(j,b-U,o,y)}return r}else{if(b==="min")return e;if(b==="max")return n}},k=function(h,b,o){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",r=h[o],p=x(h,b,o,y);return{value:p,changed:p!==r}},M=function(h){return s===null&&h===0||typeof s=="number"&&h<s},T=function(h,b,o){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",r=h.map(E),p=r[o],I=x(r,b,o,y);if(r[o]=I,l===!1){var F=s||0;o>0&&r[o-1]!==p&&(r[o]=Math.max(r[o],r[o-1]+F)),o<r.length-1&&r[o+1]!==p&&(r[o]=Math.min(r[o],r[o+1]-F))}else if(typeof s=="number"||s===null){for(var U=o+1;U<r.length;U+=1)for(var Q=!0;M(r[U]-r[U-1])&&Q;){var z=k(r,1,U);r[U]=z.value,Q=z.changed}for(var j=o;j>0;j-=1)for(var g=!0;M(r[j]-r[j-1])&&g;){var d=k(r,-1,j-1);r[j-1]=d.value,g=d.changed}for(var S=r.length-1;S>0;S-=1)for(var q=!0;M(r[S]-r[S-1])&&q;){var w=k(r,-1,S-1);r[S-1]=w.value,q=w.changed}for(var X=0;X<r.length-1;X+=1)for(var u=!0;M(r[X+1]-r[X])&&u;){var N=k(r,1,X+1);r[X+1]=N.value,u=N.changed}}return{value:r[o],values:r}};return[E,T]}function mt(e){return i.useMemo(function(){if(e===!0||!e)return[!!e,!1,!1,0];var n=e.editable,t=e.draggableTrack,a=e.minCount,l=e.maxCount;return[!0,n,!n&&t,a||0,l]},[e])}var ft=i.forwardRef(function(e,n){var t=e.prefixCls,a=t===void 0?"rc-slider":t,l=e.className,s=e.style,m=e.classNames,c=e.styles,E=e.id,x=e.disabled,k=x===void 0?!1:x,M=e.keyboard,T=M===void 0?!0:M,_=e.autoFocus,h=e.onFocus,b=e.onBlur,o=e.min,y=o===void 0?0:o,r=e.max,p=r===void 0?100:r,I=e.step,F=I===void 0?1:I,U=e.value,Q=e.defaultValue,z=e.range,j=e.count,g=e.onChange,d=e.onBeforeChange,S=e.onAfterChange,q=e.onChangeComplete,w=e.allowCross,X=w===void 0?!0:w,u=e.pushable,N=u===void 0?!1:u,O=e.reverse,D=e.vertical,A=e.included,$=A===void 0?!0:A,Z=e.startPoint,B=e.trackStyle,K=e.handleStyle,L=e.railStyle,R=e.dotStyle,G=e.activeDotStyle,ee=e.marks,ae=e.dots,W=e.handleRender,ie=e.activeHandleRender,de=e.track,Fe=e.tabIndex,ve=Fe===void 0?0:Fe,ge=e.ariaLabelForHandle,he=e.ariaLabelledByForHandle,Ee=e.ariaRequired,ye=e.ariaValueTextFormatterForHandle,se=i.useRef(null),Ae=i.useRef(null),Le=i.useMemo(function(){return D?O?"ttb":"btt":O?"rtl":"ltr"},[O,D]),je=mt(z),fe=ne(je,5),me=fe[0],Te=fe[1],De=fe[2],Se=fe[3],ke=fe[4],ue=i.useMemo(function(){return isFinite(y)?y:0},[y]),Ve=i.useMemo(function(){return isFinite(p)?p:100},[p]),Oe=i.useMemo(function(){return F!==null&&F<=0?1:F},[F]),Xn=i.useMemo(function(){return typeof N=="boolean"?N?Oe:!1:N>=0?N:!1},[N,Oe]),Ye=i.useMemo(function(){return Object.keys(ee||{}).map(function(V){var C=ee[V],H={value:Number(V)};return C&&tn(C)==="object"&&!i.isValidElement(C)&&("label"in C||"style"in C)?(H.style=C.style,H.label=C.label):H.label=C,H}).filter(function(V){var C=V.label;return C||typeof C=="number"}).sort(function(V,C){return V.value-C.value})},[ee]),Qn=dt(ue,Ve,Oe,Ye,X,Xn),cn=ne(Qn,2),Xe=cn[0],dn=cn[1],Zn=Ka(Q,{value:U}),mn=ne(Zn,2),Ce=mn[0],zn=mn[1],re=i.useMemo(function(){var V=Ce==null?[]:Array.isArray(Ce)?Ce:[Ce],C=ne(V,1),H=C[0],Y=H===void 0?ue:H,J=Ce===null?[]:[Y];if(me){if(J=pe(V),j||Ce===void 0){var Me=j>=0?j+1:2;for(J=J.slice(0,Me);J.length<Me;){var be;J.push((be=J[J.length-1])!==null&&be!==void 0?be:ue)}}J.sort(function(_e,xe){return _e-xe})}return J.forEach(function(_e,xe){J[xe]=Xe(_e)}),J},[Ce,me,ue,j,Xe]),Pe=function(C){return me?C:C[0]},Qe=$e(function(V){var C=pe(V).sort(function(H,Y){return H-Y});g&&!za(C,re,!0)&&g(Pe(C)),zn(C)}),fn=$e(function(V){V&&se.current.hideHelp();var C=Pe(re);S==null||S(C),Be(!S,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),q==null||q(C)}),Jn=function(C){if(!(k||!Te||re.length<=Se)){var H=pe(re);H.splice(C,1),d==null||d(Pe(H)),Qe(H);var Y=Math.max(0,C-1);se.current.hideHelp(),se.current.focus(Y)}},ea=ct(Ae,Le,re,ue,Ve,Xe,Qe,fn,dn,Te,Se),Ue=ne(ea,5),vn=Ue[0],na=Ue[1],aa=Ue[2],ze=Ue[3],gn=Ue[4],hn=function(C,H){if(!k){var Y=pe(re),J=0,Me=0,be=Ve-ue;re.forEach(function(Ne,Ze){var kn=Math.abs(C-Ne);kn<=be&&(be=kn,J=Ze),Ne<C&&(Me=Ze)});var _e=J;Te&&be!==0&&(!ke||re.length<ke)?(Y.splice(Me+1,0,C),_e=Me+1):Y[J]=C,me&&!re.length&&j===void 0&&Y.push(C);var xe=Pe(Y);if(d==null||d(xe),Qe(Y),H){var Re,qe;(Re=document.activeElement)===null||Re===void 0||(qe=Re.blur)===null||qe===void 0||qe.call(Re),se.current.focus(_e),gn(H,_e,Y)}else S==null||S(xe),Be(!S,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),q==null||q(xe)}},ta=function(C){C.preventDefault();var H=Ae.current.getBoundingClientRect(),Y=H.width,J=H.height,Me=H.left,be=H.top,_e=H.bottom,xe=H.right,Re=C.clientX,qe=C.clientY,Ne;switch(Le){case"btt":Ne=(_e-qe)/J;break;case"ttb":Ne=(qe-be)/J;break;case"rtl":Ne=(xe-Re)/Y;break;default:Ne=(Re-Me)/Y}var Ze=ue+Ne*(Ve-ue);hn(Xe(Ze),C)},ra=i.useState(null),yn=ne(ra,2),Je=yn[0],bn=yn[1],ia=function(C,H){if(!k){var Y=dn(re,C,H);d==null||d(Pe(re)),Qe(Y.values),bn(Y.value)}};i.useEffect(function(){if(Je!==null){var V=re.indexOf(Je);V>=0&&se.current.focus(V)}bn(null)},[Je]);var la=i.useMemo(function(){return De&&Oe===null?!1:De},[De,Oe]),_n=$e(function(V,C){gn(V,C),d==null||d(Pe(re))}),xn=vn!==-1;i.useEffect(function(){if(!xn){var V=re.lastIndexOf(na);se.current.focus(V)}},[xn]);var We=i.useMemo(function(){return pe(ze).sort(function(V,C){return V-C})},[ze]),sa=i.useMemo(function(){return me?[We[0],We[We.length-1]]:[ue,We[0]]},[We,me,ue]),pn=ne(sa,2),En=pn[0],Sn=pn[1];i.useImperativeHandle(n,function(){return{focus:function(){se.current.focus(0)},blur:function(){var C,H=document,Y=H.activeElement;(C=Ae.current)!==null&&C!==void 0&&C.contains(Y)&&(Y==null||Y.blur())}}}),i.useEffect(function(){_&&se.current.focus(0)},[]);var ua=i.useMemo(function(){return{min:ue,max:Ve,direction:Le,disabled:k,keyboard:T,step:Oe,included:$,includedStart:En,includedEnd:Sn,range:me,tabIndex:ve,ariaLabelForHandle:ge,ariaLabelledByForHandle:he,ariaRequired:Ee,ariaValueTextFormatterForHandle:ye,styles:c||{},classNames:m||{}}},[ue,Ve,Le,k,T,Oe,$,En,Sn,me,ve,ge,he,Ee,ye,c,m]);return i.createElement(we.Provider,{value:ua},i.createElement("div",{ref:Ae,className:le(a,l,ce(ce(ce(ce({},"".concat(a,"-disabled"),k),"".concat(a,"-vertical"),D),"".concat(a,"-horizontal"),!D),"".concat(a,"-with-marks"),Ye.length)),style:s,onMouseDown:ta,id:E},i.createElement("div",{className:le("".concat(a,"-rail"),m==null?void 0:m.rail),style:te(te({},L),c==null?void 0:c.rail)}),de!==!1&&i.createElement(ut,{prefixCls:a,style:B,values:re,startPoint:Z,onStartMove:la?_n:void 0}),i.createElement(st,{prefixCls:a,marks:Ye,dots:ae,style:R,activeStyle:G}),i.createElement(tt,{ref:se,prefixCls:a,style:K,values:ze,draggingIndex:vn,draggingDelete:aa,onStartMove:_n,onOffsetChange:ia,onFocus:h,onBlur:b,handleRender:W,activeHandleRender:ie,onChangeComplete:fn,onDelete:Te?Jn:void 0}),i.createElement(it,{prefixCls:a,marks:Ye,onClick:hn})))});const vt="_sliderWrapper_y1huq_1",gt="_sliderInputField_y1huq_7",ht="_handle_y1huq_14",yt="_track_y1huq_18",bt="_rail_y1huq_22",_t="_inputRange_y1huq_26",xt="_sliderContainer_y1huq_33",pt="_valueLabel_y1huq_36",Et="_hide_y1huq_45",St="_slider_y1huq_1",kt="_maxLabel_y1huq_66",Ct="_minLabel_y1huq_67",Mt="_labelContainer_y1huq_75",Nt="_fieldsContainer_y1huq_97",Tt="_disabled_y1huq_113",Ot="_activeTrack_y1huq_116",Rt="_formatLabels_y1huq_122",It="_formatLabel_y1huq_122",oe={sliderWrapper:vt,sliderInputField:gt,handle:ht,track:yt,rail:bt,inputRange:_t,sliderContainer:xt,valueLabel:pt,hide:Et,slider:St,maxLabel:kt,minLabel:Ct,labelContainer:Mt,fieldsContainer:Nt,disabled:Tt,activeTrack:Ot,formatLabels:Rt,formatLabel:It},Gn=({steps:e,defaultMinVal:n,defaultMaxVal:t,onChange:a,withFields:l,minLabel:s,maxLabel:m,allowSameValues:c=!0,disabled:E,disableDebounce:x,formatLabel:k})=>{if(!e||e.length===0)throw new Error("RangeInput requires a non-empty steps array");const M=e[0],T=e[e.length-1],_=(g,d,S)=>Math.max(d,Math.min(S,g)),h=g=>{for(let d=0;d<e.length;d++)if(e[d]>=g)return d;return e.length-1},b=g=>Math.max(0,Math.min(g,e.length-1)),[o,y]=i.useState(!0),[r,p]=i.useState({min:_(n??e[0],M,T),max:_(t??e[e.length-1],M,T)}),[I,F]=i.useState({minIdx:h(r.min),maxIdx:h(r.max)}),U=ma(()=>{if(!c&&r.min===r.max){const g=_(r.max+1,M,T);p(d=>({...d,max:g})),a==null||a({min:r.min,max:g})}else a==null||a({min:r.min,max:r.max})},1e3);i.useEffect(()=>{if(!e||e.length===0)return;const g=_(n??e[0],e[0],e[e.length-1]),d=_(t??e[e.length-1],e[0],e[e.length-1]);p({min:g,max:d}),F({minIdx:h(g),maxIdx:h(d)}),y(!0)},[e,n,t]),i.useEffect(()=>{!o&&!x&&U()},[r,o,x]);const Q=(g,d)=>{const S=Number(g),q=_(S,M,T),w={min:d==="min"?q:r.min,max:d==="max"?q:r.max},X={minIdx:h(w.min),maxIdx:h(w.max)};!c&&w.min===w.max&&(d==="min"&&(w.min=_(w.min-1,M,T)),d==="max"&&(w.max=_(w.max+1,M,T))),o&&y(!1),p(w),F(X),x&&(a==null||a({min:w.min,max:w.max}))},z=g=>{if(Array.isArray(g)){let[d,S]=g;d=b(d),S=b(S),!c&&d===S&&(S=Math.min(e.length-1,S+1));const q=e[d],w=e[S];o||y(!0),F({minIdx:d,maxIdx:S}),p({min:q,max:w}),x&&(a==null||a({min:q,max:w}))}},j=g=>{if(Array.isArray(g)){let[d,S]=g;!c&&d===S&&(S=Math.min(e.length-1,S+1));const q=e[d],w=e[S];a==null||a({min:q,max:w})}};return v.jsxs("div",{className:le(oe.sliderWrapper,{[oe.disabled]:E}),children:[l&&v.jsxs("div",{className:oe.fieldsContainer,children:[v.jsx(Cn,{className:oe.sliderInputField,label:s,name:"min",type:"number",onChange:g=>Q(g,"min"),value:r.min.toString(),min:M,max:c?r.max:Math.max(M,r.max-1),height:"sm",disabled:E}),v.jsx(Cn,{className:oe.sliderInputField,label:m,name:"max",type:"number",onChange:g=>Q(g,"max"),value:r.max.toString(),min:c?r.min:Math.min(T,r.min+1),max:T,height:"sm",disabled:E})]}),v.jsx(ft,{range:!0,min:0,max:e.length-1,step:1,allowCross:c,disabled:E,marks:Object.fromEntries(e.map((g,d)=>[d,""])),value:[I.minIdx,I.maxIdx],onChange:z,onChangeComplete:j,classNames:{tracks:oe.tracks,handle:oe.handle,track:oe.track,rail:oe.rail}}),v.jsxs("div",{className:oe.formatLabels,children:[v.jsx("span",{className:oe.formatLabel,children:`${e[0]} ${k}`}),v.jsx("span",{className:oe.formatLabel,children:`${e[e.length-1]} ${k}`})]})]})};Gn.__docgenInfo={description:"",methods:[],displayName:"RangeInput",props:{steps:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},defaultMinVal:{required:!1,tsType:{name:"number"},description:""},defaultMaxVal:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: { min: number; max: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ min: number; max: number }",signature:{properties:[{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}}]}},name:"range"}],return:{name:"void"}}},description:""},formatLabel:{required:!1,tsType:{name:"string"},description:""},withFields:{required:!1,tsType:{name:"boolean"},description:""},minLabel:{required:!1,tsType:{name:"string"},description:""},maxLabel:{required:!1,tsType:{name:"string"},description:""},allowSameValues:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},disableDebounce:{required:!1,tsType:{name:"boolean"},description:""}}};const An=e=>{if(!e||!Array.isArray(e))return;const n=e==null?void 0:e.map(l=>Number(l.name)),t=Math.max(...n);return{min:Math.min(...n),max:Math.ceil(t/10)*10}},on=({filters:e,title:n,preSelected:t,onUpdate:a,loading:l,hideSliderFields:s,hideFilters:m,maxOptionsToShow:c=6,result:E,backdropOptions:x})=>{var X;const[k,M]=i.useState(!1),[T,_]=i.useState([]),[h,b]=i.useState(t??[]),[o,y]=i.useState([]),[r,p]=i.useState(!1),I=u=>{_(N=>N.includes(u)?N.filter(O=>O!==u):[...N,u])},F=u=>{y(N=>N.includes(u)?N.filter(O=>O!==u):[...N,u])},U=(u,N,O)=>{Q({name:N,value:`${N}_${O.min}-${O.max}`},N,!0)},Q=(u,N,O)=>{b(D=>{var B;const A=D==null?void 0:D.find(K=>K.name===N);let $=[];if(!A)$=[...D,{name:N,selectedOptions:[u]}];else{const K=(B=A.selectedOptions)==null?void 0:B.find(L=>L.name===u.name);$=[...D].map(L=>{if(L.name!==N)return L;let R=[];return O?R=[u]:K?R=L.selectedOptions.filter(G=>G.name!==u.name):R=[...L.selectedOptions,u],{...L,selectedOptions:[...R]}})}const Z=$.filter(K=>K.selectedOptions.length);return a==null||a(u,Z),Z})},z=(u,N)=>{b(O=>{const A=[...O].map($=>({...$,selectedOptions:$.selectedOptions.filter(Z=>Z.name!==u.name)})).filter($=>!!$.selectedOptions.length);return N?a==null||a({name:u.value,value:u.name},A):a==null||a(u,A),A})},j=()=>{b([]),a==null||a(void 0,[])};i.useEffect(()=>{b(t??[])},[t]);const g=()=>M(!1),d=u=>{var N;return(N=u.options)==null?void 0:N.map((O,D)=>{var Z,B;const A=h==null?void 0:h.find(K=>K.name===u.name),$=(Z=A==null?void 0:A.selectedOptions)==null?void 0:Z.find(K=>K.value===O.value);switch(u.type){case"checkbox":case"radio":default:return v.jsxs("button",{className:le(P.checkboxItem,{[P.inActive]:O.disabled}),onClick:()=>Q(O,u.name),disabled:l,children:[v.jsx(ga,{checked:!!$,id:O.value,name:O.value,className:P.checkbox,disabled:l}),v.jsx("span",{className:P.label,children:(B=O.name)==null?void 0:B.replace(/\s*\(.*$/,"")}),O.count&&v.jsx("span",{className:le(P.label,P.count),children:O.count})]},`${O.name}-${D}`)}})},S=()=>v.jsxs("div",{className:P.selectedFilters,children:[h==null?void 0:h.map(u=>{var N;return(N=u.selectedOptions)==null?void 0:N.map((O,D)=>{let A=O.name;const $=e==null?void 0:e.find(Z=>{var B;return Z.type==="range"&&((B=Z.options)==null?void 0:B.find(K=>K.value===O.name))});return $&&(A=$.name),v.jsx(ha,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:v.jsxs(nn.button,{className:le(P.selectedFilter,P.active,{[P.inActive]:O.disabled}),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>z(O,!!$),children:[v.jsx("span",{children:A}),v.jsx(He,{icon:"icon-x"})]})},`${O.value}-${D}-${O.disabled}`)})}),!!h.length&&v.jsx("button",{className:le(P.selectedFilter,P.clear),onClick:j,children:v.jsx(He,{icon:"icon-trash-2"})})]});function q(u){const N=new Set;return u==null||u.forEach(({name:O})=>{const D=Number(O);isNaN(D)||N.add(D)}),Array.from(N).sort((O,D)=>O-D)}const w=(X=h==null?void 0:h.flatMap(u=>u==null?void 0:u.selectedOptions))==null?void 0:X.length;return v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:P.filtersWrapper,children:[v.jsx(Mn,{type:"button",surface:"x",size:"xx-small",iconRight:{icon:"icon-plus"},onClick:()=>M(!0),className:P.filterButton,disabled:l,children:"Filtrera"}),!m&&h.length>0&&v.jsxs(v.Fragment,{children:[v.jsx(fa,{breakpoint:"md",children:u=>u&&v.jsxs(v.Fragment,{children:[v.jsx(Mn,{type:"button",surface:"x",size:"xx-small",onClick:()=>p(!r),className:P.filterButton,iconRight:{icon:r?"icon-chevron-up":"icon-chevron-down"},children:w>0?`Valda filter (${w})`:"Valda filter"}),v.jsx(en,{open:r,children:S()})]})}),v.jsx(va,{breakpoint:"md",children:u=>u&&v.jsx(v.Fragment,{children:S()})})]})]}),v.jsxs(oa,{isOpen:k,onClose:g,from:"left",width:"md",...x,children:[v.jsxs("div",{className:P.dynamicFilter,children:[n&&v.jsx("h4",{className:P.title,children:n}),e==null?void 0:e.map((u,N)=>{var L,R,G,ee,ae;const O=T.includes(u.name),D=u.type==="range"?t==null?void 0:t.find(W=>W.name===u.id):void 0,A=(G=(R=(L=D==null?void 0:D.selectedOptions)==null?void 0:L[0])==null?void 0:R.value)==null?void 0:G.split("-"),$=A!=null&&A[0]?Number(A==null?void 0:A[0]):void 0,Z=A!=null&&A[1]?Number(A==null?void 0:A[1]):void 0;(((ee=An(u.options))==null?void 0:ee.min)??0)>=10&&((ae=An(u.options))==null||ae.min);const B=o.includes(u.name),K=q(u.options);return v.jsxs("div",{className:P.filterCategory,children:[v.jsxs("button",{className:P.filterItem,onClick:()=>I(u.name),children:[v.jsx("span",{className:P.filterName,children:u.name}),v.jsx(He,{className:P.filterItemIcon,icon:O?"icon-chevron-up":"icon-chevron-down"})]}),v.jsxs(en,{open:O,className:P.expandableWrapper,children:[u.type==="range"&&K.length>0?v.jsx(Gn,{steps:K,defaultMinVal:$||0,defaultMaxVal:Z,withFields:!s,formatLabel:u.formatLabel||"kr",onChange:W=>U(u.name,u.id,typeof W=="object"?W:{min:0,max:0}),disabled:l}):v.jsx(v.Fragment,{children:d(u).slice(0,c)}),d(u).length>c&&u.type!=="range"?v.jsxs(v.Fragment,{children:[v.jsx(en,{open:B,children:d(u).slice(c,d(u).length)}),v.jsxs(Bn,{alignItems:"center",justifyContent:"center",children:[B&&v.jsxs(nn.button,{initial:{scale:.5},animate:{scale:B?1:0},exit:{scale:.5},onClick:()=>F(u.name),className:P.showMoreButton,children:[v.jsx("span",{className:P.showMoreLabel,children:B?"Se mindre":"Se mer"}),v.jsx(He,{icon:B?"icon-x-circle":"icon-plus-circle"})]},"open"),!B&&v.jsxs(nn.button,{initial:{scale:.5},animate:{scale:B?0:1},exit:{scale:.5},onClick:()=>F(u.name),className:P.showMoreButton,children:[v.jsx("span",{className:P.showMoreLabel,children:B?"Se mindre":"Se mer"}),v.jsx(He,{icon:B?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${u.name}-${N}`)})]}),!!h.length&&v.jsx("button",{className:le(P.stickyResult,P.removeAllBtn),onClick:j,children:v.jsx(He,{icon:"icon-trash-2"})}),(E||E===0)&&v.jsx("button",{className:P.stickyResult,onClick:g,disabled:E===0,children:`Visa resultat (${E})`})]})]})};on.__docgenInfo={description:"",methods:[],displayName:"DynamicFilter",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  type: 'checkbox' | 'range' | 'radio'
  name: string
  options: TOptionType[]
} & (TCheckbox | TRange | TRadio)`,elements:[{name:"signature",type:"object",raw:`{
  type: 'checkbox' | 'range' | 'radio'
  name: string
  options: TOptionType[]
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'checkbox' | 'range' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'range'"},{name:"literal",value:"'radio'"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}},{name:"unknown"}]}],raw:"TFilterType[]"},description:""},preSelected:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  selectedOptions: TOptionType[]
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}}],raw:"TSelected[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(option?: TOptionType, filters?: TSelected[]) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  selectedOptions: TOptionType[]
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}}],raw:"TSelected[]"},name:"filters"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},hideSliderFields:{required:!1,tsType:{name:"boolean"},description:""},hideFilters:{required:!1,tsType:{name:"boolean"},description:`Defines if selected filters should be hidden
@default false`},maxOptionsToShow:{required:!1,tsType:{name:"number"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)
@default 6`,defaultValue:{value:"6",computed:!1}},result:{required:!1,tsType:{name:"number"},description:'If provided, a "show result (x)" button will be displayed at bottom of drawer'},backdropOptions:{required:!1,tsType:{name:"Pick",elements:[{name:"IDrawerSidebar"},{name:"union",raw:"'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'",elements:[{name:"literal",value:"'enableBackgroundScroll'"},{name:"literal",value:"'hideOverlay'"},{name:"literal",value:"'disableCloseOnOutsideClick'"}]}],raw:"Pick<IDrawerSidebar, 'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'>"},description:""}}};const wt={title:"Design System/Molecules/Dynamic Filter",component:on},Ln=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],Yn={render:e=>{const[n,t]=i.useState(),a=(s,m)=>{t(m)},l=i.useMemo(()=>Ln.filter(s=>n==null?void 0:n.find(m=>{var c;return(c=m.selectedOptions)==null?void 0:c.find(E=>{var x,k;return((x=E.name)==null?void 0:x.toLowerCase())===s.country||((k=E.name)==null?void 0:k.toLowerCase())===s.producer})})),[n]);return v.jsxs(v.Fragment,{children:[v.jsx(on,{onUpdate:a,title:"Filter",preSelected:e.preSelected??[],filters:e.filters}),v.jsx(Bn,{flexDirection:"column",children:(l.length?l:Ln).map(s=>v.jsxs("span",{style:{color:"blue"},children:[s.producer,", ",s.price,"kr"]},s.id))})]})}},Ke={...Yn,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},Ge={...Yn,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var jn,Dn,Vn;Ke.parameters={...Ke.parameters,docs:{...(jn=Ke.parameters)==null?void 0:jn.docs,source:{originalSource:`{
  ...DynamicFilterStoryTemplate,
  args: {
    filters: ([{
      name: 'Listpris',
      type: 'range',
      id: 'rangefilter*V16062',
      options: [{
        name: "0",
        value: "rangefilter*V16062"
      }, {
        name: "10",
        value: "rangefilter*V16062"
      }, {
        name: "20",
        value: "rangefilter*V16062"
      }, {
        name: "30",
        value: "rangefilter*V16062"
      }, {
        name: "40",
        value: "rangefilter*V16062"
      }, {
        name: "50",
        value: "rangefilter*V16062"
      }, {
        name: "60",
        value: "rangefilter*V16062"
      }, {
        name: "70",
        value: "rangefilter*V16062"
      }, {
        name: "80",
        value: "rangefilter*V16062"
      }, {
        name: "90",
        value: "rangefilter*V16062"
      }, {
        name: "100",
        value: "rangefilter*V16062"
      }, {
        name: "200",
        value: "rangefilter*V16062"
      }, {
        name: "300",
        value: "rangefilter*V16062"
      }, {
        name: "400",
        value: "rangefilter*V16062"
      }, {
        name: "500",
        value: "rangefilter*V16062"
      }, {
        name: "1000",
        value: "rangefilter*V16062"
      }, {
        name: "1500",
        value: "rangefilter*V16062"
      }, {
        name: "2000",
        value: "rangefilter*V16062"
      }, {
        name: "2466",
        value: "rangefilter*V16062"
      }]
    }, {
      name: 'Land',
      type: 'checkbox',
      options: [{
        name: 'Sverige',
        value: 'sverige'
      }, {
        name: 'Italien',
        value: 'italien'
      }, {
        name: 'USA',
        value: 'usa'
      }, {
        name: 'Belgien',
        value: 'belgien'
      }, {
        name: 'Norge',
        value: 'norge'
      }, {
        name: 'Irland',
        value: 'irland'
      }, {
        name: 'Tyskland',
        value: 'tyskland'
      }, {
        name: 'Nederländerna',
        value: 'nederländerna'
      }, {
        name: 'Tjeckien',
        value: 'tjeckien'
      }]
    }, {
      name: 'Producent',
      type: 'checkbox',
      options: [{
        name: 'Heineken',
        value: 'heineken'
      }, {
        name: 'Birra Moretti',
        value: 'birra-moretti'
      }]
    }, {
      name: 'Single Select',
      type: 'radio',
      options: [{
        name: 'Endast dryck',
        value: 'drink-only'
      }, {
        name: 'Allt',
        value: 'all'
      }]
    }] as TFilterType[])
  }
}`,...(Vn=(Dn=Ke.parameters)==null?void 0:Dn.docs)==null?void 0:Vn.source}}};var Pn,qn,Hn;Ge.parameters={...Ge.parameters,docs:{...(Pn=Ge.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  ...DynamicFilterStoryTemplate,
  args: {
    filters: ([{
      name: 'Listpris',
      type: 'range',
      id: 'rangefilter*V16062',
      options: [{
        name: "0",
        value: "rangefilter*V16062"
      }, {
        name: "10",
        value: "rangefilter*V16062"
      }, {
        name: "20",
        value: "rangefilter*V16062"
      }, {
        name: "30",
        value: "rangefilter*V16062"
      }, {
        name: "40",
        value: "rangefilter*V16062"
      }, {
        name: "50",
        value: "rangefilter*V16062"
      }, {
        name: "60",
        value: "rangefilter*V16062"
      }, {
        name: "70",
        value: "rangefilter*V16062"
      }, {
        name: "80",
        value: "rangefilter*V16062"
      }, {
        name: "90",
        value: "rangefilter*V16062"
      }, {
        name: "100",
        value: "rangefilter*V16062"
      }, {
        name: "200",
        value: "rangefilter*V16062"
      }, {
        name: "300",
        value: "rangefilter*V16062"
      }, {
        name: "400",
        value: "rangefilter*V16062"
      }, {
        name: "500",
        value: "rangefilter*V16062"
      }, {
        name: "1000",
        value: "rangefilter*V16062"
      }, {
        name: "1500",
        value: "rangefilter*V16062"
      }, {
        name: "2000",
        value: "rangefilter*V16062"
      }, {
        name: "2466",
        value: "rangefilter*V16062"
      }]
    }, {
      name: 'Land',
      type: 'checkbox',
      options: [{
        name: 'Sverige',
        value: 'sverige'
      }, {
        name: 'Italien',
        value: 'italien'
      }, {
        name: 'USA',
        value: 'usa'
      }, {
        name: 'Belgien',
        value: 'belgien'
      }, {
        name: 'Norge',
        value: 'norge'
      }, {
        name: 'Irland',
        value: 'irland'
      }, {
        name: 'Tyskland',
        value: 'tyskland'
      }, {
        name: 'Nederländerna',
        value: 'nederländerna'
      }, {
        name: 'Tjeckien',
        value: 'tjeckien'
      }]
    }, {
      name: 'Producent',
      type: 'checkbox',
      options: [{
        name: 'Heineken',
        value: 'heineken'
      }, {
        name: 'Birra Moretti',
        value: 'birra-moretti'
      }]
    }, {
      name: 'Single Select',
      type: 'radio',
      options: [{
        name: 'Endast dryck',
        value: 'drink-only'
      }, {
        name: 'Allt',
        value: 'all'
      }]
    }] as TFilterType[]),
    preSelected: [{
      name: 'Listpris',
      selectedOptions: [{
        name: 'range-id',
        value: '20-600'
      }]
    }, {
      name: 'Land',
      selectedOptions: [{
        name: 'Italien',
        value: 'italien'
      }]
    }]
  }
}`,...(Hn=(qn=Ge.parameters)==null?void 0:qn.docs)==null?void 0:Hn.source}}};const Ft=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Qt=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:Ke,Dynamic_Filter_With_Pre_Selected:Ge,__namedExportsOrder:Ft,default:wt},Symbol.toStringTag,{value:"Module"}));export{on as D,Ke as a,Qt as d};
