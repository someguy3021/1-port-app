import{c as v,k as z,h,n as Q,ag as Z,w as V,o as Te,g as O,D as U,ah as Se,W as le,ai as Pe,r as F,a as Be,V as Ee,aj as Fe,ak as xe,al as _e,q as ae,$ as Ce,H as ee,a3 as De}from"./index.65b44cc8.js";import{a as N}from"./render.b28d6bc9.js";import{v as $e,c as se,g as A}from"./QBtn.7758b9cd.js";const at={dark:{type:Boolean,default:null}};function st(e,t){return v(()=>e.dark===null?t.dark.isActive:e.dark)}var ut=z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:o.value},N(t.default))}}),rt=z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:o.value,role:"toolbar"},N(t.default))}});function He(e,t,o){let l;function a(){l!==void 0&&(Z.remove(l),l=void 0)}return Q(()=>{e.value===!0&&a()}),{removeFromHistory:a,addToHistory(){l={condition:()=>o.value===!0,handler:t},Z.add(l)}}}const Ae={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Me=["beforeShow","show","beforeHide","hide"];function Ve({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:a,processOnMount:f}){const r=O(),{props:s,emit:u,proxy:m}=r;let d;function g(i){e.value===!0?q(i):b(i)}function b(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const p=s["onUpdate:modelValue"]!==void 0;p===!0&&(u("update:modelValue",!0),d=i,U(()=>{d===i&&(d=void 0)})),(s.modelValue===null||p===!1)&&P(i)}function P(i){e.value!==!0&&(e.value=!0,u("beforeShow",i),l!==void 0?l(i):u("show",i))}function q(i){if(s.disable===!0)return;const p=s["onUpdate:modelValue"]!==void 0;p===!0&&(u("update:modelValue",!1),d=i,U(()=>{d===i&&(d=void 0)})),(s.modelValue===null||p===!1)&&_(i)}function _(i){e.value!==!1&&(e.value=!1,u("beforeHide",i),a!==void 0?a(i):u("hide",i))}function B(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):i===!0!==e.value&&(i===!0?P:_)(d)}V(()=>s.modelValue,B),o!==void 0&&$e(r)===!0&&V(()=>m.$route.fullPath,()=>{o.value===!0&&e.value===!0&&q()}),f===!0&&Te(()=>{B(s.modelValue)});const C={show:b,hide:q,toggle:g};return Object.assign(m,C),C}function ze(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Se(t))}}}function Qe(){let e=null;const t=O();function o(){e!==null&&(clearTimeout(e),e=null)}return le(o),Q(o),{removeTimeout:o,registerTimeout(l,a){o(),se(t)===!1&&(e=setTimeout(()=>{e=null,l()},a))}}}const G={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Oe=Object.keys(G);G.all=!0;function ct(e){const t={};for(const o of Oe)e[o]===!0&&(t[o]=!0);return Object.keys(t).length===0?G:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Re=["INPUT","TEXTAREA"];function dt(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Re.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function ft(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}let k=[],x=[];function ue(e){x=x.filter(t=>t!==e)}function Le(e){ue(e),x.push(e)}function te(e){ue(e),x.length===0&&k.length!==0&&(k[k.length-1](),k=[])}function je(e){x.length===0?e():k.push(e)}function mt(e){k=k.filter(t=>t!==e)}const M=[];function vt(e){return M.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Ie(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return A(e)}else if(e.__qPortal===!0){const o=A(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=A(e)}while(e!=null)}function gt(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=Ie(e,t);continue}e.hide(t)}e=A(e)}}const Ke=z({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Ue(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ne(e,t,o,l){const a=F(!1),f=F(!1);let r=null;const s={},u=l==="dialog"&&Ue(e);function m(g){if(g===!0){te(s),f.value=!0;return}f.value=!1,a.value===!1&&(u===!1&&r===null&&(r=xe(!1,l)),a.value=!0,M.push(e.proxy),Le(s))}function d(g){if(f.value=!1,g!==!0)return;te(s),a.value=!1;const b=M.indexOf(e.proxy);b!==-1&&M.splice(b,1),r!==null&&(_e(r),r=null)}return Be(()=>{d(!0)}),e.proxy.__qPortal=!0,Ee(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:d,portalIsActive:a,portalIsAccessible:f,renderPortal:()=>u===!0?o():a.value===!0?[h(Fe,{to:r},h(Ke,o))]:void 0}}const Ge={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function We(e,t=()=>{},o=()=>{}){return{transitionProps:v(()=>{const l=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:v(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Xe(){let e;const t=O();function o(){e=void 0}return le(o),Q(o),{removeTick:o,registerTick(l){e=l,U(()=>{e===l&&(se(t)===!1&&e(),e=void 0)})}}}const y=[];let S;function Je(e){S=e.keyCode===27}function Ye(){S===!0&&(S=!1)}function Ze(e){S===!0&&(S=!1,Ce(e,27)===!0&&y[y.length-1](e))}function re(e){window[e]("keydown",Je),window[e]("blur",Ye),window[e]("keyup",Ze),S=!1}function et(e){ae.is.desktop===!0&&(y.push(e),y.length===1&&re("addEventListener"))}function oe(e){const t=y.indexOf(e);t!==-1&&(y.splice(t,1),y.length===0&&re("removeEventListener"))}const w=[];function ce(e){w[w.length-1](e)}function tt(e){ae.is.desktop===!0&&(w.push(e),w.length===1&&document.body.addEventListener("focusin",ce))}function ne(e){const t=w.indexOf(e);t!==-1&&(w.splice(t,1),w.length===0&&document.body.removeEventListener("focusin",ce))}let H=0;const ot={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ie={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var ht=z({name:"QDialog",inheritAttrs:!1,props:{...Ae,...Ge,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...Me,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:l}){const a=O(),f=F(null),r=F(!1),s=F(!1);let u=null,m=null,d,g;const b=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:P}=ze(),{registerTimeout:q}=Qe(),{registerTick:_,removeTick:B}=Xe(),{transitionProps:C,transitionStyle:i}=We(e,()=>ie[e.position][0],()=>ie[e.position][1]),p=v(()=>i.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:W,hidePortal:X,portalIsAccessible:de,renderPortal:fe}=Ne(a,f,qe,"dialog"),{hide:D}=Ve({showing:r,hideOnRouteChange:b,handleShow:pe,handleHide:ke,processOnMount:!0}),{addToHistory:me,removeFromHistory:ve}=He(r,D,b),ge=v(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ot[e.position]}`+(s.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),$=v(()=>r.value===!0&&e.seamless!==!0),he=v(()=>e.autoClose===!0?{onClick:ye}:{}),be=v(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${$.value===!0?"modal":"seamless"}`,l.class]);V(()=>e.maximized,n=>{r.value===!0&&j(n)}),V($,n=>{P(n),n===!0?(tt(I),et(L)):(ne(I),oe(L))});function pe(n){me(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,j(e.maximized),W(),s.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),_(E)):B(),q(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:c,bottom:T}=document.activeElement.getBoundingClientRect(),{innerHeight:Y}=window,K=window.visualViewport!==void 0?window.visualViewport.height:Y;c>0&&T>K/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-K,T>=Y?1/0:Math.ceil(document.scrollingElement.scrollTop+T-K/2))),document.activeElement.scrollIntoView()}g=!0,f.value.click(),g=!1}W(!0),s.value=!1,o("show",n)},e.transitionDuration)}function ke(n){B(),ve(),J(!0),s.value=!0,X(),m!==null&&(((n&&n.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),q(()=>{X(!0),s.value=!1,o("hide",n)},e.transitionDuration)}function E(n){je(()=>{let c=f.value;if(c!==null){if(n!==void 0){const T=c.querySelector(n);if(T!==null){T.focus({preventScroll:!0});return}}c.contains(document.activeElement)!==!0&&(c=c.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.querySelector("[autofocus], [data-autofocus]")||c,c.focus({preventScroll:!0}))}})}function R(n){n&&typeof n.focus=="function"?n.focus({preventScroll:!0}):E(),o("shake");const c=f.value;c!==null&&(c.classList.remove("q-animate--scale"),c.classList.add("q-animate--scale"),u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,f.value!==null&&(c.classList.remove("q-animate--scale"),E())},170))}function L(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&R():(o("escapeKey"),D()))}function J(n){u!==null&&(clearTimeout(u),u=null),(n===!0||r.value===!0)&&(j(!1),e.seamless!==!0&&(P(!1),ne(I),oe(L))),n!==!0&&(m=null)}function j(n){n===!0?d!==!0&&(H<1&&document.body.classList.add("q-body--dialog"),H++,d=!0):d===!0&&(H<2&&document.body.classList.remove("q-body--dialog"),H--,d=!1)}function ye(n){g!==!0&&(D(n),o("click",n))}function we(n){e.persistent!==!0&&e.noBackdropDismiss!==!0?D(n):e.noShake!==!0&&R()}function I(n){e.allowFocusOutside!==!0&&de.value===!0&&De(f.value,n.target)!==!0&&E('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:E,shake:R,__updateRefocusTarget(n){m=n||null}}),Q(J);function qe(){return h("div",{role:"dialog","aria-modal":$.value===!0?"true":"false",...l,class:be.value},[h(ee,{name:"q-transition--fade",appear:!0},()=>$.value===!0?h("div",{class:"q-dialog__backdrop fixed-full",style:p.value,"aria-hidden":"true",tabindex:-1,onClick:we}):null),h(ee,C.value,()=>r.value===!0?h("div",{ref:f,class:ge.value,style:i.value,tabindex:-1,...he.value},N(t.default)):null)])}return fe}});export{gt as A,ht as Q,st as a,Ae as b,ft as c,Me as d,Qe as e,Ve as f,ct as g,He as h,ze as i,je as j,Ge as k,Xe as l,We as m,Ne as n,tt as o,M as p,ne as q,mt as r,dt as s,oe as t,at as u,et as v,Ie as w,rt as x,ut as y,vt as z};
