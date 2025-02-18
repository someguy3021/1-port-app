import{k as Q,i as k,u,aF as S,c as n,x,h as t,a1 as $,l as _,L as T,g as w,Y as B,_ as C,$ as l,j as a,a4 as b,ac as m,a3 as f,ab as h,a2 as j}from"./index.0ec7c745.js";import{u as P,a as z,k as D,Q as I}from"./QSelect.3cd1e233.js";import{Q as p,a as q,b as E,c as M}from"./PortCards_Wrapper.11835476.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";var H=Q({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:i}){const s=k(S,u);if(s===u)return console.error("QTimelineEntry needs to be child of QTimeline"),u;const r=n(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),o=n(()=>`q-timeline__dot text-${e.color||s.color}`),v=n(()=>s.layout==="comfortable"&&s.side==="left");return()=>{const d=x(i.default,[]);if(e.body!==void 0&&d.unshift(e.body),e.heading===!0){const y=[t("div"),t("div"),t(e.tag,{class:"q-timeline__heading-title"},d)];return t("div",{class:"q-timeline__heading"},v.value===!0?y.reverse():y)}let c;e.icon!==void 0?c=[t($,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(c=[t("img",{class:"q-timeline__dot-img",src:e.avatar})]);const g=[t("div",{class:"q-timeline__subtitle"},[t("span",{},_(i.subtitle,[e.subtitle]))]),t("div",{class:o.value},c),t("div",{class:"q-timeline__content"},[t("h6",{class:"q-timeline__title"},_(i.title,[e.title]))].concat(d))];return t("li",{class:r.value},v.value===!0?g.reverse():g)}}}),J=Q({name:"QTimeline",props:{...P,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:i}){const s=w(),r=z(e,s.proxy.$q);T(S,e);const o=n(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(r.value===!0?" q-timeline--dark":""));return()=>t("ul",{class:o.value},_(i.default))}});const R={},V={class:"q-pr-md text-h4 text-center q-pt-sm"},F={class:"q-pl-md flex"},A={class:"h6 text-subtitle2 q-pa-sm"};function K(e,i){return B(),C(I,null,{default:l(()=>[a(D,null,{default:l(()=>[a(p,{flat:"",bordered:"",style:{"max-width":"650px"},class:b(["q-pa-md",e.$q.dark.isActive?"border-solid-thickness1 border-color-darkborder1":""])},{default:l(()=>[a(q,{class:b(["row flex items-center",e.$q.screen.lt.lg?"justify-around":"justify-between"])},{default:l(()=>[m("div",V,f(e.$t("devPages_devRootPage_me_name")),1),m("div",F,[a(h,{class:"q-mx-sm",disable:"",round:"",color:"dark",icon:"fa-brands fa-telegram",size:"lg"}),a(h,{class:"q-mx-sm",disable:"",round:"",color:"dark",icon:"fa-brands fa-github",size:"lg"}),a(E,{class:"bg-negative text-black text-body2 shadow-alwaysBlack-20 q-pa-sm",offset:[10,10]},{default:l(()=>[j(f(e.$t("not_yet_available")),1)]),_:1})])]),_:1},8,["class"]),a(M,{color:"accent",size:"2px"}),a(q,null,{default:l(()=>[m("div",A,f(e.$t("devPages_devRootPage_me_aboutMe")),1)]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})}var O=N(R,[["render",K]]);export{O as M,J as Q,H as a};
