import{r as L,ep as G,eq as _}from"./strapi-DS2sP7Te.js";const q={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation",BLOCKS:"blocks"},v=(O,n,{onCancel:a,onDropItem:f,onGrabItem:D,onMoveItem:l})=>{const[c,i]=L.useState(!1),R=s=>{c&&typeof n=="number"&&l&&(s==="UP"?l(n-1,n):s==="DOWN"&&l(n+1,n))},u=()=>{c?(f&&f(n),i(!1)):(D&&D(n),i(!0))},h=()=>{c&&(i(!1),a&&a(n))};return s=>{if(O&&!(s.key==="Tab"&&!c))switch(s.preventDefault(),s.key){case" ":case"Enter":u();break;case"Escape":h();break;case"ArrowDown":case"ArrowRight":R("DOWN");break;case"ArrowUp":case"ArrowLeft":R("UP");break}}},N={UPWARD:"upward",DOWNWARD:"downward"},b={REGULAR:"regular",IMMEDIATE:"immediate"},M=(O,{type:n="STRAPI_DND",index:a,item:f,onStart:D,onEnd:l,onGrabItem:c,onDropItem:i,onCancel:R,onMoveItem:u,dropSensitivity:h=b.REGULAR})=>{const o=L.useRef(null),[{handlerId:s,isOver:T},k]=G({accept:n,collect(e){return{handlerId:e.getHandlerId(),isOver:e.isOver({shallow:!0})}},drop(e){const g=e.index;T&&i&&i(g,a)},hover(e,g){if(!o.current||!u)return;const t=e.index,r=a,p=o.current?.getBoundingClientRect(),A=(p.bottom-p.top)/2,w=g.getClientOffset();if(!w)return;const I=w&&w.y-p.top;if(typeof t=="number"&&typeof r=="number"){if(t===r||h===b.REGULAR&&(t<r&&I<A||t>r&&I>A))return;u(r,t),e.index=r}else{if(Array.isArray(t)&&Array.isArray(r)){const B=Math.min(t.length,r.length);let E=!0,y=!1,C=!1;for(let d=0;d<B;d++)if(t[d]<r[d]){y=!0,E=!1;break}else if(t[d]>r[d]){C=!0,E=!1;break}if(E&&t.length===r.length||h===b.REGULAR&&(y&&!C&&I<A||C&&!y&&I>A))return}u(r,t),e.index=r}}}),U=e=>{if(e&&e.isDragging()&&!e.didDrop()&&e.getInitialClientOffset()&&e.getClientOffset()){const g=e.getInitialClientOffset().y-e.getClientOffset().y;return g>0?N.UPWARD:g<0?N.DOWNWARD:null}return null},[{isDragging:P,direction:W},S,K]=_({type:n,item(){D&&D();const{width:e}=o.current?.getBoundingClientRect()??{};return{index:a,width:e,...f}},end(){l&&l()},canDrag:O,isDragging:f?.id?e=>f.id===e.getItem().id:void 0,collect:e=>({isDragging:e.isDragging(),initialOffset:e.getInitialClientOffset(),currentOffset:e.getClientOffset(),direction:U(e)})}),Y=v(O,a,{onGrabItem:c,onDropItem:i,onCancel:R,onMoveItem:u});return[{handlerId:s,isDragging:P,handleKeyDown:Y,isOverDropTarget:T,direction:W},o,k,S,K]};export{b as D,q as I,N as a,M as u};
