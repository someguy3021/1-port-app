import{l as g,i as r,t,u as p,J as h,c as s,h as d,g as f}from"./index.9285ddd4.js";import{a as y}from"./QBtn.2ba7317e.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:i}){const{proxy:{$q:o}}=f(),e=r(p,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(r(h,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=s(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return a.styleFn(n,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":o.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":o.screen.height-n+"px"}}),u=s(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:u.value,style:c.value},y(i.default))}});export{Q};
