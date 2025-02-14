import{k as R,c,h as C,l as ne,r as V,m as Ie,o as Y,n as te,p as De,q as pe,g as F,t as Ee,i as se,u as P,v as oe,w as q,x as _t,y as St,z as ie,A as qt,B as fe,C as Ce,D as je,E as $e,G as Qe,H as Le,I as He,J as Ct,K as Ue,L as nt,M as $t,N as Me,O as Lt,P as ot,Q as zt,R as Vt,S as Tt,U as Ot,V as ze,W as ve,a as Bt,X as Pt,Y as O,Z as ge,_ as I,$ as w,a0 as J,F as be,j as b,a1 as W,a2 as G,a3 as Z,a4 as ue,a5 as Et,a6 as Qt,a7 as le,a8 as rt,a9 as Ht,aa as me,ab as Xe,ac as It,ad as Ve,ae as Te}from"./index.2c29efdb.js";import{u as Re,a as Fe,g as Ye,s as Ke,c as Dt,b as Mt,d as Rt,e as Ft,f as At,h as Wt,i as he,j as Nt,Q as ee,k as B,l as X,m as jt,n as Ut,o as Xt,p as Yt}from"./QSelect.ca93c889.js";import{u as it}from"./vue-i18n.fb01bccd.js";import{_ as Kt}from"./plugin-vue_export-helper.21dcd24c.js";var Je=R({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:u}){const a=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:a.value,role:"toolbar"},ne(u.default))}});function Jt(){const e=V(!Ie.value);return e.value===!1&&Y(()=>{e.value=!0}),{isHydrated:e}}const ut=typeof ResizeObserver!="undefined",Ge=ut===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ye=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let a=null,n,t={width:-1,height:-1};function l(d){d===!0||e.debounce===0||e.debounce==="0"?o():a===null&&(a=setTimeout(o,e.debounce))}function o(){if(a!==null&&(clearTimeout(a),a=null),n){const{offsetWidth:d,offsetHeight:s}=n;(d!==t.width||s!==t.height)&&(t={width:d,height:s},u("resize",t))}}const{proxy:m}=F();if(m.trigger=l,ut===!0){let d;const s=r=>{n=m.$el.parentNode,n?(d=new ResizeObserver(l),d.observe(n),o()):r!==!0&&pe(()=>{s(!0)})};return Y(()=>{s()}),te(()=>{a!==null&&clearTimeout(a),d!==void 0&&(d.disconnect!==void 0?d.disconnect():n&&d.unobserve(n))}),De}else{let r=function(){a!==null&&(clearTimeout(a),a=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",l,Ee.passive),s=void 0)},f=function(){r(),n&&n.contentDocument&&(s=n.contentDocument.defaultView,s.addEventListener("resize",l,Ee.passive),o())};const{isHydrated:d}=Jt();let s;return Y(()=>{pe(()=>{n=m.$el,n&&f()})}),te(r),()=>{if(d.value===!0)return C("object",{class:"q--avoid-card-border",style:Ge.style,tabindex:-1,type:"text/html",data:Ge.url,"aria-hidden":"true",onLoad:f})}}}}),Gt=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:a}){const{proxy:{$q:n}}=F(),t=se(oe,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const l=V(parseInt(e.heightHint,10)),o=V(!0),m=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||n.platform.is.ios&&t.isContainer.value===!0),d=c(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return o.value===!0?l.value:0;const p=l.value-t.scroll.value.position;return p>0?p:0}),s=c(()=>e.modelValue!==!0||m.value===!0&&o.value!==!0),r=c(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),f=c(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=c(()=>{const p=t.rows.value.top,T={};return p[0]==="l"&&t.left.space===!0&&(T[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),p[2]==="r"&&t.right.space===!0&&(T[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function v(p,T){t.update("header",p,T)}function g(p,T){p.value!==T&&(p.value=T)}function x({height:p}){g(l,p),v("size",p)}function $(p){r.value===!0&&g(o,!0),a("focusin",p)}q(()=>e.modelValue,p=>{v("space",p),g(o,!0),t.animate()}),q(d,p=>{v("offset",p)}),q(()=>e.reveal,p=>{p===!1&&g(o,e.modelValue)}),q(o,p=>{t.animate(),a("reveal",p)}),q(t.scroll,p=>{e.reveal===!0&&g(o,p.direction==="up"||p.position<=e.revealOffset||p.position-p.inflectionPoint<100)});const _={};return t.instances.header=_,e.modelValue===!0&&v("size",l.value),v("space",e.modelValue),v("offset",d.value),te(()=>{t.instances.header===_&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const p=_t(u.default,[]);return e.elevated===!0&&p.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),p.push(C(ye,{debounce:0,onResize:x})),C("header",{class:f.value,style:y.value,onFocusin:$},p)}}}),Zt=R({name:"QList",props:{...Re,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:u}){const a=F(),n=Fe(e,a.proxy.$q),t=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},ne(u.default))}});function Oe(e,u,a){const n=Qe(e);let t,l=n.left-u.event.x,o=n.top-u.event.y,m=Math.abs(l),d=Math.abs(o);const s=u.direction;s.horizontal===!0&&s.vertical!==!0?t=l<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=o<0?"up":"down":s.up===!0&&o<0?(t="up",m>d&&(s.left===!0&&l<0?t="left":s.right===!0&&l>0&&(t="right"))):s.down===!0&&o>0?(t="down",m>d&&(s.left===!0&&l<0?t="left":s.right===!0&&l>0&&(t="right"))):s.left===!0&&l<0?(t="left",m<d&&(s.up===!0&&o<0?t="up":s.down===!0&&o>0&&(t="down"))):s.right===!0&&l>0&&(t="right",m<d&&(s.up===!0&&o<0?t="up":s.down===!0&&o>0&&(t="down")));let r=!1;if(t===void 0&&a===!1){if(u.event.isFirst===!0||u.event.lastDir===void 0)return{};t=u.event.lastDir,r=!0,t==="left"||t==="right"?(n.left-=l,m=0,l=0):(n.top-=o,d=0,o=0)}return{synthetic:r,payload:{evt:e,touch:u.event.mouse!==!0,mouse:u.event.mouse===!0,position:n,direction:t,isFirst:u.event.isFirst,isFinal:a===!0,duration:Date.now()-u.event.time,distance:{x:m,y:d},offset:{x:l,y:o},delta:{x:n.left-u.event.lastX,y:n.top-u.event.lastY}}}}let ea=0;var Be=St({name:"touch-pan",beforeMount(e,{value:u,modifiers:a}){if(a.mouse!==!0&&ie.has.touch!==!0)return;function n(l,o){a.mouse===!0&&o===!0?He(l):(a.stop===!0&&$e(l),a.prevent===!0&&je(l))}const t={uid:"qvtp_"+ea++,handler:u,modifiers:a,direction:Ye(a),noop:De,mouseStart(l){Ke(l,t)&&qt(l)&&(fe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ke(l,t)){const o=l.target;fe(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,o){if(ie.is.firefox===!0&&Ce(e,!0),t.lastEvt=l,o===!0||a.stop===!0){if(t.direction.all!==!0&&(o!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&je(s),l.cancelBubble===!0&&$e(s),Object.assign(s,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:s}}$e(l)}const{left:m,top:d}=Qe(l);t.event={x:m,y:d,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:d}},move(l){if(t.event===void 0)return;const o=Qe(l),m=o.left-t.event.x,d=o.top-t.event.y;if(m===0&&d===0)return;t.lastEvt=l;const s=t.event.mouse===!0,r=()=>{n(l,s);let v;a.preserveCursor!==!0&&a.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Dt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),s===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{x(),g()},50):x()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&n(l,t.event.mouse);const{payload:v,synthetic:g}=Oe(l,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=g===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(l);return}const f=Math.abs(m),y=Math.abs(d);f!==y&&(t.direction.horizontal===!0&&f>y||t.direction.vertical===!0&&f<y||t.direction.up===!0&&f<y&&d<0||t.direction.down===!0&&f<y&&d>0||t.direction.left===!0&&f>y&&m<0||t.direction.right===!0&&f>y&&m>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,o){if(t.event!==void 0){if(Le(t,"temp"),ie.is.firefox===!0&&Ce(e,!1),o===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Oe(l===void 0?t.lastEvt:l,t).payload);const{payload:m}=Oe(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,a.mouse===!0){const l=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";fe(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}ie.has.touch===!0&&fe(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,u){const a=e.__qtouchpan;a!==void 0&&(u.oldValue!==u.value&&(typeof value!="function"&&a.end(),a.handler=u.value),a.direction=Ye(u.modifiers))},beforeUnmount(e){const u=e.__qtouchpan;u!==void 0&&(u.event!==void 0&&u.end(),Le(u,"main"),Le(u,"temp"),ie.is.firefox===!0&&Ce(e,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete e.__qtouchpan)}});const Ze=150;var ta=R({name:"QDrawer",inheritAttrs:!1,props:{...Mt,...Re,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Rt,"onLayout","miniState"],setup(e,{slots:u,emit:a,attrs:n}){const t=F(),{proxy:{$q:l}}=t,o=Fe(e,l),{preventBodyScroll:m}=Nt(),{registerTimeout:d,removeTimeout:s}=Ft(),r=se(oe,P);if(r===P)return console.error("QDrawer needs to be child of QLayout"),P;let f,y=null,v;const g=V(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),x=c(()=>e.mini===!0&&g.value!==!0),$=c(()=>x.value===!0?e.miniWidth:e.width),_=V(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),p=c(()=>e.persistent!==!0&&(g.value===!0||st.value===!0));function T(i,S){if(H(),i!==!1&&r.animate(),D(0),g.value===!0){const Q=r.instances[ce.value];Q!==void 0&&Q.belowBreakpoint===!0&&Q.hide(!1),j(1),r.isContainer.value!==!0&&m(!0)}else j(0),i!==!1&&_e(!1);d(()=>{i!==!1&&_e(!0),S!==!0&&a("show",i)},Ze)}function k(i,S){K(),i!==!1&&r.animate(),j(0),D(N.value*$.value),Se(),S!==!0?d(()=>{a("hide",i)},Ze):s()}const{show:h,hide:z}=At({showing:_,hideOnRouteChange:p,handleShow:T,handleHide:k}),{addToHistory:H,removeFromHistory:K}=Wt(_,z,p),A={belowBreakpoint:g,hide:z},M=c(()=>e.side==="right"),N=c(()=>(l.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),L=V(0),E=V(!1),ae=V(!1),Ae=V($.value*N.value),ce=c(()=>M.value===!0?"left":"right"),we=c(()=>_.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:$.value:0),ke=c(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(M.value?"R":"L")!==-1||l.platform.is.ios===!0&&r.isContainer.value===!0),re=c(()=>e.overlay===!1&&_.value===!0&&g.value===!1),st=c(()=>e.overlay===!0&&_.value===!0&&g.value===!1),ct=c(()=>"fullscreen q-drawer__backdrop"+(_.value===!1&&E.value===!1?" hidden":"")),dt=c(()=>({backgroundColor:`rgba(0,0,0,${L.value*.4})`})),We=c(()=>M.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),ft=c(()=>M.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),vt=c(()=>{const i={};return r.header.space===!0&&We.value===!1&&(ke.value===!0?i.top=`${r.header.offset}px`:r.header.space===!0&&(i.top=`${r.header.size}px`)),r.footer.space===!0&&ft.value===!1&&(ke.value===!0?i.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(i.bottom=`${r.footer.size}px`)),i}),mt=c(()=>{const i={width:`${$.value}px`,transform:`translateX(${Ae.value}px)`};return g.value===!0?i:Object.assign(i,vt.value)}),ht=c(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),gt=c(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(E.value===!0?" no-transition":_.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(ke.value===!0||re.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(We.value===!0?" q-drawer--top-padding":""))),bt=c(()=>{const i=l.lang.rtl===!0?e.side:ce.value;return[[Be,kt,void 0,{[i]:!0,mouse:!0}]]}),pt=c(()=>{const i=l.lang.rtl===!0?ce.value:e.side;return[[Be,Ne,void 0,{[i]:!0,mouse:!0}]]}),yt=c(()=>{const i=l.lang.rtl===!0?ce.value:e.side;return[[Be,Ne,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function xe(){xt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}q(g,i=>{i===!0?(f=_.value,_.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&f!==!1&&(_.value===!0?(D(0),j(0),Se()):h(!1))}),q(()=>e.side,(i,S)=>{r.instances[S]===A&&(r.instances[S]=void 0,r[S].space=!1,r[S].offset=0),r.instances[i]=A,r[i].size=$.value,r[i].space=re.value,r[i].offset=we.value}),q(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&xe()}),q(()=>e.behavior+e.breakpoint,xe),q(r.isContainer,i=>{_.value===!0&&m(i!==!0),i===!0&&xe()}),q(r.scrollbarWidth,()=>{D(_.value===!0?0:void 0)}),q(we,i=>{U("offset",i)}),q(re,i=>{a("onLayout",i),U("space",i)}),q(M,()=>{D()}),q($,i=>{D(),qe(e.miniToOverlay,i)}),q(()=>e.miniToOverlay,i=>{qe(i,$.value)}),q(()=>l.lang.rtl,()=>{D()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(wt(),r.animate())}),q(x,i=>{a("miniState",i)});function D(i){i===void 0?pe(()=>{i=_.value===!0?0:$.value,D(N.value*i)}):(r.isContainer.value===!0&&M.value===!0&&(g.value===!0||Math.abs(i)===$.value)&&(i+=N.value*r.scrollbarWidth.value),Ae.value=i)}function j(i){L.value=i}function _e(i){const S=i===!0?"remove":r.isContainer.value!==!0?"add":"";S!==""&&document.body.classList[S]("q-body--drawer-toggle")}function wt(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,y=setTimeout(()=>{y=null,ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function kt(i){if(_.value!==!1)return;const S=$.value,Q=he(i.distance.x,0,S);if(i.isFinal===!0){Q>=Math.min(75,S)===!0?h():(r.animate(),j(0),D(N.value*S)),E.value=!1;return}D((l.lang.rtl===!0?M.value!==!0:M.value)?Math.max(S-Q,0):Math.min(0,Q-S)),j(he(Q/S,0,1)),i.isFirst===!0&&(E.value=!0)}function Ne(i){if(_.value!==!0)return;const S=$.value,Q=i.direction===e.side,de=(l.lang.rtl===!0?Q!==!0:Q)?he(i.distance.x,0,S):0;if(i.isFinal===!0){Math.abs(de)<Math.min(75,S)===!0?(r.animate(),j(1),D(0)):z(),E.value=!1;return}D(N.value*de),j(he(1-de/S,0,1)),i.isFirst===!0&&(E.value=!0)}function Se(){m(!1),_e(!0)}function U(i,S){r.update(e.side,i,S)}function xt(i,S){i.value!==S&&(i.value=S)}function qe(i,S){U("size",i===!0?e.miniWidth:S)}return r.instances[e.side]=A,qe(e.miniToOverlay,$.value),U("space",re.value),U("offset",we.value),e.showIfAbove===!0&&e.modelValue!==!0&&_.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),Y(()=>{a("onLayout",re.value),a("miniState",x.value),f=e.showIfAbove===!0;const i=()=>{(_.value===!0?T:k)(!1,!0)};if(r.totalWidth.value!==0){pe(i);return}v=q(r.totalWidth,()=>{v(),v=void 0,_.value===!1&&e.showIfAbove===!0&&g.value===!1?h(!1):i()})}),te(()=>{v!==void 0&&v(),y!==null&&(clearTimeout(y),y=null),_.value===!0&&Se(),r.instances[e.side]===A&&(r.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const i=[];g.value===!0&&(e.noSwipeOpen===!1&&i.push(Ct(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),bt.value)),i.push(Ue("div",{ref:"backdrop",class:ct.value,style:dt.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&_.value===!0,()=>yt.value)));const S=x.value===!0&&u.mini!==void 0,Q=[C("div",{...n,key:""+S,class:[ht.value,n.class]},S===!0?u.mini():ne(u.default))];return e.elevated===!0&&_.value===!0&&Q.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(Ue("aside",{ref:"content",class:gt.value,style:mt.value},Q,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>pt.value)),C("div",{class:"q-drawer-container"},i)}}}),aa=R({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:a}}=F(),n=se(oe,P);if(n===P)return console.error("QPageContainer needs to be child of QLayout"),P;nt($t,!0);const t=c(()=>{const l={};return n.header.space===!0&&(l.paddingTop=`${n.header.size}px`),n.right.space===!0&&(l[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(l.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(l[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},ne(u.default))}}),la=R({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:a}){const{proxy:{$q:n}}=F(),t=se(oe,P);if(t===P)return console.error("QFooter needs to be child of QLayout"),P;const l=V(parseInt(e.heightHint,10)),o=V(!0),m=V(Ie.value===!0||t.isContainer.value===!0?0:window.innerHeight),d=c(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||n.platform.is.ios&&t.isContainer.value===!0),s=c(()=>t.isContainer.value===!0?t.containerHeight.value:m.value),r=c(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return o.value===!0?l.value:0;const h=t.scroll.value.position+s.value+l.value-t.height.value;return h>0?h:0}),f=c(()=>e.modelValue!==!0||d.value===!0&&o.value!==!0),y=c(()=>e.modelValue===!0&&f.value===!0&&e.reveal===!0),v=c(()=>"q-footer q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(f.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(d.value!==!0?" hidden":""):"")),g=c(()=>{const h=t.rows.value.bottom,z={};return h[0]==="l"&&t.left.space===!0&&(z[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(z[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function x(h,z){t.update("footer",h,z)}function $(h,z){h.value!==z&&(h.value=z)}function _({height:h}){$(l,h),x("size",h)}function p(){if(e.reveal!==!0)return;const{direction:h,position:z,inflectionPoint:H}=t.scroll.value;$(o,h==="up"||z-H<100||t.height.value-s.value-z-l.value<300)}function T(h){y.value===!0&&$(o,!0),a("focusin",h)}q(()=>e.modelValue,h=>{x("space",h),$(o,!0),t.animate()}),q(r,h=>{x("offset",h)}),q(()=>e.reveal,h=>{h===!1&&$(o,e.modelValue)}),q(o,h=>{t.animate(),a("reveal",h)}),q([l,t.scroll,t.height],p),q(()=>n.screen.height,h=>{t.isContainer.value!==!0&&$(m,h)});const k={};return t.instances.footer=k,e.modelValue===!0&&x("size",l.value),x("space",e.modelValue),x("offset",r.value),te(()=>{t.instances.footer===k&&(t.instances.footer=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const h=Me(u.default,[C(ye,{debounce:0,onResize:_})]);return e.elevated===!0&&h.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),C("footer",{class:v.value,style:g.value,onFocusin:T},h)}}});const et={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function na(){const{props:e,proxy:{$q:u}}=F(),a=se(oe,P);if(a===P)return console.error("QPageSticky needs to be child of QLayout"),P;const n=c(()=>{const f=e.position;return{top:f.indexOf("top")!==-1,right:f.indexOf("right")!==-1,bottom:f.indexOf("bottom")!==-1,left:f.indexOf("left")!==-1,vertical:f==="top"||f==="bottom",horizontal:f==="left"||f==="right"}}),t=c(()=>a.header.offset),l=c(()=>a.right.offset),o=c(()=>a.footer.offset),m=c(()=>a.left.offset),d=c(()=>{let f=0,y=0;const v=n.value,g=u.lang.rtl===!0?-1:1;v.top===!0&&t.value!==0?y=`${t.value}px`:v.bottom===!0&&o.value!==0&&(y=`${-o.value}px`),v.left===!0&&m.value!==0?f=`${g*m.value}px`:v.right===!0&&l.value!==0&&(f=`${-g*l.value}px`);const x={transform:`translate(${f}, ${y})`};return e.offset&&(x.margin=`${e.offset[1]}px ${e.offset[0]}px`),v.vertical===!0?(m.value!==0&&(x[u.lang.rtl===!0?"right":"left"]=`${m.value}px`),l.value!==0&&(x[u.lang.rtl===!0?"left":"right"]=`${l.value}px`)):v.horizontal===!0&&(t.value!==0&&(x.top=`${t.value}px`),o.value!==0&&(x.bottom=`${o.value}px`)),x}),s=c(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function r(f){const y=ne(f.default);return C("div",{class:s.value,style:d.value},e.expand===!0?y:[C("div",y)])}return{$layout:a,getStickyContent:r}}var oa=R({name:"QPageScroller",props:{...et,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{...et.offset,default:()=>[18,18]}},emits:["click"],setup(e,{slots:u,emit:a}){const{proxy:{$q:n}}=F(),{$layout:t,getStickyContent:l}=na(),o=V(null);let m;const d=c(()=>t.height.value-(t.isContainer.value===!0?t.containerHeight.value:n.screen.height));function s(){return e.reverse===!0?d.value-t.scroll.value.position>e.scrollOffset:t.scroll.value.position>e.scrollOffset}const r=V(s());function f(){const $=s();r.value!==$&&(r.value=$)}function y(){e.reverse===!0?m===void 0&&(m=q(d,f)):v()}q(t.scroll,f),q(()=>e.reverse,y);function v(){m!==void 0&&(m(),m=void 0)}function g($){const _=ot(t.isContainer.value===!0?o.value:t.rootRef.value);zt(_,e.reverse===!0?t.height.value:0,e.duration),a("click",$)}function x(){return r.value===!0?C("div",{ref:o,class:"q-page-scroller",onClick:g},l(u)):null}return y(),te(v),()=>C(Lt,{name:"q-transition--fade"},x)}});const{passive:tt}=Ee,ra=["both","horizontal","vertical"];var ia=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ra.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Vt},emits:["scroll"],setup(e,{emit:u}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,l;q(()=>e.scrollTarget,()=>{d(),m()});function o(){n!==null&&n();const f=Math.max(0,Tt(t)),y=Ot(t),v={top:f-a.position.top,left:y-a.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const g=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";a.position={top:f,left:y},a.directionChanged=a.direction!==g,a.delta=v,a.directionChanged===!0&&(a.direction=g,a.inflectionPoint=a.position),u("scroll",{...a})}function m(){t=ot(l,e.scrollTarget),t.addEventListener("scroll",s,tt),s(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",s,tt),t=void 0)}function s(f){if(f===!0||e.debounce===0||e.debounce==="0")o();else if(n===null){const[y,v]=e.debounce?[setTimeout(o,e.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];n=()=>{v(y),n=null}}}const{proxy:r}=F();return q(()=>r.$q.lang.rtl,o),Y(()=>{l=r.$el.parentNode,m()}),te(()=>{n!==null&&n(),d()}),Object.assign(r,{trigger:s,getPosition:()=>a}),De}}),ua=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:a}){const{proxy:{$q:n}}=F(),t=V(null),l=V(n.screen.height),o=V(e.container===!0?0:n.screen.width),m=V({position:0,direction:"down",inflectionPoint:0}),d=V(0),s=V(Ie.value===!0?0:ze()),r=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),f=c(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),y=c(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),v=c(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function g(k){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:k.position.top,direction:k.direction,directionChanged:k.directionChanged,inflectionPoint:k.inflectionPoint.top,delta:k.delta.top};m.value=h,e.onScroll!==void 0&&a("scroll",h)}}function x(k){const{height:h,width:z}=k;let H=!1;l.value!==h&&(H=!0,l.value=h,e.onScrollHeight!==void 0&&a("scrollHeight",h),_()),o.value!==z&&(H=!0,o.value=z),H===!0&&e.onResize!==void 0&&a("resize",k)}function $({height:k}){d.value!==k&&(d.value=k,_())}function _(){if(e.container===!0){const k=l.value>d.value?ze():0;s.value!==k&&(s.value=k)}}let p=null;const T={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:s,totalWidth:c(()=>o.value+s.value),rows:c(()=>{const k=e.view.toLowerCase().split(" ");return{top:k[0].split(""),middle:k[1].split(""),bottom:k[2].split("")}}),header:ve({size:0,offset:0,space:!1}),right:ve({size:300,offset:0,space:!1}),footer:ve({size:0,offset:0,space:!1}),left:ve({size:300,offset:0,space:!1}),scroll:m,animate(){p!==null?clearTimeout(p):document.body.classList.add("q-body--layout-animate"),p=setTimeout(()=>{p=null,document.body.classList.remove("q-body--layout-animate")},155)},update(k,h,z){T[k][h]=z}};if(nt(oe,T),ze()>0){let z=function(){k=null,h.classList.remove("hide-scrollbar")},H=function(){if(k===null){if(h.scrollHeight>n.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(k);k=setTimeout(z,300)},K=function(A){k!==null&&A==="remove"&&(clearTimeout(k),z()),window[`${A}EventListener`]("resize",H)},k=null;const h=document.body;q(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Bt(()=>{K("remove")})}return()=>{const k=Me(u.default,[C(ia,{onScroll:g}),C(ye,{onResize:x})]),h=C("div",{class:r.value,style:f.value,ref:e.container===!0?void 0:t,tabindex:-1},k);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(ye,{onResize:$}),C("div",{class:"absolute-full",style:y.value},[C("div",{class:"scroll",style:v.value},[h])])]):h}}});const Pe=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:"",required:!1},link:{type:String,default:""},icon:{type:String,default:"language"},isHeader:{type:Boolean,default:!1}},setup(e){const u=Pt(),a=c(()=>{const t=u.matched;return t.length>1?t[t.length-2].path+n.link.toString():"/"}),n=e;return(t,l)=>(O(),ge(be,null,[n.isHeader==!1?(O(),I(ee,{key:0,clickable:"",to:a.value,exact:""},{default:w(()=>[n.icon?(O(),I(B,{key:0,avatar:""},{default:w(()=>[b(W,{name:n.icon},null,8,["name"])]),_:1})):J("",!0),b(B,null,{default:w(()=>[b(X,null,{default:w(()=>[G(Z(t.$t(n.title)),1)]),_:1}),n.caption?(O(),I(X,{key:0,caption:""},{default:w(()=>[G(Z(t.$t(n.caption)),1)]),_:1})):J("",!0)]),_:1})]),_:1},8,["to"])):J("",!0),n.isHeader==!0?(O(),I(ee,{key:1,class:"q-mx-none rounded-borders",style:{width:"120px"},to:a.value,exact:""},{default:w(()=>[n.icon?(O(),I(B,{key:0,style:{flex:"auto","align-items":"center"},avatar:"","no-wrap":""},{default:w(()=>[b(W,{size:"xs",name:n.icon},null,8,["name"]),b(X,{"no-wrap":"",style:{"text-align":"center","min-width":"20px"}},{default:w(()=>[G(Z(t.$t(n.title)),1)]),_:1})]),_:1})):J("",!0)]),_:1},8,["to"])):J("",!0)],64))}}),sa={setup(){const{locale:e}=it({useScope:"global"}),u=[{value:"ru-1",label:"Russian"},{value:"en-US",label:"English"}],a=V(e.value),n=()=>{const t=navigator.language||navigator.userLanguage;return u.find(l=>l.value===t)?t:u[0].value};return Y(()=>{const t=localStorage.getItem("userLocale");if(t)a.value=t;else{const l=n();a.value=l}e.value=a.value}),q(a,t=>{e.value=t,localStorage.setItem("userLocale",t)}),{currentLocale:a,localeOptions:u}}};function ca(e,u,a,n,t,l){return O(),I(ee,{class:ue(e.$q.dark.isActive?"":"bg-white")},{default:w(()=>[b(B,{avatar:"",class:ue(e.$q.screen.lt.md?"":"q-py-xs")},{default:w(()=>[b(W,{name:"language",class:ue(e.$q.dark.isActive?"":"text-black")},null,8,["class"])]),_:1},8,["class"]),b(B,null,{default:w(()=>[b(jt,{modelValue:n.currentLocale,"onUpdate:modelValue":u[0]||(u[0]=o=>n.currentLocale=o),options:n.localeOptions,label:e.$t("changelang"),dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"",style:{"min-width":"120px"}},null,8,["modelValue","options","label"])]),_:1})]),_:1},8,["class"])}var at=Kt(sa,[["render",ca]]);function da(e,u){const a=V(null),n=c(()=>e.disable===!0?null:C("span",{ref:a,class:"no-outline",tabindex:-1}));function t(l){const o=u.value;l!==void 0&&l.type.indexOf("key")===0?o!==null&&document.activeElement!==o&&o.contains(document.activeElement)===!0&&o.focus():a.value!==null&&(l===void 0||o!==null&&o.contains(l.target)===!0)&&a.value.focus()}return{refocusTargetEl:n,refocusTarget:t}}var fa={xs:30,sm:35,md:40,lg:50,xl:60};const va={...Re,...Qt,...Ut,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ma=["update:modelValue"];function ha(e,u){const{props:a,slots:n,emit:t,proxy:l}=F(),{$q:o}=l,m=Fe(a,o),d=V(null),{refocusTargetEl:s,refocusTarget:r}=da(a,d),f=Et(a,fa),y=c(()=>a.val!==void 0&&Array.isArray(a.modelValue)),v=c(()=>{const L=le(a.val);return y.value===!0?a.modelValue.findIndex(E=>le(E)===L):-1}),g=c(()=>y.value===!0?v.value!==-1:le(a.modelValue)===le(a.trueValue)),x=c(()=>y.value===!0?v.value===-1:le(a.modelValue)===le(a.falseValue)),$=c(()=>g.value===!1&&x.value===!1),_=c(()=>a.disable===!0?-1:a.tabindex||0),p=c(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(a.disable===!0?" disabled":"")+(m.value===!0?` q-${e}--dark`:"")+(a.dense===!0?` q-${e}--dense`:"")+(a.leftLabel===!0?" reverse":"")),T=c(()=>{const L=g.value===!0?"truthy":x.value===!0?"falsy":"indet",E=a.color!==void 0&&(a.keepColor===!0||(e==="toggle"?g.value===!0:x.value!==!0))?` text-${a.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${L}${E}`}),k=c(()=>{const L={type:"checkbox"};return a.name!==void 0&&Object.assign(L,{".checked":g.value,"^checked":g.value===!0?"checked":void 0,name:a.name,value:y.value===!0?a.val:a.trueValue}),L}),h=Xt(k),z=c(()=>{const L={tabindex:_.value,role:e==="toggle"?"switch":"checkbox","aria-label":a.label,"aria-checked":$.value===!0?"mixed":g.value===!0?"true":"false"};return a.disable===!0&&(L["aria-disabled"]="true"),L});function H(L){L!==void 0&&(He(L),r(L)),a.disable!==!0&&t("update:modelValue",K(),L)}function K(){if(y.value===!0){if(g.value===!0){const L=a.modelValue.slice();return L.splice(v.value,1),L}return a.modelValue.concat([a.val])}if(g.value===!0){if(a.toggleOrder!=="ft"||a.toggleIndeterminate===!1)return a.falseValue}else if(x.value===!0){if(a.toggleOrder==="ft"||a.toggleIndeterminate===!1)return a.trueValue}else return a.toggleOrder!=="ft"?a.trueValue:a.falseValue;return a.indeterminateValue}function A(L){(L.keyCode===13||L.keyCode===32)&&He(L)}function M(L){(L.keyCode===13||L.keyCode===32)&&H(L)}const N=u(g,$);return Object.assign(l,{toggle:H}),()=>{const L=N();a.disable!==!0&&h(L,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const E=[C("div",{class:T.value,style:f.value,"aria-hidden":"true"},L)];s.value!==null&&E.push(s.value);const ae=a.label!==void 0?Me(n.default,[a.label]):ne(n.default);return ae!==void 0&&E.push(C("div",{class:`q-${e}__label q-anchor--skip`},ae)),C("div",{ref:d,class:p.value,...z.value,onClick:H,onKeydown:A,onKeyup:M},E)}}var ga=R({name:"QToggle",props:{...va,icon:String,iconColor:String},emits:ma,setup(e){function u(a,n){const t=c(()=>(a.value===!0?e.checkedIcon:n.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),l=c(()=>a.value===!0?e.iconColor:null);return()=>[C("div",{class:"q-toggle__track"}),C("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[C(W,{name:t.value,color:l.value})]:void 0)]}return ha("toggle",u)}});const lt=Object.assign({name:"ThemeSwitcher"},{__name:"ThemeSwitcher",setup(e){const u=()=>{},a=rt(),n=c({get:()=>a.dark.isActive,set:t=>{a.dark.set(t),localStorage.setItem("themeDark",JSON.stringify(t))}});return Y(()=>{const t=localStorage.getItem("themeDark");t!==null?n.value=JSON.parse(t):(n.value=!0,a.dark.set(!0))}),(t,l)=>(O(),I(ga,{size:"lg","keep-color":"",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o),onChange:u,"checked-icon":"dark_mode",color:"darkLighter","unchecked-icon":"wb_sunny"},null,8,["modelValue"]))}}),ba={class:"row gt-sm"},_a=Object.assign({name:"MainLayout"},{__name:"MainLayout",props:{linksList:{type:Object}},setup(e){const u=V(!1);function a(){u.value=!u.value}const n=rt(),{t}=it(),l=()=>localStorage.getItem("cookieConsent")==="accepted",o=()=>{localStorage.setItem("cookieConsent","accepted")},m=()=>{n.notify({message:t("we_are_using_cookies"),position:"bottom-right",color:"primary",icon:"contactless",actions:[{icon:"check_circle",color:"white",round:!0,handler:()=>{o()}}]})};return Y(()=>{l()||m()}),(d,s)=>{const r=Ht("router-view");return O(),I(ua,{view:"lHh Lpr lFf"},{default:w(()=>[b(Gt,{elevated:"",class:ue(me(n).dark.isActive?"bg-dark":"bg-darkLighter")},{default:w(()=>[b(Je,{class:"container"},{default:w(()=>[me(n).screen.lt.md?(O(),I(Xe,{key:0,class:"q-mx-xs",flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a})):J("",!0),b(at),b(lt),b(Yt,{class:"gt-md non-selectable th-fontbold900 rounded-borders"},{default:w(()=>[b(ee,{class:"text-weight-regular text-white rounded-borders"},{default:w(()=>[G(Z(d.$t("myportfolio")),1)]),_:1})]),_:1}),It("div",ba,[(O(!0),ge(be,null,Ve(e.linksList,f=>(O(),I(Pe,Te({key:f.title,ref_for:!0},f,{isHeader:!0}),null,16))),128))])]),_:1})]),_:1},8,["class"]),b(ta,{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=f=>u.value=f),overlay:"",bordered:""},{default:w(()=>[b(Zt,null,{default:w(()=>[b(X,{header:""},{default:w(()=>[b(ee,{header:"",class:"sidemenu-header"},{default:w(()=>[b(B,{avatar:""},{default:w(()=>[b(W,{name:"settings",size:"sm"})]),_:1}),b(B,{class:"text-center fontStyle-Wadik"},{default:w(()=>[b(X,null,{default:w(()=>[G(Z(d.$t("settings")),1)]),_:1})]),_:1}),b(B,{avatar:""},{default:w(()=>[b(W,{name:"settings",size:"sm"})]),_:1})]),_:1})]),_:1}),b(B,null,{default:w(()=>[b(at),b(ee,null,{default:w(()=>[b(B,{avatar:""},{default:w(()=>[b(W,{name:"contrast"})]),_:1}),b(B,{avatar:""},{default:w(()=>[b(X,null,{default:w(()=>[G(Z(d.$t("changetheme")),1)]),_:1})]),_:1}),b(B,null,{default:w(()=>[b(lt)]),_:1})]),_:1})]),_:1}),b(X,{header:""},{default:w(()=>[b(ee,{header:"",class:"sidemenu-header"},{default:w(()=>[b(B,{avatar:""},{default:w(()=>[b(W,{name:"attach_file",size:"sm"})]),_:1}),b(B,{class:"text-center fontStyle-Wadik"},{default:w(()=>[b(X,null,{default:w(()=>[G(Z(d.$t("link_links")),1)]),_:1})]),_:1}),b(B,{avatar:""},{default:w(()=>[b(W,{name:"attach_file",size:"sm"})]),_:1})]),_:1})]),_:1}),(O(!0),ge(be,null,Ve(e.linksList,f=>(O(),I(Pe,Te({key:f.title,ref_for:!0},f),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),b(aa,null,{default:w(()=>[b(r)]),_:1}),me(n).screen.lt.md?(O(),I(la,{key:0,elevated:"",class:ue(me(n).dark.isActive?"bg-dark":"bg-darkLighter")},{default:w(()=>[b(Je,{class:"container flex flex-center"},{default:w(()=>[(O(!0),ge(be,null,Ve(e.linksList,f=>(O(),I(Pe,Te({key:f.title,ref_for:!0},f,{isHeader:!0}),null,16))),128))]),_:1})]),_:1},8,["class"])):J("",!0),b(oa,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:w(()=>[b(Xe,{fab:"",icon:"keyboard_arrow_up",color:"accent"})]),_:1})]),_:1})}}});export{_a as default};
