import{_ as d,c,J as i,K as r}from"./index.6cd71809.js";import{o as s,c as a,a as e,q as n,z as u,L as v}from"./vendor.ff995856.js";const w={class:"wallet-options"},_={class:"left"},f={class:"profile-info"},m={class:"content"},k={class:"bottom"},p={props:{wallet:Object},setup(t){return(x,l)=>(s(),a("div",w,[e("div",_,[n(c,{class:"profile",address:t.wallet.key},null,8,["address"]),e("div",f,[n(i,{wallet:t.wallet},null,8,["wallet"])])]),e("div",m,[e("div",k,[e("div",null,[t.wallet.download?(s(),a("button",{key:0,onClick:l[0]||(l[0]=(...o)=>t.wallet.download&&t.wallet.download(...o))},"Download")):u("",!0)]),e("div",null,[e("button",{onClick:l[1]||(l[1]=o=>v(r)(t.wallet))},"Delete")])])])]))}};var y=d(p,[["__scopeId","data-v-d39499ee"]]);export{y as W};
