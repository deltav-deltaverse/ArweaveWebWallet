import{W as B}from"./WalletOptions.1978c231.js";import{_ as k,l as _,A as S,$ as L,o as j,a0 as v,k as y,B as D,O as V,G as U,a1 as z,a2 as $}from"./index.c54845d8.js";import{e as f,d as w,o as l,c,z as x,G as b,D as G,ao as R,u as o,a as e,F as A,p as I,X as M,i as W,x as d,R as N,a3 as O,a4 as F,a7 as i}from"./vendor.7383ae2c.js";import{I as Z}from"./y.f5fb70be.js";const q=["placeholder"],P=["value"],X={props:["modelValue","options","icon","placeholder"],emits:["update:modelValue"],setup(s,{emit:a}){const m=s,p=f({get(){return m.modelValue},set(g){a("update:modelValue",g)}}),r=w(!1);return(g,n)=>(l(),c("div",{class:N(["select input-box",{focus:r.value}])},[s.icon?(l(),x(_,{key:0,icon:s.icon,style:{left:"0"}},null,8,["icon"])):b("",!0),G(e("select",{class:"text","onUpdate:modelValue":n[0]||(n[0]=t=>W(p)?p.value=t:null),placeholder:s.placeholder,onFocus:n[1]||(n[1]=t=>r.value=!0),onBlur:n[2]||(n[2]=t=>r.value=!1)},[(l(!0),c(A,null,I(s.options,t=>(l(),c("option",{key:t,value:t.value},M(t.text),9,P))),128))],40,q),[[R,o(p)]]),d(_,{icon:"\u2965",style:{right:"0"}})],2))}};var E=k(X,[["__scopeId","data-v-daaf8004"]]);const H={fill:"currentColor","aria-hidden":"true",viewBox:"0 0 16 16","data-view-component":"true",class:"octicon octicon-mark-github v-align-middle"},T=e("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"},null,-1),Y=[T];function J(s,a){return l(),c("svg",H,Y)}var C={render:J};const K={viewBox:"0 0 71 55",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Q=e("g",{"clip-path":"url(#a)"},[e("path",{d:"M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378 31.17 31.17 0 0 0 1.1-.862.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z",fill:"currentColor"})],-1),ee=e("defs",null,[e("clipPath",{id:"a"},[e("path",{fill:"currentColor",d:"M0 0h71v55H0z"})])],-1),te=[Q,ee];function oe(s,a){return l(),c("svg",K,te)}var se={render:oe};const h=s=>(O("data-v-3247e8bf"),s=s(),F(),s),ae={class:"settings"},ne={class:"column"},le=h(()=>e("h2",null,"Wallet Settings",-1)),ce={class:"flex-column"},ie=h(()=>e("h2",null,"App Settings",-1)),re={class:"group"},ue=h(()=>e("p",null,"Gateway",-1)),de={class:"flex-row"},_e={class:"group"},pe=h(()=>e("p",null,"Currency",-1)),ve=h(()=>e("h2",null,"Links",-1)),he={class:"group"},ge={key:0},fe={href:"https://discord.gg/W6VybRqwBP"},me=i(" Discord"),ye=i(" - Send feedback, questions or talk about anything"),we={href:"https://github.com/jfbeats/ArweaveWebWallet"},xe=i(" ArweaveWebWallet"),be=i(" - Source code"),ke={href:"https://jfbeats.github.io/ArweaveWalletConnector"},Se=i(" ArweaveWalletConnector"),Ve=i(" - Integrate the universal connector to use web wallets like arweave.app inside your own applications"),$e={href:"https://arwiki.wiki",target:"_blank"},Ae=i(" Arwiki"),Ie=i(" - Information about Arweave"),We={setup(s){const a=w(""),m=()=>{a.value?$(a.value):$(),localStorage.setItem("gateway",a.value),a.value=""},p=f(()=>{if(!(!a.value&&S.gatewayURL.includes(L.host)))return{run:m,icon:a.value?Z:j}}),r=f({get(){return{currency:v.settings.currency,provider:v.settings.provider}},set(n){v.settings.currency=n.currency,v.settings.provider=n.provider}}),g=f(()=>y.value.length);return w(""),(n,t)=>(l(),c("div",ae,[e("div",ne,[le,e("div",ce,[(l(!0),c(A,null,I(o(y),u=>(l(),x(B,{class:"wallet-options",key:u.id,wallet:u},null,8,["wallet"]))),128)),o(y).length?b("",!0):(l(),x(D,{key:0,style:{"font-size":"1.5em",background:"var(--background3)"},onClick:t[0]||(t[0]=u=>n.$router.push({name:"AddWallet"})),icon:"+"}))]),ie,e("div",re,[ue,e("div",de,[d(U,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=u=>a.value=u),actions:[o(p)],placeholder:o(S).gatewayURL,icon:o(V),style:{flex:"1 1 0"}},null,8,["modelValue","actions","placeholder","icon"])])]),e("div",_e,[pe,d(E,{modelValue:o(r),"onUpdate:modelValue":t[2]||(t[2]=u=>W(r)?r.value=u:null),options:o(z),icon:o(v).symbol},null,8,["modelValue","options","icon"])]),ve,e("div",he,[o(g)?(l(),c("p",ge,[e("a",fe,[d(_,{icon:o(se),style:{"vertical-align":"text-top"}},null,8,["icon"]),me]),ye])):b("",!0),e("p",null,[e("a",we,[d(_,{icon:o(C),style:{"vertical-align":"text-top"}},null,8,["icon"]),xe]),be]),e("p",null,[e("a",ke,[d(_,{icon:o(C),style:{"vertical-align":"text-top"}},null,8,["icon"]),Se]),Ve]),e("p",null,[e("a",$e,[d(_,{icon:o(V),style:{"vertical-align":"text-top"}},null,8,["icon"]),Ae]),Ie])])])]))}};var De=k(We,[["__scopeId","data-v-3247e8bf"]]);export{De as default};
//# sourceMappingURL=Settings.949854e2.js.map
