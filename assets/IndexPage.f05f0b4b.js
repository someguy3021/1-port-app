import{a as g,o as d}from"./QBtn.9f00bae7.js";import{l as p,i as r,v as a,x as h,N as f,c as l,h as m,g as y,R as v,S as x,U as _,j as C,ad as Q}from"./index.b2d1afb0.js";var P=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=y(),e=r(h,a);if(e===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(r(f,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const i=l(()=>{const t=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(t,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-t+"px":s.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":s.screen.height-t+"px"}}),c=l(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:c.value,style:i.value},g(o.default))}}),$="./assets/quasar-logo-vertical.20d65235.svg";const b=Q("img",{alt:"Quasar logo",src:$,style:{width:"200px",height:"200px"}},null,-1),j=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(n){return(o,s)=>(v(),x(P,{class:"flex flex-center"},{default:_(()=>[b,C(d,{label:o.$t("failed")},null,8,["label"])]),_:1}))}});export{j as default};
