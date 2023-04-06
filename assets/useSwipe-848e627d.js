import{r}from"./index-6f814c40.js";function S(n){const[s,c]=r.useState(0),e=5;return{onTouchStart:t=>{const o=t.touches[0].clientX;c(o)},onTouchMove:t=>{const o=s;if(o===0)return;const u=t.touches[0].clientX,i=o-u;i>e&&n.onSwipedLeft(),i<-e&&n.onSwipedRight(),c(0)}}}export{S as u};
//# sourceMappingURL=useSwipe-848e627d.js.map
