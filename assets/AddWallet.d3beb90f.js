import{a0 as j,d as p,r as D,e as F,c as y,a as s,q as w,x as m,s as d,u as o,T as L,F as C,k as W,a1 as M,a2 as O,o as i,a5 as c,V as v,D as P}from"./vendor.864071fb.js";import{_ as G,H,L as J,B as _,J as K,K as R,M as V,N as U,O as $,w as z,P as Q,m as X,Q as Y,R as Z}from"./index.a2a3ccf6.js";const g=h=>(M("data-v-12f5b215"),h=h(),O(),h),ee={class:"add-wallet flex-column"},ae={class:"card"},se=g(()=>s("h2",{style:{display:"flex","justify-content":"space-between"}},[s("span",null,"Passphrase"),s("span",null,"Key file")],-1)),te={class:"flex-column"},le=g(()=>s("div",null,null,-1)),ne=c("Create new wallet"),oe=c("Import passphrase"),ie={style:{flex:"1 1 auto",display:"flex","flex-direction":"column","align-items":"center","justify-content":"space-evenly","margin-bottom":"var(--spacing)"}},de={class:"actions-container flex-row"},ce={class:"card"},re=g(()=>s("h2",null,"Hardware",-1)),ue={class:"card"},pe=g(()=>s("h2",null,"Address Only",-1)),me={setup(h){const r=j(),n=p(""),k=p(""),e=D({}),b=F(()=>n.value.trim().split(/\s+/g).length>=12),f=p(!1),x=p(!1),u=p(null),A=async()=>{f.value=!0,n.value=await R();const t=V(n.value);setTimeout(async()=>u.value=await t,1e4)},B=()=>{r.push({name:"EditWallet",query:{wallet:u.value}})},I=async()=>{x.value=!0;const t=V(n.value);e.enabled=!0,e.icon="loader",e.message="Importing",e.actions=[],r.push({name:"EditWallet",query:{wallet:await t}})},S=async()=>{if(await U(n.value))return I();e.enabled=!0,e.icon="",e.message="This passphrase is not valid, do you want to import it anyway?",e.actions=[{name:"Back",action:()=>e.enabled=!1},{name:"Import Passphrase",action:()=>I()}]},q=async t=>{if(!t)return;const l=await $(JSON.parse(await t[0].text()));r.push({name:"EditWallet",query:{wallet:l}})},E=async t=>{const l=await Y(t);r.push({name:"EditWallet",query:{wallet:l}})},N=[Z],T={icon:z,run:async()=>{const t=await Q(k.value);r.push({name:"EditWallet",query:{wallet:t}})}};return(t,l)=>(i(),y("div",ee,[s("div",ae,[se,s("div",te,[w(H,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a),onFiles:q,disabled:f.value,placeholder:"Import passphrase or key file"},null,8,["modelValue","disabled"]),le,!f.value&&!n.value.length?(i(),m(_,{key:0,onClick:l[1]||(l[1]=a=>A()),disabled:n.value.length&&!o(b),icon:o(J)},{default:d(()=>[ne]),_:1},8,["disabled","icon"])):f.value?(i(),m(_,{key:1,disabled:u.value==null,onClick:B,icon:u.value==null?"loader":""},{default:d(()=>[c(v(u.value==null?"Generating, write down the passphrase":"Passphrase saved? Click here to proceed"),1)]),_:1},8,["disabled","icon"])):(i(),m(_,{key:2,disabled:!o(b)||x.value,onClick:S},{default:d(()=>[oe]),_:1},8,["disabled"]))]),w(L,{name:"fade-fast",mode:"in-out"},{default:d(()=>[o(e).enabled?(i(),y("div",{key:o(e).message,class:"overlay flex-column"},[s("div",ie,[o(e).icon?(i(),m(X,{key:0,icon:o(e).icon,style:{"font-size":"2em"}},null,8,["icon"])):P("",!0),c(" "+v(o(e).message),1)]),s("div",de,[(i(!0),y(C,null,W(o(e).actions,a=>(i(),m(_,{key:a.name,onClick:a.action},{default:d(()=>[c(v(a.name),1)]),_:2},1032,["onClick"]))),128))])])):P("",!0)]),_:1})]),s("div",ce,[re,(i(),y(C,null,W(N,a=>w(_,{key:a.name,disabled:!a.isSupported,onClick:ve=>E(a),icon:a.icon},{default:d(()=>[c(v(a.name)+" "+v(a.isSupported?"":" not supported for this browser"),1)]),_:2},1032,["disabled","onClick","icon"])),64))]),s("div",ue,[pe,w(K,{modelValue:k.value,"onUpdate:modelValue":l[2]||(l[2]=a=>k.value=a),actions:[T]},null,8,["modelValue","actions"])])]))}};var fe=G(me,[["__scopeId","data-v-12f5b215"]]);export{fe as default};
//# sourceMappingURL=AddWallet.d3beb90f.js.map
