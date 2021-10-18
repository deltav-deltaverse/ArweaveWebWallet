import{_ as P,q as B,m as L,i as V,r as S,t as F,u as W,v as T,w as q,x as j}from"./index.9c89d63c.js";import{D,c as m,r as E,d as k,a3 as N,i as g,e as f,f as i,j as I,l as d,k as c,T as A,a4 as U,y as G,z as M,o as n,I as p,J as v,q as C,F as z,g as J}from"./vendor.ce2f6b55.js";const H={components:{InputData:B,Button:L,Icon:V},setup(){const l=D(),a=m(""),s=E({}),e=k(()=>a.value.trim().split(/\s+/g).length>=12),w=k(()=>N(a.value)),_=m(!1),u=m(!1),t=m(null),h=async()=>{_.value=!0,a.value=U();const r=W(a.value);setTimeout(async()=>t.value=await r,1e4)},o=()=>{l.push({name:"EditWallet",query:{wallet:t.value.id}})},b=async()=>{u.value=!0;const r=W(a.value);s.enabled=!0,s.icon="loader",s.message="Importing",s.actions=[],l.push({name:"EditWallet",query:{wallet:(await r).id}})};return{passphraseInput:a,popup:s,isPassphrase:e,isValidPassphrase:w,create:h,importLedger:async()=>{const r=await q(j);l.push({name:"EditWallet",query:{wallet:r.id}})},supportsWebUSB:()=>!!window.navigator.usb,isCreatingWallet:_,isGeneratingWallet:u,createdWallet:t,goToCreatedWallet:o,importPassphrase:b,confirmPassphrase:()=>{s.enabled=!0,s.icon="",s.message="This passphrase is not valid, do you want to import it anyway?",s.actions=[{name:"Back",action:()=>s.enabled=!1},{name:"Import Passphrase",action:()=>b()}]},importFile:async r=>{if(!r)return;const x=await T(JSON.parse(await r[0].text()));l.push({name:"EditWallet",query:{wallet:x.id}})},logoArweave:S,logoLedger:F}}},y=l=>(G("data-v-d84b7b1a"),l=l(),M(),l),K={class:"add-wallet flex-column"},O={class:"card"},R=y(()=>i("h2",{style:{display:"flex","justify-content":"space-between"}},[i("span",null,"Passphrase"),i("span",null,"Key file")],-1)),Q=y(()=>i("br",null,null,-1)),X=p("Create new wallet"),Y=p("Import passphrase"),Z={style:{flex:"1 1 auto",display:"flex","flex-direction":"column","align-items":"center","justify-content":"space-evenly","margin-bottom":"var(--spacing)"}},$={class:"actions-container flex-row"},ee={class:"card"},ae=y(()=>i("h2",null,"Hardware",-1)),se=p("Ledger"),te=p("Ledger not supported for this browser");function oe(l,a,s,e,w,_){const u=g("InputData"),t=g("Button"),h=g("Icon");return n(),f("div",K,[i("div",O,[R,I(u,{modelValue:e.passphraseInput,"onUpdate:modelValue":a[0]||(a[0]=o=>e.passphraseInput=o),onFiles:e.importFile,disabled:e.isCreatingWallet,placeholder:"Import passphrase or key file"},null,8,["modelValue","onFiles","disabled"]),Q,!e.isCreatingWallet&&!e.passphraseInput.length?(n(),d(t,{key:0,onClick:a[1]||(a[1]=o=>e.create()),disabled:e.passphraseInput.length&&!e.isPassphrase,icon:e.logoArweave},{default:c(()=>[X]),_:1},8,["disabled","icon"])):e.isCreatingWallet?(n(),d(t,{key:1,disabled:!e.createdWallet,onClick:e.goToCreatedWallet,icon:e.createdWallet?"":"loader"},{default:c(()=>[p(v(e.createdWallet?"Passphrase saved? Click here to proceed":"Generating, write down the passphrase"),1)]),_:1},8,["disabled","onClick","icon"])):(n(),d(t,{key:2,disabled:!e.isPassphrase||e.isGeneratingWallet,onClick:a[2]||(a[2]=o=>e.isValidPassphrase?e.importPassphrase():e.confirmPassphrase())},{default:c(()=>[Y]),_:1},8,["disabled"])),I(A,{name:"fade-fast",mode:"in-out"},{default:c(()=>[e.popup.enabled?(n(),f("div",{key:e.popup.message,class:"overlay flex-column"},[i("div",Z,[e.popup.icon?(n(),d(h,{key:0,icon:e.popup.icon,style:{"font-size":"2em"}},null,8,["icon"])):C("",!0),p(" "+v(e.popup.message),1)]),i("div",$,[(n(!0),f(z,null,J(e.popup.actions,o=>(n(),d(t,{key:o.name,onClick:o.action},{default:c(()=>[p(v(o.name),1)]),_:2},1032,["onClick"]))),128))])])):C("",!0)]),_:1})]),i("div",ee,[ae,e.supportsWebUSB()?(n(),d(t,{key:0,onClick:a[3]||(a[3]=o=>e.importLedger()),icon:e.logoLedger},{default:c(()=>[se]),_:1},8,["icon"])):(n(),d(t,{key:1,disabled:"",icon:e.logoLedger},{default:c(()=>[te]),_:1},8,["icon"]))])])}var pe=P(H,[["render",oe],["__scopeId","data-v-d84b7b1a"]]);export{pe as default};
