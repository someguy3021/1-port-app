import{l as ee,c as m,h,g as R,B as ve,y as D,p as me,C as fe,D as M,E as H,J as ne,k as X,K as Y,r as N,w as B,q as he,O as ge,ah as pe,H as ae,a3 as _e,o as te,n as ue,ai as we,Q as x,R as j,S as O,ae as y,j as oe,a9 as W,aa as G,F as Z,W as J,ac as ie}from"./index.8be2ee9d.js";import{a as ce,u as de,g as re,s as se,c as be}from"./selection.9e8f8843.js";import{a as z,p as qe,v as Se,f as ye,m as Q,h as xe,Q as Ce}from"./QBtn.dffc493e.js";import{u as Pe}from"./vue-i18n.35f11ba1.js";var ke=ee({name:"QCard",props:{...ce,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:s}}=R(),l=de(e,s),o=m(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:o.value},z(n.default))}});function Ie(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,l)=>{const o=parseFloat(s);o&&(n[l]=o)}),n}var $e=ve({name:"touch-swipe",beforeMount(e,{value:n,arg:s,modifiers:l}){if(l.mouse!==!0&&D.has.touch!==!0)return;const o=l.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ie(s),direction:re(l),noop:me,mouseStart(i){se(i,t)&&fe(i)&&(M(t,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(se(i,t)){const r=i.target;M(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,r){D.is.firefox===!0&&H(e,!0);const f=ne(i);t.event={x:f.left,y:f.top,time:Date.now(),mouse:r===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){X(i);return}const r=Date.now()-t.event.time;if(r===0)return;const f=ne(i),p=f.left-t.event.x,u=Math.abs(p),g=f.top-t.event.y,d=Math.abs(g);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&d<t.sensitivity[1]){t.end(i);return}}else if(window.getSelection().toString()!==""){t.end(i);return}else if(u<t.sensitivity[2]&&d<t.sensitivity[2])return;const _=u/r,b=d/r;t.direction.vertical===!0&&u<d&&u<100&&b>t.sensitivity[0]&&(t.event.dir=g<0?"up":"down"),t.direction.horizontal===!0&&u>d&&d<100&&_>t.sensitivity[0]&&(t.event.dir=p<0?"left":"right"),t.direction.up===!0&&u<d&&g<0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<d&&g>0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>d&&p<0&&d<100&&_>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>d&&p>0&&d<100&&_>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(X(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),be(),t.styleCleanup=I=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const q=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(q,50):q()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:u,y:d}})):t.end(i)},end(i){t.event!==void 0&&(Y(t,"temp"),D.is.firefox===!0&&H(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&X(i),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const i=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";M(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}D.has.touch===!0&&M(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const s=e.__qtouchswipe;s!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&s.end(),s.handler=n.value),s.direction=re(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(Y(n,"main"),Y(n,"temp"),D.is.firefox===!0&&H(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Te(){let e=Object.create(null);return{getCache:(n,s)=>e[n]===void 0?e[n]=typeof s=="function"?s():s:e[n],setCache(n,s){e[n]=s},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Be={name:{required:!0},disable:Boolean},le={setup(e,{slots:n}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},z(n.default))}},Le={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ue=["update:modelValue","beforeTransition","transition"];function Ae(){const{props:e,emit:n,proxy:s}=R(),{getCache:l}=Te();let o,t;const i=N(null),r=N(null);function f(a){const c=e.vertical===!0?"up":"left";S((s.$q.lang.rtl===!0?-1:1)*(a.direction===c?1:-1))}const p=m(()=>[[$e,f,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),g=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),d=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),I=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);B(()=>e.modelValue,(a,c)=>{const w=C(a)===!0?$(a):-1;t!==!0&&T(w===-1?0:w<$(c)?-1:1),i.value!==w&&(i.value=w,n("beforeTransition",a,c),he(()=>{n("transition",a,c)}))});function q(){S(1)}function L(){S(-1)}function V(a){n("update:modelValue",a)}function C(a){return a!=null&&a!==""}function $(a){return o.findIndex(c=>c.props.name===a&&c.props.disable!==""&&c.props.disable!==!0)}function K(){return o.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function T(a){const c=a!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?u.value:g.value):null;r.value!==c&&(r.value=c)}function S(a,c=i.value){let w=c+a;for(;w!==-1&&w<o.length;){const k=o[w];if(k!==void 0&&k.props.disable!==""&&k.props.disable!==!0){T(a),t=!0,n("update:modelValue",k.props.name),setTimeout(()=>{t=!1});return}w+=a}e.infinite===!0&&o.length!==0&&c!==-1&&c!==o.length&&S(a,a===-1?o.length:-1)}function U(){const a=$(e.modelValue);return i.value!==a&&(i.value=a),!0}function F(){const a=C(e.modelValue)===!0&&U()&&o[i.value];return e.keepAlive===!0?[h(pe,b.value,[h(I.value===!0?l(_.value,()=>({...le,name:_.value})):le,{key:_.value,style:d.value},()=>a)])]:[h("div",{class:"q-panel scroll",style:d.value,key:_.value,role:"tabpanel"},[a])]}function v(){if(o.length!==0)return e.animated===!0?[h(ge,{name:r.value},F)]:F()}function P(a){return o=qe(z(a.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&C(c.props.name)===!0),o.length}function A(){return o}return Object.assign(s,{next:q,previous:L,goTo:V}),{panelIndex:i,panelDirectives:p,updatePanelsList:P,updatePanelIndex:U,getPanelContent:v,getEnabledPanels:K,getPanels:A,isValidPanelName:C,keepAliveProps:b,needsUniqueKeepAliveWrapper:I,goToPanelByOffset:S,goToPanel:V,nextPanel:q,previousPanel:L}}var De=ee({name:"QCarouselSlide",props:{...Be,imgSrc:String},setup(e,{slots:n}){const s=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:s.value},z(n.default))}});let E=0;const Ee={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ne=["update:fullscreen","fullscreen"];function Ve(){const e=R(),{props:n,emit:s,proxy:l}=e;let o,t,i;const r=N(!1);Se(e)===!0&&B(()=>l.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),B(()=>n.fullscreen,g=>{r.value!==g&&f()}),B(r,g=>{s("update:fullscreen",g),s("fullscreen",g)});function f(){r.value===!0?u():p()}function p(){r.value!==!0&&(r.value=!0,i=l.$el.parentNode,i.replaceChild(t,l.$el),document.body.appendChild(l.$el),E++,E===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:u},ae.add(o))}function u(){r.value===!0&&(o!==void 0&&(ae.remove(o),o=void 0),i.replaceChild(l.$el,t),r.value=!1,E=Math.max(0,E-1),E===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return _e(()=>{t=document.createElement("span")}),te(()=>{n.fullscreen===!0&&p()}),ue(u),Object.assign(l,{toggleFullscreen:f,setFullscreen:p,exitFullscreen:u}),{inFullscreen:r,toggleFullscreen:f}}const Fe=["top","right","bottom","left"],Me=["regular","flat","outline","push","unelevated"];var Oe=ee({name:"QCarousel",props:{...ce,...Le,...Ee,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Me.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Fe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ne,...Ue],setup(e,{slots:n}){const{proxy:{$q:s}}=R(),l=de(e,s);let o=null,t;const{updatePanelsList:i,getPanelContent:r,panelDirectives:f,goToPanel:p,previousPanel:u,nextPanel:g,getEnabledPanels:d,panelIndex:_}=Ae(),{inFullscreen:b}=Ve(),I=m(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),q=m(()=>e.vertical===!0?"vertical":"horizontal"),L=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),V=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${q.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${L.value}`:"")),C=m(()=>{const v=[e.prevIcon||s.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||s.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&s.lang.rtl===!0?v.reverse():v}),$=m(()=>e.navigationIcon||s.iconSet.carousel.navigationIcon),K=m(()=>e.navigationActiveIcon||$.value),T=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));B(()=>e.modelValue,()=>{e.autoplay&&S()}),B(()=>e.autoplay,v=>{v?S():o!==null&&(clearTimeout(o),o=null)});function S(){const v=we(e.autoplay)===!0?Math.abs(e.autoplay):5e3;o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,v>=0?g():u()},v)}te(()=>{e.autoplay&&S()}),ue(()=>{o!==null&&clearTimeout(o)});function U(v,P){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${L.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},d().map(P))])}function F(){const v=[];if(e.navigation===!0){const P=n["navigation-icon"]!==void 0?n["navigation-icon"]:a=>h(Q,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),A=t-1;v.push(U("buttons",(a,c)=>{const w=a.props.name,k=_.value===c;return P({index:c,maxIndex:A,name:w,active:k,btnProps:{icon:k===!0?K.value:$.value,size:"sm",...T.value},onClick:()=>{p(w)}})}))}else if(e.thumbnails===!0){const P=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(U("thumbnails",A=>{const a=A.props;return h("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+P,src:a.imgSrc||a["img-src"],onClick:()=>{p(a.name)}})}))}return e.arrows===!0&&_.value>=0&&((e.infinite===!0||_.value>0)&&v.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${q.value} absolute flex flex-center`},[h(Q,{icon:C.value[0],...T.value,onClick:u})])),(e.infinite===!0||_.value<t-1)&&v.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${q.value} absolute flex flex-center`},[h(Q,{icon:C.value[1],...T.value,onClick:g})]))),xe(n.control,v)}return()=>(t=i(n),h("div",{class:V.value,style:I.value},[ye("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>f.value)].concat(F())))}});const je={class:"q-pb-md"},Qe=["src"],We={class:"my-card-text text-h6 text-weight-regular q-pb-none"},Re={class:"flex q-gutter-x-md q-gutter-y-md q-mb-lg th-scalabletext-var1-h6"},ze={class:"q-pr-md col-6",style:{"min-width":"64px"}},Ke={class:"th-scalabletext-var1-h4"},He={class:"th-scalabletext-var1-h6"},Xe=Object.assign({name:"PortCards_Card"},{__name:"PortCards_Card",props:{work:{type:Object}},setup(e){const n=Pe();console.log(n.locale.value);const s=N(1);return(l,o)=>(x(),j(ke,{class:"q-pa-md q-ma-md shadow-6",style:{"min-width":"300px","max-width":"400px"}},{default:O(()=>{var t,i;return[y("div",je,[oe(Oe,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=r=>s.value=r),infinite:"","transition-prev":"jump-right","transition-next":"jump-left",swipeable:"",animated:"","control-color":"secondary","prev-icon":"arrow_left","next-icon":"arrow_right","navigation-icon":"radio_button_unchecked","navigation-active-icon":"radio_button_checked",navigation:"",padding:"",arrows:"",height:"300px",class:"text-white shadow-0 rounded-borders"},{default:O(()=>[(x(!0),W(Z,null,G(e.work.imgPaths,(r,f)=>(x(),j(De,{key:r,name:f+1,class:"flex justify-center"},{default:O(()=>[y("img",{src:`works_imgs/${r}.webp`,style:{height:"100%"},class:"non-selectable rounded-borders"},null,8,Qe)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),y("div",We,[y("div",Re,[(x(!0),W(Z,null,G(e.work.tags,r=>(x(),j(Q,{key:r,"no-caps":"",color:"accent",class:"q-pa-xs row rounded-borders th-scalabletext-var1-h7",style:{"max-width":"180px"},onClick:f=>l.typeOfFillter=r},{default:O(()=>[y("div",ze,J(l.$t(r==null?void 0:r[0])),1),oe(Ce,{name:r==null?void 0:r[1],size:"sm",class:"q-pl-md col-2"},null,8,["name"])]),_:2},1032,["onClick"]))),128))]),y("div",null,[y("div",Ke,J((t=e.work.title)==null?void 0:t[ie(n).locale.value]),1),y("div",He,J((i=e.work.descriptionShort)==null?void 0:i[ie(n).locale.value]),1)])])]}),_:1}))}}),Ye=[{title:{"en-US":"This website!","ru-1":"\u042D\u0442\u043E\u0442 \u0432\u0435\u0431\u0441\u0430\u0439\u0442!"},tags:[["tag_website","language"],["tag_frontend","web_asset"],["tag_design","brush"]],rating:6,hidden:!1,thumbnail:"testcommS-3",imgPaths:["testcommS-1","testcommS-2","testcommS-2","testcommS-2","testcommS-2"],descriptionShort:{"en-US":"I did this and that!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E!"},descriptionLong:{"en-US":"I did this and that sa dasd aw dad sd asdq dwqd aqd wsd qawdqw d!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E \u0432\u0444\u044B\u0444\u044B \u0432 \u0446\u0432\u0439 \u0432\u0446 \u0439\u0446\u0432 \u0439\u0446\u0432 \u044B\u0432\u0439 \u044B\u0444\u0432 \u0444\u0432 \u044B\u0444\u0432 \u044B \u0432!"}},{title:{"en-US":"Logo 1 for a client","ru-1":"\u041B\u043E\u0433\u043E 1 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"},tags:[["tag_logo","diamond"],["tag_graphics_and_vector","diamond"],["tag_design","brush"]],rating:10,hidden:!1,thumbnail:"testcommS-3",imgPaths:["testcommS-3","testcommS-3"],descriptionShort:{"en-US":"I did this and that!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E!"},descriptionLong:{"en-US":"I did this and that sa dasd aw dad sd asdq dwqd aqd wsd qawdqw d!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E \u0432\u0444\u044B\u0444\u044B \u0432 \u0446\u0432\u0439 \u0432\u0446 \u0439\u0446\u0432 \u0439\u0446\u0432 \u044B\u0432\u0439 \u044B\u0444\u0432 \u0444\u0432 \u044B\u0444\u0432 \u044B \u0432!"}},{title:{"en-US":"Logo 2 for a client","ru-1":"\u041B\u043E\u0433\u043E 2 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"},tags:[["tag_website","language"],["tag_frontend","web_asset"],["tag_design","brush"],["tag_no_code","code_off"],["tag_tilda","code_off"]],rating:10,hidden:!0,thumbnail:"testcommS-3",imgPaths:["testcommS-3","testcommS-3"],descriptionShort:{"en-US":"I did this and that!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E!"},descriptionLong:{"en-US":"I did this and that sa dasd aw dad sd asdq dwqd aqd wsd qawdqw d!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E \u0432\u0444\u044B\u0444\u044B \u0432 \u0446\u0432\u0439 \u0432\u0446 \u0439\u0446\u0432 \u0439\u0446\u0432 \u044B\u0432\u0439 \u044B\u0444\u0432 \u0444\u0432 \u044B\u0444\u0432 \u044B \u0432!"}},{title:{"en-US":"Logo 2 for a client","ru-1":"\u041B\u043E\u0433\u043E 2 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"},tags:[["tag_website","language"],["tag_frontend","web_asset"],["tag_design","brush"],["tag_no_code","code_off"],["tag_tilda","code_off"]],rating:10,hidden:!0,thumbnail:"testcommS-3",imgPaths:["testcommS-3","testcommS-3"],descriptionShort:{"en-US":"I did this and that!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E!"},descriptionLong:{"en-US":"I did this and that sa dasd aw dad sd asdq dwqd aqd wsd qawdqw d!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E \u0432\u0444\u044B\u0444\u044B \u0432 \u0446\u0432\u0439 \u0432\u0446 \u0439\u0446\u0432 \u0439\u0446\u0432 \u044B\u0432\u0439 \u044B\u0444\u0432 \u0444\u0432 \u044B\u0444\u0432 \u044B \u0432!"}},{title:{"en-US":"Logo 2 for a client","ru-1":"\u041B\u043E\u0433\u043E 2 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"},tags:[["tag_website","language"],["tag_frontend","web_asset"],["tag_design","brush"],["tag_no_code","code_off"],["tag_tilda","code_off"]],rating:10,hidden:!0,thumbnail:"testcommS-3",imgPaths:["testcommS-3","testcommS-3"],descriptionShort:{"en-US":"I did this and that!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E!"},descriptionLong:{"en-US":"I did this and that sa dasd aw dad sd asdq dwqd aqd wsd qawdqw d!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E \u0432\u0444\u044B\u0444\u044B \u0432 \u0446\u0432\u0439 \u0432\u0446 \u0439\u0446\u0432 \u0439\u0446\u0432 \u044B\u0432\u0439 \u044B\u0444\u0432 \u0444\u0432 \u044B\u0444\u0432 \u044B \u0432!"}},{title:{"en-US":"Logo 2 for a client","ru-1":"\u041B\u043E\u0433\u043E 2 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"},tags:[["tag_website","language"],["tag_frontend","web_asset"],["tag_design","brush"],["tag_no_code","code_off"],["tag_tilda","code_off"]],rating:10,hidden:!0,thumbnail:"testcommS-3",imgPaths:["testcommS-3","testcommS-3"],descriptionShort:{"en-US":"I did this and that!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E!"},descriptionLong:{"en-US":"I did this and that sa dasd aw dad sd asdq dwqd aqd wsd qawdqw d!","ru-1":"\u042F \u0441\u0434\u0435\u043B\u0430\u043B \u0438 \u0442\u043E \u0438 \u044D\u0442\u043E \u0432\u0444\u044B\u0444\u044B \u0432 \u0446\u0432\u0439 \u0432\u0446 \u0439\u0446\u0432 \u0439\u0446\u0432 \u044B\u0432\u0439 \u044B\u0444\u0432 \u0444\u0432 \u044B\u0444\u0432 \u044B \u0432!"}}],Je={class:"wrapper-cards-slider flex justify-center"},nt=Object.assign({name:"PortCards_Wrapper"},{__name:"PortCards_Wrapper",props:{howMuchWorksToShow:{type:Number,required:!1}},setup(e){const n=e,s=N([]);te(async()=>{l()});async function l(){let o=Ye;console.log(o),n.howMuchWorksToShow!==null&n.howMuchWorksToShow!==void 0?s.value=o.slice(0,n.howMuchWorksToShow):s.value=o}return(o,t)=>(x(),W("div",null,[y("div",Je,[(x(!0),W(Z,null,G(s.value,i=>(x(),j(Xe,{key:i.id,work:i},null,8,["work"]))),128))])]))}});export{ke as Q,nt as _};