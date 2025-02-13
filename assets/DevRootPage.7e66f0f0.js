import{k as $,i as x,u as v,aF as p,c as d,x as R,h as l,a1 as S,l as m,L as Q,g as w,r as k,Y as T,_ as C,$ as s,ac as o,j as a,a4 as D,a3 as g,ab as y,a2 as j}from"./index.5eedefe4.js";import{Q as B,a as P,b as W,c as z,_ as A}from"./PortCards_Wrapper.c7c9c05a.js";import{u as I,a as E,k as N,Q as q}from"./QSelect.507beccc.js";import{Q as V}from"./QPage.8ddad9cb.js";import"./vue-i18n.e8fa45e9.js";var n=$({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:t}){const i=x(p,v);if(i===v)return console.error("QTimelineEntry needs to be child of QTimeline"),v;const r=d(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),_=d(()=>`q-timeline__dot text-${e.color||i.color}`),f=d(()=>i.layout==="comfortable"&&i.side==="left");return()=>{const c=R(t.default,[]);if(e.body!==void 0&&c.unshift(e.body),e.heading===!0){const h=[l("div"),l("div"),l(e.tag,{class:"q-timeline__heading-title"},c)];return l("div",{class:"q-timeline__heading"},f.value===!0?h.reverse():h)}let u;e.icon!==void 0?u=[l(S,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(u=[l("img",{class:"q-timeline__dot-img",src:e.avatar})]);const b=[l("div",{class:"q-timeline__subtitle"},[l("span",{},m(t.subtitle,[e.subtitle]))]),l("div",{class:_.value},u),l("div",{class:"q-timeline__content"},[l("h6",{class:"q-timeline__title"},m(t.title,[e.title]))].concat(c))];return l("li",{class:r.value},f.value===!0?b.reverse():b)}}}),F=$({name:"QTimeline",props:{...I,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:t}){const i=w(),r=E(e,i.proxy.$q);Q(p,e);const _=d(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(r.value===!0?" q-timeline--dark":""));return()=>l("ul",{class:_.value},m(t.default))}});const M={class:"q-py-xl container flex flex-center"},K={class:"q-pr-md text-h4 text-center q-pt-sm"},L={class:"q-pl-md flex"},O={class:"h6 text-subtitle2 q-pa-sm"},U={class:"container flex flex-center"},Y={class:"myworksexample thscale-q-pa-xl border-radius20"},ee=Object.assign({name:"DevRootPage"},{__name:"DevRootPage",setup(e){return k(1),(t,i)=>(T(),C(V,null,{default:s(()=>[o("div",M,[a(q,null,{default:s(()=>[a(N,null,{default:s(()=>[a(B,{flat:"",bordered:"",style:{"max-width":"650px"},class:"q-pa-md"},{default:s(()=>[a(P,{class:D(["row flex items-center",t.$q.screen.lt.sm?"justify-around":"justify-between"])},{default:s(()=>[o("div",K,g(t.$t("devPages_devRootPage_me_name")),1),o("div",L,[a(y,{class:"q-mx-sm",disable:"",round:"",color:"dark",icon:"fa-brands fa-telegram",size:"lg"}),a(y,{class:"q-mx-sm",disable:"",round:"",color:"dark",icon:"fa-brands fa-github",size:"lg"}),a(W,{class:"bg-negative text-black text-body2 shadow-alwaysBlack-20 q-pa-sm",offset:[10,10]},{default:s(()=>[j(g(t.$t("not_yet_available")),1)]),_:1})])]),_:1},8,["class"]),a(z,{color:"accent",size:"2px"}),a(P,null,{default:s(()=>[o("div",O,g(t.$t("devPages_devRootPage_me_aboutMe")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),o("div",U,[a(q,null,{default:s(()=>[a(F,{color:"secondary"},{default:s(()=>[a(n,{heading:"",body:t.$t("devPages_devRootPage_exp_general1")},null,8,["body"]),a(n,{title:t.$t("devPages_devRootPage_exp_3_roleAndWhere"),subtitle:t.$t("devPages_devRootPage_exp_3_when"),body:t.$t("devPages_devRootPage_exp_3_descr"),color:"orange",icon:"done_all"},null,8,["title","subtitle","body"]),a(n,{heading:"",body:t.$t("devPages_devRootPage_exp_general2")},null,8,["body"]),a(n,{title:t.$t("devPages_devRootPage_exp_2_roleAndWhere"),subtitle:t.$t("devPages_devRootPage_exp_2_when"),body:t.$t("devPages_devRootPage_exp_2_descr")},null,8,["title","subtitle","body"]),a(n,{title:t.$t("devPages_devRootPage_exp_1_roleAndWhere"),subtitle:t.$t("devPages_devRootPage_exp_1_when"),body:t.$t("devPages_devRootPage_exp_1_descr")},null,8,["title","subtitle","body"]),a(n,{title:t.$t("devPages_devRootPage_exp_0_roleAndWhere"),subtitle:t.$t("devPages_devRootPage_exp_0_when")},null,8,["title","subtitle"])]),_:1})]),_:1})]),o("div",null,[o("div",Y,[a(A,{howMuchWorksToShow:3,whatWorksToShow:"works"})])])]),_:1}))}});export{ee as default};
